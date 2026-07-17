"use client";
import React, { useState } from "react";
import { Play, RotateCcw, Copy, Check, Code, User, AlertCircle, FileCode } from "lucide-react";

export default function VietnameseNameNormalizer() {
  const [activeSubTab, setActiveSubTab] = useState("normalizer"); // "normalizer" | "solutions"
  const [activeCodeTab, setActiveCodeTab] = useState("normalize"); // "count" | "first" | "last" | "middle" | "capital" | "normalize"

  // Normalizer Simulator States
  const [rawName, setRawName] = useState("   nguYEN    vAn   tEo   ");
  const [simStep, setSimStep] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [processedTokens, setProcessedTokens] = useState([]);
  const [finalName, setFinalName] = useState("");
  const [stats, setStats] = useState({ count: 0, first: "", last: "", middle: "" });
  const [copied, setCopied] = useState(false);

  const initNormalizer = () => {
    // Trim raw string, split by multiple spaces using simulated StringTokenizer
    const trimmed = rawName.trim();
    if (!trimmed) return;

    // Simulate StringTokenizer behavior
    const wordList = trimmed.split(/\s+/);
    setTokens(wordList);
    setProcessedTokens([]);
    setFinalName("");
    setSimStep(1);
  };

  const nextNormalizerStep = () => {
    setSimStep((prev) => {
      const next = prev + 1;
      
      if (next === 2) {
        // Step 2: Capitalize first letters of each token
        const capitalized = tokens.map(
          (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        );
        setProcessedTokens(capitalized);
      } else if (next === 3) {
        // Step 3: Rebuild string using StringBuilder
        const rebuilt = processedTokens.join(" ");
        setFinalName(rebuilt);
        
        // Calculate statistics
        const count = processedTokens.length;
        const last = processedTokens[0] || "";
        const first = count > 1 ? processedTokens[count - 1] : "";
        const middle = count > 2 ? processedTokens.slice(1, count - 1).join(" ") : "";
        
        setStats({ count, first, last, middle });
      }
      
      return next > 3 ? 3 : next;
    });
  };

  const resetNormalizer = () => {
    setSimStep(0);
    setTokens([]);
    setProcessedTokens([]);
    setFinalName("");
    setStats({ count: 0, first: "", last: "", middle: "" });
  };

  const javaCodes = {
    count: `// 1. Đếm số từ trong tên
public static int countWords(String fullName) {
    if (fullName == null || fullName.trim().isEmpty()) {
        return 0;
    }
    StringTokenizer st = new StringTokenizer(fullName);
    return st.countTokens();
}`,
    first: `// 2. Trả về Tên (First name - từ cuối cùng)
public static String getFirstName(String fullName) {
    if (fullName == null || fullName.trim().isEmpty()) {
        return "";
    }
    StringTokenizer st = new StringTokenizer(fullName);
    String firstName = "";
    while (st.hasMoreTokens()) {
        firstName = st.nextToken(); // Token cuối cùng nhận được chính là tên
    }
    return firstName;
}`,
    last: `// 3. Trả về Họ (Last name - từ đầu tiên)
public static String getLastName(String fullName) {
    if (fullName == null || fullName.trim().isEmpty()) {
        return "";
    }
    StringTokenizer st = new StringTokenizer(fullName);
    if (st.hasMoreTokens()) {
        return st.nextToken(); // Token đầu tiên là Họ
    }
    return "";
}`,
    middle: `// 4. Trả về Tên đệm (Middle name)
public static String getMiddleName(String fullName) {
    if (fullName == null || fullName.trim().isEmpty()) {
        return "";
    }
    StringTokenizer st = new StringTokenizer(fullName);
    int count = st.countTokens();
    if (count <= 2) {
        return ""; // Chỉ có Họ và Tên, không có tên đệm
    }
    
    st.nextToken(); // Bỏ qua Họ (token đầu tiên)
    StringBuilder middleName = new StringBuilder();
    for (int i = 0; i < count - 2; i++) {
        middleName.append(st.nextToken());
        if (i < count - 3) {
            middleName.append(" ");
        }
    }
    return middleName.toString();
}`,
    capital: `// 5. Viết hoa chữ cái đầu của mỗi từ
public static String capitalizeWords(String fullName) {
    if (fullName == null || fullName.trim().isEmpty()) {
        return "";
    }
    StringTokenizer st = new StringTokenizer(fullName);
    StringBuilder result = new StringBuilder();
    
    while (st.hasMoreTokens()) {
        String word = st.nextToken().toLowerCase();
        // Viết hoa chữ cái đầu tiên và nối phần còn lại
        result.append(Character.toUpperCase(word.charAt(0)))
              .append(word.substring(1));
              
        if (st.hasMoreTokens()) {
            result.append(" ");
        }
    }
    return result.toString();
}`,
    normalize: `// 6. Chuẩn hóa họ tên đầy đủ (Trim khoảng trắng thừa)
public static String formalizeName(String fullName) {
    if (fullName == null || fullName.trim().isEmpty()) {
        return "";
    }
    StringTokenizer st = new StringTokenizer(fullName);
    StringBuilder normalized = new StringBuilder();
    
    while (st.hasMoreTokens()) {
        String word = st.nextToken().toLowerCase();
        // Viết hoa ký tự đầu của từ
        normalized.append(Character.toUpperCase(word.charAt(0)))
                  .append(word.substring(1));
                  
        if (st.hasMoreTokens()) {
            normalized.append(" "); // Chỉ thêm đúng 1 khoảng trắng giữa các từ
        }
    }
    return normalized.toString().trim();
}`
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      {/* Tab Selector */}
      <div className="flex bg-stone-200 p-1 rounded-xl w-fit mb-5">
        <button
          onClick={() => setActiveSubTab("normalizer")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer flex items-center gap-1.5 ${
            activeSubTab === "normalizer" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Bộ chuẩn hóa họ tên</span>
        </button>
        <button
          onClick={() => setActiveSubTab("solutions")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer flex items-center gap-1.5 ${
            activeSubTab === "solutions" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Lời giải mã nguồn Java</span>
        </button>
      </div>

      {/* SUBTAB 1: Normalizer Simulation */}
      {activeSubTab === "normalizer" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Controls col 4 */}
          <div className="md:col-span-4 bg-stone-100 p-4 border border-stone-200 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block">Thử nghiệm bài tập</span>
              
              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-stone-700 block">Nhập họ tên (chưa chuẩn hóa):</label>
                <input
                  type="text"
                  value={rawName}
                  onChange={(e) => setRawName(e.target.value)}
                  disabled={simStep > 0}
                  className="w-full bg-white border border-stone-200 rounded-xl px-2.5 py-2 font-mono text-xs focus:outline-none focus:border-accent"
                />
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200 text-[10px] text-stone-500 leading-relaxed">
                <strong>Gợi ý:</strong> Hãy nhập chuỗi chứa nhiều khoảng trắng thừa ở đầu, cuối và giữa các chữ (ví dụ: <code>"  tran   vAn    hUng  "</code>) để trực quan hóa quá trình xử lý.
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              {simStep === 0 ? (
                <button
                  onClick={initNormalizer}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow hover:bg-accent/90 transition-all"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Chạy phân tích</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={nextNormalizerStep}
                    disabled={simStep >= 3}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                      simStep >= 3
                        ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                    }`}
                  >
                    <span>Bước tiếp</span>
                  </button>
                  <button
                    onClick={resetNormalizer}
                    className="px-3 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Visualization col 8 */}
          <div className="md:col-span-8 flex flex-col justify-between gap-4">
            
            {/* Step visualization stream */}
            <div className="bg-stone-900 border border-stone-850 rounded-2xl p-4 text-white flex-1 flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-wider block mb-2.5">Quy trình chuẩn hóa trong JVM:</span>
                
                {/* Step trace */}
                <div className="space-y-2.5 font-mono text-[10px] leading-relaxed">
                  {simStep >= 1 && (
                    <div className="text-stone-300 flex items-center gap-2">
                      <span className="text-amber-400 font-bold">[1. StringTokenizer]</span>
                      <span>Tách từ: </span>
                      <div className="flex gap-1.5 flex-wrap">
                        {tokens.map((t, i) => (
                          <span key={i} className="bg-stone-850 px-1.5 py-0.5 rounded border border-stone-800 text-amber-300">"{t}"</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {simStep >= 2 && (
                    <div className="text-stone-350 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">[2. Viết hoa]</span>
                      <span>Chuyển đổi: </span>
                      <div className="flex gap-1.5 flex-wrap">
                        {processedTokens.map((t, i) => (
                          <span key={i} className="bg-stone-850 px-1.5 py-0.5 rounded border border-stone-800 text-emerald-300">"{t}"</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {simStep >= 3 && (
                    <div className="text-stone-400 flex items-center gap-2">
                      <span className="text-blue-400 font-bold">[3. StringBuilder]</span>
                      <span>Kết quả chuẩn hóa: </span>
                      <span className="bg-blue-500/15 border border-blue-500/25 px-2 py-0.5 rounded text-blue-300 font-bold text-xs">
                        "{finalName}"
                      </span>
                    </div>
                  )}

                  {simStep === 0 && (
                    <div className="text-stone-500 italic py-4 text-center text-xs">
                      Bấm nút "Chạy phân tích" bên trái để mô phỏng từng bước thuật toán.
                    </div>
                  )}
                </div>
              </div>

              {/* Simulation Result Statistics */}
              {simStep >= 3 && (
                <div className="grid grid-cols-4 gap-2 border-t border-stone-800 pt-3 mt-3 text-center">
                  <div className="p-1.5 bg-stone-950 border border-stone-850 rounded-xl">
                    <span className="text-[7.5px] text-stone-500 uppercase font-black block">Số lượng từ</span>
                    <span className="text-xs font-black font-mono text-amber-400 block mt-0.5">{stats.count}</span>
                  </div>
                  <div className="p-1.5 bg-stone-950 border border-stone-850 rounded-xl">
                    <span className="text-[7.5px] text-stone-500 uppercase font-black block">Họ (Last Name)</span>
                    <span className="text-xs font-black font-mono text-emerald-400 truncate block mt-0.5">"{stats.last}"</span>
                  </div>
                  <div className="p-1.5 bg-stone-950 border border-stone-850 rounded-xl">
                    <span className="text-[7.5px] text-stone-500 uppercase font-black block">Tên đệm</span>
                    <span className="text-xs font-black font-mono text-blue-400 truncate block mt-0.5">
                      {stats.middle ? `"${stats.middle}"` : "rỗng"}
                    </span>
                  </div>
                  <div className="p-1.5 bg-stone-950 border border-stone-850 rounded-xl">
                    <span className="text-[7.5px] text-stone-500 uppercase font-black block">Tên (First Name)</span>
                    <span className="text-xs font-black font-mono text-purple-400 truncate block mt-0.5">"{stats.first}"</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-blue-500/5 border border-blue-500/25 rounded-2xl flex items-start gap-2 text-stone-750">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div className="text-[10px] leading-relaxed">
                <strong>Phương pháp tối ưu phòng thi:</strong> Kết hợp <code>StringTokenizer</code> để bóc tách từ thô (tự động loại bỏ toàn bộ khoảng trắng dư thừa ở đầu, cuối và giữa các từ), sau đó dùng <code>StringBuilder</code> để nối ngược các từ lại với nhau sau khi đã định dạng chữ hoa đầu từ.
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SUBTAB 2: Java Solutions */}
      {activeSubTab === "solutions" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Solution Selector - Col 3 */}
          <div className="md:col-span-3 flex flex-row md:flex-col gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveCodeTab("count")}
              className={`px-3 py-2 rounded-xl text-left text-[10px] font-bold transition-all cursor-pointer border-none ${
                activeCodeTab === "count" ? "bg-stone-900 text-white shadow" : "bg-stone-200 text-stone-600 hover:text-stone-900"
              }`}
            >
              1. Đếm số từ
            </button>
            <button
              onClick={() => setActiveCodeTab("first")}
              className={`px-3 py-2 rounded-xl text-left text-[10px] font-bold transition-all cursor-pointer border-none ${
                activeCodeTab === "first" ? "bg-stone-900 text-white shadow" : "bg-stone-200 text-stone-600 hover:text-stone-900"
              }`}
            >
              2. Trả về Tên (first)
            </button>
            <button
              onClick={() => setActiveCodeTab("last")}
              className={`px-3 py-2 rounded-xl text-left text-[10px] font-bold transition-all cursor-pointer border-none ${
                activeCodeTab === "last" ? "bg-stone-900 text-white shadow" : "bg-stone-200 text-stone-600 hover:text-stone-900"
              }`}
            >
              3. Trả về Họ (last)
            </button>
            <button
              onClick={() => setActiveCodeTab("middle")}
              className={`px-3 py-2 rounded-xl text-left text-[10px] font-bold transition-all cursor-pointer border-none ${
                activeCodeTab === "middle" ? "bg-stone-900 text-white shadow" : "bg-stone-200 text-stone-600 hover:text-stone-900"
              }`}
            >
              4. Trả về Tên đệm
            </button>
            <button
              onClick={() => setActiveCodeTab("capital")}
              className={`px-3 py-2 rounded-xl text-left text-[10px] font-bold transition-all cursor-pointer border-none ${
                activeCodeTab === "capital" ? "bg-stone-900 text-white shadow" : "bg-stone-200 text-stone-600 hover:text-stone-900"
              }`}
            >
              5. Viết hoa ký tự đầu
            </button>
            <button
              onClick={() => setActiveCodeTab("normalize")}
              className={`px-3 py-2 rounded-xl text-left text-[10px] font-bold transition-all cursor-pointer border-none ${
                activeCodeTab === "normalize" ? "bg-stone-900 text-white shadow" : "bg-stone-200 text-stone-600 hover:text-stone-900"
              }`}
            >
              6. Chuẩn hóa họ tên
            </button>
          </div>

          {/* Code Viewer - Col 9 */}
          <div className="md:col-span-9 flex flex-col justify-between gap-3">
            <div className="bg-stone-900 border border-stone-850 rounded-2xl overflow-hidden relative">
              {/* Copy button */}
              <button
                onClick={() => copyToClipboard(javaCodes[activeCodeTab])}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-750 text-stone-400 border border-stone-700 cursor-pointer transition-all flex items-center justify-center"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <div className="px-4 py-2 border-b border-stone-850 bg-stone-950 text-[10px] font-bold text-stone-450 flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5" />
                <span>Java Source Code Lời Giải</span>
              </div>
              
              <pre className="p-4 overflow-auto font-mono text-[9px] md:text-[10px] text-stone-300 leading-relaxed max-h-[220px]">
                {javaCodes[activeCodeTab]}
              </pre>
            </div>

            <div className="p-3 bg-stone-150 rounded-xl border border-stone-200 text-[10px] text-stone-500 leading-relaxed flex items-start gap-1.5">
              <InfoIcon className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                {activeCodeTab === "count" && "Dùng st.countTokens() trả về ngay lập tức tổng số lượng token còn lại chưa lặp qua, tối ưu O(1)."}
                {activeCodeTab === "first" && "Vòng lặp chạy cho đến token cuối cùng, gán đè liên tục biến firstName. Token cuối chính là tên."}
                {activeCodeTab === "last" && "Phương thức chỉ cần kiểm tra có token đầu hay không rồi trả về luôn. Không cần chạy vòng lặp."}
                {activeCodeTab === "middle" && "Bỏ qua Họ (nextToken đầu tiên). Nối tiếp các token tiếp theo vào StringBuilder ngoại trừ token cuối cùng (Tên)."}
                {activeCodeTab === "capital" && "Chuẩn hóa chữ thường toàn từ trước, sau đó dùng Character.toUpperCase() viết hoa ký tự index 0."}
                {activeCodeTab === "normalize" && "Sử dụng StringTokenizer loại bỏ toàn bộ khoảng trắng thừa, sau đó ghép lại bằng StringBuilder tối ưu bộ nhớ Heap."}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
