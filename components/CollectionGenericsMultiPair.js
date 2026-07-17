"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, Eye, HelpCircle, Layers, Play, RefreshCw, Sparkles } from "lucide-react";

export default function CollectionGenericsMultiPair() {
  const [typeS, setTypeS] = useState("String");
  const [typeT, setTypeT] = useState("Integer");
  const [valS, setValS] = useState("James Gosling");
  const [valT, setValT] = useState("55");

  const [hasBuilt, setHasBuilt] = useState(false);

  const handleBuild = () => {
    setHasBuilt(true);
  };

  const handleReset = () => {
    setHasBuilt(false);
  };

  // Safe formatting for Java literals
  const formatVal = (val, type) => {
    if (type === "String") return `"${val}"`;
    return val;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <span>Trình Khởi Tạo Cặp Đa Kiểu: NewPair&lt;S, T&gt;</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Thiết lập kiểu dữ liệu và giá trị tùy ý cho hai thuộc tính S và T
          </p>
        </div>
      </div>

      {/* Input panel */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div>
          <label className="text-[10px] text-slate-500 font-mono font-bold block mb-1">Kiểu dữ liệu S:</label>
          <select
            value={typeS}
            onChange={(e) => { setTypeS(e.target.value); setValS(e.target.value === "String" ? "James Gosling" : "100"); handleReset(); }}
            className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-sky-400 font-mono focus:outline-none"
          >
            <option value="String">String</option>
            <option value="Integer">Integer</option>
            <option value="Double">Double</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-slate-500 font-mono font-bold block mb-1">Giá trị S:</label>
          <input
            type="text"
            value={valS}
            onChange={(e) => { setValS(e.target.value); handleReset(); }}
            className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-[10px] text-slate-500 font-mono font-bold block mb-1">Kiểu dữ liệu T:</label>
          <select
            value={typeT}
            onChange={(e) => { setTypeT(e.target.value); setValT(e.target.value === "Integer" ? "55" : "3.14"); handleReset(); }}
            className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-sky-400 font-mono focus:outline-none"
          >
            <option value="String">String</option>
            <option value="Integer">Integer</option>
            <option value="Double">Double</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-slate-500 font-mono font-bold block mb-1">Giá trị T:</label>
          <input
            type="text"
            value={valT}
            onChange={(e) => { setValT(e.target.value); handleReset(); }}
            className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={handleBuild}
          className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-md transition-all select-none"
        >
          Khởi tạo NewPair & Vẽ RAM Heap
        </button>
        {hasBuilt && (
          <button
            onClick={handleReset}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
          >
            Đặt lại
          </button>
        )}
      </div>

      {hasBuilt && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-fade-in">
          {/* Code Viewer */}
          <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                Mã Java khởi tạo đối tượng
              </span>

              <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto">
{`NewPair<${typeS}, ${typeT}> someone = 
    new NewPair<>(${formatVal(valS, typeS)}, ${formatVal(valT, typeT)});

System.out.println("S = " + someone.getFirst());
System.out.println("T = " + someone.getSecond());`}
              </pre>
            </div>
          </div>

          {/* RAM Heap Diagram */}
          <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                Vùng nhớ Heap (NewPair Object)
              </span>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-850 flex flex-col gap-4 relative">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-slate-950 border border-slate-800 rounded font-mono text-[10px] text-indigo-300">
                    NewPair Object (@HeapRef_NewPair)
                  </div>
                </div>

                <div className="flex flex-col gap-3 font-mono text-[10px] pl-6 border-l border-slate-850">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-550 w-24">field first (S):</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-sky-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                      {typeS} ({formatVal(valS, typeS)})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-550 w-24">field second (T):</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-sky-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                      {typeT} ({formatVal(valT, typeT)})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
