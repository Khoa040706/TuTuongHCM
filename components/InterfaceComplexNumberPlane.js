"use client";
import React, { useState } from "react";
import { AlertOctagon, Info, RefreshCw, Layers } from "lucide-react";

export default function InterfaceComplexNumberPlane() {
  const [r1, setR1] = useState(2);
  const [i1, setI1] = useState(3);
  const [r2, setR2] = useState(1);
  const [i2, setI2] = useState(-2);
  const [activeOp, setActiveOp] = useState("ADD"); // "ADD" | "SUB" | "MUL"
  const [activeCodeTab, setActiveCodeTab] = useState("Cartesian"); // "Cartesian" | "Polar"

  // Math calculations
  let resR = 0;
  let resI = 0;
  let formulaText = "";
  let substitutionText = "";

  if (activeOp === "ADD") {
    resR = r1 + r2;
    resI = i1 + i2;
    formulaText = "(a + c) + (b + d)i";
    substitutionText = `(${r1} + ${r2 < 0 ? `(${r2})` : r2}) + (${i1} + ${i2 < 0 ? `(${i2})` : i2})i = ${resR} + ${resI < 0 ? `(${resI})` : resI}i`;
  } else if (activeOp === "SUB") {
    resR = r1 - r2;
    resI = i1 - i2;
    formulaText = "(a - c) + (b - d)i";
    substitutionText = `(${r1} - ${r2 < 0 ? `(${r2})` : r2}) + (${i1} - ${i2 < 0 ? `(${i2})` : i2})i = ${resR} + ${resI < 0 ? `(${resI})` : resI}i`;
  } else {
    // Multiplication: (ac - bd) + (ad + bc)i
    resR = r1 * r2 - i1 * i2;
    resI = r1 * i2 + r2 * i1;
    formulaText = "(ac - bd) + (ad + bc)i";
    substitutionText = `(${r1}*${r2} - ${i1}*${i2}) + (${r1}*${i2 < 0 ? `(${i2})` : i2} + ${r2}*${i1})i = (${r1 * r2} - ${i1 * i2}) + (${r1 * i2} + ${r2 * i1})i = ${resR} + ${resI < 0 ? `(${resI})` : resI}i`;
  }

  // Polar representations
  const mag1 = Math.sqrt(r1 * r1 + i1 * i1).toFixed(2);
  const ang1 = Math.atan2(i1, r1).toFixed(2);
  const mag2 = Math.sqrt(r2 * r2 + i2 * i2).toFixed(2);
  const ang2 = Math.atan2(i2, r2).toFixed(2);

  // SVG grid config
  const svgSize = 300;
  const maxVal = 7;
  const scale = svgSize / (maxVal * 2); // pixels per unit
  const center = svgSize / 2;

  const toSvgX = (x) => center + x * scale;
  const toSvgY = (y) => center - y * scale; // invert Y for standard math axis

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            Mặt Phẳng Phức Tương Tác (Complex Plane)
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Điều chỉnh tham số số phức z1 và z2 qua slider để xem kết quả vector biến động trên đồ thị 2D
          </p>
        </div>

        {/* Operation selector */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          {["ADD", "SUB", "MUL"].map((op) => (
            <button
              key={op}
              onClick={() => setActiveOp(op)}
              className={`px-3 py-1 text-xs font-mono font-bold rounded transition-all ${
                activeOp === op
                  ? "bg-sky-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {op === "ADD" ? "Cộng (+)" : op === "SUB" ? "Trừ (-)" : "Nhân (*)"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
        {/* SVG Plane Graphic */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 relative">
            <svg width={svgSize} height={svgSize} className="overflow-visible">
              {/* Grid lines */}
              {Array.from({ length: maxVal * 2 + 1 }).map((_, idx) => {
                const val = idx - maxVal;
                if (val === 0) return null;
                const pos = center + val * scale;
                return (
                  <g key={val}>
                    {/* Vertical grid line */}
                    <line x1={pos} y1={0} x2={pos} y2={svgSize} stroke="#1e293b" strokeWidth="0.5" />
                    {/* Horizontal grid line */}
                    <line x1={0} y1={pos} x2={svgSize} y2={pos} stroke="#1e293b" strokeWidth="0.5" />
                  </g>
                );
              })}

              {/* X and Y Axis */}
              <line x1={0} y1={center} x2={svgSize} y2={center} stroke="#475569" strokeWidth="1.5" />
              <line x1={center} y1={0} x2={center} y2={svgSize} stroke="#475569" strokeWidth="1.5" />

              {/* Axis labels */}
              <text x={svgSize - 12} y={center - 4} fill="#94a3b8" fontSize="10" fontWeight="bold">Real</text>
              <text x={center + 4} y={12} fill="#94a3b8" fontSize="10" fontWeight="bold">Imag</text>

              {/* Vector z1 (Indigo) */}
              <line x1={center} y1={center} x2={toSvgX(r1)} y2={toSvgY(i1)} stroke="#6366f1" strokeWidth="2.5" markerEnd="url(#arrow-z1)" />
              <circle cx={toSvgX(r1)} cy={toSvgY(i1)} r="4" fill="#6366f1" />

              {/* Vector z2 (Emerald) */}
              <line x1={center} y1={center} x2={toSvgX(r2)} y2={toSvgY(i2)} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-z2)" />
              <circle cx={toSvgX(r2)} cy={toSvgY(i2)} r="4" fill="#10b981" />

              {/* Vector Result (Purple dashed) */}
              <line x1={center} y1={center} x2={toSvgX(resR)} y2={toSvgY(resI)} stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-res)" />
              <circle cx={toSvgX(resR)} cy={toSvgY(resI)} r="4" fill="#a855f7" />

              {/* SVG Markers for Vector Heads */}
              <defs>
                <marker id="arrow-z1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1" />
                </marker>
                <marker id="arrow-z2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                </marker>
                <marker id="arrow-res" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                </marker>
              </defs>
            </svg>

            {/* Vector Legend overlays */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 text-[10px] font-mono">
              <span className="text-indigo-400">z1 = {r1} + {i1}i</span>
              <span className="text-emerald-400">z2 = {r2} + {i2}i</span>
              <span className="text-purple-400 font-bold">zRes = {resR} + {resI}i</span>
            </div>
          </div>
        </div>

        {/* Sliders Control Panel */}
        <div className="lg:col-span-6 space-y-4">
          {/* z1 Sliders */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <span className="text-[10px] text-indigo-400 font-bold block mb-3 font-mono">1. THAM SỐ SỐ PHỨC z1 (Indigo Vector)</span>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Phần thực (a) = {r1}</span>
                  <span className="text-[10px] text-slate-500">Cartesian axis</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  value={r1}
                  onChange={(e) => setR1(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Phần ảo (b) = {i1}</span>
                  <span className="text-[10px] text-slate-500">i^2 = -1</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  value={i1}
                  onChange={(e) => setI1(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>
            {/* Polar notation info */}
            <div className="mt-3 text-[10px] text-slate-500 flex justify-between font-mono pt-2 border-t border-slate-900">
              <span>Độ lớn (mag1) = {mag1}</span>
              <span>Góc xoay (ang1) = {ang1} rad</span>
            </div>
          </div>

          {/* z2 Sliders */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <span className="text-[10px] text-emerald-400 font-bold block mb-3 font-mono">2. THAM SỐ SỐ PHỨC z2 (Emerald Vector)</span>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Phần thực (c) = {r2}</span>
                  <span className="text-[10px] text-slate-500">Cartesian axis</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  value={r2}
                  onChange={(e) => setR2(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Phần ảo (d) = {i2}</span>
                  <span className="text-[10px] text-slate-500">i^2 = -1</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  value={i2}
                  onChange={(e) => setI2(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
            <div className="mt-3 text-[10px] text-slate-500 flex justify-between font-mono pt-2 border-t border-slate-900">
              <span>Độ lớn (mag2) = {mag2}</span>
              <span>Góc xoay (ang2) = {ang2} rad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Math step details on left, Code comparison tabs on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Math details */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
            Bảng tính toán toán học chi tiết
          </span>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-slate-850">
              <span className="text-slate-500">Công thức chung:</span>
              <span className="text-cyan-400 font-bold">{formulaText}</span>
            </div>
            <div className="p-3 rounded bg-slate-900/60 border border-slate-850 leading-relaxed text-slate-350">
              <div className="text-slate-500 mb-1">// Thế số thực tế:</div>
              <div>{substitutionText}</div>
            </div>
          </div>
        </div>

        {/* Code Tabs Cartesian vs Polar */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Khác biệt Cài đặt (Cartesian vs Polar)
            </span>
            <div className="flex bg-slate-900 p-0.5 rounded border border-slate-850 text-[10px] select-none">
              {["Cartesian", "Polar"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCodeTab(tab)}
                  className={`px-2 py-0.5 rounded font-medium ${
                    activeCodeTab === tab ? "bg-sky-600 text-white font-bold" : "text-slate-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto h-28">
            {activeCodeTab === "Cartesian" ? (
              <>
                <span className="text-indigo-400">class CartesianComplex</span> &#123;
                <br />
                &nbsp;&nbsp;private double <span className="text-emerald-400">real</span>, <span className="text-emerald-400">imag</span>;
                <br />
                &nbsp;&nbsp;public double realpart() &#123; return real; &#125;
                <br />
                &nbsp;&nbsp;public double imagpart() &#123; return imag; &#125;
                <br />
                &#125;
              </>
            ) : (
              <>
                <span className="text-indigo-400">class PolarComplex</span> &#123;
                <br />
                &nbsp;&nbsp;private double <span className="text-emerald-400">mag</span>, <span className="text-emerald-400">ang</span>;
                <br />
                &nbsp;&nbsp;public double realpart() &#123; return mag * Math.cos(ang); &#125;
                <br />
                &nbsp;&nbsp;public double imagpart() &#123; return mag * Math.sin(ang); &#125;
                <br />
                &#125;
              </>
            )}
          </div>

          <p className="text-[10px] text-slate-500 italic mt-3 leading-relaxed">
            * **Đúc kết:** Người dùng gọi hàm `.realpart()` mà không cần biết số phức được lưu trữ bằng tọa độ Đề-các (Cartesian) hay tọa độ cực (Polar). ADT tách rời giao diện sử dụng khỏi cách lưu trữ.
          </p>
        </div>
      </div>

      {/* Traps Alert Callout Box */}
      <div className="bg-gradient-to-r from-rose-500/10 to-orange-500/10 border-l-4 border-rose-500 rounded-r-xl p-4 flex gap-3 items-start">
        <AlertOctagon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-rose-400 font-mono uppercase tracking-wider flex items-center gap-1">
            ⚠️ Bẫy Lý Thuyết & Lỗi Logic Phòng Thi (Phép Nhân Số Phức)
          </span>
          <p className="text-xs text-slate-350 mt-2 leading-relaxed">
            Trong Java, nếu bạn cài đặt phép nhân Cartesian mà viết trực tiếp thế này:
          </p>
          <pre className="text-[10px] font-mono text-rose-300 bg-slate-950 p-2.5 rounded border border-rose-950/40 my-2 overflow-x-auto leading-relaxed">
{`public void times(Complex c) {
    real = real * c.realpart() - imag * c.imagpart(); 
    imag = real * c.imagpart() + imag * c.realpart(); // LỖI LOGIC: 'real' ở đây đã bị đổi ở dòng trên!
}`}
          </pre>
          <p className="text-xs text-slate-350 leading-relaxed">
            Để tính chính xác, bắt buộc phải dùng **biến trung gian** để bảo lưu giá trị cũ trước khi gán đè:
          </p>
          <pre className="text-[10px] font-mono text-emerald-300 bg-slate-950 p-2.5 rounded border border-emerald-950/40 my-2 overflow-x-auto leading-relaxed">
{`public void times(Complex c) {
    double tempReal = real * c.realpart() - imag * c.imagpart(); 
    imag = real * c.imagpart() + imag * c.realpart(); // Dùng 'real' cũ của đối tượng hiện tại
    real = tempReal; // Cập nhật 'real' sau cùng
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
