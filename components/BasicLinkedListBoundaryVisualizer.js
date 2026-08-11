"use client";
import React, { useState } from "react";
import { ArrowRight, Play, RotateCcw, AlertOctagon, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function BasicLinkedListBoundaryVisualizer() {
  const [boundaryCase, setBoundaryCase] = useState("2nodes"); // '0nodes' | '1node' | '2nodes'
  const [operation, setOperation] = useState("addFirst"); // 'addFirst' | 'removeFirst'
  const [step, setStep] = useState(0);
  const [inputVal, setInputVal] = useState("ccc");

  // Initial nodes based on boundaryCase
  const getInitialNodes = (bCase) => {
    if (bCase === "0nodes") return [];
    if (bCase === "1node") return ["aaa"];
    return ["bbb", "aaa"];
  };

  const [currentNodes, setCurrentNodes] = useState(getInitialNodes("2nodes"));

  // Reset when boundaryCase changes
  const handleCaseChange = (newCase) => {
    setBoundaryCase(newCase);
    setCurrentNodes(getInitialNodes(newCase));
    setStep(0);
  };

  // Step progression
  const maxSteps = operation === "addFirst" ? 3 : 3;

  const handleStep = () => {
    if (step >= maxSteps) return;

    if (operation === "addFirst") {
      if (step === 0) setStep(1); // Create node pointing to old head
      else if (step === 1) setStep(2); // Update head & num_nodes
      else if (step === 2) {
        setCurrentNodes([inputVal.trim() || "ccc", ...currentNodes]);
        setStep(3);
      }
    } else {
      // removeFirst
      if (currentNodes.length === 0) {
        setStep(99); // Exception state
        return;
      }
      if (step === 0) setStep(1); // ln = head
      else if (step === 1) setStep(2); // head = head.getNext() & num_nodes--
      else if (step === 2) {
        setCurrentNodes(currentNodes.slice(1));
        setStep(3);
      }
    }
  };

  const handleReset = () => {
    setCurrentNodes(getInitialNodes(boundaryCase));
    setStep(0);
  };

  // Code snippet for current operation
  const addFirstCode = `public void addFirst(E item) {
    head = new ListNode<E>(item, head); // Step 1: Tạo Node mới trỏ tới head cũ
    num_nodes++;                         // Step 2: Cập nhật num_nodes
}`;

  const removeFirstCode = `public E removeFirst() throws NoSuchElementException {
    if (head == null) 
        throw new NoSuchElementException("can't remove from empty list"); // Step 1 check
    ListNode<E> ln = head;
    head = head.getNext();               // Step 2: Chuyển head sang node kế
    num_nodes--;                         // Step 3: Giảm num_nodes
    return ln.getElement();
}`;

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            Mô phỏng Trường hợp biên VII.3 & VII.4
          </span>
          <span className="text-xs text-slate-500 font-mono">Boundary Cases Simulator</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          Mô phỏng từng bước <code className="text-purple-700 font-mono">addFirst()</code> & <code className="text-purple-700 font-mono">removeFirst()</code> qua các Trường hợp Biên
        </h3>
      </div>

      {/* Control Panel: Boundary Case + Operation Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
        {/* Boundary Case Select */}
        <div>
          <label className="text-xs font-bold text-purple-950 block mb-1.5 font-mono uppercase">
            1. Chọn Trường hợp Biên (Boundary Case):
          </label>
          <div className="flex gap-1.5">
            {[
              { id: "0nodes", label: "0 phần tử (Rỗng)" },
              { id: "1node", label: "1 phần tử" },
              { id: "2nodes", label: "≥2 phần tử" }
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => handleCaseChange(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex-1 transition-all ${
                  boundaryCase === c.id
                    ? "bg-purple-600 text-white shadow-sm font-bold"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Operation Select */}
        <div>
          <label className="text-xs font-bold text-purple-950 block mb-1.5 font-mono uppercase">
            2. Chọn Phép toán (Operation):
          </label>
          <div className="flex gap-1.5">
            {[
              { id: "addFirst", label: "addFirst(item)" },
              { id: "removeFirst", label: "removeFirst()" }
            ].map((op) => (
              <button
                key={op.id}
                onClick={() => {
                  setOperation(op.id);
                  setStep(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex-1 transition-all ${
                  operation === op.id
                    ? "bg-purple-950 text-purple-200 font-bold border border-purple-800"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Execution Stepper & Input */}
      <div className="flex items-center justify-between gap-3 mb-4 bg-slate-900 p-3 rounded-xl border border-slate-800 text-white">
        <div className="flex items-center gap-3">
          {operation === "addFirst" && (
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={step > 0}
              placeholder="Gán giá trị node mới..."
              className="px-3 py-1 rounded border border-slate-700 bg-slate-950 text-xs font-mono text-white focus:outline-none focus:border-purple-400 w-32"
            />
          )}

          <div className="text-xs font-mono text-slate-300">
            Trạng thái step: <span className="text-purple-400 font-bold">{step === 3 ? "Hoàn thành!" : step === 99 ? "EXCEPTION!" : `Bước ${step}/${maxSteps}`}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleStep}
            disabled={step >= 3 || step === 99}
            className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono flex items-center gap-1.5 shadow disabled:opacity-40"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{step === 0 ? "Bắt đầu chạy" : "Tiếp tục (Step)"}</span>
          </button>

          <button
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Code Highlight Step View */}
      <div className="bg-[#1e1e1e] p-3.5 rounded-xl font-mono text-xs text-[#d4d4d4] mb-5 border border-[#2d2d2d]">
        <div className="text-[10px] text-purple-400 font-bold uppercase mb-1">Mã Java Đang Thực Thi:</div>
        <pre dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(operation === "addFirst" ? addFirstCode : removeFirstCode) }} />
      </div>

      {/* Visual Canvas */}
      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-inner mb-4 overflow-x-auto">
        {step === 99 ? (
          <div className="p-4 bg-rose-950/80 border border-rose-600 rounded-xl text-rose-200 text-xs font-mono flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <strong className="block font-bold">NoSuchElementException!</strong>
              <span>Không thể xóa từ danh sách rỗng (head == null).</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 min-w-max">
            {/* HEAD Pointer Label */}
            <div className="flex flex-col items-center mr-1">
              <span className="bg-purple-500 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow mb-1">
                head
              </span>
              <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>

            {/* Nodes Display */}
            {currentNodes.length === 0 && step < 1 ? (
              <span className="text-slate-500 font-mono text-xs italic px-3 py-1.5 bg-slate-900 rounded border border-slate-800">
                null (0 phần tử)
              </span>
            ) : (
              currentNodes.map((val, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`flex items-stretch rounded-xl border-2 overflow-hidden font-mono text-xs transition-all ${
                      idx === 0
                        ? "border-purple-400 bg-purple-950 text-white shadow-lg shadow-purple-900/40"
                        : "border-slate-800 bg-slate-900 text-slate-300"
                    }`}
                  >
                    <div className="px-3 py-2 border-r border-slate-800 font-bold bg-slate-950/50">
                      {val}
                    </div>
                    <div className="px-2.5 py-2 text-[10px] text-purple-300 flex items-center gap-1">
                      <span>next</span>
                      <ArrowRight className="w-3 h-3 text-purple-400" />
                    </div>
                  </div>
                  {idx < currentNodes.length - 1 ? (
                    <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                  ) : (
                    <span className="text-slate-500 font-mono text-xs font-bold bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      null
                    </span>
                  )}
                </React.Fragment>
              ))
            )}
          </div>
        )}
      </div>

      {/* Log commentary */}
      <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl text-xs text-slate-700 flex items-start gap-2">
        <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong>Phân tích trường hợp biên ({boundaryCase}):</strong>{" "}
          {boundaryCase === "0nodes" && operation === "addFirst" && "head từ null chuyển sang trỏ trực tiếp tới node mới."}
          {boundaryCase === "0nodes" && operation === "removeFirst" && "Bắt buộc kiểm tra head == null để tránh NullPointerException!"}
          {boundaryCase === "1node" && "Node duy nhất trở thành node kế tiếp của node mới (khi add) hoặc head chuyển về null (khi remove)."}
          {boundaryCase === "2nodes" && "Danh sách có nhiều phần tử, thao tác luôn diễn ra an toàn ở đầu danh sách."}
        </div>
      </div>
    </div>
  );
}
