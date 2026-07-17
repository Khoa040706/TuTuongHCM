"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, Eye, HelpCircle, Layers, Play, RotateCcw, Terminal } from "lucide-react";

export default function CollectionArrayJagged2D() {
  const [row, setRow] = useState(-1); // -1: idle
  const [col, setCol] = useState(-1);
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [log, setLog] = useState("Nhấn 'Chạy bước tiếp theo' để duyệt mảng 2 chiều răng cưa.");

  const jaggedData = [
    [4, 5, 2],
    [1, 3],
    [7, 1, 5, 6]
  ];

  const handleStep = () => {
    // If idle, start at 0, 0
    if (row === -1) {
      setRow(0);
      setCol(0);
      const val = jaggedData[0][0];
      setConsoleOutput([`${val} `]);
      setLog(`Bắt đầu: row = 0, col = 0. Giá trị: array2D[0][0] = ${val}`);
      return;
    }

    let nextRow = row;
    let nextCol = col + 1;

    // Check if we exceed columns of current row
    if (nextCol >= jaggedData[row].length) {
      nextRow = row + 1;
      nextCol = 0;
    }

    // Check if we exceed rows
    if (nextRow >= jaggedData.length) {
      setLog("Đã duyệt xong toàn bộ mảng 2 chiều!");
      return;
    }

    setRow(nextRow);
    setCol(nextCol);
    const val = jaggedData[nextRow][nextCol];

    if (nextCol === 0) {
      setConsoleOutput((prev) => [...prev, "\n", `${val} `]);
    } else {
      setConsoleOutput((prev) => {
        const lastIdx = prev.length - 1;
        const newPrev = [...prev];
        newPrev[lastIdx] = newPrev[lastIdx] + `${val} `;
        return newPrev;
      });
    }

    setLog(`Duyệt: row = ${nextRow}, col = ${nextCol}. Giá trị: array2D[${nextRow}][${nextCol}] = ${val}. Chiều dài hàng: array2D[${nextRow}].length = ${jaggedData[nextRow].length}`);
  };

  const handleReset = () => {
    setRow(-1);
    setCol(-1);
    setConsoleOutput([]);
    setLog("Nhấn 'Chạy bước tiếp theo' để duyệt mảng 2 chiều răng cưa.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-400" />
            <span>Mô Phỏng Mảng Răng Cưa (Jagged Array Simulator)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Minh họa cấu trúc mảng 2 chiều răng cưa nơi mỗi hàng có số lượng cột khác nhau
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleStep}
            className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg shadow transition-all select-none"
          >
            Chạy bước tiếp theo
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-850 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-450 transition-all select-none"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RAM physical Jagged Array structure visual */}
      <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 mb-6 flex flex-col gap-4">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">
          Bản đồ cấu trúc bộ nhớ của Mảng răng cưa
        </span>

        <div className="flex flex-col gap-3 font-mono text-xs">
          {/* Main Array Pointer */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] text-indigo-400 font-bold w-20">array2D</span>
            <div className="flex gap-1 bg-slate-900 p-1.5 rounded border border-slate-800">
              {[0, 1, 2].map((rIdx) => (
                <div
                  key={rIdx}
                  className={`px-3 py-1.5 rounded border text-center transition-all ${
                    row === rIdx
                      ? "bg-indigo-950/40 border-indigo-500 text-indigo-300 font-bold"
                      : "bg-slate-950 border-slate-850 text-slate-500"
                  }`}
                >
                  [{rIdx}] ➔ RowRef
                </div>
              ))}
            </div>
            <span className="text-[9px] text-slate-500 font-bold ml-2">
              array2D.length = {jaggedData.length} (3 hàng)
            </span>
          </div>

          {/* Sub-arrays rows */}
          <div className="space-y-2 border-t border-slate-900 pt-3 pl-6">
            {jaggedData.map((rowArr, rIdx) => (
              <div key={rIdx} className="flex items-center gap-3">
                <span className={`text-[9px] w-24 font-bold ${row === rIdx ? "text-indigo-400" : "text-slate-600"}`}>
                  Row {rIdx} ({rowArr.length} cột):
                </span>
                
                <div className="flex gap-1.5 bg-slate-900/60 p-1.5 rounded border border-slate-850">
                  {rowArr.map((val, cIdx) => {
                    const isCurrent = row === rIdx && col === cIdx;
                    return (
                      <div
                        key={cIdx}
                        className={`px-3 py-1.5 rounded border text-center min-w-[36px] transition-all duration-300 ${
                          isCurrent
                            ? "bg-teal-950 border-teal-500 text-teal-300 font-bold scale-105 shadow shadow-teal-500/10"
                            : "bg-slate-950 border-slate-850 text-slate-600"
                        }`}
                      >
                        <span className="text-[8px] block opacity-50">[{cIdx}]</span>
                        <span className="font-bold">{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code and Console Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Code trace */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Vòng lặp Java thực thi
            </span>

            <pre className="p-3.5 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
              <div className={row >= 0 ? "text-indigo-300 font-bold bg-indigo-950/20 px-1 rounded" : ""}>
                {`for (int row = 0; row < array2D.length; row++) {`}
              </div>
              <div className={col >= 0 ? "text-indigo-300 font-bold bg-indigo-950/20 px-1 rounded" : ""}>
                {`    for (int col = 0; col < array2D[row].length; col++) {`}
              </div>
              <div className={row >= 0 && col >= 0 ? "text-teal-300 font-bold bg-teal-950/20 px-1 rounded animate-pulse" : ""}>
                {`        System.out.print(array2D[row][col] + " ");`}
              </div>
              <div>{`    }`}</div>
              <div>{`}`}</div>
            </pre>
          </div>
        </div>

        {/* Console output display */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono flex items-center gap-1.5 text-teal-400">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Console Output</span>
            </span>

            <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-xs text-slate-200 min-h-[96px] whitespace-pre-wrap leading-relaxed">
              {consoleOutput.length > 0 ? (
                consoleOutput.map((line, idx) => <span key={idx}>{line}</span>)
              ) : (
                <span className="text-slate-650 italic">Console trống. Chờ chạy code...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Simulator logs */}
      <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-400 font-mono">
        {log}
      </div>
    </div>
  );
}
