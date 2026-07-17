"use client";
import React, { useState } from "react";
import { Terminal, Cpu, Play, RotateCcw, Info, ArrowDown, Network } from "lucide-react";

export default function FileStreamsAndIO() {
  // Part A: System Console Simulator
  const [inputText, setInputText] = useState("");
  const [consoleMode, setConsoleMode] = useState("out"); // "out" | "err"
  const [consoleLogs, setConsoleLogs] = useState([
    { type: "sys", text: "Standard Console Initialized." }
  ]);

  // Part B: Inheritance Tree
  const [selectedClass, setSelectedClass] = useState("inputstream");

  const streamClassesInfo = {
    inputstream: {
      name: "InputStream",
      type: "Abstract Class (Lớp trừu tượng)",
      desc: "Lớp cha của mọi luồng Byte hướng nhập (đọc). Vì là abstract class nên bạn KHÔNG thể dùng từ khóa 'new' khởi tạo trực tiếp lớp này, mà phải thông qua lớp con.",
      example: "// Lỗi biên dịch:\n// InputStream is = new InputStream();\n\n// Khởi tạo đúng thông qua lớp con:\nInputStream is = new FileInputStream(\"file.txt\");"
    },
    outputstream: {
      name: "OutputStream",
      type: "Abstract Class (Lớp trừu tượng)",
      desc: "Lớp cha của mọi luồng Byte hướng xuất (ghi). Tương tự InputStream, đây là abstract class làm khuôn mẫu cho các lớp con ghi dữ liệu nhị phân.",
      example: "// Khởi tạo đúng thông qua lớp con:\nOutputStream os = new FileOutputStream(\"file.txt\");"
    },
    fileinput: {
      name: "FileInputStream",
      type: "Subclass (Lớp con cụ thể)",
      desc: "Lớp con kế thừa từ InputStream, chuyên dùng để đọc dữ liệu dạng byte trực tiếp từ một tệp tin vật lý trên ổ cứng.",
      example: "File file = new File(\"data.bin\");\nFileInputStream fis = new FileInputStream(file);\nint byteData = fis.read();"
    },
    fileoutput: {
      name: "FileOutputStream",
      type: "Subclass (Lớp con cụ thể)",
      desc: "Lớp con kế thừa từ OutputStream, dùng để xuất/ghi dữ liệu thô dạng byte trực tiếp ra một tệp tin vật lý.",
      example: "FileOutputStream fos = new FileOutputStream(\"output.bin\");\nfos.write(65); // Ghi ký tự 'A' dưới dạng byte"
    }
  };

  const handleSendToConsole = () => {
    if (!inputText.trim()) return;
    const txt = inputText.trim();
    setInputText("");

    if (consoleMode === "out") {
      setConsoleLogs((prev) => [
        ...prev,
        { type: "in", text: `[System.in Input]: ${txt}` },
        { type: "out", text: `[System.out Output]: ${txt.toUpperCase()}` }
      ]);
    } else {
      setConsoleLogs((prev) => [
        ...prev,
        { type: "in", text: `[System.in Input]: ${txt}` },
        { type: "err", text: `[System.err Error]: ❌ Runtime error occurred with message: '${txt}'` }
      ]);
    }
  };

  const handleResetConsole = () => {
    setConsoleLogs([{ type: "sys", text: "Standard Console Initialized." }]);
    setInputText("");
  };

  return (
    <div className="space-y-6">
      {/* PART A: Standard Console Simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-sky-600" />
          <span>Mục I - Phần 3: Giả Lập Hệ Thống Cổng Standard I/O (System.in/out/err)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Java định nghĩa sẵn 3 luồng Standard I/O không cần khai báo. Thử chọn loại xuất dữ liệu và gửi thông điệp để xem luồng dữ liệu byte truyền tải thế nào.
        </p>

        {/* Console Controls */}
        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/65 mb-6 flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Dữ liệu nhập từ bàn phím (System.in):</label>
            <input
              type="text"
              value={inputText}
              placeholder="Nhập thông điệp tại đây..."
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendToConsole()}
              className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-sky-500 transition-colors shadow-sm font-mono"
            />
          </div>

          <div>
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Cổng xuất kết quả (Stdout/Stderr):</label>
            <div className="flex bg-stone-200/50 p-1 rounded-xl border border-stone-200/60 select-none">
              <button
                onClick={() => setConsoleMode("out")}
                className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                  consoleMode === "out" ? "bg-white text-sky-700 shadow-sm" : "text-stone-500"
                }`}
              >
                System.out
              </button>
              <button
                onClick={() => setConsoleMode("err")}
                className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                  consoleMode === "err" ? "bg-white text-rose-700 shadow-sm" : "text-stone-500"
                }`}
              >
                System.err
              </button>
            </div>
          </div>

          <button
            onClick={handleSendToConsole}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer select-none hover:scale-[1.02]"
          >
            Gửi (Enter)
          </button>
          
          <button
            onClick={handleResetConsole}
            className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Display screen */}
        <div className="p-4 bg-stone-900 border border-stone-850 rounded-2xl font-mono text-[10.5px] min-h-[140px] space-y-1 shadow-md max-h-[180px] overflow-y-auto">
          {consoleLogs.map((log, idx) => {
            let color = "text-stone-400";
            if (log.type === "in") color = "text-emerald-300";
            if (log.type === "out") color = "text-sky-300 font-bold";
            if (log.type === "err") color = "text-rose-450 font-bold";
            return <div key={idx} className={color}>{log.text}</div>;
          })}
        </div>

        {/* Warning card */}
        <div className="bg-yellow-50/60 border border-yellow-250/60 rounded-2xl p-4 flex gap-3 items-start mt-4 shadow-sm">
          <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-yellow-900 font-mono uppercase tracking-wider block">
              ⚠️ Điểm dễ nhầm lẫn (Đi thi lý thuyết)
            </span>
            <p className="text-xs text-yellow-700 mt-1 leading-relaxed">
              Hãy nhớ <code>System.in</code> đại diện cho luồng <strong>đọc dữ liệu vào</strong> (Read), còn <code>System.out</code> và <code>System.err</code> là luồng chuẩn dùng để <strong>ghi dữ liệu ra ngoài</strong> (Write). Cả ba đều là các stream chuẩn cài đặt sẵn, không cần khai báo.
            </p>
          </div>
        </div>
      </div>

      {/* PART B: Stream Inheritance tree */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Network className="w-5 h-5 text-sky-600" />
          <span>Mục III: Phân Cấp Thừa Kế (Inheritance) Của Stream Classes</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Nhấp chọn vào các khối sơ đồ phân cấp lớp luồng nhị phân (Byte Stream) dưới đây để kiểm tra cú pháp và quy tắc thừa kế trừu tượng.
        </p>

        {/* Interactive Inheritance Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Sơ đồ cây */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-center items-center shadow-inner relative min-h-[220px]">
            <div className="flex flex-col items-center gap-6 w-full text-center">
              
              {/* Abstract Level */}
              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                <div
                  onClick={() => setSelectedClass("inputstream")}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedClass === "inputstream" ? "bg-stone-900 border-stone-900 text-white shadow-md scale-105" : "bg-white border-stone-250 text-stone-600 hover:border-sky-350"
                  }`}
                >
                  <span className="block text-[8px] text-stone-400 font-mono">Abstract class</span>
                  InputStream
                </div>

                <div
                  onClick={() => setSelectedClass("outputstream")}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedClass === "outputstream" ? "bg-stone-900 border-stone-900 text-white shadow-md scale-105" : "bg-white border-stone-250 text-stone-600 hover:border-sky-350"
                  }`}
                >
                  <span className="block text-[8px] text-stone-400 font-mono">Abstract class</span>
                  OutputStream
                </div>
              </div>

              {/* Arrow down indicators */}
              <div className="flex justify-around w-full max-w-sm text-stone-400">
                <ArrowDown className="w-4 h-4" />
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Concrete Subclasses Level */}
              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                <div
                  onClick={() => setSelectedClass("fileinput")}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedClass === "fileinput" ? "bg-stone-900 border-stone-900 text-white shadow-md scale-105" : "bg-white border-stone-250 text-stone-600 hover:border-sky-350"
                  }`}
                >
                  <span className="block text-[8px] text-stone-400 font-mono">Subclass cụ thể</span>
                  FileInputStream
                </div>

                <div
                  onClick={() => setSelectedClass("fileoutput")}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedClass === "fileoutput" ? "bg-stone-900 border-stone-900 text-white shadow-md scale-105" : "bg-white border-stone-250 text-stone-600 hover:border-sky-350"
                  }`}
                >
                  <span className="block text-[8px] text-stone-400 font-mono">Subclass cụ thể</span>
                  FileOutputStream
                </div>
              </div>

            </div>
          </div>

          {/* Diễn giải chi tiết */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <div>
                <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                  {streamClassesInfo[selectedClass].type}
                </span>
                <h5 className="font-extrabold text-sm text-stone-850 mt-1">
                  {streamClassesInfo[selectedClass].name}
                </h5>
              </div>

              <p className="text-xs text-stone-650 leading-relaxed">
                {streamClassesInfo[selectedClass].desc}
              </p>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9.5px] leading-relaxed text-indigo-300 shadow-md overflow-x-auto">
                {streamClassesInfo[selectedClass].example}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
