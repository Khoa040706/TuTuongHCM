"use client";
import React from "react";
import { Sparkles, Quote, Shield, CheckCircle2, Award, Landmark, HelpCircle } from "lucide-react";

export default function HcmStateClassNature() {
  const classNaturePoints = [
    {
      id: "Một là",
      title: "Vị trí & vai trò cầm quyền của Đảng",
      desc: "Đảng Cộng sản Việt Nam giữ vị trí và vai trò cầm quyền. Lời nói đầu Hiến pháp năm 1959 khẳng định: <em>&quot;Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên nền tảng liên minh công nông, do giai cấp công nhân lãnh đạo&quot;</em>. Nòng cốt của nhân dân là liên minh công - nông - trí thức.",
      extra: "<strong>Đảng cầm quyền bằng 3 phương thức:</strong><br/>(1) Bằng đường lối, quan điểm, chủ trương để Nhà nước thể chế hóa thành pháp luật, chính sách, kế hoạch.<br/>(2) Bằng hoạt động của tổ chức đảng và đảng viên trong bộ máy, cơ quan nhà nước.<br/>(3) Bằng công tác kiểm tra."
    },
    {
      id: "Hai là",
      title: "Tính định hướng xã hội chủ nghĩa",
      desc: "Bản chất giai cấp thể hiện ở mục tiêu đưa đất nước đi lên CNXH và CNCS. Đây là mục tiêu cách mạng nhất quán của Hồ Chí Minh.",
      extra: "Giành chính quyền, lập nên Nhà nước Việt Nam mới là để giai cấp công nhân và nhân dân lao động có tổ chức mạnh mẽ thực hiện mục tiêu cao cả đó."
    },
    {
      id: "Ba là",
      title: "Nguyên tắc tập trung dân chủ",
      desc: "Thể hiện trực tiếp ở nguyên tắc tổ chức và hoạt động cốt lõi của bộ máy Nhà nước: nguyên tắc tập trung dân chủ.",
      extra: "Hồ Chí Minh đặc biệt chú ý cả hai mặt: <strong>&quot;dân chủ&quot;</strong> và <strong>&quot;tập trung&quot;</strong>. Vừa phát huy cao độ dân chủ, vừa phát huy cao độ tập trung. Nhà nước phải tập trung thống nhất quyền lực để mọi quyền lực thuộc về nhân dân."
    }
  ];

  const unityPoints = [
    {
      id: "Một là",
      title: "Kết quả đấu tranh của toàn dân tộc",
      desc: "Nhà nước mới ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của nhiều thế hệ người Việt Nam, của toàn thể dân tộc từ giữa thế kỷ XIX.",
      extra: "Đảng Cộng sản Việt Nam ra đời lãnh đạo, với chiến lược đại đoàn kết đúng đắn đã chiến thắng ngoại xâm, lập nên Nhà nước Việt Nam Dân chủ Cộng hòa — nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á. Nhà nước mới không phải của riêng giai cấp nào, mà thuộc về toàn thể nhân dân."
    },
    {
      id: "Hai là",
      title: "Mục tiêu vì quyền lợi nhân dân",
      desc: "Ngay từ khi ra đời đã xác định mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi dân tộc làm nền tảng.",
      extra: "Quyền lợi của giai cấp công nhân thống nhất với lợi ích của nhân dân lao động và toàn dân tộc. Nhà nước là người đại diện, bảo vệ, đấu tranh cho lợi ích giai cấp công nhân, nhân dân lao động và toàn dân tộc."
    },
    {
      id: "Ba là",
      title: "Đảm đương nhiệm vụ toàn dân tộc",
      desc: "Nhà nước đảm đương nhiệm vụ toàn dân tộc giao phó: Tổ chức nhân dân tiến hành kháng chiến bảo vệ độc lập, tự do.",
      extra: "Xây dựng nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh, góp phần tích cực vào sự phát triển tiến bộ của thế giới. Con đường quá độ lên CNXH, đi lên CNCS là con đường Hồ Chí Minh và Đảng đã xác định, cũng là sự nghiệp của chính Nhà nước."
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER BLOCK */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.1.a
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Tiểu mục 1 — Phần a</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          BẢN CHẤT GIAI CẤP CỦA NHÀ NƯỚC
        </h4>
      </div>

      {/* QUANT DIEM CHUNG */}
      <div className="bg-indigo-50/30 border border-indigo-150 p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-2">
          <Landmark className="w-5 h-5 text-indigo-650" />
          <h5 className="font-extrabold text-indigo-900 text-xs md:text-sm uppercase tracking-wider">
            Quan Điểm Chung Của Hồ Chí Minh
          </h5>
        </div>
        
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Nhà nước Việt Nam là <strong>&quot;nhà nước dân chủ&quot;</strong>, nhưng không phải &quot;nhà nước toàn dân&quot; hiểu theo nghĩa phi giai cấp. Hồ Chí Minh khẳng định rõ: Nhà nước ở đâu, bao giờ cũng mang bản chất của một giai cấp nhất định.
        </p>

        {/* Quote Card */}
        <div className="relative overflow-hidden rounded-2xl bg-indigo-50/50 border-l-4 border-indigo-600 p-5 shadow-sm">
          <Quote className="absolute top-2 left-2 w-10 h-10 text-indigo-600 opacity-10 pointer-events-none z-0" />
          <div className="relative z-10 space-y-3 pl-4">
            <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
              &quot;Nhà nước Việt Nam mới — Nhà nước Việt Nam Dân chủ Cộng hòa (nay là Cộng hòa xã hội chủ nghĩa Việt Nam) là nhà nước mang bản chất giai cấp công nhân.&quot;
            </p>
            <div className="flex items-center justify-end text-[10px] font-semibold text-indigo-800 font-sans tracking-wide">
              <span>— Hồ Chí Minh, Quan điểm về bản chất Nhà nước Việt Nam</span>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE 1: 3 PHUONG DIEN BIEU HIEN */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <Shield className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            3 Phương Diện Biểu Hiện Bản Chất Giai Cấp Công Nhân
          </h5>
        </div>

        <div className="overflow-hidden rounded-2xl border border-indigo-100 shadow-sm">
          <table className="w-full text-left border-collapse bg-indigo-50/5">
            <thead>
              <tr className="bg-indigo-50 border-b border-indigo-100">
                <th className="px-4 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider w-24 text-center">Phương Diện</th>
                <th className="px-5 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider w-1/3">Tiêu Đề Cốt Lõi</th>
                <th className="px-5 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider">Nội Dung Chi Tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100/60">
              {classNaturePoints.map((pt, idx) => (
                <tr key={idx} className="hover:bg-indigo-50/20 transition-colors">
                  <td className="px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase">
                      {pt.id}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-xs font-bold text-stone-900 font-sans">
                    {pt.title}
                  </td>
                  <td className="px-5 py-4 text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify space-y-2">
                    <p dangerouslySetInnerHTML={{ __html: pt.desc }} />
                    <p className="bg-stone-50 border border-stone-200/50 p-2.5 rounded-lg text-stone-550" dangerouslySetInnerHTML={{ __html: pt.extra }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TABLE 2: 3 BIEU HIEN THONG NHAT */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-150 pb-2">
          <CheckCircle2 className="w-4.5 h-4.5 text-indigo-650" />
          <h5 className="font-extrabold text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            3 Biểu Hiện Thống Nhất Giữa Bản Chất Giai Cấp & Tính Dân Tộc, Nhân Dân
          </h5>
        </div>

        <div className="overflow-hidden rounded-2xl border border-indigo-100 shadow-sm">
          <table className="w-full text-left border-collapse bg-indigo-50/5">
            <thead>
              <tr className="bg-indigo-50 border-b border-indigo-100">
                <th className="px-4 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider w-24 text-center">Biểu Hiện</th>
                <th className="px-5 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider w-1/3">Tiêu Đề Cốt Lõi</th>
                <th className="px-5 py-3 text-[11px] md:text-xs font-black text-indigo-900 uppercase tracking-wider">Nội Dung Chi Tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100/60">
              {unityPoints.map((pt, idx) => (
                <tr key={idx} className="hover:bg-indigo-50/20 transition-colors">
                  <td className="px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase">
                      {pt.id}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-xs font-bold text-stone-900 font-sans">
                    {pt.title}
                  </td>
                  <td className="px-5 py-4 text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify space-y-2">
                    <p dangerouslySetInnerHTML={{ __html: pt.desc }} />
                    <p className="bg-stone-50 border border-stone-200/50 p-2.5 rounded-lg text-stone-550" dangerouslySetInnerHTML={{ __html: pt.extra }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GHI NHỚ & TỪ KHÓA ÔN THI */}
      <div className="space-y-4 pt-4 border-t border-stone-200">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
              💡 GHI NHỚ CỐT LÕI (Mục II.1.a)
            </h5>
          </div>
          
          <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Bản chất giai cấp công nhân:</strong> Nhà nước Việt Nam mới mang bản chất giai cấp công nhân, thống nhất sâu sắc với tính nhân dân và tính dân tộc.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Trích dẫn Hiến pháp 1959:</strong> &quot;Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên nền tảng liên minh công nông, do giai cấp công nhân lãnh đạo&quot;.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>3 phương thức Đảng cầm quyền:</strong> Đường lối chỉ đạo; hoạt động đảng viên trong bộ máy; công tác kiểm tra.</span>
            </li>
            <li className="flex items-start gap-2 text-justify">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
              <span><strong>Nhà nước Việt Nam mới:</strong> Là nhà nước dân chủ nhân dân đầu tiên được thành lập ở khu vực Đông Nam Á.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
            📋 TỪ KHÓA ÔN THI
          </h5>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Bản chất giai cấp công nhân",
              "Không phải nhà nước toàn dân phi giai cấp",
              "Liên minh công-nông-trí",
              "3 phương thức cầm quyền",
              "Tập trung dân chủ",
              "Tính nhân dân",
              "Tính dân tộc",
              "Đầu tiên ở Đông Nam Á",
              "Hiến pháp 1959"
            ].map((keyword, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] md:text-xs font-bold leading-none tracking-wide select-none"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
