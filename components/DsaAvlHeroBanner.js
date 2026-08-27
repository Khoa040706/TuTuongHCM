"use client";

import React, { useState, useEffect } from "react";
import { TreePine, Sparkles, Zap, RotateCcw, Plus, Scale, AlertTriangle, BookOpen, ShieldCheck } from "lucide-react";

// AVL Node definition
class AvlNode {
  constructor(val) {
    this.val = val;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

// Helpers for AVL calculation
const getHeight = (node) => (node ? node.height : 0);
const getBalance = (node) => (node ? getHeight(node.left) - getHeight(node.right) : 0);

const rightRotate = (y) => {
  const x = y.left;
  const T2 = x.right;
  x.right = y;
  y.left = T2;
  y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
  x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));
  return x;
};

const leftRotate = (x) => {
  const y = x.right;
  const T2 = y.left;
  y.left = x;
  x.right = T2;
  x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));
  y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
  return y;
};

const insertAvl = (node, val, logCallback) => {
  if (!node) return new AvlNode(val);

  if (val < node.val) {
    node.left = insertAvl(node.left, val, logCallback);
  } else if (val > node.val) {
    node.right = insertAvl(node.right, val, logCallback);
  } else {
    return node; // Duplicate keys not allowed
  }

  node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
  const balance = getBalance(node);

  // Case 1: Left-Left (LL) -> Right Rotate
  if (balance > 1 && val < node.left.val) {
    if (logCallback) logCallback(`🚨 Vi phạm LL tại đỉnh ${node.val} (BF = +${balance}) → Thực hiện RIGHT ROTATION quanh ${node.val}!`);
    return rightRotate(node);
  }

  // Case 2: Right-Right (RR) -> Left Rotate
  if (balance < -1 && val > node.right.val) {
    if (logCallback) logCallback(`🚨 Vi phạm RR tại đỉnh ${node.val} (BF = ${balance}) → Thực hiện LEFT ROTATION quanh ${node.val}!`);
    return leftRotate(node);
  }

  // Case 3: Left-Right (LR) -> Left Rotate left child then Right Rotate parent
  if (balance > 1 && val > node.left.val) {
    if (logCallback) logCallback(`🚨 Vi phạm LR tại đỉnh ${node.val} (BF = +${balance}) → DOUBLE ROTATION: Left Rotate(${node.left.val}) rồi Right Rotate(${node.val})!`);
    node.left = leftRotate(node.left);
    return rightRotate(node);
  }

  // Case 4: Right-Left (RL) -> Right Rotate right child then Left Rotate parent
  if (balance < -1 && val < node.right.val) {
    if (logCallback) logCallback(`🚨 Vi phạm RL tại đỉnh ${node.val} (BF = ${balance}) → DOUBLE ROTATION: Right Rotate(${node.right.val}) rồi Left Rotate(${node.val})!`);
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
};

export default function DsaAvlHeroBanner() {
  const [activeTab, setActiveTab] = useState("sandbox"); // "sandbox" | "rotations" | "theory"
  const [theorySubTab, setTheorySubTab] = useState("motivation");
  const [treeRoot, setTreeRoot] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [logMessage, setLogMessage] = useState("Sẵn sàng! Hãy nhập một số hoặc bấm các nút kịch bản để quan sát AVL tự cân bằng.");
  const [highlightVal, setHighlightVal] = useState(null);

  // Initialize sample balanced tree on mount
  useEffect(() => {
    initDefaultTree();
  }, []);

  const initDefaultTree = () => {
    let root = null;
    const initialKeys = [40, 20, 60, 10, 30, 50, 70];
    initialKeys.forEach((k) => {
      root = insertAvl(root, k, null);
    });
    setTreeRoot(root);
    setLogMessage("Đã nạp cây mẫu cân bằng hoàn hảo 7 đỉnh (Height = 3, Mọi BF = 0).");
    setHighlightVal(null);
  };

  const handleInsert = (customVal = null) => {
    const val = customVal !== null ? customVal : parseInt(inputVal, 10);
    if (isNaN(val)) return;

    setHighlightVal(val);
    let newLog = `Đã chèn giá trị ${val} thành công vào cây AVL. Cây hoàn toàn cân bằng!`;

    const updatedRoot = insertAvl(treeRoot, val, (msg) => {
      newLog = msg;
    });

    setTreeRoot({ ...updatedRoot });
    setLogMessage(newLog);
    setInputVal("");
  };

  // 4 Core Rotation Scenarios
  const handleScenarioLL = () => {
    let root = null;
    root = insertAvl(root, 30, null);
    root = insertAvl(root, 20, null);
    setTreeRoot({ ...root });
    setLogMessage("Đã nạp chuỗi [30, 20]. Đang chuẩn bị chèn 10 để kích hoạt vi phạm LL...");
    setTimeout(() => {
      setHighlightVal(10);
      const res = insertAvl(root, 10, (msg) => setLogMessage(msg));
      setTreeRoot({ ...res });
    }, 700);
  };

  const handleScenarioRR = () => {
    let root = null;
    root = insertAvl(root, 10, null);
    root = insertAvl(root, 20, null);
    setTreeRoot({ ...root });
    setLogMessage("Đã nạp chuỗi [10, 20]. Đang chuẩn bị chèn 30 để kích hoạt vi phạm RR...");
    setTimeout(() => {
      setHighlightVal(30);
      const res = insertAvl(root, 30, (msg) => setLogMessage(msg));
      setTreeRoot({ ...res });
    }, 700);
  };

  const handleScenarioLR = () => {
    let root = null;
    root = insertAvl(root, 30, null);
    root = insertAvl(root, 10, null);
    setTreeRoot({ ...root });
    setLogMessage("Đã nạp chuỗi [30, 10]. Đang chuẩn bị chèn 20 để kích hoạt vi phạm LR (Quay kép)...");
    setTimeout(() => {
      setHighlightVal(20);
      const res = insertAvl(root, 20, (msg) => setLogMessage(msg));
      setTreeRoot({ ...res });
    }, 700);
  };

  const handleScenarioRL = () => {
    let root = null;
    root = insertAvl(root, 10, null);
    root = insertAvl(root, 30, null);
    setTreeRoot({ ...root });
    setLogMessage("Đã nạp chuỗi [10, 30]. Đang chuẩn bị chèn 20 để kích hoạt vi phạm RL (Quay kép)...");
    setTimeout(() => {
      setHighlightVal(20);
      const res = insertAvl(root, 20, (msg) => setLogMessage(msg));
      setTreeRoot({ ...res });
    }, 700);
  };

  // Convert AVL tree to positioned SVG nodes & edges
  const calculateLayout = () => {
    if (!treeRoot) return { nodes: [], edges: [] };

    const nodes = [];
    const traverse = (node, x, y, level, spread) => {
      if (!node) return;

      const bf = getBalance(node);
      const current = {
        val: node.val,
        height: node.height,
        bf,
        x,
        y,
        left: node.left ? node.left.val : null,
        right: node.right ? node.right.val : null,
      };
      nodes.push(current);

      const nextSpread = spread / 2;
      if (node.left) {
        traverse(node.left, x - spread, y + 65, level + 1, nextSpread);
      }
      if (node.right) {
        traverse(node.right, x + spread, y + 65, level + 1, nextSpread);
      }
    };

    traverse(treeRoot, 250, 45, 0, 110);
    return nodes;
  };

  const renderedNodes = calculateLayout();
  const renderedEdges = [];
  renderedNodes.forEach((node) => {
    if (node.left !== null) {
      const target = renderedNodes.find((n) => n.val === node.left);
      if (target) renderedEdges.push({ from: node, to: target });
    }
    if (node.right !== null) {
      const target = renderedNodes.find((n) => n.val === node.right);
      if (target) renderedEdges.push({ from: node, to: target });
    }
  });

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Main Title Badge */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold mb-3 shadow-sm">
            <Scale className="w-4 h-4 text-emerald-700" />
            <span>Chương Trình Cấu Trúc Dữ Liệu &amp; Giải Thuật • Bài 9</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Bài 9: AVL Tree — Balancing Act
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Nghệ thuật tự cân bằng hoàn hảo của cây nhị phân (Adelson-Velsky &amp; Landis). Giải quyết triệt để vấn đề suy biến chiều cao, bảo chứng hiệu năng <span className="font-mono text-emerald-700 font-bold">O(log n)</span> trong mọi trường hợp!
          </p>
        </div>

        {/* Action Tabs Top Bar */}
        <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200 self-start md:self-auto gap-1">
          <button
            onClick={() => setActiveTab("sandbox")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "sandbox"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <TreePine className="w-3.5 h-3.5" />
            Live AVL Sandbox
          </button>
          <button
            onClick={() => setActiveTab("rotations")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "rotations"
                ? "bg-teal-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            4 Phép Quay Demo
          </button>
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "theory"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Lý Thuyết Tổng Quan
          </button>
        </div>
      </div>

      {/* TAB 1: LIVE AVL SANDBOX & TAB 2: ROTATIONS PLAYGROUND */}
      {(activeTab === "sandbox" || activeTab === "rotations") && (
        <div className="relative z-10 space-y-6">
          {/* Quick Rotation Triggers Bar */}
          {activeTab === "rotations" && (
            <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  Thử Nghiệm Nhanh 4 Kịch Bản Mất Cân Bằng &amp; Phép Quay Cứu Cánh:
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Bấm để nạp và kích hoạt phép quay tự động</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                <button
                  onClick={handleScenarioLL}
                  className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 hover:bg-emerald-100/80 text-emerald-950 font-mono text-xs font-bold text-left transition-all hover:scale-[1.02] shadow-sm"
                >
                  <div className="text-[10px] text-emerald-700 font-bold uppercase">CASE 1 (Quay đơn)</div>
                  <div className="text-sm text-slate-900 font-bold mt-0.5">Left-Left (LL)</div>
                  <div className="text-[10px] text-slate-600 mt-1 font-sans font-semibold">&rarr; Right Rotate</div>
                </button>
                <button
                  onClick={handleScenarioRR}
                  className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 hover:bg-teal-100/80 text-teal-950 font-mono text-xs font-bold text-left transition-all hover:scale-[1.02] shadow-sm"
                >
                  <div className="text-[10px] text-teal-700 font-bold uppercase">CASE 2 (Quay đơn)</div>
                  <div className="text-sm text-slate-900 font-bold mt-0.5">Right-Right (RR)</div>
                  <div className="text-[10px] text-slate-600 mt-1 font-sans font-semibold">&rarr; Left Rotate</div>
                </button>
                <button
                  onClick={handleScenarioLR}
                  className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 hover:bg-purple-100/80 text-purple-950 font-mono text-xs font-bold text-left transition-all hover:scale-[1.02] shadow-sm"
                >
                  <div className="text-[10px] text-purple-700 font-bold uppercase">CASE 3 (Quay kép)</div>
                  <div className="text-sm text-slate-900 font-bold mt-0.5">Left-Right (LR)</div>
                  <div className="text-[10px] text-slate-600 mt-1 font-sans font-semibold">&rarr; Left-Right Rotate</div>
                </button>
                <button
                  onClick={handleScenarioRL}
                  className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 hover:bg-rose-100/80 text-rose-950 font-mono text-xs font-bold text-left transition-all hover:scale-[1.02] shadow-sm"
                >
                  <div className="text-[10px] text-rose-700 font-bold uppercase">CASE 4 (Quay kép)</div>
                  <div className="text-sm text-slate-900 font-bold mt-0.5">Right-Left (RL)</div>
                  <div className="text-[10px] text-slate-600 mt-1 font-sans font-semibold">&rarr; Right-Left Rotate</div>
                </button>
              </div>
            </div>
          )}

          {/* Interactive Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm items-center">
            <div className="md:col-span-6 flex items-center gap-2">
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Nhập khóa..."
                className="w-32 px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
              <button
                onClick={() => handleInsert()}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                Chèn vào AVL
              </button>
              <button
                onClick={initDefaultTree}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                Cây mẫu 7 đỉnh
              </button>
            </div>

            <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-2 text-xs">
              <span className="text-slate-500 text-[11px] font-semibold">Chèn nhanh:</span>
              {[5, 15, 25, 35, 45, 55, 65, 75].map((num) => (
                <button
                  key={num}
                  onClick={() => handleInsert(num)}
                  className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 font-mono text-slate-700 text-xs transition-all font-bold"
                >
                  +{num}
                </button>
              ))}
            </div>
          </div>

          {/* SVG AVL Tree Canvas */}
          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative min-h-[380px] overflow-hidden">
            <svg viewBox="0 0 500 320" className="w-full h-auto select-none max-w-[500px]">
              {/* Edges */}
              {renderedEdges.map((edge, idx) => (
                <line
                  key={idx}
                  x1={edge.from.x}
                  y1={edge.from.y}
                  x2={edge.to.x}
                  y2={edge.to.y}
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                />
              ))}

              {/* Nodes */}
              {renderedNodes.map((node) => {
                const isHighlight = highlightVal === node.val;
                const isZero = node.bf === 0;
                const isSafe = Math.abs(node.bf) === 1;

                return (
                  <g key={node.val} className="transition-all duration-500">
                    {isHighlight && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="26"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        className="animate-ping"
                        opacity="0.6"
                      />
                    )}

                    {/* Main Node Circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="19"
                      fill={isHighlight ? "#d1fae5" : "#ffffff"}
                      stroke={isHighlight ? "#059669" : "#64748b"}
                      strokeWidth={isHighlight ? "3" : "2"}
                    />

                    {/* Node Key */}
                    <text
                      x={node.x}
                      y={node.y + 5}
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="13"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {node.val}
                    </text>

                    {/* Balance Factor (BF) Mini Badge */}
                    <g transform={`translate(${node.x + 12}, ${node.y - 18})`}>
                      <circle
                        cx="0"
                        cy="0"
                        r="9"
                        fill={isZero ? "#d1fae5" : isSafe ? "#e0f2fe" : "#ffe4e6"}
                        stroke={isZero ? "#059669" : isSafe ? "#0284c7" : "#e11d48"}
                        strokeWidth="1.5"
                      />
                      <text
                        x="0"
                        y="3"
                        textAnchor="middle"
                        fill={isZero ? "#065f46" : isSafe ? "#0369a1" : "#9f1239"}
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {node.bf > 0 ? `+${node.bf}` : node.bf}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Dynamic Status Log Bubble — TERMINAL NỀN TỐI */}
            <div className="w-full mt-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-emerald-300 font-mono flex items-center gap-2.5 shadow-md">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 animate-bounce" />
              <span className="leading-relaxed">{logMessage}</span>
            </div>
          </div>

          {/* Balance Factor Legend Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm text-xs text-slate-600">
            <span className="font-bold text-slate-800">Ý nghĩa huy hiệu Balance Factor:</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-500" />
                <span className="font-semibold text-slate-700">BF = 0 (Cân bằng tuyệt đối)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-sky-100 border border-sky-500" />
                <span className="font-semibold text-slate-700">BF = &plusmn;1 (Hợp lệ an toàn)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-100 border border-rose-500" />
                <span className="font-semibold text-rose-700">|BF| &ge; 2 (Vi phạm &rarr; Tự động quay)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: THEORY OVERVIEW */}
      {activeTab === "theory" && (
        <div className="relative z-10 space-y-6 animate-fadeIn">
          {/* Subtabs for Theory */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { id: "motivation", title: "1. Động Lực Ra Đời", icon: AlertTriangle },
              { id: "condition", title: "2. Điều Kiện Cân Bằng", icon: Scale },
              { id: "rotations_theory", title: "3. 4 Phép Quay Cốt Lõi", icon: Zap },
              { id: "guarantee", title: "4. Bảo Chứng O(log n)", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSel = theorySubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setTheorySubTab(tab.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                    isSel
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-bold">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Theory Content Cards */}
          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-slate-700 space-y-4 text-xs md:text-sm leading-relaxed">
            {theorySubTab === "motivation" && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Khắc Phục Thảm Họa Suy Biến Chiều Cao Của BST
                </h4>
                <p>
                  Trong bài 8, chúng ta đã chứng minh rằng <strong>cây BST thông thường (Plain BST) không tự cân bằng</strong>. Khi dữ liệu chèn vào theo thứ tự tăng dần hoặc giảm dần, cây sẽ thoái hóa thành một danh sách liên kết đơn với chiều cao h = O(n), làm cho mọi thao tác tìm kiếm, chèn, xóa bị tụt dốc hiệu năng về O(n).
                </p>
                <p>
                  &rArr; <strong>Cây AVL (1962)</strong> là cấu trúc dữ liệu cây tìm kiếm nhị phân tự cân bằng đầu tiên trong lịch sử khoa học máy tính, được phát minh bởi 2 nhà toán học Liên Xô <strong>Georgy Adelson-Velsky</strong> và <strong>Evgenii Landis</strong>.
                </p>
              </div>
            )}

            {theorySubTab === "condition" && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-700" />
                  Định Nghĩa Chiều Cao &amp; Hệ Số Cân Bằng (Balance Factor)
                </h4>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-950 space-y-1.5 font-semibold">
                  <div>• Chiều cao đỉnh x: <code>height(x) = 1 + max(height(x.left), height(x.right))</code></div>
                  <div>• Hệ số cân bằng: <code>BF(x) = height(x.left) - height(x.right)</code></div>
                  <div>• Điều kiện cân bằng AVL: <code>BF(x) &isin; &#123;-1, 0, +1&#125;</code> (Đúng cho MỌI đỉnh x)</div>
                </div>
                <p>
                  Chỉ cần tồn tại một đỉnh bất kỳ có |BF(x)| &ge; 2, cây rơi vào trạng thái mất cân bằng và bắt buộc phải thực hiện phép quay thích hợp để phục hồi trật tự.
                </p>
              </div>
            )}

            {theorySubTab === "rotations_theory" && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-700" />
                  4 Trường Hợp Mất Cân Bằng &amp; 4 Phép Quay Cứu Cánh
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-sky-800">1. Left-Left (LL):</span> Lệch nhánh ngoài bên trái &rarr; Dùng <strong>Right Rotation (Quay Phải)</strong> đơn.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-800">2. Right-Right (RR):</span> Lệch nhánh ngoài bên phải &rarr; Dùng <strong>Left Rotation (Quay Trái)</strong> đơn.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-purple-800">3. Left-Right (LR):</span> Lệch nhánh trong bên trái &rarr; Dùng <strong>Left-Right Double Rotation (Quay Kép)</strong>.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-rose-800">4. Right-Left (RL):</span> Lệch nhánh trong bên phải &rarr; Dùng <strong>Right-Left Double Rotation (Quay Kép)</strong>.
                  </div>
                </div>
              </div>
            )}

            {theorySubTab === "guarantee" && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Bảo Chứng Hiệu Năng Vững Chắc O(log n)
                </h4>
                <p>
                  Nhờ cơ chế tự xoay khi có biến động, chiều cao h của một cây AVL chứa n phần tử luôn luôn được giới hạn trên nghiêm ngặt:
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-center text-sm font-bold text-emerald-900">
                  h &le; 1.4404 &times; log&#8322;(n + 2) &minus; 0.328 &approx; O(log n)
                </div>
                <p>
                  Điều này đảm bảo toàn bộ 8 thao tác (Search, Insert, Remove, Min, Max, Successor, Predecessor, Rank) đều chạy trong thời gian <span className="font-mono text-emerald-800 font-bold">O(log n)</span> trong trường hợp xấu nhất (Worst-Case Guarantee)!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
