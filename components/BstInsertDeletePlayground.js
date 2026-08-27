"use client";

import React, { useState } from "react";
import { PlusCircle, RotateCcw, Layers, Sparkles } from "lucide-react";

export default function BstInsertDeletePlayground() {
  const initialTree = [
    { key: 15, x: 230, y: 45, left: 6, right: 23, parent: null },
    { key: 6, x: 125, y: 120, left: 4, right: 7, parent: 15 },
    { key: 23, x: 335, y: 120, left: null, right: 71, parent: 15 },
    { key: 4, x: 70, y: 195, left: null, right: 5, parent: 6 },
    { key: 7, x: 180, y: 195, left: null, right: null, parent: 6 },
    { key: 71, x: 390, y: 195, left: 50, right: null, parent: 23 },
    { key: 5, x: 110, y: 270, left: null, right: null, parent: 4 },
    { key: 50, x: 345, y: 270, left: null, right: null, parent: 71 },
  ];

  const [currentTree, setCurrentTree] = useState(initialTree);
  const [highlightKey, setHighlightKey] = useState(null);
  const [actionMessage, setActionMessage] = useState("Cây ban đầu đang ở trạng thái chuẩn.");
  const [activeCaseBadge, setActiveCaseBadge] = useState(null);

  const getEdges = (tree) => {
    const list = [];
    tree.forEach((node) => {
      if (node.left !== null) list.push({ from: node.key, to: node.left });
      if (node.right !== null) list.push({ from: node.key, to: node.right });
    });
    return list;
  };

  const handleReset = () => {
    setCurrentTree(initialTree);
    setHighlightKey(null);
    setActionMessage("Đã khôi phục về cây mẫu ban đầu.");
    setActiveCaseBadge(null);
  };

  // Demo Insert 20
  const handleInsert20 = () => {
    setActiveCaseBadge({
      type: "INSERT",
      title: "Chèn Khóa 20 (Insert 20)",
      desc: "So sánh: 20 > 15 (sang phải) → 20 < 23 (sang trái) → Gặp NULL dưới 23.left → Gắn đỉnh 20 làm LÁ con trái của 23!",
    });
    setHighlightKey(20);

    const exists = currentTree.some((n) => n.key === 20);
    if (exists) {
      setActionMessage("Khóa 20 đã tồn tại trong cây!");
      return;
    }

    const updated = currentTree.map((n) => {
      if (n.key === 23) return { ...n, left: 20 };
      return n;
    });

    updated.push({
      key: 20,
      x: 280,
      y: 195,
      left: null,
      right: null,
      parent: 23,
    });

    setCurrentTree(updated);
    setActionMessage("Thành công: Đỉnh 20 đã được chèn làm con trái (lá) của đỉnh 23!");
  };

  // Demo Case 1: Delete Leaf 5
  const handleDeleteCase1 = () => {
    setActiveCaseBadge({
      type: "CASE 1",
      title: "Xóa Đỉnh Lá 0 Con (Remove 5)",
      desc: "Đỉnh 5 là đỉnh lá (không có con). Ta chỉ cần gắt kết nối của cha nó (4.right = NULL). Chi phí O(1) sau khi tìm thấy đỉnh 5.",
    });
    setHighlightKey(5);

    const updated = currentTree
      .filter((n) => n.key !== 5)
      .map((n) => {
        if (n.key === 4) return { ...n, right: null };
        return n;
      });

    setCurrentTree(updated);
    setActionMessage("Thành công: Đã xóa đỉnh lá 5 (Case 1).");
  };

  // Demo Case 2: Delete Node with 1 child (Remove 23)
  const handleDeleteCase2 = () => {
    setActiveCaseBadge({
      type: "CASE 2",
      title: "Xóa Đỉnh Có Đúng 1 Con (Remove 23)",
      desc: "Đỉnh 23 chỉ có 1 con duy nhất là 71 (bên phải). Ta bỏ qua 23 và nối trực tiếp con 71 lên làm con phải của ông nội (15.right = 71).",
    });
    setHighlightKey(71);

    const updated = currentTree
      .filter((n) => n.key !== 23)
      .map((n) => {
        if (n.key === 15) return { ...n, right: 71 };
        if (n.key === 71) return { ...n, parent: 15, x: 335, y: 120 };
        if (n.key === 50) return { ...n, x: 290, y: 195 };
        return n;
      });

    setCurrentTree(updated);
    setActionMessage("Thành công: Đã xóa đỉnh 23 và nối đỉnh 71 lên thế chỗ (Case 2).");
  };

  // Demo Case 3: Delete Node with 2 children (Remove 6)
  const handleDeleteCase3 = () => {
    setActiveCaseBadge({
      type: "CASE 3",
      title: "Xóa Đỉnh Có 2 Con (Remove 6)",
      desc: "Đỉnh 6 có đủ 2 con (4 và 7). Successor của 6 là 7 (nhỏ nhất cây con phải). Sao chép giá trị 7 đè lên vị trí 6, sau đó xóa nút 7 lá ban đầu.",
    });
    setHighlightKey(7);

    const updated = currentTree
      .filter((n) => n.key !== 7)
      .map((n) => {
        if (n.key === 6) return { ...n, key: 7, right: null };
        return n;
      });

    setCurrentTree(updated);
    setActionMessage("Thành công: Thay 6 bằng successor 7 rồi xóa 7 cũ (Case 3).");
  };

  const edges = getEdges(currentTree);

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phân Loại Trường Hợp &amp; Minh Họa Cập Nhật</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Thao Tác Insert &amp; Delete (3 Trường Hợp Cốt Lõi)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đỉnh mới luôn được chèn làm <span className="text-emerald-700 font-bold">LÁ</span>. Phép xóa xử lý theo <span className="text-amber-800 font-bold">3 trường hợp</span> tùy theo số lượng con.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 self-start md:self-auto transition-all shadow-sm"
        >
          <RotateCcw className="w-4 h-4 text-emerald-600" />
          <span>Khôi Phục Cây Mẫu</span>
        </button>
      </div>

      {/* TOP: 3 Case Cards Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Card Case 1 */}
        <div
          onClick={handleDeleteCase1}
          className="cursor-pointer rounded-2xl bg-white border border-sky-200 p-4 hover:border-sky-400 hover:shadow-md transition-all shadow-sm group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-300 text-sky-800 text-[11px] font-bold">
              CASE 1
            </span>
            <span className="text-[11px] text-slate-500 font-mono">0 Con (Lá)</span>
          </div>
          <h4 className="text-sm font-bold text-sky-950 group-hover:text-sky-700 transition-colors">
            Xóa Đỉnh Lá: Remove(5)
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Đơn giản nhất: Chỉ cần đặt con trỏ của cha về <span className="font-mono text-sky-700 font-bold">NULL</span> để giải phóng lá.
          </p>
          <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-sky-700 font-bold flex items-center gap-1">
            <span>Bấm để chạy thử mô phỏng &rarr;</span>
          </div>
        </div>

        {/* Card Case 2 */}
        <div
          onClick={handleDeleteCase2}
          className="cursor-pointer rounded-2xl bg-white border border-amber-200 p-4 hover:border-amber-400 hover:shadow-md transition-all shadow-sm group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-[11px] font-bold">
              CASE 2
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Có Đúng 1 Con</span>
          </div>
          <h4 className="text-sm font-bold text-amber-950 group-hover:text-amber-700 transition-colors">
            Xóa Đỉnh 1 Con: Remove(23)
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Nối trực tiếp con duy nhất (71) lên thế chỗ cha (23) làm con phải mới của 15.
          </p>
          <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-amber-700 font-bold flex items-center gap-1">
            <span>Bấm để chạy thử mô phỏng &rarr;</span>
          </div>
        </div>

        {/* Card Case 3 */}
        <div
          onClick={handleDeleteCase3}
          className="cursor-pointer rounded-2xl bg-white border border-rose-200 p-4 hover:border-rose-400 hover:shadow-md transition-all shadow-sm group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-300 text-rose-800 text-[11px] font-bold">
              CASE 3
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Có Đủ 2 Con</span>
          </div>
          <h4 className="text-sm font-bold text-rose-950 group-hover:text-rose-700 transition-colors">
            Xóa Đỉnh 2 Con: Remove(6)
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Tìm <span className="font-mono text-rose-700 font-bold">Successor(6) = 7</span> &rarr; Sao chép giá trị 7 đè lên 6 &rarr; Xóa lá 7 cũ.
          </p>
          <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-rose-700 font-bold flex items-center gap-1">
            <span>Bấm để chạy thử mô phỏng &rarr;</span>
          </div>
        </div>
      </div>

      {/* Action Trigger Bar */}
      <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-700">Thao tác mẫu:</span>
          <button
            onClick={handleInsert20}
            className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-900 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <PlusCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chèn Insert(20)</span>
          </button>
          <button
            onClick={handleDeleteCase1}
            className="px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-300 hover:bg-sky-100 text-sky-900 text-xs font-bold transition-all shadow-sm"
          >
            Xóa lá: Remove(5)
          </button>
          <button
            onClick={handleDeleteCase2}
            className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all shadow-sm"
          >
            Xóa 1 con: Remove(23)
          </button>
          <button
            onClick={handleDeleteCase3}
            className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-300 hover:bg-rose-100 text-rose-900 text-xs font-bold transition-all shadow-sm"
          >
            Xóa 2 con: Remove(6)
          </button>
        </div>

        <div className="text-xs font-mono text-slate-500">
          Tổng số đỉnh hiện tại: <span className="text-emerald-700 font-bold">{currentTree.length}</span>
        </div>
      </div>

      {/* Main Canvas + Explanation Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Dynamic Live Tree (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[350px] shadow-sm">
          <svg viewBox="0 0 460 300" className="w-full h-auto select-none max-w-[460px]">
            {/* Edges */}
            {edges.map((edge, idx) => {
              const f = currentTree.find((n) => n.key === edge.from);
              const t = currentTree.find((n) => n.key === edge.to);
              if (!f || !t) return null;

              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                />
              );
            })}

            {/* Nodes */}
            {currentTree.map((node) => {
              const isHighlight = highlightKey === node.key;

              return (
                <g key={node.key} className="transition-all duration-500">
                  {isHighlight && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="26"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={20}
                    fill={isHighlight ? "#d1fae5" : "#ffffff"}
                    stroke={isHighlight ? "#059669" : "#94a3b8"}
                    strokeWidth={isHighlight ? "3.5" : "2"}
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill={isHighlight ? "#065f46" : "#0f172a"}
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.key}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="w-full mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{actionMessage}</span>
          </div>
        </div>

        {/* Case Detail Banner (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm flex flex-col justify-between self-stretch">
          {activeCaseBadge ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase bg-emerald-100 border border-emerald-300 text-emerald-900">
                    {activeCaseBadge.type}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    {activeCaseBadge.title}
                  </h4>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                {activeCaseBadge.desc}
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1.5">
                <div className="text-emerald-950 font-bold">Quy tắc vàng bảo toàn BST Property:</div>
                <p className="text-[11px] text-slate-700">
                  Sau khi chèn hoặc xóa, mọi đỉnh trong cây vẫn phải thỏa mãn tính chất <span className="font-mono text-emerald-800 font-bold">left &lt; root &lt; right</span>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">
                Tổng Kết Độ Phức Tạp 6 Thao Tác BST:
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-700">Search(v) / FindMin / FindMax:</span>
                  <span className="font-mono font-bold text-emerald-700">O(h)</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-700">Successor(x) / Predecessor(x):</span>
                  <span className="font-mono font-bold text-emerald-700">O(h)</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-700">Insert(v) (luôn chèn làm lá):</span>
                  <span className="font-mono font-bold text-emerald-700">O(h)</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-700">Delete(x) (xử lý 3 cases):</span>
                  <span className="font-mono font-bold text-emerald-700">O(h)</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-700">Inorder Traversal (dãy tăng dần):</span>
                  <span className="font-mono font-bold text-amber-800">O(n)</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            * <span className="font-mono font-bold text-emerald-700">h = log&#8322;n</span> nếu cây cân bằng tốt, <span className="font-mono text-rose-700 font-bold">h = n</span> nếu cây bị suy biến thành danh sách liên kết.
          </div>
        </div>
      </div>
    </div>
  );
}
