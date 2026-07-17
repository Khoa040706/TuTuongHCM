"use client";
import React, { useState } from "react";
import { Network, ArrowRight, FileCode, CheckCircle, Info, RefreshCw } from "lucide-react";

export default function JavaIOPackageExplorer() {
  // Part A: Flow Diagram Selected Node
  const [activeModel, setActiveModel] = useState("input"); // "input" | "output"
  const [selectedNode, setSelectedNode] = useState("stream");

  const modelNodesInfo = {
    input: {
      source: {
        title: "Source (Nguồn phát dữ liệu)",
        desc: "Nguồn dữ liệu vật lý có thể là một tệp tin trên đĩa cứng (.txt, .bin), một thiết bị nhập liệu (bàn phím qua System.in), hoặc dữ liệu mạng nhận về từ socket."
      },
      stream: {
        title: "Input Stream (Luồng nhập)",
        desc: "Vận chuyển chuỗi dữ liệu thô (sequence of data) từ nguồn phát. Chương trình sẽ đọc từng phần tử một lúc (one item at a time) qua luồng này."
      },
      program: {
        title: "Program (Chương trình của bạn)",
        desc: "Sử dụng các phương thức đọc như read() hoặc readLine() để nhận dữ liệu từ Stream, xử lý thuật toán và lưu trữ tạm thời trên bộ nhớ RAM."
      }
    },
    output: {
      program: {
        title: "Program (Chương trình của bạn)",
        desc: "Chương trình chuẩn bị dữ liệu đầu ra cần xuất ghi (ví dụ: chuỗi văn bản hoặc mảng byte nhị phân)."
      },
      stream: {
        title: "Output Stream (Luồng xuất)",
        desc: "Mở đường ống kết nối logic để dẫn dữ liệu được đẩy ra ngoài từ chương trình một cách tuần tự."
      },
      destination: {
        title: "Destination (Đích nhận dữ liệu)",
        desc: "Nơi ghi nhận kết quả cuối cùng, có thể là tệp tin lưu trữ vật lý trên ổ đĩa, thiết bị hiển thị (màn hình console qua System.out), hoặc máy tính đích trên mạng."
      }
    }
  };

  // Part B: Side-by-Side Comparator State
  const [simText, setSimText] = useState("Xin chào");
  const getByteStreamValues = (str) => {
    const encoder = new TextEncoder();
    return Array.from(encoder.encode(str));
  };
  const getCharStreamValues = (str) => {
    return Array.from(str).map(c => c.charCodeAt(0));
  };

  return (
    <div className="space-y-6 font-sans">
      {/* PART A: Sơ đồ luồng dữ liệu tương tác */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Network className="w-5 h-5 text-sky-600" />
          <span>Mục VIII - Phần 2: Sơ đồ tương tác luồng dữ liệu (I/O Stream Model)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Nhấp chọn mô hình nhập/xuất và nhấp vào từng nút trên luồng để xem mô tả quy trình di chuyển dữ liệu trong Java.
        </p>

        {/* Toggle Model */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 select-none">
            <button
              onClick={() => { setActiveModel("input"); setSelectedNode("stream"); }}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeModel === "input" ? "bg-white text-sky-700 shadow-sm" : "text-stone-500"
              }`}
            >
              Mô hình Luồng Nhập (Input Stream Model)
            </button>
            <button
              onClick={() => { setActiveModel("output"); setSelectedNode("stream"); }}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeModel === "output" ? "bg-white text-sky-700 shadow-sm" : "text-stone-500"
              }`}
            >
              Mô hình Luồng Xuất (Output Stream Model)
            </button>
          </div>
        </div>

        {/* Diagram Visualizer */}
        <div className="bg-stone-50/60 p-5 rounded-2xl border border-stone-200/60 shadow-inner flex flex-col items-center justify-center min-h-[140px] mb-6">
          {activeModel === "input" ? (
            <div className="flex flex-wrap items-center justify-center gap-4 text-center font-mono">
              <button
                onClick={() => setSelectedNode("source")}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedNode === "source" ? "bg-sky-600 border-sky-600 text-white shadow-md scale-105" : "bg-white border-stone-200 text-stone-600 hover:border-sky-300"
                }`}
              >
                💾 Source
              </button>
              <ArrowRight className="w-4 h-4 text-stone-400 animate-pulse hidden sm:block" />
              <button
                onClick={() => setSelectedNode("stream")}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedNode === "stream" ? "bg-sky-600 border-sky-600 text-white shadow-md scale-105" : "bg-white border-stone-200 text-stone-600 hover:border-sky-300"
                }`}
              >
                🌊 Input Stream
              </button>
              <ArrowRight className="w-4 h-4 text-stone-400 animate-pulse hidden sm:block" />
              <button
                onClick={() => setSelectedNode("program")}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedNode === "program" ? "bg-sky-600 border-sky-600 text-white shadow-md scale-105" : "bg-white border-stone-200 text-stone-600 hover:border-sky-300"
                }`}
              >
                💻 Program
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-4 text-center font-mono">
              <button
                onClick={() => setSelectedNode("program")}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedNode === "program" ? "bg-indigo-650 border-indigo-650 text-white shadow-md scale-105" : "bg-white border-stone-200 text-stone-600 hover:border-indigo-300"
                }`}
              >
                💻 Program
              </button>
              <ArrowRight className="w-4 h-4 text-stone-400 animate-pulse hidden sm:block" />
              <button
                onClick={() => setSelectedNode("stream")}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedNode === "stream" ? "bg-indigo-650 border-indigo-650 text-white shadow-md scale-105" : "bg-white border-stone-200 text-stone-600 hover:border-indigo-300"
                }`}
              >
                🌊 Output Stream
              </button>
              <ArrowRight className="w-4 h-4 text-stone-400 animate-pulse hidden sm:block" />
              <button
                onClick={() => setSelectedNode("destination")}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedNode === "destination" ? "bg-indigo-650 border-indigo-650 text-white shadow-md scale-105" : "bg-white border-stone-200 text-stone-600 hover:border-indigo-300"
                }`}
              >
                💾 Destination
              </button>
            </div>
          )}

          {/* Node detail display */}
          <div className="mt-6 text-center max-w-lg">
            <h5 className="font-extrabold text-stone-850 text-xs uppercase tracking-wider mb-1">
              {modelNodesInfo[activeModel][selectedNode]?.title}
            </h5>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              {modelNodesInfo[activeModel][selectedNode]?.desc}
            </p>
          </div>
        </div>
      </div>

      {/* PART B: Side-by-Side Comparator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <FileCode className="w-5 h-5 text-sky-600" />
          <span>Mục VIII - Phần 3 & 4: So Sánh Byte Stream và Character Stream</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Thử nhập văn bản tiếng Việt có dấu để quan sát cách Java lưu trữ, mã hóa dạng Byte thô (1 byte) so với Character Unicode (2 bytes).
        </p>

        {/* Input box */}
        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60 shadow-inner mb-6 flex gap-4 items-center">
          <div className="flex-1">
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Chuỗi ký tự test:</label>
            <input
              type="text"
              value={simText}
              onChange={(e) => setSimText(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-855 focus:outline-none focus:border-sky-500 transition-colors shadow-sm font-semibold"
            />
          </div>
        </div>

        {/* Parallel Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Byte Stream Panel */}
          <div className="bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 shadow-inner flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block font-mono">Byte Stream (Đọc/ghi byte thô)</span>
                <h5 className="font-extrabold text-sm text-sky-700 mt-1">FileInputStream / FileOutputStream</h5>
              </div>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9px] leading-relaxed text-indigo-300 shadow-md overflow-x-auto">
{`int ch;
while ((ch = inObj.read()) != -1) {
    outObj.write(ch);
}`}
              </pre>

              <div className="space-y-2">
                <span className="text-[10px] text-stone-500 font-bold block">Danh sách byte nhị phân được truyền (UTF-8 encoding):</span>
                <div className="flex flex-wrap gap-1.5">
                  {getByteStreamValues(simText).map((val, i) => (
                    <span key={i} className="px-2 py-1 bg-sky-100/70 border border-sky-200 text-sky-800 rounded text-[9.5px] font-mono font-bold">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 text-[10px] text-sky-850 leading-relaxed mt-4">
              • Đọc từng byte đơn lẻ (0 - 255).<br/>
              • Phù hợp cho tệp tin nhị phân như hình ảnh, âm thanh.<br/>
              • <strong>Chú ý thi:</strong> <code>read()</code> trả về kiểu <code>int</code> chứ không phải byte. Khi hết file sẽ trả về <code>-1</code>.
            </div>
          </div>

          {/* Character Stream Panel */}
          <div className="bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 shadow-inner flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block font-mono">Character Stream (Đọc/ghi Unicode 2-byte)</span>
                <h5 className="font-extrabold text-sm text-indigo-700 mt-1">FileReader / FileWriter</h5>
              </div>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9px] leading-relaxed text-indigo-300 shadow-md overflow-x-auto">
{`int ch;
while ((ch = inObjStream.read()) != -1) {
    outObjStream.write(ch);
}`}
              </pre>

              <div className="space-y-2">
                <span className="text-[10px] text-stone-500 font-bold block">Danh sách mã Unicode Character (UTF-16):</span>
                <div className="flex flex-wrap gap-1.5">
                  {getCharStreamValues(simText).map((val, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-100/70 border border-indigo-200 text-indigo-800 rounded text-[9.5px] font-mono font-bold">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-[10px] text-indigo-850 leading-relaxed mt-4">
              • Tự động chuyển đổi mã hóa để đọc ký tự đa ngôn ngữ.<br/>
              • Thích hợp cho file văn bản (.txt) tiếng Việt để tránh lỗi font chữ.<br/>
              • Bản chất Character stream đóng vai trò lớp bọc (wrapper) cho Byte stream ở bên dưới.
            </div>
          </div>

        </div>
      </div>

      {/* PART C: Line Terminator & System rules */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Info className="w-5 h-5 text-sky-600" />
          <span>Mục VIII - Phần 5: Ký Tự Kết Thúc Dòng (Line Terminator)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-4">
          Cách các hệ điều hành và lớp bộ đệm (BufferedReader / BufferedWriter) phân giải ký tự xuống dòng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-stone-150 p-4 rounded-2xl shadow-sm text-center">
            <span className="text-[10px] text-stone-400 font-bold block mb-1 font-mono">Windows</span>
            <span className="text-xs font-bold text-sky-700 font-mono">"\\r\\n"</span>
            <p className="text-[9.5px] text-stone-500 mt-1 font-medium">Carriage-return / Line-feed</p>
          </div>
          <div className="bg-white border border-stone-150 p-4 rounded-2xl shadow-sm text-center">
            <span className="text-[10px] text-stone-400 font-bold block mb-1 font-mono">Unix / Linux / macOS</span>
            <span className="text-xs font-bold text-sky-700 font-mono">"\\n"</span>
            <p className="text-[9.5px] text-stone-500 mt-1 font-medium">Line-feed đơn giản</p>
          </div>
          <div className="bg-white border border-stone-150 p-4 rounded-2xl shadow-sm text-center">
            <span className="text-[10px] text-stone-400 font-bold block mb-1 font-mono">Mac Classic (Cũ)</span>
            <span className="text-xs font-bold text-sky-700 font-mono">"\\r"</span>
            <p className="text-[9.5px] text-stone-500 mt-1 font-medium">Carriage-return đơn lẻ</p>
          </div>
        </div>

        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60 shadow-inner space-y-2 text-xs leading-relaxed text-stone-700">
          <div>• <code>readLine()</code>: Trả về một dòng văn bản dạng String nhưng <strong>không bao gồm</strong> ký tự xuống dòng ở cuối.</div>
          <div>• <code>println()</code>: Xuất dữ liệu từng dòng, tự động chèn ký tự kết thúc dòng phù hợp tùy theo hệ điều hành hiện tại đang chạy.</div>
        </div>
      </div>

      {/* PART D: Unified Cheat Sheet (Mục VI - VIII) */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
        🧠 Cheat Sheet Tổng Kết Kiến Thức (Mục VI - VIII)
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">1. DataInput vs Stream</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">VII</span>
          </div>
          <ul className="text-xs text-stone-650 space-y-2.5 leading-relaxed font-medium">
            <li>• <code>DataInput</code> / <code>DataOutput</code> là Interface.</li>
            <li>• <code>DataInputStream</code> / <code>DataOutputStream</code> là Class cụ thể dùng để wrap cổng stream chuẩn.</li>
          </ul>
        </div>

        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">2. Close & Resources</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">VIII</span>
          </div>
          <ul className="text-xs text-stone-650 space-y-2.5 leading-relaxed font-medium">
            <li>• Việc đóng luồng stream bằng <code>close()</code> là cực kỳ quan trọng để tránh rò rỉ tài nguyên hệ thống (resource leak).</li>
            <li>• Luôn gọi hàm <code>close()</code> trong khối <code>finally</code>.</li>
          </ul>
        </div>

        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">3. read() return type</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">VIII</span>
          </div>
          <ul className="text-xs text-stone-650 space-y-2.5 leading-relaxed font-medium">
            <li>• Hàm <code>read()</code> của stream trả về giá trị số nguyên <code>int</code> để có thể chứa cả khoảng byte 0-255 và giá trị cờ kết thúc <code>-1</code>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
