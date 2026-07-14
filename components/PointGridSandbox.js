"use client";
import React, { useState } from "react";

export default function PointGridSandbox() {
  const [ptX, setPtX] = useState(5);
  const [ptY, setPtY] = useState(4);
  const [isNull, setIsNull] = useState(false); // simulates NullPointerException
  const [consoleLog, setConsoleLog] = useState("Khởi tạo Point pt = new Point(5, 4);");
  const [consoleErr, setConsoleErr] = useState("");
  const [moveX, setMoveX] = useState(3);
  const [moveY, setMoveY] = useState(7);
  const [transX, setTransX] = useState(2);
  const [transY, setTransY] = useState(-1);

  const gridSize = 10; // 0 to 9 coordinates

  const handleGridClick = (x, y) => {
    if (isNull) {
      triggerNpe("pt.move(" + x + ", " + y + ")");
      return;
    }
    setPtX(x);
    setPtY(y);
    setConsoleErr("");
    setConsoleLog(`Lệnh executed: pt.move(${x}, ${y});\npt.getX() = ${x}.0\npt.getY() = ${y}.0`);
  };

  const handleConstructor = (type) => {
    if (type === "empty") {
      setIsNull(false);
      setPtX(0);
      setPtY(0);
      setConsoleErr("");
      setConsoleLog("Lệnh executed: Point pt = new Point(); // Khởi tạo tại tọa độ gốc (0, 0)");
    } else if (type === "param") {
      setIsNull(false);
      setPtX(5);
      setPtY(4);
      setConsoleErr("");
      setConsoleLog("Lệnh executed: Point pt = new Point(5, 4); // Khởi tạo tại (5, 4)");
    } else if (type === "null") {
      setIsNull(true);
      setConsoleErr("");
      setConsoleLog("Lệnh executed: Point pt; // Khai báo tham chiếu nhưng CHƯA khởi tạo (pt = null)");
    }
  };

  const triggerNpe = (methodName) => {
    setConsoleErr(`Exception in thread "main" java.lang.NullPointerException\n  at TestPoint.main(TestPoint.java:12)\n  -> Không thể gọi phương thức ${methodName} vì biến pt đang nhận giá trị null (chưa được cấp phát bộ nhớ bằng từ khóa new)!`);
  };

  const handleMove = () => {
    if (isNull) {
      triggerNpe(`move(${moveX}, ${moveY})`);
      return;
    }
    const cleanX = Math.min(Math.max(0, moveX), gridSize - 1);
    const cleanY = Math.min(Math.max(0, moveY), gridSize - 1);
    setPtX(cleanX);
    setPtY(cleanY);
    setConsoleErr("");
    setConsoleLog(`Lệnh executed: pt.move(${cleanX}, ${cleanY});\npt.getX() = ${cleanX}.0\npt.getY() = ${cleanY}.0`);
  };

  const handleTranslate = () => {
    if (isNull) {
      triggerNpe(`translate(${transX}, ${transY})`);
      return;
    }
    const newX = Math.min(Math.max(0, ptX + transX), gridSize - 1);
    const newY = Math.min(Math.max(0, ptY + transY), gridSize - 1);
    setPtX(newX);
    setPtY(newY);
    setConsoleErr("");
    setConsoleLog(`Lệnh executed: pt.translate(${transX}, ${transY});\nTọa độ mới: (${newX}, ${newY})\npt.getX() = ${newX}.0\npt.getY() = ${newY}.0`);
  };

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🎯 Hộp Cát Lưới Đồ Thị Point (Point Grid Sandbox)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bấm trực tiếp lên các ô của lưới để thay đổi tọa độ Point hoặc gọi các phương thức bên dưới để di chuyển thực thể.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: 2D Grid Visualizer (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between items-center select-none">
          <div className="w-full text-center">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Lưới tọa độ Cartesian 2D (0 - 9)</div>
            
            {/* Grid display */}
            <div className="inline-block border-2 border-stone-950 bg-stone-900 p-2 rounded-2xl shadow-md">
              <div className="flex flex-col gap-1">
                {Array.from({ length: gridSize }).map((_, rIdx) => {
                  const y = gridSize - 1 - rIdx; // invert grid coordinates to match standard y-axis pointing up
                  
                  return (
                    <div key={rIdx} className="flex gap-1">
                      {Array.from({ length: gridSize }).map((_, x) => {
                        const isPointed = !isNull && ptX === x && ptY === y;
                        
                        return (
                          <button
                            key={x}
                            onClick={() => handleGridClick(x, y)}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center font-mono text-[9px] transition-all cursor-pointer ${
                              isPointed
                                ? "bg-amber-500 text-stone-950 border border-amber-300 font-bold scale-110 shadow-md animate-pulse"
                                : "bg-stone-800 text-stone-600 hover:bg-stone-750 hover:text-stone-400 border border-stone-850"
                            }`}
                          >
                            {isPointed ? "📍" : `${x},${y}`}
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="text-[10px] text-stone-400 mt-3 font-sans">
              Trục X chạy ngang từ trái qua phải, Trục Y chạy dọc hướng lên trên.
            </div>
          </div>
        </div>

        {/* Right Side: Code execution, controls & console (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          
          {/* Controls Panel */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm space-y-3.5">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Hành động của Lớp Point</div>
            
            {/* Constructor choices */}
            <div>
              <label className="text-[10px] font-bold text-stone-600 block mb-1">1. Gọi Constructor khởi tạo:</label>
              <div className="flex gap-1.5 flex-wrap">
                <button
                  onClick={() => handleConstructor("param")}
                  className={`flex-1 py-1.5 px-2.5 border rounded-xl text-[10px] font-mono font-bold transition-all cursor-pointer text-center ${
                    !isNull && ptX === 5 && ptY === 4
                      ? "border-amber-500 bg-amber-50/15 text-amber-900"
                      : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                  }`}
                >
                  new Point(5, 4)
                </button>
                <button
                  onClick={() => handleConstructor("empty")}
                  className={`flex-1 py-1.5 px-2.5 border rounded-xl text-[10px] font-mono font-bold transition-all cursor-pointer text-center ${
                    !isNull && ptX === 0 && ptY === 0
                      ? "border-amber-500 bg-amber-50/15 text-amber-900"
                      : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                  }`}
                >
                  new Point()
                </button>
                <button
                  onClick={() => handleConstructor("null")}
                  className={`flex-1 py-1.5 px-2.5 border rounded-xl text-[10px] font-mono font-bold transition-all cursor-pointer text-center ${
                    isNull
                      ? "border-rose-500 bg-rose-50/15 text-rose-900"
                      : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                  }`}
                >
                  pt = null ⚠️
                </button>
              </div>
            </div>

            {/* Move operation */}
            <div className="grid grid-cols-2 gap-3 border-t pt-3">
              <div>
                <label className="text-[10px] font-bold text-stone-600 block mb-1">2. pt.move(x, y):</label>
                <div className="flex gap-1 items-center">
                  <input
                    type="number"
                    value={moveX}
                    onChange={(e) => setMoveX(parseInt(e.target.value) || 0)}
                    className="w-10 px-1 py-1 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800 text-center"
                  />
                  <input
                    type="number"
                    value={moveY}
                    onChange={(e) => setMoveY(parseInt(e.target.value) || 0)}
                    className="w-10 px-1 py-1 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800 text-center"
                  />
                  <button
                    onClick={handleMove}
                    className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-stone-955 font-bold text-[10px] rounded-lg transition-all cursor-pointer"
                  >
                    Go
                  </button>
                </div>
              </div>

              {/* Translate operation */}
              <div>
                <label className="text-[10px] font-bold text-stone-600 block mb-1 font-sans">3. pt.translate(dx, dy):</label>
                <div className="flex gap-1 items-center">
                  <input
                    type="number"
                    value={transX}
                    onChange={(e) => setTransX(parseInt(e.target.value) || 0)}
                    className="w-10 px-1 py-1 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800 text-center"
                  />
                  <input
                    type="number"
                    value={transY}
                    onChange={(e) => setTransY(parseInt(e.target.value) || 0)}
                    className="w-10 px-1 py-1 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800 text-center"
                  />
                  <button
                    onClick={handleTranslate}
                    className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-stone-955 font-bold text-[10px] rounded-lg transition-all cursor-pointer"
                  >
                    Shift
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Simulated Console Log Panel */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs shadow-md flex-1 flex flex-col justify-between min-h-[150px]">
            <div>
              <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 font-sans">Console Output</div>
              {consoleErr ? (
                <pre className="text-rose-400 whitespace-pre-wrap text-[10px] leading-relaxed select-all">
                  {consoleErr}
                </pre>
              ) : (
                <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                  {consoleLog}
                </pre>
              )}
            </div>

            {/* getX gotcha alert */}
            <div className="border-t border-stone-850 mt-3 pt-2 text-[10px] text-stone-500 font-sans leading-relaxed">
              *Lưu ý: Mặc dù tọa độ gốc là kiểu số nguyên <code>int x, y</code>, nhưng các hàm getter <code>pt.getX()</code> và <code>pt.getY()</code> luôn trả về số thực kiểu <strong><code>double</code></strong>.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
