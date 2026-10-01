"use client";
import React, { useState } from "react";
import { 
  Bookmark, 
  Search, 
  Sparkles, 
  Layers, 
  RotateCw, 
  CheckCircle2,
  BookOpen,
  Filter
} from "lucide-react";

export default function Chapter2KeyTermsHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [selectedTag, setSelectedTag] = useState("all");
  const [allFlipped, setAllFlipped] = useState(false);

  const terms = [
    {
      id: "sdlc",
      term: "SDLC (Systems Development Life Cycle)",
      vnTerm: "Vòng đời phát triển hệ thống",
      def: "Khái niệm bao trùm (Umbrella Concept) định nghĩa tất cả các giai đoạn (phases) và hoạt động cần thiết để phân tích, thiết kế, xây dựng và bảo trì một hệ thống thông tin.",
      tag: "Cốt lõi SDLC",
      examTip: "Từ khóa thi: 'Umbrella concept' — Mọi methodology đều là 1 cách triển khai của SDLC."
    },
    {
      id: "predictive",
      term: "Predictive Approach",
      vnTerm: "Phương pháp tiếp cận Dự đoán (Waterfall)",
      def: "Cách tiếp cận lập kế hoạch toàn diện và cố định phạm vi yêu cầu ngay từ ban đầu (Up-Front), thực hiện tuần tự qua 5 phase và bàn giao hệ thống 1 lần ở cuối dự án.",
      tag: "Trường phái SDLC",
      examTip: "Triết lý: 'Plan the work, then work the plan' — Thích hợp khi requirements ổn định."
    },
    {
      id: "adaptive",
      term: "Adaptive Approach",
      vnTerm: "Phương pháp tiếp cận Thích ứng (Agile/UP)",
      def: "Cách tiếp cận linh hoạt, chào đón thay đổi, lặp lại các phase của SDLC trong mỗi vòng lặp ngắn (Iteration 1-4 tuần) và liên tục bàn giao các phần mềm chạy được (Working Increments).",
      tag: "Trường phái SDLC",
      examTip: "Triết lý: 'Embrace change' — Lặp lại cả 5 phase trong mỗi Iteration ngắn."
    },
    {
      id: "business-modeling",
      term: "Business Modeling",
      vnTerm: "Mô hình hóa doanh nghiệp",
      def: "Quá trình mô tả cách thức một tổ chức đang hoạt động (hoặc nên hoạt động) bằng ngôn ngữ nghiệp vụ, hoàn toàn độc lập với bất kỳ hệ thống phần mềm IT nào.",
      tag: "Business Modeling",
      examTip: "Mục tiêu: Hiểu rõ ngữ cảnh nghiệp vụ trước khi thiết kế hệ thống phần mềm tự động hóa."
    },
    {
      id: "business-actor",
      term: "Business Actor [A]",
      vnTerm: "Tác nhân nghiệp vụ (Bên ngoài)",
      def: "Người, tổ chức hoặc thực thể bên ngoài doanh nghiệp có tương tác với doanh nghiệp (như Khách hàng [Primary] hoặc Ngân hàng [External]). Ký hiệu người que có gạch chéo (/)",
      tag: "Business Modeling",
      examTip: "Lưu ý bẫy: Tác nhân bên NGOÀI ranh giới doanh nghiệp — Ký hiệu có dấu gạch chéo (/)."
    },
    {
      id: "business-worker",
      term: "Business Worker [W]",
      vnTerm: "Người thực thi nghiệp vụ (Bên trong)",
      def: "Người hoặc vai trò bên trong nội bộ doanh nghiệp (như Nhân viên bán hàng, Thủ kho) trực tiếp thực hiện các hoạt động công việc trong quy trình. KHÔNG phải là Business Actor.",
      tag: "Business Modeling",
      examTip: "Lưu ý bẫy: Nhân viên nội bộ là Business Worker, TUYỆT ĐỐI KHÔNG PHẢI là Business Actor."
    },
    {
      id: "feasibility",
      term: "Feasibility Analysis (3 Dimensions)",
      vnTerm: "Thẩm định tính khả thi 3 chiều",
      def: "Quá trình khảo sát đánh giá 3 trụ cột: Kỹ thuật (Technical Feasibility - Có làm được không?), Kinh tế (Economic Feasibility - Lợi ích/ROI có vượt chi phí?) và Tổ chức (Organizational Feasibility).",
      tag: "Initiation Phase",
      examTip: "Cổng Go/No-Go: 3 câu hỏi (Can we build it? Will it pay? Will they use it?)."
    },
    {
      id: "swimlane-activity",
      term: "Swimlane Activity Diagram",
      vnTerm: "Sơ đồ hoạt động phân làn bơi",
      def: "Sơ đồ UML mô hình hóa luồng công việc của quy trình nghiệp vụ, sử dụng các làn bơi (Swimlanes) để phân định rõ ràng trách nhiệm ai làm gì và các điểm rẽ nhánh điều kiện (Decision).",
      tag: "UML Modeling",
      examTip: "Phân làn bơi theo Actor/Worker giúp chỉ rõ ranh giới trách nhiệm thực thi từng hành động."
    }
  ];

  const tags = ["all", "Cốt lõi SDLC", "Trường phái SDLC", "Business Modeling", "Initiation Phase", "UML Modeling"];

  const filtered = terms.filter((t) => {
    const matchesSearch = 
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.vnTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.def.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "all" || t.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const toggleFlip = (id) => {
    if (allFlipped) {
      setAllFlipped(false);
      setFlippedCardId(null);
    } else {
      setFlippedCardId(flippedCardId === id ? null : id);
    }
  };

  const handleToggleAll = () => {
    setAllFlipped(!allFlipped);
    setFlippedCardId(null);
  };

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Thẻ Ghi Nhớ 8 Thuật Ngữ Vàng Chapter 2 (Flashcards)
            </h2>
            <p className="text-xs text-slate-400">
              Nhấn vào từng thẻ để lật mặt xem định nghĩa chuẩn giáo trình và mẹo nhận diện bẫy thi trắc nghiệm.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleToggleAll}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-purple-300 border border-purple-500/30 transition-all flex items-center gap-1.5"
          >
            <RotateCw className="w-3.5 h-3.5" />
            {allFlipped ? "Úp tất cả thẻ" : "Lật tất cả thẻ"}
          </button>

          {/* Search bar */}
          <div className="relative min-w-[200px] sm:min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm thuật ngữ..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5 pb-1">
        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-1">
          <Filter className="w-3 h-3 text-purple-400" /> Nhóm:
        </span>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedTag === tag
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                : "bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            {tag === "all" ? "Tất cả (8)" : tag}
          </button>
        ))}
      </div>

      {/* Flashcards Grid (Responsive 2 cols on Laptop, 4 on XL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {filtered.map((item) => {
          const isFlipped = allFlipped || flippedCardId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className="cursor-pointer min-h-[235px] h-full [perspective:1000px] select-none group"
            >
              <div
                className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-2xl min-h-[235px] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-4.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800">
                        {item.tag}
                      </span>
                      <RotateCw className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white mt-1 group-hover:text-purple-300 transition-colors leading-snug">
                      {item.term}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 font-medium">{item.vnTerm}</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2.5 border-t border-slate-900 mt-3">
                    <span className="flex items-center gap-1 text-purple-400/90 font-semibold">
                      <Sparkles className="w-3 h-3" /> Xem định nghĩa & mẹo thi
                    </span>
                    <span className="text-[10px] text-slate-500">Lật thẻ ➔</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-4.5 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-950 to-slate-900 border border-purple-500/60 flex flex-col justify-between text-slate-100 shadow-xl overflow-hidden">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                        Định nghĩa chuẩn giáo trình:
                      </span>
                      <span className="text-[10px] font-mono bg-purple-900/60 text-purple-200 px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200 font-medium">
                      {item.def}
                    </p>
                    {item.examTip && (
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300/90 font-medium">
                        💡 {item.examTip}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-purple-300 font-mono pt-2 border-t border-purple-900/50 mt-2">
                    <span>Nhấn để quay lại mặt trước</span>
                    <RotateCw className="w-3 h-3 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
