"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  LogOut,
  BookOpen,
  Shield,
  Layers,
  Users,
  ShieldAlert,
  Trophy,
  Activity
} from "lucide-react";

export default function AdminCinematicHero({
  activeTab = "overview",
  onSelectTab,
  stats,
  onBackToStudy,
  onLogout,
  onScrollToDetails
}) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const containerRef = useRef(null);

  // 4 Cinematic Scenes Configuration
  const scenes = [
    {
      id: "overview",
      tag: "01",
      megaText: "COMMAND",
      subtitle: "Bảng Điều Khiển Trung Tâm Chỉ Huy",
      desc: "Hệ thống giám sát khảo thí, quản trị học viên và phân tích chất lượng ngân hàng câu hỏi theo thời gian thực.",
      image: "/images/admin/admin_scene_command.jpg",
      kpis: [
        { value: `${stats?.totalSubjects || 10} Môn`, label: "Chương trình học" },
        { value: `${stats?.avgScore || 0}%`, label: "Độ chuẩn xác TB" },
        { value: `${stats?.totalAttempts || 0}`, label: "Lượt làm bài thi" }
      ],
      ctaText: "Xem Báo Cáo Chi Tiết"
    },
    {
      id: "users",
      tag: "02",
      megaText: "STUDENTS",
      subtitle: "Hồ Sơ & Năng Lực Học Viên",
      desc: "Quản lý danh sách học sinh, phân quyền môn học tự chọn và theo dõi biểu đồ radar 8 trục năng lực chuyên sâu.",
      image: "/images/admin/admin_scene_students.jpg",
      kpis: [
        { value: `${stats?.totalUsers || 0}`, label: "Học viên đăng ký" },
        { value: "100%", label: "Phân quyền linh hoạt" },
        { value: "8 Trục", label: "Radar năng lực" }
      ],
      ctaText: "Quản Lý Danh Sách"
    },
    {
      id: "questions",
      tag: "03",
      megaText: "INSPECTOR",
      subtitle: "Soi Đề Thi & Bẫy Tư Duy",
      desc: "Tự động kiểm định quy tắc chống đoán bừa ≤ 15 ký tự trong câu và bóc tách 50 câu bẫy tư duy Vận dụng cao.",
      image: "/images/admin/admin_scene_inspector.jpg",
      kpis: [
        { value: "≤ 15c", label: "Độ lệch đáp án" },
        { value: `${stats?.totalTraps || 50}`, label: "Câu bẫy tư duy" },
        { value: "100%", label: "Chuẩn giáo trình" }
      ],
      ctaText: "Kiểm Định Đề Thi"
    },
    {
      id: "leaderboard",
      tag: "04",
      megaText: "PODIUM",
      subtitle: "Bục Vinh Danh Bảng Vàng",
      desc: "Tôn vinh những học viên đạt thành tích xuất sắc nhất toàn hệ thống với bục Golden Podium và bảng xếp hạng trực tiếp.",
      image: "/images/admin/admin_scene_podium.jpg",
      kpis: [
        { value: "Top 3", label: "Bục vinh danh vàng" },
        { value: "40/40", label: "Điểm tối đa" },
        { value: "Live", label: "Xếp hạng thời gian thực" }
      ],
      ctaText: "Xem Bảng Xếp Hạng"
    }
  ];

  // Sync scene with activeTab prop
  useEffect(() => {
    const idx = scenes.findIndex((s) => s.id === activeTab);
    if (idx !== -1 && idx !== currentSceneIndex) {
      setCurrentSceneIndex(idx);
    }
  }, [activeTab]);

  const currentScene = scenes[currentSceneIndex];
  const nextSceneIndex = (currentSceneIndex + 1) % scenes.length;
  const nextScene = scenes[nextSceneIndex];

  const handleSwitchScene = (idx) => {
    setCurrentSceneIndex(idx);
    onSelectTab?.(scenes[idx].id);
  };

  const handleNextScene = () => {
    handleSwitchScene(nextSceneIndex);
  };

  return (
    <div className="w-full select-none">
      {/* Cinematic Showcase Card */}
      <div
        ref={containerRef}
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-[#E8DACB] bg-[#1a0f0d] text-white min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between p-5 sm:p-8 transition-all duration-700"
      >
        {/* ========================================================================= */}
        {/* LỚP 1: BACKGROUND IMAGE & AMBIENT ATMOSPHERIC LIGHTING                    */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 z-0">
          <img
            key={currentScene.image}
            src={currentScene.image}
            alt={currentScene.megaText}
            className="w-full h-full object-cover object-center transform scale-105 transition-all duration-1000 ease-out brightness-[0.78] contrast-[1.08]"
          />
          {/* Subtle warm vignette gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140806]/95 via-black/35 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/65 pointer-events-none" />
        </div>

        {/* ========================================================================= */}
        {/* LỚP 2: MEGA GIANT TYPOGRAPHY (TYPOGRAPHY SANDWICH)                       */}
        {/* ========================================================================= */}
        <div className="absolute inset-x-0 top-[18%] sm:top-[15%] lg:top-[12%] z-10 flex justify-center items-center pointer-events-none overflow-hidden px-2">
          <h1
            key={currentScene.megaText}
            className="font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[150px] tracking-[0.2em] sm:tracking-[0.25em] text-white/20 sm:text-white/25 uppercase text-center whitespace-nowrap animate-in fade-in zoom-in-95 duration-700 mix-blend-overlay"
            style={{
              textShadow: "0 0 40px rgba(232, 184, 109, 0.15)"
            }}
          >
            {currentScene.megaText}
          </h1>
        </div>

        {/* ========================================================================= */}
        {/* LỚP 3: FLOATING TOPBAR HEADER (GLASS PILL NAVIGATION)                    */}
        {/* ========================================================================= */}
        <header className="relative z-30 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D85A38] to-[#D48B38] flex items-center justify-center text-white font-black text-base shadow-lg shadow-[#D85A38]/30">
              SM
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-white">
                  StudyMaster
                </span>
                <span className="text-[10px] px-2 py-0.2 rounded-full font-bold bg-[#FAF8F5]/20 text-[#E8B86D] border border-white/10">
                  Control Hub
                </span>
              </div>
              <p className="text-[10px] text-white/60 font-medium tracking-wider uppercase">
                Hệ Thống Quản Trị Khảo Thí
              </p>
            </div>
          </div>

          {/* Floating Pill Menu Tabs */}
          <nav className="flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-2xl overflow-x-auto max-w-full">
            {scenes.map((scene, idx) => {
              const isActive = currentSceneIndex === idx;
              return (
                <button
                  key={scene.id}
                  onClick={() => handleSwitchScene(idx)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border-none whitespace-nowrap ${
                    isActive
                      ? "bg-white text-[#38150E] shadow-md shadow-white/10 scale-100"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D85A38] animate-pulse" />
                  )}
                  <span>{scene.subtitle.split(" ")[0]}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onBackToStudy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 transition-all cursor-pointer"
            >
              <BookOpen size={13} className="text-[#E8B86D]" />
              <span>Vào học</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#38150E] bg-white hover:bg-[#FAF5EE] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
            >
              <LogOut size={13} className="text-[#D85A38]" />
              <span>Thoát</span>
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* LỚP 4: BOTTOM HUD OVERLAY (METRICS, CTA, DESCRIPTION & MINI PREVIEW CARD)  */}
        {/* ========================================================================= */}
        <div className="relative z-30 pt-16 sm:pt-24 flex flex-col lg:flex-row items-end justify-between gap-8">
          {/* Left HUD Panel: 3 Big Stats + CTA Button + Micro Desc */}
          <div className="space-y-5 max-w-2xl text-left">
            {/* 3 Metric Stat Highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-white/15 pb-4">
              {currentScene.kpis.map((kpi, kIdx) => (
                <div key={kIdx} className="space-y-0.5 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-1.5">
                    <span>{kpi.value}</span>
                    {kIdx === 0 && <Sparkles size={16} className="text-[#E8B86D]" />}
                  </div>
                  <div className="text-[11px] text-white/70 font-semibold tracking-wide">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button & Micro Description */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={onScrollToDetails}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-[#38150E] bg-white hover:bg-[#FAF8F5] active:scale-95 shadow-xl transition-all duration-200 cursor-pointer border-none group shrink-0"
              >
                <span>{currentScene.ctaText}</span>
                <div className="w-5 h-5 rounded-full bg-[#D85A38] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={13} />
                </div>
              </button>

              <p className="text-xs text-white/80 font-medium leading-relaxed max-w-md">
                {currentScene.desc}
              </p>
            </div>
          </div>

          {/* Right Bottom: Mini-Card Preview Thumbnail & Progress Slider */}
          <div
            onClick={handleNextScene}
            className="group w-full sm:w-auto bg-black/45 hover:bg-black/60 backdrop-blur-2xl border border-white/20 hover:border-[#E8B86D]/60 rounded-3xl p-3 sm:p-3.5 shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-4 hover:scale-[1.03] active:scale-98"
          >
            {/* Thumbnail Image Container */}
            <div className="relative w-24 sm:w-28 h-16 sm:h-20 rounded-2xl overflow-hidden border border-white/20 shrink-0">
              <img
                src={nextScene.image}
                alt={nextScene.megaText}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-6 h-6 rounded-full bg-white/90 text-[#38150E] flex items-center justify-center shadow-md">
                  <ChevronRight size={14} />
                </span>
              </div>
            </div>

            {/* Scene Info & Pagination Bar */}
            <div className="space-y-2 pr-2 text-left min-w-[130px]">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8B86D] flex items-center gap-1">
                  <span>Tiếp theo</span>
                  <span>•</span>
                  <span>{nextScene.tag}</span>
                </div>
                <h4 className="text-xs font-black text-white truncate max-w-[140px] mt-0.5">
                  {nextScene.megaText}
                </h4>
              </div>

              {/* Progress Slider Indicator */}
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 font-mono">
                <span>{currentScene.tag}/04</span>
                <div className="w-16 bg-white/20 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D85A38] h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentSceneIndex + 1) / scenes.length) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
