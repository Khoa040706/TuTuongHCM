"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ArrowRight, Database, Info, Layers, RefreshCw } from "lucide-react";

export default function FilterStreamVisualizer() {
  const [activeTab, setActiveTab] = useState("input");

  // Tab 1: FilterInputStream (BufferedInputStream wrapping FileInputStream)
  const sourceContent = "JAVAIO";
  const [pos, setPos] = useState(0);
  const [markedPos, setMarkedPos] = useState(0);
  const [inputLogs, setInputLogs] = useState(["BufferedInputStream wrapping FileInputStream initialized."]);
  const [readChar, setReadChar] = useState("");

  // Tab 2: FilterOutputStream (FilterOutputStream wrapping FileOutputStream)
  const [writeBuffer, setWriteBuffer] = useState([81, 82, 83, 84, 85]); // 'Q', 'R', 'S', 'T', 'U'
  const [flushBuffer, setFlushBuffer] = useState([]);
  const [diskFileContent, setDiskFileContent] = useState([]);
  const [outputLogs, setOutputLogs] = useState(["FilterOutputStream wrapping FileOutputStream initialized."]);

  // Input Stream operations
  const handleRead = () => {
    if (pos >= sourceContent.length) {
      setInputLogs(prev => [...prev, "read() ➔ -1 (Hết tệp tin)"]);
      setReadChar("");
      return;
    }
    const char = sourceContent[pos];
    const byteVal = char.charCodeAt(0);
    setReadChar(char);
    setInputLogs(prev => [
      ...prev,
      `read() ➔ Đọc byte: ${byteVal} | Ký tự: '${char}'. Con trỏ pos tăng từ ${pos} lên ${pos + 1}`
    ]);
    setPos(prev => prev + 1);
  };

  const handleMark = () => {
    setMarkedPos(pos);
    setInputLogs(prev => [
      ...prev,
      `mark(0) ➔ Đánh dấu vị trí hiện tại: pos = ${pos} (markedPos = ${pos})`
    ]);
  };

  const handleReset = () => {
    setPos(markedPos);
    setReadChar("");
    setInputLogs(prev => [
      ...prev,
      `reset() ➔ Reset luồng. Đưa con trỏ đọc từ pos = ${pos} quay về vị trí markedPos = ${markedPos}`
    ]);
  };

  const handleInputRestart = () => {
    setPos(0);
    setMarkedPos(0);
    setReadChar("");
    setInputLogs(["Đã reset trạng thái giả lập đọc luồng lọc."]);
  };

  // Output Stream operations
  const handleWrite = () => {
    if (writeBuffer.length === 0) return;
    const toWrite = writeBuffer[0];
    setWriteBuffer(prev => prev.slice(1));
    setFlushBuffer(prev => [...prev, toWrite]);
    setOutputLogs(prev => [
      ...prev,
      `write(${toWrite}) ➔ Byte ${toWrite} ('${String.fromCharCode(toWrite)}') đã được nạp vào bộ đệm của FilterOutputStream.`
    ]);
  };

  const handleFlush = () => {
    if (flushBuffer.length === 0) {
      setOutputLogs(prev => [...prev, "flush() ➔ Bộ đệm rỗng. Không có dữ liệu để xả xuống file."]);
      return;
    }
    setDiskFileContent(prev => [...prev, ...flushBuffer]);
    setOutputLogs(prev => [
      ...prev,
      `flush() ➔ BẮT BUỘC xả bộ đệm! Đã chuyển các byte [${flushBuffer.join(", ")}] từ RAM xuống tệp tin ảo test.txt`
    ]);
    setFlushBuffer([]);
  };

  const handleOutputReset = () => {
    setWriteBuffer([81, 82, 83, 84, 85]);
    setFlushBuffer([]);
    setDiskFileContent([]);
    setOutputLogs(["Đã reset trạng thái giả lập ghi luồng lọc."]);
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span>Mục XV: Trình trực quan luồng lọc (Filter Streams)</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Minh họa cơ chế bọc luồng (wrapping), bộ đệm (buffering), đánh dấu luồng (mark/reset) và xả luồng (flush).
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("input")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "input" ? "bg-white text-emerald-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            FilterInputStream
          </button>
          <button
            onClick={() => setActiveTab("output")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "output" ? "bg-white text-emerald-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            FilterOutputStream
          </button>
        </div>
      </div>

      {/* Tab 1: FilterInputStream */}
      {activeTab === "input" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Simulation Pipeline */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                  Sơ đồ luồng đọc Pipeline
                </span>

                {/* Pipeline visual diagram */}
                <div className="flex flex-col gap-3 p-3 bg-white border border-stone-200 rounded-xl shadow-sm">
                  {/* File.txt source */}
                  <div className="flex items-center gap-3">
                    <span className="w-20 px-2 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded font-mono text-[10px] font-bold text-center">
                      File.txt
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                    <div className="flex-1 flex gap-1 font-mono text-xs">
                      {Array.from(sourceContent).map((c, idx) => {
                        const isRead = idx < pos;
                        const isCurrent = idx === pos;
                        const isMarked = idx === markedPos;
                        return (
                          <span
                            key={idx}
                            className={`w-6 h-6 flex items-center justify-center rounded font-bold border transition-all ${
                              isCurrent
                                ? "bg-emerald-600 text-white animate-pulse"
                                : isMarked
                                ? "bg-purple-100 text-purple-700 border-purple-300"
                                : isRead
                                ? "bg-stone-100 text-stone-400 border-stone-200"
                                : "bg-emerald-50 text-emerald-800 border-emerald-250"
                            }`}
                          >
                            {c}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Wrapper representation */}
                  <div className="border border-stone-300 rounded-xl p-3 bg-stone-50/50 space-y-2">
                    <span className="text-[9px] text-stone-400 font-bold uppercase block font-mono">
                      BufferedInputStream (Luồng lọc bọc ngoài)
                    </span>
                    <div className="border border-emerald-500/30 rounded-lg p-2 bg-emerald-50/20">
                      <span className="text-[9px] text-emerald-600 font-bold uppercase block font-mono">
                        FileInputStream (Luồng vật lý bọc trong)
                      </span>
                      <span className="text-xs text-stone-500 font-mono italic block mt-1">
                        wrapping ➔ [in: FileInputObj]
                      </span>
                    </div>
                  </div>
                </div>

                {/* State view */}
                <div className="flex justify-between text-xs font-mono p-2 bg-stone-900 border border-stone-850 rounded-xl text-white">
                  <span>Con trỏ pos: <span className="text-emerald-400 font-bold">{pos}</span></span>
                  <span>Đánh dấu mark: <span className="text-purple-400 font-bold">{markedPos}</span></span>
                  {readChar && (
                    <span>Đọc được: <span className="text-amber-400 font-bold">'{readChar}' ({readChar.charCodeAt(0)})</span></span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-6">
                <button
                  onClick={handleRead}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                >
                  <Play className="w-3.5 h-3.5" />
                  read()
                </button>
                <button
                  onClick={handleMark}
                  className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                >
                  mark(0)
                </button>
                <button
                  onClick={handleReset}
                  disabled={pos === markedPos}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    pos !== markedPos
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "bg-stone-100 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  reset()
                </button>
                <button
                  onClick={handleInputRestart}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-205 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Logs Console */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký JVM và đệm RAM
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-emerald-400 space-y-1 overflow-y-auto max-h-[220px] min-h-[160px] shadow-md">
                {inputLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Educational block */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed text-emerald-900 shadow-sm">
            <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-emerald-950 mb-0.5">💡 Khái niệm mark() & reset() trong FilterInputStream:</strong>
              Các lớp luồng lọc như <code className="bg-emerald-100 px-1 rounded font-bold">BufferedInputStream</code> hỗ trợ ghi nhớ vị trí trong luồng đọc bằng phương thức <code className="bg-emerald-100 px-1 rounded font-bold">mark()</code>. Khi gọi <code className="bg-emerald-100 px-1 rounded font-bold">reset()</code>, con trỏ đọc tự động quay ngược lại điểm đã đánh dấu để đọc lại mà không cần tải lại file vật lý trên đĩa.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: FilterOutputStream */}
      {activeTab === "output" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Simulation Pipeline */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                  Sơ đồ ghi Pipeline
                </span>

                {/* Pipeline visual diagram */}
                <div className="flex flex-col gap-3 p-3 bg-white border border-stone-200 rounded-xl shadow-sm">
                  {/* Left buffer to write */}
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="text-[10px] font-bold text-stone-500 font-mono uppercase">Buffer sắp ghi (RAM):</span>
                    <div className="flex gap-1">
                      {writeBuffer.length > 0 ? (
                        writeBuffer.map((b, idx) => (
                          <span key={idx} className="w-6 h-6 flex items-center justify-center font-mono text-[10px] font-bold bg-stone-100 border border-stone-200 rounded">
                            {b}
                          </span>
                        ))
                      ) : (
                        <span className="text-stone-400 italic text-[10px]">Trống...</span>
                      )}
                    </div>
                  </div>

                  {/* FilterOutputStream buffer */}
                  <div className="border border-stone-300 rounded-xl p-3 bg-stone-50/50 space-y-2">
                    <span className="text-[9px] text-stone-400 font-bold uppercase block font-mono">
                      FilterOutputStream Buffer (Bộ nhớ đệm trung gian)
                    </span>
                    <div className="flex gap-1 min-h-[28px] p-1 bg-white border border-stone-200 rounded">
                      {flushBuffer.map((b, idx) => (
                        <span key={idx} className="w-6 h-6 flex items-center justify-center font-mono text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-250 rounded animate-fadeIn">
                          {b}
                        </span>
                      ))}
                      {flushBuffer.length === 0 && (
                        <span className="text-stone-400 italic text-[10px] m-auto">Đệm rỗng (Đợi write)...</span>
                      )}
                    </div>
                  </div>

                  {/* File.txt destination */}
                  <div className="flex items-center gap-3 mt-1">
                    <span className="w-20 px-2 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded font-mono text-[10px] font-bold text-center">
                      File: test.txt
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 animate-pulse" />
                    <div className="flex-1 flex gap-1 font-mono text-xs">
                      {diskFileContent.length > 0 ? (
                        diskFileContent.map((b, idx) => (
                          <span key={idx} className="w-6 h-6 flex items-center justify-center rounded font-bold border bg-stone-900 text-emerald-400 border-stone-850 animate-fadeIn">
                            {String.fromCharCode(b)}
                          </span>
                        ))
                      ) : (
                        <span className="text-stone-400 italic text-[11px]">Chưa có dữ liệu vật lý trên ổ đĩa...</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-6">
                <button
                  onClick={handleWrite}
                  disabled={writeBuffer.length === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    writeBuffer.length > 0
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-stone-100 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  1. write()
                </button>
                <button
                  onClick={handleFlush}
                  disabled={flushBuffer.length === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    flushBuffer.length > 0
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "bg-stone-100 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  2. flush()
                </button>
                <button
                  onClick={handleOutputReset}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-205 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Logs Console */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký Buffer xả dữ liệu (Flush Logs)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-emerald-400 space-y-1 overflow-y-auto max-h-[220px] min-h-[160px] shadow-md">
                {outputLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Educational block */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed text-emerald-900 shadow-sm">
            <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-emerald-950 mb-0.5">💡 Vai trò của phương thức flush():</strong>
              Để tối ưu hiệu suất ghi, các lớp luồng lọc như <code className="bg-emerald-100 px-1 rounded font-bold">BufferedOutputStream</code> không ghi dữ liệu trực tiếp xuống file từng byte một mà gom vào **bộ đệm RAM (Buffer)**. Gọi phương thức <code className="bg-emerald-100 px-1 rounded font-bold">flush()</code> sẽ ép buộc JVM đẩy lập tức toàn bộ dữ liệu đang chờ trong buffer RAM ghi xuống tệp tin đích vật lý.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
