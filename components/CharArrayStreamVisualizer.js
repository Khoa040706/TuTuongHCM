"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ArrowRight, Database, Cpu, Info, Save, Layers } from "lucide-react";

export default function CharArrayStreamVisualizer() {
  const [activeTab, setActiveTab] = useState("reader");

  // Tab 1: CharArrayReader states
  const [readerInput, setReaderInput] = useState("HELLO");
  const [charArray, setCharArray] = useState([]);
  const [readerPos, setReaderPos] = useState(0);
  const [readerLogs, setReaderLogs] = useState(["CharArrayReader ready."]);
  const [readChar, setReadChar] = useState("");

  // Tab 2: CharArrayWriter states
  const [writerInput, setWriterInput] = useState("WORLD");
  const [writerBuffer, setWriterBuffer] = useState([]);
  const [writerLogs, setWriterLogs] = useState(["CharArrayWriter initialized."]);
  const [writerResult, setWriterResult] = useState("");

  // Reader actions
  const handleGetChars = () => {
    const chars = Array.from(readerInput);
    setCharArray(chars);
    setReaderPos(0);
    setReadChar("");
    setReaderLogs(prev => [
      ...prev,
      `temp.getChars() ➔ Đã chép chuỗi "${readerInput}" vào mảng char[]: [${chars.map(c => `'${c}'`).join(", ")}]`
    ]);
  };

  const handleReadChar = () => {
    if (charArray.length === 0) return;
    if (readerPos >= charArray.length) {
      setReaderLogs(prev => [...prev, "read() ➔ -1 (Hết luồng ký tự)"]);
      setReadChar("");
      return;
    }
    const c = charArray[readerPos];
    setReadChar(c);
    setReaderLogs(prev => [
      ...prev,
      `read() ➔ Đọc ký tự tại chỉ số [${readerPos}]: '${c}' (mã Unicode: ${c.charCodeAt(0)})`
    ]);
    setReaderPos(prev => prev + 1);
  };

  const handleResetReader = () => {
    setReaderPos(0);
    setReadChar("");
    setReaderLogs(prev => [...prev, "reset() ➔ Quay lại vị trí đầu mảng (pos = 0)"]);
  };

  const handleResetAllReader = () => {
    setCharArray([]);
    setReaderPos(0);
    setReadChar("");
    setReaderLogs(["Đã reset giả lập CharArrayReader."]);
  };

  // Writer actions
  const handleWriteChars = () => {
    if (!writerInput) return;
    const newChars = Array.from(writerInput);
    setWriterBuffer(prev => [...prev, ...newChars]);
    setWriterLogs(prev => [
      ...prev,
      `fObj.write() ➔ Đã ghi ${newChars.length} ký tự "${writerInput}" vào bộ đệm RAM của CharArrayWriter.`
    ]);
    setWriterResult("");
  };

  const handleToCharArray = () => {
    setWriterLogs(prev => [
      ...prev,
      `fObj.toCharArray() ➔ Trích xuất dữ liệu thô dưới dạng mảng char[]: [${writerBuffer.map(c => `'${c}'`).join(", ")}]`
    ]);
  };

  const handleWriterToString = () => {
    const str = writerBuffer.join("");
    setWriterResult(str);
    setWriterLogs(prev => [
      ...prev,
      `fObj.toString() ➔ Chuyển đổi dữ liệu đệm thành chuỗi String: "${str}"`
    ]);
  };

  const handleResetWriter = () => {
    setWriterBuffer([]);
    setWriterResult("");
    setWriterLogs(["Đã reset giả lập CharArrayWriter."]);
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            <span>Mục XX - XXI: Trình giả lập CharArray Streams</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Đọc/ghi dữ liệu ký tự từ mảng ký tự trong bộ nhớ RAM thay vì ghi xuống file đĩa.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("reader")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "reader" ? "bg-white text-emerald-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            CharArrayReader
          </button>
          <button
            onClick={() => setActiveTab("writer")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "writer" ? "bg-white text-emerald-600 shadow-sm" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            CharArrayWriter
          </button>
        </div>
      </div>

      {/* Tab 1: CharArrayReader */}
      {activeTab === "reader" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Control Panel */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                    Nhập chuỗi văn bản:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={readerInput}
                      onChange={(e) => {
                        if (charArray.length === 0) setReaderInput(e.target.value);
                      }}
                      disabled={charArray.length > 0}
                      className="flex-1 px-3 py-2 bg-white border border-stone-200 rounded-xl font-mono text-sm focus:outline-none focus:border-emerald-500 disabled:bg-stone-100 disabled:text-stone-400"
                    />
                    <button
                      onClick={handleGetChars}
                      disabled={charArray.length > 0 || !readerInput}
                      className="px-3 py-2 bg-emerald-650 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                    >
                      getChars()
                    </button>
                  </div>
                </div>

                {/* Char Array in RAM */}
                {charArray.length > 0 && (
                  <div>
                    <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                      Mảng char[] trong RAM (nguồn dữ liệu):
                    </label>
                    <div className="flex flex-wrap gap-1.5 p-2 bg-stone-900 border border-stone-850 rounded-xl">
                      {charArray.map((c, idx) => {
                        const isCurrent = idx === readerPos;
                        const isRead = idx < readerPos;
                        return (
                          <div
                            key={idx}
                            className={`w-9 h-9 flex flex-col items-center justify-center rounded border transition-all ${
                              isCurrent
                                ? "bg-emerald-600 text-white border-emerald-700 animate-pulse font-bold"
                                : isRead
                                ? "bg-stone-800 text-stone-500 border-stone-750"
                                : "bg-white border-stone-200 text-stone-800 font-bold"
                            }`}
                          >
                            <span className="text-xs font-mono">'{c}'</span>
                            <span className="text-[7.5px] opacity-60 font-mono mt-0.5">{idx}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="flex justify-between text-xs font-mono p-2 bg-stone-900 border border-stone-850 rounded-xl text-white">
                  <span>Con trỏ readerPos: <span className="text-emerald-450 font-bold">{readerPos}</span></span>
                  {readChar && (
                    <span>Ký tự đọc được: <span className="text-amber-400 font-bold">'{readChar}'</span></span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-6">
                <button
                  onClick={handleReadChar}
                  disabled={charArray.length === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    charArray.length > 0
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-stone-105 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  read()
                </button>
                <button
                  onClick={handleResetReader}
                  disabled={charArray.length === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    charArray.length > 0
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "bg-stone-105 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  reset()
                </button>
                <button
                  onClick={handleResetAllReader}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Logs Console */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký RAM (Reader Logs)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-emerald-405 space-y-1 overflow-y-auto max-h-[240px] min-h-[180px] shadow-md">
                {readerLogs.map((line, i) => (
                  <div key={i} className="border-b border-stone-900/40 pb-0.5">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: CharArrayWriter */}
      {activeTab === "writer" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Control Panel */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                    Nhập dữ liệu ký tự muốn ghi:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={writerInput}
                      onChange={(e) => setWriterInput(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white border border-stone-200 rounded-xl font-mono text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={handleWriteChars}
                      disabled={!writerInput}
                      className="px-3 py-2 bg-emerald-650 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Save className="w-3 h-3" />
                      write()
                    </button>
                  </div>
                </div>

                {/* Writer buffer cache in RAM */}
                <div>
                  <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                    Bộ đệm trong RAM của CharArrayWriter:
                  </label>
                  <div className="flex flex-wrap gap-1 p-2 bg-stone-900 border border-stone-850 rounded-xl min-h-[46px]">
                    {writerBuffer.map((c, idx) => (
                      <span
                        key={idx}
                        className="w-7 h-7 flex items-center justify-center font-mono text-xs bg-emerald-100 text-emerald-850 border border-emerald-200 rounded font-bold animate-fadeIn"
                      >
                        '{c}'
                      </span>
                    ))}
                    {writerBuffer.length === 0 && (
                      <span className="text-stone-550 italic text-[11px] m-auto">Bộ đệm rỗng (Đợi lệnh write)...</span>
                    )}
                  </div>
                </div>

                {/* toString result */}
                {writerResult && (
                  <div className="p-3 bg-stone-950 border border-stone-900 rounded-xl shadow-md animate-fadeIn">
                    <span className="text-[9px] text-emerald-450 font-bold uppercase tracking-wider block mb-1 font-mono">
                      Chuỗi xuất (toString()):
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      "{writerResult}"
                    </span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={handleToCharArray}
                  disabled={writerBuffer.length === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    writerBuffer.length > 0
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-stone-105 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  toCharArray()
                </button>
                <button
                  onClick={handleWriterToString}
                  disabled={writerBuffer.length === 0}
                  className={`px-3 py-2 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 ${
                    writerBuffer.length > 0
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-stone-105 text-stone-400 border border-stone-250 cursor-not-allowed"
                  }`}
                >
                  toString()
                </button>
                <button
                  onClick={handleResetWriter}
                  className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200 transition-all font-bold text-xs cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>
            </div>

            {/* Logs Console */}
            <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Nhật ký RAM (Writer Logs)
              </span>
              <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10.5px] text-emerald-405 space-y-1 overflow-y-auto max-h-[240px] min-h-[180px] shadow-md">
                {writerLogs.map((line, i) => (
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
