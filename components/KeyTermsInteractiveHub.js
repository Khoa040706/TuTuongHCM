"use client";
import React, { useState } from "react";
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  Layers, 
  FileCode, 
  HelpCircle,
  Hash
} from "lucide-react";

export default function KeyTermsInteractiveHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [flippedCards, setFlippedCards] = useState({});

  const keyTerms = [
    {
      id: "is",
      term: "Information System",
      vnTerm: "Hệ thống thông tin",
      category: "Foundation",
      color: "from-blue-600 to-indigo-600",
      definition: "Tập hợp 5 thành phần liên kết chặt chẽ (People, Procedures, Hardware, Software, Data) cùng phối hợp để thu thập, lưu trữ, xử lý và phân phối thông tin hỗ trợ việc ra quyết định trong tổ chức."
    },
    {
      id: "ba",
      term: "Business Analyst (BA)",
      vnTerm: "Chuyên viên phân tích nghiệp vụ",
      category: "Role",
      color: "from-purple-600 to-pink-600",
      definition: "Người đóng vai trò cầu nối (The Bridge) giữa các bên liên quan nghiệp vụ (Business Stakeholders) và đội ngũ kỹ thuật (Tech Team); chịu trách nhiệm điều tra, phân tích, định nghĩa và chuyển đổi yêu cầu thành giải pháp phần mềm."
    },
    {
      id: "methodology",
      term: "Methodology",
      vnTerm: "Phương pháp luận phát triển",
      category: "Process",
      color: "from-emerald-600 to-teal-600",
      definition: "Cách tiếp cận có cấu trúc tổng thể, cung cấp hướng dẫn từng bước (bao gồm các giai đoạn Phases, hoạt động Activities, sản phẩm bàn giao Deliverables và tiêu chuẩn chất lượng) để thực thi toàn bộ dự án."
    },
    {
      id: "model",
      term: "Model",
      vnTerm: "Mô hình trừu tượng",
      category: "Artifact",
      color: "from-amber-600 to-orange-600",
      definition: "Bản biểu diễn trừu tượng và đơn giản hóa của một đối tượng, quy trình hoặc hệ thống thực tế; giúp các bên giao tiếp hiệu quả, quản lý độ phức tạp và làm bản thiết kế chi tiết trước khi lập trình."
    },
    {
      id: "uml",
      term: "UML (Unified Modeling Language)",
      vnTerm: "Ngôn ngữ mô hình hóa thống nhất",
      category: "Standard",
      color: "from-cyan-600 to-blue-600",
      definition: "Hệ thống ngôn ngữ ký hiệu và cú pháp chuẩn quốc tế (do OMG chuẩn hóa) dùng để đặc tả, trực quan hóa, xây dựng và làm tài liệu cho các hệ thống phần mềm hướng đối tượng (OO)."
    },
    {
      id: "sdlc",
      term: "SDLC (Systems Development Life Cycle)",
      vnTerm: "Vòng đời phát triển hệ thống",
      category: "Process",
      color: "from-rose-600 to-red-600",
      definition: "Tiến trình chuẩn gồm 5 giai đoạn khép kín theo chu kỳ (Planning ➔ Analysis ➔ Design ➔ Implementation ➔ Support) mà một hệ thống phần mềm phải trải qua từ khi nảy sinh ý tưởng đến khi vận hành và nâng cấp."
    },
    {
      id: "up",
      term: "Unified Process (UP)",
      vnTerm: "Quy trình thống nhất",
      category: "Methodology",
      color: "from-violet-600 to-purple-600",
      definition: "Phương pháp luận phát triển phần mềm hướng đối tượng (OO) kinh điển, có đặc trưng: Lặp và tăng dần (Iterative & Incremental), lấy kiến trúc làm trọng tâm (Architecture-centric) và được dẫn dắt bởi Use Cases qua 4 phase."
    },
    {
      id: "iteration",
      term: "Iteration",
      vnTerm: "Vòng lặp phát triển",
      category: "Agile/UP",
      color: "from-teal-600 to-emerald-600",
      definition: "Một chu kỳ phát triển lặp lại ở quy mô nhỏ có thời lượng cố định (Time-boxed từ 1-4 tuần), thực hiện đầy đủ các bước phân tích, thiết kế, code, test và xuất bản ra một bản tăng dần hoạt động được (Working Increment)."
    }
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredTerms = keyTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.vnTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Flashcards Hub 8 Thuật Ngữ Vàng Chapter 1
            </h2>
            <p className="text-xs text-slate-400">
              Bấm vào từng thẻ để lật xem định nghĩa học thuật chuẩn mực phục vụ kỳ thi trắc nghiệm.
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Tìm nhanh thuật ngữ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 w-48 sm:w-60"
          />
        </div>
      </div>

      {/* Grid of 8 Flashcards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {filteredTerms.map((t) => {
          const isFlipped = flippedCards[t.id];
          return (
            <div
              key={t.id}
              onClick={() => toggleFlip(t.id)}
              className="cursor-pointer group relative h-56 perspective rounded-2xl transition-all duration-300"
            >
              <div
                className={`w-full h-full rounded-2xl border p-4 flex flex-col justify-between transition-all duration-300 ${
                  isFlipped
                    ? "bg-slate-950 border-purple-400 ring-2 ring-purple-400/40 shadow-xl"
                    : "bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                }`}
              >
                {!isFlipped ? (
                  /* Front of Card */
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-purple-400 border border-slate-800">
                          {t.category}
                        </span>
                        <RotateCw className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors">
                        {t.term}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{t.vnTerm}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Bấm để xem định nghĩa</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>
                ) : (
                  /* Back of Card */
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-extrabold text-xs text-purple-400 uppercase tracking-wider">{t.term}</h4>
                        <RotateCw className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium mt-1">
                        {t.definition}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Chuẩn giáo trình ôn thi
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
