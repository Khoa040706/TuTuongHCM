"use client";
import React, { useState } from "react";
import { ArrowRight, Plus, Trash2, RotateCcw, Sparkles, MousePointer, Layers, CheckCircle2 } from "lucide-react";

export default function EnhancedLinkedListVisualizer() {
  const [nodes, setNodes] = useState(["ccc", "bbb", "aaa"]);
  const [selectedIndex, setSelectedIndex] = useState(0); // 0 -> "ccc", -1 -> null
  const [newItem, setNewItem] = useState("xxx");
  const [logText, setLogText] = useState("Click chọn 1 Node bất kỳ làm 'current' (hoặc chọn current = null để chèn/xóa ở đầu).");

  const currentVal = selectedIndex === -1 ? null : nodes[selectedIndex];

  // addAfter(current, item)
  const handleAddAfter = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();

    if (selectedIndex === -1) {
      // current == null -> insert at front
      setNodes([val, ...nodes]);
      setLogText(`addAfter(null, "${val}"): Quy ước current == null tương đương addFirst. Node "${val}" được chèn vào ĐẦU danh sách.`);
    } else {
      // current != null -> insert after current
      const updated = [...nodes];
      updated.splice(selectedIndex + 1, 0, val);
      setNodes(updated);
      setLogText(`addAfter("${currentVal}", "${val}"): Tạo node mới p("${val}"), gán p.next = current.next, rồi current.next = p. Chèn thành công ngay sau "${currentVal}"!`);
      setSelectedIndex(selectedIndex + 1); // move selection to new node
    }
    setNewItem("yyy");
  };

  // removeAfter(current)
  const handleRemoveAfter = () => {
    if (nodes.length === 0) {
      setLogText("❌ LỖI: List rỗng, không thể removeAfter!");
      return;
    }

    if (selectedIndex === -1) {
      // current == null -> remove head
      const removed = nodes[0];
      setNodes(nodes.slice(1));
      setLogText(`removeAfter(null): Quy ước current == null tương đương removeFirst. Đã xóa node ĐẦU ("${removed}").`);
    } else {
      // current != null -> remove node after current
      if (selectedIndex >= nodes.length - 1) {
        setLogText(`❌ LỖI: Node "${currentVal}" là node cuối cùng! Không có node kế tiếp để xóa (NoSuchElementException: "No next node to remove").`);
        return;
      }
      const removed = nodes[selectedIndex + 1];
      const updated = [...nodes];
      updated.splice(selectedIndex + 1, 1);
      setNodes(updated);
      setLogText(`removeAfter("${currentVal}"): Ngắt con trỏ node "${removed}" đứng ngay sau "${currentVal}". Node "${removed}" bị ngắt sẽ trở thành Garbage Collection.`);
    }
  };

  const handleReset = () => {
    setNodes(["ccc", "bbb", "aaa"]);
    setSelectedIndex(0);
    setNewItem("xxx");
    setLogText("Đã khôi phục danh sách ban đầu (ccc -> bbb -> aaa -> null).");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            Mô phỏng Trực quan VIII.2
          </span>
          <span className="text-xs text-slate-500 font-mono">EnhancedLinkedList (addAfter & removeAfter)</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          Chèn & Xóa ở giữa Danh sách bằng <code className="text-purple-700 font-mono">addAfter(current, item)</code> & <code className="text-purple-700 font-mono">removeAfter(current)</code>
        </h3>
      </div>

      {/* Current Pointer Selector Bar */}
      <div className="bg-purple-50/60 border border-purple-200 p-3.5 rounded-xl mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono">
          <MousePointer className="w-4 h-4 text-purple-600 shrink-0" />
          <span className="font-bold text-purple-950">Con trỏ current đang chọn:</span>
          <span className={`px-2.5 py-1 rounded font-bold ${selectedIndex === -1 ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-purple-600 text-white shadow-sm'}`}>
            {selectedIndex === -1 ? "null (Chèn/Xóa ở ĐẦU)" : `Node[${selectedIndex}]: "${currentVal}"`}
          </span>
        </div>

        <button
          onClick={() => setSelectedIndex(selectedIndex === -1 ? 0 : -1)}
          className="px-3 py-1 rounded-lg bg-white border border-purple-200 hover:bg-purple-100 text-purple-800 text-xs font-bold font-mono transition-all"
        >
          {selectedIndex === -1 ? "Chọn Node[0]" : "Đặt current = null"}
        </button>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-5 bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-white">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Tên element mới..."
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs font-mono text-white focus:outline-none focus:border-purple-400 w-full"
          />
          <button
            onClick={handleAddAfter}
            className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono flex items-center gap-1.5 shadow whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>addAfter()</span>
          </button>
        </div>

        <button
          onClick={handleRemoveAfter}
          className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold font-mono flex items-center gap-1.5 shadow"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>removeAfter()</span>
        </button>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Visual Canvas */}
      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-inner mb-4 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max">
          {/* Head Label */}
          <div className="flex flex-col items-center mr-1">
            <span className="bg-purple-500 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow mb-1">
              head
            </span>
            <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Current Null Indicator */}
          {selectedIndex === -1 && (
            <div className="bg-amber-500/20 border-2 border-amber-400 px-3 py-1.5 rounded-lg text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5">
              <span>← current = null</span>
            </div>
          )}

          {/* Chain */}
          {nodes.length === 0 ? (
            <span className="text-slate-500 font-mono text-xs italic px-3 py-1.5 bg-slate-900 rounded border border-slate-800">
              null (List rỗng)
            </span>
          ) : (
            nodes.map((val, idx) => {
              const isCurrent = selectedIndex === idx;

              return (
                <React.Fragment key={idx}>
                  <div
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex items-stretch rounded-xl border-2 overflow-hidden font-mono text-xs cursor-pointer transition-all duration-200 relative ${
                      isCurrent
                        ? "border-amber-400 bg-amber-950/80 text-white ring-4 ring-amber-400/30 scale-105 shadow-xl"
                        : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600"
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                        current
                      </span>
                    )}

                    <div className="px-3.5 py-2.5 border-r border-slate-800 font-bold bg-slate-950/50">
                      {val}
                    </div>
                    <div className="px-2.5 py-2.5 text-[10px] text-purple-300 flex items-center gap-1">
                      <span>next</span>
                      <ArrowRight className="w-3 h-3 text-purple-400" />
                    </div>
                  </div>

                  {idx < nodes.length - 1 ? (
                    <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                  ) : (
                    <span className="text-slate-500 font-mono text-xs font-bold bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      null
                    </span>
                  )}
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>

      {/* Log commentary */}
      <div className="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold text-purple-950 font-mono block uppercase text-[11px]">
            Nhật ký thực thi & Quy tắc con trỏ:
          </strong>
          <p>{logText}</p>
        </div>
      </div>
    </div>
  );
}
