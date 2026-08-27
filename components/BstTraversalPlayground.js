"use client";

import React, { useState, useEffect, useRef } from "react";
import { Compass, Play, Pause, RotateCcw, ArrowRight, Sparkles, Code2, ListOrdered, CheckCircle2 } from "lucide-react";

export default function BstTraversalPlayground() {
  const [tab, setTab] = useState("successor"); // "successor" | "predecessor" | "inorder"
  const [selectedNodeKey, setSelectedNodeKey] = useState(15);
  const [explanation, setExplanation] = useState(null);

  // Inorder animation states
  const [inorderStep, setInorderStep] = useState(0);
  const [isPlayingInorder, setIsPlayingInorder] = useState(false);
  const [inorderOutput, setInorderOutput] = useState([]);
  const [activeCodeLine, setActiveCodeLine] = useState(1);

  // Master tree nodes
  const nodes = [
    { id: 15, key: 15, x: 230, y: 45, parent: null, left: 6, right: 23 },
    { id: 6, key: 6, x: 125, y: 120, parent: 15, left: 4, right: 7 },
    { id: 23, key: 23, x: 335, y: 120, parent: 15, left: null, right: 71 },
    { id: 4, key: 4, x: 70, y: 195, parent: 6, left: null, right: 5 },
    { id: 7, key: 7, x: 180, y: 195, parent: 6, left: null, right: null },
    { id: 71, key: 71, x: 390, y: 195, parent: 23, left: 50, right: null },
    { id: 5, key: 5, x: 110, y: 270, parent: 4, left: null, right: null },
    { id: 50, key: 50, x: 345, y: 270, parent: 71, left: null, right: null },
  ];

  const edges = [
    { from: 15, to: 6 },
    { from: 15, to: 23 },
    { from: 6, to: 4 },
    { from: 6, to: 7 },
    { from: 4, to: 5 },
    { from: 23, to: 71 },
    { from: 71, to: 50 },
  ];

  // Inorder execution sequence
  const inorderFullSteps = [
    { activeKey: 15, line: 2, action: "Inorder(15) → Gọi đệ quy nhánh trái Inorder(6)", addedVal: null },
    { activeKey: 6, line: 2, action: "Inorder(6) → Gọi đệ quy nhánh trái Inorder(4)", addedVal: null },
    { activeKey: 4, line: 2, action: "Inorder(4) → Nhánh trái là NULL → Thăm chính đỉnh 4", addedVal: null },
    { activeKey: 4, line: 3, action: "Thăm đỉnh 4 → Xuất giá trị [ 4 ]", addedVal: 4 },
    { activeKey: 4, line: 4, action: "Inorder(4) → Gọi đệ quy nhánh phải Inorder(5)", addedVal: null },
    { activeKey: 5, line: 3, action: "Thăm đỉnh 5 → Xuất giá trị [ 5 ]", addedVal: 5 },
    { activeKey: 6, line: 3, action: "Quay về đỉnh 6 → Thăm chính đỉnh 6 → Xuất [ 6 ]", addedVal: 6 },
    { activeKey: 6, line: 4, action: "Inorder(6) → Gọi đệ quy nhánh phải Inorder(7)", addedVal: null },
    { activeKey: 7, line: 3, action: "Thăm đỉnh 7 → Xuất giá trị [ 7 ]", addedVal: 7 },
    { activeKey: 15, line: 3, action: "Hoàn tất toàn bộ nhánh trái! Thăm Root (15) → Xuất [ 15 ]", addedVal: 15 },
    { activeKey: 15, line: 4, action: "Inorder(15) → Bắt đầu duyệt toàn bộ nhánh phải Inorder(23)", addedVal: null },
    { activeKey: 23, line: 3, action: "Tại 23 (không có con trái) → Thăm đỉnh 23 → Xuất [ 23 ]", addedVal: 23 },
    { activeKey: 23, line: 4, action: "Inorder(23) → Gọi đệ quy nhánh phải Inorder(71)", addedVal: null },
    { activeKey: 71, line: 2, action: "Inorder(71) → Gọi đệ quy nhánh trái Inorder(50)", addedVal: null },
    { activeKey: 50, line: 3, action: "Thăm đỉnh 50 → Xuất giá trị [ 50 ]", addedVal: 50 },
    { activeKey: 71, line: 3, action: "Quay về đỉnh 71 → Thăm đỉnh 71 → Xuất [ 71 ]", addedVal: 71 },
  ];

  const inorderTimer = useRef(null);

  // Calculate Successor details
  const getSuccessorInfo = (key) => {
    const node = nodes.find((n) => n.key === key);
    if (!node) return null;

    if (node.right !== null) {
      let curr = nodes.find((n) => n.key === node.right);
      const path = [key, curr.key];
      while (curr && curr.left !== null) {
        curr = nodes.find((n) => n.key === curr.left);
        if (curr) path.push(curr.key);
      }
      return {
        caseType: 1,
        title: "Trường hợp 1: Có Cây Con Phải (Has Right Subtree)",
        desc: `Đỉnh ${key} có con phải (gốc là ${node.right}). Ta chỉ việc tìm giá trị nhỏ nhất (FindMin) của cây con phải đó bằng cách đi sang phải rồi đi sang trái liên tục.`,
        result: curr ? curr.key : null,
        path,
        rule: "Successor(x) = FindMin(x.right)",
      };
    } else {
      const path = [key];
      let curr = node;
      let p = nodes.find((n) => n.key === curr.parent);

      while (p !== null && curr.key === p.right) {
        path.push(p.key);
        curr = p;
        p = nodes.find((n) => n.key === curr.parent);
      }

      if (p !== null) {
        path.push(p.key);
        return {
          caseType: 2,
          title: "Trường hợp 2: KHÔNG Có Cây Con Phải (No Right Subtree)",
          desc: `Đỉnh ${key} không có con phải. Ta đi ngược lên các nút tổ tiên (theo x.parent) cho đến khi gặp một nút cha mà ta đi lên từ nhánh con TRÁI của nó (rẽ phải lần đầu). Nút cha đó chính là Successor.`,
          result: p.key,
          path,
          rule: "Đi lên theo parent đến khi ta là con trái của cha",
        };
      } else {
        return {
          caseType: 2,
          title: "Trường hợp 2: Không có Successor (Là phần tử lớn nhất)",
          desc: `Đỉnh ${key} là phần tử lớn nhất trong toàn bộ cây (Max), không có phần tử nào kế tiếp lớn hơn.`,
          result: "KHÔNG CÓ (NULL)",
          path,
          rule: "x là phần tử lớn nhất trong cây",
        };
      }
    }
  };

  // Calculate Predecessor details
  const getPredecessorInfo = (key) => {
    const node = nodes.find((n) => n.key === key);
    if (!node) return null;

    if (node.left !== null) {
      let curr = nodes.find((n) => n.key === node.left);
      const path = [key, curr.key];
      while (curr && curr.right !== null) {
        curr = nodes.find((n) => n.key === curr.right);
        if (curr) path.push(curr.key);
      }
      return {
        caseType: 1,
        title: "Trường hợp 1: Có Cây Con Trái (Has Left Subtree)",
        desc: `Đỉnh ${key} có con trái (gốc là ${node.left}). Ta chỉ việc tìm giá trị lớn nhất (FindMax) của cây con trái đó bằng cách đi sang trái rồi đi sang phải liên tục.`,
        result: curr ? curr.key : null,
        path,
        rule: "Predecessor(x) = FindMax(x.left)",
      };
    } else {
      const path = [key];
      let curr = node;
      let p = nodes.find((n) => n.key === curr.parent);

      while (p !== null && curr.key === p.left) {
        path.push(p.key);
        curr = p;
        p = nodes.find((n) => n.key === curr.parent);
      }

      if (p !== null) {
        path.push(p.key);
        return {
          caseType: 2,
          title: "Trường hợp 2: KHÔNG Có Cây Con Trái (No Left Subtree)",
          desc: `Đỉnh ${key} không có con trái. Ta đi ngược lên các nút tổ tiên (theo x.parent) cho đến khi gặp một nút cha mà ta đi lên từ nhánh con PHẢI của nó (rẽ trái lần đầu). Nút cha đó chính là Predecessor.`,
          result: p.key,
          path,
          rule: "Đi lên theo parent đến khi ta là con phải của cha",
        };
      } else {
        return {
          caseType: 2,
          title: "Trường hợp 2: Không có Predecessor (Là phần tử nhỏ nhất)",
          desc: `Đỉnh ${key} là phần tử nhỏ nhất trong toàn bộ cây (Min), không có phần tử nào nhỏ hơn.`,
          result: "KHÔNG CÓ (NULL)",
          path,
          rule: "x là phần tử nhỏ nhất trong cây",
        };
      }
    }
  };

  const handleNodeClick = (key) => {
    setSelectedNodeKey(key);
    if (tab === "successor") {
      setExplanation(getSuccessorInfo(key));
    } else if (tab === "predecessor") {
      setExplanation(getPredecessorInfo(key));
    }
  };

  useEffect(() => {
    if (tab === "successor") {
      setExplanation(getSuccessorInfo(selectedNodeKey));
    } else if (tab === "predecessor") {
      setExplanation(getPredecessorInfo(selectedNodeKey));
    }
  }, [tab, selectedNodeKey]);

  useEffect(() => {
    if (isPlayingInorder) {
      if (inorderStep < inorderFullSteps.length - 1) {
        inorderTimer.current = setTimeout(() => {
          const nextStep = inorderStep + 1;
          setInorderStep(nextStep);
          setActiveCodeLine(inorderFullSteps[nextStep].line);
          const added = inorderFullSteps[nextStep].addedVal;
          if (added !== null && !inorderOutput.includes(added)) {
            setInorderOutput((prev) => [...prev, added]);
          }
        }, 1100);
      } else {
        setIsPlayingInorder(false);
      }
    }
    return () => {
      if (inorderTimer.current) clearTimeout(inorderTimer.current);
    };
  }, [isPlayingInorder, inorderStep, inorderOutput]);

  const handleResetInorder = () => {
    setIsPlayingInorder(false);
    setInorderStep(0);
    setInorderOutput([]);
    setActiveCodeLine(1);
  };

  const currentInorderStepObj = inorderFullSteps[inorderStep] || inorderFullSteps[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Điều Hướng &amp; Duyệt Thứ Tự Cây</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Successor, Predecessor &amp; Inorder Traversal
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cách BST tìm kiếm phần tử kế tiếp và xuất ra dãy số sắp xếp tăng dần hoàn hảo.
          </p>
        </div>

        {/* 3 Main Mode Tabs */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => {
              setTab("successor");
              setIsPlayingInorder(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === "successor"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Successor (Kế tiếp)
          </button>
          <button
            onClick={() => {
              setTab("predecessor");
              setIsPlayingInorder(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === "predecessor"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Predecessor (Đứng trước)
          </button>
          <button
            onClick={() => {
              setTab("inorder");
              handleResetInorder();
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              tab === "inorder"
                ? "bg-teal-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            Inorder Traversal
          </button>
        </div>
      </div>

      {/* SUCCESSOR & PREDECESSOR MODE */}
      {tab !== "inorder" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* SVG Tree View (7 cols) */}
          <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[350px] shadow-sm">
            <svg viewBox="0 0 460 320" className="w-full h-auto select-none max-w-[460px]">
              {/* Edges */}
              {edges.map((edge, idx) => {
                const f = nodes.find((n) => n.id === edge.from);
                const t = nodes.find((n) => n.id === edge.to);
                const isEdgeInPath =
                  explanation &&
                  explanation.path &&
                  explanation.path.includes(f.key) &&
                  explanation.path.includes(t.key);

                return (
                  <line
                    key={idx}
                    x1={f.x}
                    y1={f.y}
                    x2={t.x}
                    y2={t.y}
                    stroke={isEdgeInPath ? "#059669" : "#cbd5e1"}
                    strokeWidth={isEdgeInPath ? "3.5" : "2"}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const isSelected = selectedNodeKey === node.key;
                const isResult = explanation && explanation.result === node.key;
                const isInPath = explanation && explanation.path && explanation.path.includes(node.key);

                let fill = "#ffffff";
                let stroke = "#94a3b8";
                let textColor = "#0f172a";

                if (isSelected) {
                  fill = "#fef3c7";
                  stroke = "#d97706";
                  textColor = "#92400e";
                } else if (isResult) {
                  fill = "#d1fae5";
                  stroke = "#059669";
                  textColor = "#065f46";
                } else if (isInPath) {
                  fill = "#e0f2fe";
                  stroke = "#0284c7";
                  textColor = "#0369a1";
                }

                return (
                  <g
                    key={node.id}
                    onClick={() => handleNodeClick(node.key)}
                    className="cursor-pointer transition-transform hover:scale-110"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={20}
                      fill={fill}
                      stroke={stroke}
                      strokeWidth={isSelected || isResult ? "3.5" : "2"}
                    />
                    <text
                      x={node.x}
                      y={node.y + 5}
                      textAnchor="middle"
                      fill={textColor}
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

            <div className="text-[11px] text-slate-500 mt-2 italic">
              * Nhấp vào một đỉnh bất kỳ trên cây để xem {tab === "successor" ? "Successor" : "Predecessor"} của đỉnh đó
            </div>
          </div>

          {/* Explanation Panel (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm flex flex-col justify-between self-stretch">
            {explanation ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      {tab === "successor" ? "Next Older" : "Prev Younger"}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 font-mono">
                      {tab === "successor" ? `Successor(${selectedNodeKey})` : `Predecessor(${selectedNodeKey})`}
                    </h4>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono font-bold text-base">
                    = {explanation.result}
                  </div>
                </div>

                {/* Case Badge & Rule */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{explanation.title}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {explanation.desc}
                  </p>
                </div>

                {/* Path tracer breakdown */}
                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-600 font-bold">Đường dẫn duyệt qua:</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-slate-700 flex items-center gap-2 flex-wrap">
                    {explanation.path &&
                      explanation.path.map((val, idx) => (
                        <React.Fragment key={idx}>
                          <span
                            className={`px-2 py-0.5 rounded-lg font-bold ${
                              val === selectedNodeKey
                                ? "bg-amber-100 text-amber-900 border border-amber-300"
                                : val === explanation.result
                                ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                                : "bg-white text-slate-600 border border-slate-200"
                            }`}
                          >
                            {val}
                          </span>
                          {idx < explanation.path.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-slate-400" />
                          )}
                        </React.Fragment>
                      ))}
                  </div>
                </div>

                {/* Algorithmic rule */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                  <span className="font-bold text-slate-800">Quy tắc cốt lõi: </span>
                  <span className="font-mono text-emerald-800 font-bold">{explanation.rule}</span>
                </div>
              </div>
            ) : null}

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
              <span>Độ phức tạp: <span className="font-mono text-emerald-700 font-bold">O(h)</span></span>
              <span>h = chiều cao cây</span>
            </div>
          </div>
        </div>
      )}

      {/* INORDER TRAVERSAL MODE */}
      {tab === "inorder" && (
        <div className="space-y-6">
          {/* Controllers & Pseudocode Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* SVG Tree with Active Step Node (7 cols) */}
            <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[340px] shadow-sm">
              <svg viewBox="0 0 460 300" className="w-full h-auto select-none max-w-[460px]">
                {edges.map((edge, idx) => {
                  const f = nodes.find((n) => n.id === edge.from);
                  const t = nodes.find((n) => n.id === edge.to);
                  return (
                    <line
                      key={idx}
                      x1={f.x}
                      y1={f.y}
                      x2={t.x}
                      y2={t.y}
                      stroke="#cbd5e1"
                      strokeWidth="2"
                    />
                  );
                })}

                {nodes.map((node) => {
                  const isCurrentActive = currentInorderStepObj.activeKey === node.key;
                  const isVisited = inorderOutput.includes(node.key);

                  let fill = "#ffffff";
                  let stroke = "#94a3b8";
                  let textColor = "#0f172a";

                  if (isCurrentActive) {
                    fill = "#d1fae5";
                    stroke = "#059669";
                    textColor = "#065f46";
                  } else if (isVisited) {
                    fill = "#ecfdf5";
                    stroke = "#10b981";
                    textColor = "#047857";
                  }

                  return (
                    <g key={node.id} className="transition-all duration-300">
                      {isCurrentActive && (
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
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isCurrentActive ? "3.5" : "2"}
                      />
                      <text
                        x={node.x}
                        y={node.y + 5}
                        textAnchor="middle"
                        fill={textColor}
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

              {/* Dynamic Action Explanation */}
              <div className="w-full mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-mono font-bold">
                💬 {currentInorderStepObj.action}
              </div>
            </div>

            {/* Pseudocode & Step Controls (5 cols) - KHỐI NỀN TỐI MAC-LIKE THEO YÊU CẦU */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs flex flex-col justify-between self-stretch shadow-md">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                  <div className="flex items-center gap-2 text-slate-300 font-bold">
                    <div className="flex items-center gap-1.5 mr-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>Inorder Traversal Code</span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Bước {inorderStep + 1}/{inorderFullSteps.length}
                  </span>
                </div>

                {/* Pseudocode Box with active line highlight */}
                <div className="space-y-1.5 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className={`p-1 rounded ${activeCodeLine === 1 ? "bg-emerald-950 text-emerald-300 font-bold border-l-2 border-emerald-400" : "text-slate-400"}`}>
                    1. Inorder(x):
                  </div>
                  <div className={`pl-4 p-1 rounded ${activeCodeLine === 2 ? "bg-emerald-950 text-emerald-300 font-bold border-l-2 border-emerald-400" : "text-slate-400"}`}>
                    2. &nbsp;&nbsp;Inorder(x.left); <span className="text-slate-500 text-[10px]">{"// Duyệt nhánh trái"}</span>
                  </div>
                  <div className={`pl-4 p-1 rounded ${activeCodeLine === 3 ? "bg-emerald-950 text-emerald-300 font-bold border-l-2 border-emerald-400" : "text-slate-400"}`}>
                    3. &nbsp;&nbsp;visit(x); <span className="text-slate-500 text-[10px]">{"// Thăm gốc (xuất x.key)"}</span>
                  </div>
                  <div className={`pl-4 p-1 rounded ${activeCodeLine === 4 ? "bg-emerald-950 text-emerald-300 font-bold border-l-2 border-emerald-400" : "text-slate-400"}`}>
                    4. &nbsp;&nbsp;Inorder(x.right); <span className="text-slate-500 text-[10px]">{"// Duyệt nhánh phải"}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => setIsPlayingInorder(!isPlayingInorder)}
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    {isPlayingInorder ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlayingInorder ? "Tạm dừng" : "Tự động chạy"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsPlayingInorder(false);
                      if (inorderStep < inorderFullSteps.length - 1) {
                        const next = inorderStep + 1;
                        setInorderStep(next);
                        setActiveCodeLine(inorderFullSteps[next].line);
                        const added = inorderFullSteps[next].addedVal;
                        if (added !== null && !inorderOutput.includes(added)) {
                          setInorderOutput((prev) => [...prev, added]);
                        }
                      }
                    }}
                    disabled={inorderStep >= inorderFullSteps.length - 1}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 text-xs font-bold"
                  >
                    Từng bước &rarr;
                  </button>

                  <button
                    onClick={handleResetInorder}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between">
                <span>Độ phức tạp: <span className="font-mono text-emerald-400 font-bold">O(n)</span></span>
                <span>Thăm mọi đỉnh đúng 1 lần</span>
              </div>
            </div>
          </div>

          {/* Sorted Output Sequence Ribbon */}
          <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Dãy Khóa Đã Sắp Xếp Tăng Dần (Sorted Ages Output):
              </span>
              <span className="text-xs font-mono text-emerald-800 font-bold">
                {inorderOutput.length}/8 phần tử
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 min-h-[46px] items-center">
              {inorderOutput.length === 0 ? (
                <span className="text-xs text-slate-400 italic">Bấm &quot;Tự động chạy&quot; hoặc &quot;Từng bước&quot; để xuất dãy số...</span>
              ) : (
                inorderOutput.map((val, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono font-bold text-sm shadow-sm flex items-center gap-1.5"
                  >
                    <span>{val}</span>
                    {idx < 7 && <span className="text-slate-400 font-normal">&le;</span>}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
