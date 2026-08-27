"use client";

import React, { useState } from "react";
import { KeyRound, Play, Sparkles, Plus, Trash2, CheckCircle2, RotateCcw } from "lucide-react";

export default function CustomKeyFinderSandbox() {
  const [schemaInput, setSchemaInput] = useState("A, B, C, D, E, G");
  const [fds, setFds] = useState([
    { lhs: "A", rhs: "B, C" },
    { lhs: "B", rhs: "D" },
    { lhs: "A, D", rhs: "E" },
    { lhs: "C, D", rhs: "A" }
  ]);
  const [newLhs, setNewLhs] = useState("");
  const [newRhs, setNewRhs] = useState("");
  const [result, setResult] = useState(null);

  const handleAddFd = () => {
    if (!newLhs.trim() || !newRhs.trim()) return;
    setFds([...fds, { lhs: newLhs.trim(), rhs: newRhs.trim() }]);
    setNewLhs("");
    setNewRhs("");
  };

  const handleRemoveFd = (idx) => {
    setFds(fds.filter((_, i) => i !== idx));
  };

  const computeClosureForSet = (targetSet, fdList) => {
    let current = new Set(targetSet);
    let changed = true;
    while (changed) {
      changed = false;
      for (const fd of fdList) {
        const lhs = fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const rhs = fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        if (lhs.every((a) => current.has(a))) {
          const before = current.size;
          rhs.forEach((a) => current.add(a));
          if (current.size > before) changed = true;
        }
      }
    }
    return current;
  };

  const getSubsets = (arr) => {
    let res = [[]];
    for (let x of arr) {
      let len = res.length;
      for (let i = 0; i < len; i++) {
        res.push([...res[i], x]);
      }
    }
    return res.sort((a, b) => a.length - b.length);
  };

  const findAllKeys = () => {
    const U = schemaInput.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
    const uSet = new Set(U);

    const UL_Set = new Set();
    const UR_Set = new Set();

    fds.forEach((fd) => {
      fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean).forEach((a) => UL_Set.add(a));
      fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean).forEach((a) => UR_Set.add(a));
    });

    const N = U.filter((a) => !UR_Set.has(a));
    const D = Array.from(UR_Set).filter((a) => !UL_Set.has(a));
    const L = U.filter((a) => !N.includes(a) && !D.includes(a));

    const keys = [];

    // Check if N+ = U
    const nClosure = computeClosureForSet(N, fds);
    if (nClosure.size === U.length) {
      keys.push(N.sort().join(""));
      setResult({
        N: N.join(", ") || "∅",
        D: D.join(", ") || "∅",
        L: L.join(", ") || "∅",
        keys: keys,
        note: "Tập N đã đủ bao đóng để tạo thành khóa duy nhất!"
      });
      return;
    }

    const lSubsets = getSubsets(L).filter((sub) => sub.length > 0);

    for (const sub of lSubsets) {
      // Check if sub contains any already found key
      const candidateSet = new Set([...N, ...sub]);
      const isSuperkeyOfFound = keys.some((k) => {
        const kArr = k.split("");
        return kArr.every((a) => candidateSet.has(a));
      });

      if (!isSuperkeyOfFound) {
        const closure = computeClosureForSet(candidateSet, fds);
        if (closure.size === U.length) {
          keys.push(Array.from(candidateSet).sort().join(""));
        }
      }
    }

    setResult({
      N: N.join(", ") || "∅",
      D: D.join(", ") || "∅",
      L: L.join(", ") || "∅",
      keys: keys,
      note: `Tìm thấy ${keys.length} khóa tối tiểu thông qua thuật toán phân loại N/D/L và cắt tỉa nhánh.`
    });
  };

  return (
    <div className="my-8 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <KeyRound className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">CustomKeyFinderSandbox</h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200">
                Sandbox Tìm Tất Cả Các Khóa Tự Do
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Nhập tập thuộc tính U và các phụ thuộc hàm F để máy tự động phân loại N, D, L và sinh trọn bộ các khóa
            </p>
          </div>
        </div>

        <button
          onClick={findAllKeys}
          className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-cyan-700 transition-all"
        >
          <Play className="h-4 w-4" />
          <span>Tìm Tất Cả Các Khóa</span>
        </button>
      </div>

      {/* Inputs */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Tập Thuộc Tính Lược Đồ (U):
            </label>
            <input
              type="text"
              value={schemaInput}
              onChange={(e) => setSchemaInput(e.target.value)}
              placeholder="VD: A, B, C, D, E, G"
              className="w-full rounded-lg border border-gray-300 p-2 font-mono text-xs text-gray-900 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Thêm Phụ Thuộc Hàm Vào F:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newLhs}
                onChange={(e) => setNewLhs(e.target.value)}
                placeholder="Vế Trái (VD: A, B)"
                className="w-1/2 rounded-lg border border-gray-300 p-2 font-mono text-xs"
              />
              <span className="self-center font-bold text-gray-400">&rarr;</span>
              <input
                type="text"
                value={newRhs}
                onChange={(e) => setNewRhs(e.target.value)}
                placeholder="Vế Phải (VD: C)"
                className="w-1/2 rounded-lg border border-gray-300 p-2 font-mono text-xs"
              />
              <button
                onClick={handleAddFd}
                className="rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 shrink-0"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* FDs List */}
        <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm space-y-2">
          <span className="block text-xs font-bold text-gray-700 uppercase">
            Tập Phụ Thuộc Hàm F ({fds.length}):
          </span>
          <div className="max-h-36 overflow-y-auto space-y-1.5 font-mono text-xs">
            {fds.map((fd, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg bg-gray-50 p-2 border border-gray-100">
                <span className="font-bold text-indigo-900">{fd.lhs} &rarr; {fd.rhs}</span>
                <button onClick={() => handleRemoveFd(idx)} className="text-red-500 hover:text-red-700 p-1">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result Card */}
      {result && (
        <div className="mt-5 rounded-xl border border-cyan-300 bg-cyan-50/50 p-4 shadow-sm space-y-3 font-mono text-xs">
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="bg-white p-2.5 rounded-lg border border-cyan-100">
              <strong className="text-emerald-700 block">N = {"{"} {result.N} {"}"}</strong>
              <span className="text-[10px] text-gray-500 font-sans">Bắt buộc có trong mọi khóa</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-cyan-100">
              <strong className="text-rose-700 block">D = {"{"} {result.D} {"}"}</strong>
              <span className="text-[10px] text-gray-500 font-sans">Loại bỏ hoàn toàn</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-cyan-100">
              <strong className="text-amber-700 block">L = {"{"} {result.L} {"}"}</strong>
              <span className="text-[10px] text-gray-500 font-sans">Thử nghiệm tổ hợp</span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-3.5 border border-cyan-200 flex items-center justify-between">
            <span className="font-bold text-cyan-950 uppercase font-sans text-xs">CÁC KHÓA TỐI TIỂU TÌM ĐƯỢC:</span>
            <div className="flex flex-wrap gap-1.5">
              {result.keys.map((k, i) => (
                <span key={i} className="font-bold text-indigo-900 bg-indigo-100 px-2.5 py-1 rounded border border-indigo-300">
                  K{i + 1} = {"{"} {k.split("").join(", ")} {"}"}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
