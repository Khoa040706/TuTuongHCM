"use client";

import React, { useState } from "react";
import { Sparkles, Play, Plus, Trash2, CheckCircle2, XCircle, RotateCcw, KeyRound, ShieldCheck } from "lucide-react";

export default function Custom2NFSandbox() {
  const [schemaInput, setSchemaInput] = useState("A, B, C, D");
  const [fds, setFds] = useState([
    { lhs: "A, B", rhs: "C" },
    { lhs: "A", rhs: "D" },
    { lhs: "B, D", rhs: "C" }
  ]);
  const [newLhs, setNewLhs] = useState("");
  const [newRhs, setNewRhs] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

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

  const getSubsets = (arr) => {
    let res = [[]];
    for (let x of arr) {
      let len = res.length;
      for (let i = 0; i < len; i++) res.push([...res[i], x]);
    }
    return res.sort((a, b) => a.length - b.length);
  };

  const run2NFAnalysis = () => {
    const U = schemaInput.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);

    // 1. Find all candidate keys
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

    // 2. Identify Prime & Non-prime attributes
    const primeSet = new Set();
    keys.forEach((k) => k.split("").forEach((a) => primeSet.add(a)));
    const primeAttributes = Array.from(primeSet).sort();
    const nonPrimeAttributes = U.filter((a) => !primeSet.has(a)).sort();

    // 3. Diagnose 2NF
    let is2NF = true;
    const violations = [];

    // If all attributes are prime, 2NF is automatically true
    if (nonPrimeAttributes.length === 0) {
      is2NF = true;
    } else {
      // Check each FD
      fds.forEach((fd) => {
        const lhs = fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const rhs = fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);

        rhs.forEach((targetA) => {
          // If targetA is non-prime
          if (nonPrimeAttributes.includes(targetA)) {
            // Check if lhs is a proper subset of ANY candidate key
            keys.forEach((k) => {
              const kArr = k.split("");
              const isSubset = lhs.every((a) => kArr.includes(a));
              const isProperSubset = isSubset && lhs.length < kArr.length;
              if (isProperSubset) {
                is2NF = false;
                violations.push({
                  fd: `${lhs.join(", ")} → ${targetA}`,
                  key: k,
                  lhs: lhs.join(", "),
                  rhs: targetA
                });
              }
            });
          }
        });
      });
    }

    setAnalysisResult({
      keys: keys.length > 0 ? keys : ["Không tìm thấy khóa thỏa"],
      prime: primeAttributes.join(", ") || "∅",
      nonPrime: nonPrimeAttributes.join(", ") || "∅ (Không có)",
      is2NF,
      violations
    });
  };

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Custom2NFSandbox</h3>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                Sandbox Chẩn Đoán 2NF Tự Do
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Nhập tập thuộc tính U và tập F bất kỳ để hệ thống tự tìm khóa, phân loại Prime và chẩn đoán 2NF
            </p>
          </div>
        </div>

        <button
          onClick={run2NFAnalysis}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-all"
        >
          <Play className="h-4 w-4" />
          <span>Chẩn Đoán 2NF Ngay</span>
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
              className="w-full rounded-lg border border-gray-300 p-2 font-mono text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
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
                className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 shrink-0"
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

      {/* Analysis Result */}
      {analysisResult && (
        <div className="mt-5 rounded-xl border border-blue-200 bg-white p-4 shadow-sm space-y-3 font-mono text-xs">
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
              <strong className="text-gray-900 block font-sans text-xs">Các Khóa Tối Tiểu:</strong>
              <span className="text-indigo-800 font-bold">{analysisResult.keys.join(", ")}</span>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-950 block font-sans text-xs">Thuộc tính khóa (Prime):</strong>
              <span className="text-emerald-900 font-bold">{"{"} {analysisResult.prime} {"}"}</span>
            </div>
            <div className="bg-rose-50 p-2.5 rounded-lg border border-rose-200">
              <strong className="text-rose-950 block font-sans text-xs">Thuộc tính không khóa:</strong>
              <span className="text-rose-900 font-bold">{"{"} {analysisResult.nonPrime} {"}"}</span>
            </div>
          </div>

          <div className={`p-3.5 rounded-xl border flex items-center justify-between font-sans ${
            analysisResult.is2NF
              ? "bg-emerald-50 border-emerald-300 text-emerald-950"
              : "bg-rose-50 border-rose-300 text-rose-950"
          }`}>
            <div className="flex items-center gap-2 font-bold text-xs">
              {analysisResult.is2NF ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <XCircle className="h-5 w-5 text-red-600" />}
              <span>{analysisResult.is2NF ? "LƯỢC ĐỒ ĐẠT CHUẨN 2NF!" : "LƯỢC ĐỒ VI PHẠM DẠNG CHUẨN 2 (KHÔNG ĐẠT 2NF)!"}</span>
            </div>
          </div>

          {!analysisResult.is2NF && analysisResult.violations.length > 0 && (
            <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 space-y-1 font-sans text-xs">
              <strong className="text-red-900 block font-bold">Danh sách các phụ thuộc hàm vi phạm phụ thuộc bộ phận:</strong>
              {analysisResult.violations.map((v, i) => (
                <div key={i} className="font-mono text-xs text-gray-800">
                  &bull; <code>{v.fd}</code> (Vế trái <code>{v.lhs}</code> là tập con của khóa <code>{v.key}</code> nhưng xác định thuộc tính không khóa <code>{v.rhs}</code>).
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
