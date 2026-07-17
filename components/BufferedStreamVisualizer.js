"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ArrowRight, Database, Cpu, Info, Save, RefreshCw } from "lucide-react";

export default function BufferedStreamVisualizer() {
  const [activeTab, setActiveTab] = useState("input");

  // Tab 1: BufferedInputStream States
  const fileContent = "HELLOWORLD";
  const [fisIndex, setFisIndex] = useState(0); // index in fileContent
  const [bufIndex, setBufIndex] = useState(0); // current index inside buffer
  const [buffer, setBuffer] = useState(new Array(4).fill(null)); // 4-byte buffer
  const [readOutput, setReadOutput] = useState("");
  const [diskAccessCount, setDiskAccessCount] = useState(0);
  const [markedBufIndex, setMarkedBufIndex] = useState(0);
  const [markedFisIndex, setMarkedFisIndex] = useState(0);
  const [inputLogs, setInputLogs] = useState(["BufferedInputStream initialized. Buffer size: 4 bytes."]);

  // Tab 2: BufferedOutputStream States
  const [outInput, setOutInput] = useState("STUDY");
  const [outBuffer, setOutBuffer] = useState(new Array(4).fill(null)); // 4-byte write buffer
  const [outBufCount, setOutBufCount] = useState(0);
  const [fileContentWritten, setFileContentWritten] = useState([]);
  const [outDiskAccessCount, setOutDiskAccessCount] = useState(0);
  const [outputLogs, setOutputLogs] = useState(["BufferedOutputStream initialized. Buffer size: 4 bytes."]);

  // BufferedInputStream read logic
  const handleRead = () => {
    // Check if buffer needs to be filled
    let currentBuffer = [...buffer];
    let newFisIndex = fisIndex;
    let newBufIndex = bufIndex;
    let newDiskCount = diskAccessCount;
    let logMsg = [];

    const isBufferEmpty = currentBuffer.every(x => x === null) || newBufIndex >= 4;

    if (isBufferEmpty) {
      if (newFisIndex >= fileContent.length) {
        setInputLogs(prev => [...prev, "read() ➔ -1 (Hết tệp tin)"]);
        setReadOutput("");
        return;
      }

      // Fill buffer from file
      newDiskCount += 1;
      logMsg.push(`⚡ BUFFER MISS! Bộ đệm trống hoặc hết dữ liệu. Truy cập DISK ghi nhận lần thứ ${newDiskCount} để nạp 4 bytes.`);
      
      const newBuf = [];
      for (let i = 0; i < 4; i++) {
        if (newFisIndex + i < fileContent.length) {
          newBuf.push(fileContent[newFisIndex + i]);
        } else {
          newBuf.push(null);
        }
      }
      currentBuffer = newBuf;
      newBufIndex = 0;
      newFisIndex += 4;
      setBuffer(currentBuffer);
      setFisIndex(newFisIndex);
      setDiskAccessCount(newDiskCount);
    }

    // Read byte from buffer
    const char = currentBuffer[newBufIndex];
    if (char === null) {
      setInputLogs(prev => [...prev, ...logMsg, "read() ➔ -1 (Hết tệp tin)"]);
      setReadOutput("");
      return;
    }

    setReadOutput(char);
    setBufIndex(newBufIndex + 1);
    setInputLogs(prev => [
      ...prev,
      ...logMsg,
      `read() ➔ Đọc từ bộ đệm RAM [index ${newBufIndex}]: '${char}' (${char.charCodeAt(0)})`
    ]);
  };

  const handleMark = () => {
    setMarkedBufIndex(bufIndex);
    setMarkedFisIndex(fisIndex);
    setInputLogs(prev => [
      ...prev,
      `mark() ➔ Đã đánh dấu vị trí đọc hiện tại (bufIndex: ${bufIndex})`
    ]);
  };

  const handleReset = () => {
    setBufIndex(markedBufIndex);
    setFisIndex(markedFisIndex);
    setInputLogs(prev => [
      ...prev,
      `reset() ➔ Quay lại vị trí đã đánh dấu (bufIndex: ${markedBufIndex})`
    ]);
  };

  const handleInputReset = () => {
    setFisIndex(0);
    setBufIndex(0);
    setBuffer(new Array(4).fill(null));
    setReadOutput("");
    setDiskAccessCount(0);
    setMarkedBufIndex(0);
    setMarkedFisIndex(0);
    setInputLogs(["Đã reset giả lập BufferedInputStream."]);
  };

  // BufferedOutputStream write logic
  const handleWrite = () => {
    if (!outInput) return;
    const chars = Array.from(outInput);
    let currentBuf = [...outBuffer];
    let count = outBufCount;
    let written = [...fileContentWritten];
    let diskCount = outDiskAccessCount;
    let logs = [];

    for (let char of chars) {
      if (count >= 4) {
        // Buffer is full, auto-flush to disk
        diskCount += 1;
        logs.push(`⚠️ BỘ ĐỆM ĐẦY! Tự động flush dữ liệu từ RAM xuống Disk (lần truy cập Disk thứ ${diskCount})`);
        const bytesToWrite = currentBuf.filter(x => x !== null);
        written = [...written, ...bytesToWrite];
        currentBuf = new Array(4).fill(null);
        count = 0;
      }

      currentBuf[count] = char;
      logs.push(`write('${char}') ➔ Nạp ký tự vào bộ đệm RAM tại vị trí [index ${count}]`);
      count += 1;
    }

    setOutBuffer(currentBuf);
    setOutBufCount(count);
    setFileContentWritten(written);
    setOutDiskAccessCount(diskCount);
    setOutputLogs(prev => [...prev, ...logs]);
  };

  const handleFlush = () => {
    if (outBufCount === 0) {
      setOutputLogs(prev => [...prev, "flush() ➔ Bộ đệm rỗng. Không có gì để ghi."]);
      return;
    }

    const diskCount = outDiskAccessCount + 1;
    const bytesToWrite = outBuffer.slice(0, outBufCount).filter(x => x !== null);
    
    setFileContentWritten(prev => [...prev, ...bytesToWrite]);
    setOutBuffer(new Array(4).fill(null));
    setOutBufCount(0);
    setOutDiskAccessCount(diskCount);
    setOutputLogs(prev => [
      ...prev,
      `flush() ➔ Chủ động gọi flush(). Ghi các ký tự [${bytesToWrite.join(", ")}] xuống tệp tin đích (lần thứ ${diskCount} truy cập Disk)`
    ]);
  };

  const handleOutputReset = () => {
    setOutBuffer(new Array(4).fill(null));
    setOutBufCount(0);
    setFileContentWritten([]);
    setOutDiskAccessCount(0);
    setOutputLogs(["Đã reset giả lập BufferedOutputStream."]);
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-600" />
            <span>Mục XV - XVII: Trình trực quan luồng bộ đệm (Buffered Streams)</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Hiểu cách bộ đệm (Buffer) giảm thiểu số lần truy cập đĩa vật lý để tối ưu hóa IO.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("input")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "input" ? "bg-white text-sky-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            BufferedInputStream
          </button>
          <button
            onClick={() => setActiveTab("output")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "output" ? "bg-white text-sky-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            BufferedOutputStream
          </button>
        </div>
      </div>

      {/* Tab 1: BufferedInputStream */}
      {activeTab === "input" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Control Panel */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                  Sơ đồ đọc và Đệm RAM
                </span>

                {/* Disk File representation */}
                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-stone-500" />
                    <span className="text-[10px] font-bold text-stone-600 font-mono uppercase">Tệp tin đích (Ổ đĩa vật lý):</span>
                  </div>
                  <div className="flex gap-1 font-mono text-xs">
                    {Array.from(fileContent).map((char, idx) => {
                      const isLoaded = idx < fisIndex;
                      const isReadingNow = idx >= fisIndex - 4 && idx < fisIndex && idx - (fisIndex - 4) === bufIndex - 1;
                      return (
                        <span
                          key={idx}
                          className={`w-6 h-6 flex items-center justify-center rounded border font-bold ${
                            isReadingNow
                              ? "bg-amber-500 text-white border-amber-600 scale-105"
                              : isLoaded
                              ? "bg-sky-50 text-sky-700 border-sky-200"
                              : "bg-stone-100 text-stone-450 border-stone-250"
                          }`}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Buffer representation */}
                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-stone-650 font-mono uppercase flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-sky-500" />
                      Bộ đệm RAM (internal buffer: 4 bytes)
                    </span>
                    <span className="text-[9px] font-mono text-sky-600">pos inside buffer: {bufIndex}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {buffer.map((char, idx) => {
                      const isCurrent = idx === bufIndex;
                      const isPassed = idx < bufIndex;
                      return (
                        <div
                          key={idx}
                          className={`h-12 flex flex-col items-center justify-center rounded border font-mono transition-all ${
                            isCurrent
                              ? "bg-sky-600 text-white border-sky-700 animate-pulse font-bold"
                              : char !== null
                              ? "bg-sky-100 text-sky-850 border-sky-200"
                              : "bg-stone-50 border-stone-150 text-stone-400 italic"
                          }`}
                        >
                          <span className="text-xs">{char !== null ? char : "empty"}</span>
                          <span className="text-[8px] opacity-60 mt-0.5">[{idx}]</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono p-2 bg-stone-900 border border-stone-850 rounded-xl text-white">
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase">Truy cập Disk</span>
                    <span className="text-amber-400 font-bold text-sm">{diskAccessCount}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase">Ký tự vừa đọc</span>
                    <span className="text-sky-400 font-bold text-sm">{readOutput || "-"}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase">Đã lưu mark()</span>
                    <span className="text-purple-400 font-bold text-sm">buf[{markedBufIndex}]</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-6">
                <button
                  onClick={handleRead}
                  className="px-3 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                >
                  <Play className="w-3.5 h-3.5" />
                  read()
                </button>
                <button
                  onClick={handleMark}
                  className="px-3 py-2 bg-purple-650 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                >
                  mark()
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  reset()
                </button>
                <button
                  onClick={handleInputReset}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Logs Terminal */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký đọc (Console Log JVM)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-sky-400 space-y-1 overflow-y-auto max-h-[240px] min-h-[180px] shadow-md">
                {inputLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: BufferedOutputStream */}
      {activeTab === "output" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Control Panel */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                  Sơ đồ ghi và Xả bộ đệm (Flush)
                </span>

                {/* Input Text Box */}
                <div>
                  <label className="text-[10px] text-stone-450 font-bold uppercase tracking-wider block mb-1 font-mono">
                    Nhập chuỗi để ghi:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={outInput}
                      onChange={(e) => setOutInput(e.target.value.toUpperCase())}
                      className="flex-1 px-3 py-1.5 bg-white border border-stone-200 rounded-xl font-mono text-xs focus:outline-none focus:border-sky-500"
                    />
                    <button
                      onClick={handleWrite}
                      disabled={!outInput}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Save className="w-3 h-3" />
                      write()
                    </button>
                  </div>
                </div>

                {/* Buffer visualizer */}
                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-stone-600 font-mono uppercase flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                      Bộ đệm RAM (internal buffer: 4 bytes)
                    </span>
                    <span className="text-[9px] font-mono text-indigo-600">{outBufCount} / 4 bytes đầy</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {outBuffer.map((char, idx) => (
                      <div
                        key={idx}
                        className={`h-12 flex flex-col items-center justify-center rounded border font-mono transition-all ${
                          char !== null
                            ? "bg-indigo-100 text-indigo-850 border-indigo-200"
                            : "bg-stone-50 border-stone-150 text-stone-400 italic"
                        }`}
                      >
                        <span className="text-xs">{char !== null ? char : "empty"}</span>
                        <span className="text-[8px] opacity-60 mt-0.5">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target File */}
                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Database className="w-4 h-4 text-stone-500" />
                    <span className="text-[10px] font-bold text-stone-600 font-mono uppercase">Nội dung thực tế trên ổ đĩa:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 font-mono text-xs min-h-[24px]">
                    {fileContentWritten.length > 0 ? (
                      fileContentWritten.map((char, idx) => (
                        <span key={idx} className="w-6 h-6 flex items-center justify-center bg-stone-900 border border-stone-850 text-emerald-400 rounded font-bold animate-fadeIn">
                          {char}
                        </span>
                      ))
                    ) : (
                      <span className="text-stone-400 italic text-[11px] m-auto">Chưa có gì ghi xuống đĩa...</span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono p-2 bg-stone-900 border border-stone-850 rounded-xl text-white">
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase">Ghi đĩa thực tế</span>
                    <span className="text-amber-400 font-bold text-sm">{outDiskAccessCount} lần</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[9px] uppercase">Hiệu quả lưu trữ</span>
                    <span className="text-emerald-400 font-bold text-sm">
                      {outDiskAccessCount > 0 ? `${(fileContentWritten.length / outDiskAccessCount).toFixed(1)}x` : "0"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={handleFlush}
                  className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                >
                  flush()
                </button>
                <button
                  onClick={handleOutputReset}
                  className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all cursor-pointer flex items-center gap-1 font-bold text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>
            </div>

            {/* Logs Terminal */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký ghi đệm (Console Log JVM)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-indigo-400 space-y-1 overflow-y-auto max-h-[240px] min-h-[180px] shadow-md">
                {outputLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
