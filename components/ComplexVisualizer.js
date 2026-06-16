"use client";
import React, { useState, useRef, useEffect } from "react";

export default function ComplexVisualizer() {
  const [real, setReal] = useState(3.0);
  const [imag, setImag] = useState(2.0);
  const [isDragging, setIsDragging] = useState(false);
  
  const svgRef = useRef(null);

  // Constants for coordinate mapping
  const width = 300;
  const height = 300;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 25; // 1 unit = 25 pixels (limits: -6 to +6)

  // Convert coordinate to pixel
  const toPixelX = (val) => originX + val * scale;
  const toPixelY = (val) => originY - val * scale; // Y is inverted in SVG

  // Convert pixel to coordinate
  const toCoordX = (px) => (px - originX) / scale;
  const toCoordY = (px) => (originY - px) / scale;

  // Calculate Polar values
  const mag = Math.sqrt(real * real + imag * imag);
  let ang = Math.atan2(imag, real); // Radians [-PI, PI]
  const angDeg = (ang * 180) / Math.PI;

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePositionFromEvent(e);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePositionFromEvent(e);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updatePositionFromEvent = (e) => {
    const svg = svgRef.current;
    if (!svg) return;
    
    const rect = svg.getBoundingClientRect();
    let clientX, clientY;
    
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const xPx = clientX - rect.left;
    const yPx = clientY - rect.top;

    // Convert to grid coords
    let rawX = toCoordX(xPx);
    let rawY = toCoordY(yPx);

    // Bound values between -5.5 and 5.5
    rawX = Math.max(-5.5, Math.min(5.5, rawX));
    rawY = Math.max(-5.5, Math.min(5.5, rawY));

    // Round to 1 decimal place for smooth snapping
    setReal(Math.round(rawX * 10) / 10);
    setImag(Math.round(rawY * 10) / 10);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchend", handleGlobalMouseUp);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mouseup", handleGlobalMouseUp);
        window.removeEventListener("touchend", handleGlobalMouseUp);
      }
    };
  }, []);

  const handleInputChange = (field, val) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      if (field === "real") setReal(Math.max(-5.5, Math.min(5.5, num)));
      if (field === "imag") setImag(Math.max(-5.5, Math.min(5.5, num)));
    }
  };

  const applyPreset = (r, i) => {
    setReal(r);
    setImag(i);
  };

  // Build coordinate grid lines
  const gridLines = [];
  for (let i = -5; i <= 5; i++) {
    if (i !== 0) {
      // Vertical grid lines
      gridLines.push(
        <line
          key={`v-${i}`}
          x1={toPixelX(i)}
          y1={0}
          x2={toPixelX(i)}
          y2={height}
          className="stroke-stone-200"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      );
      // Horizontal grid lines
      gridLines.push(
        <line
          key={`h-${i}`}
          x1={0}
          y1={toPixelY(i)}
          x2={width}
          y2={toPixelY(i)}
          className="stroke-stone-200"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      );
    }
  }

  return (
    <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans select-none">
      <div className="mb-5 border-b border-stone-200 pb-3">
        <div className="flex justify-between items-center">
          <h4 className="text-base font-extrabold text-stone-900">
            Giả lập Số phức động: Mặt phẳng Đề-các vs Cực
          </h4>
          <span className="text-[10px] font-extrabold uppercase tracking-wide bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
            Interactive
          </span>
        </div>
        <p className="text-xs text-stone-500 mt-1">
          Kéo thả chấm đỏ trên hệ tọa độ hoặc chọn Preset để quan sát các góc độ và hệ chuyển đổi của số phức.
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-1.5 mb-5 items-center">
        <span className="text-xs font-bold text-stone-450 mr-1.5 font-sans text-stone-500">Presets:</span>
        <button
          onClick={() => applyPreset(3.0, 2.0)}
          className="px-2.5 py-1 text-xs border border-stone-200 rounded-lg bg-white hover:bg-stone-50 text-stone-700 cursor-pointer font-semibold"
        >
          3 + 2i
        </button>
        <button
          onClick={() => applyPreset(-2.0, 4.0)}
          className="px-2.5 py-1 text-xs border border-stone-200 rounded-lg bg-white hover:bg-stone-50 text-stone-700 cursor-pointer font-semibold"
        >
          -2 + 4i
        </button>
        <button
          onClick={() => applyPreset(-3.0, -3.0)}
          className="px-2.5 py-1 text-xs border border-stone-200 rounded-lg bg-white hover:bg-stone-50 text-stone-700 cursor-pointer font-semibold"
        >
          -3 - 3i
        </button>
        <button
          onClick={() => applyPreset(0, -4.0)}
          className="px-2.5 py-1 text-xs border border-stone-200 rounded-lg bg-white hover:bg-stone-50 text-stone-700 cursor-pointer font-semibold"
        >
          -4i (Thuần ảo)
        </button>
        <button
          onClick={() => applyPreset(4.0, 0)}
          className="px-2.5 py-1 text-xs border border-stone-200 rounded-lg bg-white hover:bg-stone-50 text-stone-700 cursor-pointer font-semibold"
        >
          4 (Thuần thực)
        </button>
      </div>

      {/* Main visual Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Drag Grid SVG */}
        <div className="lg:col-span-5 flex justify-center items-center bg-white border border-stone-200 rounded-xl p-4 shadow-inner">
          <svg
            ref={svgRef}
            width={width}
            height={height}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="cursor-crosshair overflow-visible touch-none"
            style={{ userSelect: "none" }}
          >
            {/* Grid line groups */}
            {gridLines}

            {/* X Axis */}
            <line
              x1={0}
              y1={originY}
              x2={width}
              y2={originY}
              className="stroke-stone-400"
              strokeWidth="1.5"
            />
            {/* Y Axis */}
            <line
              x1={originX}
              y1={0}
              x2={originX}
              y2={height}
              className="stroke-stone-400"
              strokeWidth="1.5"
            />

            {/* X Axis Arrows */}
            <polygon points={`${width},${originY} ${width-6},${originY-3.5} ${width-6},${originY+3.5}`} className="fill-stone-500" />
            {/* Y Axis Arrows */}
            <polygon points={`${originX},0 ${originX-3.5},6 ${originX+3.5},6`} className="fill-stone-500" />

            {/* Axis labels */}
            <text x={width - 40} y={originY + 14} className="fill-stone-550 font-serif italic text-[10px] font-bold">Real (Re)</text>
            <text x={originX + 8} y={12} className="fill-stone-550 font-serif italic text-[10px] font-bold">Imag (Im)</text>

            {/* Scale Markings */}
            <text x={toPixelX(1)} y={originY + 12} className="fill-stone-400 text-[8px] text-center" textAnchor="middle">1</text>
            <text x={toPixelX(-1)} y={originY + 12} className="fill-stone-400 text-[8px] text-center" textAnchor="middle">-1</text>
            <text x={originX - 10} y={toPixelY(1)} className="fill-stone-400 text-[8px]" dominantBaseline="middle">1i</text>
            <text x={originX - 12} y={toPixelY(-1)} className="fill-stone-400 text-[8px]" dominantBaseline="middle">-1i</text>

            {/* Vector from origin to (real, imag) */}
            <line
              x1={originX}
              y1={originY}
              x2={toPixelX(real)}
              y2={toPixelY(imag)}
              className="stroke-purple-600"
              strokeWidth="2.5"
            />

            {/* Dashed guidelines for Cartesian (Re / Im) */}
            <line
              x1={toPixelX(real)}
              y1={toPixelY(imag)}
              x2={toPixelX(real)}
              y2={originY}
              className="stroke-stone-400/50"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1={toPixelX(real)}
              y1={toPixelY(imag)}
              x2={originX}
              y2={toPixelY(imag)}
              className="stroke-stone-400/50"
              strokeWidth="1"
              strokeDasharray="3,3"
            />

            {/* Angle arc representation */}
            {mag > 0.5 && (
              <path
                d={`M ${originX + 20} ${originY} A 20 20 0 0 ${ang < 0 ? 1 : 0} ${originX + 20 * Math.cos(ang)} ${originY - 20 * Math.sin(ang)}`}
                fill="none"
                className="stroke-amber-500"
                strokeWidth="1.5"
              />
            )}

            {/* Interactive vector pointer (Target dot) */}
            <circle
              cx={toPixelX(real)}
              cy={toPixelY(imag)}
              r="6"
              className="fill-red-500 stroke-white cursor-pointer hover:scale-125 transition-transform"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Right: Cartesian vs Polar details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Cartesian Card */}
            <div className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-stone-500 bg-stone-105 px-2 py-0.5 rounded">
                  Hệ tọa độ Đề-các (Cartesian)
                </span>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-550 font-semibold text-stone-600">Phần thực (Real - a):</span>
                    <input
                      type="number"
                      step="0.1"
                      value={real}
                      onChange={(e) => handleInputChange("real", e.target.value)}
                      className="w-16 bg-stone-50 border border-stone-200 text-center font-mono font-bold text-stone-850 py-0.5 px-1 rounded outline-none"
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-550 font-semibold text-stone-600">Phần ảo (Imag - b):</span>
                    <input
                      type="number"
                      step="0.1"
                      value={imag}
                      onChange={(e) => handleInputChange("imag", e.target.value)}
                      className="w-16 bg-stone-50 border border-stone-200 text-center font-mono font-bold text-stone-850 py-0.5 px-1 rounded outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-stone-100 pt-3 mt-4">
                <span className="text-[10px] text-stone-400 font-bold font-mono">Công thức: z = a + bi</span>
                <div className="text-base font-black font-mono text-purple-600 mt-0.5">
                  {real} {imag >= 0 ? "+" : "-"} {Math.abs(imag)}i
                </div>
              </div>
            </div>

            {/* Polar Card */}
            <div className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-stone-500 bg-stone-105 px-2 py-0.5 rounded">
                  Hệ tọa độ Cực (Polar)
                </span>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-550 font-semibold text-stone-600">Độ dài (Magnitude - r):</span>
                    <span className="font-mono font-bold text-stone-800">{mag.toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-550 font-semibold text-stone-600">Góc (Angle - θ):</span>
                    <span className="font-mono font-bold text-stone-800">
                      {ang.toFixed(3)} rad ({angDeg.toFixed(1)}°)
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-stone-100 pt-3 mt-4">
                <span className="text-[10px] text-stone-400 font-bold font-mono">Công thức: z = r∠θ</span>
                <div className="text-sm font-black font-mono text-amber-600 mt-0.5 truncate" title={`${mag.toFixed(2)} * (cos(${ang.toFixed(2)}) + i sin(${ang.toFixed(2)}))`}>
                  {mag.toFixed(2)}∠{ang.toFixed(2)} rad
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical relationship mapping box */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 mt-4 text-[#eae6db] text-xs font-mono">
            <div className="text-amber-500 font-bold mb-1.5 uppercase text-[9px] tracking-widest">
              Liên Hệ Chuyển Đổi Thuật Toán
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-300 leading-normal text-[11px]">
              <div>
                <div className="text-white font-semibold mb-1">Đề-các → Cực:</div>
                <div>r = √({real}² + ({imag})²) = <span className="text-amber-400">{mag.toFixed(3)}</span></div>
                <div>θ = atan2({imag}, {real}) = <span className="text-amber-400">{ang.toFixed(3)}</span> rad</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Cực → Đề-các:</div>
                <div>a = {mag.toFixed(2)} * cos({ang.toFixed(2)}) = <span className="text-amber-400">{real}</span></div>
                <div>b = {mag.toFixed(2)} * sin({ang.toFixed(2)}) = <span className="text-amber-400">{imag}</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
