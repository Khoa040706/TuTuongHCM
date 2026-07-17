"use client";
import React, { useState } from "react";
import { Cpu, RotateCcw, Terminal } from "lucide-react";

export default function CollectionVectorExecuter() {
  const [step, setStep] = useState(0); // 0: idle
  const [courses, setCourses] = useState([]);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [log, setLog] = useState("Nhấn 'Chạy bước tiếp theo' để bắt đầu giải thích từng dòng code.");

  const handleStep = () => {
    if (step >= 7) return;

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep === 1) {
      setCourses([]);
      setLog("Dòng 1: Tạo đối tượng Vector rỗng courses = new Vector<String>() ở Heap.");
    } else if (nextStep === 2) {
      setCourses(["503005"]);
      setLog("Dòng 2: courses.add('503005') ➔ Thêm mã '503005' vào vị trí đầu tiên (index 0).");
    } else if (nextStep === 3) {
      // Shifting happens here
      setCourses(["501042", "503005"]);
      setLog("Dòng 3: courses.add(0, '501042') ➔ Chèn vào index 0. Phần tử '503005' bị dịch sang phải lên index 1.");
    } else if (nextStep === 4) {
      setCourses(["501042", "503005", "502043"]);
      setLog("Dòng 4: courses.add('502043') ➔ Thêm phần tử '502043' vào cuối danh sách (index 2).");
    } else if (nextStep === 5) {
      setConsoleLogs((prev) => [...prev, "[501042, 503005, 502043]"]);
      setLog("Dòng 5: System.out.println(courses) ➔ In toàn bộ Vector dạng chuỗi nhờ hàm toString() có sẵn.");
    } else if (nextStep === 6) {
      setConsoleLogs((prev) => [...prev, "At index 0: 501042"]);
      setLog("Dòng 6: courses.get(0) ➔ Lấy phần tử tại index 0 in ra console.");
    } else if (nextStep === 7) {
      setCourses(["501042", "502043"]);
      setConsoleLogs((prev) => [...prev, "501042", "502043"]);
      setLog("Dòng 7: courses.remove('503005') ➔ Xóa môn học '503005'. Phần tử '502043' bị kéo dồn về bên trái sang index 1.");
    }
  };

  const handleReset = () => {
    setStep(0);
    setCourses([]);
    setConsoleLogs([]);
    setLog("Nhấn 'Chạy bước tiếp theo' để bắt đầu giải thích từng dòng code.");
  };

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 h-1.5 absolute top-0 left-0 right-0" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-600" />
            <span>Trình Diễn Chạy Code TestVector Từng Bước</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Theo dõi sự biến đổi chỉ số phần tử của mảng động trong bộ nhớ RAM qua từng dòng code
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleStep}
            disabled={step >= 7}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer"
          >
            Chạy bước tiếp theo
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-stone-100 hover:bg-stone-200 rounded-xl border border-stone-200/60 text-stone-600 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Code viewer panel */}
        <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mã nguồn TestVector.java
            </span>

            <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] leading-relaxed text-indigo-100 shadow-md overflow-x-auto">
              <div className={step === 1 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`Vector<String> courses = new Vector<>();`}
              </div>
              <div className={step === 2 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`courses.add("503005");`}
              </div>
              <div className={step === 3 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 animate-pulse" : "px-1.5 py-0.5"}>
                {`courses.add(0, "501042"); // Dịch chuyển index`}
              </div>
              <div className={step === 4 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`courses.add("502043");`}
              </div>
              <div className={step === 5 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`System.out.println(courses);`}
              </div>
              <div className={step === 6 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`System.out.println("At index 0: " + courses.get(0));`}
              </div>
              <div className={step === 7 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                {`courses.remove("503005"); // Dịch chuyển dồn index`}
              </div>
            </pre>
          </div>
        </div>

        {/* JVM RAM heap & Console output */}
        <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div className="space-y-4">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
              Trạng thái mảng courses trong Heap
            </span>

            {step >= 1 ? (
              <div className="p-3.5 bg-white border border-stone-200/80 rounded-xl flex gap-2 font-mono text-[10px] items-center justify-center min-h-[58px] shadow-sm">
                {courses.length === 0 ? (
                  <span className="text-stone-400 italic py-1">courses rỗng []</span>
                ) : (
                  courses.map((val, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-stone-200 bg-stone-50/60 text-center min-w-[68px] shadow-sm"
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

      {/* Steps simulator log */}
      <div className="p-3.5 bg-stone-50 border border-stone-200/80 rounded-2xl text-xs leading-relaxed text-stone-600 font-mono shadow-inner">
        {log}
      </div>
    </div>
  );
}
