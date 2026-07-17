"use client";
import React, { useState } from "react";
import { AlertTriangle, BookOpen, ChevronRight, Play, Terminal } from "lucide-react";

export default function CollectionArrayCliDetour() {
  const [cliInput, setCliInput] = useState('java TestCommandLineArgs The "Harry Potter" series has 7 books.');
  const [parsedArgs, setParsedArgs] = useState([]);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const executeCommand = () => {
    setIsRunning(true);
    setParsedArgs([]);
    setConsoleLogs(["$ " + cliInput]);

    setTimeout(() => {
      // Basic parser matching words or quoted phrases
      const regex = /[^\s"']+|"([^"]*)"|'([^']*)'/g;
      const args = [];
      let match;
      
      // Extract part after java TestCommandLineArgs
      const cmdPrefix = "java TestCommandLineArgs";
      let inputToParse = cliInput;
      if (cliInput.startsWith(cmdPrefix)) {
        inputToParse = cliInput.substring(cmdPrefix.length).trim();
      }

      while ((match = regex.exec(inputToParse)) !== null) {
        // match[1] contains double quoted string, match[0] contains raw match
        const val = match[1] ? match[1] : match[0];
        args.push(val);
      }

      setParsedArgs(args);
      
      const logs = ["$ " + cliInput];
      args.forEach((arg, idx) => {
        logs.push(`args[${idx}] = ${arg}`);
      });

      setConsoleLogs(logs);
      setIsRunning(false);
    }, 800);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-teal-400 animate-pulse" />
            <span>Trình Thử Nghiệm CLI: Command-line Arguments</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Nhập dòng lệnh để giả lập cách JVM chuyển đối số thành mảng String[] args trong main()
          </p>
        </div>
      </div>

      {/* Input CLI Area */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 mb-6 flex gap-3 items-center">
        <span className="text-xs font-mono text-slate-500 font-bold shrink-0">Command:</span>
        <input
          type="text"
          value={cliInput}
          onChange={(e) => setCliInput(e.target.value)}
          className="flex-1 bg-slate-900 border border-slate-800 rounded px-3 py-1.5 font-mono text-xs text-slate-200 focus:outline-none focus:border-teal-500"
        />
        <button
          onClick={executeCommand}
          disabled={isRunning}
          className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded shadow transition-all shrink-0 select-none"
        >
          {isRunning ? "Đang chạy..." : "Chạy lệnh"}
        </button>
      </div>

      {/* CLI Output & RAM Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Terminal display */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Terminal Console Output
            </span>

            <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-xs text-emerald-400 space-y-1.5">
              {consoleLogs.length > 0 ? (
                consoleLogs.map((line, idx) => (
                  <div key={idx} className={idx === 0 ? "text-slate-550" : ""}>
                    {line}
                  </div>
                ))
              ) : (
                <div className="text-slate-650 italic">Chờ chạy lệnh...</div>
              )}
            </div>
          </div>
        </div>

        {/* String[] args array in RAM representation */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mảng String[] args trong RAM Heap
            </span>

            {parsedArgs.length > 0 ? (
              <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[10px] space-y-1.5 max-h-[140px] overflow-y-auto">
                <div className="text-teal-400 font-bold">args = new String[{parsedArgs.length}]</div>
                {parsedArgs.map((arg, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-850 pb-1">
                    <span className="text-slate-500">args[{idx}] ➔</span>
                    <span className="text-slate-200 font-bold">"{arg}"</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-700 font-mono text-xs">
                Chưa có mảng args[] được tạo.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Critical Exam Trap Highlight Callout */}
      <div className="bg-gradient-to-r from-rose-500/10 to-orange-500/10 border-l-4 border-rose-500 rounded-r-xl p-4 flex gap-3 items-start animate-pulse">
        <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-rose-400 font-mono uppercase tracking-wider block">
            🚨 Cạm Bẫy Đề Thi: length vs length()
          </span>
          <p className="text-xs text-slate-350 mt-1 leading-relaxed">
            Học sinh cực kỳ hay nhầm lẫn cú pháp lấy độ dài:
            <br />
            • <code>arr.length</code>: Dùng cho **Mảng (Array)**. Là **thuộc tính (attribute)** nên **CẤM** viết thêm cặp ngoặc tròn <code>()</code>.
            <br />
            • <code>str.length()</code>: Dùng cho **Chuỗi (String)**. Là **phương thức (method)** nên **BẮT BUỘC** phải có cặp ngoặc tròn <code>()</code>.
            <br />
            *Đề thi trắc nghiệm luôn luôn đưa ra các đoạn code viết sai như <code>arr.length()</code> hoặc <code>str.length</code> để đánh lừa thí sinh!*
          </p>
        </div>
      </div>
    </div>
  );
}
