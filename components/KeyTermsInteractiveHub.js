"use client";

import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  RotateCw,
  CheckCircle2,
  Layers,
  FileCode,
  HelpCircle,
  Hash,
  Eye,
  CheckSquare,
  Bookmark
} from "lucide-react";

export default function KeyTermsInteractiveHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [flippedCards, setFlippedCards] = useState({});

  const keyTerms = [
    {
      id: "is",
      term: "Information System (IS)",
      vnTerm: "Hệ thống thông tin",
      category: "Foundation",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      color: "from-blue-600 to-indigo-600",
      definition:
        "Tập hợp 5 thành phần liên kết chặt chẽ (Hardware, Software, Data, Procedures, People) cùng phối hợp để thu thập, lưu trữ, xử lý và phân phối thông tin hỗ trợ việc ra quyết định trong tổ chức.",
      examTip: "Bẫy thi: 'Data' là dữ liệu thô chưa qua xử lý, còn 'Information' là dữ liệu đã được xử lý và có ý nghĩa."
    },
    {
      id: "ba",
      term: "Business Analyst (BA)",
      vnTerm: "Chuyên viên phân tích nghiệp vụ",
      category: "Role",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      color: "from-purple-600 to-pink-600",
      definition:
        "Người đóng vai trò cầu nối (The Bridge) giữa các bên liên quan nghiệp vụ (Business Stakeholders) và đội ngũ kỹ thuật (Tech Team); chịu trách nhiệm điều tra, phân tích, định nghĩa và chuyển đổi yêu cầu thành giải pháp phần mềm.",
      examTip: "Bẫy thi: BA không trực tiếp viết code phần mềm mà chịu trách nhiệm về tính đúng đắn của yêu cầu và phạm vi nghiệp vụ."
    },
    {
      id: "methodology",
      term: "Methodology",
      vnTerm: "Phương pháp luận phát triển",
      category: "Process",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      color: "from-emerald-600 to-teal-600",
      definition:
        "Cách tiếp cận có cấu trúc tổng thể, cung cấp hướng dẫn từng bước (bao gồm các giai đoạn Phases, hoạt động Activities, sản phẩm bàn giao Deliverables và tiêu chuẩn chất lượng) để thực thi toàn bộ dự án.",
      examTip: "Methodology bao hàm: Khi nào dùng Technique gì để tạo ra Model nào và dùng Tool nào hỗ trợ."
    },
    {
      id: "model",
      term: "Model",
      vnTerm: "Mô hình trừu tượng",
      category: "Artifact",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      color: "from-amber-600 to-orange-600",
      definition:
        "Bản biểu diễn trừu tượng và đơn giản hóa của một đối tượng, quy trình hoặc hệ thống thực tế; giúp các bên giao tiếp hiệu quả, quản lý độ phức tạp và làm bản thiết kế chi tiết trước khi lập trình.",
      examTip: "Ví dụ kinh điển: Use Case Diagram, Class Diagram, Sequence Diagram, DFD."
    },
    {
      id: "uml",
      term: "UML (Unified Modeling Language)",
      vnTerm: "Ngôn ngữ mô hình hóa thống nhất",
      category: "Standard",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      color: "from-cyan-600 to-blue-600",
      definition:
        "Hệ thống ngôn ngữ ký hiệu và cú pháp chuẩn quốc tế (do OMG chuẩn hóa) dùng để đặc tả, trực quan hóa, xây dựng và làm tài liệu cho các hệ thống phần mềm hướng đối tượng (OO).",
      examTip: "UML gồm 2 nhóm chính: Structural Diagrams (Tĩnh) và Behavioral Diagrams (Động)."
    },
    {
      id: "sdlc",
      term: "SDLC (Systems Development Life Cycle)",
      vnTerm: "Vòng đời phát triển hệ thống",
      category: "Process",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      color: "from-rose-600 to-red-600",
      definition:
        "Tiến trình chuẩn gồm 5 giai đoạn khép kín theo chu kỳ (Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Support) mà một hệ thống phần mềm phải trải qua từ khi nảy sinh ý tưởng đến khi vận hành và bảo trì.",
      examTip: "Thứ tự 5 pha kinh điển bắt buộc phải nhớ: Plan ➔ Analyze ➔ Design ➔ Implement ➔ Support."
    },
    {
      id: "up",
      term: "Unified Process (UP)",
      vnTerm: "Quy trình thống nhất",
      category: "Methodology",
      badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/40",
      color: "from-violet-600 to-purple-600",
      definition:
        "Phương pháp luận phát triển phần mềm hướng đối tượng (OO) kinh điển, có đặc trưng: Lặp và tăng dần (Iterative & Incremental), lấy kiến trúc làm trọng tâm (Architecture-centric) và được dẫn dắt bởi Use Cases qua 4 phase.",
      examTip: "4 pha của UP: Inception (Khởi tạo) ➔ Elaboration (Phác thảo) ➔ Construction (Xây dựng) ➔ Transition (Chuyển giao)."
    },
    {
      id: "iteration",
      term: "Iteration",
      vnTerm: "Vòng lặp phát triển",
      category: "Process",
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/40",
      color: "from-teal-600 to-emerald-600",
      definition:
        "Một chu kỳ phát triển lặp lại ở quy mô nhỏ có thời lượng cố định (Time-boxed từ 1-4 tuần), thực hiện đầy đủ các bước phân tích, thiết kế, code, test và xuất bản ra một bản tăng dần hoạt động được (Working Increment).",
      examTip: "Mục đích tối thượng của Iteration là triệt tiêu rủi ro sớm và nhận phản hồi tức thì từ khách hàng."
    }
  ];

  const categories = [
    { id: "all", label: "Tất cả (8)" },
    { id: "Foundation", label: "Nền tảng IS" },
    { id: "Role", label: "Vai trò BA" },
    { id: "Process", label: "Quy trình SDLC" },
    { id: "Artifact", label: "Mô hình & Chuẩn" },
    { id: "Methodology", label: "Phương pháp luận" }
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const flipAll = (state) => {
    const next = {};
    keyTerms.forEach((t) => {
      next[t.id] = state;
    });
    setFlippedCards(next);
  };

  const filteredTerms = useMemo(() => {
    return keyTerms.filter((t) => {
      const matchCat =
        selectedCategory === "all" ||
        t.category === selectedCategory ||
        (selectedCategory === "Artifact" && (t.category === "Artifact" || t.category === "Standard"));
      const q = searchTerm.toLowerCase().trim();
      const matchSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.vnTerm.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.examTip.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white font-bold text-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-wider">
                Chapter 1 Vocabulary Hub
              </span>
              <span className="text-xs text-slate-400">8 Thuật Ngữ Cốt Lõi</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              Flashcards Thuật Ngữ Vàng — Requirements Analysis & Design
            </h2>
          </div>
        </div>

        {/* Global Action Buttons & Search */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Tìm nhanh thuật ngữ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 w-44 sm:w-56 transition-all"
            />
          </div>

          <button
            onClick={() => flipAll(true)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-950/80 hover:bg-purple-900/80 text-purple-300 border border-purple-700/60 transition-all flex items-center gap-1.5"
          >
            <RotateCw className="w-3.5 h-3.5" />
            Lật tất cả
          </button>
          <button
            onClick={() => flipAll(false)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800 transition-all"
          >
            Đóng lại
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === c.id
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                : "bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid of Flashcards: 2 columns on laptop (sm/md/lg), 4 on xl screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {filteredTerms.map((t) => {
          const isFlipped = flippedCards[t.id];
          return (
            <div
              key={t.id}
              onClick={() => toggleFlip(t.id)}
              className="cursor-pointer group relative min-h-[230px] rounded-2xl transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-full flex-1 rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 shadow-md ${
                  isFlipped
                    ? "bg-slate-950 border-purple-400 ring-2 ring-purple-400/40 shadow-purple-950/50"
                    : "bg-slate-950/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90"
                }`}
              >
                {!isFlipped ? (
                  /* Front of Card */
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${t.badgeColor}`}>
                          {t.category}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 group-hover:text-purple-400 transition-colors">
                          <RotateCw className="w-3.5 h-3.5" />
                          <span>Lật xem</span>
                        </div>
                      </div>

                      <h3 className="font-extrabold text-base text-white group-hover:text-purple-300 transition-colors leading-snug">
                        {t.term}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{t.vnTerm}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Bấm để xem định nghĩa
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Back of Card */
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
                        <h4 className="font-extrabold text-xs text-purple-300 uppercase tracking-wider">{t.term}</h4>
                        <RotateCw className="w-3.5 h-3.5 text-purple-400" />
                      </div>

                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        {t.definition}
                      </p>

                      <div className="mt-3 p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-300/90 leading-relaxed font-medium">
                        💡 <strong>Mẹo thi: </strong>
                        {t.examTip}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[10px] text-emerald-400 font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Chuẩn giáo trình
                      </span>
                      <span className="text-slate-500 font-normal">Nhấn để lật lại</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
