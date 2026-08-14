"use client";
import React, { useState } from "react";
import { ArrowLeftRight, Plus, RotateCcw, ArrowRight, ArrowLeft, Sparkles, Play } from "lucide-react";

export default function DoublyLinkedListVisualizer() {
  const [nodes, setNodes] = useState(["Val 10", "Val 20", "Val 30"]);
  const [newItem, setNewItem] = useState("Val 40");
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const [logText, setLogText] = useState(
    "Doubly Linked List (DLL): Mỗi DListNode chứa 2 con trỏ `prev` (trỏ về trước) và `next` (trỏ về sau)."
  );

  const handleAddLast = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();
    if (nodes.length === 0) {
      setNodes([val]);
      setLogText(`Thêm "${val}": Node duy nhất vừa là head vừa là tail, prev = null, next = null.`);
    } else {
      setNodes([...nodes, val]);
      setLogText(
        `addLast("${val}"): Node mới được chèn vào cuối. tail.next = newNode, newNode.prev = tail cũ.`
      );
    }
    setNewItem(`Val ${(nodes.length + 2) * 10}`);
    setHighlightIdx(-1);
  };

  const handleAddFirst = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();
    if (nodes.length === 0) {
      setNodes([val]);
      setLogText(`Thêm "${val}": Node duy nhất vừa là head vừa là tail.`);
    } else {
      setNodes([val, ...nodes]);
      setLogText(
        `addFirst("${val}"): Node mới chèn vào đầu. newNode.next = head cũ, head cũ.prev = newNode, head = newNode.`
      );
    }
    setNewItem(`Val ${(nodes.length + 2) * 10}`);
    setHighlightIdx(-1);
  };

  const handleTraverseForward = () => {
    if (nodes.length === 0) return;
    let curr = 0;
    setHighlightIdx(0);
    setLogText(`Đang duyệt TIẾN (Forward) dùng con trỏ next: Đang ở Node 0 ("${nodes[0]}")...`);
    const interval = setInterval(() => {
      curr++;
      if (curr < nodes.length) {
        setHighlightIdx(curr);
        setLogText(`Đang duyệt TIẾN: Đang ở Node ${curr} ("${nodes[curr]}")...`);
      } else {
        clearInterval(interval);
        setHighlightIdx(-1);
        setLogText("Duyệt TIẾN hoàn tất: Từ head tới tail.");
      }
    }, 800);
  };

  const handleTraverseBackward = () => {
    if (nodes.length === 0) return;
    let curr = nodes.length - 1;
    setHighlightIdx(curr);
    setLogText(`Đang duyệt LÙI (Backward) dùng con trỏ prev: Đang ở Node ${curr} ("${nodes[curr]}")...`);
    const interval = setInterval(() => {
      curr--;
      if (curr >= 0) {
        setHighlightIdx(curr);
        setLogText(`Đang duyệt LÙI: Đang ở Node ${curr} ("${nodes[curr]}")...`);
      } else {
        clearInterval(interval);
        setHighlightIdx(-1);
        setLogText("Duyệt LÙI hoàn tất: Từ tail về head.");
      }
    }, 800);
  };

  const handleReset = () => {
    setNodes(["Val 10", "Val 20", "Val 30"]);
    setNewItem("Val 40");
    setHighlightIdx(-1);
    setLogText("Đã khôi phục Doubly Linked List ban đầu.");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-indigo-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-indigo-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mô phỏng Trực quan IX.2
              </span>
              <span className="text-xs text-slate-500 font-mono">DoublyLinkedList & DListNode</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-indigo-600" />
              Doubly Linked List (Danh sách Liên kết Đôi 2 chiều)
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700">
              head: <strong>{nodes.length > 0 ? nodes[0] : "null"}</strong>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
              tail: <strong>{nodes.length > 0 ? nodes[nodes.length - 1] : "null"}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-slate-900 p-4 rounded-xl text-white mb-6 border border-slate-800">
        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Giá trị..."
            className="bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 w-28 md:w-36"
          />
          <button
            onClick={handleAddFirst}
            className="flex items-center gap-1 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> addFirst
          </button>
          <button
            onClick={handleAddLast}
            className="flex items-center gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> addLast
          </button>
          <button
            onClick={handleTraverseForward}
            disabled={nodes.length === 0}
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" /> Duyệt Tiến
          </button>
          <button
            onClick={handleTraverseBackward}
            disabled={nodes.length === 0}
            className="flex items-center gap-1 px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Duyệt Lùi
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Graphical Node Chain (3-field DListNode view) */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 overflow-x-auto min-h-[160px] flex items-center justify-center">
        {nodes.length === 0 ? (
          <div className="text-center text-slate-400 py-6 text-sm">Danh sách rỗng</div>
        ) : (
          <div className="flex items-center gap-3 md:gap-5 py-4">
            {nodes.map((item, idx) => {
              const isHead = idx === 0;
              const isTail = idx === nodes.length - 1;
              const isHighlighted = idx === highlightIdx;

              return (
                <React.Fragment key={idx}>
                  {/* 2-way Pointer Connector */}
                  {idx > 0 && (
                    <div className="flex flex-col items-center justify-center gap-1 shrink-0 px-1">
                      <div className="flex items-center text-[10px] font-mono text-indigo-600 font-bold">
                        <span>next</span> &rarr;
                      </div>
                      <div className="flex items-center text-[10px] font-mono text-amber-600 font-bold">
                        &larr; <span>prev</span>
                      </div>
                    </div>
                  )}

                  {/* Node Box with 3 compartments: prev | element | next */}
                  <div className="relative group">
                    {/* Head/Tail Badges */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1">
                      {isHead && (
                        <span className="bg-indigo-600 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                          head
                        </span>
                      )}
                      {isTail && (
                        <span className="bg-amber-600 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                          tail
                        </span>
                      )}
                    </div>

                    <div
                      className={`flex border-2 rounded-xl overflow-hidden shadow-md transition-all ${
                        isHighlighted
                          ? "border-indigo-600 ring-4 ring-indigo-300 scale-105 bg-indigo-50"
                          : isHead
                          ? "border-indigo-500 bg-white"
                          : isTail
                          ? "border-amber-500 bg-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {/* Prev field */}
                      <div className="px-2 py-2 bg-amber-50 border-r border-slate-200 text-[11px] font-mono text-amber-700 font-bold">
                        {isHead ? "null" : "prev"}
                      </div>
                      {/* Element field */}
                      <div className="px-3.5 py-2 font-mono font-bold text-slate-800 text-sm bg-white border-r border-slate-200">
                        {item}
                      </div>
                      {/* Next field */}
                      <div className="px-2 py-2 bg-indigo-50 text-[11px] font-mono text-indigo-700 font-bold">
                        {isTail ? "null" : "next"}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>

      {/* Log Box */}
      <div className="mt-4 bg-indigo-50/80 border border-indigo-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-indigo-900 font-sans">
        <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block text-indigo-950 mb-0.5">Nhật ký mô phỏng:</strong>
          <span>{logText}</span>
        </div>
      </div>
    </div>
  );
}
