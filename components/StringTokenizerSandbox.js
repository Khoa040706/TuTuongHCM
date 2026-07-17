"use client";
import React, { useState, useEffect } from "react";
import { Play, RotateCcw, ArrowRight, CheckCircle2, AlertOctagon, HelpCircle, Columns, Layers } from "lucide-react";

export default function StringTokenizerSandbox() {
  const [activeTab, setActiveTab] = useState("sandbox"); // "sandbox" | "dynamic" | "compare" | "gotchas"

  // Sandbox State
  const [inputText, setInputText] = useState("my name is khan");
  const [delims, setDelims] = useState(" ");
  const [returnValues, setReturnValues] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  
  // Iterator State
  const [tokensList, setTokensList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [collectedTokens, setCollectedTokens] = useState([]);
  const [countRemaining, setCountRemaining] = useState(0);

  // Initialize Sandbox simulation
  const initSandboxSimulation = () => {
    if (!inputText) return;
    
    // Parse tokens using javascript regex or custom parsing
    // In Java, StringTokenizer splits by ANY character in the delim string.
    // If returnValues is true, it also includes the delim characters as tokens.
    const chars = inputText.split("");
    const result = [];
    let currentToken = "";

    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      const isDelim = delims.indexOf(c) !== -1;

      if (isDelim) {
        if (currentToken) {
          result.push({ text: currentToken, isDelim: false });
          currentToken = "";
        }
        if (returnValues) {
          result.push({ text: c, isDelim: true });
        }
      } else {
        currentToken += c;
      }
    }
    if (currentToken) {
      result.push({ text: currentToken, isDelim: false });
    }

    setTokensList(result);
    setCurrentIndex(-1);
    setCollectedTokens([]);
    setCountRemaining(result.length);
    setIsSimulating(true);
  };

  const stepSandboxSimulation = () => {
    if (currentIndex >= tokensList.length - 1) return;
    
    const nextIndex = currentIndex + 1;
    const token = tokensList[nextIndex];
    
    setCurrentIndex(nextIndex);
    setCollectedTokens((prev) => [...prev, token.text]);
    setCountRemaining(tokensList.length - 1 - nextIndex);
  };

  const resetSandboxSimulation = () => {
    setIsSimulating(false);
    setTokensList([]);
    setCurrentIndex(-1);
    setCollectedTokens([]);
    setCountRemaining(0);
  };

  // Dynamic Swapper State
  const [dynStep, setDynStep] = useState(0);
  const [dynTokens, setDynTokens] = useState([]);
  
  const resetDynamicSimulation = () => {
    setDynStep(0);
    setDynTokens([]);
  };

  const stepDynamicSimulation = () => {
    setDynStep((prev) => {
      const next = prev + 1;
      if (next === 1) {
        setDynTokens(["my (phân cách bằng ',')"]);
      } else if (next === 2) {
        setDynTokens(["my (phân cách bằng ',')", "name (phân cách mặc định khoảng trắng)"]);
      } else if (next === 3) {
        setDynTokens(["my (phân cách bằng ',')", "name (phân cách mặc định khoảng trắng)", "is,khan (không còn khoảng trắng)"]);
      }
      return next > 3 ? 3 : next;
    });
  };

  // Gotchas State
  const [gotchaStep, setGotchaStep] = useState(0);
  const [gotchaLogs, setGotchaLogs] = useState([]);

  const resetGotchaSimulation = () => {
    setGotchaStep(0);
    setGotchaLogs([]);
  };

  const stepGotchaSimulation = () => {
    setGotchaStep((prev) => {
      const next = prev + 1;
      if (next === 1) {
        setGotchaLogs([
          "🔄 Vòng lặp 1: st.hasMoreTokens() -> true",
          "📥 st.nextToken() -> trả về 'my'",
          "📥 st.nextToken() -> trả về 'name' (gọi lần 2 trong vòng lặp!)",
          "🖥️ Output in ra: 'my name'"
        ]);
      } else if (next === 2) {
        setGotchaLogs([
          "🔄 Vòng lặp 1: st.hasMoreTokens() -> true",
          "📥 st.nextToken() -> trả về 'my'",
          "📥 st.nextToken() -> trả về 'name' (gọi lần 2 trong vòng lặp!)",
          "🖥️ Output in ra: 'my name'",
          "--------------------------------",
          "🔄 Vòng lặp 2: st.hasMoreTokens() -> true (còn lại 1 token 'is')",
          "📥 st.nextToken() -> trả về 'is'",
          "🔥 st.nextToken() -> LỖI: java.util.NoSuchElementException! (Hết token để đọc)"
        ]);
      }
      return next > 2 ? 2 : next;
    });
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5 border-b border-stone-200 pb-4">
        <div>
          <h4 className="text-sm md:text-base font-extrabold text-stone-900 flex items-center gap-2 font-serif">
            <Columns className="w-4 h-4 text-accent" />
            <span>Không gian thực nghiệm & Mô phỏng StringTokenizer</span>
          </h4>
          <p className="text-[10px] text-stone-550 mt-1">Học sâu cơ chế tách chuỗi, hoán đổi delimiters và các cạm bẫy phòng thi Java.</p>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-stone-200 p-1 rounded-xl w-fit flex-wrap">
          <button
            onClick={() => { setActiveTab("sandbox"); resetSandboxSimulation(); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              activeTab === "sandbox" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
            }`}
          >
            Sandbox & Iterator
          </button>
          <button
            onClick={() => { setActiveTab("dynamic"); resetDynamicSimulation(); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              activeTab === "dynamic" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
            }`}
          >
            Delim Động
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              activeTab === "compare" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
            }`}
          >
            So sánh split()
          </button>
          <button
            onClick={() => { setActiveTab("gotchas"); resetGotchaSimulation(); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              activeTab === "gotchas" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
            }`}
          >
            ⚠️ Cạm Bẫy
          </button>
        </div>
      </div>

      {/* Tab 1: Sandbox & Iterator */}
      {activeTab === "sandbox" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Controls - Col 4 */}
          <div className="md:col-span-4 bg-stone-100 p-4 border border-stone-200 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-stone-700 block">Chuỗi đầu vào (Input string):</label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  disabled={isSimulating}
                  className="w-full bg-white border border-stone-200 rounded-xl px-2.5 py-2 font-mono text-xs focus:outline-none focus:border-accent"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-stone-700 block">Ký tự phân cách (Delims):</label>
                <input
                  type="text"
                  value={delims}
                  onChange={(e) => setDelims(e.target.value)}
                  disabled={isSimulating}
                  placeholder="Khoảng trắng là mặc định"
                  className="w-full bg-white border border-stone-200 rounded-xl px-2.5 py-2 font-mono text-xs focus:outline-none focus:border-accent"
                />
              </div>

              <div className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  id="ret-val"
                  checked={returnValues}
                  onChange={(e) => setReturnValues(e.target.checked)}
                  disabled={isSimulating}
                  className="rounded border-stone-200 text-accent cursor-pointer"
                />
                <label htmlFor="ret-val" className="font-bold text-stone-700 select-none cursor-pointer">
                  Coi Delimiter là Token
                </label>
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              {!isSimulating ? (
                <button
                  onClick={initSandboxSimulation}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow hover:bg-accent/90 transition-all"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Khởi tạo</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={stepSandboxSimulation}
                    disabled={currentIndex >= tokensList.length - 1}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                      currentIndex >= tokensList.length - 1
                        ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                    }`}
                  >
                    <span>Tiến 1 bước</span>
                  </button>
                  <button
                    onClick={resetSandboxSimulation}
                    className="px-3 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Visualization - Col 8 */}
          <div className="md:col-span-8 flex flex-col justify-between gap-4">
            {/* Input display with pointer */}
            <div className="bg-stone-900 border border-stone-850 rounded-2xl p-4 text-white">
              <span className="text-[9px] font-black text-stone-500 uppercase tracking-wider block mb-2.5">Quét chuỗi bộ nhớ RAM:</span>
              
              <div className="flex flex-wrap gap-1 font-mono text-sm leading-relaxed p-2.5 bg-stone-950 rounded-xl border border-stone-800">
                {inputText.split("").map((c, idx) => {
                  let highlighted = false;
                  let colorClass = "text-stone-300";
                  
                  // Determine if this character belongs to the current active token
                  if (currentIndex !== -1 && isSimulating) {
                    let charPos = 0;
                    for (let tIdx = 0; tIdx <= currentIndex; tIdx++) {
                      const t = tokensList[tIdx];
                      const tLength = t.text.length;
                      
                      // Find where this token fits in the string
                      const startIdx = inputText.indexOf(t.text, charPos);
                      if (startIdx !== -1) {
                        charPos = startIdx + tLength;
                        if (tIdx === currentIndex && idx >= startIdx && idx < startIdx + tLength) {
                          highlighted = true;
                          colorClass = t.isDelim ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
                        }
                      }
                    }
                  }

                  return (
                    <span 
                      key={idx} 
                      className={`px-0.5 rounded transition-all duration-150 ${colorClass}`}
                    >
                      {c === " " ? "␣" : c}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Token details and iterator status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 bg-white border border-stone-200 rounded-2xl space-y-1">
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider block">Trạng thái lặp (Iterator State):</span>
                <div className="text-xs font-bold space-y-1">
                  <div>hasMoreTokens(): <span className="font-mono text-accent">{isSimulating ? (currentIndex < tokensList.length - 1 ? "true" : "false") : "Chưa chạy"}</span></div>
                  <div>countTokens(): <span className="font-mono text-accent">{isSimulating ? countRemaining : 0}</span></div>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-2xl space-y-1">
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider block">Token đang đọc (Current):</span>
                <div className="text-sm font-black font-mono text-stone-850">
                  {isSimulating && currentIndex !== -1 ? (
                    <span className={tokensList[currentIndex].isDelim ? "text-amber-500" : "text-emerald-500"}>
                      "{tokensList[currentIndex].text}"
                    </span>
                  ) : (
                    <span className="text-stone-400">rỗng</span>
                  )}
                </div>
              </div>
            </div>

            {/* List of collected tokens */}
            <div className="bg-white border border-stone-200 rounded-2xl p-4 flex-1">
              <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider block mb-2.5">Danh sách Token đã thu gom (Output):</span>
              <div className="flex flex-wrap gap-2">
                {collectedTokens.length === 0 ? (
                  <span className="text-xs text-stone-400 italic">Chưa có token nào được lấy ra...</span>
                ) : (
                  collectedTokens.map((t, idx) => (
                    <div 
                      key={idx} 
                      className="px-2.5 py-1 rounded-xl bg-stone-900 border border-stone-800 text-white font-mono text-xs flex items-center gap-1.5 animate-in"
                    >
                      <span className="text-[8px] text-stone-500 font-bold">#{idx + 1}</span>
                      <span>"{t}"</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Dynamic Delimiter Swapping */}
      {activeTab === "dynamic" && (
        <div className="space-y-4">
          <div className="p-4 bg-amber-500/5 border border-amber-500/25 rounded-2xl space-y-2">
            <span className="text-xs font-black text-amber-700 block uppercase">⚙️ Thực nghiệm ví dụ B: nextToken(String delim)</span>
            <p className="text-[10.5px] leading-relaxed text-stone-750">
              Đoạn mã khai báo: <code>new StringTokenizer("my,name,is,khan")</code> với ký tự phân cách mặc định ban đầu là khoảng trắng. Nhưng khi gọi <code>st.nextToken(",")</code>, delimiters lập tức bị thay đổi thành dấu phẩy <strong>ngay lúc gọi</strong>!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Steps panel */}
            <div className="md:col-span-5 bg-stone-100 p-4 border border-stone-200 rounded-2xl flex flex-col justify-between">
              <div className="space-y-3.5 text-xs">
                <div className={`p-3 rounded-xl border transition-all ${dynStep === 0 ? "bg-white border-accent" : "bg-stone-200 opacity-60"}`}>
                  <span className="font-bold text-stone-900 block">Bước 0: Khởi tạo</span>
                  <code className="text-[10px] text-stone-600 block mt-1">StringTokenizer st = new StringTokenizer("my,name,is,khan");</code>
                </div>

                <div className={`p-3 rounded-xl border transition-all ${dynStep === 1 ? "bg-white border-accent animate-pulse" : "bg-stone-200 opacity-60"}`}>
                  <span className="font-bold text-stone-900 block">Bước 1: Cắt bằng phân cách comma</span>
                  <code className="text-[10px] text-stone-600 block mt-1">st.nextToken(","); // trả về "my"</code>
                </div>

                <div className={`p-3 rounded-xl border transition-all ${dynStep === 2 ? "bg-white border-accent animate-pulse" : "bg-stone-200 opacity-60"}`}>
                  <span className="font-bold text-stone-900 block">Bước 2: Cắt mặc định (khoảng trắng)</span>
                  <code className="text-[10px] text-stone-600 block mt-1">st.nextToken(); // trả về "name"</code>
                </div>

                <div className={`p-3 rounded-xl border transition-all ${dynStep === 3 ? "bg-white border-accent animate-pulse" : "bg-stone-200 opacity-60"}`}>
                  <span className="font-bold text-stone-900 block">Bước 3: Tiếp tục cắt mặc định</span>
                  <code className="text-[10px] text-stone-600 block mt-1">st.nextToken(); // trả về "is,khan"</code>
                </div>
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={stepDynamicSimulation}
                  disabled={dynStep >= 3}
                  className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                    dynStep >= 3
                      ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                      : "bg-accent text-white hover:bg-accent/90"
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Bước tiếp</span>
                </button>
                <button
                  onClick={resetDynamicSimulation}
                  className="px-3 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Viewport visualization */}
            <div className="md:col-span-7 bg-stone-900 border border-stone-850 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-wider block mb-3">Phát hiện Token động trong RAM:</span>
                
                <div className="bg-stone-950 p-4 border border-stone-800 rounded-xl font-mono text-sm text-stone-300 space-y-3">
                  <div className="flex justify-between items-center text-xs border-b border-stone-800 pb-2">
                    <span className="text-stone-500">Chuỗi quét:</span>
                    <span className="text-amber-400 font-bold">"my,name,is,khan"</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] text-stone-500 block">Mảnh được lấy ra:</span>
                    <div className="flex flex-col gap-1.5">
                      {dynTokens.map((t, idx) => (
                        <div key={idx} className="text-xs text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Token {idx + 1}: <strong>"{t.split(" ")[0]}"</strong> <span className="text-stone-500 text-[10px]">{t.slice(t.indexOf(" "))}</span></span>
                        </div>
                      ))}
                      {dynTokens.length === 0 && (
                        <span className="text-xs text-stone-500 italic">Nhấn "Bước tiếp" để xem luồng hoạt động.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-stone-850/60 rounded-xl text-[10px] text-stone-400 leading-relaxed border border-stone-800 mt-4">
                <strong>Bài học:</strong> <code>st.nextToken()</code> không có tham số sẽ tự động dùng lại danh sách delimiter đã khai báo lúc khởi tạo. Còn <code>st.nextToken(delim)</code> cho phép đổi luật cắt tức thời, rất hữu ích cho các chuỗi chứa nhiều loại định dạng khác nhau.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Compare StringTokenizer vs String.split() */}
      {activeTab === "compare" && (
        <div className="space-y-4">
          <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-12 bg-stone-100 border-b border-stone-250 py-2.5 px-4 text-[9px] font-black text-stone-500 uppercase tracking-wider">
              <div className="col-span-3">Tiêu chí so sánh</div>
              <div className="col-span-4">StringTokenizer</div>
              <div className="col-span-5">String.split()</div>
            </div>

            <div className="divide-y divide-stone-200 text-xs">
              {/* mutability */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Cơ chế cắt chuỗi</div>
                <div className="col-span-4 text-stone-600">Duyệt con trỏ tuần tự (Pointer traversal).</div>
                <div className="col-span-5 text-stone-600">Sử dụng Biểu thức chính quy (Regular Expression - Regex).</div>
              </div>

              {/* performance */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Hiệu năng & Tốc độ</div>
                <div className="col-span-4 text-stone-600 text-emerald-600 font-bold">Nhanh hơn từ 2 - 4 lần vì chỉ ghép char đơn thuần.</div>
                <div className="col-span-5 text-stone-600">Chậm hơn do phải tốn tài nguyên compile cú pháp Regex.</div>
              </div>

              {/* memory */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Tiêu tốn bộ nhớ Heap</div>
                <div className="col-span-4 text-stone-600 text-emerald-600 font-bold">Cực thấp. Lấy đến đâu sinh đối tượng đến đó.</div>
                <div className="col-span-5 text-stone-600">Hao phí cao. Tạo lập toàn bộ một mảng các String <code>String[]</code> trên Heap ngay lập tức.</div>
              </div>

              {/* ease of use */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Tính năng linh hoạt</div>
                <div className="col-span-4 text-stone-600">Chỉ chia nhỏ theo ký tự phân cách đơn lẻ. Khó làm việc phức tạp.</div>
                <div className="col-span-5 text-stone-600 text-blue-600 font-bold">Rất linh hoạt, có thể split theo các mẫu phức tạp (ví dụ: số, email).</div>
              </div>

              {/* status */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Khuyến nghị hiện tại</div>
                <div className="col-span-4 text-stone-600 text-rose-500 font-bold">Là Legacy Class (Java khuyến nghị hạn chế sử dụng mới).</div>
                <div className="col-span-5 text-stone-600 text-emerald-600 font-bold">Là Modern Method chuẩn, trực quan, khuyên dùng mặc định.</div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl flex items-start gap-2 text-[10px] text-stone-600 leading-relaxed">
            <HelpCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <div>
              <strong>Lời khuyên phòng thi & làm dự án:</strong> Mặc dù StringTokenizer chạy nhanh hơn do không có bộ máy Regex, trong hầu hết các ứng dụng hiện đại, tốc độ chênh lệch là không đáng kể so với lợi thế về mặt code ngắn gọn và dễ bảo trì của <code>String.split()</code>. Chỉ nên dùng StringTokenizer khi xử lý các tập tin dữ liệu siêu lớn (như file CSV hàng triệu dòng) để tránh tràn bộ nhớ Heap.
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Gotchas */}
      {activeTab === "gotchas" && (
        <div className="space-y-4">
          <div className="bg-rose-500/10 border border-rose-550/25 p-4 rounded-2xl flex items-start gap-3 text-stone-850">
            <AlertOctagon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1">
              <span className="text-xs font-black text-rose-700 block uppercase">⚠️ BẪY ĐỀ THI: NoSuchElementException TRONG VÒNG LẶP</span>
              <p className="text-[10.5px] leading-relaxed text-stone-750">
                Một lỗi thi cử cực kỳ kinh điển là gọi <code>st.nextToken()</code> <strong>nhiều lần</strong> trong cùng một thân vòng lặp <code>while</code>. Khi tổng số token là số lẻ (ví dụ: 3 tokens), ở vòng lặp thứ hai, lệnh nextToken thứ hai sẽ cố gắng chọc vào ô trống không còn giá trị, làm sập chương trình lập tức.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Incorrect code simulator */}
            <div className="md:col-span-5 bg-stone-100 p-4 border border-stone-200 rounded-2xl flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] font-black text-rose-600 uppercase tracking-wider block">Mã nguồn bị lỗi (Odd tokens):</span>
                <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl text-white font-mono text-[9px] leading-relaxed">
                  <div>StringTokenizer st = <span className="text-purple-400">new</span> StringTokenizer(<span className="text-amber-300">"my name is"</span>); <span className="text-stone-500">// 3 tokens</span></div>
                  <div><span className="text-purple-400">while</span> (st.hasMoreTokens()) {"{"}</div>
                  <div className="pl-3.5"><span className="text-stone-400">// In ra 2 token mỗi vòng lặp</span></div>
                  <div className="pl-3.5">System.out.println(st.nextToken() + <span className="text-amber-300">" "</span> + st.nextToken());</div>
                  <div>{"}"}</div>
                </div>
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={stepGotchaSimulation}
                  disabled={gotchaStep >= 2}
                  className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                    gotchaStep >= 2
                      ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                      : "bg-rose-500 text-white hover:bg-rose-650"
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Dịch từng bước</span>
                </button>
                <button
                  onClick={resetGotchaSimulation}
                  className="px-3 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Trace stack output */}
            <div className="md:col-span-7 bg-stone-900 border border-stone-850 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-wider block mb-2.5">Nhật ký bộ dịch JVM Console:</span>
                <div className="bg-stone-950 p-4 border border-stone-800 rounded-xl font-mono text-[10px] text-stone-300 space-y-1.5 min-h-[110px]">
                  {gotchaLogs.map((log, idx) => (
                    <div 
                      key={idx} 
                      className={log.startsWith("🔥") ? "text-rose-400 font-bold" : "text-stone-300"}
                    >
                      {log}
                    </div>
                  ))}
                  {gotchaLogs.length === 0 && (
                    <span className="text-stone-500 italic">Nhấn nút chạy để xem chương trình crash.</span>
                  )}
                </div>
              </div>

              <div className="p-3 bg-stone-850/60 rounded-xl text-[10px] text-stone-400 leading-relaxed border border-stone-800 mt-4">
                <strong>Quy tắc sửa đổi an toàn:</strong> Chỉ nên gọi <code>st.nextToken()</code> <strong>chỉ duy nhất 1 lần</strong> trong mỗi lần kiểm tra <code>st.hasMoreTokens()</code>. Nếu muốn in nhiều phần tử, hãy gán giá trị trả về vào một biến trung gian trước!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
