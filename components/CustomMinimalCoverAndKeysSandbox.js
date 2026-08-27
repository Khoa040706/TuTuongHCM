"use client";

import React, { useState } from "react";
import { Sparkles, Play, Plus, Trash2, CheckCircle2, RotateCcw, KeyRound, Filter } from "lucide-react";

export default function CustomMinimalCoverAndKeysSandbox() {
  const [schemaInput, setSchemaInput] = useState("A, B, C, D, E, G");
  const [fds, setFds] = useState([
    { lhs: "A", rhs: "B, C" },
    { lhs: "C", rhs: "A, B" }
  ]);
  const [newLhs, setNewLhs] = useState("");
  const [newRhs, setNewRhs] = useState("");
  const [closureQuery, setClosureQuery] = useState("A");
  const [computedData, setComputedData] = useState(null);

  const handleAddFd = () => {
    if (!newLhs.trim() || !newRhs.trim()) return;
    setFds([...fds, { lhs: newLhs.trim(), rhs: newRhs.trim() }]);
    setNewLhs("");
    setNewRhs("");
  };

  const handleRemoveFd = (idx) => {
    setFds(fds.filter((_, i) => i !== idx));
  };

  const computeClosureInternal = (targetArr, fdList) => {
    let current = new Set(targetArr);
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

  const runAllComputations = () => {
    const U = schemaInput.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
    const uSet = new Set(U);

    // 1. Compute single query closure
    const queryArr = closureQuery.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
    const queryClosure = Array.from(computeClosureInternal(queryArr, fds)).sort().join(", ");

    // 2. Find all keys via N/D/L
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
    const nClosure = computeClosureInternal(N, fds);
    if (nClosure.size === U.length && U.length > 0) {
      keys.push(N.sort().join(""));
    } else {
      const getSubsets = (arr) => {
        let res = [[]];
        for (let x of arr) {
          let len = res.length;
          for (let i = 0; i < len; i++) res.push([...res[i], x]);
        }
        return res.sort((a, b) => a.length - b.length);
      };
      const lSubs = getSubsets(L).filter((s) => s.length > 0);
      for (const sub of lSubs) {
        const cand = new Set([...N, ...sub]);
        const isSuper = keys.some((k) => k.split("").every((a) => cand.has(a)));
        if (!isSuper) {
          const clos = computeClosureInternal(cand, fds);
          if (clos.size === U.length) keys.push(Array.from(cand).sort().join(""));
        }
      }
    }

    // 3. Compute Minimal Cover
    // Step 1: RHS Decomposition
    let decomposed = [];
    fds.forEach((fd) => {
      const lhs = fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean).sort().join(", ");
      const rhsList = fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
      rhsList.forEach((r) => {
        decomposed.push({ lhs, rhs: r });
      });
    });

    // Step 2: Remove redundant FDs
    let step2List = [...decomposed];
    for (let i = step2List.length - 1; i >= 0; i--) {
      const target = step2List[i];
      const remaining = step2List.filter((_, idx) => idx !== i);
      const targetLhs = target.lhs.split(",").map((s) => s.trim());
      const clos = computeClosureInternal(targetLhs, remaining);
      if (clos.has(target.rhs)) {
        step2List = remaining;
      }
    }

    // Step 3: Remove extraneous LHS attributes
    let minimalCover = [];
    for (let fd of step2List) {
      let lhsArr = fd.lhs.split(",").map((s) => s.trim());
      let currentLhs = [...lhsArr];
      for (let b of lhsArr) {
        if (currentLhs.length > 1) {
          const reducedLhs = currentLhs.filter((x) => x !== b);
          const clos = computeClosureInternal(reducedLhs, step2List);
          if (clos.has(fd.rhs)) {
            currentLhs = reducedLhs;
          }
        }
      }
      minimalCover.push({ lhs: currentLhs.join(", "), rhs: fd.rhs });
    }

    setComputedData({
      queryClosure,
      keys: keys.length > 0 ? keys : ["Không tìm thấy khóa thỏa"],
      N: N.join(", ") || "∅",
      D: D.join(", ") || "∅",
      L: L.join(", ") || "∅",
      minimalCover
    });
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">CustomMinimalCoverAndKeysSandbox</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Sandbox All-In-One Toàn Diện
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Tự động: Tính Bao Đóng X⁺, Tìm Mọi Khóa Tối Tiểu (N/D/L) và Rút Gọn Về Phủ Tối Thiểu F_min theo thời gian thực
            </p>
          </div>
        </div>

        <button
          onClick={runAllComputations}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition-all"
        >
          <Play className="h-4 w-4" />
          <span>Thực Thi Toàn Bộ Phân Tích</span>
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
              className="w-full rounded-lg border border-gray-300 p-2 font-mono text-xs text-gray-900 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Tra Cứu Nhanh Bao Đóng (X⁺):
            </label>
            <input
              type="text"
              value={closureQuery}
              onChange={(e) => setClosureQuery(e.target.value)}
              placeholder="VD: A hoặc A, C"
              className="w-full rounded-lg border border-gray-300 p-2 font-mono text-xs text-gray-900"
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
                placeholder="Vế Trái"
                className="w-1/2 rounded-lg border border-gray-300 p-2 font-mono text-xs"
              />
              <span className="self-center font-bold text-gray-400">&rarr;</span>
              <input
                type="text"
                value={newRhs}
                onChange={(e) => setNewRhs(e.target.value)}
                placeholder="Vế Phải"
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
            Tập Ràng Buộc F Hiện Tại ({fds.length}):
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

      {/* Output Results */}
      {computedData && (
        <div className="mt-5 space-y-3 font-mono text-xs">
          {/* Result 1: Closure */}
          <div className="rounded-xl bg-blue-50/80 p-3.5 border border-blue-200 flex items-center justify-between">
            <span className="font-bold text-blue-950 font-sans">Bao đóng ({closureQuery})⁺ =</span>
            <span className="font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded border border-blue-300">
              {"{"} {computedData.queryClosure} {"}"}
            </span>
          </div>

          {/* Result 2: Keys */}
          <div className="rounded-xl bg-emerald-50/80 p-3.5 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-950 font-sans">Các Khóa Tối Tiểu Tìm Được:</span>
              <div className="flex flex-wrap gap-1.5">
                {computedData.keys.map((k, i) => (
                  <span key={i} className="font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                    K{i + 1} = {"{"} {k.split("").join(", ")} {"}"}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[11px] text-gray-600 font-sans">
              Phân loại: N = {"{"} {computedData.N} {"}"} | D = {"{"} {computedData.D} {"}"} | L = {"{"} {computedData.L} {"}"}
            </div>
          </div>

          {/* Result 3: Minimal Cover */}
          <div className="rounded-xl bg-purple-50/80 p-3.5 border border-purple-200 space-y-2">
            <span className="font-bold text-purple-950 font-sans block">Tập Phủ Tối Thiểu (F_min):</span>
            <div className="flex flex-wrap gap-2">
              {computedData.minimalCover.map((fd, i) => (
                <span key={i} className="font-bold text-purple-900 bg-purple-100 px-2.5 py-1 rounded border border-purple-300">
                  {fd.lhs} &rarr; {fd.rhs}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
