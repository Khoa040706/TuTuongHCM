"use client";
import React, { useState, useEffect } from "react";

export default function ScannerPlayground() {
  const [inputText, setInputText] = useState("Wilson Wee");
  const [scenario, setScenario] = useState("next_then_nextline"); // next_then_nextline, nextline_only, nextint_then_nextline
  const [step, setStep] = useState(0); // 0 (ready), 1, 2, 3

  // Variables captured during simulation
  const [buffer, setBuffer] = useState("");
  const [varS1, setVarS1] = useState(null);
  const [varS2, setVarS2] = useState(null);
  const [explanation, setExplanation] = useState("");

  // Update input text default based on scenario
  useEffect(() => {
    if (scenario === "nextint_then_nextline") {
      setInputText("24 Wilson");
    } else {
      setInputText("Wilson Wee");
    }
    resetSim();
  }, [scenario]);

  function resetSim() {
    setStep(0);
    setBuffer("");
    setVarS1(null);
    setVarS2(null);
    setExplanation("Bấm 'Bắt đầu chạy' để quan sát từng bước Scanner đọc dữ liệu từ bộ đệm.");
  };

  const handleNextStep = () => {
    if (scenario === "next_then_nextline") {
      if (step === 0) {
        setStep(1);
        // Add implicit newline representing the Enter key at the end of input
        setBuffer(inputText + "\n");
        setExplanation("Khởi tạo Scanner. Toàn bộ chuỗi nhập vào kèm ký tự xuống dòng '\\n' (phím Enter) được nạp vào Bộ đệm của Scanner.");
      } else if (step === 1) {
        setStep(2);
        // sc.next() reads until whitespace
        const match = buffer.match(/^([^\s]+)/);
        if (match) {
          const token = match[1];
          setVarS1(token);
          const remaining = buffer.substring(token.length);
          setBuffer(remaining);
          setExplanation(`Lệnh sc.next() chạy: Quét bộ đệm từ đầu đến khi gặp khoảng trắng. Đọc được từ "${token}" và gán vào s1. Bộ đệm chỉ còn lại phần phía sau.`);
        } else {
          setVarS1("");
          setExplanation("Bộ đệm trống hoặc chỉ toàn khoảng trắng. sc.next() sẽ đợi người dùng nhập thêm (Blocked).");
        }
      } else if (step === 2) {
        setStep(3);
        // sc.nextLine() reads the remainder of the line including the newline character
        const newlineIdx = buffer.indexOf("\n");
        if (newlineIdx !== -1) {
          const lineContent = buffer.substring(0, newlineIdx);
          setVarS2(lineContent);
          setBuffer(buffer.substring(newlineIdx + 1));
          setExplanation(`Lệnh sc.nextLine() chạy: Đọc TOÀN BỘ ký tự còn lại trong đệm cho đến hết ký tự xuống dòng '\\n'. Kết quả thu được chuỗi "${lineContent}" gán vào s2.`);
        } else {
          setVarS2(buffer);
          setBuffer("");
          setExplanation(`Lệnh sc.nextLine() đọc hết phần còn lại: "${buffer}" gán vào s2.`);
        }
      }
    } else if (scenario === "nextline_only") {
      if (step === 0) {
        setStep(1);
        setBuffer(inputText + "\n");
        setExplanation("Khởi tạo Scanner. Chuỗi nhập vào kèm ký tự xuống dòng '\\n' được nạp vào Bộ đệm.");
      } else if (step === 1) {
        setStep(2);
        // sc.nextLine() reads the entire line
        const newlineIdx = buffer.indexOf("\n");
        const lineContent = newlineIdx !== -1 ? buffer.substring(0, newlineIdx) : buffer;
        setVarS1(lineContent);
        setBuffer(newlineIdx !== -1 ? buffer.substring(newlineIdx + 1) : "");
        setExplanation(`Lệnh sc.nextLine() chạy: Đọc toàn bộ dòng cho tới dấu xuống dòng '\\n'. Lấy được toàn bộ chuỗi "${lineContent}" và gán vào s1.`);
      }
    } else if (scenario === "nextint_then_nextline") {
      if (step === 0) {
        setStep(1);
        setBuffer(inputText + "\n");
        setExplanation("Khởi tạo Scanner. Bộ đệm nạp chuỗi đầu vào kèm phím Enter: \"" + inputText + "\\n\".");
      } else if (step === 1) {
        setStep(2);
        // sc.nextInt() reads the integer
        const match = buffer.match(/^\s*([0-9]+)/);
        if (match) {
          const numStr = match[1];
          const startIdx = buffer.indexOf(numStr);
          setVarS1(parseInt(numStr));
          // Consumes up to the end of the number, leaving the whitespace/newline
          const remaining = buffer.substring(startIdx + numStr.length);
          setBuffer(remaining);
          setExplanation(`Lệnh sc.nextInt() chạy: Quét và chuyển đổi số nguyên đầu tiên là ${numStr} gán vào biến n. Lưu ý: ký tự khoảng trắng hoặc '\\n' ngay sau số ${numStr} VẪN CÒN SÓT LẠI trong bộ đệm!`);
        } else {
          setVarS1("InputMismatchException ❌");
          setExplanation("Lỗi: Ký tự tiếp theo trong bộ đệm không phải là số nguyên! Java sẽ ném ra ngoại lệ InputMismatchException.");
        }
      } else if (step === 2) {
        setStep(3);
        // sc.nextLine() tries to read the line
        // In buffer we have " Wilson\n" or if input was "24\n", we have "\n"
        const newlineIdx = buffer.indexOf("\n");
        if (newlineIdx !== -1) {
          const lineContent = buffer.substring(0, newlineIdx);
          setVarS2(lineContent);
          setBuffer(buffer.substring(newlineIdx + 1));
          if (lineContent === "" || lineContent.trim() === "") {
            setExplanation(`Lỗi trôi lệnh (Leftover Newline Gotcha)! Lệnh sc.nextLine() thấy dấu xuống dòng '\\n' ngay đầu đệm, liền lập tức nuốt dấu này và trả về chuỗi rỗng "". Học sinh thường lầm tưởng dòng này sẽ đọc chữ "Wilson" tiếp theo.`);
          } else {
            setExplanation(`Lệnh sc.nextLine() đọc tiếp phần còn lại của dòng cho đến dấu '\\n'. Nhận chuỗi "${lineContent}" gán vào s.`);
          }
        } else {
          setVarS2(buffer);
          setBuffer("");
          setExplanation(`Đọc nốt phần đệm còn lại: "${buffer}"`);
        }
      }
    }
  };

  const getCodeHighlight = (lineNum) => {
    if (step === lineNum) return "bg-amber-500/20 border-l-4 border-amber-500 pl-2 font-bold text-stone-100";
    return "text-stone-400 pl-3";
  };

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      
      {/* Simulation Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        
        {/* Scenario Select */}
        <div>
          <label className="text-xs font-black text-stone-450 uppercase tracking-wider block mb-2">Chọn Kịch Bản Thực Nghiệm:</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-xs text-stone-700 bg-white border border-stone-200 p-2.5 rounded-xl cursor-pointer hover:border-amber-400 transition-all">
              <input
                type="radio"
                name="scenario"
                checked={scenario === "next_then_nextline"}
                onChange={() => setScenario("next_then_nextline")}
                className="accent-amber-500"
              />
              <div>
                <strong>next() rồi tới nextLine()</strong>
                <p className="text-[10px] text-stone-400">So sánh sự khác biệt khi đọc từ đơn lẻ và đọc cả dòng.</p>
              </div>
            </label>

            <label className="flex items-center gap-2 text-xs text-stone-700 bg-white border border-stone-200 p-2.5 rounded-xl cursor-pointer hover:border-amber-400 transition-all">
              <input
                type="radio"
                name="scenario"
                checked={scenario === "nextline_only"}
                onChange={() => setScenario("nextline_only")}
                className="accent-amber-500"
              />
              <div>
                <strong>Chỉ dùng nextLine()</strong>
                <p className="text-[10px] text-stone-400">Đọc toàn bộ dòng một cách trọn vẹn.</p>
              </div>
            </label>

            <label className="flex items-center gap-2 text-xs text-stone-750 bg-white border border-stone-200 p-2.5 rounded-xl cursor-pointer hover:border-amber-400 transition-all">
              <input
                type="radio"
                name="scenario"
                checked={scenario === "nextint_then_nextline"}
                onChange={() => setScenario("nextint_then_nextline")}
                className="accent-amber-500"
              />
              <div>
                <strong className="text-rose-700">nextInt() rồi nextLine() (Bẫy trôi lệnh!)</strong>
                <p className="text-[10px] text-stone-400">Minh họa lỗi trôi lệnh khi phím Enter bị bỏ lại trong bộ đệm.</p>
              </div>
            </label>
          </div>
        </div>

        {/* Input Setup */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="text-xs font-black text-stone-450 uppercase tracking-wider block mb-2">Nhập Dữ Liệu Giả Lập Bàn Phím:</label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                resetSim();
              }}
              disabled={step > 0}
              className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-800 disabled:bg-stone-50 disabled:text-stone-450"
            />
            <p className="text-[10px] text-stone-400 mt-1">
              *Hệ thống sẽ tự động thêm ký tự xuống dòng <code>\n</code> đại diện cho phím <strong>Enter</strong> ở cuối chuỗi.
            </p>
          </div>

          <div className="flex gap-2.5 mt-4">
            <button
              onClick={handleNextStep}
              disabled={
                (scenario === "nextline_only" && step >= 2) ||
                (scenario !== "nextline_only" && step >= 3)
              }
              className="flex-1 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm disabled:bg-stone-200 disabled:text-stone-400 cursor-pointer"
            >
              {step === 0 ? "▶️ Bắt đầu chạy" : "⏭️ Bước tiếp theo"}
            </button>
            <button
              onClick={resetSim}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-xl text-xs transition-all border border-stone-200 cursor-pointer"
            >
              🔄 Reset
            </button>
          </div>
        </div>

      </div>

      {/* Grid: Java Code vs Buffer Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Code representation (5 cols) */}
        <div className="lg:col-span-5 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-white font-mono text-xs flex flex-col justify-between shadow-md">
          <div>
            <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-3 font-sans">Mã Nguồn Java Mô Phỏng</div>
            
            <div className="space-y-1.5 py-2">
              <div className="text-stone-600 pl-3">// Khởi tạo lớp đọc dữ liệu</div>
              <div className={getCodeHighlight(1)}>
                Scanner sc = new Scanner(System.in);
              </div>

              {scenario === "next_then_nextline" && (
                <>
                  <div className="text-stone-600 pl-3 mt-2">// Đọc từ đơn lẻ (token)</div>
                  <div className={getCodeHighlight(2)}>
                    String s1 = sc.next();
                  </div>
                  <div className="text-stone-600 pl-3 mt-2">// Đọc phần còn lại của dòng</div>
                  <div className={getCodeHighlight(3)}>
                    String s2 = sc.nextLine();
                  </div>
                </>
              )}

              {scenario === "nextline_only" && (
                <>
                  <div className="text-stone-600 pl-3 mt-2">// Đọc cả dòng dữ liệu</div>
                  <div className={getCodeHighlight(2)}>
                    String s1 = sc.nextLine();
                  </div>
                </>
              )}

              {scenario === "nextint_then_nextline" && (
                <>
                  <div className="text-stone-600 pl-3 mt-2">// Đọc số nguyên đầu tiên</div>
                  <div className={getCodeHighlight(2)}>
                    int n = sc.nextInt();
                  </div>
                  <div className="text-stone-600 pl-3 mt-2">// Lệnh bị trôi nếu đệm còn dư \n</div>
                  <div className={getCodeHighlight(3)}>
                    String s = sc.nextLine();
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="border-t border-stone-850 mt-4 pt-3 text-[10px] text-stone-450 font-sans">
            Mũi tên vàng chỉ vị trí dòng lệnh Java đang chuẩn bị chạy.
          </div>
        </div>

        {/* Buffer & Variables Visualizer (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-4">Trạng thái bộ đệm & các biến</div>
            
            <div className="space-y-4">
              
              {/* Input Buffer */}
              <div>
                <label className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-1.5">Bộ đệm đầu vào của Scanner (Internal Buffer):</label>
                <div className="bg-stone-900 text-stone-200 font-mono text-sm px-3.5 py-2.5 rounded-xl border border-stone-950 flex items-center gap-1 shadow-inner overflow-x-auto min-h-[46px]">
                  {step === 0 ? (
                    <span className="text-stone-500 italic text-xs">Chưa nạp bộ đệm...</span>
                  ) : buffer === "" ? (
                    <span className="text-rose-450 text-xs font-bold uppercase tracking-wider">Bộ đệm trống [Empty]</span>
                  ) : (
                    buffer.split("").map((char, index) => {
                      if (char === "\n") {
                        return (
                          <span key={index} className="bg-rose-950/80 border border-rose-800 text-rose-400 px-1 py-0.5 rounded text-xs font-sans font-bold flex items-center gap-0.5 shrink-0">
                            \n <span className="text-[8px] text-rose-500 font-sans">(Enter)</span>
                          </span>
                        );
                      }
                      if (char === " ") {
                        return (
                          <span key={index} className="bg-sky-950 border border-sky-900 text-sky-400 px-1 py-0.5 rounded text-[10px] font-sans font-bold shrink-0">
                            [space]
                          </span>
                        );
                      }
                      return (
                        <span key={index} className="text-amber-400 font-bold shrink-0">
                          {char}
                        </span>
                      );
                    })
                  )}
                </div>
              </div>

              {/* State of Variables */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                
                {/* Var 1 */}
                <div className="bg-stone-50 border border-stone-150 rounded-xl p-3">
                  <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-1">
                    {scenario === "nextint_then_nextline" ? "Biến n (int)" : "Biến s1 (String)"}
                  </div>
                  <div className="font-mono text-xs font-bold text-stone-850">
                    {varS1 === null ? (
                      <span className="text-stone-400 italic font-normal">Chưa khởi tạo</span>
                    ) : typeof varS1 === "number" ? (
                      <span className="text-amber-700">{varS1}</span>
                    ) : (
                      <span className="text-sky-700">"{varS1}"</span>
                    )}
                  </div>
                </div>

                {/* Var 2 */}
                {scenario !== "nextline_only" && (
                  <div className="bg-stone-50 border border-stone-150 rounded-xl p-3">
                    <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-1">
                      {scenario === "nextint_then_nextline" ? "Biến s (String)" : "Biến s2 (String)"}
                    </div>
                    <div className="font-mono text-xs font-bold text-stone-850">
                      {varS2 === null ? (
                        <span className="text-stone-400 italic font-normal">Chưa khởi tạo</span>
                      ) : varS2 === "" ? (
                        <span className="text-rose-600 bg-rose-50 border border-rose-100 rounded px-1.5 py-0.5 text-[10px] font-sans font-black uppercase">Trôi lệnh! ""</span>
                      ) : (
                        <span className="text-sky-700">"{varS2}"</span>
                      )}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

          {/* Step description commentary */}
          <div className="bg-stone-50 border border-stone-150 rounded-xl p-3 text-xs leading-relaxed text-stone-700 mt-4 shadow-inner">
            <span className="font-extrabold text-stone-850 block mb-0.5">ℹ️ Mô tả hoạt động:</span>
            {explanation}
          </div>

        </div>

      </div>

    </div>
  );
}
