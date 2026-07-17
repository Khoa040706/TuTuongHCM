"use client";
import React, { useState } from "react";
import { Cpu, Eye, HelpCircle, Layers, MemoryStick } from "lucide-react";

export default function InterfaceFractionMemoryRam() {
  const [selectedField, setSelectedField] = useState("fraction-numer"); // "fraction-numer" | "fraction-denom" | "arr-ref" | "arr-[0]" | "arr-[1]"

  const getCodeSnippet = () => {
    switch (selectedField) {
      case "fraction-numer":
        return {
          title: "Fraction - getNumer()",
          code: `public int getNumer() {\n    return this.numer;\n}`,
          desc: "Đọc trực tiếp từ thuộc tính nguyên thủy 'numer' của đối tượng."
        };
      case "fraction-denom":
        return {
          title: "Fraction - getDenom()",
          code: `public int getDenom() {\n    return this.denom;\n}`,
          desc: "Đọc trực tiếp từ thuộc tính nguyên thủy 'denom' của đối tượng."
        };
      case "arr-ref":
        return {
          title: "FractionArr - Mảng members",
          code: `private int[] members;\n// members = new int[2];`,
          desc: "Biến tham chiếu 'members' lưu trữ địa chỉ của mảng 2 phần tử thực tế trên Heap."
        };
      case "arr-[0]":
        return {
          title: "FractionArr - getNumer()",
          code: `public int getNumer() {\n    return this.members[0];\n}`,
          desc: "Truy cập phần tử đầu tiên (chỉ số 0) của mảng để lấy tử số."
        };
      case "arr-[1]":
        return {
          title: "FractionArr - getDenom()",
          code: `public int getDenom() {\n    return this.members[1];\n}`,
          desc: "Truy cập phần tử thứ hai (chỉ số 1) của mảng để lấy mẫu số."
        };
      default:
        return null;
    }
  };

  const activeInfo = getCodeSnippet();

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center gap-2">
            <MemoryStick className="w-5 h-5 text-emerald-400" />
            <span>Sơ Đồ Cấu Trúc RAM: Fraction vs FractionArr</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Click vào các ô nhớ để đối chiếu trực tiếp cách truy xuất dữ liệu getter tương ứng
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-6">
        {/* Fraction independent fields */}
        <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs font-bold text-indigo-400">Cách 1: Lớp Fraction (Biến độc lập)</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                2 thuộc tính int
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Lưu trữ trực tiếp bằng 2 biến số nguyên <code>numer</code> (tử) và <code>denom</code> (mẫu) liền kề trong vùng nhớ đối tượng.
            </p>

            {/* RAM Simulator */}
            <div className="flex flex-col gap-2 p-4 bg-slate-900 rounded-lg border border-slate-850">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Cấu trúc trong RAM</span>
              
              <div
                onClick={() => setSelectedField("fraction-numer")}
                className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                  selectedField === "fraction-numer"
                    ? "bg-indigo-950/40 border-indigo-500 text-indigo-200"
                    : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"
                }`}
              >
                <span className="font-mono text-xs font-bold">int numer (tử số)</span>
                <span className="font-mono text-xs font-bold">2</span>
              </div>

              <div
                onClick={() => setSelectedField("fraction-denom")}
                className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                  selectedField === "fraction-denom"
                    ? "bg-indigo-950/40 border-indigo-500 text-indigo-200"
                    : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"
                }`}
              >
                <span className="font-mono text-xs font-bold">int denom (mẫu số)</span>
                <span className="font-mono text-xs font-bold">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* FractionArr array field */}
        <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs font-bold text-cyan-400">Cách 2: Lớp FractionArr (Mảng)</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                1 biến mảng tham chiếu
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Lưu trữ một biến tham chiếu mảng <code>members</code> trỏ tới một vùng nhớ mảng int riêng biệt trên Heap.
            </p>

            {/* RAM Simulator */}
            <div className="flex flex-col gap-2 p-4 bg-slate-900 rounded-lg border border-slate-850 relative">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Cấu trúc trong RAM</span>

              <div
                onClick={() => setSelectedField("arr-ref")}
                className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                  selectedField === "arr-ref"
                    ? "bg-cyan-950/40 border-cyan-500 text-cyan-200"
                    : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"
                }`}
              >
                <span className="font-mono text-xs font-bold">int[] members (tham chiếu)</span>
                <span className="font-mono text-xs font-bold">@Heap_Array</span>
              </div>

              {/* Sub-array elements representation */}
              <div className="mt-2 border-t border-dashed border-slate-800 pt-2 flex gap-2">
                <div
                  onClick={() => setSelectedField("arr-[0]")}
                  className={`flex-1 p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col items-center ${
                    selectedField === "arr-[0]"
                      ? "bg-cyan-950/40 border-cyan-500 text-cyan-200"
                      : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"
                  }`}
                >
                  <span className="text-[9px] text-slate-500 font-mono">index [0] (tử)</span>
                  <span className="font-mono text-xs font-bold mt-1">2</span>
                </div>

                <div
                  onClick={() => setSelectedField("arr-[1]")}
                  className={`flex-1 p-2.5 rounded-lg border cursor-pointer transition-all flex flex-col items-center ${
                    selectedField === "arr-[1]"
                      ? "bg-cyan-950/40 border-cyan-500 text-cyan-200"
                      : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"
                  }`}
                >
                  <span className="text-[9px] text-slate-500 font-mono">index [1] (mẫu)</span>
                  <span className="font-mono text-xs font-bold mt-1">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code and Explanation Panel */}
      {activeInfo && (
        <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-850 flex flex-col md:flex-row gap-6 items-stretch transition-all duration-300">
          <div className="flex-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
              {activeInfo.title}
            </span>
            <pre className="p-3.5 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-emerald-300 overflow-x-auto">
              <code>{activeInfo.code}</code>
            </pre>
          </div>
          
          <div className="md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-850 pt-4 md:pt-0 md:pl-5">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 block">
              Giải thích cơ chế
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              {activeInfo.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
