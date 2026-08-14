"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Layers, Clock, AlertTriangle, Table } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function TowersOfHanoiSimulator() {
  const [numDisks, setNumDisks] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate recursive moves for Hanoi
  const generateMoves = (n) => {
    const moves = [];
    const solve = (count, from, to, aux) => {
      if (count === 1) {
        moves.push({ disk: 1, from, to });
        return;
      }
      solve(count - 1, from, aux, to);
      moves.push({ disk: count, from, to });
      solve(count - 1, aux, to, from);
    };
    solve(n, "A", "B", "C");
    return moves;
  };

  const moves = generateMoves(numDisks);

  // Calculate peg states at currentStep
  const calculatePegs = () => {
    const pegs = {
      A: Array.from({ length: numDisks }, (_, i) => numDisks - i), // e.g. [3, 2, 1]
      B: [],
      C: []
    };

    for (let i = 0; i < currentStep; i++) {
      const move = moves[i];
      if (move) {
        const disk = pegs[move.from].pop();
        pegs[move.to].push(disk);
      }
    }
    return pegs;
  };

  const pegs = calculatePegs();
  const lastMove = currentStep > 0 ? moves[currentStep - 1] : null;

  // Auto play
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < moves.length) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 900);
    }
    return () => clearInterval(timer);
  }, [isPlaying, moves.length]);

  const diskColors = [
    "bg-gradient-to-r from-rose-500 to-rose-600 border-rose-600 text-white shadow-xs",
    "bg-gradient-to-r from-amber-500 to-amber-600 border-amber-600 text-white shadow-xs",
    "bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-600 text-white shadow-xs",
    "bg-gradient-to-r from-sky-500 to-sky-600 border-sky-600 text-white shadow-xs",
    "bg-gradient-to-r from-violet-500 to-violet-600 border-violet-600 text-white shadow-xs",
    "bg-gradient-to-r from-pink-500 to-pink-600 border-pink-600 text-white shadow-xs"
  ];

  const hanoiCode = `public static void Towers(int numDisks, char src, char dest, char temp) {
    if (numDisks == 1) {
        System.out.println("Move top disk from pole " + src + " to pole " + dest);
    } else {
        Towers(numDisks - 1, src, temp, dest); // Lời gọi đệ quy thứ 1
        Towers(1, src, dest, temp);
        Towers(numDisks - 1, temp, dest, src); // Lời gọi đệ quy thứ 2
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200">
            Example 6 — Bài toán Kinh điển
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Mô Phỏng Trực Quan Tháp Hà Nội (Towers of Hanoi)
          </h3>
          <p className="text-xs text-slate-500">
            Di chuyển n đĩa từ Cột A sang Cột B (mỗi lần 1 đĩa, đĩa lớn không được đặt lên đĩa nhỏ)
          </p>
        </div>

        {/* Disk Count Selector & Controls */}
        <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
          <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-xl text-xs font-mono">
            <span className="text-slate-500">Số đĩa n:</span>
            <select
              value={numDisks}
              onChange={(e) => {
                setNumDisks(parseInt(e.target.value, 10));
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="bg-white font-bold text-violet-700 px-2 py-0.5 rounded border border-slate-300 cursor-pointer"
            >
              <option value={1}>1 đĩa (1 bước)</option>
              <option value={2}>2 đĩa (3 bước)</option>
              <option value={3}>3 đĩa (7 bước)</option>
              <option value={4}>4 đĩa (15 bước)</option>
              <option value={5}>5 đĩa (31 bước)</option>
            </select>
          </div>

          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition cursor-pointer"
            title="Lùi 1 bước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs font-bold transition shadow-xs cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? "Tạm dừng" : "Chạy tự động"}
          </button>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(moves.length, prev + 1))}
            disabled={currentStep === moves.length}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition cursor-pointer"
            title="Tiến 1 bước"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
            title="Đặt lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3 Pegs Visual Stage */}
      <div className="bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 rounded-2xl p-6 border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-3 border-b border-slate-200 mb-6 flex-wrap gap-2">
          <span className="font-semibold">
            Tiến trình: <span className="text-violet-700 font-bold">{currentStep} / {moves.length} bước</span> (2ⁿ - 1 = {Math.pow(2, numDisks) - 1})
          </span>
          {lastMove ? (
            <span className="bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2.5 py-0.5 rounded-lg shadow-xs">
              Vừa chuyển đĩa {lastMove.disk}: Cột {lastMove.from} ➔ Cột {lastMove.to}
            </span>
          ) : (
            <span className="text-slate-400 italic">Trạng thái ban đầu</span>
          )}
        </div>

        {/* 3 Peg Columns */}
        <div className="grid grid-cols-3 gap-4 h-56 items-end relative pb-4">
          {["A", "B", "C"].map((pegKey) => {
            const diskStack = pegs[pegKey];
            const pegLabel = pegKey === "A" ? "Cột Nguồn (src)" : pegKey === "B" ? "Cột Đích (dest)" : "Cột Tạm (temp)";
            return (
              <div key={pegKey} className="flex flex-col items-center justify-end h-full relative">
                {/* Vertical Pole */}
                <div className="w-2.5 h-44 bg-slate-300 rounded-t-full absolute bottom-4 z-0 shadow-inner" />

                {/* Disk Stack on this Peg */}
                <div className="flex flex-col-reverse items-center gap-1 z-10 w-full mb-4">
                  {diskStack.map((diskVal) => {
                    const widthPercent = 35 + (diskVal / numDisks) * 55;
                    const colorClass = diskColors[(diskVal - 1) % diskColors.length];
                    return (
                      <div
                        key={diskVal}
                        style={{ width: `${widthPercent}%` }}
                        className={`h-6 rounded-lg ${colorClass} border text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-md transition-all duration-300`}
                      >
                        {diskVal}
                      </div>
                    );
                  })}
                </div>

                {/* Base Plate */}
                <div className="w-full h-3.5 bg-slate-200 rounded-md border border-slate-300 text-center text-[10px] font-mono text-slate-700 flex items-center justify-center font-bold z-10 shadow-xs">
                  Cột {pegKey}
                </div>
                <span className="text-[11px] text-slate-600 mt-1 font-mono font-semibold">{pegLabel}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Code & Time Complexity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Java Code */}
        <div className="md:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between">
          <div className="text-xs font-mono font-bold text-violet-400 mb-2">
            Mã nguồn Đệ quy Towers of Hanoi
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(hanoiCode) }} />
          </pre>
        </div>

        {/* Time Complexity Table from Textbook */}
        <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 mb-2">
              <Clock className="w-4 h-4 text-violet-600" />
              BẢNG ĐỘ PHỨC TẠP THỜI GIAN O(2ᴺ) (1 GIÂY/LẦN)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 text-slate-600">
                    <th className="py-1.5 px-2">Số đĩa n</th>
                    <th className="py-1.5 px-2">Số lần f(n)</th>
                    <th className="py-1.5 px-2">Thời gian ước tính</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr><td className="py-1 px-2 font-bold">1</td><td className="py-1 px-2">1</td><td className="py-1 px-2">1 giây</td></tr>
                  <tr><td className="py-1 px-2 font-bold">2</td><td className="py-1 px-2">3</td><td className="py-1 px-2">3 giây</td></tr>
                  <tr><td className="py-1 px-2 font-bold">3</td><td className="py-1 px-2">7</td><td className="py-1 px-2">7 giây</td></tr>
                  <tr><td className="py-1 px-2 font-bold">4</td><td className="py-1 px-2">15</td><td className="py-1 px-2">15 giây</td></tr>
                  <tr className="bg-amber-50/60"><td className="py-1 px-2 font-bold text-amber-800">16</td><td className="py-1 px-2 text-amber-800">65,536</td><td className="py-1 px-2 text-amber-800 font-bold">18 giờ</td></tr>
                  <tr className="bg-rose-50/60"><td className="py-1 px-2 font-bold text-rose-800">32</td><td className="py-1 px-2 text-rose-800">4.295 tỷ</td><td className="py-1 px-2 text-rose-800 font-bold">136 năm</td></tr>
                  <tr className="bg-rose-100/70"><td className="py-1 px-2 font-bold text-rose-900">64</td><td className="py-1 px-2 text-rose-900">~1.8×10¹⁹</td><td className="py-1 px-2 text-rose-900 font-bold">584 tỷ năm</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200 text-xs text-rose-700 font-bold font-mono">
            💣 Time Complexity: O(2ᴺ) — Tăng bùng nổ theo cấp số nhân!
          </div>
        </div>
      </div>
    </div>
  );
}
