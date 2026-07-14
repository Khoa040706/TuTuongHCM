/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";

export default function MemoryVisualizer() {
  const [mode, setMode] = useState("value"); // "value" or "reference"
  const [step, setStep] = useState(0); // 0 to 3

  const reset = () => {
    setStep(0);
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Content for explanation console
  const explanations = {
    value: [
      {
        title: "Bước 1: Khởi tạo trong main()",
        desc: "Trong hàm <code>main()</code>, ta khai báo biến <code>int a = 10;</code>. Hệ thống cấp phát ô nhớ địa chỉ <code>0x100</code> cho biến <code>a</code> với giá trị là 10 nằm trong Stack Frame của <code>main()</code>.",
        stack: [
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 10, isCopy: false }] }
        ]
      },
      {
        title: "Bước 2: Gọi hàm tangLen(a)",
        desc: "Khi gọi hàm <code>tangLen(a)</code>, CPU tạo một <b>Stack Frame mới</b> cho hàm này. Vì là <b>Pass by Value (Truyền tham trị)</b>, hệ thống cấp phát một ô nhớ hoàn toàn độc lập <code>0x200</code> cho đối số <code>x</code> và <b>copy giá trị 10</b> từ <code>a</code> sang <code>x</code>.",
        stack: [
          { frame: "tangLen(int x)", vars: [{ name: "x", addr: "0x200", val: 10, isCopy: true, originAddr: "0x100" }] },
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 10, isCopy: false }] }
        ]
      },
      {
        title: "Bước 3: Thực thi x++ trong hàm",
        desc: "Lệnh <code>x++</code> được thực thi bên trong hàm. CPU thay đổi giá trị tại ô nhớ của biến cục bộ <code>x</code> (địa chỉ <code>0x200</code>) từ 10 thành 11. Ô nhớ <code>0x100</code> của biến <code>a</code> ở hàm <code>main()</code> hoàn toàn <b>không bị ảnh hưởng</b>.",
        stack: [
          { frame: "tangLen(int x)", vars: [{ name: "x", addr: "0x200", val: 11, isCopy: true, originAddr: "0x100", modified: true }] },
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 10, isCopy: false }] }
        ]
      },
      {
        title: "Bước 4: Kết thúc hàm và huỷ Stack Frame",
        desc: "Hàm <code>tangLen()</code> kết thúc. Stack Frame của nó bị xoá bỏ khỏi Call Stack cùng với biến <code>x</code>. Điều khiển quay lại hàm <code>main()</code>, giá trị của <code>a</code> tại <code>0x100</code> vẫn là <b>10</b> (không đổi).",
        stack: [
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 10, isCopy: false }] }
        ]
      }
    ],
    reference: [
      {
        title: "Bước 1: Khởi tạo trong main()",
        desc: "Hàm <code>main()</code> khởi tạo biến <code>int a = 10;</code> tại địa chỉ ô nhớ <code>0x100</code> nằm trong Stack Frame của <code>main()</code>.",
        stack: [
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 10, isCopy: false }] }
        ]
      },
      {
        title: "Bước 2: Gọi hàm tangLen(a)",
        desc: "Khi gọi hàm <code>tangLen(int& x)</code>, một Stack Frame mới được đẩy vào Call Stack. Vì là <b>Pass by Reference (Truyền tham chiếu)</b>, biến <code>x</code> được tạo ra như một <b>bí danh (alias)</b> trỏ thẳng vào địa chỉ ô nhớ <code>0x100</code> của <code>a</code>. Không có ô nhớ mới chứa bản copy nào được tạo ra.",
        stack: [
          { frame: "tangLen(int& x)", vars: [{ name: "x (alias)", addr: "0x100", val: 10, isAlias: true }] },
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 10, isCopy: false }] }
        ]
      },
      {
        title: "Bước 3: Thực thi x++ trong hàm",
        desc: "Lệnh <code>x++</code> được thực thi. Do <code>x</code> chỉ là bí danh trỏ đến <code>0x100</code>, CPU thay đổi giá trị trực tiếp tại ô nhớ <code>0x100</code> từ 10 thành 11. Do đó, biến gốc <code>a</code> trong <code>main()</code> bị <b>thay đổi trực tiếp</b>.",
        stack: [
          { frame: "tangLen(int& x)", vars: [{ name: "x (alias)", addr: "0x100", val: 11, isAlias: true, modified: true }] },
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 11, isCopy: false, modified: true }] }
        ]
      },
      {
        title: "Bước 4: Kết thúc hàm và huỷ Stack Frame",
        desc: "Hàm <code>tangLen()</code> hoàn thành và Stack Frame của nó bị huỷ bỏ. Quay lại hàm <code>main()</code>, giá trị của <code>a</code> tại địa chỉ <code>0x100</code> đã tăng lên thành <b>11</b>.",
        stack: [
          { frame: "main()", vars: [{ name: "a", addr: "0x100", val: 11, isCopy: false, modified: true }] }
        ]
      }
    ]
  };

  const currentStepData = explanations[mode][step];

  // Monitor mode change to reset step
  useEffect(() => {
    setStep(0);
  }, [mode]);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      {/* Header Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-stone-200 pb-4">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            Giả Lập Call Stack & Địa Chỉ Bộ Nhớ
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Quan sát biến thay đổi trong Stack Frame như thế nào ở từng bước.
          </p>
        </div>
        <div className="flex bg-stone-205/60 p-1 rounded-xl bg-stone-200">
          <button
            onClick={() => setMode("value")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === "value"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            Pass by Value (C/Java)
          </button>
          <button
            onClick={() => setMode("reference")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === "reference"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            Pass by Reference (C++)
          </button>
        </div>
      </div>

      {/* Simulator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Visualizer representation of Stack and Memory */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-xl p-5 flex flex-col justify-between min-h-[360px] text-white">
          <div className="w-full">
            <div className="flex justify-between items-center text-[10px] text-stone-400 font-extrabold uppercase tracking-widest border-b border-stone-800 pb-2 mb-4">
              <span>Mô Phỏng Bộ Nhớ RAM (Call Stack)</span>
              <span className="text-amber-450 font-mono">
                {mode === "value" ? "Truyền Tham Trị" : "Truyền Tham Chiếu"}
              </span>
            </div>

            {/* Displaying call Stack Frames */}
            <div className="space-y-4 flex flex-col justify-end min-h-[220px]">
              {currentStepData.stack.map((item, frameIdx) => {
                const isTopFrame = frameIdx === 0;
                return (
                  <div
                    key={frameIdx}
                    className={`border rounded-xl p-4 transition-all duration-300 ${
                      isTopFrame
                        ? "border-amber-500/40 bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.05)]"
                        : "border-stone-850 bg-stone-900/40 opacity-70"
                    }`}
                  >
                    {/* Frame Title */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-black font-mono text-amber-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Stack Frame: {item.frame}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-stone-500">
                        {isTopFrame ? "Đang thực thi" : "Đang chờ"}
                      </span>
                    </div>

                    {/* Frame Variables */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.vars.map((v, vIdx) => {
                        const isModified = v.modified;
                        const isCopy = v.isCopy;
                        const isAlias = v.isAlias;
                        return (
                          <div
                            key={vIdx}
                            className={`border rounded-lg p-3 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                              isModified
                                ? "bg-emerald-950/25 border-emerald-500/40 text-emerald-300"
                                : isCopy
                                ? "bg-sky-950/25 border-sky-500/40 text-sky-300"
                                : isAlias
                                ? "bg-amber-950/25 border-amber-500/40 text-amber-300"
                                : "bg-stone-900 border-stone-800 text-stone-300"
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-[10px] font-bold text-stone-400">
                                Tên biến: <code className="font-mono text-white text-xs font-extrabold">{v.name}</code>
                              </span>
                              <span className="text-[9px] font-mono font-bold bg-stone-800 px-1.5 py-0.5 rounded text-stone-400 border border-stone-700">
                                {v.addr}
                              </span>
                            </div>

                            <div className="flex justify-between items-baseline mt-1">
                              <span className="text-[10px] text-stone-550 font-semibold">Giá trị</span>
                              <span className="text-lg font-black font-mono">
                                {v.val}
                              </span>
                            </div>

                            {/* Decorative badges */}
                            {isCopy && (
                              <div className="absolute top-0 right-0 bg-sky-500 text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-bl text-white tracking-wide">
                                COPY
                              </div>
                            )}
                            {isAlias && (
                              <div className="absolute top-0 right-0 bg-amber-500 text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-bl text-white tracking-wide">
                                ALIAS
                              </div>
                            )}
                            {isModified && (
                              <div className="absolute bottom-0 right-0 bg-emerald-500 text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-tl text-white tracking-wide">
                                Đã sửa
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual representations of links/arrows in text */}
          <div className="mt-4 pt-3 border-t border-stone-800 flex justify-between items-center text-[10px] text-stone-500 font-bold">
            <div>
              {mode === "value" && step >= 1 && (
                <span className="text-sky-400">
                  ⚡ Ô nhớ 0x200 copy biệt lập giá trị từ ô 0x100
                </span>
              )}
              {mode === "reference" && step >= 1 && (
                <span className="text-amber-400">
                  🔗 x là bí danh trỏ cùng địa chỉ 0x100 của a
                </span>
              )}
            </div>
            <span>Bộ nhớ RAM ảo</span>
          </div>
        </div>

        {/* Right Side: Explanation Console & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 bg-white border border-stone-200 rounded-xl shadow-inner min-h-[360px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                BƯỚC {step + 1} / 4
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-1 rounded-full transition-all duration-300 ${
                      i <= step ? "bg-amber-500" : "bg-stone-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <h5 className="font-extrabold text-sm text-stone-900 border-b border-stone-150 pb-2">
              {currentStepData.title}
            </h5>

            <p
              className="text-xs text-stone-650 leading-relaxed font-sans min-h-[140px]"
              dangerouslySetInnerHTML={{ __html: currentStepData.desc }}
            />
          </div>

          {/* Step Controls */}
          <div className="flex flex-col gap-2 pt-4 border-t border-stone-150 mt-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={prevStep}
                disabled={step === 0}
                className="px-3 py-2 bg-stone-100 border border-stone-200 hover:bg-stone-200 text-stone-700 disabled:opacity-40 disabled:hover:bg-stone-100 rounded-lg text-xs font-bold transition-all cursor-pointer flex justify-center items-center gap-1"
              >
                <span>⬅</span> Bước trước
              </button>
              <button
                onClick={nextStep}
                disabled={step === 3}
                className="px-3 py-2 bg-accent hover:bg-accent/90 text-white disabled:opacity-40 disabled:hover:bg-accent rounded-lg text-xs font-bold transition-all cursor-pointer flex justify-center items-center gap-1 shadow-sm"
              >
                Bước sau <span>➡</span>
              </button>
            </div>
            <button
              onClick={reset}
              className="px-3 py-1.5 text-[10px] uppercase tracking-wide font-extrabold border border-stone-200 hover:bg-stone-50 text-stone-500 hover:text-stone-700 transition-all rounded-lg cursor-pointer text-center"
            >
              🔄 Chạy lại từ đầu
            </button>
          </div>
        </div>
      </div>

      {/* Code reference comparison */}
      <div className="mt-5 p-3.5 bg-stone-100 border border-stone-200 rounded-xl">
        <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-2">
          Đoạn mã mô phỏng tương ứng:
        </div>
        <pre className="text-[11px] font-mono leading-relaxed text-stone-750 bg-white p-3 rounded-lg border border-stone-200 shadow-sm select-text overflow-x-auto">
          {mode === "value" ? (
            <code>
              {`// C / Java
void tangLen(int x) {
    x++; // Sửa biến bản sao x
}

int main() {
    int a = 10;
    tangLen(a);
    // a vẫn bằng 10
}`}
            </code>
          ) : (
            <code>
              {`// C++
void tangLen(int& x) {
    x++; // Sửa trực tiếp biến gốc qua alias x
}

int main() {
    int a = 10;
    tangLen(a);
    // a tăng lên 11
}`}
            </code>
          )}
        </pre>
      </div>
    </div>
  );
}
