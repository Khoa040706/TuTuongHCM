"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ArrowRight, Database, Cpu, Info, Save, ToggleLeft, ToggleRight } from "lucide-react";

export default function SerializationVisualizer() {
  const [isTransient, setIsTransient] = useState(true);
  const [isStatic, setIsStatic] = useState(true);
  
  const [step, setStep] = useState("init"); // init, serialized, deserialized
  const [logs, setLogs] = useState(["Object streams ready. Configured Employee attributes."]);

  // Employee values
  const lastName = "Smith";
  const firstName = "John";
  const sal = 5000.0;

  const handleSerialize = () => {
    const newLogs = [];
    newLogs.push("⚙️ [writeObject()] Bắt đầu tuần tự hóa đối tượng Employee...");
    
    if (isTransient) {
      newLogs.push("• Phát hiện thuộc tính 'lastName' là transient ➔ Bỏ qua không lưu.");
    } else {
      newLogs.push(`• Tuần tự hóa 'lastName': "${lastName}"`);
    }

    if (isStatic) {
      newLogs.push("• Phát hiện thuộc tính 'firstName' là static ➔ Bỏ qua không lưu (thuộc về lớp, không thuộc đối tượng).");
    } else {
      newLogs.push(`• Tuần tự hóa 'firstName': "${firstName}"`);
    }

    newLogs.push(`• Tuần tự hóa 'sal': ${sal}`);
    newLogs.push("➔ Ghi các byte dữ liệu đối tượng xuống tệp tin 'employee.ser'. Ghi thành công.");

    setStep("serialized");
    setLogs(prev => [...prev, ...newLogs, "---"]);
  };

  const handleDeserialize = () => {
    const newLogs = [];
    newLogs.push("⚙️ [readObject()] Đang đọc tệp tin 'employee.ser' để khôi phục đối tượng...");
    newLogs.push("• Đọc dữ liệu thô và phân tích cấu trúc đối tượng.");
    newLogs.push(`• Phục hồi thuộc tính 'sal': ${sal}`);

    if (isTransient) {
      newLogs.push("• Thuộc tính 'lastName' (transient) không có trong file ➔ Khôi phục về giá trị mặc định: null");
    } else {
      newLogs.push(`• Phục hồi thuộc tính 'lastName': "${lastName}"`);
    }

    if (isStatic) {
      newLogs.push("• Thuộc tính 'firstName' (static) không có trong file ➔ Khôi phục về giá trị mặc định của lớp: null");
    } else {
      newLogs.push(`• Phục hồi thuộc tính 'firstName': "${firstName}"`);
    }

    newLogs.push("➔ Khôi phục đối tượng thành công trong RAM.");

    setStep("deserialized");
    setLogs(prev => [...prev, ...newLogs, "---"]);
  };

  const handleReset = () => {
    setStep("init");
    setLogs(["Đã reset cấu hình. Sẵn sàng tuần tự hóa đối tượng mới."]);
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div>
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-650" />
          <span>Mục XXV: Trình trực quan tuần tự hóa đối tượng (Serialization & Deserialization)</span>
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bật/tắt các từ khóa <code className="bg-stone-100 px-1 rounded font-bold">transient</code> và <code className="bg-stone-100 px-1 rounded font-bold">static</code> để xem dữ liệu bị lược bỏ trong file nhị phân.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
        {/* Left: Configuration & Input Object */}
        <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div className="space-y-4">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
              Đối tượng gốc trong RAM (Employee class)
            </span>

            {/* RAM Object Card */}
            <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-sm space-y-3">
              {/* Field 1: lastName */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-stone-800">String lastName</span>
                  <span className="text-[10px] text-stone-450">Giá trị: "{lastName}"</span>
                </div>
                <button
                  onClick={() => step === "init" && setIsTransient(!isTransient)}
                  disabled={step !== "init"}
                  className={`px-2 py-1 rounded text-[9px] font-mono font-bold flex items-center gap-1 transition-all ${
                    isTransient
                      ? "bg-amber-100 text-amber-700 border border-amber-300"
                      : "bg-stone-100 text-stone-500 border border-stone-200"
                  }`}
                >
                  {isTransient ? "transient ON" : "transient OFF"}
                </button>
              </div>

              {/* Field 2: firstName */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-stone-800">String firstName</span>
                  <span className="text-[10px] text-stone-450">Giá trị: "{firstName}"</span>
                </div>
                <button
                  onClick={() => step === "init" && setIsStatic(!isStatic)}
                  disabled={step !== "init"}
                  className={`px-2 py-1 rounded text-[9px] font-mono font-bold flex items-center gap-1 transition-all ${
                    isStatic
                      ? "bg-purple-100 text-purple-700 border border-purple-300"
                      : "bg-stone-100 text-stone-500 border border-stone-200"
                  }`}
                >
                  {isStatic ? "static ON" : "static OFF"}
                </button>
              </div>

              {/* Field 3: sal */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-stone-850">double sal</span>
                  <span className="text-[10px] text-stone-450">Giá trị: {sal}</span>
                </div>
                <span className="text-[9px] font-mono font-bold bg-stone-105 text-stone-600 px-2 py-0.5 rounded border border-stone-200">
                  Normal
                </span>
              </div>
            </div>

            {/* Target File representation */}
            {step !== "init" && (
              <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl animate-fadeIn">
                <div className="flex items-center gap-1 text-stone-450 mb-2">
                  <Database className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[9px] font-bold font-mono uppercase">Tệp tin: employee.ser (ổ đĩa)</span>
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[10px] text-stone-300">
                  <span className="px-1.5 py-0.5 bg-stone-800 rounded text-sky-400">AC ED 00 05</span>
                  <span className="px-1.5 py-0.5 bg-stone-800 rounded text-stone-500">Employee</span>
                  <span className="px-1.5 py-0.5 bg-stone-805 rounded text-emerald-400">sal: {sal}</span>
                  {!isTransient && (
                    <span className="px-1.5 py-0.5 bg-stone-800 rounded text-amber-400">lastName: "{lastName}"</span>
                  )}
                  {!isStatic && (
                    <span className="px-1.5 py-0.5 bg-stone-800 rounded text-purple-400">firstName: "{firstName}"</span>
                  )}
                </div>
              </div>
            )}

            {/* Restored Object */}
            {step === "deserialized" && (
              <div className="p-3 bg-emerald-950 border border-emerald-900 rounded-xl animate-fadeIn">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-2">
                  <Cpu className="w-3.5 h-3.5 text-emerald-450" />
                  <span className="text-[9px] font-bold font-mono uppercase">Đối tượng đã khôi phục (RAM)</span>
                </div>
                <div className="space-y-1 text-xs font-mono text-white">
                  <div>lastName: <span className={isTransient ? "text-amber-400 font-bold" : "text-stone-300"}>{isTransient ? "null" : `"${lastName}"`}</span></div>
                  <div>firstName: <span className={isStatic ? "text-purple-400 font-bold" : "text-stone-300"}>{isStatic ? "null" : `"${firstName}"`}</span></div>
                  <div>sal: <span className="text-emerald-400 font-bold">{sal}</span></div>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-6">
            {step === "init" && (
              <button
                onClick={handleSerialize}
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
              >
                <Save className="w-3.5 h-3.5" />
                writeObject()
              </button>
            )}

            {step === "serialized" && (
              <button
                onClick={handleDeserialize}
                className="px-3 py-2 bg-emerald-650 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1 animate-pulse"
              >
                <Play className="w-3.5 h-3.5" />
                readObject()
              </button>
            )}

            {step !== "init" && (
              <button
                onClick={handleReset}
                className="px-3 py-2 bg-stone-100 hover:bg-stone-205 text-stone-600 rounded-xl border border-stone-200 transition-all font-bold text-xs cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Right: Console Logs */}
        <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col shadow-inner">
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
            Nhật ký JVM & Luồng dữ liệu (Object Streams logs)
          </span>
          <div className="flex-1 p-3 bg-stone-950 border border-stone-900 rounded-xl font-mono text-[10px] text-sky-400 space-y-1.5 overflow-y-auto max-h-[280px] min-h-[220px] shadow-md">
            {logs.map((line, i) => (
              <div key={i} className="border-b border-stone-900/30 pb-0.5">{line}</div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Educational info */}
      <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-4 mt-6 flex gap-3 text-xs leading-relaxed text-sky-900 shadow-sm">
        <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
        <div>
          <strong className="block text-sky-950 mb-0.5">💡 Quy tắc thi lý thuyết:</strong>
          • Các trường khai báo <code className="bg-sky-100 px-1 rounded font-bold">transient</code> sẽ được bỏ qua trong quá trình Serialization. Khi hồi sinh, chúng sẽ nhận giá trị mặc định (ví dụ: null cho đối tượng, 0 cho số).<br/>
          • Các trường <code className="bg-sky-100 px-1 rounded font-bold">static</code> cũng không được lưu trữ vì chúng thuộc về lớp (class), không nằm trong trạng thái của đối tượng cụ thể.
        </div>
      </div>
    </div>
  );
}
