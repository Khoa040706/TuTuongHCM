"use client";
import React, { useState } from "react";
import { Circle, Square, ArrowRightLeft, CheckCircle2, Info } from "lucide-react";

export default function ShapeComparableVisualizer() {
  const [radius, setRadius] = useState(5);
  const [rectWidth, setRectWidth] = useState(6);
  const [rectHeight, setRectHeight] = useState(7);
  const [compareResult, setCompareResult] = useState(null);

  const PI = 3.14159;
  const circleArea = PI * radius * radius;
  const circleCircumference = 2 * PI * radius;

  const rectArea = rectWidth * rectHeight;
  const rectCircumference = 2 * (rectWidth + rectHeight);

  const handleCompare = () => {
    let res = 0;
    if (circleArea === rectArea) res = 0;
    else if (circleArea > rectArea) res = 1;
    else res = -1;

    setCompareResult({
      code: res,
      message:
        res === 0
          ? "circle.compareTo(rect) == 0 (Diện tích 2 hình bằng nhau!)"
          : res === 1
          ? "circle.compareTo(rect) == 1 (Hình tròn có diện tích LỚN HƠN)"
          : "circle.compareTo(rect) == -1 (Hình tròn có diện tích NHỎ HƠN)",
      circleArea: circleArea.toFixed(2),
      rectArea: rectArea.toFixed(2)
    });
  };

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              VÍ DỤ 3.2: INTERFACE COMPARABLE
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Comparable&lt;Shape&gt; Visualizer
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Interface <code>Comparable&lt;T&gt;</code> đặc tả phương thức <code>compareTo(T other)</code> để so sánh thứ tự giữa 2 đối tượng bất kỳ.
          </p>
        </div>

        <button
          onClick={handleCompare}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>Chạy compareTo()</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* SHAPE 1: CIRCLE */}
        <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-5 relative overflow-hidden">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Circle className="w-4 h-4 text-purple-600" />
              Shape #1: Circle (Hình Tròn)
            </span>
            <span className="text-[10px] font-mono text-slate-400">implements Comparable&lt;Shape&gt;</span>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Bán kính (Radius r):</span>
                <span className="font-mono font-bold text-purple-700">{radius}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={radius}
                onChange={(e) => setRadius(parseFloat(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-lg border border-purple-100 text-xs shadow-sm">
            <div>
              <span className="text-[10px] text-slate-500 block">area():</span>
              <span className="font-mono font-bold text-purple-700">{circleArea.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">circumference():</span>
              <span className="font-mono text-slate-700">{circleCircumference.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* SHAPE 2: RECTANGLE */}
        <div className="bg-indigo-50/40 border border-indigo-100 rounded-xl p-5 relative overflow-hidden">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Square className="w-4 h-4 text-indigo-600" />
              Shape #2: Rectangle (Hình Chữ Nhật)
            </span>
            <span className="text-[10px] font-mono text-slate-400">implements Comparable&lt;Shape&gt;</span>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Chiều rộng (Width w):</span>
                <span className="font-mono font-bold text-indigo-700">{rectWidth}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={rectWidth}
                onChange={(e) => setRectWidth(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Chiều cao (Height h):</span>
                <span className="font-mono font-bold text-indigo-700">{rectHeight}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={rectHeight}
                onChange={(e) => setRectHeight(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-lg border border-indigo-100 text-xs shadow-sm">
            <div>
              <span className="text-[10px] text-slate-500 block">area():</span>
              <span className="font-mono font-bold text-indigo-700">{rectArea.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">circumference():</span>
              <span className="font-mono text-slate-700">{rectCircumference.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Output Result Panel */}
      {compareResult ? (
        <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 flex items-start gap-3 animate-in shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-bold text-purple-950 font-mono text-sm">
              Kết quả compareTo(): {compareResult.code}
            </div>
            <p className="text-slate-700 leading-relaxed">{compareResult.message}</p>
            <div className="text-[10px] text-slate-500 font-mono">
              Diện tích Circle: {compareResult.circleArea} vs Rectangle: {compareResult.rectArea}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-purple-50/50 border border-purple-100 rounded-xl text-xs text-slate-600 flex items-center gap-2">
          <Info className="w-4 h-4 text-purple-600 flex-shrink-0" />
          <span>Bấm nút <strong>Chạy compareTo()</strong> để thực thi phép so sánh 2 đối tượng <code>Shape</code>.</span>
        </div>
      )}
    </div>
  );
}
