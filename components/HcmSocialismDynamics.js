"use client";
import React, { useState, useRef } from "react";
import { 
  Users, 
  Compass, 
  UserCheck, 
  HelpCircle, 
  Quote, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  XCircle,
  Award
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmSocialismDynamics() {
  const [activeTab, setActiveTab] = useState("national"); // national | organization | human
  const [activeSubTab, setActiveSubTab] = useState("benefit"); // benefit | democracy | unity
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-tab-content",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeTab, activeSubTab] });

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            Mục II.2.b
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Động lực của Chủ nghĩa Xã hội ở Việt Nam
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Phát huy tối ưu hệ thống động lực phong phú, lấy nội lực dân tộc làm gốc và con người làm trung tâm.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap bg-stone-200/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("national")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "national"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Nội lực dân tộc
          </button>
          <button
            onClick={() => setActiveTab("organization")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "organization"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Động lực Tổ chức
          </button>
          <button
            onClick={() => setActiveTab("human")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "human"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Con người & Xây - Chống
          </button>
        </div>
      </div>

      {/* Main Tab content */}
      <div className="animate-tab-content">
        
        {/* 1. NỘI LỰC DÂN TỘC */}
        {activeTab === "national" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Hệ thống động lực của chủ nghĩa xã hội rất phong phú (vật chất & tinh thần, quá khứ & tương lai, nội lực & ngoại lực). Trong đó, giữ vai trò <strong>quyết định nhất</strong> chính là <strong>nội lực dân tộc, là nhân dân</strong>:
            </p>

            {/* 3 components of national strength */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveSubTab("benefit")}
                className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                  activeSubTab === "benefit"
                    ? "bg-amber-600 text-white border-amber-600 shadow-sm font-bold"
                    : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100 text-xs font-semibold"
                }`}
              >
                1. Lợi ích của dân
              </button>
              <button
                onClick={() => setActiveSubTab("democracy")}
                className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                  activeSubTab === "democracy"
                    ? "bg-amber-600 text-white border-amber-600 shadow-sm font-bold"
                    : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100 text-xs font-semibold"
                }`}
              >
                2. Dân chủ của dân
              </button>
              <button
                onClick={() => setActiveSubTab("unity")}
                className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                  activeSubTab === "unity"
                    ? "bg-amber-600 text-white border-amber-600 shadow-sm font-bold"
                    : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100 text-xs font-semibold"
                }`}
              >
                3. Sức mạnh đoàn kết
              </button>
            </div>

            {/* Subtab detail card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              {activeSubTab === "benefit" && (
                <div className="space-y-4 animate-tab-content">
                  <h4 className="font-serif font-black text-stone-900 text-sm md:text-base text-amber-800">
                    Lợi ích của nhân dân — Điểm cốt lõi ưu việt
                  </h4>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    Hồ Chí Minh đặc biệt quan tâm tới lợi ích của cả cộng đồng và của từng cá nhân cụ thể. Đây là nét phân biệt rõ ràng nhất giữa xã hội XHCN nhân văn và các chế độ áp bức bóc lột trước đó.
                  </p>
                  <p className="text-stone-700 text-xs leading-relaxed">
                    Trong chế độ mới, mỗi công dân nắm giữ vị thế làm chủ, đóng góp sức lực tương xứng và được xã hội đền đáp công bằng qua phân phối lợi ích.
                  </p>
                  
                  {/* Quote Bác */}
                  <div className="relative p-4 rounded-xl bg-amber-500/5 border-l-3 border-amber-600 text-stone-850 font-serif italic text-xs leading-relaxed">
                    &quot;Việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh... Phải đặt quyền lợi của dân lên trên hết thảy.&quot;
                  </div>
                </div>
              )}

              {activeSubTab === "democracy" && (
                <div className="space-y-4 animate-tab-content">
                  <h4 className="font-serif font-black text-stone-900 text-sm md:text-base text-amber-800">
                    Dân chủ của nhân dân — Quý báu nhất
                  </h4>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    Hồ Chí Minh đúc kết: <strong>&quot;Dân chủ là của quý báu nhất của nhân dân&quot;</strong>. Địa vị tối cao của dân trong xã hội chính là chìa khóa khơi dậy tinh thần tự giác sáng tạo xây dựng đất nước.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-650 text-xs leading-relaxed">
                    <strong>Động lực kép:</strong> Lợi ích của dân và dân chủ của dân là hai mặt của một đồng xu, gắn bó khăng khít không thể tách rời trong tiến trình cách mạng xã hội chủ nghĩa.
                  </div>
                </div>
              )}

              {activeSubTab === "unity" && (
                <div className="space-y-4 animate-tab-content">
                  <h4 className="font-serif font-black text-stone-900 text-sm md:text-base text-amber-800">
                    Sức mạnh đại đoàn kết toàn dân — Lực lượng vô địch
                  </h4>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    Đoàn kết toàn dân là lực lượng vĩ đại nhất. Tuy nhiên, sức mạnh này không tự nhiên có được, mà chỉ hình thành dựa trên <strong>sự giác ngộ đầy đủ</strong> của nhân dân về quyền lợi, nghĩa vụ, và sự lao động sáng tạo của hàng chục triệu người.
                  </p>
                  <p className="text-stone-750 text-xs leading-relaxed">
                    Tất cả 3 yếu tố (Lợi ích, Dân chủ, Đoàn kết) hợp nhất hữu cơ tạo nên động lực nội sinh tổng hợp vô cùng mạnh mẽ, thúc đẩy sự đi lên của dân tộc.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. ĐỘNG LỰC TỔ CHỨC & KẺ ĐỊCH */}
        {activeTab === "organization" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Thuyền và Cầm lái */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-serif font-bold text-stone-900 text-sm md:text-base flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-600 animate-spin-slow" />
                  Đảng lãnh đạo & Nhà nước quản lý
                </h4>
                <p className="text-stone-650 text-xs leading-relaxed">
                  Để phát huy sức mạnh của cộng đồng, cần có sự điều phối chặt chẽ của hệ thống tổ chức:
                </p>

                {/* Quote cầm lái */}
                <div className="p-4.5 rounded-xl bg-amber-500/5 border-l-3 border-amber-600 text-stone-850 font-serif italic text-xs leading-relaxed">
                  &quot;Đảng như người cầm lái, người cầm lái có vững thì thuyền mới chạy.&quot;
                </div>
                
                <p className="text-stone-650 text-xs leading-relaxed">
                  Nhà nước đóng vai trò đại diện ý chí nhân dân, biến đường lối của Đảng thành hiện thực. Các đoàn thể hoạt động thống nhất vì lợi ích chung của xã hội và của thành viên.
                </p>
              </div>

              {/* Cảnh giác kẻ địch */}
              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 shadow-sm space-y-3.5">
                <h4 className="font-serif font-bold text-red-950 text-sm md:text-base flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-700" />
                  Phải nêu cao cảnh giác với Kẻ Địch
                </h4>
                <p className="text-stone-700 text-xs leading-relaxed">
                  Hồ Chí Minh luôn căn dặn nhân dân và cán bộ phải tỉnh táo nhận diện và kiên quyết bài trừ hai mối nguy hại:
                </p>

                <div className="space-y-2.5">
                  <div className="bg-white p-3 rounded-xl border border-red-200/60 flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-stone-900 text-xs">1. Kẻ địch bên ngoài</h5>
                      <p className="text-stone-600 text-[11px] leading-normal">Các thế lực thù địch tìm cách chống phá, phá hoại thành quả cách mạng của nhân dân.</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-red-200/60 flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-stone-900 text-xs">2. Kẻ địch bên trong</h5>
                      <p className="text-stone-600 text-[11px] leading-normal">Chủ nghĩa cá nhân ích kỷ; thói &quot;làm quan cách mạng&quot;, hống hách, xa rời quần chúng nhân dân.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CON NGƯỜI & XÂY - CHỐNG */}
        {activeTab === "human" && (
          <div className="space-y-6">
            <div className="relative overflow-hidden p-5 rounded-2xl bg-stone-905 text-white bg-stone-900 shadow-md">
              <Quote className="absolute top-2 left-2 w-12 h-12 text-white/5 -rotate-12 pointer-events-none" />
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-1">
                Nhân tố quyết định nhất
              </span>
              <p className="relative z-10 font-serif italic text-stone-100 text-sm md:text-base leading-relaxed pl-4">
                &quot;Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa.&quot;
              </p>
            </div>

            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Để xây dựng con người mới, Hồ Chí Minh khái quát phương châm biện chứng <strong>&quot;Xây đi đôi với Chống&quot;</strong> (tương tác so sánh phẩm chất tốt và loại bỏ thói xấu):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* XÂY */}
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-emerald-200/40 pb-2 mb-1">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-700" />
                  <h5 className="font-serif font-black text-emerald-800 text-sm md:text-base">
                    XÂY: 5 Phẩm chất cần bồi dưỡng
                  </h5>
                </div>
                <ul className="space-y-2 text-stone-700 text-xs">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-extrabold">1.</span>
                    <span>Có ý thức làm chủ nhà nước sâu sắc.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-extrabold">2.</span>
                    <span>Có tinh thần tập thể XHCN, tư tưởng <em>&quot;mình vì mọi người, mọi người vì mình&quot;</em>.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-extrabold">3.</span>
                    <span>Có quan điểm <em>&quot;tất cả phục vụ sản xuất&quot;</em> để tạo ra vật chất.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-extrabold">4.</span>
                    <span>Có ý thức cần kiệm, tiết kiệm xây dựng tổ quốc.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-extrabold">5.</span>
                    <span>Có quyết tâm tiến nhanh, tiến mạnh, tiến vững chắc lên CNXH.</span>
                  </li>
                </ul>
              </div>

              {/* CHỐNG */}
              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-red-200/40 pb-2 mb-1">
                  <XCircle className="w-4.5 h-4.5 text-red-700" />
                  <h5 className="font-serif font-black text-red-800 text-sm md:text-base">
                    CHỐNG: 4 Tư tưởng tác phong xấu
                  </h5>
                </div>
                <ul className="space-y-2 text-stone-700 text-xs">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-700 font-extrabold">1.</span>
                    <span><strong>Chủ nghĩa cá nhân:</strong> Chỉ biết lợi ích mình, ích kỷ xa dân.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-700 font-extrabold">2.</span>
                    <span><strong>Quan liêu, mệnh lệnh:</strong> Hách dịch, hống hách với nhân dân.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-700 font-extrabold">3.</span>
                    <span><strong>Tham ô, lãng phí:</strong> Làm hao tổn tài sản chung, đục khoét của công.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-700 font-extrabold">4.</span>
                    <span><strong>Bảo thủ, rụt rè:</strong> Không dám đổi mới sáng tạo, trì trệ phát triển.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overall Conclusion Summary */}
      <div className="relative overflow-hidden p-6 rounded-3xl bg-stone-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">
            Nhận xét cốt lõi
          </span>
          <h4 className="font-serif font-black text-sm md:text-base">
            Nét đặc sắc: &quot;Xây&quot; đi đôi với &quot;Chống&quot; xuyên suốt cách mạng XHCN
          </h4>
          <p className="text-stone-300 text-xs leading-relaxed max-w-2xl">
            Để khơi dậy tối đa các động lực phát triển, bên cạnh việc bồi dưỡng những nhân tố tích cực (xây), Hồ Chí Minh luôn nhắc nhở phải kiên quyết ngăn chặn, loại trừ các lực cản cản trở sự tiến bộ (chống). Đây là phương châm nhất quán và đặc sắc của Người.
          </p>
        </div>

        <div className="p-3 bg-white/10 rounded-full text-amber-500 border border-white/10 shrink-0 self-start md:self-center">
          <Award className="w-6 h-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
