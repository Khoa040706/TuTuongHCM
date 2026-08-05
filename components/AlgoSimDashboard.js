/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowUpDown, 
  Search, 
  GitBranch, 
  Database, 
  RotateCcw, 
  Sparkles, 
  ChevronRight, 
  ChevronDown,
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
  ArrowLeft,
  Link,
  Network,
  Cpu,
  Boxes,
  Binary,
  Compass,
  Gauge,
  Volume2,
  VolumeX
} from "lucide-react";

const ALGO_CATEGORIES = [
  {
    id: "sorting",
    title: "Thuật Toán Sắp Xếp",
    subtitle: "Trực quan hóa quá trình hoán đổi, chia để trị và sắp xếp mảng dữ liệu",
    typeLabel: "ALGORITHM",
    icon: ArrowUpDown,
    badgeColor: "from-cyan-500 to-blue-600",
    algorithms: [
      { id: "bubble-sort", icon: ArrowRightLeft, name: "Bubble Sort", nameVi: "Sắp xếp Nổi bọt", difficulty: "easy", complexity: "O(n²)", space: "O(1)", desc: "So sánh và hoán đổi các cặp phần tử kề nhau liên tục cho đến khi mảng được sắp xếp." },
      { id: "selection-sort", icon: Target, name: "Selection Sort", nameVi: "Sắp xếp Chọn", difficulty: "easy", complexity: "O(n²)", space: "O(1)", desc: "Tìm phần tử nhỏ nhất trong phần chưa sắp xếp và đưa về vị trí đầu tiên." },
      { id: "insertion-sort", icon: MoveDown, name: "Insertion Sort", nameVi: "Sắp xếp Chèn", difficulty: "easy", complexity: "O(n²)", space: "O(1)", desc: "Xây dựng dãy tăng dần bằng cách chèn từng phần tử vào vị trí thích hợp." },
      { id: "merge-sort", icon: GitMerge, name: "Merge Sort", nameVi: "Sắp xếp Trộn", difficulty: "medium", complexity: "O(n log n)", space: "O(n)", desc: "Thuật toán chia để trị, chia mảng làm đôi, sắp xếp đệ quy rồi trộn lại." },
      { id: "quick-sort", icon: Zap, name: "Quick Sort", nameVi: "Sắp xếp Nhanh", difficulty: "medium", complexity: "O(n log n)", space: "O(log n)", desc: "Chọn phần tử chốt (Pivot), phân hoạch mảng thành 2 nửa nhỏ hơn và lớn hơn Pivot." },
      { id: "heap-sort", icon: Pyramid, name: "Heap Sort", nameVi: "Sắp xếp Đống", difficulty: "expert", complexity: "O(n log n)", space: "O(1)", desc: "Sử dụng cấu trúc dữ liệu Max-Heap để liên tục lấy phần tử lớn nhất ra khỏi đống." },
    ]
  },
  {
    id: "searching",
    title: "Thuật Toán Tìm Kiếm",
    subtitle: "Mô phỏng các phương pháp tìm kiếm giá trị trên mảng tuyến tính và mảng đã sắp xếp",
    typeLabel: "ALGORITHM",
    icon: Search,
    badgeColor: "from-indigo-500 to-purple-600",
    algorithms: [
      { id: "linear-search", icon: ScanLine, name: "Linear Search", nameVi: "Tìm kiếm Tuyến tính", difficulty: "easy", complexity: "O(n)", space: "O(1)", desc: "Duyệt lần lượt từ đầu đến cuối mảng cho đến khi tìm thấy phần tử cần tìm." },
      { id: "binary-search", icon: GitFork, name: "Binary Search", nameVi: "Tìm kiếm Nhị phân", difficulty: "medium", complexity: "O(log n)", space: "O(1)", desc: "Liên tục chia đôi khoảng tìm kiếm trên mảng đã được sắp xếp." },
    ]
  },
  {
    id: "graph",
    title: "Duyệt Đồ Thị & Đường Đi",
    subtitle: "Minh họa đường đi ngắn nhất và thứ tự duyệt các đỉnh trên đồ thị",
    typeLabel: "GRAPH ALGO",
    icon: GitBranch,
    badgeColor: "from-emerald-500 to-teal-600",
    algorithms: [
      { id: "bfs", icon: Radio, name: "BFS Traversal", nameVi: "Tìm kiếm theo Chiều rộng", difficulty: "medium", complexity: "O(V + E)", space: "O(V)", desc: "Duyệt đồ thị theo từng lớp hàng xóm sử dụng cấu trúc dữ liệu Hàng đợi (Queue)." },
      { id: "dfs", icon: GitCommit, name: "DFS Traversal", nameVi: "Tìm kiếm theo Chiều sâu", difficulty: "medium", complexity: "O(V + E)", space: "O(V)", desc: "Đi sâu nhất có thể theo từng nhánh trước khi quay lui sử dụng Ngăn xếp (Stack)." },
      { id: "dijkstra", icon: Milestone, name: "Dijkstra Algorithm", nameVi: "Đường đi ngắn nhất", difficulty: "expert", complexity: "O(E log V)", space: "O(V)", desc: "Tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh còn lại." },
    ]
  },
  {
    id: "data-structures",
    title: "Cấu Trúc Dữ Liệu",
    subtitle: "Mô phỏng động thao tác thêm, xóa, truy xuất trên các cấu trúc dữ liệu kinh điển",
    typeLabel: "DATA STRUCTURE",
    icon: Database,
    badgeColor: "from-amber-500 to-orange-600",
    algorithms: [
      { id: "stack", icon: Layers, name: "Stack Visualizer", nameVi: "Ngăn xếp (LIFO)", difficulty: "easy", complexity: "O(1)", space: "O(n)", desc: "Vào sau ra trước (Last-In-First-Out) với hai thao tác chính: Push và Pop." },
      { id: "queue", icon: ArrowRight, name: "Queue Visualizer", nameVi: "Hàng đợi (FIFO)", difficulty: "easy", complexity: "O(1)", space: "O(n)", desc: "Vào trước ra trước (First-In-First-Out) với hai thao tác chính: Enqueue và Dequeue." },
      { id: "linked-list", icon: Link, name: "Linked List", nameVi: "Danh sách Liên kết", difficulty: "medium", complexity: "O(n)", space: "O(n)", desc: "Tập hợp các nút chứa dữ liệu và con trỏ trỏ đến nút kế tiếp trong bộ nhớ." },
      { id: "binary-tree", icon: Network, name: "Binary Tree", nameVi: "Cây Nhị phân", difficulty: "hard", complexity: "O(n)", space: "O(h)", desc: "Cấu trúc cây phân cấp trong đó mỗi nút có tối đa 2 nút con (Left & Right)." },
      { id: "bst", icon: Binary, name: "Binary Search Tree", nameVi: "Cây Tìm kiếm Nhị phân", difficulty: "hard", complexity: "O(log n)", space: "O(h)", desc: "Cây nhị phân với tính chất: nút con trái < nút cha < nút con phải." },
    ]
  },
  {
    id: "recursion",
    title: "Đệ Quy & Quy Hoạch Động",
    subtitle: "Trực quan hóa cây đệ quy, tiến trình gọi hàm và bảng lưu vết quy hoạch động",
    typeLabel: "PARADIGM",
    icon: RotateCcw,
    badgeColor: "from-rose-500 to-pink-600",
    algorithms: [
      { id: "recursion", icon: RotateCcw, name: "Recursion & Hanoi", nameVi: "Đệ quy & Tháp Hà Nội", difficulty: "medium", complexity: "O(2ⁿ)", space: "O(n)", desc: "Trực quan hóa tiến trình đệ quy chia nhỏ bài toán và cơ chế Stack Frame." },
      { id: "fibonacci-dp", icon: Compass, name: "Fibonacci DP", nameVi: "Quy hoạch động Fibonacci", difficulty: "medium", complexity: "O(n)", space: "O(n)", desc: "Tối ưu hóa đệ quy tính số Fibonacci bằng kỹ thuật lưu nhớ Memoization." },
    ]
  },
  {
    id: "memory-oop",
    title: "Bộ Nhớ & Lập Trình OOP",
    subtitle: "Minh họa tương tác 3D phân vùng RAM Stack, Heap và cơ chế truyền tham trị/tham chiếu",
    typeLabel: "MEMORY MODEL",
    icon: Cpu,
    badgeColor: "from-purple-500 to-indigo-600",
    algorithms: [
      { id: "java-memory", icon: Boxes, name: "Java Memory Visualizer", nameVi: "Bộ nhớ Stack & Heap 3D", difficulty: "hard", complexity: "Dynamic RAM", space: "JVM Heap", desc: "Mô phỏng thời gian thực quá trình cấp phát đối tượng Object trên Heap và biến cục bộ trên Stack." },
    ]
  }
];

const DIFFICULTY_MAP = {
  easy: { label: "Dễ", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
  medium: { label: "Trung bình", color: "bg-sky-500/15 text-sky-400 border-sky-500/30" },
  hard: { label: "Khó", color: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  expert: { label: "Vận dụng cao", color: "bg-rose-500/15 text-rose-400 border-rose-500/30" }
};

// 🔊 WEB AUDIO SYNTHESIZER SOUND FX
const playHoverChime = (soundEnabled) => {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (err) {
    // Ignore audio context errors silently
  }
};

const playClickChime = (soundEnabled) => {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (err) {
    // Ignore audio context errors silently
  }
};

// 🎬 LIVE SVG ANIMATION ENGINE (60FPS INFINITE LOOP FOR ALL 17 ALGORITHMS)
const AlgoDiagram = ({ id }) => {
  switch (id) {
    case "bubble-sort":
      return (
        <div className="w-full h-full flex flex-col justify-between items-center py-1">
          <div className="w-full flex items-end justify-center gap-2 px-4 h-24">
            <div className="w-5 h-[30%] bg-slate-700/80 rounded-t-md" />
            <div className="w-5 h-[75%] bg-sky-400/90 rounded-t-md shadow-md border-t-2 border-sky-200 animate-[bubbleSwapLeft_2.5s_infinite_ease-in-out]" />
            <div className="w-5 h-[40%] bg-cyan-400 rounded-t-md shadow-md border-t-2 border-cyan-200 animate-[bubbleSwapRight_2.5s_infinite_ease-in-out]" />
            <div className="w-5 h-[90%] bg-slate-700/80 rounded-t-md" />
            <div className="w-5 h-[60%] bg-indigo-500/80 rounded-t-md" />
          </div>
        </div>
      );

    case "selection-sort":
      return (
        <div className="w-full h-full flex flex-col justify-between items-center py-1 relative">
          <div className="w-full flex items-end justify-center gap-2 px-4 h-24 relative">
            <div className="w-5 h-[90%] bg-emerald-500/90 rounded-t-md shadow-lg border-t-2 border-emerald-300" />
            <div className="w-5 h-[60%] bg-slate-800 rounded-t-md" />
            <div className="w-5 h-[80%] bg-slate-800 rounded-t-md" />
            <div className="w-5 h-[45%] bg-slate-800 rounded-t-md" />
            <div className="w-5 h-[25%] bg-emerald-400 rounded-t-md shadow-lg border-t-2 border-emerald-200 animate-pulse" />
            
            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-emerald-400 to-transparent shadow-[0_0_12px_#06b6d4] animate-[scannerBeam_3s_infinite_ease-in-out]" />
          </div>
        </div>
      );

    case "insertion-sort":
      return (
        <div className="w-full h-full flex items-end justify-center gap-2 px-4 h-24">
          <div className="w-5 h-[30%] bg-slate-800 rounded-t-md" />
          <div className="w-5 h-[55%] bg-cyan-400 rounded-t-md shadow-lg border-t-2 border-cyan-200 animate-[insertionLift_3s_infinite_ease-in-out]" />
          <div className="w-5 h-[75%] bg-indigo-500/80 rounded-t-md" />
          <div className="w-5 h-[90%] bg-indigo-500/80 rounded-t-md" />
          <div className="w-5 h-[40%] bg-slate-800 rounded-t-md" />
        </div>
      );

    case "merge-sort":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <div className="flex gap-2 animate-[mergeDivide_3s_infinite_ease-in-out]">
            <div className="flex gap-1 bg-cyan-950/80 p-1 rounded-md border border-cyan-700/60">
              <span className="w-4 h-6 bg-cyan-500 text-slate-950 font-mono font-bold text-[9px] flex items-center justify-center rounded">3</span>
              <span className="w-4 h-6 bg-cyan-500 text-slate-950 font-mono font-bold text-[9px] flex items-center justify-center rounded">8</span>
            </div>
            <div className="flex gap-1 bg-indigo-950/80 p-1 rounded-md border border-indigo-700/60">
              <span className="w-4 h-6 bg-indigo-500 text-white font-mono font-bold text-[9px] flex items-center justify-center rounded">1</span>
              <span className="w-4 h-6 bg-indigo-500 text-white font-mono font-bold text-[9px] flex items-center justify-center rounded">5</span>
            </div>
          </div>
          <div className="text-[10px] font-bold text-cyan-400 animate-bounce">↓ Merge & Sort ↓</div>
          <div className="flex gap-1.5 bg-emerald-950/90 p-1.5 rounded-lg border border-emerald-500/60 shadow-md">
            <span className="w-5 h-6 bg-emerald-400 text-slate-950 font-mono font-black text-xs flex items-center justify-center rounded shadow-xs">1</span>
            <span className="w-5 h-6 bg-emerald-400 text-slate-950 font-mono font-black text-xs flex items-center justify-center rounded shadow-xs">3</span>
            <span className="w-5 h-6 bg-emerald-400 text-slate-950 font-mono font-black text-xs flex items-center justify-center rounded shadow-xs">5</span>
            <span className="w-5 h-6 bg-emerald-400 text-slate-950 font-mono font-black text-xs flex items-center justify-center rounded shadow-xs">8</span>
          </div>
        </div>
      );

    case "quick-sort":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <div className="px-3 py-1 rounded-full bg-amber-950/90 border border-amber-400 text-amber-300 font-mono text-[10px] font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-[pivotGlow_2.5s_infinite_ease-in-out]">
            Pivot: 50
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <div className="px-2 py-1 bg-cyan-950 border border-cyan-700 text-cyan-300 text-[10px] font-mono font-bold rounded animate-bounce">
              &lt; 50
            </div>
            <div className="w-7 h-10 bg-amber-400 text-slate-950 font-mono font-black text-sm flex items-center justify-center rounded-lg shadow-lg border-2 border-amber-200">
              50
            </div>
            <div className="px-2 py-1 bg-purple-950 border border-purple-700 text-purple-300 text-[10px] font-mono font-bold rounded animate-bounce">
              &gt; 50
            </div>
          </div>
        </div>
      );

    case "heap-sort":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
          <line x1="80" y1="22" x2="45" y2="55" stroke="#6366f1" strokeWidth="2.5" />
          <line x1="80" y1="22" x2="115" y2="55" stroke="#6366f1" strokeWidth="2.5" />
          
          <circle cx="80" cy="22" r="14" fill="#f59e0b" className="animate-[heapExtract_2.5s_infinite_ease-in-out]" />
          <text x="80" y="26" textAnchor="middle" fill="#000" fontSize="11" fontWeight="900">99</text>
          
          <circle cx="45" cy="55" r="11" fill="#0891b2" />
          <text x="45" y="58" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">45</text>
          
          <circle cx="115" cy="55" r="11" fill="#0891b2" />
          <text x="115" y="58" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">63</text>
        </svg>
      );

    case "linear-search":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 overflow-hidden">
          <div className="w-full flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-850 border border-slate-800 text-slate-500 font-mono text-xs font-bold flex items-center justify-center">10</div>
            <div className="w-8 h-8 rounded-xl bg-slate-850 border border-slate-800 text-slate-500 font-mono text-xs font-bold flex items-center justify-center">25</div>
            <div className="w-9 h-9 rounded-xl bg-cyan-400 text-slate-950 font-mono text-sm font-black flex items-center justify-center shadow-[0_0_20px_#06b6d4] border-2 border-cyan-200 animate-pulse">42</div>
            <div className="w-8 h-8 rounded-xl bg-slate-850 border border-slate-800 text-slate-500 font-mono text-xs font-bold flex items-center justify-center">89</div>
          </div>
        </div>
      );

    case "binary-search":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 px-2">
          <div className="w-full flex justify-between text-[9px] font-bold font-mono text-cyan-400 px-1">
            <span>LOW: 0</span>
            <span className="text-emerald-400 font-black text-xs">MID: 42</span>
            <span>HIGH: 4</span>
          </div>
          <div className="w-full flex items-center justify-center gap-1.5">
            <div className="flex-1 h-8 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center opacity-40">10</div>
            <div className="flex-1 h-8 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center opacity-60">25</div>
            <div className="flex-1 h-9 rounded-xl bg-emerald-400 text-slate-950 font-mono text-sm font-black flex items-center justify-center shadow-[0_0_20px_#10b981] border-2 border-emerald-200 animate-[binaryPulse_2s_infinite_ease-in-out]">42</div>
            <div className="flex-1 h-8 rounded-xl bg-slate-900 border border-slate-800 text-slate-600 font-mono text-xs font-bold flex items-center justify-center opacity-40">68</div>
            <div className="flex-1 h-8 rounded-xl bg-slate-900 border border-slate-800 text-slate-600 font-mono text-xs font-bold flex items-center justify-center opacity-40">89</div>
          </div>
        </div>
      );

    case "bfs":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
          <circle cx="40" cy="40" r="24" stroke="#06b6d4" strokeWidth="2" fill="none" className="animate-[radarRipple_2.5s_infinite_ease-out]" />
          <circle cx="40" cy="40" r="44" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

          <line x1="40" y1="40" x2="85" y2="25" stroke="#06b6d4" strokeWidth="2" />
          <line x1="40" y1="40" x2="85" y2="55" stroke="#06b6d4" strokeWidth="2" />

          <circle cx="40" cy="40" r="12" fill="#06b6d4" />
          <text x="40" y="44" textAnchor="middle" fill="#000" fontSize="9" fontWeight="900">S</text>

          <circle cx="85" cy="25" r="11" fill="#10b981" />
          <text x="85" y="28" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">L1</text>

          <circle cx="85" cy="55" r="11" fill="#10b981" />
          <text x="85" y="58" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">L1</text>
        </svg>
      );

    case "dfs":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
          <line x1="30" y1="20" x2="70" y2="40" stroke="#ec4899" strokeWidth="3" className="animate-[laserFlow_2s_infinite_linear]" />
          <line x1="70" y1="40" x2="115" y2="60" stroke="#ec4899" strokeWidth="3" className="animate-[laserFlow_2s_infinite_linear]" />

          <circle cx="30" cy="20" r="11" fill="#ec4899" />
          <text x="30" y="23" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">1</text>

          <circle cx="70" cy="40" r="11" fill="#ec4899" />
          <text x="70" y="43" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">2</text>

          <circle cx="115" cy="60" r="11" fill="#f43f5e" />
          <text x="115" y="63" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">3</text>
        </svg>
      );

    case "dijkstra":
      return (
        <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
          <line x1="35" y1="40" x2="85" y2="20" stroke="#10b981" strokeWidth="3.5" className="animate-[pathLight_2s_infinite_ease-in-out]" />
          <line x1="85" y1="20" x2="135" y2="40" stroke="#10b981" strokeWidth="3.5" className="animate-[pathLight_2s_infinite_ease-in-out]" />

          <circle cx="35" cy="40" r="12" fill="#6366f1" />
          <text x="35" y="43" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Start</text>

          <circle cx="85" cy="20" r="11" fill="#10b981" />
          <text x="85" y="23" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">A:2</text>

          <circle cx="135" cy="40" r="12" fill="#f59e0b" />
          <text x="135" y="43" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">End</text>
        </svg>
      );

    case "stack":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1">
          <div className="w-32 h-16 border-b-2 border-x-2 border-cyan-400 rounded-b-2xl p-1.5 flex flex-col justify-end gap-1 bg-[#090d16] shadow-inner relative">
            <div className="w-full h-6 rounded-lg bg-cyan-400 text-slate-950 font-mono font-black text-xs flex items-center justify-center shadow-lg border border-cyan-200 animate-[stackPushPop_3s_infinite_ease-in-out]">
              42 (Top)
            </div>
            <div className="w-full h-5 rounded-lg bg-indigo-600 text-white font-mono font-bold text-[10px] flex items-center justify-center">
              18
            </div>
          </div>
        </div>
      );

    case "queue":
      return (
        <div className="w-full h-full flex items-center justify-center gap-2 overflow-hidden">
          <span className="text-[10px] font-mono font-bold text-cyan-400 animate-pulse">In ➔</span>
          <div className="h-12 border-y-2 border-indigo-500 px-2 flex items-center gap-1.5 rounded-md bg-[#090d16] animate-[queueSlide_3s_infinite_linear]">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">30</div>
            <div className="w-8 h-8 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center shadow-md">20</div>
            <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-950 font-mono font-black text-xs flex items-center justify-center shadow-md border border-emerald-200">10</div>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-400 animate-pulse">➔ Out</span>
        </div>
      );

    case "linked-list":
      return (
        <div className="w-full h-full flex items-center justify-center gap-2">
          <div className="px-2.5 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold flex items-center gap-1 shadow-md border border-indigo-400">
            <span>12</span>
            <span className="text-cyan-300 font-extrabold">→</span>
          </div>
          <span className="text-cyan-400 font-black text-sm animate-pulse">➔</span>
          <div className="px-2.5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono text-xs font-black flex items-center gap-1 shadow-md border border-cyan-200">
            <span>45</span>
            <span className="text-indigo-950 font-extrabold">→</span>
          </div>
          <span className="text-slate-500 font-bold text-xs">➔</span>
          <div className="px-2 py-1 rounded-lg bg-slate-900 text-slate-400 font-mono text-[10px] font-bold border border-slate-800">NULL</div>
        </div>
      );

    case "binary-tree":
    case "bst":
      return (
        <svg className="w-full h-full text-indigo-400" viewBox="0 0 160 80" fill="none">
          <line x1="80" y1="20" x2="45" y2="55" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="4 2" />
          <line x1="80" y1="20" x2="115" y2="55" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="4 2" />
          
          <circle cx="80" cy="20" r="12" fill="#4f46e5" className="animate-pulse" />
          <text x="80" y="24" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">50</text>

          <circle cx="45" cy="55" r="11" fill="#0891b2" />
          <text x="45" y="58" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">20</text>

          <circle cx="115" cy="55" r="11" fill="#10b981" />
          <text x="115" y="58" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">80</text>
        </svg>
      );

    case "recursion":
    case "fibonacci-dp":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1">
          <div className="px-3 py-1 bg-rose-950 border border-rose-700 text-rose-300 font-mono text-[10px] font-extrabold rounded-md shadow-md animate-pulse">
            F(n) = F(n-1) + F(n-2)
          </div>
          <div className="flex gap-1 text-[9px] font-mono font-bold">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">F(1)=1</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">F(2)=1</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black animate-bounce">F(3)=2</span>
          </div>
        </div>
      );

    case "java-memory":
      return (
        <div className="w-full h-full flex items-center justify-center gap-3 px-2">
          <div className="flex-1 p-2 rounded-xl bg-indigo-950 border border-indigo-700 text-center shadow-md">
            <span className="text-[8px] font-bold uppercase text-indigo-300 block">Stack RAM</span>
            <span className="text-[10px] font-mono font-bold text-white block mt-0.5">userRef</span>
          </div>
          <span className="text-cyan-400 font-mono text-xs font-black animate-pulse">0x8F ➔</span>
          <div className="flex-1 p-2 rounded-xl bg-emerald-950 border border-emerald-700 text-center shadow-md">
            <span className="text-[8px] font-bold uppercase text-emerald-300 block">Heap RAM</span>
            <span className="text-[10px] font-mono font-bold text-emerald-400 block mt-0.5">new User()</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-xs">
          [Interactive Lab]
        </div>
      );
  }
};

export default function AlgoSimDashboard({ onSelectAlgorithm, onClose, onBackToSubjectSelect, subjectTitle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState("all");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mouseSpotlight, setMouseSpotlight] = useState({ x: -1000, y: -1000, cardId: null });
  const searchInputRef = useRef(null);

  // Set body background to #0b0f17 when mounted to prevent white border bleed
  useEffect(() => {
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#0b0f17";
    return () => {
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  // Keyboard shortcut listener for Ctrl+K search focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calculate totals & filtered count
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

  const totalFilteredCount = filteredCategories.reduce((acc, cat) => acc + cat.algorithms.length, 0);

  // Handle Mouse Move for Spotlight
  const handleMouseMoveCard = (e, algoId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      cardId: algoId
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#0b0f17] text-slate-100 p-2 sm:p-4 md:p-6 space-y-6 animate-in fade-in duration-300 font-sans select-none">
      
      {/* 🚀 INLINE CSS KEYFRAME ENGINE FOR GUARANTEED 60FPS ANIMATIONS */}
      <style>{`
        @keyframes bubbleSwapLeft {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(24px, -12px); }
        }
        @keyframes bubbleSwapRight {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-24px, 0); }
        }
        @keyframes scannerBeam {
          0% { transform: translateX(0); opacity: 0.3; }
          50% { transform: translateX(110px); opacity: 1; }
          100% { transform: translateX(0); opacity: 0.3; }
        }
        @keyframes insertionLift {
          0%, 100% { transform: translate(0, 0); }
          35% { transform: translate(0, -16px); }
          70% { transform: translate(-24px, -16px); }
          85% { transform: translate(-24px, 0); }
        }
        @keyframes mergeDivide {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08) translateY(-4px); }
        }
        @keyframes pivotGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 25px rgba(245, 158, 11, 0.9); transform: scale(1.08); }
        }
        @keyframes heapExtract {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-10px); fill: #fbbf24; }
        }
        @keyframes binaryPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); filter: brightness(1.2); }
        }
        @keyframes radarRipple {
          0% { r: 12px; opacity: 1; stroke-width: 2.5px; }
          100% { r: 45px; opacity: 0; stroke-width: 1px; }
        }
        @keyframes laserFlow {
          0% { stroke-dasharray: 5 10; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 5 10; stroke-dashoffset: -30; }
        }
        @keyframes pathLight {
          0%, 100% { stroke: #10b981; opacity: 0.7; }
          50% { stroke: #34d399; opacity: 1; stroke-width: 4px; }
        }
        @keyframes stackPushPop {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-18px); }
          60% { transform: translateY(-18px); }
        }
        @keyframes queueSlide {
          0% { transform: translateX(-15px); }
          50% { transform: translateX(0); }
          100% { transform: translateX(15px); }
        }
      `}</style>

      {/* 1. UNIFIED HERO BANNER CYBER MATRIX WITH ALL INTEGRATED CONTROLS */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0f17] via-[#0d121f] to-[#111827] p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-cyan-500/20 space-y-6">
        {/* Background Decorative Radial Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        {/* TOP ROW: TITLE & QUICK STATS BANNER */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Phòng Thí Nghiệm Đồ Họa Giải Thuật Interactive</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-sans text-white leading-tight">
              Kho Mô Phỏng <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">Giải Thuật & Cấu Trúc Dữ Liệu</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Khám phá và nắm vững bản chất thuật toán qua đồ họa minh họa từng bước, mã giả hai ngôn ngữ và đo lường độ phức tạp thời gian thực tế.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <div className="px-5 py-3.5 rounded-2xl bg-[#0d121f]/90 backdrop-blur-md border border-slate-800 text-center shadow-lg">
              <div className="text-2xl font-black text-cyan-400 font-mono">{totalAlgorithms}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Bài Lab Thuật toán</div>
            </div>
            <div className="px-5 py-3.5 rounded-2xl bg-[#0d121f]/90 backdrop-blur-md border border-slate-800 text-center shadow-lg">
              <div className="text-2xl font-black text-emerald-400 font-mono">{ALGO_CATEGORIES.length}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Chủ đề Chuyên môn</div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: RETURN BUTTONS + SEARCH BAR (LEFT) & SOUND + DIFFICULTY DROPDOWN (RIGHT) */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 relative z-10">
          {/* Left Group: Return Buttons + Integrated Search Bar */}
          <div className="flex items-center gap-2.5 flex-wrap flex-1">
            {onClose && (
              <button
                onClick={() => {
                  playClickChime(soundEnabled);
                  onClose();
                }}
                className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold transition-all border border-cyan-500/30 shadow-md cursor-pointer active:scale-95 shrink-0"
              >
                ← Quay lại bài học
              </button>
            )}

            {onBackToSubjectSelect && (
              <button
                onClick={() => {
                  playClickChime(soundEnabled);
                  onBackToSubjectSelect();
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700 cursor-pointer active:scale-95 shrink-0"
              >
                Đổi môn học
              </button>
            )}

            {/* Integrated Search Input Bar */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thuật toán (Quick Sort...)..."
                className="w-full pl-10 pr-16 py-2 rounded-xl bg-[#0d121f] border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:bg-[#111827] transition-all font-mono shadow-inner"
              />
              {searchQuery ? (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    playClickChime(soundEnabled);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px] font-mono border border-slate-700 pointer-events-none">
                  Ctrl+K
                </kbd>
              )}
            </div>
          </div>

          {/* Right Group: Sound FX Toggle + Difficulty Dropdown */}
          <div className="flex items-center gap-3 shrink-0 justify-start lg:justify-end">
            {/* Sound FX Toggle Button */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClickChime(!soundEnabled);
              }}
              title={soundEnabled ? "Tắt âm thanh tương tác" : "Bật âm thanh tương tác"}
              className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                soundEnabled
                  ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25"
                  : "bg-slate-800/80 text-slate-500 border-slate-700 hover:bg-slate-700 hover:text-slate-300"
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Cyber Dropdown Select Box */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-slate-400 uppercase font-mono">Lọc độ khó:</span>
              <div className="relative">
                <select
                  value={selectedDifficultyFilter}
                  onChange={(e) => {
                    setSelectedDifficultyFilter(e.target.value);
                    playClickChime(soundEnabled);
                  }}
                  className="appearance-none pl-4 pr-9 py-2 rounded-xl bg-[#0d121f] text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold focus:outline-none focus:border-cyan-400 focus:bg-[#111827] cursor-pointer transition-all shadow-md hover:border-cyan-400"
                >
                  <option value="all" className="bg-[#0d121f] text-slate-200 font-sans">Tất cả độ khó</option>
                  <option value="easy" className="bg-[#0d121f] text-emerald-400 font-sans">🟢 Dễ</option>
                  <option value="medium" className="bg-[#0d121f] text-sky-400 font-sans">🔵 Trung bình</option>
                  <option value="hard" className="bg-[#0d121f] text-amber-400 font-sans">🟠 Khó</option>
                  <option value="expert" className="bg-[#0d121f] text-rose-400 font-sans">🔴 Vận dụng cao</option>
                </select>
                <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Realtime Search Counter Pill */}
              {(searchQuery || selectedDifficultyFilter !== "all" || selectedCategoryFilter !== "all") && (
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold animate-pulse shrink-0 ml-1">
                  Hiển thị {totalFilteredCount} / {totalAlgorithms} thuật toán
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CATEGORIES SECTIONS & CARDS GRID */}
      {filteredCategories.length === 0 ? (
        /* HOLOGRAPHIC EMPTY RADAR STUDIO */
        <div className="p-12 text-center bg-[#0d121f]/90 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-cyan-950/80 border-2 border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(6,182,212,0.2)] animate-pulse relative">
            <Search className="w-9 h-9 text-cyan-300" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[radarRipple_2s_infinite_linear]" />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-white tracking-tight">Không tìm thấy thuật toán phù hợp</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Không tìm thấy kết quả khớp với từ khóa &quot;<span className="text-cyan-300 font-mono font-bold">{searchQuery}</span>&quot;. Vui lòng chọn gợi ý bên dưới hoặc đặt lại bộ lọc.
            </p>
          </div>

          {/* Quick HOT Suggestion Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-xl mx-auto pt-2">
            <span className="text-xs font-bold text-slate-500 uppercase font-mono mr-1">Gợi ý HOT:</span>
            {["Quick Sort", "Binary Search", "BFS Traversal", "Java Memory", "Heap Sort"].map((keyword) => (
              <button
                key={keyword}
                onClick={() => {
                  setSearchQuery(keyword);
                  setSelectedCategoryFilter("all");
                  setSelectedDifficultyFilter("all");
                  playClickChime(soundEnabled);
                }}
                className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                {keyword}
              </button>
            ))}
          </div>

          <button 
            onClick={() => { 
              setSearchQuery(""); 
              setSelectedCategoryFilter("all"); 
              setSelectedDifficultyFilter("all"); 
              playClickChime(soundEnabled);
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg shadow-cyan-500/20 mt-3 cursor-pointer"
          >
            🔄 Đặt lại bộ lọc 1-Touch
          </button>
        </div>
      ) : (
        filteredCategories.map(category => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.id} className="space-y-4 pt-2">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.badgeColor} text-white flex items-center justify-center shadow-lg shrink-0 border border-white/20`}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
                      <span>{category.title}</span>
                    </h2>
                    <p className="text-xs text-slate-400 font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-400 border border-slate-800 text-xs font-mono font-bold">
                  {category.algorithms.length} bài Lab
                </span>
              </div>

              {/* Cards Grid (GSAP Staggered Transition + Mouse Radial Spotlight + Audio Feedback) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.algorithms.map((algo, idx) => {
                  const diffInfo = DIFFICULTY_MAP[algo.difficulty] || DIFFICULTY_MAP.easy;
                  return (
                    <button
                      key={algo.id}
                      onMouseEnter={() => playHoverChime(soundEnabled)}
                      onMouseMove={(e) => handleMouseMoveCard(e, algo.id)}
                      onClick={() => {
                        playClickChime(soundEnabled);
                        onSelectAlgorithm(algo.id);
                      }}
                      style={{
                        animationDelay: `${idx * 60}ms`
                      }}
                      className="group text-left relative bg-[#0d121f]/90 hover:bg-[#111827] rounded-3xl border border-slate-800/90 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                    >
                      {/* 💡 CYBER RADIAL GLOW SPOTLIGHT LAYER */}
                      <div
                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{
                          background: mouseSpotlight.cardId === algo.id
                            ? `radial-gradient(450px circle at ${mouseSpotlight.x}px ${mouseSpotlight.y}px, rgba(6, 182, 212, 0.18), transparent 70%)`
                            : "none"
                        }}
                      />

                      {/* TOP PART: SVG LIVE ANIMATION STAGE WITH O(n²) BADGE TOP RIGHT */}
                      <div className="relative w-full h-36 bg-[#080c14] rounded-t-3xl border-b border-slate-800/80 flex items-center justify-center p-3 overflow-hidden group-hover:border-cyan-500/40 transition-colors z-10">
                        {/* Floating Complexity Badge Top Right */}
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#0d121f]/95 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold flex items-center gap-1 shadow-md z-10">
                          <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{algo.complexity}</span>
                        </div>

                        {/* Live SVG Vector Motion */}
                        <AlgoDiagram id={algo.id} />
                      </div>

                      {/* BOTTOM PART: CATEGORY TAGS, TITLE & SHORT DESCRIPTION */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 relative z-10">
                        <div>
                          {/* Badges Row: ALGORITHM | CATEGORY | DIFFICULTY */}
                          <div className="flex items-center gap-1.5 flex-wrap mb-2.5">
                            <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-mono text-[9px] font-extrabold uppercase tracking-wider">
                              {algo.typeLabel || category.typeLabel || "ALGORITHM"}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-mono text-[9px] font-extrabold uppercase tracking-wider">
                              {category.id.replace("-", " ").toUpperCase()}
                            </span>
                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-extrabold border ${diffInfo.color} font-mono uppercase ml-auto`}>
                              {diffInfo.label}
                            </span>
                          </div>

                          {/* Algorithm Title */}
                          <h3 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors tracking-tight leading-snug">
                            {algo.name}
                          </h3>
                          <div className="text-xs font-semibold text-slate-400 mt-0.5 mb-2 font-mono">
                            {algo.nameVi}
                          </div>

                          {/* Short Description */}
                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">
                            {algo.desc}
                          </p>
                        </div>

                        {/* Footer Row */}
                        <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-500">
                            Space: <strong className="text-slate-300">{algo.space || "O(1)"}</strong>
                          </span>
                          <span className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 transition-all">
                            <span>Vào Lab 3D</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
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
