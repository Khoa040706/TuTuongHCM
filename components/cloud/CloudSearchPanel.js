"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, BookOpen } from "lucide-react";
import { cloudGlossary } from "../../lib/curriculum";

export default function CloudSearchPanel({ isOpen, onClose, onSelectSubsection }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Global Ctrl + K / Cmd + K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();
  const filteredTerms = cloudGlossary.filter((t) => {
    if (!normalizedQuery) return true;
    return (
      t.vi.toLowerCase().includes(normalizedQuery) ||
      t.en.toLowerCase().includes(normalizedQuery) ||
      (t.abbreviation && t.abbreviation.toLowerCase().includes(normalizedQuery)) ||
      t.definition.toLowerCase().includes(normalizedQuery) ||
      (t.aliases && t.aliases.some((a) => a.toLowerCase().includes(normalizedQuery)))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/50 backdrop-blur-xs font-sans animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center gap-3 bg-stone-50/70">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm thuật ngữ (ví dụ: IaaS, Multi-tenant, SSO, S3, Ảo hóa...)"
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-stone-850 placeholder:text-stone-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full hover:bg-stone-200 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold text-stone-500 bg-stone-200 rounded-lg hover:bg-stone-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1 divide-y divide-stone-100">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-stone-600">Không tìm thấy thuật ngữ phù hợp</p>
              <p className="text-xs text-stone-400 mt-1">Hãy thử tìm bằng từ viết tắt tiếng Anh hoặc từ khóa tiếng Việt.</p>
            </div>
          ) : (
            filteredTerms.map((term) => (
              <div
                key={term.id}
                onClick={() => {
                  if (onSelectSubsection && term.subsectionId) {
                    onSelectSubsection(term.subsectionId);
                    onClose();
                  }
                }}
                className="pt-3 first:pt-0 flex items-start justify-between gap-4 p-3 rounded-2xl hover:bg-stone-50 cursor-pointer transition-all group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-stone-850 group-hover:text-accent transition-colors">
                      {term.vi}
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      ({term.en})
                    </span>
                    {term.abbreviation && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                        {term.abbreviation}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {term.definition}
                  </p>
                </div>

                <div className="shrink-0 pt-1">
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
