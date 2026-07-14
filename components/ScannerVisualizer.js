"use client";
import React, { useState } from "react";

export default function ScannerVisualizer() {
  const [preset, setPreset] = useState("preset1"); // "preset1" or "preset2"
  const [step, setStep] = useState(0); // 0, 1, 2, 3

  const getPresetData = () => {
    if (preset === "preset1") {
      return {
        inputText: "42 3.14\n",
        code: [
          "Scanner sc = new Scanner(System.in);",
          "int a = sc.nextInt();",
          "double b = sc.nextDouble();"
        ],
        steps: [
          {
            highlightedCode: 0,
            consumedText: "",
            activeText: "",
            remainingText: "42 3.14\\n",
            cursorPos: 0,
            variables: { a: "chưa có giá trị", b: "chưa có giá trị" },
            analogy: "🍏 <strong>Ví dụ Băng Chuyền Thức Ăn:</strong><br/>Hãy tưởng tượng bộ đệm bàn phím như một băng chuyền. Bạn vừa xếp lên băng chuyền 1 quả táo (số nguyên <code>42</code>), 1 khoảng trống, 1 quả cam (số thực <code>3.14</code>) và 1 cái khay rỗng (ký tự xuống dòng <code>\\n</code>).<br/>Hiện tại tất cả món ăn vẫn còn nguyên trên băng chuyền.",
            desc: "<strong>Khởi tạo:</strong> Scanner mở kết nối. Toàn bộ chuỗi dữ liệu <code>\"42 3.14\\n\"</code> bạn gõ từ bàn phím đang nằm đợi trong bộ đệm. Con trỏ Scanner (▲) nằm ở đầu hàng."
          },
          {
            highlightedCode: 1,
            consumedText: "42",
            activeText: "",
            remainingText: " 3.14\\n",
            cursorPos: 2,
            variables: { a: "42", b: "chưa có giá trị" },
            analogy: "🍏 <strong>Băng chuyền:</strong><br/>Người khách <code>nextInt()</code> chỉ muốn ăn táo (số nguyên). Người này đến lấy quả táo <code>42</code> ra ăn, rồi **dừng lại ngay lập tức**. <br/>Quả cam <code>3.14</code> và khay rỗng <code>\\n</code> vẫn nằm nguyên trên băng chuyền!",
            desc: "<strong>Chạy lệnh sc.nextInt():</strong> Scanner quét bộ đệm, bốc lấy số nguyên đầu tiên là <code>42</code> để gán vào biến <code>a</code>. <br/>Con trỏ đọc (▲) di chuyển và <strong>dừng lại ngay sau số 2</strong>. Khoảng trắng phía sau vẫn chưa bị đụng tới."
          },
          {
            highlightedCode: 2,
            consumedText: "42 3.14",
            activeText: "",
            remainingText: "\\n",
            cursorPos: 7,
            variables: { a: "42", b: "3.14" },
            analogy: "🍊 <strong>Băng chuyền:</strong><br/>Người khách <code>nextDouble()</code> muốn ăn cam (số thực). Người này đi dọc băng chuyền, bỏ qua khoảng trống ở giữa, lấy quả cam <code>3.14</code> ra ăn, rồi **dừng lại**.<br/>Cái khay rỗng <code>\\n</code> vẫn bị bỏ lại trên băng chuyền!",
            desc: "<strong>Chạy lệnh sc.nextDouble():</strong> Scanner quét tiếp, tự động <strong>bỏ qua (nhảy qua) khoảng trắng</strong>, tìm thấy số thực tiếp theo là <code>3.14</code> để gán cho biến <code>b</code>. <br/>Con trỏ đọc (▲) di chuyển và dừng ngay trước ký tự xuống dòng <code>\\n</code>."
          },
          {
            highlightedCode: -1,
            consumedText: "42 3.14",
            activeText: "",
            remainingText: "\\n",
            cursorPos: 7,
            variables: { a: "42", b: "3.14" },
            analogy: "⚠️ <strong>Cạm bẫy cực kỳ nguy hiểm:</strong><br/>Lúc này trên băng chuyền vẫn còn thừa cái khay rỗng <code>\\n</code>. Nếu ngay sau đây bạn gọi lệnh đọc chuỗi <code>sc.nextLine()</code>, nó sẽ bốc ngay cái khay rỗng này và kết thúc luôn (khiến học sinh tưởng chương trình bị lỗi bỏ qua dòng nhập)!",
            desc: "<strong>Hoàn tất:</strong> Cả 2 biến đã có giá trị. Ký tự xuống dòng <code>\\n</code> <strong>vẫn nằm thừa lại trong bộ đệm</strong>. Đây chính là lý do vì sao khi dùng lệnh đọc số xong rồi đọc chuỗi bằng <code>nextLine()</code> hay bị lỗi bỏ qua dòng!"
          }
        ]
      };
    } else {
      return {
        inputText: "Hello 100\n",
        code: [
          "Scanner sc = new Scanner(System.in);",
          "String s = sc.next();",
          "int val = sc.nextInt();"
        ],
        steps: [
          {
            highlightedCode: 0,
            consumedText: "",
            activeText: "",
            remainingText: "Hello 100\\n",
            cursorPos: 0,
            variables: { s: "chưa có giá trị", val: "chưa có giá trị" },
            analogy: "🍞 <strong>Ví dụ Băng Chuyền:</strong><br/>Bạn xếp lên băng chuyền 1 ổ bánh mì (chuỗi ký tự <code>Hello</code>), 1 khoảng trống, 1 hộp sữa (số nguyên <code>100</code>) và 1 cái khay rỗng (<code>\\n</code>).",
            desc: "<strong>Khởi tạo:</strong> Scanner sẵn sàng đọc luồng dữ liệu <code>\"Hello 100\\n\"</code>."
          },
          {
            highlightedCode: 1,
            consumedText: "Hello",
            activeText: "",
            remainingText: " 100\\n",
            cursorPos: 5,
            variables: { s: '"Hello"', val: "chưa có giá trị" },
            analogy: "🍞 <strong>Băng chuyền:</strong><br/>Người khách <code>next()</code> muốn ăn bánh mì (chuỗi chữ). Người này lấy ổ bánh <code>Hello</code> ra, rồi **dừng lại ngay sau ổ bánh**.",
            desc: "<strong>Chạy lệnh sc.next():</strong> Scanner tìm thấy token chuỗi ký tự đầu tiên là <code>\"Hello\"</code> (dừng trước khoảng trắng) và gán vào biến <code>s</code>. Con trỏ dừng ngay sau chữ 'o'."
          },
          {
            highlightedCode: 2,
            consumedText: "Hello 100",
            activeText: "",
            remainingText: "\\n",
            cursorPos: 9,
            variables: { s: '"Hello"', val: "100" },
            analogy: "🥛 <strong>Băng chuyền:</strong><br/>Người khách <code>nextInt()</code> muốn uống sữa (số nguyên). Người này bỏ qua khoảng trắng, lấy hộp sữa <code>100</code> ra uống và dừng lại.<br/>Khay rỗng <code>\\n</code> vẫn còn thừa lại.",
            desc: "<strong>Chạy lệnh sc.nextInt():</strong> Bỏ qua khoảng trắng, Scanner bốc lấy số nguyên tiếp theo là <code>100</code> gán cho biến <code>val</code>. Con trỏ dừng ngay trước ký tự <code>\\n</code>."
          },
          {
            highlightedCode: -1,
            consumedText: "Hello 100",
            activeText: "",
            remainingText: "\\n",
            cursorPos: 9,
            variables: { s: '"Hello"', val: "100" },
            analogy: "⚠️ <strong>Cạm bẫy thừa ký tự:</strong><br/>Cái khay rỗng <code>\\n</code> vẫn còn thừa lại trên băng chuyền bàn phím, sẵn sàng làm hỏng bất kỳ lệnh <code>nextLine()</code> nào tiếp theo.",
            desc: "<strong>Hoàn tất:</strong> Biến <code>s</code> và <code>val</code> đã nhận đủ dữ liệu. Con trỏ hiện tại đang dừng ngay trước ký tự <code>\\n</code> cuối cùng."
          }
        ]
      };
    }
  };

  const data = getPresetData();
  const currentStepInfo = data.steps[step];

  const handleNext = () => {
    if (step < data.steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
  };

  const handlePresetChange = (newPreset) => {
    setPreset(newPreset);
    setStep(0);
  };

  // Convert string to characters to display them clearly with highlights
  const renderTextStream = () => {
    const chars = [];
    const textStr = preset === "preset1" ? "42 3.14\n" : "Hello 100\n";
    
    // We want to loop character by character
    for (let i = 0; i < textStr.length; i++) {
      let charVal = textStr[i];
      if (charVal === "\n") charVal = "\\n";
      
      const isConsumed = i < currentStepInfo.cursorPos;
      
      let charClass = "bg-stone-850 text-stone-200 border-stone-750";
      if (isConsumed) {
        charClass = "bg-[#151413] text-stone-600 border-stone-900 opacity-40 line-through";
      } else if (step > 0 && i >= currentStepInfo.cursorPos) {
        // Highlight active token being read in step 1 or step 2
        const isActiveToken = step === 1 
          ? (preset === "preset1" ? i < 2 : i < 5)
          : step === 2 
          ? (preset === "preset1" ? i < 7 : i < 9)
          : false;
        
        if (isActiveToken) {
          charClass = "bg-amber-500 text-black border-amber-400 font-bold scale-105 shadow-sm";
        }
      }

      const showPointer = i === currentStepInfo.cursorPos;

      chars.push(
        <div key={i} className="flex flex-col items-center select-none relative">
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center font-mono text-sm transition-all duration-300 ${charClass}`}>
            {charVal === " " ? "␣" : charVal}
          </div>
          {showPointer && (
            <div className="absolute -bottom-5 text-amber-500 text-[10px] font-bold animate-bounce">
              ▲
            </div>
          )}
        </div>
      );
    }
    return chars;
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 border-b border-stone-200 pb-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            Giả Lập Luồng Bộ Nhớ Đệm Scanner (Học qua Băng Chuyền Thức Ăn)
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Hiểu cách Scanner bốc dữ liệu và lý do tại sao hay bị lỗi sót dòng nhập.
          </p>
        </div>
        
        {/* Presets */}
        <div className="flex bg-stone-200 p-1 rounded-xl shrink-0">
          <button
            onClick={() => handlePresetChange("preset1")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              preset === "preset1"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            Số & Số Thực
          </button>
          <button
            onClick={() => handlePresetChange("preset2")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              preset === "preset2"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            Chuỗi & Số
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left column: Code & Visual (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          
          {/* Buffer Visual Box */}
          <div className="bg-stone-900 border border-stone-850 p-4 rounded-xl text-white relative">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Bộ đệm bàn phím (Băng chuyền thức ăn)</div>
            
            <div className="flex gap-1.5 justify-start py-4 relative">
              {renderTextStream()}
            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-[10px] text-stone-400 border-t border-stone-800 pt-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[#151413] border border-stone-850 opacity-40"></span>
                <span>Đã bốc ăn (Consumed)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-amber-500 border border-amber-400"></span>
                <span>Món vừa lấy ở bước này</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500">▲</span>
                <span>Vị trí hiện tại của Scanner</span>
              </div>
            </div>
          </div>

          {/* Java Code Highlight */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2">Đoạn code đang thực thi</div>
            {data.code.map((line, idx) => {
              const isHighlighted = idx === currentStepInfo.highlightedCode;
              return (
                <div
                  key={idx}
                  className={`py-1.5 px-3 rounded-lg transition-all ${
                    isHighlighted
                      ? "bg-amber-500/10 border-l-4 border-amber-500 text-amber-300 font-bold"
                      : "text-stone-300 opacity-50"
                  }`}
                >
                  {line}
                </div>
              );
            })}
          </div>

        </div>

        {/* Right column: Analogy, Variables and Explanations (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
          
          {/* Variables RAM state */}
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2">Trạng thái các biến trong RAM</div>
            <div className="space-y-1.5 font-mono text-xs">
              {Object.entries(currentStepInfo.variables).map(([name, value]) => (
                <div key={name} className="flex justify-between items-center bg-stone-50 border border-stone-180 px-3 py-2 rounded-lg">
                  <span className="font-bold text-stone-700">{name}</span>
                  <span className={`px-2 py-0.5 rounded font-black ${value.includes("chưa") ? "bg-stone-200 text-stone-500" : "bg-emerald-100 text-emerald-800"}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Conveyor Belt Analogy Card (WOW factor) */}
          <div className="bg-amber-55/70 border border-amber-150 rounded-xl p-3 text-xs leading-relaxed text-stone-750">
            <div dangerouslySetInnerHTML={{ __html: currentStepInfo.analogy }} />
          </div>

          {/* Technical detail description */}
          <div className="border-t border-stone-250/50 pt-2.5">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-1">Mô tả kỹ thuật</div>
            <div
              className="text-xs text-stone-600 leading-relaxed min-h-[70px]"
              dangerouslySetInnerHTML={{ __html: currentStepInfo.desc }}
            />
          </div>

          {/* Stepper Controls */}
          <div className="flex justify-between items-center border-t border-stone-100 pt-3 mt-auto">
            <div className="text-[10px] font-bold text-stone-400">
              Tiến trình: Bước {step + 1} / {data.steps.length}
            </div>
            <div className="flex gap-2">
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  ◀ Lùi lại
                </button>
              )}
              {step < data.steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  Tiếp tục ▶
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  🔄 Chạy lại từ đầu
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
