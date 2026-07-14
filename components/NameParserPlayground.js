"use client";
import React, { useState } from "react";

export default function NameParserPlayground() {
  const [fullNameInput, setFullNameInput] = useState("  nguyễn   văn   nam  ");
  const [step, setStep] = useState(0); // 0 to 5

  // Generate steps dynamically based on current name input
  const getSteps = (input) => {
    // Phase variables
    const raw = input;
    const trimmed = raw.trim();
    
    // Split words, filtering out empty strings in javascript
    const rawWords = trimmed.split(/\s+/).filter(w => w.length > 0);
    const capitalizedWords = rawWords.map(w => {
      if (w.length === 0) return "";
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    });
    
    const normalized = capitalizedWords.join(" ");
    
    let ho = "";
    let dem = "";
    let ten = "";
    
    if (capitalizedWords.length > 0) {
      ho = capitalizedWords[0];
      ten = capitalizedWords[capitalizedWords.length - 1];
      if (capitalizedWords.length > 2) {
        dem = capitalizedWords.slice(1, capitalizedWords.length - 1).join(" ");
      }
    }

    return [
      {
        title: "Dữ liệu thô ban đầu",
        code: `String s = "${raw}";`,
        result: raw,
        desc: "Học sinh nhập một chuỗi họ tên thô, chứa khoảng trắng thừa ở đầu/cuối, giữa các từ và viết thường toàn bộ: <code>\"" + raw + "\"</code>.",
        visualState: { type: "raw", data: raw }
      },
      {
        title: "Bước 1: Loại bỏ khoảng trắng rìa (trim)",
        code: `String s1 = s.trim();`,
        result: trimmed,
        desc: "Phương thức <code>s.trim()</code> loại bỏ toàn bộ khoảng trắng ở đầu và cuối chuỗi gốc. Kết quả trả về chuỗi mới gọn gàng hơn.",
        visualState: { type: "trimmed", data: trimmed }
      },
      {
        title: "Bước 2: Tách chuỗi thành mảng các từ (split)",
        code: `String[] words = s1.split("\\\\s+");`,
        result: JSON.stringify(rawWords),
        desc: "Phương thức <code>s1.split(\"\\\\s+\")</code> tách chuỗi thành mảng các từ dựa trên một hoặc nhiều khoảng trắng liên tiếp. JVM trả về mảng <code>String[]</code>.",
        visualState: { type: "split", data: rawWords }
      },
      {
        title: "Bước 3: Viết hoa chữ cái đầu của mỗi từ",
        code: `// Chạy vòng lặp qua các từ:\nwords[i] = words[i].substring(0, 1).toUpperCase() \n           + words[i].substring(1).toLowerCase();`,
        result: JSON.stringify(capitalizedWords),
        desc: "Chạy vòng lặp qua từng từ, tách chữ cái đầu bằng <code>substring(0, 1)</code> viết hoa bằng <code>toUpperCase()</code> và ghép với phần đuôi viết thường <code>toLowerCase()</code>.",
        visualState: { type: "capitalized", data: capitalizedWords }
      },
      {
        title: "Bước 4: Ghép lại thành chuỗi chuẩn hóa",
        code: `String normalized = String.join(" ", words);`,
        result: normalized,
        desc: "Sử dụng hàm ghép nối <code>String.join(\" \", words)</code> để nối lại các từ đã viết hoa với khoảng trắng phân tách duy nhất.",
        visualState: { type: "normalized", data: normalized }
      },
      {
        title: "Bước 5: Trích xuất Họ, Đệm, Tên",
        code: `String ho = words[0];\nString ten = words[words.length - 1];\nString dem = ...;`,
        result: `Họ: "${ho}" | Đệm: "${dem}" | Tên: "${ten}"`,
        desc: `Truy xuất các phần tử mảng: <br/>• Họ: <code>words[0]</code> ➔ <strong>"${ho}"</strong><br/>• Tên: <code>words[length - 1]</code> ➔ <strong>"${ten}"</strong><br/>• Đệm: Các phần tử nằm giữa ➔ <strong>"${dem}"</strong>.`,
        visualState: { type: "parsed", data: { ho, dem, ten } }
      }
    ];
  };

  const stepsList = getSteps(fullNameInput);
  const currentStep = stepsList[step] || stepsList[0];

  const handleNext = () => {
    if (step < stepsList.length - 1) {
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

  const handleInputChange = (e) => {
    setFullNameInput(e.target.value);
    setStep(0); // reset stepper
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          Bộ Thực Hành Tách Họ Tên Tiếng Việt (Name Parser Playground)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Ứng dụng tổng hợp các hàm trim(), split(), substring() để chuẩn hóa và bóc tách các thành phần Họ, Tên, Đệm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code & Input (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {/* Input field */}
          <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-sm">
            <label className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-2">Nhập họ tên viết sai/lệch (Hãy sửa thử):</label>
            <input
              type="text"
              value={fullNameInput}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-stone-250 rounded-lg text-sm font-mono focus:border-accent focus:outline-none bg-stone-50 text-stone-850"
            />
          </div>

          {/* Code Execution Box */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1 flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2 font-sans">Câu lệnh Java xử lý</div>
              <pre className="text-amber-400 font-bold whitespace-pre-wrap">{currentStep.code}</pre>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-800">
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-1 font-sans">Giá trị biến tạm</div>
              <div className="text-emerald-400 font-bold break-words">{currentStep.result}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visualizer (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
          
          {/* Visual State Area */}
          <div className="flex-1 flex flex-col justify-center min-h-[180px]">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Sơ đồ mô phỏng dữ liệu</div>
            
            <div className="border border-stone-150 rounded-2xl p-4 bg-stone-50 flex items-center justify-center flex-1">
              
              {/* RAW STATE */}
              {currentStep.visualState.type === "raw" && (
                <div className="text-center font-mono text-xs max-w-full">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-2 font-sans">Chuỗi gốc trong RAM</div>
                  <span className="bg-[#1e1d1a] text-stone-300 px-3 py-2 rounded-lg border border-stone-800 inline-block whitespace-pre select-none shadow-sm">
                    {currentStep.visualState.data}
                  </span>
                </div>
              )}

              {/* TRIMMED STATE */}
              {currentStep.visualState.type === "trimmed" && (
                <div className="text-center font-mono text-xs max-w-full">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-2 font-sans font-sans">Sau khi trim() (mất khoảng trắng rìa)</div>
                  <div className="flex justify-center items-center gap-1.5">
                    <span className="text-stone-300 line-through bg-stone-200 px-1 rounded select-none">{"  "}</span>
                    <span className="bg-amber-500/10 border border-amber-300 text-amber-800 px-3 py-2 rounded-lg font-black inline-block whitespace-pre shadow-sm">
                      {currentStep.visualState.data}
                    </span>
                    <span className="text-stone-300 line-through bg-stone-200 px-1 rounded select-none">{"  "}</span>
                  </div>
                </div>
              )}

              {/* SPLIT STATE */}
              {currentStep.visualState.type === "split" && (
                <div className="text-center font-sans text-xs w-full">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-3">Mảng các từ (String[] words)</div>
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    {currentStep.visualState.data.map((word, idx) => (
                      <div key={idx} className="border border-stone-200 bg-white shadow-sm rounded-xl px-3 py-2 text-center font-mono min-w-[60px]">
                        <div className="text-[8px] font-bold text-stone-400 uppercase">index {idx}</div>
                        <div className="text-stone-800 font-bold mt-0.5">"{word}"</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CAPITALIZED STATE */}
              {currentStep.visualState.type === "capitalized" && (
                <div className="text-center font-sans text-xs w-full">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-3">Viết hoa chữ cái đầu từng từ</div>
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    {currentStep.visualState.data.map((word, idx) => (
                      <div key={idx} className="border border-amber-300 bg-amber-50/20 shadow-sm rounded-xl px-3 py-2 text-center font-mono min-w-[60px]">
                        <div className="text-[8px] font-bold text-amber-500 uppercase">words[{idx}]</div>
                        <div className="text-stone-900 font-black mt-0.5">
                          <span className="text-amber-600 font-extrabold">{word.charAt(0)}</span>
                          {word.slice(1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* NORMALIZED STATE */}
              {currentStep.visualState.type === "normalized" && (
                <div className="text-center font-mono text-xs max-w-full">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-2 font-sans">Chuỗi chuẩn hóa ghép lại</div>
                  <span className="bg-emerald-50 text-emerald-800 font-black px-4 py-2.5 rounded-xl border border-emerald-200 inline-block whitespace-pre shadow-sm text-sm">
                    "{currentStep.visualState.data}"
                  </span>
                </div>
              )}

              {/* PARSED STATE */}
              {currentStep.visualState.type === "parsed" && (
                <div className="text-center font-sans text-xs w-full">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-3">Bóc tách các thành phần tên</div>
                  <div className="grid grid-cols-3 gap-3">
                    
                    {/* Họ */}
                    <div className="border border-amber-200 bg-[#fffbeb] p-3 rounded-xl shadow-sm text-center">
                      <div className="text-[9px] font-black text-amber-600 uppercase tracking-wider">HỌ (words[0])</div>
                      <div className="text-stone-850 font-black text-sm mt-1">"{currentStep.visualState.data.ho}"</div>
                    </div>

                    {/* Đệm */}
                    <div className="border border-stone-200 bg-white p-3 rounded-xl shadow-sm text-center">
                      <div className="text-[9px] font-black text-stone-500 uppercase tracking-wider">ĐỆM (words[1..n-2])</div>
                      <div className="text-stone-850 font-black text-sm mt-1">
                        {currentStep.visualState.data.dem ? `"${currentStep.visualState.data.dem}"` : <span className="text-stone-400 italic">Không có</span>}
                      </div>
                    </div>

                    {/* Tên */}
                    <div className="border border-sky-200 bg-sky-50/15 p-3 rounded-xl shadow-sm text-center">
                      <div className="text-[9px] font-black text-sky-700 uppercase tracking-wider">TÊN (words[len-1])</div>
                      <div className="text-stone-850 font-black text-sm mt-1">"{currentStep.visualState.data.ten}"</div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Description text */}
          <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-700 min-h-[55px]">
            <span dangerouslySetInnerHTML={{ __html: currentStep.desc }} />
          </div>

          {/* Stepper Controls */}
          <div className="flex justify-between items-center border-t border-stone-100 pt-3">
            <div className="text-[10px] font-bold text-stone-400">
              Bước {step + 1} / {stepsList.length}
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
              {step < stepsList.length - 1 ? (
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
                  🔄 Chạy lại
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
