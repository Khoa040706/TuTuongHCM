"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, Eye, HelpCircle, Layers, Play, Sparkles } from "lucide-react";

export default function CollectionGenericsPlayground() {
  const [selectedType, setSelectedType] = useState("Integer"); // "Integer" | "String" | "Double" | "Boolean"

  const typeConfig = {
    Integer: {
      javaType: "Integer",
      valA: "100",
      valB: "200",
      sampleCode: 'Pair<Integer> twoInt = new Pair<Integer>(100, 200);\nInteger firstVal = twoInt.getFirst();'
    },
    String: {
      javaType: "String",
      valA: '"Turing"',
      valB: '"Alan"',
      sampleCode: 'Pair<String> twoStr = new Pair<String>("Turing", "Alan");\nString firstVal = twoStr.getFirst();'
    },
    Double: {
      javaType: "Double",
      valA: "35.1",
      valB: "57.7",
      sampleCode: 'Pair<Double> twoDouble = new Pair<Double>(35.1, 57.7);\nDouble firstVal = twoDouble.getFirst();'
    },
    Boolean: {
      javaType: "Boolean",
      valA: "true",
      valB: "false",
      sampleCode: 'Pair<Boolean> twoBool = new Pair<Boolean>(true, false);\nBoolean firstVal = twoBool.getFirst();'
    }
  };

  const current = typeConfig[selectedType];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
            <span>Trình Thay Thế Kiểu Tự Động (Generic Type Playground)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Chọn kiểu dữ liệu để xem cách Java compiler thay thế tham số kiểu chữ T
          </p>
        </div>

        {/* Dropdown type selector */}
        <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-850">
          <span className="text-xs text-slate-500 font-mono">Chọn kiểu T:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-xs text-sky-400 font-mono focus:outline-none focus:border-indigo-500"
          >
            <option value="Integer">Integer (Số nguyên)</option>
            <option value="String">String (Chuỗi chữ)</option>
            <option value="Double">Double (Số thực)</option>
            <option value="Boolean">Boolean (Logic)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Class definition with highlighted T */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Định nghĩa lớp Generic Pair&lt;T&gt; trong RAM
            </span>

            <pre className="p-4 bg-slate-900 border border-slate-850 rounded-lg font-mono text-xs leading-relaxed text-slate-350 overflow-x-auto">
              <div>
                <span>class Pair&lt;</span>
                <span className="text-sky-400 font-bold bg-sky-950/40 px-1 rounded animate-pulse">{current.javaType}</span>
                <span>&gt; {'{'}</span>
              </div>
              <div className="pl-4">
                <span>private </span>
                <span className="text-sky-400 font-bold bg-sky-950/40 px-1 rounded">{current.javaType}</span>
                <span> first, second;</span>
              </div>
              <br />
              <div className="pl-4">
                <span>public Pair(</span>
                <span className="text-sky-400 font-bold bg-sky-950/40 px-1 rounded">{current.javaType}</span>
                <span> a, </span>
                <span className="text-sky-400 font-bold bg-sky-950/40 px-1 rounded">{current.javaType}</span>
                <span> b) {'{'}</span>
              </div>
              <div className="pl-8">
                <span>first = a;</span>
              </div>
              <div className="pl-8">
                <span>second = b;</span>
              </div>
              <div className="pl-4">{'}'}</div>
              <br />
              <div className="pl-4">
                <span>public </span>
                <span className="text-sky-400 font-bold bg-sky-950/40 px-1 rounded">{current.javaType}</span>
                <span> getFirst() {'{'} return first; {'}'}</span>
              </div>
              <div>{'}'}</div>
            </pre>
          </div>
        </div>

        {/* Instantiation and output panel */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mã khởi tạo đối tượng tương ứng
            </span>

            <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto mb-4">
              {current.sampleCode}
            </pre>

            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">
              Kết quả trả về khi gọi getFirst()
            </span>
            
            <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-xs text-emerald-400 flex items-center justify-between">
              <span>firstVal =</span>
              <span className="font-bold">{current.valA}</span>
            </div>
          </div>

          <div className="mt-4 p-3.5 bg-slate-900/60 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-450">
            * **Động lực:** Bằng cách sử dụng tham số kiểu chữ <code>T</code>, ta chỉ cần viết lớp <code>Pair</code> đúng 1 lần duy nhất, thay vì phải viết riêng biệt nhiều lớp trùng lặp như <code>IntPair</code>, <code>StringPair</code>...
          </div>
        </div>
      </div>
    </div>
  );
}
