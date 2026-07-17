"use client";
import React, { useState } from "react";
import { Cpu, RotateCcw, Terminal } from "lucide-react";

export default function CollectionArrayListExecuter() {
  const [step, setStep] = useState(0); // 0: idle
  const [list, setList] = useState([]);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [log, setLog] = useState("Nhấn 'Chạy bước tiếp theo' để bắt đầu giải thích dòng code TestArrayList.");

  const handleStep = () => {
    if (step >= 6) return;

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep === 1) {
      setList([]);
      setConsoleLogs(["Enter a list of integers, press ctrl-d to end."]);
      setLog("Dòng 1-3: Khởi tạo Scanner sc và ArrayList list trống rỗng trong Heap.");
    } else if (nextStep === 2) {
      setList([31, 17, -5, 26, 50]);
      setLog("Dòng 4-5: Đọc các số nguyên (31, 17, -5, 26, 50) từ bàn phím và chèn vào cuối list bằng add(element).");
    } else if (nextStep === 3) {
      setConsoleLogs((prev) => [...prev, "[31, 17, -5, 26, 50]"]);
      setLog("Dòng 6: System.out.println(list) ➔ In toàn bộ list ra console (ArrayList tự động gọi hàm toString()).");
    } else if (nextStep === 4) {
      // remove index 0
      setList([17, -5, 26, 50]);
      setLog("Dòng 7 (vế trong): list.remove(0) ➔ Xóa phần tử đầu tiên (31). Toàn bộ các phần tử phía sau tự động dịch chuyển sang trái (index dịch từ 1->0, 2->1...).");
    } else if (nextStep === 5) {
      // add deleted value (31) to end
      setList([17, -5, 26, 50, 31]);
      setLog("Dòng 7 (vế ngoài): list.add(31) ➔ Chèn giá trị vừa xóa (31) vào cuối danh sách.");
    } else if (nextStep === 6) {
      setConsoleLogs((prev) => [...prev, "[17, -5, 26, 50, 31]"]);
      setLog("Dòng 8: System.out.println(list) ➔ In mảng mới ra console. Kết quả cho thấy phần tử đầu tiên đã được đảo xuống cuối danh sách.");
    }
  };

  const handleReset = () => {
    setStep(0);
    setList([]);
    setConsoleLogs([]);
    setLog("Nhấn 'Chạy bước tiếp theo' để bắt đầu giải thích dòng code TestArrayList.");
  };

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 h-1.5 absolute top-0 left-0 right-0" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-600" />
            <span>Trình Diễn Chạy Code TestArrayList Từng Bước</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Xem cách RAM xử lý hàm ghép list.add(list.remove(0)) để chuyển phần tử đầu xuống cuối
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleStep}
            disabled={step >= 6}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer"
          >
            Chạy bước tiếp theo
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Source Code */}
        <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mã nguồn TestArrayList.java
            </span>

            <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] leading-relaxed text-indigo-100 shadow-md overflow-x-auto">
              <div className={step === 1 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`ArrayList<Integer> list = new ArrayList<>();`}
              </div>
              <div className={step === 2 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`while (sc.hasNextInt()) { list.add(sc.nextInt()); }`}
              </div>
              <div className={step === 3 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`System.out.println(list);`}
              </div>
              <div className={(step === 4 || step === 5) ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 animate-pulse" : "px-1.5 py-0.5"}>
                {`list.add(list.remove(0)); // remove(0) rồi add(val)`}
              </div>
              <div className={step === 6 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`System.out.println(list);`}
              </div>
            </pre>
          </div>
        </div>

        {/* Console & Heap State */}
        <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div className="space-y-4">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
              Bộ nhớ Heap (Các phần tử của list)
            </span>

            {step >= 1 ? (
              <div className="p-3.5 bg-white border border-stone-200/80 rounded-xl flex gap-2 font-mono text-[10px] items-center justify-center min-h-[58px] shadow-sm">
                {list.length === 0 ? (
                  <span className="text-stone-400 italic py-1">list trống []</span>
                ) : (
                  list.map((val, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-stone-200 bg-stone-50/60 text-center min-w-[50px] shadow-sm"
                    >
                      <span className="text-[8px] text-stone-400 block font-bold">[{idx}]</span>
                      <span className="font-bold text-stone-850">{val}</span>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="text-center py-4 text-stone-400 font-mono text-xs">
                Chờ chạy chương trình...
              </div>
            )}

            <span className="text-[10px] text-stone-450 font-bold uppercase tracking-wider block font-mono flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-stone-400" />
              <span>Console Output</span>
            </span>

            <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-xs text-emerald-400 min-h-[80px] space-y-1 shadow-md">
              {consoleLogs.length > 0 ? (
                consoleLogs.map((line, idx) => <div key={idx}>{line}</div>)
              ) : (
                <div className="text-stone-600 italic text-[11px]">Chưa có kết quả in ra...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Execution logs */}
      <div className="p-3.5 bg-stone-50 border border-stone-200/80 rounded-2xl text-xs leading-relaxed text-stone-600 font-mono shadow-inner">
        {log}
      </div>
    </div>
  );
}
