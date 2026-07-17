"use client";
import React, { useState } from "react";
import { HelpCircle, AlertCircle, Play, RotateCcw, Info, Terminal, ChevronRight } from "lucide-react";

export default function ExceptionsErrorTypesAndExamples() {
  // Part A: Error Types
  const [selectedError, setSelectedError] = useState("syntax");

  // Part B: Step Runner
  const [runnerStep, setRunnerStep] = useState(0);
  const [runnerLogs, setRunnerLogs] = useState([]);
  const [runnerStatus, setRunnerStatus] = useState("idle"); // "idle", "running", "crashed"

  // Part C: Factorial Sim
  const [factorialInput, setFactorialInput] = useState("-5");
  const [factorialResult, setFactorialResult] = useState(null);
  const [factorialLogs, setFactorialLogs] = useState([]);
  const [factorialMode, setFactorialMode] = useState("EXIT"); // "NONE" | "EXIT"

  const errorTypes = {
    syntax: {
      title: "Syntax Errors (Lỗi cú pháp)",
      badge: "Dễ phát hiện nhất",
      color: "border-emerald-250 bg-emerald-50/40 text-emerald-800",
      desc: "Xảy ra khi vi phạm quy tắc cấu trúc của ngôn ngữ lập trình. Lỗi này luôn luôn được trình biên dịch (compiler) phát hiện trước khi chạy chương trình.",
      example: "int x = 10 // Thiếu dấu chấm phẩy ;\nSystem.out.println(x);"
    },
    runtime: {
      title: "Run-time Errors (Lỗi thời gian chạy)",
      badge: "Trung bình",
      color: "border-amber-250 bg-amber-50/40 text-amber-800",
      desc: "Xảy ra khi chương trình đang chạy gặp phải các phép toán bất hợp lý trong RAM. Ví dụ như chia cho 0, truy cập mảng ngoài biên, hoặc gọi phương thức từ tham chiếu null.",
      example: "int x = 10, y = 0;\nint z = x / y; // Lỗi chia cho 0 lúc chạy!"
    },
    logic: {
      title: "Logic Errors (Lỗi logic)",
      badge: "Khó phát hiện nhất",
      color: "border-rose-250 bg-rose-50/40 text-rose-800",
      desc: "Xảy ra khi chương trình vẫn biên dịch và chạy bình thường nhưng kết quả đầu ra bị sai so với yêu cầu nghiệp vụ của người viết. Trình biên dịch không thể phát hiện lỗi này.",
      example: "// Tính tổng từ 1 đến 10\nint sum = 0;\nfor (int i = 1; i < 10; i++) { // Sai điều kiện: thiếu số 10\n    sum += i;\n}"
    }
  };

  const handleNextRunnerStep = () => {
    if (runnerStep >= 3) return;
    const nextStep = runnerStep + 1;
    setRunnerStep(nextStep);

    if (nextStep === 1) {
      setRunnerStatus("running");
      setRunnerLogs(["Console: Khởi tạo Scanner sc và chờ người dùng nhập số..."]);
    } else if (nextStep === 2) {
      setRunnerLogs((prev) => [
        ...prev,
        "Console: Enter an integer: ",
        "User Input: [Gõ chữ 'abc' thay vì nhập số nguyên]"
      ]);
    } else if (nextStep === 3) {
      setRunnerStatus("crashed");
      setRunnerLogs((prev) => [
        ...prev,
        "❌ Exception in thread \"main\" java.util.InputMismatchException",
        "    at java.util.Scanner.throwFor(Scanner.java:864)",
        "    at java.util.Scanner.next(Scanner.java:1485)",
        "    at java.util.Scanner.nextInt(Scanner.java:2117)",
        "    at Example.main(Example.java:6)",
        "💥 CRASH: Chương trình dừng đột ngột, phần code in kết quả phía sau bị bỏ qua!"
      ]);
    }
  };

  const handleResetRunner = () => {
    setRunnerStep(0);
    setRunnerLogs([]);
    setRunnerStatus("idle");
  };

  const runFactorial = () => {
    const n = parseInt(factorialInput);
    if (isNaN(n)) {
      setFactorialLogs(["Lỗi: Hãy nhập một số nguyên hợp lệ."]);
      return;
    }

    if (n < 0) {
      if (factorialMode === "EXIT") {
        setFactorialLogs([
          "Stdout: n is negative",
          "🚨 SYSTEM.EXIT(1) TRIGGERED!",
          "💥 TERMINATED: Chương trình dừng ngay lập tức, trả về mã thoát (exit code) 1."
        ]);
        setFactorialResult(null);
      } else {
        // Simple loop return
        setFactorialLogs([
          "Stdout: Chạy factorial() không kiểm tra âm...",
          "Warning: Vòng lặp i=2 đến i <= n không chạy vì n âm. Trả về ans = 1 (sai logic!)."
        ]);
        setFactorialResult(1);
      }
    } else {
      let ans = 1;
      for (let i = 2; i <= n; i++) ans *= i;
      setFactorialLogs([`Stdout: factorial(${n}) thực thi thành công.`]);
      setFactorialResult(ans);
    }
  };

  return (
    <div className="space-y-6">
      {/* PART A: Three Error Types */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>Phần 1: Ba Loại Lỗi Trong Lập Trình</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Click vào các thẻ lỗi dưới đây để tìm hiểu chi tiết về cách phát hiện và độ khó xử lý của từng loại lỗi.
        </p>

        {/* 3 cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {Object.keys(errorTypes).map((key) => {
            const err = errorTypes[key];
            const isSelected = selectedError === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedError(key)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                  isSelected 
                    ? "bg-stone-50 border-stone-800 shadow-md scale-[1.02]" 
                    : "bg-white border-stone-200 hover:border-stone-300"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-800">{key}</span>
                  <span className={`text-[8px] font-bold px-2 py-0.5 border rounded-lg ${
                    key === "syntax" ? "bg-emerald-50 border-emerald-200 text-emerald-700" :
                    key === "runtime" ? "bg-amber-50 border-amber-200 text-amber-700" :
                    "bg-rose-50 border-rose-200 text-rose-700"
                  }`}>
                    {err.badge}
                  </span>
                </div>
                <h5 className="font-bold text-xs text-stone-900 mb-2">{err.title}</h5>
                <p className="text-xs text-stone-500 leading-normal line-clamp-3">
                  {err.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Difficulty Bar */}
        <div className="bg-stone-50/60 p-3 rounded-2xl border border-stone-200/60 mb-6 text-center text-[10px] font-bold font-mono text-stone-400 uppercase tracking-widest relative overflow-hidden">
          <div className="flex justify-between relative z-10 px-4">
            <span className="text-emerald-600">Dễ phát hiện nhất</span>
            <ChevronRight className="w-4 h-4 text-stone-300" />
            <span className="text-amber-600">Trung bình</span>
            <ChevronRight className="w-4 h-4 text-stone-300" />
            <span className="text-rose-600">Khó phát hiện nhất</span>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-rose-500/5 z-0" />
        </div>

        {/* Selected Error details */}
        <div className="bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80">
          <span className="text-[10px] text-stone-450 font-bold uppercase tracking-wider block mb-2 font-mono">
            💡 Chi tiết & Ví dụ minh họa ({selectedError})
          </span>
          <p className="text-xs text-stone-650 leading-relaxed mb-4">
            {errorTypes[selectedError].desc}
          </p>
          <pre className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] leading-relaxed text-indigo-300 overflow-x-auto shadow-inner">
            {errorTypes[selectedError].example}
          </pre>
        </div>

        {/* Exam warning */}
        <div className="bg-yellow-50/60 border border-yellow-250/60 rounded-2xl p-4 flex gap-3 items-start mt-4 shadow-sm">
          <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-yellow-900 font-mono uppercase tracking-wider block">
              📌 Mẹo ôn tập phòng thi
            </span>
            <p className="text-xs text-yellow-700 mt-1 leading-relaxed">
              Thứ tự độ khó phát hiện lỗi tăng dần: <strong>Syntax (dễ nhất) ➔ Run-time ➔ Logic (khó nhất)</strong>. Đề thi trắc nghiệm cực kỳ thích các câu hỏi phân loại này.
            </p>
          </div>
        </div>
      </div>

      {/* PART B: Step Runner for Example.java */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-amber-500 to-rose-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-amber-600" />
          <span>Phần 2: Giả Lập Lỗi Run-time (Example.java)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Chạy từng dòng code bên dưới và mô phỏng việc người dùng nhập nhầm chữ thay vì số nguyên để xem JVM quăng Stack Trace thế nào.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-4">
          {/* Source code panel */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Mã nguồn Example.java
              </span>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] leading-relaxed text-amber-100 shadow-md">
                <div className="px-1.5 py-0.5 text-stone-550">{`import java.util.Scanner;`}</div>
                <div className="px-1.5 py-0.5 text-stone-550">{`public class Example {`}</div>
                <div className="px-1.5 py-0.5 text-stone-550">{`  public static void main(String[] args) {`}</div>
                <div className={runnerStep === 1 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-6" : "px-1.5 py-0.5 pl-6"}>
                  {`Scanner sc = new Scanner(System.in);`}
                </div>
                <div className={runnerStep === 2 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-6" : "px-1.5 py-0.5 pl-6"}>
                  {`System.out.print("Enter an integer: ");`}
                </div>
                <div className={runnerStep === 3 ? "text-red-400 font-bold bg-red-950/40 px-1.5 py-0.5 rounded border border-red-800/30 pl-6 animate-pulse" : "px-1.5 py-0.5 pl-6"}>
                  {`int num = sc.nextInt(); // ❌ Nhập chữ sẽ lỗi ở đây`}
                </div>
                <div className="px-1.5 py-0.5 text-stone-550 pl-6">
                  {`System.out.println("num = " + num);`}
                </div>
                <div className="px-1.5 py-0.5 text-stone-550">{`  }`}</div>
                <div className="px-1.5 py-0.5 text-stone-550">{`}`}</div>
              </pre>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleNextRunnerStep}
                disabled={runnerStep >= 3}
                className="flex-1 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Chạy bước tiếp theo</span>
              </button>
              <button
                onClick={handleResetRunner}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Output console */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Console Output & Stack Trace
              </span>

              <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] min-h-[140px] space-y-1.5 shadow-md overflow-y-auto">
                {runnerLogs.length > 0 ? (
                  runnerLogs.map((line, idx) => {
                    let color = "text-stone-400";
                    if (line.startsWith("❌") || line.startsWith("💥") || line.startsWith("    at")) color = "text-red-400 font-bold";
                    if (line.startsWith("Console:")) color = "text-emerald-300";
                    if (line.startsWith("User Input:")) color = "text-yellow-400 font-bold";
                    return (
                      <div key={idx} className={color}>
                        {line}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-stone-600 italic text-[11px]">Chờ khởi động chương trình...</div>
                )}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-xs font-bold font-sans">
                <span className="text-stone-450 font-mono text-[10px] uppercase">Trạng thái:</span>
                {runnerStatus === "idle" && (
                  <span className="px-2 py-0.5 bg-stone-100 border border-stone-250/30 text-stone-600 rounded-md">Chờ chạy</span>
                )}
                {runnerStatus === "running" && (
                  <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md animate-pulse">Running</span>
                )}
                {runnerStatus === "crashed" && (
                  <span className="px-2 py-0.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-md">💥 Crashed (JVM Terminated)</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Explain stack trace */}
        <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-stone-850 font-mono">
              💡 Giải thích thêm: Stack trace là gì?
            </span>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              <strong>Stack trace</strong> là danh sách lịch sử gọi phương thức (call stack) dẫn tới lỗi. Nó giúp bạn dò ngược từ vị trí gây ra lỗi trong thư viện Java (<code className="bg-stone-200 px-1 rounded">Scanner.java</code>) cho đến chính xác dòng lệnh trong file code của bạn (<code className="bg-stone-200 px-1 rounded">Example.java:6</code>).
            </p>
          </div>
        </div>
      </div>

      {/* PART C: Factorial negatives simulator & System.exit */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-rose-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5 text-rose-600 animate-bounce" />
          <span>Phần 3: Factorial Với Tham Số Âm & System.exit</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Khi tham số truyền vào hàm tính giai thừa <code className="bg-stone-100 px-1 rounded font-mono">factorial(n)</code> âm, việc xử lý thô sơ bằng <code className="bg-stone-100 px-1 rounded font-mono">System.exit()</code> sẽ phá hỏng ứng dụng.
        </p>

        {/* Controls Grid */}
        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/65 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Giá trị n cần truyền:</label>
            <input
              type="number"
              value={factorialInput}
              onChange={(e) => setFactorialInput(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-rose-500 transition-colors shadow-sm font-mono"
            />
          </div>

          {/* Mode Tabs */}
          <div>
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Cơ chế kiểm soát lỗi:</label>
            <div className="flex bg-stone-200/50 p-1 rounded-xl border border-stone-200/60 select-none">
              <button
                onClick={() => setFactorialMode("NONE")}
                className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                  factorialMode === "NONE" ? "bg-white text-stone-850 shadow-sm" : "text-stone-500"
                }`}
              >
                Không check âm
              </button>
              <button
                onClick={() => setFactorialMode("EXIT")}
                className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                  factorialMode === "EXIT" ? "bg-white text-rose-700 shadow-sm" : "text-stone-500"
                }`}
              >
                Dùng System.exit(1)
              </button>
            </div>
          </div>

          <button
            onClick={runFactorial}
            className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-500/10 hover:shadow-rose-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
          >
            Chạy factorial({factorialInput})
          </button>
        </div>

        {/* Display results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch mb-6">
          {/* Logs */}
          <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-xs text-stone-300 min-h-[90px] flex flex-col justify-between shadow-md">
            <div>
              <span className="text-[8px] text-stone-500 block uppercase tracking-wider font-bold mb-1.5">Runtime Output Log</span>
              <div className="space-y-1">
                {factorialLogs.map((log, idx) => {
                  let color = "text-stone-300";
                  if (log.startsWith("🚨") || log.startsWith("💥")) color = "text-red-400 font-bold";
                  if (log.startsWith("Warning:")) color = "text-amber-400";
                  return <div key={idx} className={color}>{log}</div>;
                })}
              </div>
            </div>
          </div>

          {/* Result value */}
          <div className="p-3.5 bg-stone-50 border border-stone-200/80 rounded-xl flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[8px] text-stone-400 block uppercase tracking-wider font-bold font-mono">Kết quả ans trả về:</span>
              <div className="text-2xl font-black text-stone-850 font-mono mt-2">
                {factorialResult !== null ? factorialResult : "N/A"}
              </div>
            </div>
            <p className="text-[10px] text-stone-450 italic mt-2">
              *Mã thoát exit code 1 thông báo hệ thống đã sập hoàn toàn.*
            </p>
          </div>
        </div>

        {/* Source compare */}
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
          So sánh các cách xử lý code factorial()
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-[9px] text-stone-500 block font-bold mb-1 font-mono">1. Code gốc (chưa xử lý):</span>
            <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9.5px] leading-relaxed text-indigo-300 shadow-md overflow-x-auto">
{`public static int factorial(int n) {
    int ans = 1;
    for (int i = 2; i <= n; i++) ans *= i;
    return ans; // n < 0 trả về 1 (sai logic)
}`}
            </pre>
          </div>

          <div>
            <span className="text-[9px] text-stone-500 block font-bold mb-1 font-mono">2. Xử lý thô sơ bằng System.exit(1):</span>
            <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9.5px] leading-relaxed text-rose-350 shadow-md overflow-x-auto">
{`public static int factorial(int n) {
    if (n < 0) {
        System.out.println("n is negative");
        System.exit(1); // 💥 Dừng chương trình ngay lập tức
    }
    // ... code tiếp theo
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
