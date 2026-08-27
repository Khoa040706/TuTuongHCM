"use client";

import React, { useState } from "react";
import { TreePine, Layers, Database, Zap, Dna, Shuffle, BookOpen, Clock } from "lucide-react";

export default function AvlBalancedTreesFamilyGallery() {
  const [activeFilter, setActiveFilter] = useState("all"); // "all" | "strict" | "relaxed" | "amortized" | "random"
  const [selectedTree, setSelectedTree] = useState("avl");

  const treeList = [
    {
      id: "avl",
      name: "AVL Trees",
      year: "1962",
      authors: "Georgy Adelson-Velsky & Evgenii Landis",
      type: "strict",
      typeLabel: "Strict Balance",
      color: "teal",
      icon: ScaleIcon,
      tagline: "Cây tự cân bằng đầu tiên trong lịch sử Khoa học máy tính",
      idea: "Kiểm soát nghiêm ngặt chênh lệch chiều cao |h_L - h_R| ≤ 1 tại MỌI đỉnh. Chiều cao h ≤ 1.44·log₂n.",
      pros: "Tối ưu nhất cho các ứng dụng đọc nhiều (Query-heavy) vì chiều cao cây luôn ngắn nhất.",
      application: "Nội dung trọng tâm của Bài 9 này.",
    },
    {
      id: "btree",
      name: "B-Trees / 2-3-4 Trees",
      year: "1972",
      authors: "Rudolf Bayer & Edward M. McCreight",
      type: "disk",
      typeLabel: "Disk-Optimized",
      color: "emerald",
      icon: Database,
      tagline: "Cây tìm kiếm đa nhánh tối ưu cho bộ nhớ ngoài & Database",
      idea: "Mỗi nút có thể chứa nhiều khóa và có nhiều hơn 2 con (đa nhánh). Tất cả các lá đều nằm ở cùng một tầng.",
      pros: "Giảm thiểu tối đa số lần đọc đĩa (I/O operations) khi dữ liệu quá lớn không vừa RAM.",
      application: "Được dùng làm cấu trúc chỉ mục (Indexing) cho hầu hết các hệ quản trị CSDL (MySQL InnoDB, PostgreSQL, Oracle).",
    },
    {
      id: "bbalpha",
      name: "BB[α] Trees",
      year: "1973",
      authors: "Jürg Nievergelt & Edward M. Reingold",
      type: "weight",
      typeLabel: "Weight-Balanced",
      color: "cyan",
      icon: Layers,
      tagline: "Cân bằng dựa trên trọng số số lượng nút con (Bounded Balance)",
      idea: "Tỷ lệ số nút giữa cây con trái và tổng số nút của cây con gốc x luôn nằm trong khoảng [α, 1 - α].",
      pros: "Đảm bảo cân bằng tốt dựa trên số lượng phần tử thay vì chỉ dựa trên chiều cao hình học.",
      application: "Nghiên cứu lý thuyết cấu trúc dữ liệu và xử lý hình học tính toán.",
    },
    {
      id: "redblack",
      name: "Red-Black Trees",
      year: "1978",
      authors: "Rudolf Bayer / Leo J. Guibas & Robert Sedgewick",
      type: "relaxed",
      typeLabel: "Relaxed Balance",
      color: "rose",
      icon: Dna,
      tagline: "Cây Đỏ-Đen: Chuẩn mực vàng trong các thư viện lập trình hiện đại",
      idea: "Mỗi đỉnh tô màu Đỏ/Đen. Mọi lá đều đen. Đỉnh đỏ chỉ có con đen. Mọi đường đi từ gốc đến lá có cùng số nút đen.",
      pros: "Dễ dãi hơn AVL về chiều cao (h ≤ 2·log₂n) → Giảm số lần xoay khi Insert/Delete (tối đa 3 lần xoay).",
      application: "Cài đặt cho `std::map`, `std::set` trong C++ STL và `java.util.TreeMap`, `TreeSet` trong Java!",
    },
    {
      id: "splay",
      name: "Splay Trees",
      year: "1985",
      authors: "Daniel Sleator & Robert Tarjan (Turing Award)",
      type: "amortized",
      typeLabel: "Amortized Balance",
      color: "amber",
      icon: Zap,
      tagline: "Tự điều chỉnh theo tần suất truy cập (Self-Adjusting)",
      idea: "Khi truy cập/chèn một phần tử, đưa đỉnh đó lên Root qua chuỗi phép xoay Splay (Zig, Zig-Zig, Zig-Zag).",
      pros: "Không cần lưu thuộc tính cân bằng trong node. Trung bình O(log n) cho chuỗi m thao tác (Amortized).",
      application: "Tối ưu hóa các hệ thống Cache và bộ nhớ đệm (phần tử vừa dùng sẽ nằm ngay gần Root).",
    },
    {
      id: "treap",
      name: "Treaps (Tree + Heap)",
      year: "1996",
      authors: "Raimund Seidel & Cecilia R. Aragon",
      type: "random",
      typeLabel: "Randomized",
      color: "indigo",
      icon: Shuffle,
      tagline: "Sự kết hợp hoàn hảo giữa BST và Binary Heap ngẫu nhiên",
      idea: "Mỗi nút có 2 giá trị: Key (thỏa mãn BST Property) và Priority (gán ngẫu nhiên, thỏa mãn Heap Property).",
      pros: "Cài đặt cực kỳ đơn giản, không cần các điều kiện xoay phức tạp nhưng vẫn đảm bảo cân bằng nhờ xác suất.",
      application: "Các thuật toán phân tán và bài toán hình học tính toán.",
    },
    {
      id: "skiplist",
      name: "Skip Lists",
      year: "1989",
      authors: "William Pugh",
      type: "random",
      typeLabel: "Randomized List",
      color: "purple",
      icon: Clock,
      tagline: "Danh sách liên kết nhiều tầng ngẫu nhiên thay thế cây cân bằng",
      idea: "Cấu trúc danh sách liên kết phân tầng với các 'đường cao tốc' ngẫu nhiên nhảy cóc qua nhiều phần tử.",
      pros: "Dễ cài đặt đồng thời (Concurrent Lock-free) hơn rất nhiều so với cây AVL hay Red-Black.",
      application: "Được dùng làm cấu trúc lưu trữ Sorted Set trong cơ sở dữ liệu in-memory Redis và LevelDB/RocksDB.",
    },
  ];

  function ScaleIcon(props) {
    return <TreePine {...props} />;
  }

  const filteredTrees = activeFilter === "all" ? treeList : treeList.filter((t) => t.type === activeFilter || (activeFilter === "random" && (t.type === "random" || t.type === "disk")));
  const current = treeList.find((t) => t.id === selectedTree) || treeList[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Thế Giới Cây Cân Bằng (Mục 7 - Mở Rộng)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Bộ Sưu Tập 7 Họ Balanced Search Tree Nổi Tiếng
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Chỉ cần nhớ <strong>Tên + Năm + Ý tưởng cốt lõi 1 câu</strong> của mỗi loại (Nội dung mở rộng từ slide).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs gap-1">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeFilter === "all" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Tất cả (7)
          </button>
          <button
            onClick={() => setActiveFilter("strict")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeFilter === "strict" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Strict (AVL)
          </button>
          <button
            onClick={() => setActiveFilter("relaxed")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeFilter === "relaxed" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Relaxed (Red-Black)
          </button>
          <button
            onClick={() => setActiveFilter("amortized")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeFilter === "amortized" ? "bg-amber-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Amortized (Splay)
          </button>
        </div>
      </div>

      {/* Grid of Trees (7 items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
        {filteredTrees.map((tree) => {
          const isSel = selectedTree === tree.id;
          const Icon = tree.icon;

          return (
            <div
              key={tree.id}
              onClick={() => setSelectedTree(tree.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                isSel
                  ? "bg-white border-emerald-500 text-slate-900 shadow-md ring-2 ring-emerald-500/20 scale-[1.02]"
                  : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-500">{tree.year}</span>
                  <span className="px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                    {tree.typeLabel}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span>{tree.name}</span>
                </h4>
                <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed font-sans">
                  {tree.tagline}
                </p>
              </div>

              <div className="text-[10px] text-slate-500 font-mono mt-2 truncate">
                {tree.authors}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Card of Selected Tree */}
      <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-emerald-950">{current.name}</h4>
              <span className="text-xs font-mono text-slate-500 font-semibold">({current.year})</span>
            </div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Tác giả: {current.authors}</div>
          </div>
          <span className="px-3 py-1 rounded-xl text-xs font-bold font-mono bg-emerald-50 text-emerald-900 border border-emerald-200 self-start sm:self-auto">
            {current.typeLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <span className="text-[11px] font-bold text-emerald-950 uppercase font-mono">Ý tưởng cốt lõi (Slide):</span>
            <p className="text-slate-800 leading-relaxed font-mono text-[11px] font-semibold">{current.idea}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-[11px] font-bold text-amber-900 uppercase font-mono">Ưu điểm &amp; Ứng dụng thực tế:</span>
            <p className="text-slate-700 leading-relaxed">{current.pros}</p>
            <p className="text-[11px] text-emerald-800 mt-1 font-semibold">⭐ {current.application}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
