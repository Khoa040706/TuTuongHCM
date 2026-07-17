"use client";
import React, { useState } from "react";
import { Plus, Trash2, ArrowRight, Info, RotateCcw, Code, CheckCircle, AlertTriangle } from "lucide-react";

export default function ChainingPipelineBuilder() {
  const [pipeline, setPipeline] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isValid, setIsValid] = useState(false);

  const availableBlocks = [
    { id: "fis", name: "FileInputStream", type: "physical-input", desc: "Đọc byte trực tiếp từ tệp tin vật lý." },
    { id: "fos", name: "FileOutputStream", type: "physical-output", desc: "Ghi byte trực tiếp xuống tệp tin vật lý." },
    { id: "bis", name: "BufferedInputStream", type: "filter-input", desc: "Thêm bộ đệm đọc RAM cho luồng nhập." },
    { id: "bos", name: "BufferedOutputStream", type: "filter-output", desc: "Thêm bộ đệm ghi RAM cho luồng xuất." },
    { id: "isr", name: "InputStreamReader", type: "adapter-input", desc: "Cầu nối chuyển đổi Byte Stream thành Char Stream." },
    { id: "osw", name: "OutputStreamWriter", type: "adapter-output", desc: "Cầu nối chuyển đổi Char Stream thành Byte Stream." },
    { id: "pw", name: "PrintWriter", type: "high-char-output", desc: "Định dạng in ấn ký tự (print/println) chuyên sâu." }
  ];

  const presets = [
    {
      name: "Đọc file nhị phân có bộ đệm",
      chain: ["fis", "bis"],
      desc: "FileInputStream ➔ BufferedInputStream"
    },
    {
      name: "Ghi tệp tin văn bản tối ưu có bộ đệm",
      chain: ["fos", "bos", "osw", "pw"],
      desc: "FileOutputStream ➔ BufferedOutputStream ➔ OutputStreamWriter ➔ PrintWriter"
    },
    {
      name: "Đọc ký tự Unicode từ bàn phím",
      chain: ["isr", "bis"] // custom simulation
    }
  ];

  const validatePipeline = (currentPipeline) => {
    if (currentPipeline.length === 0) {
      setIsValid(false);
      setErrorMsg("");
      return;
    }

    // 1. Check innermost block (first element)
    const innermost = currentPipeline[0];
    const isInputPipeline = innermost.type.includes("input");

    // 2. Check uniformity (all must be input or all output)
    for (let block of currentPipeline) {
      const isBlockInput = block.type.includes("input");
      if (isBlockInput !== isInputPipeline) {
        setIsValid(false);
        setErrorMsg("⚠️ Không thể trộn lẫn Luồng Nhập (Input) và Luồng Xuất (Output) trong cùng một chuỗi!");
        return;
      }
    }

    // 3. Inner-most must be physical
    if (!innermost.type.includes("physical")) {
      // Exception: System.in/System.out simulated or adapter at inner, but generally physical is needed
      setIsValid(false);
      setErrorMsg("⚠️ Đáy của hệ thống Chaining (bọc trong cùng) phải là một luồng vật lý như FileInputStream hoặc FileOutputStream.");
      return;
    }

    // 4. Check Type wrapping adapters
    // e.g. PrintWriter (char) cannot directly wrap FileOutputStream (byte) without OutputStreamWriter (adapter)
    for (let i = 1; i < currentPipeline.length; i++) {
      const prev = currentPipeline[i - 1];
      const curr = currentPipeline[i];

      // PrintWriter wrapping physical output directly
      if (curr.id === "pw" && prev.id === "fos") {
        setIsValid(false);
        setErrorMsg("⚠️ PrintWriter (luồng ký tự) không thể bọc trực tiếp FileOutputStream (luồng byte) mà không thông qua OutputStreamWriter (adapter).");
        return;
      }
      // PrintWriter wrapping BufferedOutputStream directly
      if (curr.id === "pw" && prev.id === "bos") {
        setIsValid(false);
        setErrorMsg("⚠️ PrintWriter không thể bọc trực tiếp BufferedOutputStream (byte) mà không thông qua OutputStreamWriter (adapter).");
        return;
      }
    }

    setIsValid(true);
    setErrorMsg("");
  };

  const handleAddBlock = (block) => {
    const updated = [...pipeline, block];
    setPipeline(updated);
    validatePipeline(updated);
  };

  const handleRemoveLast = () => {
    const updated = pipeline.slice(0, -1);
    setPipeline(updated);
    validatePipeline(updated);
  };

  const handleClear = () => {
    setPipeline([]);
    setIsValid(false);
    setErrorMsg("");
  };

  const handleLoadPreset = (presetIndex) => {
    const preset = presets[presetIndex];
    let newChain = [];
    if (presetIndex === 0) {
      newChain = [
        availableBlocks.find(b => b.id === "fis"),
        availableBlocks.find(b => b.id === "bis")
      ];
    } else if (presetIndex === 1) {
      newChain = [
        availableBlocks.find(b => b.id === "fos"),
        availableBlocks.find(b => b.id === "bos"),
        availableBlocks.find(b => b.id === "osw"),
        availableBlocks.find(b => b.id === "pw")
      ];
    } else {
      // Custom system.in mock
      newChain = [
        { id: "sysin", name: "System.in", type: "physical-input", desc: "Luồng nhập chuẩn từ bàn phím." },
        availableBlocks.find(b => b.id === "isr")
      ];
    }
    setPipeline(newChain);
    validatePipeline(newChain);
  };

  // Generate Java initialization code string
  const generateJavaCode = () => {
    if (pipeline.length === 0) return "// Hãy lắp ráp các khối stream bên trên để sinh mã nguồn...";
    
    let code = "";
    if (pipeline[0].id === "fis") code = 'new FileInputStream("data.txt")';
    else if (pipeline[0].id === "fos") code = 'new FileOutputStream("data.txt")';
    else if (pipeline[0].id === "sysin") code = 'System.in';
    else code = `new ${pipeline[0].name}()`;

    for (let i = 1; i < pipeline.length; i++) {
      const block = pipeline[i];
      if (block.id === "pw") {
        code = `new PrintWriter(${code}, true)`; // append autoFlush
      } else {
        code = `new ${block.name}(${code})`;
      }
    }

    return `${pipeline[pipeline.length - 1].name} stream = ${code};`;
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div>
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-600 animate-pulse" />
          <span>Mục XXII: Trình xây dựng chuỗi luồng Chaining Pipeline Builder</span>
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Học cách bọc các lớp luồng kế tiếp nhau (Wrapper Pattern) để tạo ra luồng dữ liệu thông minh vừa có đệm vừa có bộ mã hóa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
        {/* Left: Stream Block Library */}
        <div className="lg:col-span-5 bg-stone-50/60 p-4 rounded-2xl border border-stone-200/80 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
              Kho linh kiện lớp luồng
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={() => handleLoadPreset(0)}
                className="px-2 py-0.5 text-[8.5px] font-bold bg-sky-50 hover:bg-sky-100 text-sky-750 border border-sky-200 rounded"
              >
                Mẫu Đọc Đệm
              </button>
              <button
                onClick={() => handleLoadPreset(1)}
                className="px-2 py-0.5 text-[8.5px] font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-750 border border-indigo-200 rounded"
              >
                Mẫu Ghi PrintWriter
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {availableBlocks.map((block) => (
              <div
                key={block.id}
                className="p-2.5 bg-white border border-stone-200 hover:border-indigo-400 rounded-xl transition-all shadow-sm flex items-center justify-between group"
              >
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-800 font-mono">{block.name}</span>
                    <span className={`text-[8px] px-1 py-0.2 rounded font-bold uppercase ${
                      block.type.includes("input") ? "bg-sky-50 text-sky-600" : "bg-indigo-50 text-indigo-600"
                    }`}>
                      {block.type.includes("input") ? "Input" : "Output"}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-450 block mt-0.5">{block.desc}</span>
                </div>
                <button
                  onClick={() => handleAddBlock(block)}
                  className="p-1.5 bg-stone-50 hover:bg-indigo-50 text-stone-500 hover:text-indigo-600 rounded-lg border border-stone-200 hover:border-indigo-250 cursor-pointer shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Pipeline Assembly and Code Generation */}
        <div className="lg:col-span-7 bg-stone-50/60 p-4 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Ống dẫn bọc luồng Assembly (Ngoài cùng ➔ Trong cùng)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleRemoveLast}
                  disabled={pipeline.length === 0}
                  className="p-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded disabled:opacity-50 cursor-pointer"
                  title="Xóa block cuối"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleClear}
                  className="p-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded cursor-pointer"
                  title="Xóa tất cả"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pipeline visual blocks */}
            <div className="flex flex-col items-center justify-center min-h-[120px] p-4 bg-white border border-stone-200 rounded-2xl shadow-inner relative">
              {pipeline.length > 0 ? (
                <div className="w-full max-w-sm flex flex-col items-center gap-1.5">
                  {pipeline.slice().reverse().map((block, idx) => {
                    // Outer wrappers have larger padding/indent to show nesting
                    const depth = pipeline.length - 1 - idx;
                    return (
                      <div
                        key={idx}
                        className="w-full flex items-center justify-between p-2 rounded-xl border shadow-sm transition-all animate-fadeIn"
                        style={{
                          backgroundColor: block.type.includes("input") 
                            ? `rgba(224, 242, 254, ${0.4 + depth * 0.15})` 
                            : `rgba(238, 242, 255, ${0.4 + depth * 0.15})`,
                          borderColor: block.type.includes("input") ? "#7dd3fc" : "#a5b4fc",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-stone-500 font-bold">Tầng {depth + 1}:</span>
                          <span className="text-xs font-bold text-stone-850 font-mono">{block.name}</span>
                        </div>
                        <span className="text-[9px] text-stone-450 font-mono">
                          {idx === 0 ? "Lớp vật lý trong cùng" : "Wrapper bọc ngoài"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-stone-400 italic text-xs text-center flex flex-col items-center gap-1.5">
                  <Plus className="w-8 h-8 text-stone-300" />
                  <span>Chọn các khối luồng ở kho bên trái để bắt đầu bọc chuỗi (chaining).</span>
                </div>
              )}
            </div>

            {/* Validation Banner */}
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex gap-2 text-[11px] leading-relaxed text-red-800 animate-fadeIn">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {isValid && (
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-2 text-[11px] leading-relaxed text-emerald-850 animate-fadeIn">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>✅ Chuỗi hợp lệ! Các luồng được ghép nối chính xác về kiểu byte/character và cơ chế bọc.</span>
              </div>
            )}
          </div>

          {/* Generated Code Section */}
          <div className="mt-4 pt-4 border-t border-stone-200">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
              Mã khởi tạo Java tương ứng (Code sinh tự động)
            </span>
            <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl text-xs font-mono text-white flex justify-between items-center">
              <span className="text-emerald-400 flex-1 whitespace-pre-wrap select-all">{generateJavaCode()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
