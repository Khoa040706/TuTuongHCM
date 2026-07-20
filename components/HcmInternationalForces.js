"use client";
import React, { useState } from "react";
import { 
  Globe2, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Key, 
  Compass,
  Bookmark,
  Layers,
  Users,
  ShieldCheck,
  Flag,
  Globe
} from "lucide-react";

export default function HcmInternationalForces() {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);

  const frontLevels = [
    { level: "Tầng 1", title: "Mặt trận đại đoàn kết dân tộc", desc: "Nền tảng sức mạnh bên trong, quy tụ toàn thể nhân dân Việt Nam vào khối thống nhất." },
    { level: "Tầng 2", title: "Mặt trận đoàn kết Việt Nam - Lào - Campuchia", desc: "Liên minh nhân dân ba nước Đông Dương cùng chung kẻ thù, kề vai sát cánh chống xâm lược." },
    { level: "Tầng 3", title: "Mặt trận nhân dân Á - Phi đoàn kết với VN", desc: "Mở rộng phong trào đấu tranh giải phóng dân tộc chống chủ nghĩa thực dân ở các nước châu Á, châu Phi." },
    { level: "Tầng 4", title: "Mặt trận nhân dân thế giới đoàn kết với VN", desc: "Tranh thủ các nước xã hội chủ nghĩa, nhân dân tiến bộ Pháp, Mỹ và toàn thế giới ủng hộ Việt Nam." }
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
            <span>Chương V — Mục II.2</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            2. LỰC LƯỢNG ĐOÀN KẾT QUỐC TẾ VÀ HÌNH THỨC TỔ CHỨC
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            3 Nhóm lực lượng chiến lược cần đoàn kết &bull; Các hình thức tổ chức & Sơ đồ 4 Tầng Mặt trận Quốc tế sâu rộng từ trong nước ra toàn cầu.
          </p>
        </div>
      </div>

      {/* 3 THẺ LỰC LƯỢNG CHIẾN LƯỢC (3 GLOBAL FORCE CARDS) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <Users className="w-5 h-5 text-amber-600" />
          <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
            a) 3 NHÓM LỰC LƯỢNG CHIẾN LƯỢC CẦN ĐOÀN KẾT QUỐC TẾ
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-200 text-amber-900">
              Lực lượng 1
            </span>
            <h5 className="font-extrabold text-sm md:text-base text-stone-900">
              Phong trào Công nhân & Công nhân quốc tế
            </h5>
            <p className="text-stone-700 text-xs leading-relaxed text-justify">
              Bảo đảm vững chắc cho thắng lợi của chủ nghĩa cộng sản. Hồ Chí Minh nêu cao tinh thần: <em>&ldquo;Bốn phương vô sản đều là anh em.&rdquo;</em>
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-emerald-200 text-emerald-900">
              Lực lượng 2
            </span>
            <h5 className="font-extrabold text-sm md:text-base text-stone-900">
              Phong trào Giải phóng Dân tộc
            </h5>
            <p className="text-stone-700 text-xs leading-relaxed text-justify">
              Đoàn kết các dân tộc bị áp bức, thành lập <em>&ldquo;Liên minh phương Đông tương lai&rdquo;</em> và gắn kết cách mạng thuộc địa với vô sản chính quốc.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-blue-200 text-blue-900">
              Lực lượng 3
            </span>
            <h5 className="font-extrabold text-sm md:text-base text-stone-900">
              Các lực lượng Hòa bình, Dân chủ, Tiến bộ
            </h5>
            <p className="text-stone-700 text-xs leading-relaxed text-justify">
              Gắn đấu tranh Việt Nam với mục tiêu hòa bình, tự do, công lý; tranh thủ sự ủng hộ của cả nhân dân tiến bộ Pháp và Mỹ.
            </p>
          </div>

        </div>
      </div>

      {/* SƠ ĐỒ ĐỒ HỌA 4 TẦNG MẶT TRẬN QUỐC TẾ (4-LEVEL CONCENTRIC FRONT DIAGRAM) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-600" />
            <h4 className="font-extrabold text-sm md:text-base text-stone-900 uppercase tracking-wider">
              b) SƠ ĐỒ CẤU TRÚC 4 TẦNG MẶT TRẬN ĐOÀN KẾT QUỐC TẾ
            </h4>
          </div>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            Chạm từng tầng để xem quy mô
          </span>
        </div>

        {/* 4 Levels Diagram Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {frontLevels.map((lvl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveLevelIdx(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeLevelIdx === idx
                  ? "bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]"
                  : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${activeLevelIdx === idx ? "bg-white/20 text-white" : "bg-amber-100 text-amber-900"}`}>
                  {lvl.level}
                </span>
              </div>
              <h6 className="font-bold text-xs md:text-sm line-clamp-1">{lvl.title}</h6>
            </button>
          ))}
        </div>

        {/* Selected Level Display */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded">
              {frontLevels[activeLevelIdx].level}
            </span>
            <span className="text-[11px] font-bold text-stone-500">Mốc {activeLevelIdx + 1}/4</span>
          </div>
          <h5 className="font-extrabold text-base md:text-lg text-stone-900">
            {frontLevels[activeLevelIdx].title}
          </h5>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify font-medium">
            {frontLevels[activeLevelIdx].desc}
          </p>
        </div>

      </div>

      {/* CHI TIẾT NỘI DUNG NGUYÊN VĂN MỤC II.2a & II.2b */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
        
        {/* SUBSECTION A CHI TIẾT */}
        <div className="space-y-3 border-b border-stone-100 pb-6 text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
            a) Chi tiết các lực lượng cần đoàn kết
          </h4>

          <div className="space-y-3 pl-2 md:pl-4">
            <div className="space-y-1">
              <p className="font-bold text-stone-900">• Đối với phong trào cộng sản và công nhân quốc tế:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sự đoàn kết giữa <strong>&ldquo;giai cấp công nhân quốc tế là sự bảo đảm vững chắc&rdquo;</strong> cho thắng lợi của chủ nghĩa cộng sản.</li>
                <li>Chủ trương đoàn kết giai cấp công nhân, đoàn kết giữa các đảng cộng sản xuất phát từ <strong>&ldquo;tầm tất yếu về vai trò của giai cấp công nhân&rdquo;</strong> trong thời đại ngày nay.</li>
                <li>Hồ Chí Minh cho rằng: <strong>&ldquo;chủ nghĩa tư bản là một lực lượng phản động quốc tế&rdquo;</strong>, là <strong>&ldquo;kẻ thù chung của nhân dân lao động toàn thế giới&rdquo;</strong>.</li>
                <li>
                  Chỉ có sức mạnh của <strong>&ldquo;sự đoàn kết, nhất trí, tình nghĩa và tương thân&rdquo;</strong> của liên minh toàn thế giới theo tinh thần <strong>&ldquo;bốn phương vô sản đều là anh em&rdquo;</strong> mới có thể chống lại được âm mưu thâm độc của chủ nghĩa đế quốc thực dân.
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-stone-900">• Đối với phong trào đấu tranh giải phóng dân tộc:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Từ rất sớm, Hồ Chí Minh thấy rõ <strong>&ldquo;làn sóng mạnh mẽ dân tộc&rdquo;</strong> của các nước đế quốc.</li>
                <li>
                  Người kêu gọi Quốc tế Cộng sản và những nhân dân tiến bộ làm <strong>&ldquo;cho các dân tộc bị áp bức hiểu biết nhau hơn và đoàn kết lại&rdquo;</strong> để đặt cơ sở cho một <strong>&ldquo;Liên minh phương Đông tương lai&rdquo;</strong>.
                </li>
                <li>
                  Để tăng cường đoàn kết giữa cách mạng thuộc địa và cách mạng vô sản chính quốc, Hồ Chí Minh đề nghị Quốc tế Cộng sản: <em>&ldquo;làm cho đội quân tiên phong của lao động Thuộc địa tiếp xúc trực tiếp với giai cấp vô sản phương Tây để nuôi dưỡng cho một sự hợp tác thực sự sau này; chỉ có sự hợp tác này mới bảo đảm cho giai cấp công nhân quốc tế giành thắng lợi cuối cùng&rdquo;</em>.
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-stone-900">• Đối với các lực lượng tiến bộ, yêu chuộng hòa bình, dân chủ, tự do và công lý:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Hồ Chí Minh tìm mọi cách để thực hiện đoàn kết.</li>
                <li>
                  Trong xu thế mới của thời đại, Hồ Chí Minh <strong>&ldquo;gắn cuộc đấu tranh vì độc lập ở Việt Nam với mục tiêu bảo vệ hòa bình, tự do, công bằng và bình đẳng&rdquo;</strong> để tập hợp và tranh thủ sự ủng hộ của các lực lượng tiến bộ trên thế giới.
                </li>
                <li>
                  Giữ vững độc lập, tự do, hòa bình, công lý là <strong>&ldquo;thước đo giá trị cao nhất của những người tiến bộ&rdquo;</strong>, tạo nên những tầng nấc ủng hộ mạnh mẽ.
                </li>
                <li>
                  Nhiều lần Hồ Chí Minh khẳng định: <em>&ldquo;chính vì biết kết hợp phong trào cách mạng nước ta với phong trào cách mạng của giai cấp công nhân và của các dân tộc bị áp bức&rdquo;</em> mà Đảng đã vượt qua được mọi khó khăn, đưa cách mạng đến thắng lợi vẻ vang.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SUBSECTION B CHI TIẾT */}
        <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed text-justify">
          <h4 className="text-lg md:text-xl font-bold font-playfair text-stone-900 leading-snug">
            b) Hình thức tổ chức đoàn kết quốc tế
          </h4>

          {/* Diamond Quote Tính nguyên tắc */}
          <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent border border-amber-500/25 shadow-sm overflow-hidden my-3">
            <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
            <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
              &ldquo;Đoàn kết quốc tế trong tư tưởng Hồ Chí Minh không phải là vấn đề sách lược, nhất thời đoạn chính trị nhất thời, mà là vấn đề có tính nguyên tắc, một đòi hỏi khách quan của cách mạng Việt Nam.&rdquo;
            </p>
          </div>

          <div className="space-y-2 pl-2 md:pl-4">
            <p className="font-bold text-stone-900">• Mặt trận giao tiếp các tổ chức, mặt trận quốc tế:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                Từ những <strong>&ldquo;năm 20 của thế kỷ XX&rdquo;</strong>: sáng lập <strong>&ldquo;Hội Liên hiệp thuộc địa&rdquo;</strong> tại Pháp, tham gia sáng lập <strong>&ldquo;Hội Liên hiệp các dân tộc bị áp bức&rdquo;</strong> tại Trung Quốc &rarr; hình thành sơ khai của mặt trận thống nhất các dân tộc bị áp bức theo xu hướng vô sản, <strong>&ldquo;lần đầu tiên xuất hiện trong lịch sử phong trào đấu tranh giải phóng dân tộc&rdquo;</strong>.
              </li>
              <li>
                <strong>Năm 1936</strong>: Hồ Chí Minh đưa ra quan điểm về thành lập <strong>&ldquo;Mặt trận Thống nhất nhân dân phản đế Đông Dương&rdquo;</strong> để tập hợp quần chúng nhân dân chính quyền và nhân dân thuộc địa chống chủ nghĩa đế quốc.
              </li>
              <li>
                <strong>Năm 1941</strong>: Thống nhất thành lập <strong>&ldquo;Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh)&rdquo;</strong>; giúp Lào và Campuchia thành lập Mặt trận riêng.
              </li>
              <li>
                Trong cuộc kháng chiến chống Pháp và Mỹ: Hồ Chí Minh chủ trương thành lập <strong>&ldquo;Mặt trận nhân dân ba nước Đông Dương&rdquo;</strong>.
              </li>
            </ul>
          </div>

          <div className="space-y-2 pl-2 md:pl-4">
            <p className="font-bold text-stone-900">• Đối với các dân tộc trên bán đảo Đông Dương & Quốc tế:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cả ba dân tộc (Việt Nam - Lào - Campuchia) là <strong>&ldquo;hàng xóm gần gũi&rdquo;</strong>, có nhiều điểm tương đồng về <strong>&ldquo;lịch sử, văn hóa&rdquo;</strong> và cùng chung một kẻ thù là <strong>&ldquo;thực dân Pháp&rdquo;</strong>.</li>
              <li>Đối với Trung Quốc: Luôn tôn trọng giữ gìn quan hệ <strong>&ldquo;đoàn kết hữu nghị, hợp tác nhiều mặt&rdquo;</strong>.</li>
              <li>
                Người chỉ rõ: <em>&ldquo;các dân tộc châu Á có độc lập thì mới hòa bình thế giới mới thực hiện được&rdquo;</em> &rarr; góp phần đặt cơ sở cho sự ra đời của <strong>&ldquo;Mặt trận nhân dân Á - Phi đoàn kết với Việt Nam&rdquo;</strong>.
              </li>
              <li>
                Trong kháng chiến chống Pháp và chống Mỹ: Hoạt động ngoại giao không mệt mỏi đã hình thành <strong>&ldquo;Mặt trận nhân dân thế giới đoàn kết với Việt Nam chống đế quốc xâm lược&rdquo;</strong> (tranh thủ cả nhân dân yêu chuộng hòa bình Pháp và Mỹ).
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC II.2 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-emerald-400/5 to-blue-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC II.2 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Đây là <strong>&ldquo;sự phát triển rực rỡ nhất và thắng lợi to lớn nhất&rdquo;</strong> của tư tưởng Hồ Chí Minh về đại đoàn kết.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Đoàn kết quốc tế trong tư tưởng Hồ Chí Minh <strong>&ldquo;không phải là sách lược hay thủ đoạn chính trị nhất thời&rdquo;</strong> mà là <strong>&ldquo;vấn đề có tính nguyên tắc&rdquo;</strong>.</span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC II.2:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Hội Liên hiệp thuộc địa (Pháp); Hội Liên hiệp các dân tộc bị áp bức (Trung Quốc); Mặt trận thống nhất của nhân dân chính quốc và thuộc địa (1924); Mặt trận Việt Minh (1941); Mặt trận nhân dân ba nước Đông Dương; Bốn tầng mặt trận đoàn kết quốc tế; &ldquo;Bốn phương vô sản đều là anh em&rdquo;.
          </p>
        </div>

      </div>

    </div>
  );
}
