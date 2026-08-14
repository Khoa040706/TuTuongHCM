"use client";

import React, { useState } from "react";
import { Layers, Info, AlertTriangle, ArrowRight, Code, Sparkles, ChevronRight } from "lucide-react";

export default function JavaUtilStackApiCard() {
  const [selectedMethod, setSelectedMethod] = useState("push(E item)");

  const methods = [
    {
      name: "Stack()",
      returnType: "—",
      desc: "Constructor tạo một Stack rỗng ban đầu.",
      complexity: "O(1)",
      note: "Khởi tạo mảng lưu trữ ngầm bên trong (kế thừa từ Vector).",
      example: "// Khởi tạo Stack chứa phần tử kiểu Integer\nStack<Integer> stack = new Stack<>();"
    },
    {
      name: "empty()",
      returnType: "boolean",
      desc: "Kiểm tra xem Stack có đang rỗng hay không.",
      complexity: "O(1)",
      note: "Trả về true nếu size == 0, false nếu ngược lại.",
      example: "Stack<String> stack = new Stack<>();\nboolean isEmpty = stack.empty(); // returns true"
    },
    {
      name: "peek()",
      returnType: "E",
      desc: "Xem phần tử ở đỉnh (top) của Stack mà KHÔNG xóa nó.",
      complexity: "O(1)",
      note: "Ném EmptyStackException nếu Stack rỗng.",
      example: "stack.push(\"Java\");\nString top = stack.peek(); // returns \"Java\", stack vẫn giữ \"Java\""
    },
    {
      name: "pop()",
      returnType: "E",
      desc: "Xóa phần tử ở đỉnh Stack và trả về giá trị của nó.",
      complexity: "O(1)",
      note: "Ném EmptyStackException nếu Stack rỗng.",
      example: "stack.push(100);\nInteger removed = stack.pop(); // returns 100, stack loại bỏ 100"
    },
    {
      name: "push(E item)",
      returnType: "E",
      desc: "Đưa một phần tử vào đỉnh (top) của Stack.",
      complexity: "O(1)",
      note: "Trả về chính item vừa được push vào.",
      example: "stack.push(42); // Thêm 42 vào đỉnh Stack, trả về 42"
    },
    {
      name: "search(Object o)",
      returnType: "int",
      desc: "Trả về vị trí (1-based index) của object tính từ ĐỈNH Stack xuống.",
      complexity: "O(n)",
      note: "Trả về 1 cho phần tử ở đỉnh, 2 cho phần tử kế tiếp... Trả về -1 nếu không tìm thấy.",
      example: "// Giả sử Stack từ dưới lên: [\"A\", \"B\", \"C\"] (Đỉnh là \"C\")\nint pos1 = stack.search(\"C\"); // returns 1 (Đỉnh)\nint pos2 = stack.search(\"A\"); // returns 3\nint pos3 = stack.search(\"Z\"); // returns -1"
    }
  ];

  const activeMethodObj = methods.find((m) => m.name === selectedMethod);

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>4. Class java.util.Stack&lt;E&gt;</span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
            Thư viện chuẩn Java Stack API
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs bg-indigo-100 text-indigo-800 border border-indigo-200 px-3 py-1.5 rounded-full font-mono font-semibold self-start md:self-auto shadow-xs">
          java.util.Stack &lt;E&gt;
        </span>
      </div>

      {/* Inheritance Hierarchy Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-900 font-bold">Sơ đồ kế thừa:</strong> <code className="text-indigo-700 font-mono font-semibold">Stack</code> là lớp có sẵn trong Java, kế thừa từ lớp <code className="bg-amber-100 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded font-mono font-medium">Vector</code>.
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold shrink-0 self-start md:self-auto">
          <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded shadow-xs">Object</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded shadow-xs">Vector</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-500" />
          <span className="px-2.5 py-1 bg-indigo-600 text-white rounded shadow-sm">Stack</span>
        </div>
      </div>

      {/* Interactive Method List */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" /> Danh sách phương thức (Bấm để xem chi tiết & ví dụ)
          </h4>
          <span className="text-xs text-slate-500 font-medium">6 phương thức chính</span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {methods.map((m) => {
            const isSelected = selectedMethod === m.name;
            return (
              <div key={m.name}>
                <div
                  onClick={() => setSelectedMethod(isSelected ? null : m.name)}
                  className={`transition-all duration-150 rounded-xl p-3 cursor-pointer border ${
                    isSelected
                      ? "bg-indigo-50/80 border-indigo-500 shadow-sm"
                      : "bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-20 shrink-0 text-center font-mono text-xs font-semibold px-2 py-1 rounded bg-purple-50 text-purple-700 border border-purple-200">
                        {m.returnType}
                      </span>
                      <div>
                        <code className="font-mono text-indigo-700 font-bold text-sm md:text-base">
                          {m.name}
                        </code>
                        <p className="text-slate-600 text-xs mt-0.5">{m.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                        {m.complexity}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isSelected ? "rotate-90 text-indigo-600" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Method detail popup/box */}
                {isSelected && activeMethodObj && (
                  <div className="mt-2.5 bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-800 space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-xs md:text-sm">
                        <Info className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Chi tiết phương thức:</span>
                        <code className="text-indigo-700 font-mono">{activeMethodObj.name}</code>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">
                        Kiểu trả về: <strong className="text-purple-700">{activeMethodObj.returnType}</strong>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeMethodObj.note}
                    </p>

                    {/* Dark Code Box */}
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 mb-1.5 flex items-center gap-1">
                        <Code className="w-3.5 h-3.5 text-indigo-500" /> Ví dụ minh họa trong Java:
                      </div>
                      <div className="bg-slate-950 text-slate-200 font-mono text-xs p-3 rounded-xl border border-slate-800 shadow-inner">
                        <div className="flex items-center gap-1.5 mb-2 border-b border-slate-800/80 pb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] text-slate-400 font-sans ml-2">Java Code</span>
                        </div>
                        <pre className="overflow-x-auto text-emerald-300 leading-relaxed">
                          <code>{activeMethodObj.example}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Note Callout */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-900 font-bold text-sm block mb-1">
            📌 Ghi nhớ quan trọng về java.util.Stack:
          </strong>
          <ul className="space-y-1.5 list-disc list-inside text-amber-800">
            <li>
              Vì kế thừa từ <code className="bg-amber-100/80 border border-amber-300 text-amber-900 font-mono px-1 py-0.5 rounded font-semibold">Vector</code>, <code className="bg-indigo-100/80 border border-indigo-300 text-indigo-900 font-mono px-1 py-0.5 rounded font-semibold">java.util.Stack</code> thừa hưởng nhiều phương thức từ Vector (như <code className="font-mono text-slate-800">add</code>, <code className="font-mono text-slate-800">remove</code>, <code className="font-mono text-slate-800">get</code>, <code className="font-mono text-slate-800">size</code>, <code className="font-mono text-slate-800">contains</code>...). Điều này vi phạm nguyên tắc đóng gói của Stack ADT chuẩn.
            </li>
            <li>
              Phương thức <code className="bg-emerald-100/80 border border-emerald-300 text-emerald-900 font-mono px-1 py-0.5 rounded font-semibold">search(Object o)</code> ít người biết đến: trả về vị trí <strong>1-based index tính từ ĐỈNH stack xuống</strong> (đỉnh = 1). Trả về -1 nếu không tìm thấy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

