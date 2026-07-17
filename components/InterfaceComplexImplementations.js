"use client";
import React, { useState } from "react";
import { ArrowRight, HelpCircle, Layers, Settings, Shuffle } from "lucide-react";

export default function InterfaceComplexImplementations() {
  const [activeOp, setActiveOp] = useState("TIMES"); // "ADD" | "TIMES"
  
  // Input complex numbers (Cartesian)
  const [r1, setR1] = useState(2.0);
  const [i1, setI1] = useState(2.0);
  const [r2, setR2] = useState(1.5);
  const [i2, setI2] = useState(-1.0);

  // Cartesian computation
  let resCartR = 0;
  let resCartI = 0;
  if (activeOp === "ADD") {
    resCartR = r1 + r2;
    resCartI = i1 + i2;
  } else {
    // Multiplication
    resCartR = r1 * r2 - i1 * i2;
    resCartI = r1 * i2 + r2 * i1;
  }

  // Polar representations
  const mag1 = Math.sqrt(r1 * r1 + i1 * i1);
  const ang1 = Math.atan2(i1, r1);
  const mag2 = Math.sqrt(r2 * r2 + i2 * i2);
  const ang2 = Math.atan2(i2, r2);

  // Polar computation
  let resPolarMag = 0;
  let resPolarAng = 0;
  if (activeOp === "ADD") {
    // Add by converting Cartesian sums
    resPolarMag = Math.sqrt(resCartR * resCartR + resCartI * resCartI);
    resPolarAng = Math.atan2(resCartI, resCartR);
  } else {
    // Multiply polar simply: multiply magnitudes, add angles
    resPolarMag = mag1 * mag2;
    resPolarAng = ang1 + ang2;
  }

  // SVG parameters
  const size = 200;
  const scale = size / 10;
  const center = size / 2;
  const toSvgX = (x) => center + x * scale;
  const toSvgY = (y) => center - y * scale;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            Cartesian vs Polar: Hai Cách Cài Đặt Khác Biệt
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            So sánh trực tiếp thuật toán xử lý của Cartesian và Polar dưới cùng một giao thức Interface Complex
          </p>
        </div>

        {/* Operation Selector */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => setActiveOp("ADD")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeOp === "ADD" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Phép Cộng (+)
          </button>
          <button
            onClick={() => setActiveOp("TIMES")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeOp === "TIMES" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Phép Nhân (*)
          </button>
        </div>
      </div>

      {/* SVG vector display in center */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
        <div className="md:col-span-8 space-y-3">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <div>
              <span className="text-[10px] text-indigo-400 font-bold block mb-2 font-mono">SỐ PHỨC z1 (Cartesian / Polar)</span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span>Thực (real1):</span>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={r1}
                    onChange={(e) => setR1(parseFloat(e.target.value))}
                    className="w-24 accent-indigo-500"
                  />
                </div>
                <div className="flex justify-between">
                  <span>Ảo (imag1):</span>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={i1}
                    onChange={(e) => setI1(parseFloat(e.target.value))}
                    className="w-24 accent-indigo-500"
                  />
                </div>
                <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-1 mt-1 flex justify-between">
                  <span>mag = {mag1.toFixed(2)}</span>
                  <span>ang = {ang1.toFixed(2)} rad</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-emerald-400 font-bold block mb-2 font-mono">SỐ PHỨC z2 (Cartesian / Polar)</span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span>Thực (real2):</span>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={r2}
                    onChange={(e) => setR2(parseFloat(e.target.value))}
                    className="w-24 accent-emerald-500"
                  />
                </div>
                <div className="flex justify-between">
                  <span>Ảo (imag2):</span>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={i2}
                    onChange={(e) => setI2(parseFloat(e.target.value))}
                    className="w-24 accent-emerald-500"
                  />
                </div>
                <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-1 mt-1 flex justify-between">
                  <span>mag = {mag2.toFixed(2)}</span>
                  <span>ang = {ang2.toFixed(2)} rad</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG Circle Grid Display */}
        <div className="md:col-span-4 flex justify-center bg-slate-950/60 p-3 rounded-xl border border-slate-850">
          <svg width={size} height={size} className="overflow-visible">
            {/* Axis */}
            <line x1={0} y1={center} x2={size} y2={center} stroke="#334155" strokeWidth="1" />
            <line x1={center} y1={0} x2={center} y2={size} stroke="#334155" strokeWidth="1" />
            
            {/* Vector z1 */}
            <line x1={center} y1={center} x2={toSvgX(r1)} y2={toSvgY(i1)} stroke="#6366f1" strokeWidth="2" />
            
            {/* Vector z2 */}
            <line x1={center} y1={center} x2={toSvgX(r2)} y2={toSvgY(i2)} stroke="#10b981" strokeWidth="2" />

            {/* Vector Result */}
            <line x1={center} y1={center} x2={toSvgX(resCartR)} y2={toSvgY(resCartI)} stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx={toSvgX(resCartR)} cy={toSvgY(resCartI)} r="3" fill="#a855f7" />
          </svg>
        </div>
      </div>

      {/* Code comparisons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ComplexCart */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs font-bold text-indigo-400">ComplexCart implements Complex</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Lưu: real, imag
              </span>
            </div>

            <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto min-h-[140px]">
              {activeOp === "ADD" ? (
                <code className="text-indigo-300">
{`public void add(Complex c) {
    this.real += c.realpart();
    this.imag += c.imagpart();
}`}
                </code>
              ) : (
                <code className="text-indigo-300">
{`public void times(Complex c) {
    double tempReal = real * c.realpart() 
                    - imag * c.imagpart();
    imag = real * c.imagpart() 
         + imag * c.realpart();
    real = tempReal;
}`}
                </code>
              )}
            </pre>
          </div>

          <div className="mt-3 p-3 bg-indigo-950/20 border border-indigo-900/40 rounded-lg text-[10px] text-indigo-300 leading-relaxed font-mono">
            {activeOp === "ADD" 
              ? "* PHÉP CỘNG: Rất đơn giản, chỉ cần cộng trực tiếp phần thực và phần ảo." 
              : "* PHÉP NHÂN: Phức tạp, đòi hỏi khai triển công thức bù 2 và dùng biến tạm tempReal."}
          </div>
        </div>

        {/* ComplexPolar */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs font-bold text-emerald-400">ComplexPolar implements Complex</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Lưu: mag, ang
              </span>
            </div>

            <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto min-h-[140px]">
              {activeOp === "ADD" ? (
                <code className="text-emerald-300">
{`public void add(Complex c) {
    double r = this.realpart() + c.realpart();
    double i = this.imagpart() + c.imagpart();
    mag = Math.sqrt(r*r + i*i);
    ang = Math.atan2(i, r);
}`}
                </code>
              ) : (
                <code className="text-emerald-300">
{`public void times(Complex c) {
    mag *= c.mag();
    ang += c.angle();
}`}
                </code>
              )}
            </pre>
          </div>

          <div className="mt-3 p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-lg text-[10px] text-emerald-300 leading-relaxed font-mono">
            {activeOp === "ADD" 
              ? "* PHÉP CỘNG: Cực kỳ phức tạp! Phải chuyển sang Cartesian để tính, rồi chuyển ngược về Polar." 
              : "* PHÉP NHÂN: Siêu đơn giản! Chỉ cần nhân độ lớn (mag) và cộng góc (ang)."}
          </div>
        </div>
      </div>
    </div>
  );
}
