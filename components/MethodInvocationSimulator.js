"use client";
import React, { useState } from "react";

export default function MethodInvocationSimulator() {
  const [answers, setAnswers] = useState({
    q1: null, // null, 'correct', 'incorrect'
    q2: null,
    q3: null,
    q4: null
  });

  const questions = [
    {
      id: "q1",
      code: "double ans = Math.pow(3.5, 2.2);",
      desc: "Gọi phương thức pow() tính lũy thừa qua tên lớp Math.",
      correctVal: "valid", // 'valid' is correct
      explanation: "Chính xác! Lệnh pow() là một class method (static method) của lớp Math, do đó bắt buộc phải gọi trực tiếp thông qua tên lớp Math.pow(...) mà không cần tạo đối tượng."
    },
    {
      id: "q2",
      code: "int value = Scanner.nextInt();",
      desc: "Gọi phương thức nextInt() để đọc số nguyên trực tiếp qua tên lớp Scanner.",
      correctVal: "invalid", // 'invalid' is correct
      explanation: "Chính xác! Lệnh này SAI vì nextInt() là một instance method (non-static) của lớp Scanner. Bạn bắt buộc phải tạo đối tượng (ví dụ: sc = new Scanner(...)) rồi gọi sc.nextInt() thay vì gọi qua tên lớp Scanner."
    },
    {
      id: "q3",
      code: "String str = \"Some text\";\nstr = String.toUpperCase();",
      desc: "Gọi phương thức toUpperCase() trực tiếp qua tên lớp String.",
      correctVal: "invalid", // 'invalid' is correct
      explanation: "Chính xác! Lệnh này SAI vì toUpperCase() là instance method của lớp String. Ta không thể gọi qua tên lớp String.toUpperCase(). Thay vào đó phải gọi qua đối tượng cụ thể: str = str.toUpperCase();"
    },
    {
      id: "q4",
      code: "Scanner sc = new Scanner(System.in);\nint value = sc.nextInt();",
      desc: "Khởi tạo đối tượng Scanner là sc rồi gọi nextInt() thông qua sc.",
      correctVal: "valid", // 'valid' is correct
      explanation: "Chính xác! Lệnh này ĐÚNG hoàn toàn vì nextInt() là instance method, được gọi thông qua thực thể đối tượng sc đã được khởi tạo hợp lệ trước đó."
    }
  ];

  const handleSelect = (qId, choice) => {
    const q = questions.find((item) => item.id === qId);
    if (choice === q.correctVal) {
      setAnswers((prev) => ({ ...prev, [qId]: "correct" }));
    } else {
      setAnswers((prev) => ({ ...prev, [qId]: "incorrect" }));
    }
  };

  const getScore = () => {
    return Object.values(answers).filter((val) => val === "correct").length;
  };

  const allCompleted = Object.values(answers).every((val) => val !== null);

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header & Score Tracker */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-4 mb-5 gap-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            🚦 Trình Giả Lập Kiểm Tra Cú Pháp Gọi Hàm (Method Invocation)
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Xác định các dòng lệnh sau đây là ĐÚNG (Hợp lệ) hay SAI (Lỗi biên dịch) trong Java.
          </p>
        </div>
        <div className="bg-white border border-stone-200 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-sm shrink-0">
          <span className="text-xs text-stone-500 font-bold">Điểm của bạn:</span>
          <span className="text-sm font-black text-amber-600 font-mono">{getScore()} / 4</span>
        </div>
      </div>

      {/* Cards list */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const status = answers[q.id]; // null, 'correct', 'incorrect'
          
          return (
            <div
              key={q.id}
              className={`border rounded-2xl p-4 transition-all bg-white shadow-sm flex flex-col justify-between ${
                status === "correct"
                  ? "border-emerald-250 bg-emerald-50/5"
                  : status === "incorrect"
                  ? "border-rose-200 bg-rose-50/5"
                  : "border-stone-200"
              }`}
            >
              
              {/* Card info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                
                {/* Left side: Code snippet */}
                <div className="flex-1">
                  <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-1">Mã lệnh #{idx + 1}</div>
                  <pre className="bg-[#1e1d1a] border border-[#2a2926] p-3 rounded-xl text-white font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                    {q.code}
                  </pre>
                  <p className="text-[11px] text-stone-500 mt-1.5 leading-relaxed">
                    {q.desc}
                  </p>
                </div>

                {/* Right side: Option buttons */}
                <div className="flex gap-2 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => handleSelect(q.id, "valid")}
                    disabled={status !== null}
                    className={`flex-1 md:flex-none px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      status !== null
                        ? q.correctVal === "valid"
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "bg-stone-50 border-stone-200 text-stone-400"
                        : "border-stone-250 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-stone-700 hover:text-emerald-800"
                    }`}
                  >
                    ✔️ ĐÚNG
                  </button>
                  <button
                    onClick={() => handleSelect(q.id, "invalid")}
                    disabled={status !== null}
                    className={`flex-1 md:flex-none px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      status !== null
                        ? q.correctVal === "invalid"
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "bg-stone-50 border-stone-200 text-stone-400"
                        : "border-stone-250 bg-white hover:bg-rose-50 hover:border-rose-300 text-stone-700 hover:text-rose-800"
                    }`}
                  >
                    ❌ SAI
                  </button>
                </div>

              </div>

              {/* Explanations shown after answering */}
              {status !== null && (
                <div className={`mt-3.5 pt-3 border-t text-xs leading-relaxed flex gap-2 items-start ${
                  status === "correct" ? "border-emerald-100 text-emerald-850" : "border-rose-100 text-rose-850"
                }`}>
                  <span className="text-sm shrink-0">
                    {status === "correct" ? "🎉" : "💡 Cần lưu ý:"}
                  </span>
                  <div>
                    <span className="font-extrabold">{status === "correct" ? "Trả lời chính xác!" : "Lựa chọn chưa đúng."}</span>{" "}
                    {q.explanation}
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Completion congratulations banner */}
      {allCompleted && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center mt-5 font-sans animate-fade-in">
          <span className="text-2xl mb-1 block">🏆</span>
          <div className="text-xs font-extrabold text-amber-900">Chúc mừng bạn đã hoàn thành bài thực hành!</div>
          <p className="text-[10px] text-amber-800 mt-1 leading-relaxed">
            Bạn đã nắm rất vững cơ chế phân biệt cách gọi Class method (static) thông qua tên lớp và Instance method (non-static) thông qua đối tượng!
          </p>
        </div>
      )}

    </div>
  );
}
