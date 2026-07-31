/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState } from "react";
import { 
  ArrowUpDown, 
  Search, 
  GitBranch, 
  Database, 
  RotateCcw, 
  Sparkles, 
  ChevronRight, 
  X,
  Code2,
  ArrowRightLeft,
  Target,
  MoveDown,
  GitMerge,
  Zap,
  Pyramid,
  ScanLine,
  GitFork,
  Radio,
  GitCommit,
  Milestone,
  Layers,
  ArrowRight,
  Link,
  Network
} from "lucide-react";

const ALGO_CATEGORIES = [
  {
    id: "sorting",
    title: "Thuật Toán Sắp Xếp",
    subtitle: "Trực quan hóa quá trình hoán đổi, chia để trị và sắp xếp mảng dữ liệu",
    icon: ArrowUpDown,
    badgeColor: "from-cyan-500 to-blue-600",
    algorithms: [
      { id: "bubble-sort", icon: ArrowRightLeft, name: "Bubble Sort", nameVi: "Sắp xếp Nổi bọt", difficulty: "easy", complexity: "O(n²)", desc: "So sánh và hoán đổi các cặp phần tử kề nhau liên tục cho đến khi mảng được sắp xếp." },
      { id: "selection-sort", icon: Target, name: "Selection Sort", nameVi: "Sắp xếp Chọn", difficulty: "easy", complexity: "O(n²)", desc: "Tìm phần tử nhỏ nhất trong phần chưa sắp xếp và đưa về vị trí đầu tiên." },
      { id: "insertion-sort", icon: MoveDown, name: "Insertion Sort", nameVi: "Sắp xếp Chèn", difficulty: "easy", complexity: "O(n²)", desc: "Xây dựng dãy tăng dần bằng cách chèn từng phần tử vào vị trí thích hợp." },
      { id: "merge-sort", icon: GitMerge, name: "Merge Sort", nameVi: "Sắp xếp Trộn", difficulty: "medium", complexity: "O(n log n)", desc: "Thuật toán chia để trị, chia mảng làm đôi, sắp xếp đệ quy rồi trộn lại." },
      { id: "quick-sort", icon: Zap, name: "Quick Sort", nameVi: "Sắp xếp Nhanh", difficulty: "medium", complexity: "O(n log n)", desc: "Chọn phần tử chốt (Pivot), phân hoạch mảng thành 2 nửa nhỏ hơn và lớn hơn Pivot." },
      { id: "heap-sort", icon: Pyramid, name: "Heap Sort", nameVi: "Sắp xếp Đống", difficulty: "hard", complexity: "O(n log n)", desc: "Sử dụng cấu trúc dữ liệu Max-Heap để liên tục lấy phần tử lớn nhất ra khỏi đống." },
    ]
  },
  {
    id: "searching",
    title: "Thuật Toán Tìm Kiếm",
    subtitle: "Mô phỏng các phương pháp tìm kiếm giá trị trên mảng tuyến tính và mảng đã sắp xếp",
    icon: Search,
    badgeColor: "from-indigo-500 to-purple-600",
    algorithms: [
      { id: "linear-search", icon: ScanLine, name: "Linear Search", nameVi: "Tìm kiếm Tuyến tính", difficulty: "easy", complexity: "O(n)", desc: "Duyệt lần lượt từ đầu đến cuối mảng cho đến khi tìm thấy phần tử cần tìm." },
      { id: "binary-search", icon: GitFork, name: "Binary Search", nameVi: "Tìm kiếm Nhị phân", difficulty: "medium", complexity: "O(log n)", desc: "Liên tục chia đôi khoảng tìm kiếm trên mảng đã được sắp xếp." },
    ]
  },
  {
    id: "graph",
    title: "Duyệt Đồ Thị & Đường Đi",
    subtitle: "Minh họa đường đi ngắn nhất và thứ tự duyệt các đỉnh trên đồ thị",
    icon: GitBranch,
    badgeColor: "from-emerald-500 to-teal-600",
    algorithms: [
      { id: "bfs", icon: Radio, name: "BFS", nameVi: "Tìm kiếm theo Chiều rộng", difficulty: "medium", complexity: "O(V + E)", desc: "Duyệt đồ thị theo từng lớp hàng xóm sử dụng cấu trúc dữ liệu Hàng đợi (Queue)." },
      { id: "dfs", icon: GitCommit, name: "DFS", nameVi: "Tìm kiếm theo Chiều sâu", difficulty: "medium", complexity: "O(V + E)", desc: "Đi sâu nhất có thể theo từng nhánh trước khi quay lui sử dụng Ngăn xếp (Stack)." },
      { id: "dijkstra", icon: Milestone, name: "Dijkstra", nameVi: "Đường đi ngắn nhất", difficulty: "hard", complexity: "O(E log V)", desc: "Tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh còn lại." },
    ]
  },
  {
    id: "data-structures",
    title: "Cấu Trúc Dữ Liệu",
    subtitle: "Mô phỏng động thao tác thêm, xóa, truy xuất trên các cấu trúc dữ liệu kinh điển",
    icon: Database,
    badgeColor: "from-amber-500 to-orange-600",
    algorithms: [
      { id: "stack", icon: Layers, name: "Stack", nameVi: "Ngăn xếp (LIFO)", difficulty: "easy", complexity: "O(1)", desc: "Vào sau ra trước (Last-In-First-Out) với hai thao tác chính: Push và Pop." },
      { id: "queue", icon: ArrowRight, name: "Queue", nameVi: "Hàng đợi (FIFO)", difficulty: "easy", complexity: "O(1)", desc: "Vào trước ra trước (First-In-First-Out) với hai thao tác chính: Enqueue và Dequeue." },
      { id: "linked-list", icon: Link, name: "Linked List", nameVi: "Danh sách Liên kết", difficulty: "medium", complexity: "O(n)", desc: "Tập hợp các nút chứa dữ liệu và con trỏ trỏ đến nút kế tiếp trong bộ nhớ." },
      { id: "binary-tree", icon: Network, name: "Binary Tree", nameVi: "Cây Nhị phân", difficulty: "hard", complexity: "O(log n)", desc: "Cấu trúc cây phân cấp trong đó mỗi nút có tối đa 2 nút con (Left & Right)." },
    ]
  },
  {
    id: "recursion",
    title: "Đệ Quy & Bài Toán Kinh Điển",
    subtitle: "Trực quan hóa cây đệ quy và tiến trình gọi hàm trong Stack Frame",
    icon: RotateCcw,
    badgeColor: "from-rose-500 to-pink-600",
    algorithms: [
      { id: "recursion", icon: RotateCcw, name: "Recursion Visualizer", nameVi: "Đệ quy & Tháp Hà Nội", difficulty: "medium", complexity: "O(2ⁿ)", desc: "Trực quan hóa tiến trình đệ quy chia nhỏ bài toán và cơ chế Stack Frame." },
    ]
  }
];

const DIFFICULTY_MAP = {
  easy: { label: "Dễ", color: "bg-emerald-50 text-emerald-700 border-emerald-200/80" },
  medium: { label: "Trung bình", color: "bg-amber-50 text-amber-700 border-amber-200/80" },
  hard: { label: "Vận dụng cao", color: "bg-rose-50 text-rose-700 border-rose-200/80" }
};

// Distinct SVG Diagram for EACH specific algorithm
const AlgoDiagram = ({ id }) => {
  switch (id) {
    // 1. BUBBLE SORT: Adjacent element compare & swap
    case "bubble-sort":
      return (
        <div className="w-full h-full flex flex-col justify-between items-center py-1">
          <div className="text-[9px] font-bold font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            <span>Swap: 75 ↔ 25</span>
          </div>
          <div className="w-full flex items-end justify-center gap-1.5 px-4 h-14">
            <div className="w-4 h-[30%] bg-cyan-300 rounded-t-md" />
            <div className="w-4 h-[75%] bg-amber-500 rounded-t-md shadow-sm border-2 border-amber-400" />
            <div className="w-4 h-[25%] bg-amber-500 rounded-t-md shadow-sm border-2 border-amber-400" />
            <div className="w-4 h-[90%] bg-indigo-500 rounded-t-md" />
            <div className="w-4 h-[55%] bg-cyan-400 rounded-t-md" />
          </div>
        </div>
      );

    // 2. SELECTION SORT: Finding absolute minimum
    case "selection-sort":
      return (
        <div className="w-full h-full flex flex-col justify-between items-center py-1">
          <div className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span>Min: 15 (Index 4)</span>
          </div>
          <div className="w-full flex items-end justify-center gap-1.5 px-4 h-14">
            <div className="w-4 h-[80%] bg-slate-300 rounded-t-md" />
            <div className="w-4 h-[55%] bg-slate-300 rounded-t-md" />
            <div className="w-4 h-[90%] bg-slate-300 rounded-t-md" />
            <div className="w-4 h-[40%] bg-slate-300 rounded-t-md" />
            <div className="w-4 h-[20%] bg-emerald-500 rounded-t-md shadow-md border-2 border-emerald-400" />
          </div>
        </div>
      );

    // 3. INSERTION SORT: Inserting active element into sorted left sub-array
    case "insertion-sort":
      return (
        <div className="w-full h-full flex flex-col justify-between items-center py-1">
          <div className="text-[9px] font-bold font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
            <span>Insert 35 ➔ Pos 1</span>
          </div>
          <div className="w-full flex items-end justify-center gap-1.5 px-4 h-14">
            <div className="w-4 h-[20%] bg-emerald-500 rounded-t-md" />
            <div className="w-4 h-[70%] bg-indigo-600 rounded-t-md -translate-y-1.5 shadow-md border-2 border-indigo-400" />
            <div className="w-4 h-[45%] bg-emerald-500 rounded-t-md" />
            <div className="w-4 h-[85%] bg-slate-300 rounded-t-md" />
            <div className="w-4 h-[60%] bg-slate-300 rounded-t-md" />
          </div>
        </div>
      );

    // 4. MERGE SORT: Divide & Conquer Sub-array Tree
    case "merge-sort":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-1">
          <div className="flex gap-1 text-[8px] font-bold font-mono">
            <span className="px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-700 border border-cyan-200">[8, 3]</span>
            <span className="text-slate-400">|</span>
            <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 border border-indigo-200">[5, 1]</span>
          </div>
          <div className="text-[9px] font-semibold text-indigo-500">↓ Merge & Sort ↓</div>
          <div className="flex gap-1 text-[9px] font-bold font-mono">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-white shadow-xs">[1, 3, 5, 8]</span>
          </div>
        </div>
      );

    // 5. QUICK SORT: Pivot Partitioning
    case "quick-sort":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-1">
          <div className="text-[9px] font-bold font-mono text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300">
            <span>Pivot: 50</span>
          </div>
          <div className="w-full flex items-center justify-center gap-1.5">
            <span className="text-[9px] font-bold font-mono bg-cyan-100 text-cyan-800 border border-cyan-200 px-1.5 py-0.5 rounded">&lt; 50</span>
            <span className="text-xs font-black text-amber-500">‹ 50 ›</span>
            <span className="text-[9px] font-bold font-mono bg-purple-100 text-purple-800 border border-purple-200 px-1.5 py-0.5 rounded">&gt; 50</span>
          </div>
        </div>
      );

    // 6. HEAP SORT: Max-Heap Tree Extraction
    case "heap-sort":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 70" fill="none">
          <line x1="80" y1="24" x2="45" y2="52" stroke="#6366f1" strokeWidth="2" />
          <line x1="80" y1="24" x2="115" y2="52" stroke="#6366f1" strokeWidth="2" />
          
          {/* Root Node */}
          <circle cx="80" cy="24" r="13" fill="#4f46e5" />
          <text x="80" y="28" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">99</text>
          <text x="80" y="8" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="extrabold">MAX ROOT</text>
          
          {/* Left Child */}
          <circle cx="45" cy="52" r="11" fill="#0891b2" />
          <text x="45" y="55" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">45</text>
          
          {/* Right Child */}
          <circle cx="115" cy="52" r="11" fill="#0891b2" />
          <text x="115" y="55" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">63</text>
        </svg>
      );

    // 7. LINEAR SEARCH: Sequential Step-by-Step Scan
    case "linear-search":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 px-2">
          <div className="text-[9px] font-bold font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
            <span>Step 3 ➔ Target: 42</span>
          </div>
          <div className="w-full flex items-center justify-center gap-1">
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-400 text-[9px] font-mono font-bold flex items-center justify-center">10</div>
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-400 text-[9px] font-mono font-bold flex items-center justify-center">25</div>
            <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white text-[9px] font-mono font-bold flex items-center justify-center shadow-md scale-110 border-2 border-cyan-300">42</div>
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-400 text-[9px] font-mono font-bold flex items-center justify-center">89</div>
          </div>
        </div>
      );

    // 8. BINARY SEARCH: Low / Mid / High Pointers
    case "binary-search":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-0.5 px-2">
          <div className="w-full flex justify-between text-[8px] font-bold font-mono text-indigo-600 px-1">
            <span>L</span>
            <span className="text-emerald-600 font-extrabold text-[9px]">MID: 42</span>
            <span>H</span>
          </div>
          <div className="w-full flex items-center justify-center gap-1">
            <div className="flex-1 h-6 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] font-mono font-bold flex items-center justify-center">10</div>
            <div className="flex-1 h-6 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] font-mono font-bold flex items-center justify-center">25</div>
            <div className="flex-1 h-7 rounded-lg bg-emerald-500 text-white text-[9px] font-mono font-extrabold flex items-center justify-center shadow-sm">42</div>
            <div className="flex-1 h-6 rounded-lg bg-slate-100 border border-slate-200 text-slate-400 text-[9px] font-mono font-bold flex items-center justify-center">68</div>
            <div className="flex-1 h-6 rounded-lg bg-slate-100 border border-slate-200 text-slate-400 text-[9px] font-mono font-bold flex items-center justify-center">89</div>
          </div>
        </div>
      );

    // 9. BFS: Concentric Ring Layer Traversal
    case "bfs":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 70" fill="none">
          {/* Layer rings */}
          <circle cx="35" cy="35" r="26" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="35" cy="35" r="48" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

          <line x1="35" y1="35" x2="75" y2="18" stroke="#0891b2" strokeWidth="2" />
          <line x1="35" y1="35" x2="75" y2="52" stroke="#0891b2" strokeWidth="2" />
          <line x1="75" y1="18" x2="125" y2="35" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Layer 0 Node S */}
          <circle cx="35" cy="35" r="12" fill="#4f46e5" />
          <text x="35" y="39" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">S</text>
          <text x="35" y="16" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="extrabold">L0</text>

          {/* Layer 1 Nodes A & B */}
          <circle cx="75" cy="18" r="10" fill="#0891b2" />
          <text x="75" y="21" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>
          <text x="75" y="6" textAnchor="middle" fill="#0e7490" fontSize="8" fontWeight="bold">L1</text>

          <circle cx="75" cy="52" r="10" fill="#0891b2" />
          <text x="75" y="55" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">B</text>
          <text x="75" y="68" textAnchor="middle" fill="#0e7490" fontSize="8" fontWeight="bold">L1</text>

          {/* Layer 2 Node C */}
          <circle cx="125" cy="35" r="10" fill="#64748b" />
          <text x="125" y="38" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">C</text>
          <text x="125" y="19" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">L2</text>
        </svg>
      );

    // 10. DFS: Deep Path & Backtrack Arrow
    case "dfs":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 70" fill="none">
          <line x1="30" y1="28" x2="75" y2="28" stroke="#4f46e5" strokeWidth="2.5" />
          <line x1="75" y1="28" x2="120" y2="28" stroke="#4f46e5" strokeWidth="2.5" />
          <line x1="30" y1="28" x2="75" y2="56" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Backtrack Arrow Curve */}
          <path d="M 115 34 Q 75 50 35 34" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

          {/* Node S */}
          <circle cx="30" cy="28" r="11" fill="#4f46e5" />
          <text x="30" y="31" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">S</text>
          <text x="30" y="11" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="extrabold">Start</text>

          {/* Node A */}
          <circle cx="75" cy="28" r="11" fill="#4f46e5" />
          <text x="75" y="31" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>

          {/* Node B (End of deep branch) */}
          <circle cx="120" cy="28" r="11" fill="#e11d48" />
          <text x="120" y="31" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">B</text>
          <text x="120" y="11" textAnchor="middle" fill="#be123c" fontSize="8" fontWeight="bold">End Deep</text>

          {/* Node C */}
          <circle cx="75" cy="56" r="8" fill="#94a3b8" />
          <text x="75" y="59" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">C</text>
        </svg>
      );

    // 11. DIJKSTRA: Shortest Weighted Path
    case "dijkstra":
      return (
        <svg className="w-full h-full text-indigo-500" viewBox="0 0 160 70" fill="none">
          <line x1="30" y1="35" x2="80" y2="18" stroke="#10b981" strokeWidth="3" />
          <line x1="80" y1="18" x2="130" y2="35" stroke="#10b981" strokeWidth="3" />
          <line x1="30" y1="35" x2="80" y2="52" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="80" y1="52" x2="130" y2="35" stroke="#cbd5e1" strokeWidth="1.5" />

          <rect x="50" y="16" width="16" height="11" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="58" y="24" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="bold">w:2</text>

          <rect x="98" y="16" width="16" height="11" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="106" y="24" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="bold">w:3</text>

          <circle cx="30" cy="35" r="11" fill="#6366f1" />
          <text x="30" y="38" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">S:0</text>

          <circle cx="80" cy="18" r="10" fill="#10b981" />
          <text x="80" y="21" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">A:2</text>

          <circle cx="80" cy="52" r="8" fill="#94a3b8" />
          <text x="80" y="55" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">B:9</text>

          <circle cx="130" cy="35" r="11" fill="#f59e0b" />
          <text x="130" y="38" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">T:5</text>
        </svg>
      );

    // 12. STACK: Vertical LIFO
    case "stack":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1">
          <div className="text-[9px] font-bold font-mono text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
            <span>Push / Pop ➔ Top</span>
          </div>
          <div className="w-28 h-14 border-b-2 border-x-2 border-indigo-500 rounded-b-xl p-1 flex flex-col justify-end gap-1 bg-slate-50/50">
            <div className="w-full h-5 rounded-md bg-indigo-600 text-white text-[10px] font-extrabold font-mono flex items-center justify-center shadow-xs">
              42 (Top)
            </div>
            <div className="w-full h-5 rounded-md bg-cyan-600 text-white text-[10px] font-extrabold font-mono flex items-center justify-center">
              18
            </div>
          </div>
        </div>
      );

    // 13. QUEUE: Horizontal FIFO
    case "queue":
      return (
        <div className="w-full h-full flex items-center justify-center gap-1">
          <span className="text-[9px] font-bold text-slate-400">In →</span>
          <div className="h-10 border-y-2 border-indigo-400 px-1 flex items-center gap-1 rounded-sm">
            <div className="w-7 h-7 rounded-lg bg-indigo-500 text-white text-[9px] font-bold font-mono flex items-center justify-center shadow-xs">30</div>
            <div className="w-7 h-7 rounded-lg bg-cyan-500 text-white text-[9px] font-bold font-mono flex items-center justify-center">20</div>
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white text-[9px] font-bold font-mono flex items-center justify-center">10</div>
          </div>
          <span className="text-[9px] font-bold text-slate-400">→ Out</span>
        </div>
      );

    // 14. LINKED LIST: Node + Pointer Arrows
    case "linked-list":
      return (
        <div className="w-full h-full flex items-center justify-center gap-1.5">
          <div className="px-2 py-1.5 rounded-lg bg-indigo-600 text-white text-[10px] font-bold font-mono flex items-center gap-1 shadow-sm">
            <span>12</span>
            <span className="text-cyan-300">→</span>
          </div>
          <span className="text-slate-400 font-bold text-xs">→</span>
          <div className="px-2 py-1.5 rounded-lg bg-cyan-600 text-white text-[10px] font-bold font-mono flex items-center gap-1 shadow-sm">
            <span>45</span>
            <span className="text-emerald-300">→</span>
          </div>
          <span className="text-slate-400 font-bold text-xs">→</span>
          <div className="px-2 py-1 rounded-md bg-slate-200 text-slate-600 text-[9px] font-mono font-bold">NULL</div>
        </div>
      );

    // 15. BINARY TREE: Root & Child Nodes
    case "binary-tree":
      return (
        <svg className="w-full h-full text-indigo-500" viewBox="0 0 140 65" fill="none">
          <line x1="70" y1="15" x2="40" y2="45" stroke="#6366f1" strokeWidth="2" />
          <line x1="70" y1="15" x2="100" y2="45" stroke="#06b6d4" strokeWidth="2" />
          
          <circle cx="70" cy="15" r="10" fill="#6366f1" />
          <text x="70" y="19" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">50</text>
          
          <circle cx="40" cy="45" r="9" fill="#06b6d4" />
          <text x="40" y="48" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">25</text>
          
          <circle cx="100" cy="45" r="9" fill="#10b981" />
          <text x="100" y="48" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">75</text>
        </svg>
      );

    // 16. RECURSION: Recursive Call Stack Frames
    case "recursion":
    default:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-1">
          <div className="w-28 h-4 rounded-md bg-rose-500 text-white text-[9px] font-bold font-mono flex items-center justify-center shadow-xs">f(n - 1)</div>
          <div className="w-20 h-4 rounded-md bg-indigo-500 text-white text-[9px] font-bold font-mono flex items-center justify-center">f(n - 2)</div>
          <div className="w-14 h-4 rounded-md bg-cyan-500 text-white text-[9px] font-bold font-mono flex items-center justify-center">Base: 1</div>
        </div>
      );
  }
};

export default function AlgoSimDashboard({ onSelectAlgorithm, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState("all");

  // Calculate totals
  const totalAlgorithms = ALGO_CATEGORIES.reduce((acc, cat) => acc + cat.algorithms.length, 0);

  // Filter algorithms
  const filteredCategories = ALGO_CATEGORIES.map(category => {
    if (selectedCategoryFilter !== "all" && category.id !== selectedCategoryFilter) {
      return null;
    }
    const algos = category.algorithms.filter(algo => {
      const matchesSearch = algo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            algo.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            algo.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiff = selectedDifficultyFilter === "all" || algo.difficulty === selectedDifficultyFilter;
      return matchesSearch && matchesDiff;
    });
    if (algos.length === 0) return null;
    return { ...category, algorithms: algos };
  }).filter(Boolean);

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-10 text-white shadow-2xl border border-indigo-500/20">
        {/* Background Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Trung Tâm Mô Phỏng Thuật Toán Interactive</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans text-white leading-tight">
              Bộ Mô Phỏng <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">Giải Thuật Kinh Điển</span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
              Khám phá và nắm vững bản chất thuật toán qua minh họa đồ họa trực quan từng bước, mã giả chuẩn mực và đo lường độ phức tạp thời gian thực tế.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <div className="px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <div className="text-2xl font-black text-cyan-300">{totalAlgorithms}</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5">Thuật toán</div>
            </div>
            <div className="px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <div className="text-2xl font-black text-emerald-300">{ALGO_CATEGORIES.length}</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5">Chủ đề</div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar inside Header */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center gap-4 relative z-10">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thuật toán (ví dụ: Quick Sort, Binary Search, Dijkstra...)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 flex-wrap">
            {/* Category Filter */}
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white text-xs font-semibold focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-white">Tất cả chủ đề</option>
              {ALGO_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id} className="bg-slate-900 text-white">{cat.title}</option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficultyFilter}
              onChange={(e) => setSelectedDifficultyFilter(e.target.value)}
              className="px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white text-xs font-semibold focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-white">Tất cả độ khó</option>
              <option value="easy" className="bg-slate-900 text-white">Độ khó: Dễ</option>
              <option value="medium" className="bg-slate-900 text-white">Độ khó: Trung bình</option>
              <option value="hard" className="bg-slate-900 text-white">Độ khó: Vận dụng cao</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Categories Section */}
      {filteredCategories.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">Không tìm thấy thuật toán phù hợp</h3>
          <p className="text-xs text-slate-500">Hãy thử đổi từ khóa tìm kiếm hoặc bỏ chọn bộ lọc độ khó.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategoryFilter("all"); setSelectedDifficultyFilter("all"); }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors mt-2"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        filteredCategories.map(category => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.id} className="space-y-4">
              {/* Category Title Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.badgeColor} text-white flex items-center justify-center shadow-md shrink-0`}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 font-sans tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                  {category.algorithms.length} thuật toán
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.algorithms.map(algo => {
                  const diffInfo = DIFFICULTY_MAP[algo.difficulty] || DIFFICULTY_MAP.easy;
                  const AlgoIcon = algo.icon || Code2;
                  return (
                    <button
                      key={algo.id}
                      onClick={() => onSelectAlgorithm(algo.id)}
                      className="group text-left relative bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-slate-200/80 hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Top Row: Unique Icon + Name + Chevron */}
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 text-indigo-600 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
                            <AlgoIcon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight truncate">
                              {algo.name}
                            </h3>
                            <div className="text-xs font-semibold text-slate-500 mt-0.5 truncate">
                              {algo.nameVi}
                            </div>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>

                      {/* Middle Row: Unique Visual SVG Diagram Graphic */}
                      <div className="w-full h-24 bg-gradient-to-br from-slate-50 to-cyan-50/30 rounded-2xl border border-slate-100 flex items-center justify-center p-3 my-3.5 group-hover:bg-gradient-to-br group-hover:from-cyan-50/60 group-hover:to-indigo-50/60 group-hover:border-cyan-200/80 transition-all duration-300 overflow-hidden">
                        <AlgoDiagram id={algo.id} />
                      </div>

                      {/* Bottom Row: Badges (Difficulty & Complexity) ONLY */}
                      <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-slate-100/80">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${diffInfo.color}`}>
                          {diffInfo.label}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200/60 font-mono">
                          {algo.complexity}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
