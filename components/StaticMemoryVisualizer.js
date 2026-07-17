"use client";
import React, { useState } from "react";
import { Plus, RotateCcw, Box, HelpCircle } from "lucide-react";

export default function StaticMemoryVisualizer() {
  const [balls, setBalls] = useState([]); // Array of { id, colour, radius, address }
  const [colour, setColour] = useState("blue");
  const [radius, setRadius] = useState(5.0);

  const handleCreateBall = () => {
    if (balls.length >= 3) {
      alert("Hệ thống giả lập giới hạn tối đa 3 đối tượng trên Heap để đảm bảo sơ đồ trực quan dễ nhìn!");
      return;
    }
    const newId = balls.length + 1;
    const address = `0x20${newId}`;
    const newBall = {
      id: newId,
      colour: colour,
      radius: parseFloat(radius),
      address: address
    };
    setBalls((prev) => [...prev, newBall]);
  };

  const handleReset = () => {
    setBalls([]);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            💾 Mô Phỏng Phân Bổ RAM: Biến Static vs Biến Instance
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Tự khởi tạo các quả bóng <code>MyBall</code> để quan sát cách Java lưu trữ dữ liệu static (dùng chung) và dữ liệu thường.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="bg-stone-250 hover:bg-stone-300 text-stone-700 text-xs font-bold px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
        >
          <RotateCcw size={12} />
          <span>Reset RAM</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Control Panel (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-stone-200 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-4">Điều khiển đối tượng</div>
            
            {/* Colour Input */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Màu sắc (colour):</label>
              <div className="flex gap-2">
                {["blue", "yellow", "red", "green"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setColour(c)}
                    className={`w-6 h-6 rounded-full border cursor-pointer transition-transform ${
                      colour === c ? "scale-125 ring-2 ring-amber-500 border-white" : "border-stone-300 opacity-60"
                    }`}
                    style={{ backgroundColor: c === "blue" ? "#3b82f6" : c === "yellow" ? "#eab308" : c === "red" ? "#ef4444" : "#10b981" }}
                    title={c}
                  />
                ))}
              </div>
            </div>

            {/* Radius Input */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Bán kính (radius): <span className="font-mono text-amber-600 font-extrabold">{radius}</span>
              </label>
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.5"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[9px] text-stone-400 mt-1 select-none">
                <span>1.0</span>
                <span>10.0</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleCreateBall}
              className="w-full bg-amber-600 hover:bg-amber-550 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Plus size={14} />
              <span className="font-mono text-[11px]">new MyBall("{colour}", {radius})</span>
            </button>
            
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 mt-4 text-[10px] text-stone-500 leading-relaxed">
              👉 Mỗi lần nhấn nút, lệnh constructor tương đương sẽ được chạy. Bytecode sẽ khởi tạo vùng nhớ cho bóng mới.
            </div>
          </div>
        </div>

        {/* Right Side: Virtual Memory Diagram (8 cols) */}
        <div className="lg:col-span-8 bg-[#151413] border border-stone-850 rounded-2xl p-5 text-stone-300 min-h-[350px] flex flex-col justify-between shadow-md">
          
          <div className="space-y-5">
            {/* Class/Method Area (Static memory) */}
            <div className="border border-amber-600/30 bg-amber-950/[0.04] p-3.5 rounded-xl">
              <div className="flex justify-between items-center mb-2 select-none">
                <span className="text-[9px] text-amber-500 uppercase font-black tracking-wider">Method Area (Vùng nhớ lớp - Static)</span>
                <span className="text-[8px] text-stone-500 font-mono">Dùng chung duy nhất</span>
              </div>
              <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-stone-400">class <strong className="text-stone-200 font-bold">MyBall</strong></span>
                  <div className="text-[10px] text-stone-500 mt-0.5">Biến static đếm đối tượng</div>
                </div>
                <div className="bg-[#1e1d1a] border border-amber-500/40 px-4 py-2 rounded-lg text-center animate-pulse">
                  <div className="text-[8px] text-stone-500 font-bold uppercase font-sans">static quantity</div>
                  <span className="font-mono text-lg font-black text-amber-500">{balls.length}</span>
                </div>
              </div>
            </div>

            {/* Heap vs Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Stack Area */}
              <div className="border border-stone-800 rounded-xl p-3.5 flex flex-col gap-2 min-h-[160px] bg-stone-900/40">
                <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider select-none mb-1">Stack (Các biến tham chiếu)</div>
                {balls.length === 0 ? (
                  <div className="text-center py-8 text-stone-600 text-[10px] italic select-none">Trống (Chưa có tham chiếu nào)</div>
                ) : (
                  balls.map((b) => (
                    <div key={b.id} className="border border-blue-500/40 bg-blue-950/15 p-2 rounded-lg text-xs font-mono flex justify-between items-center animate-in slide-in-from-left duration-250">
                      <div>
                        <span className="text-blue-400 font-bold">myBall{b.id}</span>
                        <span className="text-stone-500 text-[9px] block">Biến tham chiếu</span>
                      </div>
                      <span className="text-amber-500 font-bold text-[10px] bg-stone-950 border border-stone-800 px-2 py-0.5 rounded">➔ {b.address}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Heap Area */}
              <div className="border border-stone-800 rounded-xl p-3.5 flex flex-col gap-3.5 min-h-[160px] bg-stone-900/40">
                <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider select-none mb-1">Heap (Bộ nhớ các đối tượng bóng)</div>
                {balls.length === 0 ? (
                  <div className="text-center py-8 text-stone-600 text-[10px] italic select-none">Trống (Chưa có đối tượng bóng nào được cấp phát)</div>
                ) : (
                  balls.map((b) => (
                    <div key={b.id} className="border border-stone-800 bg-stone-950/70 p-3 rounded-xl text-[11px] relative animate-in zoom-in duration-300">
                      {/* Address indicator */}
                      <span className="absolute top-2 right-2 font-mono text-[9px] text-stone-500 font-bold">{b.address}</span>
                      
                      {/* Mini ball circle preview */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full border border-stone-800 shadow-sm shrink-0"
                          style={{ backgroundColor: b.colour === "blue" ? "#3b82f6" : b.colour === "yellow" ? "#eab308" : b.colour === "red" ? "#ef4444" : "#10b981" }}
                        />
                        <div>
                          <div className="font-mono text-stone-400">MyBall Object #{b.id}</div>
                          <div className="text-stone-500 text-[9px] mt-0.5 leading-relaxed font-sans">
                            colour: <code className="text-stone-300 font-mono font-bold">"{b.colour}"</code> | radius: <code className="text-stone-300 font-mono font-bold">{b.radius}</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>

          </div>

          {/* Educational Note footer */}
          <div className="border-t border-stone-850 pt-3 mt-4 text-[10px] text-stone-500 leading-relaxed flex items-start gap-1.5 select-none">
            <HelpCircle size={12} className="text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong>Nhận xét:</strong> Dù bạn tạo bao nhiêu đối tượng bóng (mỗi đối tượng nằm riêng lẻ ở Heap với <code>colour</code> và <code>radius</code> khác nhau), thì biến <strong><code>quantity</code></strong> tĩnh chỉ có <strong>1 ô nhớ duy nhất</strong> nằm trong Method Area và được tất cả đối tượng chia sẻ chung!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
