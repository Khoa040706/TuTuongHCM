"use client";

import React, { useState } from "react";
import { Award, Sparkles } from "lucide-react";

export default function Bai8MasterSummaryDashboard() {
  const [activeTab, setActiveTab] = useState("adt"); // "adt" | "property" | "deletion" | "flashcards"
  const [flippedCard, setFlippedCard] = useState(null);

  const flashcards = [
    {
      id: 1,
      q: "Độ phức tạp của Inorder Traversal là bao nhiêu và vì sao?",
      a: "O(n). Vì Inorder bắt buộc phải ghé thăm toàn bộ n đỉnh của cây (mỗi đỉnh bị chạm đúng 3 lần: từ cha xuống, hỏi con trái, hỏi con phải), KHÔNG thể đi tắt như các thao tác O(h) khác.",
      tag: "Bẫy Big-O",
    },
    {
      id: 2,
      q: "Tại sao plain BST chỉ đảm bảo O(h) mà không đảm bảo O(log n)?",
      a: "Vì plain BST không tự cân bằng (not self-balancing). Nếu dữ liệu chèn vào theo thứ tự tăng/giảm dần, cây sẽ bị suy biến thành danh sách liên kết với h = O(n), làm mất sạch ưu thế tốc độ.",
      tag: "Worst-Case",
    },
    {
      id: 3,
      q: "Tại sao Successor của đỉnh có 2 con luôn có nhiều nhất 1 con?",
      a: "Vì Successor = Min(cây con phải). Một phần tử Min trong bất kỳ BST nào không bao giờ có con trái (nếu có con trái thì con trái đó sẽ nhỏ hơn Min → mâu thuẫn). Do đó Successor chỉ có tối đa 1 con phải.",
      tag: "Thi Tự Luận",
    },
    {
      id: 4,
      q: "Vì sao khi xóa đỉnh 2 con, ta phải xóa đỉnh successor cũ thay vì chỉ đổi giá trị key?",
      a: "Nếu chỉ copy giá trị của successor vào đỉnh bị xóa mà không xóa đỉnh successor cũ ở dưới, cây sẽ tồn tại 2 đỉnh cùng một giá trị (duplicate), vi phạm giả định các khóa là duy nhất (unique keys).",
      tag: "Cơ Chế Delete",
    },
    {
      id: 5,
      q: "Đỉnh mới trong thao tác Insert(v) luôn được chèn vào vị trí nào?",
      a: "Đỉnh mới luôn luôn được chèn làm ĐỈNH LÁ (leaf). Ta đi từ root xuống so sánh đến khi gặp con trỏ NULL thì gắn node mới vào đó.",
      tag: "Quy Tắc Insert",
    },
    {
      id: 6,
      q: "Ưu điểm lớn nhất của BST so với Sorted Array trong bài toán Census là gì?",
      a: "Hạ chi phí Insert và Remove từ O(n) (do phải dời toàn bộ mảng) xuống O(h) (chỉ cần tạo/sửa liên kết con trỏ).",
      tag: "Cốt Lõi ADT",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trung Tâm Ôn Tập &amp; Tóm Tắt Toàn Bài 8</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Master Cheat Sheet: Binary Search Tree (BST)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng hợp toàn bộ kiến thức trọng tâm, bảng đối đầu, định lý chứng minh và bộ câu hỏi ôn thi.
          </p>
        </div>

        {/* 4 Main Tabs */}
        <div className="flex flex-wrap rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto gap-1">
          <button
            onClick={() => setActiveTab("adt")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "adt" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. ADT &amp; Đối Đầu
          </button>
          <button
            onClick={() => setActiveTab("property")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "property" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. BST Property &amp; Cây Mẫu
          </button>
          <button
            onClick={() => setActiveTab("deletion")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "deletion" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. 3 Case Xóa &amp; Chứng Minh
          </button>
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "flashcards" ? "bg-amber-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            4. Bẫy Thi Cử (Flashcards)
          </button>
        </div>
      </div>

      {/* TAB 1: ADT & BENCHMARK SUMMARY */}
      {activeTab === "adt" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-rose-800 uppercase font-mono">Unsorted Array</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Insert siêu nhanh <span className="font-mono text-emerald-700 font-bold">O(1)</span> bằng cách chèn cuối, nhưng tất cả thao tác tìm kiếm, thứ tự đều chậm <span className="font-mono text-rose-700 font-bold">O(n) / O(n log n)</span>.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase font-mono">Sorted Array</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Search và Order-related nhanh <span className="font-mono text-emerald-700 font-bold">O(log n) / O(1)</span> nhờ Binary Search, nhưng Insert/Remove cực chậm <span className="font-mono text-rose-700 font-bold">O(n)</span> vì chi phí dời mảng (shift).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-emerald-300 shadow-sm space-y-2 ring-2 ring-emerald-400/20">
              <span className="text-xs font-bold text-emerald-800 uppercase font-mono">Binary Search Tree (BST)</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Cân bằng hoàn hảo: Vừa tìm kiếm nhanh kiểu Sorted Array, vừa chèn/xóa nhanh kiểu Linked Structure với chi phí <span className="font-mono text-emerald-700 font-bold">O(h)</span>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              ⭐ <strong>Điểm mấu chốt:</strong> BST giải quyết điểm yếu lớn nhất của Sorted Array là đưa <span className="font-mono text-emerald-800 font-bold">Insert từ O(n) xuống O(h)</span>.
            </span>
            <span className="font-mono text-emerald-900 font-bold bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">h = log&#8322;n (cân bằng)</span>
          </div>
        </div>
      )}

      {/* TAB 2: BST PROPERTY & SAMPLE TREE */}
      {activeTab === "property" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">BST Property (Bất Đẳng Thức Chặt)</h4>
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-center text-emerald-900 font-extrabold">
                x.left.key &lt; x.key &lt; x.right.key
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Áp dụng cho <strong>MỌI đỉnh trong cây</strong>. Do các khóa là phân biệt (distinct), ta dùng dấu <span className="font-mono text-amber-800 font-bold">&lt;</span> chặt chẽ. Cây con trái và cây con phải cũng là BST hợp lệ (tính chất đệ quy).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">Cây Mẫu Chuẩn Cần Nhớ (Root = 15)</h4>
              <div className="text-xs text-slate-700 space-y-1.5 font-mono">
                <div>• Root: <span className="text-emerald-800 font-bold">15</span></div>
                <div>• Nhánh trái: <span className="text-sky-800 font-bold">6</span> &rarr; (trái 4 &rarr; con phải 5; phải 7)</div>
                <div>• Nhánh phải: <span className="text-purple-800 font-bold">23</span> &rarr; (phải 71 &rarr; con trái 50)</div>
                <div>• Đỉnh trong (Internal): <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-bold">15, 6, 23, 4, 71</code></div>
                <div>• Đỉnh lá (Leaves): <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-bold">5, 7, 50</code></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 3 DELETION CASES & PROOF */}
      {activeTab === "deletion" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-sky-200 shadow-sm space-y-1.5">
              <span className="text-xs font-bold text-sky-800 font-mono">Case 1: Xóa Đỉnh Lá (0 con)</span>
              <p className="text-xs text-slate-700">Gỡ thẳng liên kết từ cha về NULL. Tốn <span className="font-mono text-sky-800 font-bold">O(1)</span>.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-1.5">
              <span className="text-xs font-bold text-amber-800 font-mono">Case 2: Xóa Đỉnh Có 1 Con</span>
              <p className="text-xs text-slate-700">Nối con duy nhất lên thế chỗ cha. Tốn <span className="font-mono text-amber-800 font-bold">O(1)</span>.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-sm space-y-1.5">
              <span className="text-xs font-bold text-rose-800 font-mono">Case 3: Xóa Đỉnh Có 2 Con</span>
              <p className="text-xs text-slate-700">Thay bằng Successor rồi xóa Successor cũ. Tốn <span className="font-mono text-rose-800 font-bold">O(h)</span>.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-2 text-xs text-slate-700">
            <div className="font-bold text-emerald-950 text-sm">4 Bước Chứng Minh Successor Có Tối Đa 1 Con (Thi Tự Luận):</div>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700">
              <li>Đỉnh x có 2 con &rArr; chắc chắn có con phải.</li>
              <li>Successor(x) = min(x.right).</li>
              <li>Phần tử nhỏ nhất của cây con không bao giờ có con trái (phản chứng: nếu có con trái thì nó bé hơn min &rArr; vô lý).</li>
              <li>Vậy Successor(x) không có con trái &rArr; có tối đa 1 con (quy về Case 1 hoặc Case 2). (Q.E.D).</li>
            </ol>
          </div>
        </div>
      )}

      {/* TAB 4: EXAM FLASHCARDS */}
      {activeTab === "flashcards" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {flashcards.map((card) => {
              const isFlipped = flippedCard === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setFlippedCard(isFlipped ? null : card.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 min-h-[160px] flex flex-col justify-between shadow-sm ${
                    isFlipped
                      ? "bg-emerald-50/90 border-emerald-400 shadow-md ring-2 ring-emerald-400/20"
                      : "bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase bg-amber-50 text-amber-800 border border-amber-300 font-mono">
                        {card.tag}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">
                        {isFlipped ? "Đáp án ✅" : "Nhấp để lật 🔄"}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-800">
                      {isFlipped ? (
                        <p className="text-emerald-950 font-sans leading-relaxed text-xs">
                          {card.a}
                        </p>
                      ) : (
                        <p className="leading-relaxed">{card.q}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-slate-500 italic">
                    {isFlipped ? "* Bấm để xem lại câu hỏi" : "* Bấm để xem đáp án chuẩn slide"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
