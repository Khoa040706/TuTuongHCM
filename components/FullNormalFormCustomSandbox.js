"use client";

import React, { useState } from "react";
import { Sparkles, Play, Plus, Trash2, CheckCircle2, XCircle, RotateCcw, ShieldCheck, Award } from "lucide-react";

export default function FullNormalFormCustomSandbox() {
  const [schemaInput, setSchemaInput] = useState("C, S, Z");
  const [fds, setFds] = useState([
    { lhs: "C, S", rhs: "Z" },
    { lhs: "Z", rhs: "C" }
  ]);
  const [newLhs, setNewLhs] = useState("");
  const [newRhs, setNewRhs] = useState("");
  const [report, setReport] = useState(null);

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

  const runAllNFAnalysis = () => {
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

    // 2. Identify Prime & Non-prime
    const primeSet = new Set();
    keys.forEach((k) => k.split("").forEach((a) => primeSet.add(a)));
    const primeAttributes = Array.from(primeSet).sort();
    const nonPrimeAttributes = U.filter((a) => !primeSet.has(a)).sort();

    // 3. Evaluate 1NF (Assume true for relational schema)
    const is1NF = true;

    // 4. Evaluate 2NF
    let is2NF = true;
    const v2NF = [];
    if (nonPrimeAttributes.length > 0) {
      fds.forEach((fd) => {
        const lhs = fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const rhs = fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        rhs.forEach((targetA) => {
          if (nonPrimeAttributes.includes(targetA)) {
            keys.forEach((k) => {
              const kArr = k.split("");
              if (lhs.every((a) => kArr.includes(a)) && lhs.length < kArr.length) {
                is2NF = false;
                v2NF.push(`${lhs.join("")} → ${targetA} (vế trái là tập con của khóa ${k})`);
              }
            });
          }
        });
      });
    }

    // 5. Evaluate 3NF
    let is3NF = is2NF;
    const v3NF = [];
    if (is2NF) {
      fds.forEach((fd) => {
        const lhs = fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const rhs = fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const lhsClos = computeClosureInternal(lhs, fds);
        const isSuper = lhsClos.size === U.length;

        rhs.forEach((targetA) => {
          if (!lhs.includes(targetA)) {
            const isPrime = primeAttributes.includes(targetA);
            if (!isSuper && !isPrime) {
              is3NF = false;
              v3NF.push(`${lhs.join("")} → ${targetA} (vế trái không là siêu khóa và ${targetA} không là thuộc tính khóa)`);
            }
          }
        });
      });
    }

    // 6. Evaluate BCNF
    let isBCNF = is3NF;
    const vBCNF = [];
    if (is3NF) {
      fds.forEach((fd) => {
        const lhs = fd.lhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const rhs = fd.rhs.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
        const lhsClos = computeClosureInternal(lhs, fds);
        const isSuper = lhsClos.size === U.length;

        rhs.forEach((targetA) => {
          if (!lhs.includes(targetA) && !isSuper) {
            isBCNF = false;
            vBCNF.push(`${lhs.join("")} → ${targetA} (vế trái ${lhs.join("")} không phải là siêu khóa)`);
          }
        });
      });
    }

    // Determine Highest NF
    let highest = "1NF";
    if (isBCNF) highest = "BCNF";
    else if (is3NF) highest = "3NF";
    else if (is2NF) highest = "2NF";

    setReport({
      keys: keys.length > 0 ? keys : ["Không tìm thấy khóa thỏa"],
      prime: primeAttributes.join(", ") || "∅",
      nonPrime: nonPrimeAttributes.join(", ") || "∅",
      is1NF,
      is2NF,
      is3NF,
      isBCNF,
      v2NF,
      v3NF,
      vBCNF,
      highest
    });
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">FullNormalFormCustomSandbox</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Sandbox Toàn Năng 1NF &bull; 2NF &bull; 3NF &bull; BCNF
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Nhập bất kỳ lược đồ U và tập F để hệ thống chẩn đoán trọn vẹn cấp độ chuẩn hóa cao nhất
            </p>
          </div>
        </div>

        <button
          onClick={runAllNFAnalysis}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all"
        >
          <Play className="h-4 w-4" />
          <span>Phân Tích Dạng Chuẩn Ngay</span>
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
            Tập Ràng Buộc F ({fds.length}):
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

      {/* Analysis Report */}
      {report && (
        <div className="mt-5 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
          {/* Key Summary */}
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
              <strong className="text-gray-900 block font-sans text-xs">Tất cả các khóa:</strong>
              <span className="text-indigo-800 font-bold">{report.keys.join(", ")}</span>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-950 block font-sans text-xs">Thuộc tính khóa:</strong>
              <span className="text-emerald-900 font-bold">{"{"} {report.prime} {"}"}</span>
            </div>
            <div className="bg-rose-50 p-2.5 rounded-lg border border-rose-200">
              <strong className="text-rose-950 block font-sans text-xs">Thuộc tính không khóa:</strong>
              <span className="text-rose-900 font-bold">{"{"} {report.nonPrime} {"}"}</span>
            </div>
          </div>

          {/* Highest Normal Form Banner */}
          <div className="rounded-xl bg-gradient-to-r from-indigo-900 to-purple-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-amber-400" />
              <div>
                <span className="text-[11px] text-indigo-200 font-sans block">Dạng chuẩn cao nhất đạt được:</span>
                <h4 className="text-lg font-extrabold font-sans text-amber-300">
                  LƯỢC ĐỒ ĐẠT DẠNG CHUẨN: {report.highest}
                </h4>
              </div>
            </div>
          </div>

          {/* 4 Status Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-sans text-xs">
            <div className="p-3 rounded-lg border bg-emerald-50 border-emerald-200 text-emerald-950 flex items-center justify-between">
              <span>1NF:</span>
              <strong className="font-bold">ĐẠT ✓</strong>
            </div>

            <div className={`p-3 rounded-lg border flex items-center justify-between ${
              report.is2NF ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950"
            }`}>
              <span>2NF:</span>
              <strong className="font-bold">{report.is2NF ? "ĐẠT ✓" : "RỚT ✗"}</strong>
            </div>

            <div className={`p-3 rounded-lg border flex items-center justify-between ${
              report.is3NF ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950"
            }`}>
              <span>3NF:</span>
              <strong className="font-bold">{report.is3NF ? "ĐẠT ✓" : "RỚT ✗"}</strong>
            </div>

            <div className={`p-3 rounded-lg border flex items-center justify-between ${
              report.isBCNF ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950"
            }`}>
              <span>BCNF:</span>
              <strong className="font-bold">{report.isBCNF ? "ĐẠT ✓" : "RỚT ✗"}</strong>
            </div>
          </div>

          {/* Violation Lists */}
          {!report.isBCNF && (
            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5 font-sans text-xs">
              <strong className="text-red-900 block font-bold">Các phụ thuộc hàm vi phạm chuẩn hóa:</strong>
              {report.v2NF.map((v, i) => (
                <div key={i} className="text-red-700 font-mono text-xs">&bull; Vi phạm 2NF: {v}</div>
              ))}
              {report.v3NF.map((v, i) => (
                <div key={i} className="text-amber-800 font-mono text-xs">&bull; Vi phạm 3NF: {v}</div>
              ))}
              {report.vBCNF.map((v, i) => (
                <div key={i} className="text-purple-800 font-mono text-xs">&bull; Vi phạm BCNF: {v}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
