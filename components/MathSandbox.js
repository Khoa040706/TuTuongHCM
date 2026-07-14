"use client";
import React, { useState } from "react";

export default function MathSandbox() {
  const [valA, setValA] = useState(5.0);
  const [valB, setValB] = useState(2.0);
  const [randomVal, setRandomVal] = useState(Math.random());

  const handleGenerateRandom = () => {
    setRandomVal(Math.random());
  };

  // Safe Math helper calculations
  const powRes = Math.pow(valA, valB).toFixed(2);
  const maxRes = Math.max(valA, valB);
  const minRes = Math.min(valA, valB);
  const sqrtRes = valA >= 0 ? Math.sqrt(valA).toFixed(3) : "NaN (Số âm ❌)";
  const absRes = Math.abs(valA);
  const ceilRes = Math.ceil(valA);
  const floorRes = Math.floor(valA);

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🧮 Trình Thực Nghiệm Lớp Math (Math Sandbox)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Thay đổi giá trị a và b ở bảng trái để theo dõi kết quả trả về của các phương thức tĩnh lớp Math ở bảng phải.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Input Configuration (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-4">Cấu hình tham số đầu vào</div>
            
            <div className="space-y-4">
              {/* Parameter a */}
              <div>
                <label className="text-xs font-bold text-stone-750 block mb-1.5 font-mono">Tham số a (double):</label>
                <input
                  type="number"
                  step="0.5"
                  value={valA}
                  onChange={(e) => setValA(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-805"
                />
              </div>

              {/* Parameter b */}
              <div>
                <label className="text-xs font-bold text-stone-750 block mb-1.5 font-mono">Tham số b (double):</label>
                <input
                  type="number"
                  step="0.5"
                  value={valB}
                  onChange={(e) => setValB(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-805"
                />
              </div>
            </div>
          </div>

          {/* Quick info alert */}
          <div className="bg-amber-50/20 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-700 mt-6 shadow-inner">
            <strong>💡 Ghi nhớ khi đi thi:</strong><br/>
            Các phương thức trong lớp <code>Math</code> đều là các phương thức tĩnh (<strong>class methods / static methods</strong>). 
            Do đó, bạn phải gọi trực tiếp qua tên lớp: <code>Math.pow(...)</code> chứ không tạo đối tượng <code>new Math()</code>.
          </div>

        </div>

        {/* Right Output Panel (8 cols) */}
        <div className="lg:col-span-8 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-white font-mono text-xs shadow-md">
          
          <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-4 font-sans flex justify-between items-center">
            <span>Danh Sách Lệnh Gọi & Giá Trị Trả Về</span>
            <span className="text-emerald-450 font-mono text-[10px]">Console output</span>
          </div>

          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            
            {/* Math.pow */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.pow({valA}, {valB});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Tính lũy thừa a mũ b ({valA}^{valB}).</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{powRes}</div>
            </div>

            {/* Math.max */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.max({valA}, {valB});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Trả về số lớn nhất giữa a và b.</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{maxRes}</div>
            </div>

            {/* Math.min */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.min({valA}, {valB});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Trả về số nhỏ nhất giữa a và b.</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{minRes}</div>
            </div>

            {/* Math.sqrt */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.sqrt({valA});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Tính căn bậc hai của tham số a.</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{sqrtRes}</div>
            </div>

            {/* Math.abs */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.abs({valA});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Tính giá trị tuyệt đối của tham số a.</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{absRes}</div>
            </div>

            {/* Math.ceil */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.ceil({valA});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Làm tròn lên số nguyên gần nhất (trả về kiểu double).</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{ceilRes}.0</div>
            </div>

            {/* Math.floor */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.floor({valA});</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">Làm tròn xuống số nguyên gần nhất (trả về kiểu double).</div>
              </div>
              <div className="text-amber-300 font-bold shrink-0">{floorRes}.0</div>
            </div>

            {/* Math.random */}
            <div className="bg-[#151413] border border-stone-850 p-2.5 rounded-xl flex justify-between items-center gap-3">
              <div className="flex-1">
                <div className="text-[#34d399] font-bold">Math.random();</div>
                <div className="text-stone-500 font-sans text-[10px] mt-0.5">
                  Sinh số thực ngẫu nhiên trong khoảng [0.0, 1.0).
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleGenerateRandom}
                  className="px-2 py-1 bg-amber-500 hover:bg-amber-600 text-[#151413] font-sans font-bold text-[9px] rounded-lg transition-all cursor-pointer shrink-0 uppercase tracking-wider"
                >
                  🎲 Roll
                </button>
                <div className="text-amber-300 font-bold font-mono text-[11px] min-w-[70px] text-right">
                  {randomVal.toFixed(6)}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
