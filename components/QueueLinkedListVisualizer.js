"use client";
import React, { useState } from "react";
import { ArrowRight, Plus, Trash2, Eye, RotateCcw, Sparkles, Info, Zap, Layers } from "lucide-react";

export default function QueueLinkedListVisualizer() {
  // Initial state: 3 nodes ["X", "Y", "Z"]
  const [nodes, setNodes] = useState([
    { id: 1, value: "X" },
    { id: 2, value: "Y" },
    { id: 3, value: "Z" }
  ]);
  const [inputValue, setInputValue] = useState("W");
  const [nextId, setNextId] = useState(4);
  const [log, setLog] = useState("Khởi tạo Queue với TailedLinkedList: 3 nodes ['X', 'Y', 'Z']. Head (Front) -> X, Tail (Back) -> Z.");
  const [highlightedId, setHighlightedId] = useState(null);
  const [addingId, setAddingId] = useState(null);
  const [removingId, setRemovingId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // offer(value) - addLast in O(1)
  const handleOffer = () => {
    if (isAnimating) return;
    if (!inputValue.trim()) return;

    if (nodes.length >= 8) {
      setLog("⚠️ Queue đã đạt giới hạn mô phỏng (tối đa 8 phần tử).");
      return;
    }

    const val = inputValue.trim();
    const newNode = { id: nextId, value: val };
    setNextId((prev) => prev + 1);

    setIsAnimating(true);
    setAddingId(newNode.id);
    setNodes((prev) => [...prev, newNode]);

    if (nodes.length === 0) {
      setLog(`offer("${val}"): Queue rỗng -> Node mới "${val}" vừa là HEAD (Front) vừa là TAIL (Back). Thao tác O(1).`);
    } else {
      setLog(`offer("${val}"): Thêm node mới "${val}" vào TAIL (Back) trong O(1) nhờ con trỏ tail! (tail.next = node mới, tail = node mới)`);
    }

    // Auto increment default input value for convenience
    const charCode = val.charCodeAt(0);
    if (val.length === 1 && charCode >= 65 && charCode <= 90) {
      const nextChar = String.fromCharCode(((charCode - 65 + 1) % 26) + 65);
      setInputValue(nextChar);
    } else {
      setInputValue(`Node${nextId}`);
    }

    setTimeout(() => {
      setAddingId(null);
      setIsAnimating(false);
    }, 600);
  };

  // poll() - removeFirst in O(1)
  const handlePoll = () => {
    if (isAnimating) return;
    if (nodes.length === 0) {
      setLog("⚠️ Queue rỗng! poll() trả về null.");
      return;
    }

    const headNode = nodes[0];
    setIsAnimating(true);
    setRemovingId(headNode.id);
    setLog(`poll(): Đang lấy và xóa node ở HEAD (Front) là "${headNode.value}" trong O(1)...`);

    setTimeout(() => {
      setNodes((prev) => prev.slice(1));
      setRemovingId(null);
      setIsAnimating(false);
      if (nodes.length === 1) {
        setLog(`poll(): Đã xóa "${headNode.value}". Queue hiện tại rỗng (num_nodes: 0, head = null, tail = null).`);
      } else {
        const newHead = nodes[1];
        setLog(`poll(): Đã xóa node HEAD (Front) là "${headNode.value}". HEAD mới hiện tại là "${newHead.value}". Thao tác O(1).`);
      }
    }, 450);
  };

  // peek() - getFirst in O(1)
  const handlePeek = () => {
    if (isAnimating) return;
    if (nodes.length === 0) {
      setLog("⚠️ Queue rỗng! peek() trả về null.");
      return;
    }

    const headNode = nodes[0];
    setHighlightedId(headNode.id);
    setLog(`peek(): Xem node ở HEAD (Front) = "${headNode.value}". Queue giữ nguyên, không thay đổi. Thao tác O(1).`);

    setTimeout(() => {
      setHighlightedId(null);
    }, 1200);
  };

  // Reset to initial state ["X", "Y", "Z"]
  const handleReset = () => {
    if (isAnimating) return;
    setNodes([
      { id: 1, value: "X" },
      { id: 2, value: "Y" },
      { id: 3, value: "Z" }
    ]);
    setNextId(4);
    setInputValue("W");
    setHighlightedId(null);
    setAddingId(null);
    setRemovingId(null);
    setLog("Đã khôi phục Queue ban đầu: 3 nodes ['X', 'Y', 'Z']. Head (Front) -> X, Tail (Back) -> Z.");
  };

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Top Bar: Badge & Title & Complexity */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold font-mono bg-teal-100 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Mục 8.1
            </span>
            <span className="bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-teal-600" />
              Tất cả thao tác: O(1) nhờ con trỏ tail
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-2 flex items-center gap-2">
            <Layers className="w-6 h-6 text-teal-600" />
            Queue bằng TailedLinkedList — Trực quan hoá
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl font-mono text-xs text-slate-600 font-bold flex items-center gap-2 shadow-sm">
            <span className="text-slate-500">Trạng thái:</span>
            <span className="text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded font-bold">
              num_nodes: {nodes.length}
            </span>
          </div>

          <button
            onClick={handleReset}
            disabled={isAnimating}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-semibold rounded-xl border border-slate-300 transition shadow-sm"
            title="Khôi phục trạng thái ban đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Important Note Callout */}
      <div className="mt-4 mb-5 p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs md:text-sm flex items-start gap-3 shadow-sm">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold text-amber-800 uppercase tracking-wide mr-1">Lưu ý quan trọng:</span>
          KHÔNG dùng BasicLinkedList vì cần addLast() — phải dùng TailedLinkedList (có con trỏ tail). Front = head, Back = tail.
        </div>
      </div>

      {/* Visual Canvas: LinkedList Nodes with Head/Tail Pointers */}
      <div className="my-6 bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[190px] flex items-center justify-start overflow-x-auto shadow-inner relative">
        {nodes.length === 0 ? (
          <div className="w-full text-center text-slate-400 font-mono text-sm italic py-8 flex flex-col items-center justify-center gap-2">
            <span>Queue rỗng (Empty Queue)</span>
            <span className="text-xs text-slate-500">head = null | tail = null | num_nodes: 0</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 md:gap-3 py-6 min-w-max">
            {nodes.map((node, idx) => {
              const isHead = idx === 0;
              const isTail = idx === nodes.length - 1;
              const isHighlighted = highlightedId === node.id;
              const isAdding = addingId === node.id;
              const isRemoving = removingId === node.id;

              return (
                <React.Fragment key={node.id}>
                  {/* Node Box Component */}
                  <div className="flex flex-col items-center relative group">
                    {/* Top Pointer Badge Labels */}
                    <div className="h-7 mb-1.5 flex items-center justify-center gap-1.5">
                      {isHead && (
                        <span className="bg-emerald-600 text-white text-[10px] md:text-xs font-black font-mono px-2.5 py-0.5 rounded-md shadow uppercase tracking-wider animate-bounce">
                          HEAD (Front)
                        </span>
                      )}
                      {isTail && (
                        <span className="bg-teal-600 text-white text-[10px] md:text-xs font-black font-mono px-2.5 py-0.5 rounded-md shadow uppercase tracking-wider">
                          TAIL (Back)
                        </span>
                      )}
                    </div>

                    {/* Main Node Box */}
                    <div
                      className={`bg-white text-slate-900 border-2 rounded-xl p-3 shadow-sm font-mono font-bold flex items-stretch overflow-hidden transition-all duration-300 ${
                        isRemoving
                          ? "scale-75 opacity-40 border-rose-500 bg-rose-50 text-rose-700"
                          : isAdding
                          ? "scale-110 border-teal-600 bg-teal-50 ring-4 ring-teal-300 shadow-teal-200"
                          : isHighlighted
                          ? "scale-105 border-amber-500 bg-amber-50 ring-4 ring-amber-300 shadow-amber-200"
                          : isHead
                          ? "border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-300/60"
                          : isTail
                          ? "border-teal-500 bg-teal-50/50 ring-2 ring-teal-300/60"
                          : "border-teal-500 bg-white"
                      }`}
                    >
                      {/* Node Value Part */}
                      <div className="px-3 py-1 flex flex-col items-center justify-center min-w-[56px]">
                        <span className="text-base md:text-lg font-black text-slate-900">{node.value}</span>
                        <span className="text-[9px] font-mono text-slate-400 mt-0.5">[{idx}]</span>
                      </div>

                      {/* Node Next Pointer Part */}
                      <div className="px-2.5 py-1 bg-slate-100 border-l border-slate-200 text-[11px] text-teal-700 flex items-center gap-1 font-semibold rounded-r-md">
                        <span className="text-slate-500">next</span>
                        <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                      </div>
                    </div>
                  </div>

                  {/* Arrow between nodes or Next pointer to null */}
                  {idx < nodes.length - 1 ? (
                    <div className="flex items-center justify-center pt-8">
                      <ArrowRight className="w-5 h-5 text-teal-500 shrink-0" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 pt-8">
                      <ArrowRight className="w-5 h-5 text-teal-500 shrink-0" />
                      <div className="bg-slate-100 border border-slate-300 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-sm">
                        null
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>

      {/* Control Panel: offer(), poll(), peek() */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        {/* offer(value) section */}
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isAnimating}
            placeholder="Giá trị..."
            maxLength={8}
            className="w-24 bg-white border border-slate-300 text-slate-800 font-mono font-bold text-center px-2 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:opacity-50"
          />
          <button
            onClick={handleOffer}
            disabled={isAnimating || !inputValue.trim()}
            className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition flex items-center justify-center gap-1.5 shadow font-mono"
          >
            <Plus className="w-4 h-4" /> offer("{inputValue}")
          </button>
        </div>

        {/* poll() section */}
        <button
          onClick={handlePoll}
          disabled={isAnimating || nodes.length === 0}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow font-mono"
        >
          <Trash2 className="w-4 h-4" /> poll() [Xóa HEAD (Front)]
        </button>

        {/* peek() section */}
        <button
          onClick={handlePeek}
          disabled={isAnimating || nodes.length === 0}
          className="bg-slate-800 hover:bg-slate-900 disabled:opacity-50 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 border border-slate-700 shadow font-mono"
        >
          <Eye className="w-4 h-4 text-cyan-400" /> peek() [Xem HEAD (Front)]
        </button>
      </div>

      {/* Console Log output */}
      <div className="mt-5 p-3 bg-slate-950 text-cyan-300 font-mono text-xs rounded-xl border border-slate-800 flex items-start gap-3 shadow-md">
        <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
        <div className="leading-relaxed">
          <span className="text-slate-400 font-bold mr-2">LOG:</span>
          <span>{log}</span>
        </div>
      </div>
    </div>
  );
}
