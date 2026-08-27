"use client";

import React, { useState } from "react";
import { Play, RotateCcw, Sparkles, Terminal, CheckCircle2, Plus, Trash2, Cpu } from "lucide-react";

export default function CustomAttributeClosureSandbox() {
  const [attributesInput, setAttributesInput] = useState("A, B, C, D, E");
  const [targetInput, setTargetInput] = useState("A, B");
  const [fds, setFds] = useState([
    { lhs: "A", rhs: "C" },
    { lhs: "B, C", rhs: "D" },
    { lhs: "D", rhs: "E" }
  ]);
  const [newLhs, setNewLhs] = useState("");
  const [newRhs, setNewRhs] = useState("");
  const [resultLog, setResultLog] = useState(null);

  const handleAddFd = () => {
    if (!newLhs.trim() || !newRhs.trim()) return;
    setFds([...fds, { lhs: newLhs.trim(), rhs: newRhs.trim() }]);
    setNewLhs("");
    setNewRhs("");
  };

  const handleRemoveFd = (index) => {
    setFds(fds.filter((_, i) => i !== index));
  };

  const computeClosure = () => {
    // Parse target attributes
    const targetSet = new Set(
      targetInput
        .split(",")
        .map((s) => s.trim().toUpperCase())
        .filter(Boolean)
    );

    let currentClosure = new Set(targetSet);
    const stepsLog = [];

    stepsLog.push({
      step: 0,
      closure: Array.from(currentClosure).sort().join(", "),
      fired: "Khởi tạo ban đầu với tập X"
    });

    let changed = true;
    let iteration = 1;

    while (changed) {
      changed = false;
      for (const fd of fds) {
        const lhsSet = fd.lhs
          .split(",")
          .map((s) => s.trim().toUpperCase())
          .filter(Boolean);
        const rhsSet = fd.rhs
          .split(",")
          .map((s) => s.trim().toUpperCase())
          .filter(Boolean);

        // Check if lhsSet is subset of currentClosure
        const isLhsSubset = lhsSet.every((attr) => currentClosure.has(attr));

        if (isLhsSubset) {
          const beforeSize = currentClosure.size;
          rhsSet.forEach((attr) => currentClosure.add(attr));
          if (currentClosure.size > beforeSize) {
            changed = true;
            stepsLog.push({
              step: iteration++,
              closure: Array.from(currentClosure).sort().join(", "),
              fired: `${fd.lhs} → ${fd.rhs}`
            });
          }
        }
      }
    }

    setResultLog({
      finalClosure: Array.from(currentClosure).sort().join(", "),
      steps: stepsLog
    });
  };

  return (
    <div className="my-8 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-sky-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <Cpu className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">CustomAttributeClosureSandbox</h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200">
                Sandbox Tính Bao Đóng Tự Do
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Tự do nhập tập thuộc tính X và các phụ thuộc hàm F để kiểm tra thuật toán tính X⁺ theo thời gian thực
            </p>
          </div>
        </div>

        <button
          onClick={computeClosure}
          className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-cyan-700 transition-all"
        >
          <Play className="h-4 w-4" />
          <span>Chạy Thuật Toán Tính X⁺</span>
        </button>
      </div>

      {/* Inputs Layout */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {/* Left: Target set X */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Tập Thuộc Tính Cần Tính Bao Đóng (X):
            </label>
            <input
              type="text"
              value={targetInput}
              onChange={(e) => setTargetInput(e.target.value)}
              placeholder="Ví dụ: A, B hoặc B, D"
              className="w-full rounded-lg border border-gray-300 p-2.5 font-mono text-xs text-gray-900 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Thêm Phụ Thuộc Hàm Mới Vào Tập F:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newLhs}
                onChange={(e) => setNewLhs(e.target.value)}
                placeholder="Vế Trái (VD: A hoặc B, C)"
                className="w-1/2 rounded-lg border border-gray-300 p-2 font-mono text-xs text-gray-900"
              />
              <span className="self-center font-bold text-gray-400">&rarr;</span>
              <input
                type="text"
                value={newRhs}
                onChange={(e) => setNewRhs(e.target.value)}
                placeholder="Vế Phải (VD: D)"
                className="w-1/2 rounded-lg border border-gray-300 p-2 font-mono text-xs text-gray-900"
              />
              <button
                onClick={handleAddFd}
                className="rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 shrink-0"
                title="Thêm phụ thuộc hàm"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: List of FDs */}
        <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm space-y-2">
          <span className="block text-xs font-bold text-gray-700 uppercase">
            Danh Sách Phụ Thuộc Hàm Trong Tập F ({fds.length}):
          </span>
          <div className="max-h-36 overflow-y-auto space-y-1.5 font-mono text-xs">
            {fds.map((fd, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-2 border border-gray-100"
              >
                <span className="font-bold text-indigo-900">
                  {fd.lhs} &rarr; {fd.rhs}
                </span>
                <button
                  onClick={() => handleRemoveFd(idx)}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Xóa phụ thuộc hàm này"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result Output Log */}
      {resultLog && (
        <div className="mt-5 rounded-xl border border-cyan-300 bg-cyan-50/50 p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-cyan-200 pb-2">
            <span className="font-bold text-xs text-cyan-950 uppercase tracking-wider">KẾT QUẢ TÍNH BAO ĐÓNG:</span>
            <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded border border-emerald-300">
              ({targetInput})⁺ = {"{"} {resultLog.finalClosure} {"}"}
            </span>
          </div>

          <div className="space-y-1.5 font-mono text-xs">
            <span className="text-[11px] font-bold text-gray-600 block mb-1">Chi tiết từng bước lặp thuật toán:</span>
            {resultLog.steps.map((st, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-white p-2 border border-cyan-100">
                <span className="text-gray-600">Bước {st.step} (Kích hoạt: <strong className="text-amber-800">{st.fired}</strong>)</span>
                <span className="font-bold text-indigo-700">X = {"{"} {st.closure} {"}"}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
