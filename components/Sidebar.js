/* eslint-disable react-hooks/set-state-in-effect, @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BookOpen, Award, ChevronDown, ChevronRight, Menu, X, Settings, MousePointer, Edit2, Highlighter, Eraser, Trash2, Lock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  showConfirm,
  activeTool,
  setActiveTool,
  activeColor,
  setActiveColor,
  onClearAll,
  onBackToHero,
  hasQuiz = false,
  onBackToAdmin
}) {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const penColors = [
    { value: "#EF4444", label: "🔴" },
    { value: "#EAB308", label: "🟡" },
    { value: "#22C55E", label: "🟢" }
  ];

  const hlColors = [
    { value: "rgba(217, 119, 6, 0.2)", label: "🟡", preview: "#d97706" },
    { value: "rgba(244, 63, 94, 0.22)", label: "💗", preview: "#f43f5e" },
    { value: "rgba(34, 197, 94, 0.22)", label: "🟢", preview: "#22c55e" }
  ];

  const indicatorRef = useRef(null);

  // GSAP Accordion Height Animation
  useGSAP(() => {
    const wrappers = document.querySelectorAll(".sidebar-sub-wrapper");
    wrappers.forEach((wrapper) => {
      const id = wrapper.getAttribute("data-group-id");
      const isExpanded = expandedGroups[id];
      if (isExpanded) {
        gsap.to(wrapper, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        gsap.to(wrapper, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
          overwrite: "auto"
        });
      }
    });
  }, { dependencies: [expandedGroups] });

  // Update Menu Indicator position
  useEffect(() => {
    if (typeof window === "undefined" || !mounted) return;
    
    const updateIndicator = () => {
      const indicator = indicatorRef.current;
      if (!indicator) return;

      const sidebarEl = indicator.closest("aside");
      const activeBtn = sidebarEl ? sidebarEl.querySelector(".sidebar-active-item") : null;
      
      if (activeBtn) {
        const container = indicator.parentElement;
        if (container) {
          const btnRect = activeBtn.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const topPos = btnRect.top - containerRect.top + container.scrollTop;
          
          gsap.to(indicator, {
            top: topPos,
            height: btnRect.height,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.75)",
            overwrite: "auto"
          });
        }
      } else {
        gsap.to(indicator, {
          opacity: 0,
          duration: 0.3,
          overwrite: "auto"
        });
      }
    };

    // Update immediately or with a very small timeout for active item changes
    const timer1 = setTimeout(updateIndicator, 50);

    // Update again after accordion transitions complete (350ms)
    const timer2 = setTimeout(updateIndicator, 350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [activeSubsectionId, expandedGroups, isQuizMode, mounted]);

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

  const handleChapterClick = (chId) => {
    toggleGroup(chId);
    if (isQuizMode) {
      showConfirm({
        title: "Xác nhận thoát",
        message: "Bạn đang làm bài kiểm tra trắc nghiệm. Bạn có chắc chắn muốn thoát? Kết quả chưa nộp sẽ bị mất.",
        confirmText: "Thoát",
        cancelText: "Ở lại",
        type: "warning",
        onConfirm: () => {
          setIsQuizMode(false);
          const ch = chapters.find((c) => c.id === chId);
          if (ch && ch.sections[0]?.subsections[0]) {
            setActiveSubsectionId(ch.sections[0].subsections[0].id);
          }
          onNavigate(`chapter-${chId}`);
          setIsOpen(false);
        }
      });
      return;
    }
    const ch = chapters.find((c) => c.id === chId);
    if (ch && ch.sections[0]?.subsections[0]) {
      setActiveSubsectionId(ch.sections[0].subsections[0].id);
    }
    onNavigate(`chapter-${chId}`);
  };

  const handleSectionClick = (secId) => {
    toggleGroup(secId);
    if (isQuizMode) {
      showConfirm({
        title: "Xác nhận thoát",
        message: "Bạn đang làm bài kiểm tra trắc nghiệm. Bạn có chắc chắn muốn thoát? Kết quả chưa nộp sẽ bị mất.",
        confirmText: "Thoát",
        cancelText: "Ở lại",
        type: "warning",
        onConfirm: () => {
          setIsQuizMode(false);
          let foundSubId = null;
          chapters.forEach((ch) => {
            const sec = ch.sections.find((s) => s.id === secId);
            if (sec && sec.subsections[0]) {
              foundSubId = sec.subsections[0].id;
            }
          });
          if (foundSubId) {
            setActiveSubsectionId(foundSubId);
          }
          onNavigate(`section-${secId}`);
          setIsOpen(false);
        }
      });
      return;
    }
    let foundSubId = null;
    chapters.forEach((ch) => {
      const sec = ch.sections.find((s) => s.id === secId);
      if (sec && sec.subsections[0]) {
        foundSubId = sec.subsections[0].id;
      }
    });
    if (foundSubId) {
      setActiveSubsectionId(foundSubId);
    }
    onNavigate(`section-${secId}`);
  };

  const handleQuizClick = () => {
    setIsQuizMode(true);
    setIsOpen(false);
  };

  const resetToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    
    // Auto-expand first chapter & section, and activate first subsection
    const firstCh = chapters[0];
    if (firstCh) {
      setExpandedGroups((prev) => ({
        ...prev,
        [firstCh.id]: true,
        [firstCh.sections[0]?.id]: true
      }));
      if (firstCh.sections[0]?.subsections[0]) {
        setActiveSubsectionId(firstCh.sections[0].subsections[0].id);
      }
    }

    if (onBackToHero) {
      onBackToHero();
    }
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
          resetToTop();
        }
      });
      return;
    }
    resetToTop();
  };

  return (
    <>
      {/* Sidebar element */}
      <aside
        className={`fixed z-40 w-72 bg-[#fcfbf9]/95 text-stone-900 flex flex-col transition-all duration-300 ease-in-out
          inset-y-0 left-0 border-r border-stone-200
          md:top-4 md:left-4 md:bottom-4 md:inset-y-auto md:h-[calc(100vh-2rem)] md:rounded-3xl md:border md:border-stone-200/80 md:shadow-[0_10px_35px_rgba(0,0,0,0.05)] md:backdrop-blur-md
          ${
            forceHide
              ? "-translate-x-full md:-translate-x-[calc(100%+2rem)]"
              : "md:translate-x-0 " + (isOpen ? "translate-x-0" : "-translate-x-full")
          }`}
      >
        {/* Header Logo */}
        <div className="p-6 flex flex-col items-center border-b border-stone-200 text-center">
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
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 relative">
          {/* Active indicator */}
          <div className="sidebar-indicator" ref={indicatorRef} />

          {/* Tools */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 px-3 mb-2">
              Công cụ ôn tập
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  disabled={!hasQuiz}
                  onClick={handleQuizClick}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    !hasQuiz
                      ? "opacity-50 cursor-not-allowed text-stone-400 bg-stone-100/30"
                      : isQuizMode
                      ? "sidebar-active-item bg-accent text-white shadow-md shadow-accent/25"
                      : "text-stone-700 hover:bg-stone-150 hover:text-stone-900 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Award size={18} />
                    <span>Bài kiểm tra trắc nghiệm</span>
                  </div>
                  {!hasQuiz && <Lock size={12} className="text-stone-400" />}
                </button>
              </li>
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 px-3 mb-2">
              Nội dung môn học
            </div>
            <ul className="space-y-2">
              {chapters.map((ch) => {
                const isChExpanded = expandedGroups[ch.id];
                return (
                  <li key={ch.id} className="space-y-1">
                    <button
                      onClick={() => handleChapterClick(ch.id)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-stone-850 hover:bg-stone-150 transition-colors duration-200 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-accent" />
                        <span className="truncate max-w-[170px]">{ch.title}</span>
                      </div>
                      {isChExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>

                    <ul 
                      className="pl-4 border-l border-stone-200 space-y-1 mt-1 sidebar-sub-wrapper"
                      data-group-id={ch.id}
                    >
                      {ch.sections.map((sec) => {
                        const isSecExpanded = expandedGroups[sec.id];
                        return (
                          <li key={sec.id} className="space-y-1">
                            <button
                              onClick={() => handleSectionClick(sec.id)}
                              className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-semibold text-stone-700 hover:bg-stone-150 transition-colors duration-200 text-left cursor-pointer"
                            >
                              <span className="truncate max-w-[150px]">
                                {sec.roman && <span className="text-accent mr-1">{sec.roman}.</span>}
                                {sec.title}
                              </span>
                              {isSecExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                            </button>

                            <ul 
                              className="pl-3 space-y-0.5 mt-0.5 sidebar-sub-wrapper"
                              data-group-id={sec.id}
                            >
                              {sec.subsections
                                .filter((sub) => sub.number || sub.title)
                                .map((sub) => {
                                  const isActive = activeSubsectionId === sub.id && !isQuizMode;
                                  return (
                                    <li key={sub.id}>
                                      <button
                                        onClick={() => handleSubsectionClick(sub.id)}
                                        className={`w-full flex items-baseline gap-2 px-3 py-1 rounded text-[11px] text-left transition-all duration-200 cursor-pointer ${
                                          isActive
                                            ? "sidebar-active-item bg-accent/10 text-accent font-bold"
                                            : "text-stone-500 hover:text-stone-900 hover:bg-stone-150"
                                        }`}
                                      >
                                        <span className="text-stone-450 font-semibold">{sub.number}.</span>
                                        <span className="leading-tight">{sub.title}</span>
                                      </button>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Footer info & Theme toggle */}
        <div className="p-4 border-t border-stone-200 flex flex-col gap-3">
          {/* User Info Badge (Clickable - replaces the bulky "Hồ sơ cá nhân" button) */}
          {currentUser && (
            <div 
              onClick={onOpenProfile}
              className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-stone-150/40 hover:bg-stone-200/60 border border-stone-250/40 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(217,119,6,0.1)] transition-all duration-300 cursor-pointer group mb-1"
              title="Xem hồ sơ cá nhân"
            >
              <div className={`relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                !currentUserAvatar || currentUserAvatar.includes("cancer_mascot_transparent.png")
                  ? "bg-transparent border-0"
                  : "bg-stone-100 border border-stone-250/30"
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
                <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider leading-none">Học viên</div>
                <div className="text-xs font-bold text-stone-800 truncate mt-1 group-hover:text-accent transition-colors">{currentUser}</div>
              </div>
              <Settings size={14} className="text-stone-400 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
            </div>
          )}

          {currentUser === "admin" && onBackToAdmin && (
            <button
              onClick={onBackToAdmin}
              className="w-full py-2 px-3 rounded-xl bg-accent hover:bg-accent/95 text-white dark:text-stone-950 text-center text-xs font-bold transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              💼 Trang quản trị Admin
            </button>
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
              className="flex-1 py-2 px-3 rounded-xl bg-stone-150 hover:bg-stone-200 text-center text-xs font-semibold text-stone-600 hover:text-stone-800 transition-all border border-stone-250/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              Đăng xuất
            </button>
          </div>

          <div className="mt-3 pt-2 border-t border-stone-200/50 flex flex-col items-center gap-2">
            {mounted && !isQuizMode && (
              <div className="w-full flex items-center justify-between p-1 rounded-2xl border border-stone-250 bg-stone-100/50 shadow-inner relative">
                
                {/* 1. Cursor Button */}
                <button
                  onClick={() => setActiveTool("cursor")}
                  className={`flex-1 py-1.5 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    activeTool === "cursor"
                      ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                      : "text-stone-400 hover:text-stone-800 hover:bg-stone-200/50"
                  }`}
                  title="Con trỏ đọc & cuộn"
                >
                  <MousePointer size={14} />
                </button>

                {/* 2. Pen Button */}
                <div className="flex-1 relative flex justify-center">
                  <button
                    onClick={() => {
                      setActiveTool("pen");
                      if (!penColors.some(c => c.value === activeColor)) {
                        setActiveColor(penColors[0].value);
                      }
                    }}
                    className={`w-full py-1.5 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      activeTool === "pen"
                        ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                        : "text-stone-400 hover:text-stone-800 hover:bg-stone-200/50"
                    }`}
                    title="Bút vẽ tự do (Pen)"
                  >
                    <Edit2 size={13} />
                    {activeTool === "pen" && (
                      <div 
                        className="absolute bottom-1 right-2.5 w-1.5 h-1.5 rounded-full border border-stone-950"
                        style={{ backgroundColor: activeColor }}
                      />
                    )}
                  </button>

                  {/* Pen colors submenu */}
                  {activeTool === "pen" && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 p-1 rounded-full border border-stone-250 bg-stone-100 shadow-xl z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                      {penColors.map(color => (
                        <button
                          key={color.value}
                          onClick={() => setActiveColor(color.value)}
                          className={`w-4 h-4 rounded-full border hover:scale-125 transition-transform cursor-pointer ${
                            activeColor === color.value
                              ? "border-accent scale-110 shadow-sm"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={`Bút màu ${color.label}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Highlighter Button */}
                <div className="flex-1 relative flex justify-center">
                  <button
                    onClick={() => {
                      setActiveTool("highlighter");
                      if (!hlColors.some(c => c.value === activeColor)) {
                        setActiveColor(hlColors[0].value);
                      }
                    }}
                    className={`w-full py-1.5 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      activeTool === "highlighter"
                        ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                        : "text-stone-400 hover:text-stone-800 hover:bg-stone-200/50"
                    }`}
                    title="Bút tô sáng (Highlighter)"
                  >
                    <Highlighter size={14} />
                    {activeTool === "highlighter" && (
                      <div 
                        className="absolute bottom-1 right-2.5 w-1.5 h-1.5 rounded-full border border-stone-950"
                        style={{ backgroundColor: hlColors.find(c => c.value === activeColor)?.preview || activeColor }}
                      />
                    )}
                  </button>

                  {/* Highlighter colors submenu */}
                  {activeTool === "highlighter" && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 p-1 rounded-full border border-stone-250 bg-stone-100 shadow-xl z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                      {hlColors.map(color => (
                        <button
                          key={color.value}
                          onClick={() => setActiveColor(color.value)}
                          className={`w-4 h-4 rounded-full border hover:scale-125 transition-transform cursor-pointer ${
                            activeColor === color.value
                              ? "border-accent scale-110 shadow-sm"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.preview }}
                          title={`Tô sáng màu ${color.label}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Eraser Button */}
                <button
                  onClick={() => setActiveTool("eraser")}
                  className={`flex-1 py-1.5 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    activeTool === "eraser"
                      ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                      : "text-stone-400 hover:text-stone-800 hover:bg-stone-200/50"
                  }`}
                  title="Cục tẩy (Eraser)"
                >
                  <Eraser size={14} />
                </button>

                {/* Divider */}
                <div className="w-[1px] h-4 bg-stone-250 mx-0.5" />

                {/* 5. Clear All Button */}
                <button
                  onClick={onClearAll}
                  className="flex-1 py-1.5 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 cursor-pointer"
                  title="Xóa sạch toàn bộ ghi chú (Clear All)"
                >
                  <Trash2 size={14} />
                </button>

              </div>
            )}
            <span className="text-[9px] text-stone-500 tracking-wider uppercase font-bold select-none italic mt-1">
              Focus. Calm. Decide. Succeed.
            </span>
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
