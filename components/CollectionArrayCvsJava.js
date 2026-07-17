"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, Eye, HelpCircle, Layers, MemoryStick } from "lucide-react";

export default function CollectionArrayCvsJava() {
  const [selectedLanguage, setSelectedLanguage] = useState("C"); // "C" | "JAVA"
  const [hoveredCell, setHoveredCell] = useState(null); // null, 0, 1, 2, 3, "header"

  const arrayData = [35.1, 21.0, 57.7, 18.3];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <span>So Sánh Cấu Trúc RAM: Mảng trong C vs Java</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Nhấp chuyển tab để thấy sự khác biệt về cách tổ chức ô nhớ vật lý của mảng
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => { setSelectedLanguage("C"); setHoveredCell(null); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedLanguage === "C" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Mảng trong C
          </button>
          <button
            onClick={() => { setSelectedLanguage("JAVA"); setHoveredCell(null); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedLanguage === "JAVA" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Mảng trong Java (Object)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-6">
        {/* RAM block diagrams */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">
                Bố cục ô nhớ vật lý trên RAM
              </span>
              <span className="text-xs font-bold text-sky-400 font-mono">
                {selectedLanguage === "C" ? "Con trỏ thô (Raw Pointer)" : "Đối tượng Heap (Heap Object)"}
              </span>
            </div>

            {selectedLanguage === "C" ? (
              /* C Array memory layout */
              <div className="space-y-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trong C, mảng thực chất chỉ là một <strong>địa chỉ con trỏ thô</strong> trỏ tới phần tử đầu tiên của vùng nhớ liên tiếp. Mảng **không hề biết** chiều dài của chính nó.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 p-4 bg-slate-900 rounded-lg border border-slate-850 relative">
                  {/* Pointer label */}
                  <div className="p-2 bg-indigo-950/40 border border-indigo-500 rounded text-[10px] font-mono text-indigo-300 mr-2">
                    double* arr
                  </div>

                  <ArrowRight className="w-4 h-4 text-indigo-400 mr-2" />

                  {/* Array elements */}
                  {arrayData.map((val, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredCell(idx)}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`p-3 rounded border font-mono text-xs text-center min-w-[64px] transition-all cursor-pointer ${
                        hoveredCell === idx
                          ? "bg-indigo-900/40 border-indigo-400 text-indigo-200 scale-105 shadow"
                          : "bg-slate-950 border-slate-800 text-slate-350"
                      }`}
                    >
                      <span className="text-[8px] text-slate-600 block">index {idx}</span>
                      <span className="font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Java Array memory layout */
              <div className="space-y-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trong Java, mảng là một <strong>Đối tượng (Object)</strong> thực sự. Nó lưu trữ thêm một tiêu đề chứa biến độ dài <code>length</code>.
                </p>

                <div className="flex flex-col gap-2 p-4 bg-slate-900 rounded-lg border border-slate-850">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-indigo-950/40 border border-indigo-500 rounded text-[10px] font-mono text-indigo-300">
                      double[] arr (Reference)
                    </div>
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                    <span className="text-[10px] text-slate-500 font-mono">Trỏ đến Heap:</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* Object Header Length */}
                    <div
                      onMouseEnter={() => setHoveredCell("header")}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`p-3 rounded-lg border font-mono text-xs text-center flex flex-col justify-center cursor-pointer transition-all ${
                        hoveredCell === "header"
                          ? "bg-amber-950/40 border-amber-500 text-amber-200 scale-105 shadow"
                          : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      <span className="text-[8px] text-slate-600 block uppercase font-bold">Metadata</span>
                      <span className="font-bold text-amber-400">length = 4</span>
                    </div>

                    {/* Array data cells */}
                    <div className="flex-1 flex gap-1.5 p-2 bg-slate-950 rounded-lg border border-slate-850">
                      {arrayData.map((val, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredCell(idx)}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`flex-1 p-2.5 rounded border font-mono text-xs text-center min-w-[50px] transition-all cursor-pointer ${
                            hoveredCell === idx
                              ? "bg-indigo-900/40 border-indigo-400 text-indigo-200 scale-105 shadow"
                              : "bg-slate-900 border-slate-800 text-slate-350"
                          }`}
                        >
                          <span className="text-[8px] text-slate-600 block">index {idx}</span>
                          <span className="font-bold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Code & Explanations */}
        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Giải thích cú pháp tương ứng
            </span>

            {selectedLanguage === "C" ? (
              <div className="space-y-4 text-xs leading-relaxed text-slate-300">
                <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto">
{`// Hàm nhận mảng trong C
double sumArray(double arr[], int size) {
    // Luôn phải truyền thêm tham số 'size'
    // vì arr không tự biết độ dài của nó.
}`}
                </pre>
                <p>
                  * Do mảng trong C không có metadata độ dài trong RAM, nếu hàm không được truyền thêm <code>size</code>, hàm sẽ không có cách nào biết khi nào cần dừng duyệt vòng lặp, dẫn tới lỗi tràn bộ nhớ (buffer overflow).
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed text-slate-300">
                <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto">
{`// Duyệt mảng trong Java
for (int i = 0; i < arr.length; i++) {
    // arr.length đọc trực tiếp thuộc tính
    // từ tiêu đề của đối tượng mảng.
}`}
                </pre>
                <p>
                  * Tiêu đề của đối tượng mảng Java luôn lưu trữ số lượng phần tử. Vì vậy, ta luôn có thể truy vấn nhanh độ dài thông qua <code>arr.length</code> mà không cần truyền thêm tham số phụ.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
