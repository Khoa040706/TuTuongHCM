"use client";
import React, { useState } from "react";
import { Compass, Code, CheckCircle2 } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function ComplexNumberPlane() {
  const [real, setReal] = useState(2);
  const [imag, setImag] = useState(1);
  const [activeTab, setActiveTab] = useState("cartesian");

  const mag = Math.sqrt(real * real + imag * imag);
  const angRad = Math.atan2(imag, real);
  const angDeg = (angRad * 180) / Math.PI;

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              TRỰC QUAN HÓA SỐ PHỨC (COMPLEX ADT)
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Biểu diễn 2D: Cartesian (Đề các) ↔ Polar (Cực)
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Một ADT (Complex) có cùng tập phép toán nhưng có thể có **nhiều cài đặt khác nhau** (Cartesian vs Polar) mà người dùng không cần thay đổi cách sử dụng.
          </p>
        </div>

        {/* Implementation switcher tabs */}
        <div className="flex bg-purple-50 p-1 rounded-lg border border-purple-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("cartesian")}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "cartesian"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-purple-700 hover:text-purple-900"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Implementation #1: Cartesian (a + bi)</span>
          </button>
          <button
            onClick={() => setActiveTab("polar")}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "polar"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-purple-700 hover:text-purple-900"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Implementation #2: Polar (mag, ang)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Interactive 2D Graph & Controls */}
        <div className="lg:col-span-6 bg-purple-50/40 border border-purple-100 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider font-mono">
                Mặt phẳng số phức 2D (Complex Plane)
              </span>
              <span className="text-xs font-mono text-purple-700 font-bold">
                z = {real} {imag >= 0 ? `+ ${imag}i` : `- ${Math.abs(imag)}i`}
              </span>
            </div>

            {/* SVG 2D Vector Graph */}
            <div className="w-full h-52 bg-white rounded-xl border border-purple-100 relative flex items-center justify-center overflow-hidden mb-4 select-none shadow-sm">
              <svg width="280" height="180" viewBox="-140 -90 280 180" className="overflow-visible">
                {/* Grid Lines */}
                <line x1="-130" y1="0" x2="130" y2="0" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="0" y1="-80" x2="0" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
                
                {/* Axis Arrowheads */}
                <path d="M 125 -4 L 133 0 L 125 4 Z" fill="#64748b" />
                <path d="M -4 -75 L 0 -83 L 4 -75 Z" fill="#64748b" />
                
                <text x="120" y="15" fill="#64748b" fontSize="10" fontFamily="monospace">Real (Thực)</text>
                <text x="10" y="-70" fill="#64748b" fontSize="10" fontFamily="monospace">Imag (Ảo)</text>

                {/* Vector calculation (scale x20 for visual clarity) */}
                {(() => {
                  const scale = 25;
                  const vx = real * scale;
                  const vy = -imag * scale;
                  return (
                    <>
                      {/* Projection dashed lines */}
                      <line x1={vx} y1="0" x2={vx} y2={vy} stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="0" y1={vy} x2={vx} y2={vy} stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />

                      {/* Vector line */}
                      <line x1="0" y1="0" x2={vx} y2={vy} stroke="#7c3aed" strokeWidth="2.5" />

                      {/* Vector endpoint circle */}
                      <circle cx={vx} cy={vy} r="5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Vector Label */}
                      <text x={vx + 8} y={vy - 5} fill="#5b21b6" fontSize="11" fontWeight="bold">
                        ({real}, {imag})
                      </text>
                    </>
                  );
                })()}
              </svg>
            </div>

            {/* Sliders for Real and Imag */}
            <div className="space-y-3 bg-white p-3 rounded-lg border border-purple-100 shadow-sm">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600">Phần thực (Real part - a):</span>
                  <span className="font-mono font-bold text-purple-700">{real}</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="1"
                  value={real}
                  onChange={(e) => setReal(parseFloat(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600">Phần ảo (Imaginary part - b):</span>
                  <span className="font-mono font-bold text-indigo-700">{imag}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="1"
                  value={imag}
                  onChange={(e) => setImag(parseFloat(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Mathematical Conversions Box */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 bg-white border border-purple-100 rounded-lg shadow-sm">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Độ lớn Vector (Magnitude):</span>
              <span className="font-mono text-purple-700 font-bold text-sm">
                mag = {mag.toFixed(3)}
              </span>
              <span className="text-[9px] text-slate-400 block mt-0.5">√(a² + b²) = √({real}² + {imag}²)</span>
            </div>

            <div className="p-3 bg-white border border-purple-100 rounded-lg shadow-sm">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Góc Vector (Angle θ):</span>
              <span className="font-mono text-indigo-700 font-bold text-sm">
                ang = {angRad.toFixed(3)} rad ({angDeg.toFixed(1)}°)
              </span>
              <span className="text-[9px] text-slate-400 block mt-0.5">tan⁻¹({imag}/{real})</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Code Implementation Comparison */}
        <div className="lg:col-span-6 bg-purple-50/40 border border-purple-100 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider font-mono">
                {activeTab === "cartesian" ? "Cartesian Implementation (Tọa độ Đề các)" : "Polar Implementation (Tọa độ Cực)"}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-purple-700 border border-purple-200 shadow-sm">
                {activeTab === "cartesian" ? "private double real, imag;" : "private double mag, ang;"}
              </span>
            </div>

            {activeTab === "cartesian" ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lưu trữ trực tiếp 2 biến thành phần <code className="text-purple-700">real</code> và <code className="text-purple-700">imag</code>. Phép cộng và trừ được tính toán cực kỳ đơn giản:
                </p>
                {(() => {
                  const cartCode = `// Implementation #1: Cartesian
private double real;
private double imag;

// MUTATOR: add(Complex c)
public void add(Complex c) {
    real += c.realpart();
    imag += c.imagpart();
}`;
                  return (
                    <div className="bg-[#1e1e1e] p-3 rounded-lg border border-[#2d2d2d] font-mono text-[11px] text-[#d4d4d4] overflow-x-auto leading-relaxed">
                      <pre><code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(cartCode) }} /></pre>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lưu trữ góc xoay <code className="text-indigo-700">ang</code> và bán kính <code className="text-indigo-700">mag</code>. Phép nhân số phức <code className="text-indigo-700">times(c)</code> trở nên cực kỳ tối ưu (chỉ cần cộng góc và nhân bán kính):
                </p>
                {(() => {
                  const polarCode = `// Implementation #2: Polar
private double ang; // Angle
private double mag; // Magnitude

// MUTATOR: times(Complex c)
public void times(Complex c) {
    ang += c.angle();
    mag *= c.mag();
}`;
                  return (
                    <div className="bg-[#1e1e1e] p-3 rounded-lg border border-[#2d2d2d] font-mono text-[11px] text-[#d4d4d4] overflow-x-auto leading-relaxed">
                      <pre><code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(polarCode) }} /></pre>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-white border border-purple-100 rounded-lg text-[11px] text-slate-700 leading-relaxed flex items-start gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>KẾT LUẬN QUAN TRỌNG:</strong> Người dùng gọi <code className="text-purple-700 font-bold">c.add(d)</code> hay <code className="text-indigo-700 font-bold">c.times(d)</code> không cần quan tâm lớp <code className="text-slate-900 font-bold">Complex</code> bên trong được cài đặt theo dạng Cartesian hay Polar. Bản đặc tả ADT đã cô lập hoàn toàn cấu trúc dữ liệu bên trong!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
