/* eslint-disable react-hooks/set-state-in-effect, @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BookOpen, Award, ChevronDown, ChevronRight, Menu, X, Sun, Moon, Settings } from "lucide-react";
import { useTheme } from "next-themes";

export default function Sidebar({
  chapters,
  activeSubsectionId,
  setActiveSubsectionId,
  isQuizMode,
  setIsQuizMode,
  isOpen,
  setIsOpen,
  onNavigate,
  forceHide = false,
  onChangeSubject,
  onLogout,
  onOpenProfile,
  currentUserAvatar,
  currentUser,
  showConfirm
}) {
  const [expandedGroups, setExpandedGroups] = useState({});
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Expand parent chapter/section of active subsection when it changes
  useEffect(() => {
    if (activeSubsectionId) {
      let chToExpand = null;
      let secToExpand = null;

      // Find which chapter and section this subsection belongs to
      chapters.forEach((ch) => {
        ch.sections.forEach((sec) => {
          const match = sec.subsections.some((sub) => sub.id === activeSubsectionId);
          if (match) {
            chToExpand = ch.id;
            secToExpand = sec.id;
          }
        });
      });

      if (chToExpand && secToExpand) {
        setExpandedGroups((prev) => {
          if (prev[chToExpand] && prev[secToExpand]) {
            return prev; // No change, return same reference to avoid re-rendering
          }
          return {
            ...prev,
            [chToExpand]: true,
            [secToExpand]: true
          };
        });
      }
    }
  }, [activeSubsectionId, chapters]);

  const toggleGroup = (id) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubsectionClick = (subId) => {
    if (isQuizMode) {
      showConfirm({
        title: "Xác nhận thoát",
        message: "Bạn đang làm bài kiểm tra trắc nghiệm. Bạn có chắc chắn muốn thoát? Kết quả chưa nộp sẽ bị mất.",
        confirmText: "Thoát",
        cancelText: "Ở lại",
        type: "warning",
        onConfirm: () => {
          setIsQuizMode(false);
          setActiveSubsectionId(subId);
          onNavigate(subId);
          setIsOpen(false);
        }
      });
      return;
    }
    setActiveSubsectionId(subId);
    onNavigate(subId);
    setIsOpen(false); // Close sidebar on mobile
  };

  const handleQuizClick = () => {
    setIsQuizMode(true);
    setIsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isQuizMode) {
      showConfirm({
        title: "Xác nhận thoát",
        message: "Bạn đang làm bài kiểm tra trắc nghiệm. Bạn có chắc chắn muốn thoát?",
        confirmText: "Thoát",
        cancelText: "Ở lại",
        type: "warning",
        onConfirm: () => {
          setIsQuizMode(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsOpen(false);
        }
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar element */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#fcfbf9] dark:bg-[#1e1d1a] text-stone-900 dark:text-stone-100 flex flex-col border-r border-stone-200 dark:border-stone-850 transition-transform duration-300 ease-in-out ${
          forceHide
            ? "-translate-x-full md:-translate-x-full"
            : "md:translate-x-0 " + (isOpen ? "translate-x-0" : "-translate-x-full")
        }`}
      >
        {/* Header Logo */}
        <div className="p-6 flex flex-col items-center border-b border-stone-200 dark:border-stone-850 text-center">
          <a
            href="#"
            onClick={handleLogoClick}
            className="group flex flex-col items-center gap-3 justify-center w-full"
          >
             <div className="flex items-center justify-center">
              <div className="relative w-14 h-14 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 flex items-center justify-center bg-transparent border-0">
                <img
                  src="/assets/cancer_mascot_transparent.png"
                  alt="StudyMaster Logo"
                  className="w-full h-full object-cover scale-[1.05]"
                />
              </div>
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-accent font-playfair">
                StudyMaster
              </div>
            </div>
          </a>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Tools */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 dark:text-stone-500 px-3 mb-2">
              Công cụ ôn tập
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={handleQuizClick}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isQuizMode
                      ? "bg-accent text-white dark:text-stone-950 shadow-md shadow-accent/25"
                      : "text-stone-700 dark:text-stone-300 hover:bg-stone-150 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100"
                  }`}
                >
                  <Award size={18} />
                  <span>Bài kiểm tra trắc nghiệm</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 dark:text-stone-500 px-3 mb-2">
              Nội dung môn học
            </div>
            <ul className="space-y-2">
              {chapters.map((ch) => {
                const isChExpanded = expandedGroups[ch.id];
                return (
                  <li key={ch.id} className="space-y-1">
                    <button
                      onClick={() => toggleGroup(ch.id)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-stone-850 dark:text-stone-200 hover:bg-stone-150 dark:hover:bg-stone-900/60 transition-colors duration-200 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-accent" />
                        <span className="truncate max-w-[170px]">{ch.title}</span>
                      </div>
                      {isChExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>

                    {isChExpanded && (
                      <ul className="pl-4 border-l border-stone-200 dark:border-stone-800 space-y-1 mt-1">
                        {ch.sections.map((sec) => {
                          const isSecExpanded = expandedGroups[sec.id];
                          return (
                            <li key={sec.id} className="space-y-1">
                              <button
                                onClick={() => toggleGroup(sec.id)}
                                className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-150 dark:hover:bg-stone-900/40 transition-colors duration-200 text-left cursor-pointer"
                              >
                                <span className="truncate max-w-[150px]">
                                  <span className="text-accent mr-1">{sec.roman}.</span>
                                  {sec.title}
                                </span>
                                {isSecExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                              </button>

                              {isSecExpanded && (
                                <ul className="pl-3 space-y-0.5 mt-0.5">
                                  {sec.subsections.map((sub) => {
                                    const isActive = activeSubsectionId === sub.id && !isQuizMode;
                                    return (
                                      <li key={sub.id}>
                                        <button
                                          onClick={() => handleSubsectionClick(sub.id)}
                                          className={`w-full flex items-baseline gap-2 px-3 py-1 rounded text-[11px] text-left transition-all duration-200 cursor-pointer ${
                                            isActive
                                              ? "bg-accent/10 text-accent font-bold border-l-2 border-accent pl-2"
                                              : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-150 dark:hover:bg-stone-900/20"
                                          }`}
                                        >
                                          <span className="text-stone-450 font-semibold">{sub.number}.</span>
                                          <span className="leading-tight">{sub.title}</span>
                                        </button>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Footer info & Theme toggle */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-850 flex flex-col gap-3">
          {/* User Info Badge (Clickable - replaces the bulky "Hồ sơ cá nhân" button) */}
          {currentUser && (
            <div 
              onClick={onOpenProfile}
              className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-stone-150/40 hover:bg-stone-200/60 dark:bg-stone-900/40 dark:hover:bg-stone-850/60 border border-stone-250/40 dark:border-stone-850/40 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-[0_0_15px_rgba(217,119,6,0.1)] transition-all duration-300 cursor-pointer group mb-1"
              title="Xem hồ sơ cá nhân"
            >
              <div className={`relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                !currentUserAvatar || currentUserAvatar.includes("cancer_mascot_transparent.png")
                  ? "bg-transparent border-0"
                  : "bg-stone-100 dark:bg-stone-900 border border-stone-250/30 dark:border-stone-850/35"
              }`}>
                <img
                  src={currentUserAvatar || "/assets/cancer_mascot_transparent.png"}
                  alt="User Avatar"
                  className={`w-full h-full object-cover ${
                    (!currentUserAvatar || currentUserAvatar.includes("cancer_mascot_transparent.png")) ? "scale-[1.05]" : ""
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-stone-400 dark:text-stone-550 font-bold uppercase tracking-wider leading-none">Học viên</div>
                <div className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate mt-1 group-hover:text-accent transition-colors">{currentUser}</div>
              </div>
              <Settings size={14} className="text-stone-400 dark:text-stone-500 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={onChangeSubject}
              className="flex-1 py-2 px-3 rounded-xl bg-accent/10 hover:bg-accent/15 border border-accent/25 hover:border-accent/40 text-center text-xs font-bold text-accent transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              Đổi môn
            </button>
            <button
              onClick={onLogout}
              className="flex-1 py-2 px-3 rounded-xl bg-stone-150 dark:bg-stone-900/60 hover:bg-stone-200 dark:hover:bg-stone-850/80 text-center text-xs font-semibold text-stone-600 dark:text-stone-450 hover:text-stone-800 dark:hover:text-stone-250 transition-all border border-stone-250/50 dark:border-stone-850/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              Đăng xuất
            </button>
          </div>

          <div className="flex items-center justify-between mt-2 pt-1">
            <span className="text-[10px] text-stone-550 dark:text-stone-500 italic select-none">
              Focus. Calm. Decide. Succeed.
            </span>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`relative w-14 h-7 rounded-full overflow-hidden transition-all duration-500 cursor-pointer shadow-inner border border-stone-250/60 dark:border-stone-800 flex items-center ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-[#292824] to-[#12110f]" 
                    : "bg-gradient-to-r from-[#fef3c7] to-[#fcd34d]"
                }`}
                aria-label="Toggle theme"
              >
                {/* Background: Clouds (Light mode - Warm cream clouds) */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}>
                  {/* Cloud 1 */}
                  <div className="absolute left-[12%] top-[30%] w-3.5 h-2 bg-white/70 rounded-full" />
                  <div className="absolute left-[16%] top-[15%] w-2.5 h-2.5 bg-white/70 rounded-full" />
                  {/* Cloud 2 */}
                  <div className="absolute left-[38%] top-[55%] w-4 h-2 bg-white/85 rounded-full" />
                  <div className="absolute left-[42%] top-[40%] w-3 h-3 bg-white/85 rounded-full" />
                </div>

                {/* Background: Stars (Dark mode - Twinkling Gold Stars) */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}>
                  {/* Star 1 */}
                  <div className="absolute right-[20%] top-[25%] w-0.5 h-0.5 bg-amber-400 rounded-full opacity-80" />
                  {/* Star 2 */}
                  <div className="absolute right-[45%] top-[60%] w-0.5 h-0.5 bg-amber-400 rounded-full opacity-60" />
                  {/* Star 3 (twinkling) */}
                  <div className="absolute right-[32%] top-[35%] w-1 h-1 bg-yellow-350 rounded-full opacity-65 animate-pulse" />
                  {/* Star 4 */}
                  <div className="absolute left-[30%] top-[30%] w-0.5 h-0.5 bg-amber-450 rounded-full opacity-40" />
                </div>

                {/* Sun / Moon Knob */}
                <div 
                  className={`absolute w-5 h-5 rounded-full shadow-md transition-all duration-500 ease-out flex items-center justify-center ${
                    theme === "dark" 
                      ? "translate-x-1 bg-gradient-to-br from-[#fef9c3] to-[#fde047] shadow-inner" 
                      : "translate-x-8 bg-gradient-to-br from-[#fffbeb] to-[#f59e0b]"
                  }`}
                >
                  {/* Moon Craters (Only visible in Dark mode - Gold/Amber Craters) */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}>
                    <div className="absolute w-1 h-1 bg-amber-600/20 rounded-full top-[20%] left-[25%]" />
                    <div className="absolute w-1.5 h-1.5 bg-amber-600/25 rounded-full top-[40%] right-[15%]" />
                    <div className="absolute w-0.8 h-0.8 bg-amber-600/20 rounded-full bottom-[20%] left-[40%]" />
                  </div>
                  {/* Sun rays aura (Only visible in Light mode - Amber glow) */}
                  <div className={`absolute -inset-1 rounded-full bg-accent/25 blur-[2.5px] transition-opacity duration-500 ${theme === "dark" ? "opacity-0" : "opacity-100 animate-pulse"}`} />
                </div>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 md:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
}
