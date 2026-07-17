"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ArrowRight, Database, Cpu, Info, Keyboard, Terminal } from "lucide-react";

export default function CharacterStreamVisualizer() {
  const [activeTab, setActiveTab] = useState("comparison");

  // Tab 1: Byte vs Char comparison
  const [unicodeInput, setUnicodeInput] = useState("Học OOP");
  
  // Tab 2: PrintWriter Echo States
  const [echoInput, setEchoInput] = useState("Hi");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [autoFlush, setAutoFlush] = useState(true);
  const [echoLogs, setEchoLogs] = useState(["PrintWriter ready. Console awaiting input..."]);

  // Calculate bytes (UTF-8 representation) for comparison
  const getUTF8Bytes = (str) => {
    const encoder = new TextEncoder();
    return Array.from(encoder.encode(str));
  };

  const utf8Bytes = getUTF8Bytes(unicodeInput);

  // Calculate chars (UTF-16 representation) for comparison
  const getChars = (str) => {
    return Array.from(str);
  };

  const chars = getChars(unicodeInput);

  // PrintWriter simulation
  const handleEcho = () => {
    if (!echoInput) return;
    const logs = [];
    const charArray = Array.from(echoInput);

    logs.push(`⌨️ [Keyboard] Đã nhập chuỗi: "${echoInput}"`);
    
    // Convert to bytes (System.in)
    const encoder = new TextEncoder();
    const bytes = Array.from(encoder.encode(echoInput));
    logs.push(`➔ [System.in] Truyền tải dưới dạng Byte Stream: [${bytes.join(", ")}]`);

    // InputStreamReader converts bytes to chars
    logs.push(`➔ [InputStreamReader] Chuyển đổi (decode) mảng bytes về dạng luồng ký tự: [${charArray.map(c => `'${c}'`).join(", ")}]`);

    // PrintWriter processes and appends "echo "
    const outputString = `echo ${echoInput}`;
    logs.push(`➔ [PrintWriter.println()] Bọc và định dạng chuỗi xuất: "${outputString}"`);

    // OutputStreamWriter encodes chars to bytes
    const outputBytes = Array.from(encoder.encode(outputString));
    if (autoFlush) {
      logs.push(`➔ [OutputStreamWriter] Mã hóa (encode) ký tự thành bytes và xả đệm (autoFlush): [${outputBytes.join(", ")}]`);
      setConsoleOutput(prev => [...prev, outputString]);
    } else {
      logs.push(`⚠️ [Buffered/Writer] autoFlush=false: Dữ liệu vẫn còn lưu trong buffer của Writer, chưa ghi ra Console.`);
    }

    setEchoLogs(prev => [...prev, ...logs, "---"]);
    setEchoInput("");
  };

  const handleFlushWriter = () => {
    if (echoLogs.length <= 1) return;
    setConsoleOutput(prev => {
      // Find the last echo that hasn't been printed yet
      // For this visual simulation, we just pull from input logs
      return [...prev, "echo (flushed)"];
    });
    setEchoLogs(prev => [...prev, "➔ [PrintWriter.flush()] Thực thi lệnh xả đệm thủ công. Xuất dữ liệu ra Console.", "---"]);
  };

  const handleResetEcho = () => {
    setConsoleOutput([]);
    setEchoLogs(["PrintWriter re-initialized. Console cleared."]);
    setEchoInput("Hi");
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-amber-650" />
            <span>Mục XVIII - XIX: Trình trực quan luồng ký tự (Character Streams)</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            So sánh cơ chế xử lý văn bản đa ngôn ngữ (Unicode) của Character Stream so với Byte Stream.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("comparison")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "comparison" ? "bg-white text-amber-650 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            Byte vs Character
          </button>
          <button
            onClick={() => setActiveTab("echo")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "echo" ? "bg-white text-amber-650 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            PrintWriter Echo Demo
          </button>
        </div>
      </div>

      {/* Tab 1: Byte vs Character Comparison */}
      {activeTab === "comparison" && (
        <div className="space-y-6">
          <div className="p-4 bg-stone-50/60 rounded-2xl border border-stone-200/80 space-y-4">
            <div>
              <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                Nhập chuỗi văn bản (Thử nhập tiếng Việt hoặc Unicode):
              </label>
              <input
                type="text"
                value={unicodeInput}
                onChange={(e) => setUnicodeInput(e.target.value)}
                className="w-full max-w-md px-3 py-2 bg-white border border-stone-200 rounded-xl font-mono text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Byte Stream Column */}
              <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-stone-700 font-mono uppercase flex items-center gap-1">
                  <Database className="w-4 h-4 text-red-500" />
                  Cơ chế Byte Stream (1 byte/đơn vị)
                </span>
                <p className="text-[11px] text-stone-500 leading-normal">
                  Dữ liệu được xử lý thô dưới dạng byte (8-bit). Các ký tự Unicode phức tạp bị tách rời thành nhiều byte lẻ, dễ gây vỡ font nếu đọc không đồng bộ.
                </p>
                <div className="flex flex-wrap gap-1">
                  {utf8Bytes.map((b, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="w-8 h-8 flex items-center justify-center text-[10px] font-mono bg-red-50 border border-red-200 text-red-700 rounded font-bold">
                        {b}
                      </span>
                      <span className="text-[8px] text-stone-400 font-mono mt-0.5">byte {idx}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-red-650 font-bold font-mono block pt-2">
                  ➔ Kích thước lưu trữ: {utf8Bytes.length} bytes thô
                </span>
              </div>

              {/* Character Stream Column */}
              <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-stone-700 font-mono uppercase flex items-center gap-1">
                  <Cpu className="w-4 h-4 text-emerald-500 animate-pulse" />
                  Cơ chế Character Stream (Luồng ký tự)
                </span>
                <p className="text-[11px] text-stone-500 leading-normal">
                  Tự động nhận diện và xử lý theo đơn vị ký tự Unicode (16-bit). Phục vụ hoàn hảo cho đa ngôn ngữ và tệp tin văn bản (text file).
                </p>
                <div className="flex flex-wrap gap-1">
                  {chars.map((c, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="w-8 h-8 flex items-center justify-center text-xs font-mono bg-emerald-50 border border-emerald-200 text-emerald-700 rounded font-bold">
                        '{c}'
                      </span>
                      <span className="text-[8px] text-stone-400 font-mono mt-0.5">char {idx}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-emerald-650 font-bold font-mono block pt-2">
                  ➔ Số lượng ký tự Unicode: {chars.length} ký tự
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: PrintWriter Echo Demo */}
      {activeTab === "echo" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Input and Controller */}
            <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                  Bảng điều khiển luồng Chaining
                </span>

                <div>
                  <label className="text-[10px] text-stone-450 font-bold uppercase tracking-wider block mb-1 font-mono font-bold">
                    Nhập chuỗi gửi đi:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={echoInput}
                      onChange={(e) => setEchoInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-white border border-stone-200 rounded-xl font-mono text-xs focus:outline-none focus:border-amber-500"
                    />
                    <button
                      onClick={handleEcho}
                      disabled={!echoInput}
                      className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      println()
                    </button>
                  </div>
                </div>

                {/* AutoFlush control */}
                <div className="flex items-center justify-between p-2.5 bg-white border border-stone-150 rounded-xl shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-stone-700">Tự động xả đệm (autoFlush)</span>
                    <span className="text-[9px] text-stone-450">Tự động đẩy buffer sau mỗi dòng println()</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={autoFlush}
                    onChange={(e) => setAutoFlush(e.target.checked)}
                    className="w-4 h-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500 cursor-pointer"
                  />
                </div>

                {/* Virtual Terminal Console */}
                <div className="p-3 bg-stone-950 border border-stone-900 rounded-xl shadow-md">
                  <div className="flex items-center gap-1.5 mb-1.5 text-stone-500">
                    <Keyboard className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-bold font-mono uppercase">Màn hình xuất ảo: System.out</span>
                  </div>
                  <div className="font-mono text-xs text-white min-h-[60px] p-2 bg-stone-900 rounded border border-stone-850 space-y-1">
                    {consoleOutput.map((line, i) => (
                      <div key={i} className="text-emerald-400 font-bold">{line}</div>
                    ))}
                    {consoleOutput.length === 0 && (
                      <span className="text-stone-600 italic text-[11px]">Đang đợi PrintWriter xuất dữ liệu...</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-6">
                {!autoFlush && (
                  <button
                    onClick={handleFlushWriter}
                    className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    flush()
                  </button>
                )}
                <button
                  onClick={handleResetEcho}
                  className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all font-bold text-xs cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Clear Console
                </button>
              </div>
            </div>

            {/* Pipeline logs */}
            <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Chuỗi xử lý dữ liệu qua các tầng (Pipeline logs)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10px] text-amber-500 space-y-1 overflow-y-auto max-h-[260px] min-h-[200px] shadow-md">
                {echoLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/30 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
