"use client";

import React, { useState, useRef } from "react";
import { Search, Play, RotateCcw, CheckCircle2, XCircle, Terminal, MessageSquare } from "lucide-react";

export default function BstSearchMinMaxTracer() {
  const [searchValue, setSearchValue] = useState("5");
  const [activeNodeKey, setActiveNodeKey] = useState(null);
  const [visitedKeys, setVisitedKeys] = useState([]);
  const [status, setStatus] = useState("idle"); // "idle" | "running" | "found" | "not_found"
  const [stepLogs, setStepLogs] = useState([]);
  const [speechText, setSpeechText] = useState("");

  const timeoutRef = useRef(null);

  // Tree nodes definition
  const nodes = [
    { id: 15, key: 15, x: 230, y: 40, left: 6, right: 23 },
    { id: 6, key: 6, x: 120, y: 110, left: 4, right: 7 },
    { id: 23, key: 23, x: 340, y: 110, left: null, right: 71 },
    { id: 4, key: 4, x: 70, y: 180, left: null, right: 5 },
    { id: 7, key: 7, x: 170, y: 180, left: null, right: null },
    { id: 71, key: 71, x: 390, y: 180, left: 50, right: null },
    { id: 5, key: 5, x: 110, y: 250, left: null, right: null },
    { id: 50, key: 50, x: 340, y: 250, left: null, right: null },
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

  const resetState = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveNodeKey(null);
    setVisitedKeys([]);
    setStatus("idle");
    setStepLogs([]);
    setSpeechText("");
  };

  const executeSearch = (targetKey) => {
    resetState();
    const target = parseInt(targetKey, 10);
    if (isNaN(target)) return;

    setStatus("running");

    const steps = [];
    let currKey = 15; // Start at root
    let stepNum = 1;

    while (currKey !== null) {
      const node = nodes.find((n) => n.key === currKey);
      if (!node) break;

      if (target === currKey) {
        steps.push({
          step: stepNum,
          currKey,
          speech: `Tại ${currKey}: ${target} == ${currKey} → Tìm thấy! 🎉`,
          log: `Bước ${stepNum}: Tại ${currKey} → ${target} == ${currKey} → TÌM THẤY (FOUND)!`,
          found: true,
          nextKey: null,
        });
        break;
      } else if (target < currKey) {
        const next = node.left;
        steps.push({
          step: stepNum,
          currKey,
          speech: `Tại ${currKey}: ${target} < ${currKey} → Đi sang TRÁI ↙️`,
          log: `Bước ${stepNum}: Tại ${currKey} → ${target} < ${currKey} → sang cây con trái (x = x.left: ${next !== null ? next : "NULL"})`,
          found: false,
          nextKey: next,
        });
        currKey = next;
      } else {
        const next = node.right;
        steps.push({
          step: stepNum,
          currKey,
          speech: `Tại ${currKey}: ${target} > ${currKey} → Đi sang PHẢI ↘️`,
          log: `Bước ${stepNum}: Tại ${currKey} → ${target} > ${currKey} → sang cây con phải (x = x.right: ${next !== null ? next : "NULL"})`,
          found: false,
          nextKey: next,
        });
        currKey = next;
      }
      stepNum++;
    }

    // If terminated at null
    if (steps.length > 0 && !steps[steps.length - 1].found) {
      steps.push({
        step: stepNum,
        currKey: null,
        speech: `Gặp NULL → Không tìm thấy ${target} trong cây! ❌`,
        log: `Bước ${stepNum}: Gặp con trỏ NULL → ${target} is not found (Không tồn tại trong cây).`,
        found: false,
        isTerminated: true,
      });
    }

    // Animate steps
    let currentIdx = 0;

    const playNext = () => {
      if (currentIdx < steps.length) {
        const s = steps[currentIdx];
        if (s.currKey !== null) {
          setActiveNodeKey(s.currKey);
          setVisitedKeys((prev) => [...prev, s.currKey]);
        }
        setSpeechText(s.speech);
        setStepLogs((prev) => [...prev, s.log]);

        if (s.found) {
          setStatus("found");
        } else if (s.isTerminated) {
          setStatus("not_found");
        }

        currentIdx++;
        timeoutRef.current = setTimeout(playNext, 1200);
      }
    };

    playNext();
  };

  const handleFindMin = () => {
    resetState();
    setStatus("running");

    const steps = [
      { key: 15, speech: "Bắt đầu tại Root (15) → Đi sang trái ↙️", log: "Bước 1: Bắt đầu tại Root (15) → x = x.left" },
      { key: 6, speech: "Tại 6: Có con trái (4) → Tiếp tục đi trái ↙️", log: "Bước 2: Tại 6 → x = x.left (sang 4)" },
      { key: 4, speech: "Tại 4: Không còn con trái (x.left == NULL) → Đích đến là MIN = 4! 🏆", log: "Bước 3: Tại 4 → x.left == NULL → DỪNG! MIN = 4." },
    ];

    let idx = 0;
    const play = () => {
      if (idx < steps.length) {
        const s = steps[idx];
        setActiveNodeKey(s.key);
        setVisitedKeys((prev) => [...prev, s.key]);
        setSpeechText(s.speech);
        setStepLogs((prev) => [...prev, s.log]);
        if (idx === steps.length - 1) setStatus("found");
        idx++;
        timeoutRef.current = setTimeout(play, 1200);
      }
    };
    play();
  };

  const handleFindMax = () => {
    resetState();
    setStatus("running");

    const steps = [
      { key: 15, speech: "Bắt đầu tại Root (15) → Đi sang phải ↘️", log: "Bước 1: Bắt đầu tại Root (15) → x = x.right" },
      { key: 23, speech: "Tại 23: Có con phải (71) → Tiếp tục đi phải ↘️", log: "Bước 2: Tại 23 → x = x.right (sang 71)" },
      { key: 71, speech: "Tại 71: Không còn con phải (x.right == NULL) → Đích đến là MAX = 71! 🏆", log: "Bước 3: Tại 71 → x.right == NULL → DỪNG! MAX = 71." },
    ];

    let idx = 0;
    const play = () => {
      if (idx < steps.length) {
        const s = steps[idx];
        setActiveNodeKey(s.key);
        setVisitedKeys((prev) => [...prev, s.key]);
        setSpeechText(s.speech);
        setStepLogs((prev) => [...prev, s.log]);
        if (idx === steps.length - 1) setStatus("found");
        idx++;
        timeoutRef.current = setTimeout(play, 1200);
      }
    };
    play();
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Search className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mô Phỏng Đường Đi Từng Bước (Path Tracer)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Thao Tác Search(v), FindMin &amp; FindMax Trên Cây BST
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Độ phức tạp chỉ phụ thuộc vào chiều cao nhánh đi qua: <span className="font-mono text-emerald-700 font-bold">O(h)</span>.
          </p>
        </div>

        {/* Status Badge */}
        <div>
          {status === "idle" && (
            <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 text-xs font-mono font-bold">
              Sẵn sàng
            </span>
          )}
          {status === "running" && (
            <span className="px-3 py-1 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold animate-pulse flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              Đang duyệt cây...
            </span>
          )}
          {status === "found" && (
            <span className="px-3 py-1 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              TÌM THẤY KẾT QUẢ
            </span>
          )}
          {status === "not_found" && (
            <span className="px-3 py-1 rounded-xl bg-rose-100 border border-rose-300 text-rose-900 text-xs font-mono font-bold flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-rose-600" />
              KHÔNG TỒN TẠI (NULL)
            </span>
          )}
        </div>
      </div>

      {/* Controller Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6 p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm items-center">
        {/* Search Input & Quick Samples */}
        <div className="md:col-span-6 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Nhập khóa..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-mono text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <button
            onClick={() => executeSearch(searchValue)}
            disabled={status === "running"}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            Search(v)
          </button>
        </div>

        {/* Quick Search Badges */}
        <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-2 text-xs">
          <span className="text-slate-500 text-[11px] font-medium">Thử nhanh:</span>
          {[5, 23, 71, 99].map((val) => (
            <button
              key={val}
              onClick={() => {
                setSearchValue(val.toString());
                executeSearch(val);
              }}
              disabled={status === "running"}
              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-400 font-mono text-slate-700 font-bold disabled:opacity-50"
            >
              {val === 99 ? "99 (Không có)" : `v=${val}`}
            </button>
          ))}

          <button
            onClick={handleFindMin}
            disabled={status === "running"}
            className="px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-300 text-sky-800 font-bold hover:bg-sky-100 transition-all disabled:opacity-50"
          >
            FindMin()
          </button>

          <button
            onClick={handleFindMax}
            disabled={status === "running"}
            className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-300 text-purple-800 font-bold hover:bg-purple-100 transition-all disabled:opacity-50"
          >
            FindMax()
          </button>

          <button
            onClick={resetState}
            className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Screen: SVG Tree + Speech Bubble + Terminal Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree with Dynamic Speech Bubble (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative overflow-hidden min-h-[360px] shadow-sm">
          <svg viewBox="0 0 460 320" className="w-full h-auto select-none max-w-[460px]">
            {/* Edges */}
            {edges.map((edge, idx) => {
              const f = nodes.find((n) => n.id === edge.from);
              const t = nodes.find((n) => n.id === edge.to);
              const isEdgeActive = visitedKeys.includes(f.key) && visitedKeys.includes(t.key);

              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={isEdgeActive ? "#059669" : "#cbd5e1"}
                  strokeWidth={isEdgeActive ? "3.5" : "2"}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isActive = activeNodeKey === node.key;
              const isVisited = visitedKeys.includes(node.key);

              let fill = "#ffffff";
              let stroke = "#94a3b8";
              let textColor = "#0f172a";

              if (isActive) {
                fill = status === "found" ? "#d1fae5" : "#fef3c7";
                stroke = status === "found" ? "#059669" : "#d97706";
                textColor = status === "found" ? "#065f46" : "#92400e";
              } else if (isVisited) {
                fill = "#ecfdf5";
                stroke = "#10b981";
                textColor = "#047857";
              }

              return (
                <g key={node.id} className="transition-all duration-300">
                  {/* Glow ring if active */}
                  {isActive && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="28"
                      fill="none"
                      stroke={status === "found" ? "#10b981" : "#f59e0b"}
                      strokeWidth="2"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isActive ? "3.5" : "2"}
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

          {/* Speech Bubble Floating Banner */}
          {speechText && (
            <div className="w-full mt-2 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 flex items-center gap-2.5 shadow-sm">
              <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0 animate-bounce" />
              <span className="font-bold">{speechText}</span>
            </div>
          )}
        </div>

        {/* Live Terminal Log Panel (5 cols) - KHỐI NỀN TỐI MAC-LIKE THEO YÊU CẦU */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 flex flex-col justify-between self-stretch min-h-[360px] shadow-md">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="flex items-center gap-1.5 mr-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-200">Execution Logs</span>
              </div>
              <span className="text-[10px] text-slate-500">{stepLogs.length} bước</span>
            </div>

            {/* Scrollable logs list */}
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {stepLogs.length === 0 ? (
                <div className="text-slate-600 text-center py-10 italic">
                  Chưa có thao tác nào được chạy. Hãy nhấn một trong các nút Search, FindMin hoặc FindMax.
                </div>
              ) : (
                stepLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-slate-900/90 border border-slate-800/80 text-[11px] leading-relaxed text-emerald-300"
                  >
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Độ phức tạp Search/Min/Max:</span>
              <span className="font-bold text-emerald-400 font-mono">O(h)</span>
            </div>
            <div className="text-[10px] text-slate-500">
              * Thuật toán chỉ đi theo 1 nhánh duy nhất từ gốc xuống lá, không bao giờ quay lui.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
