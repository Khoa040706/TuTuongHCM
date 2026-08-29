"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  FileCheck
} from "lucide-react";

export default function AdminQuestionsTab({ allSubjects = {} }) {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState("preview"); // "preview" | "focus"

  useEffect(() => {
    setMounted(true);
  }, []);

  // Available subjects with questions
  const subjectsWithQuestions = Object.values(allSubjects).filter(
    (s) => s.questionsMap && Object.keys(s.questionsMap).length > 0
  );

  const [selectedSubjId, setSelectedSubjId] = useState(
    subjectsWithQuestions[0]?.id || "tu-tuong-hcm"
  );

  const currentSubject = allSubjects[selectedSubjId] || subjectsWithQuestions[0];
  const chapters = currentSubject?.chapters || [];

  const [selectedChapterId, setSelectedChapterId] = useState(
    chapters[0]?.id || ""
  );

  const [filterType, setFilterType] = useState("all"); // all | tricks | warning
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  // Lock body scroll when entering Focus Mode & Listen for Escape key
  useEffect(() => {
    if (viewMode === "focus") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && viewMode === "focus") {
        setViewMode("preview");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewMode]);

  // Get question data for selected subject and chapter
  const currentChapterData =
    currentSubject?.questionsMap?.[selectedChapterId] ||
    currentSubject?.questionsMap?.[chapters[0]?.id] ||
    null;

  const insideQuestions = currentChapterData?.inside || [];
  const outsideQuestions = currentChapterData?.outside || [];
  const trickQuestions = currentChapterData?.tricks || [];

  const allQuestions = [...insideQuestions, ...outsideQuestions, ...trickQuestions];

  // Helper to compute max - min length of options
  const getLengthDelta = (q) => {
    if (!q.options || q.options.length === 0) return 0;
    const lengths = q.options.map((opt) => opt.length);
    const max = Math.max(...lengths);
    const min = Math.min(...lengths);
    return max - min;
  };

  // Rule Verification stats
  const totalCount = allQuestions.length;
  const compliantCount = allQuestions.filter((q) => getLengthDelta(q) <= 15).length;
  const compliantPercent =
    totalCount > 0 ? Math.round((compliantCount / totalCount) * 100) : 100;
  const trapsCount = allQuestions.filter((q) => q.trickDetails).length;

  // Filter questions
  const filteredQuestions = allQuestions.filter((q) => {
    const delta = getLengthDelta(q);
    const hasTrap = !!q.trickDetails;
    const matchSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      (q.id && q.id.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    if (!matchSearch) return false;
    if (filterType === "tricks") return hasTrap;
    if (filterType === "warning") return delta > 15;
    return true;
  });

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. PREVIEW MODE (TINH GỌN, KHÔNG RENDER FULL CÂU HỎI TRONG DASHBOARD)      */}
      {/* ========================================================================= */}
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* 3 Analytics Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Metric 1: Total & Set breakdown */}
          <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7A70] dark:text-stone-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Tổng số câu hỏi
              </span>
              <BookOpen size={15} className="text-[#38150E] dark:text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#38150E] dark:text-white">{totalCount} câu</div>
            <div className="text-[11px] text-[#8C7A70] dark:text-stone-400 font-medium flex gap-2">
              <span>Inside: {insideQuestions.length}</span>
              <span>•</span>
              <span>Outside: {outsideQuestions.length}</span>
              <span>•</span>
              <span>Tricks: {trickQuestions.length}</span>
            </div>
          </div>

          {/* Metric 2: Rule <= 15 chars Compliance */}
          <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7A70] dark:text-stone-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Độ lệch đáp án (≤ 15 chars)
              </span>
              <CheckCircle2
                size={15}
                className={compliantPercent >= 95 ? "text-[#15803D] dark:text-[#86EFAC]" : "text-[#D85A38]"}
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#15803D] dark:text-[#86EFAC]">
                {compliantPercent}%
              </span>
              <span className="text-[11px] text-[#8C7A70] dark:text-stone-400 font-bold">
                ({compliantCount}/{totalCount} câu đạt chuẩn)
              </span>
            </div>
            <div className="w-full bg-[#FAF5EE] dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#15803D] rounded-full transition-all duration-500"
                style={{ width: `${compliantPercent}%` }}
              />
            </div>
          </div>

          {/* Metric 3: Traps / Trick Details */}
          <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#8C7A70] dark:text-stone-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Bẫy tư duy Vận dụng cao
              </span>
              <Flame size={15} className="text-[#D85A38]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#D85A38]">{trapsCount} câu bẫy</div>
            <div className="text-[11px] text-[#8C7A70] dark:text-stone-400 font-medium">
              100% câu bẫy có phân tích & mẹo giải
            </div>
          </div>
        </div>

        {/* Compact Workspace Banner */}
        <div className="bg-gradient-to-br from-white to-[#FAF5EE] dark:from-[#18191B] dark:to-[#121214] border border-[#E8DACB] dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D85A38] to-[#D48B38] flex items-center justify-center text-white font-black shadow-md shrink-0">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-[#38150E] dark:text-white leading-tight">
                Không Gian Kiểm Định & Soi Bẫy Đề Thi Toàn Diện
              </h3>
              <p className="text-xs sm:text-sm text-[#8C7A70] dark:text-stone-400 font-medium mt-1 max-w-xl">
                Truy cập hệ thống kiểm định quy tắc chống đoán bừa $\le 15$ ký tự, lọc 50 câu bẫy tư duy và soi ma trận trích dẫn giáo trình cho toàn bộ 10 môn học.
              </p>
            </div>
          </div>

          <button
            onClick={() => setViewMode("focus")}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#D85A38] hover:bg-[#C44C2C] active:scale-95 shadow-lg shadow-[#D85A38]/30 transition-all duration-200 cursor-pointer border-none group shrink-0 whitespace-nowrap"
          >
            <span>Mở Trình Kiểm Định Toàn Màn Hình</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={13} />
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FOCUS MODE: FULLSCREEN PORTAL MODAL DIRECTLY ATTACHED TO BODY         */}
      {/* ========================================================================= */}
      {viewMode === "focus" && mounted && createPortal(
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] dark:bg-[#121214] overflow-y-auto p-4 sm:p-6 lg:p-10 animate-in fade-in zoom-in-95 duration-200 select-none">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Sticky Focus Header Bar */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#18191B]/95 backdrop-blur-2xl border border-[#E8DACB] dark:border-white/10 rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D85A38] to-[#D48B38] flex items-center justify-center text-white font-black shadow-sm">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-black text-xl sm:text-2xl text-[#38150E] dark:text-white tracking-tight">
                      Kiểm Định Ngân Hàng Câu Hỏi & Bẫy Tư Duy
                    </h2>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-extrabold bg-[#FEF3C7] dark:bg-[#D97706]/15 text-[#D97706] dark:text-[#FCD34D] border border-[#FDE68A] dark:border-[#D97706]/30">
                      Focus Mode
                    </span>
                  </div>
                  <p className="text-xs text-[#8C7A70] dark:text-stone-400 font-medium mt-0.5">
                    Kiểm soát quy tắc chống đoán bừa ≤ 15 ký tự và phân tích 50 câu bẫy vận dụng cao.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={() => setViewMode("preview")}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-2xl bg-white dark:bg-white/10 hover:bg-[#FAF5EE] dark:hover:bg-white/20 border border-[#E8DACB] dark:border-white/15 text-xs font-bold text-[#38150E] dark:text-white transition-all cursor-pointer shadow-xs"
                  title="Thu gọn về dòng thời gian (Phím Esc)"
                >
                  <Minimize2 size={15} className="text-[#D85A38]" />
                  <span>Thu gọn (Esc)</span>
                </button>
              </div>
            </div>

            {/* Top Selector Bar: Subject & Chapter */}
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-3xl p-5 shadow-xs">
              <div className="flex flex-wrap items-center gap-3">
                {/* Subject Dropdown */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] dark:text-stone-400 mb-1">
                    Môn Học
                  </label>
                  <select
                    value={selectedSubjId}
                    onChange={(e) => {
                      setSelectedSubjId(e.target.value);
                      const subj = allSubjects[e.target.value];
                      if (subj?.chapters?.length > 0) {
                        setSelectedChapterId(subj.chapters[0].id);
                      }
                    }}
                    className="px-3.5 py-2 text-xs font-bold rounded-xl border border-[#E8DACB] dark:border-white/15 bg-[#FAF8F5] dark:bg-white/5 text-[#38150E] dark:text-white focus:outline-none focus:border-[#D85A38] transition-colors cursor-pointer"
                  >
                    {Object.values(allSubjects).map((s) => (
                      <option key={s.id} value={s.id} className="bg-white dark:bg-[#18191B] text-[#38150E] dark:text-white">
                        {s.icon || "📖"} {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Chapter Dropdown */}
                {chapters.length > 0 && (
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] dark:text-stone-400 mb-1">
                      Chương / Đề Thi
                    </label>
                    <select
                      value={selectedChapterId}
                      onChange={(e) => setSelectedChapterId(e.target.value)}
                      className="px-3.5 py-2 text-xs font-bold rounded-xl border border-[#E8DACB] dark:border-white/15 bg-[#FAF8F5] dark:bg-white/5 text-[#38150E] dark:text-white focus:outline-none focus:border-[#D85A38] transition-colors cursor-pointer max-w-[280px]"
                    >
                      {chapters.map((ch) => (
                        <option key={ch.id} value={ch.id} className="bg-white dark:bg-[#18191B] text-[#38150E] dark:text-white">
                          {ch.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Search Question Box */}
              <div className="relative md:w-72">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] dark:text-stone-400 mb-1">
                  Tìm Kiếm Câu Hỏi
                </label>
                <div className="relative">
                  <Search size={14} className="absolute left-3.5 top-2.5 text-[#8C7A70]" />
                  <input
                    type="text"
                    placeholder="Nhập từ khóa, mã câu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-[#E8DACB] dark:border-white/15 bg-[#FAF8F5] dark:bg-white/5 text-[#38150E] dark:text-white placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Rule Verification Analytics Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-4 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between text-[#8C7A70] dark:text-stone-400">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">
                    Tổng số câu hỏi
                  </span>
                  <BookOpen size={14} className="text-[#38150E] dark:text-white" />
                </div>
                <div className="text-xl font-black text-[#38150E] dark:text-white">{totalCount} câu</div>
                <div className="text-[10px] text-[#8C7A70] dark:text-stone-400 font-medium flex gap-2">
                  <span>Inside: {insideQuestions.length}</span>
                  <span>•</span>
                  <span>Outside: {outsideQuestions.length}</span>
                  <span>•</span>
                  <span>Tricks: {trickQuestions.length}</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-4 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between text-[#8C7A70] dark:text-stone-400">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">
                    Độ lệch đáp án (≤ 15 chars)
                  </span>
                  <CheckCircle2
                    size={14}
                    className={compliantPercent >= 95 ? "text-[#15803D] dark:text-[#86EFAC]" : "text-[#D85A38]"}
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-[#15803D] dark:text-[#86EFAC]">
                    {compliantPercent}%
                  </span>
                  <span className="text-[10px] text-[#8C7A70] dark:text-stone-400 font-bold">
                    ({compliantCount}/{totalCount} câu đạt chuẩn)
                  </span>
                </div>
                <div className="w-full bg-[#FAF5EE] dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#15803D] rounded-full transition-all duration-500"
                    style={{ width: `${compliantPercent}%` }}
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-4 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between text-[#8C7A70] dark:text-stone-400">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">
                    Bẫy tư duy thực chiến
                  </span>
                  <Flame size={14} className="text-[#D85A38]" />
                </div>
                <div className="text-xl font-black text-[#D85A38]">{trapsCount} câu bẫy</div>
                <div className="text-[10px] text-[#8C7A70] dark:text-stone-400 font-medium">
                  Có đầy đủ trích dẫn & mẹo giải bẫy
                </div>
              </div>
            </div>

            {/* Filter Tabs Bar */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: `Tất cả câu hỏi (${allQuestions.length})` },
                { id: "tricks", label: `⚡ Câu hỏi Bẫy tư duy (${trapsCount})` },
                {
                  id: "warning",
                  label: `⚠️ Cần cân bằng chiều dài (${allQuestions.filter((q) => getLengthDelta(q) > 15).length})`
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterType(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    filterType === tab.id
                      ? "bg-[#38150E] dark:bg-white text-[#FAF8F5] dark:text-[#18191B] border-[#38150E] dark:border-white shadow-xs"
                      : "bg-white dark:bg-white/5 text-[#6E5D53] dark:text-stone-300 border-[#E8DACB] dark:border-white/10 hover:border-[#D85A38] hover:bg-[#FAF5EE]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Full Questions Inspector List */}
            <div className="space-y-3">
              {filteredQuestions.length === 0 ? (
                <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-3xl p-12 text-center text-xs text-[#8C7A70] dark:text-stone-400 italic">
                  Chưa có câu hỏi nào khớp với tiêu chí tìm kiếm hoặc chương này chưa nạp câu hỏi trắc nghiệm.
                </div>
              ) : (
                filteredQuestions.map((q, idx) => {
                  const delta = getLengthDelta(q);
                  const isCompliant = delta <= 15;
                  const isExpanded =
                    expandedQuestionId === (q.id || idx) || filterType === "tricks";
                  const qId = q.id || `q-${idx + 1}`;

                  return (
                    <div
                      key={qId}
                      className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-[#D48B38] transition-all space-y-3 select-none"
                    >
                      {/* Question Header */}
                      <div
                        onClick={() =>
                          setExpandedQuestionId(isExpanded ? null : qId)
                        }
                        className="flex items-start justify-between gap-3 cursor-pointer"
                      >
                        <div className="space-y-1.5 flex-grow">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#FAF5EE] dark:bg-white/10 border border-[#E8DACB] dark:border-white/15 text-[#38150E] dark:text-white">
                              {qId}
                            </span>

                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                                isCompliant
                                  ? "bg-[#F0FDF4] dark:bg-[#15803D]/15 text-[#15803D] dark:text-[#86EFAC] border-[#BBF7D0] dark:border-[#15803D]/30"
                                  : "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]"
                              }`}
                            >
                              {isCompliant
                                ? `✓ Cân bằng (Δ = ${delta} chars)`
                                : `⚠️ Lệch dài (Δ = ${delta} chars)`}
                            </span>

                            {q.trickDetails && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FEF2F2] text-[#D85A38] border border-[#FECACA]">
                                <Flame size={11} /> Bẫy Vận Dụng Cao
                              </span>
                            )}
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-[#38150E] dark:text-white leading-relaxed">
                            {q.question}
                          </h4>
                        </div>

                        <button className="p-1 text-[#8C7A70] dark:text-stone-400 hover:text-[#38150E] dark:hover:text-white transition-colors shrink-0">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>

                      {/* Expanded Details: 4 Options & Trick Breakdown */}
                      {isExpanded && (
                        <div className="space-y-4 pt-3 border-t border-[#F4EBE0] dark:border-white/10 animate-in fade-in duration-200">
                          {/* 4 Options Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isCorrect = optIdx === q.correctAnswer;
                              const optChar = String.fromCharCode(65 + optIdx);
                              const optLen = opt.length;

                              return (
                                <div
                                  key={optIdx}
                                  className={`p-2.5 rounded-xl border text-xs flex items-start justify-between gap-2 ${
                                    isCorrect
                                      ? "bg-[#F0FDF4] dark:bg-[#15803D]/15 border-[#BBF7D0] dark:border-[#15803D]/30 text-[#15803D] dark:text-[#86EFAC] font-bold"
                                      : "bg-[#FAF8F5] dark:bg-white/5 border-[#F4EBE0] dark:border-white/10 text-[#6E5D53] dark:text-stone-300"
                                  }`}
                                >
                                  <div className="flex items-start gap-2">
                                    <span
                                      className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                                        isCorrect
                                          ? "bg-[#15803D] text-white"
                                          : "bg-[#E8DACB] text-[#38150E]"
                                      }`}
                                    >
                                      {optChar}
                                    </span>
                                    <span>{opt}</span>
                                  </div>

                                  <span className="text-[9px] font-mono font-bold text-[#8C7A70] dark:text-stone-400 shrink-0">
                                    {optLen}c
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Trick Details Breakdown Card */}
                          {q.trickDetails && (
                            <div className="bg-[#FAF5EE] dark:bg-white/5 border border-[#E8DACB] dark:border-white/10 rounded-xl p-4 space-y-2 text-xs">
                              <div className="flex items-center gap-1.5 text-[#D85A38] font-extrabold uppercase text-[10px] tracking-wider">
                                <Flame size={13} />
                                <span>Hồ sơ phân tích bẫy tư duy</span>
                              </div>

                              {q.trickDetails.whyTrapped && (
                                <div>
                                  <span className="font-bold text-[#38150E] dark:text-white">
                                    Nguyên nhân dễ chọn sai:{" "}
                                  </span>
                                  <span className="text-[#6E5D53] dark:text-stone-300">
                                    {q.trickDetails.whyTrapped}
                                  </span>
                                </div>
                              )}

                              {q.trickDetails.trickWord && (
                                <div>
                                  <span className="font-bold text-[#38150E] dark:text-white">
                                    Từ khóa bẫy nhiễu:{" "}
                                  </span>
                                  <span className="text-[#D85A38] font-semibold">
                                    &ldquo;{q.trickDetails.trickWord}&rdquo;
                                  </span>
                                </div>
                              )}

                              {q.trickDetails.citation && (
                                <div>
                                  <span className="font-bold text-[#38150E] dark:text-white">
                                    Trích dẫn giáo trình chuẩn:{" "}
                                  </span>
                                  <span className="text-[#6E5D53] dark:text-stone-300 italic">
                                    {q.trickDetails.citation}
                                  </span>
                                </div>
                              )}

                              {q.trickDetails.tip && (
                                <div className="bg-white dark:bg-white/10 border border-[#E8DACB] dark:border-white/15 p-2.5 rounded-lg text-[#15803D] dark:text-[#86EFAC] font-medium">
                                  💡 <strong>Mẹo nhớ nhanh:</strong> {q.trickDetails.tip}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
