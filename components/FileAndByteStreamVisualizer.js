"use client";
import React, { useState } from "react";
import { Play, RotateCcw, AlertTriangle, ArrowRight, Database, HelpCircle } from "lucide-react";

export default function FileAndByteStreamVisualizer() {
  // Part A: FileInputStream Simulator
  const fileContent = "public class Client { }";
  const [fisIndex, setFisIndex] = useState(0);
  const [fisConsole, setFisConsole] = useState([]);
  const [fisFinished, setFisFinished] = useState(false);

  const handleFisRead = () => {
    if (fisIndex >= fileContent.length) {
      if (!fisFinished) {
        setFisConsole(prev => [...prev, "intest.read() ➔ -1 (Hết tệp)"]);
        setFisFinished(true);
      }
      return;
    }
    const char = fileContent[fisIndex];
    const byteVal = char.charCodeAt(0);
    setFisConsole(prev => [
      ...prev,
      `intest.read() ➔ int: ${byteVal} | Ép kiểu (char): '${char}'`
    ]);
    setFisIndex(prev => prev + 1);
  };

  const handleFisReset = () => {
    setFisIndex(0);
    setFisConsole([]);
    setFisFinished(false);
  };

  // Part B: ByteArrayInputStream Simulator
  const [rawText, setRawText] = useState("JVM");
  const byteData = Array.from(rawText).map(c => c.charCodeAt(0));
  
  const [baisPos, setBaisPos] = useState(0);
  const [baisMark, setBaisMark] = useState(0);
  const [baisLogs, setBaisLogs] = useState(["ByteArrayInputStream initialized."]);

  const handleBaisRead = () => {
    if (baisPos >= byteData.length) {
      setBaisLogs(prev => [...prev, "read() ➔ -1 (EOF reached)"]);
      return;
    }
    const val = byteData[baisPos];
    setBaisLogs(prev => [
      ...prev,
      `read() ➔ byte: ${val} ('${String.fromCharCode(val)}'). Con trỏ pos tăng lên ${baisPos + 1}`
    ]);
    setBaisPos(prev => prev + 1);
  };

  const handleBaisSkip = () => {
    if (baisPos + 1 >= byteData.length) {
      setBaisLogs(prev => [...prev, "skip(1) ➔ Cannot skip beyond length."]);
      return;
    }
    setBaisPos(prev => prev + 1);
    setBaisLogs(prev => [...prev, `skip(1) ➔ Con trỏ pos di chuyển tới ${baisPos + 1}`]);
  };

  const handleBaisMark = () => {
    setBaisMark(baisPos);
    setBaisLogs(prev => [...prev, `mark() ➔ Đánh dấu vị trí hiện tại (mark = ${baisPos})`]);
  };

  const handleBaisReset = () => {
    setBaisPos(baisMark);
    setBaisLogs(prev => [...prev, `reset() ➔ Quay lại vị trí đã đánh dấu (pos = ${baisMark})`]);
  };

  const handleBaisRestart = () => {
    setBaisPos(0);
    setBaisMark(0);
    setBaisLogs(["ByteArrayInputStream re-initialized."]);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* PART A: FileInputStream Simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Database className="w-5 h-5 text-sky-600" />
          <span>Mục X: Trình giả lập đọc tệp của lớp FileInputStream</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Thử nhấp từng bước phương thức <code>read()</code> để thấy cách con trỏ di chuyển qua các ký tự của tệp tin Client.java và cơ chế dừng lại khi hết tệp (-1).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          {/* File contents visualizer */}
          <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nội dung tệp ảo (D:/resources/Client.java)
              </span>

              <div className="flex flex-wrap gap-1">
                {Array.from(fileContent).map((char, idx) => {
                  const isCurrent = idx === fisIndex;
                  const isPassed = idx < fisIndex;
                  return (
                    <span
                      key={idx}
                      className={`w-5 h-6 flex items-center justify-center text-xs font-mono font-bold rounded transition-colors ${
                        isCurrent
                          ? "bg-sky-600 text-white animate-pulse"
                          : isPassed
                          ? "bg-sky-100 text-sky-850"
                          : "bg-white border border-stone-150 text-stone-700"
                      }`}
                    >
                      {char === " " ? "␣" : char}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleFisRead}
                disabled={fisFinished}
                className={`px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer select-none flex items-center gap-1.5 ${
                  fisFinished ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                read()
              </button>
              <button
                onClick={handleFisReset}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console output display */}
          <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
              Console Output & Log JVM
            </span>

            <div className="flex-1 p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] text-sky-400 space-y-1 overflow-y-auto max-h-[140px] min-h-[100px]">
              {fisConsole.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              {fisConsole.length === 0 && (
                <div className="text-stone-500 italic">Nhấn nút read() để bắt đầu đọc tệp...</div>
              )}
            </div>
          </div>
        </div>

        {/* Warning badge */}
        <div className="bg-rose-50 border border-rose-150 rounded-2xl p-4 flex gap-3 items-start mt-4 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-rose-900 font-mono uppercase tracking-wider block">
              ⚠️ Điểm bẫy thi của FileInputStream
            </span>
            <p className="text-xs text-rose-700 mt-1 leading-relaxed">
              Mặc dù kế thừa từ lớp <code>InputStream</code> cơ sở, nhưng <code>FileInputStream</code> <strong>KHÔNG hỗ trợ</strong> hai phương thức <code>mark()</code> và <code>reset()</code>. Nếu cố tình gọi <code>reset()</code> trên đối tượng FileInputStream, JVM sẽ ném ra ngoại lệ <code>IOException</code>.
            </p>
          </div>
        </div>
      </div>

      {/* PART B: ByteArrayInputStream Memory Simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Database className="w-5 h-5 text-sky-600" />
          <span>Mục XI: Trình mô phỏng ByteArrayInputStream trong bộ nhớ RAM</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          ByteArrayInputStream đọc trực tiếp từ mảng byte trong RAM thay vì đọc file vật lý từ đĩa cứng. Đặt chuỗi nguồn để xem vị trí của các con trỏ pos và mark.
        </p>

        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60 shadow-inner mb-6 flex gap-4 items-center">
          <div>
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Nhập chuỗi nguồn dữ liệu (RAM source):</label>
            <input
              type="text"
              value={rawText}
              maxLength={10}
              onChange={(e) => {
                setRawText(e.target.value);
                setBaisPos(0);
                setBaisMark(0);
                setBaisLogs(["ByteArrayInputStream re-initialized."]);
              }}
              className="bg-white border border-stone-200 rounded-lg px-2.5 py-1 text-xs text-stone-855 focus:outline-none focus:border-sky-500 transition-colors shadow-sm font-semibold max-w-[150px]"
            />
          </div>
        </div>

        {/* Memory visualization blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner space-y-6">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Mảng byte ảo trong RAM (byte[] buf)
              </span>

              <div className="flex gap-2 justify-center">
                {byteData.map((val, idx) => {
                  const isPos = idx === baisPos;
                  const isMark = idx === baisMark;
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-10 h-10 flex flex-col items-center justify-center border rounded-lg text-xs font-mono font-bold transition-all shadow-sm ${
                        isPos
                          ? "bg-sky-600 border-sky-600 text-white scale-105"
                          : "bg-white border-stone-200 text-stone-700"
                      }`}>
                        <span className="text-[9px] text-stone-400 font-normal">{String.fromCharCode(val)}</span>
                        <span>{val}</span>
                      </div>
                      
                      {/* Pointers indicator below */}
                      <div className="mt-2 space-y-0.5 text-[8.5px] font-mono text-center">
                        {isPos && <span className="block text-sky-600 font-bold">pos</span>}
                        {isMark && <span className="block text-emerald-600 font-bold">mark</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RAM Stream method controls */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-200">
              <button
                onClick={handleBaisRead}
                className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-[10px] rounded-lg shadow transition-all cursor-pointer"
              >
                read()
              </button>
              <button
                onClick={handleBaisSkip}
                className="px-3 py-1.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-[10px] rounded-lg shadow transition-all cursor-pointer"
              >
                skip(1)
              </button>
              <button
                onClick={handleBaisMark}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] rounded-lg shadow transition-all cursor-pointer"
              >
                mark()
              </button>
              <button
                onClick={handleBaisReset}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] rounded-lg shadow transition-all cursor-pointer"
              >
                reset()
              </button>
              <button
                onClick={handleBaisRestart}
                className="p-1.5 bg-stone-100 hover:bg-stone-250 text-stone-600 rounded-lg border border-stone-200/60 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Memory Visualizer logs */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
              Trạng thái các biến Protected & Trình chạy trong bộ nhớ
            </span>

            <div className="flex-1 p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] text-sky-400 space-y-1 overflow-y-auto max-h-[140px] min-h-[100px]">
              {baisLogs.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* PART C: Cheat Sheet tổng kết */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
        🧠 Cheat Sheet Tổng Kết Kiến Thức (Mục IX - XI)
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">1. InputStream Methods</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">IX</span>
          </div>
          <ul className="text-xs text-stone-650 space-y-2.5 leading-relaxed font-medium">
            <li>• <code>read()</code> là abstract method, mọi lớp con bắt buộc phải ghi đè.</li>
            <li>• <code>mark()</code> và <code>reset()</code> bắt buộc phải kết hợp hoạt động cùng nhau.</li>
          </ul>
        </div>

        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">2. FileInputStream</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">X</span>
          </div>
          <ul className="text-xs text-stone-650 space-y-2.5 leading-relaxed font-medium">
            <li>• **KHÔNG** hỗ trợ <code>mark()</code> / <code>reset()</code>.</li>
            <li>• Khi khởi tạo đối tượng FileInputStream, tệp sẽ được mở để đọc ngay lập tức.</li>
          </ul>
        </div>

        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">3. ByteArrayInputStream</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">XI</span>
          </div>
          <ul className="text-xs text-stone-650 space-y-2.5 leading-relaxed font-medium">
            <li>• Đọc trực tiếp từ một mảng byte trong bộ nhớ đệm RAM mà không cần file vật lý.</li>
            <li>• Chứa các trường protected nội bộ: <code>buf</code>, <code>pos</code>, <code>mark</code>, <code>count</code>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
