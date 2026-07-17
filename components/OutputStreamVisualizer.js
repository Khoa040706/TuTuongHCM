"use client";
import React, { useState } from "react";
import { Layers, FileText, Cpu, Play, RotateCcw, ArrowRight, Save, Database, Info } from "lucide-react";

export default function OutputStreamVisualizer() {
  const [activeTab, setActiveTab] = useState("hierarchy");

  // Tab 2: FileOutputStream States
  const [fosInput, setFosInput] = useState("Dream");
  const [fosBytes, setFosBytes] = useState([]);
  const [fosFileBytes, setFosFileBytes] = useState([]);
  const [fosStep, setFosStep] = useState("init"); // init, bytes, written, closed
  const [fosLogs, setFosLogs] = useState(["Khởi tạo FileOutputStream... Ready."]);

  // Tab 3: ByteArrayOutputStream States
  const [baosInput, setBaosInput] = useState("Master");
  const [baosBuffer, setBaosBuffer] = useState(new Array(8).fill(null));
  const [baosCount, setBaosCount] = useState(0);
  const [baosLogs, setBaosLogs] = useState(["Khởi tạo ByteArrayOutputStream (kích thước đệm mặc định: 8 bytes)"]);
  const [baosResult, setBaosResult] = useState("");

  // Handler for FileOutputStream
  const handleFosGetBytes = () => {
    const bytes = Array.from(fosInput).map(c => c.charCodeAt(0));
    setFosBytes(bytes);
    setFosStep("bytes");
    setFosLogs(prev => [
      ...prev,
      `temp.getBytes() ➔ Đã chuyển đổi chuỗi "${fosInput}" thành mảng byte: [${bytes.join(", ")}]`
    ]);
  };

  const handleFosWrite = () => {
    if (fosStep !== "bytes") return;
    setFosFileBytes(fosBytes);
    setFosStep("written");
    setFosLogs(prev => [
      ...prev,
      `fileObj.write(bufObj) ➔ Đã ghi toàn bộ ${fosBytes.length} bytes vào tệp "Thought.txt"`
    ]);
  };

  const handleFosClose = () => {
    setFosStep("closed");
    setFosLogs(prev => [
      ...prev,
      `fileObj.close() ➔ Đóng stream thành công. Hệ điều hành đã giải phóng file descriptor.`
    ]);
  };

  const handleFosReset = () => {
    setFosBytes([]);
    setFosFileBytes([]);
    setFosStep("init");
    setFosLogs(["Reset FileOutputStream simulator... Ready."]);
  };

  // Handler for ByteArrayOutputStream
  const handleBaosWrite = () => {
    const newBytes = Array.from(baosInput).map(c => c.charCodeAt(0));
    let currentCapacity = baosBuffer.length;
    let requiredCapacity = baosCount + newBytes.length;
    let newLogs = [];

    let updatedBuffer = [...baosBuffer];

    // Simulate internal array growing (doubling size)
    if (requiredCapacity > currentCapacity) {
      const nextCapacity = Math.max(currentCapacity * 2, requiredCapacity);
      updatedBuffer = [...updatedBuffer, ...new Array(nextCapacity - currentCapacity).fill(null)];
      newLogs.push(`⚠️ Vượt quá dung lượng! Bộ đệm tự động TĂNG KÍCH THƯỚC (grow): ${currentCapacity} bytes ➔ ${nextCapacity} bytes`);
      currentCapacity = nextCapacity;
    }

    // Write new bytes into buffer
    for (let i = 0; i < newBytes.length; i++) {
      updatedBuffer[baosCount + i] = newBytes[i];
    }

    setBaosBuffer(updatedBuffer);
    setBaosCount(baosCount + newBytes.length);
    newLogs.push(`byObj.write(buf) ➔ Ghi ${newBytes.length} bytes của "${baosInput}" vào bộ đệm RAM tại vị trí index [${baosCount}..${baosCount + newBytes.length - 1}]`);

    setBaosLogs(prev => [...prev, ...newLogs]);
    setBaosResult(""); // reset result view
  };

  const handleBaosToString = () => {
    // Convert written bytes to string
    const writtenBytes = baosBuffer.slice(0, baosCount).filter(x => x !== null);
    const str = String.fromCharCode(...writtenBytes);
    setBaosResult(str);
    setBaosLogs(prev => [
      ...prev,
      `byObj.toString() ➔ Đọc dữ liệu từ RAM và chuyển đổi thành String: "${str}"`
    ]);
  };

  const handleBaosReset = () => {
    setBaosBuffer(new Array(8).fill(null));
    setBaosCount(0);
    setBaosResult("");
    setBaosLogs(["Reset ByteArrayOutputStream simulator (dung lượng ban đầu: 8 bytes)."]);
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-800 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 animate-pulse" />
            <span>Mục XII - XIV: Trình trực quan hóa Lớp luồng xuất (OutputStream)</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Tìm hiểu nguyên lý hoạt động của OutputStream, FileOutputStream và ByteArrayOutputStream trong bộ nhớ RAM.
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex bg-stone-100 p-1 rounded-xl self-start md:self-auto border border-stone-200">
          <button
            onClick={() => setActiveTab("hierarchy")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "hierarchy" ? "bg-white text-sky-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Phân cấp Class
          </button>
          <button
            onClick={() => setActiveTab("file")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "file" ? "bg-white text-sky-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            FileOutputStream
          </button>
          <button
            onClick={() => setActiveTab("memory")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "memory" ? "bg-white text-sky-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            ByteArrayOutputStream
          </button>
        </div>
      </div>

      {/* Tab 1: Hierarchy */}
      {activeTab === "hierarchy" && (
        <div className="py-6 px-4 bg-stone-50/60 rounded-2xl border border-stone-150 flex flex-col items-center">
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-8 font-mono">
            Sơ đồ phân cấp OutputStream Hierarchy
          </span>

          <div className="flex flex-col items-center w-full max-w-lg">
            {/* Parent Node */}
            <div className="relative group p-4 w-60 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white border border-indigo-500 shadow-md text-center">
              <span className="text-[10px] bg-purple-500/30 text-purple-200 px-1.5 py-0.5 rounded font-mono font-bold uppercase block mb-1 w-max mx-auto">
                abstract class
              </span>
              <span className="font-mono font-black text-sm block">OutputStream</span>
              <span className="text-[10.5px] text-indigo-100 block mt-1 font-sans">Định nghĩa cách ghi dữ liệu thô dạng byte.</span>
            </div>

            {/* Connecting lines */}
            <div className="h-10 w-0.5 bg-stone-300 relative">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-stone-300"></div>
            </div>

            {/* Children Nodes */}
            <div className="flex justify-between w-full mt-0 gap-6">
              {/* FileOutputStream Node */}
              <div className="flex flex-col items-center flex-1">
                <div className="h-6 w-0.5 bg-stone-300"></div>
                <div className="p-4 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 text-white border border-sky-400 shadow-md text-center transition-transform hover:-translate-y-1">
                  <span className="text-[10px] bg-sky-400/30 text-sky-100 px-1.5 py-0.5 rounded font-mono font-bold uppercase block mb-1 w-max mx-auto">
                    subclass (concrete)
                  </span>
                  <span className="font-mono font-black text-xs block">FileOutputStream</span>
                  <p className="text-[10px] text-sky-100 mt-1 font-sans">
                    Ghi dữ liệu dạng byte trực tiếp ra file trên ổ đĩa vật lý (Hard Drive).
                  </p>
                </div>
              </div>

              {/* ByteArrayOutputStream Node */}
              <div className="flex flex-col items-center flex-1">
                <div className="h-6 w-0.5 bg-stone-300"></div>
                <div className="p-4 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white border border-emerald-400 shadow-md text-center transition-transform hover:-translate-y-1">
                  <span className="text-[10px] bg-emerald-400/30 text-emerald-100 px-1.5 py-0.5 rounded font-mono font-bold uppercase block mb-1 w-max mx-auto">
                    subclass (concrete)
                  </span>
                  <span className="font-mono font-black text-xs block">ByteArrayOutputStream</span>
                  <p className="text-[10px] text-emerald-100 mt-1 font-sans">
                    Ghi dữ liệu dạng byte vào một bộ đệm lưu trữ tạm thời trong RAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: FileOutputStream */}
      {activeTab === "file" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Input & Controller */}
            <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                    Nhập chuỗi văn bản muốn ghi:
                  </label>
                  <input
                    type="text"
                    value={fosInput}
                    onChange={(e) => {
                      if (fosStep === "init") setFosInput(e.target.value);
                    }}
                    disabled={fosStep !== "init"}
                    className="w-full px-3 py-2 bg-white border border-stone-200 rounded-xl font-mono text-sm focus:outline-none focus:border-sky-500 disabled:bg-stone-100 disabled:text-stone-400"
                  />
                </div>

                {/* Byte conversion viewer */}
                {fosBytes.length > 0 && (
                  <div>
                    <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                      Mảng Byte trong RAM (bufObj):
                    </label>
                    <div className="flex flex-wrap gap-1">
                      {fosBytes.map((b, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <span className="w-8 h-8 flex items-center justify-center text-xs font-mono font-bold bg-sky-100 text-sky-850 rounded border border-sky-200 shadow-sm animate-fadeIn">
                            {b}
                          </span>
                          <span className="text-[9px] text-stone-400 font-mono mt-0.5">'{fosInput[idx]}'</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target File display */}
                {fosFileBytes.length > 0 && (
                  <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl">
                    <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider block mb-1.5 font-mono flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      Tệp tin ảo: Thought.txt
                    </span>
                    <div className="flex flex-wrap gap-1 font-mono text-xs text-white">
                      {fosStep === "written" || fosStep === "closed" ? (
                        fosFileBytes.map((b, i) => (
                          <span key={i} className="px-1.5 py-0.5 bg-stone-800 border border-stone-700 rounded text-emerald-400 animate-pulse font-bold">
                            {String.fromCharCode(b)}
                          </span>
                        ))
                      ) : (
                        <span className="text-stone-500 italic text-[11px]">Tệp rỗng...</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Simulation buttons */}
              <div className="flex flex-wrap gap-2 mt-6">
                <button
                  onClick={handleFosGetBytes}
                  disabled={fosStep !== "init" || !fosInput}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    fosStep === "init" && fosInput
                      ? "bg-sky-600 hover:bg-sky-700 text-white"
                      : "bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-250"
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  1. getBytes()
                </button>

                <button
                  onClick={handleFosWrite}
                  disabled={fosStep !== "bytes"}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    fosStep === "bytes"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-250"
                  }`}
                >
                  <Save className="w-3.5 h-3.5" />
                  2. write()
                </button>

                <button
                  onClick={handleFosClose}
                  disabled={fosStep !== "written"}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    fosStep === "written"
                      ? "bg-stone-850 hover:bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-250"
                  }`}
                >
                  Đóng Stream (close)
                </button>

                <button
                  onClick={handleFosReset}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Logs Terminal */}
            <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký hoạt động (Console Log JVM)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-sky-400 space-y-1 overflow-y-auto max-h-[220px] min-h-[160px] shadow-md">
                {fosLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info details */}
          <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed text-sky-900 shadow-sm">
            <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-sky-950 mb-0.5">💡 Chú ý học thuật:</strong>
              FileOutputStream thực hiện truyền dữ liệu từng byte (hoặc mảng byte) trực tiếp ra file ngoại vi. Hãy chú ý luôn gọi <code className="bg-sky-100 px-1 rounded font-bold">close()</code> trong khối <code className="bg-sky-100 px-1 rounded font-bold">finally</code> để trả file descriptor lại cho hệ điều hành, tránh rò rỉ tài nguyên.
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: ByteArrayOutputStream */}
      {activeTab === "memory" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Buffer visualizer and controls */}
            <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                    Nhập chuỗi ghi vào RAM:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={baosInput}
                      onChange={(e) => setBaosInput(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white border border-stone-200 rounded-xl font-mono text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={handleBaosWrite}
                      disabled={!baosInput}
                      className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Save className="w-3 h-3" />
                      write()
                    </button>
                  </div>
                </div>

                {/* RAM Buffer Display */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                      Mảng đệm trong RAM (protected byte[] buf):
                    </label>
                    <span className="text-[10px] text-emerald-600 font-mono font-bold">
                      Dung lượng: {baosBuffer.length} bytes | count = {baosCount}
                    </span>
                  </div>

                  <div className="grid grid-cols-8 gap-1.5 p-2 bg-stone-900 border border-stone-850 rounded-xl">
                    {baosBuffer.map((b, idx) => {
                      const isWritten = idx < baosCount;
                      return (
                        <div
                          key={idx}
                          className={`h-10 flex flex-col items-center justify-center rounded border transition-all ${
                            isWritten
                              ? "bg-emerald-950 text-emerald-355 border-emerald-500/50"
                              : "bg-stone-850 border-stone-750 text-stone-600"
                          }`}
                        >
                          <span className="text-[11px] font-mono font-bold">
                            {b !== null ? b : "0"}
                          </span>
                          <span className="text-[8px] font-mono opacity-50 mt-0.5">{idx}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* toString() Result */}
                {baosResult && (
                  <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl animate-fadeIn">
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1 font-mono">
                      Chuỗi chuyển đổi (toString()):
                    </span>
                    <span className="text-sm font-bold text-white font-mono">
                      "{baosResult}"
                    </span>
                  </div>
                )}
              </div>

              {/* Simulation actions */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={handleBaosToString}
                  disabled={baosCount === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    baosCount > 0
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-stone-100 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  toString()
                </button>
                <button
                  onClick={handleBaosReset}
                  className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all cursor-pointer flex items-center gap-1 font-bold text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>
            </div>

            {/* Logs Terminal */}
            <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký RAM & JVM Log
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-emerald-400 space-y-1 overflow-y-auto max-h-[220px] min-h-[160px] shadow-md">
                {baosLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Educational Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-sky-50/40 border border-sky-100 rounded-2xl p-4 text-xs shadow-sm">
              <strong className="text-sky-950 font-bold block mb-1 flex items-center gap-1">
                <Database className="w-4 h-4 text-sky-600" />
                FileOutputStream (Disk I/O)
              </strong>
              <p className="text-sky-900 leading-relaxed">
                • Ghi dữ liệu trực tiếp xuống thiết bị lưu trữ vật lý (file thật).<br/>
                • Tốc độ chậm hơn (do phụ thuộc IO đĩa cứng).<br/>
                • Yêu cầu xử lý ngoại lệ bắt buộc (IOException) và đóng luồng khi ghi xong.
              </p>
            </div>
            <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-4 text-xs shadow-sm">
              <strong className="text-emerald-950 font-bold block mb-1 flex items-center gap-1">
                <Cpu className="w-4 h-4 text-emerald-600" />
                ByteArrayOutputStream (RAM I/O)
              </strong>
              <p className="text-emerald-900 leading-relaxed">
                • Ghi trực tiếp vào một mảng byte động trong RAM.<br/>
                • Tốc độ cực nhanh, dung lượng bộ đệm tự co giãn (grow).<br/>
                • Không thao tác file đĩa thật, không bắt buộc đóng luồng (no-op close).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
