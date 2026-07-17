"use client";
import React, { useState } from "react";
import { Play, RefreshCw, AlertCircle, CheckCircle2, ChevronRight, Layers, Shuffle } from "lucide-react";

export default function InterfaceAdtOperationsTable() {
  const [selectedAdt, setSelectedAdt] = useState("STACK"); // "STACK" | "QUEUE"
  const [adtState, setAdtState] = useState([12, 45, 78]); // bottom to top (for stack) or front to rear (for queue)
  const [inputValue, setInputValue] = useState("");
  const [log, setLog] = useState("Nhập giá trị đầu vào và thực thi các phép toán ADT.");
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [selectedOp, setSelectedOp] = useState(null);

  const stackOps = [
    { name: "push(v)", category: "Constructor / Mutator", pre: "Ngăn xếp chưa đầy (nếu dùng mảng giới hạn)", post: "Phần tử v được thêm vào đỉnh ngăn xếp. Kích thước tăng 1." },
    { name: "pop()", category: "Mutator", pre: "Ngăn xếp không được rỗng (isEmpty() == false)", post: "Trả về và xóa phần tử ở đỉnh ngăn xếp. Kích thước giảm 1." },
    { name: "peek()", category: "Accessor", pre: "Ngăn xếp không được rỗng (isEmpty() == false)", post: "Trả về phần tử ở đỉnh ngăn xếp mà không sửa đổi cấu trúc." },
    { name: "isEmpty()", category: "Accessor", pre: "Không có", post: "Trả về true nếu ngăn xếp rỗng, ngược lại false." }
  ];

  const queueOps = [
    { name: "enqueue(v)", category: "Constructor / Mutator", pre: "Hàng đợi chưa đầy (nếu dùng mảng giới hạn)", post: "Phần tử v được thêm vào cuối hàng đợi. Kích thước tăng 1." },
    { name: "dequeue()", category: "Mutator", pre: "Hàng đợi không được rỗng (isEmpty() == false)", post: "Trả về và xóa phần tử ở đầu hàng đợi. Kích thước giảm 1." },
    { name: "front()", category: "Accessor", pre: "Hàng đợi không được rỗng (isEmpty() == false)", post: "Trả về phần tử ở đầu hàng đợi mà không sửa đổi cấu trúc." },
    { name: "isEmpty()", category: "Accessor", pre: "Không có", post: "Trả về true nếu hàng đợi rỗng, ngược lại false." }
  ];

  const opsList = selectedAdt === "STACK" ? stackOps : queueOps;

  const handlePush = () => {
    if (!inputValue.trim()) {
      setStatus("error");
      setLog("LỖI: Vui lòng nhập giá trị số để thực hiện phép toán.");
      return;
    }
    
    // Simulate push / enqueue pre-condition check
    if (adtState.length >= 5) {
      setStatus("error");
      setLog(`VI PHẠM PRE-CONDITION! ${selectedAdt === "STACK" ? "Stack" : "Queue"} đầy (tối đa 5 phần tử trong mô phỏng). Lỗi do người gọi hàm (Caller).`);
      return;
    }

    const val = parseInt(inputValue);
    if (isNaN(val)) {
      setStatus("error");
      setLog("LỖI: Giá trị đầu vào bắt buộc phải là một số nguyên hợp lệ.");
      return;
    }

    if (selectedAdt === "STACK") {
      setAdtState([...adtState, val]);
      setLog(`[Thành công] push(${val}) -> Thêm thành công ${val} vào đỉnh ngăn xếp. Post-condition thỏa mãn.`);
    } else {
      setAdtState([...adtState, val]);
      setLog(`[Thành công] enqueue(${val}) -> Thêm thành công ${val} vào cuối hàng đợi. Post-condition thỏa mãn.`);
    }
    setStatus("success");
    setInputValue("");
  };

  const handlePop = () => {
    // Check pre-condition: empty structure
    if (adtState.length === 0) {
      setStatus("error");
      setLog(`VI PHẠM PRE-CONDITION! ${selectedAdt === "STACK" ? "pop()" : "dequeue()"} thất bại vì cấu trúc đang rỗng. Phá vỡ hợp đồng đầu vào!`);
      return;
    }

    if (selectedAdt === "STACK") {
      const popped = adtState[adtState.length - 1];
      const newState = adtState.slice(0, -1);
      setAdtState(newState);
      setLog(`[Thành công] pop() -> Trả về và xóa phần tử đỉnh [${popped}]. Kích thước mới: ${newState.length}.`);
    } else {
      const popped = adtState[0];
      const newState = adtState.slice(1);
      setAdtState(newState);
      setLog(`[Thành công] dequeue() -> Trả về và xóa phần tử đầu hàng [${popped}]. Kích thước mới: ${newState.length}.`);
    }
    setStatus("success");
  };

  const handlePeek = () => {
    if (adtState.length === 0) {
      setStatus("error");
      setLog(`VI PHẠM PRE-CONDITION! ${selectedAdt === "STACK" ? "peek()" : "front()"} thất bại vì cấu trúc đang rỗng.`);
      return;
    }

    const val = selectedAdt === "STACK" ? adtState[adtState.length - 1] : adtState[0];
    setLog(`[Thành công] ${selectedAdt === "STACK" ? "peek()" : "front()"} -> Xem phần tử: [${val}]. Cấu trúc dữ liệu giữ nguyên.`);
    setStatus("success");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
            Hộp Cát Đặc Tả & Phép Toán ADT
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Chọn mô hình dữ liệu để xem bảng đặc tả Pre/Post-conditions và thực thi kiểm tra các ràng buộc
          </p>
        </div>

        {/* ADT Tabs */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => {
              setSelectedAdt("STACK");
              setAdtState([12, 45, 78]);
              setSelectedOp(null);
              setStatus("idle");
              setLog("Nhập giá trị đầu vào và thực thi các phép toán ADT.");
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedAdt === "STACK"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Ngăn xếp (Stack ADT)
          </button>
          <button
            onClick={() => {
              setSelectedAdt("QUEUE");
              setAdtState([12, 45, 78]);
              setSelectedOp(null);
              setStatus("idle");
              setLog("Nhập giá trị đầu vào và thực thi các phép toán ADT.");
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedAdt === "QUEUE"
                ? "bg-emerald-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Hàng đợi (Queue ADT)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left column: Operations Table */}
        <div className="lg:col-span-7 bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3">
              Bảng đặc tả phép toán (Click từng dòng để học kỹ)
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 text-left">
                    <th className="py-2 pr-2">Phép toán</th>
                    <th className="py-2 pr-2">Phân loại</th>
                    <th className="py-2 pr-2">Pre-conditions</th>
                  </tr>
                </thead>
                <tbody>
                  {opsList.map((op, idx) => (
                    <tr
                      key={idx}
                      onClick={() => setSelectedOp(op)}
                      className={`border-b border-slate-900/60 cursor-pointer transition-all hover:bg-slate-900/40 ${
                        selectedOp?.name === op.name ? "bg-slate-900 text-cyan-300" : ""
                      }`}
                    >
                      <td className="py-2.5 font-mono font-bold pr-2">{op.name}</td>
                      <td className="py-2.5 text-[11px] pr-2 text-slate-400">{op.category}</td>
                      <td className={`py-2.5 text-[11px] font-mono pr-2 ${
                        op.pre.includes("không được rỗng") ? "text-amber-450" : "text-slate-450"
                      }`}>{op.pre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-16 flex items-center p-3 rounded-lg bg-slate-900/80 border border-slate-850 text-xs text-slate-350 mt-4 leading-relaxed">
            {selectedOp ? (
              <p>
                <strong className="text-cyan-400 font-mono">{selectedOp.name}:</strong>{" "}
                <span className="text-slate-400">Post-condition:</span> {selectedOp.post}
              </p>
            ) : (
              <span className="text-slate-500 italic">Click vào các dòng trong bảng ở trên để xem chi tiết Post-condition tương ứng.</span>
            )}
          </div>
        </div>

        {/* Right column: Interactive Visual sandbox */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-850 rounded-xl p-5 flex flex-col justify-between min-h-[300px]">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-4">
              Mô hình hộp cát trực quan ({selectedAdt})
            </span>

            {selectedAdt === "STACK" ? (
              /* VERTICAL STACK CONTAINER */
              <div className="flex flex-col-reverse items-center justify-start gap-1 w-full max-w-[200px] h-44 bg-slate-900/40 border border-slate-800 rounded-lg p-2.5 mx-auto mb-4 relative">
                {adtState.length === 0 ? (
                  <span className="text-[10px] text-slate-600 italic absolute top-1/2 -translate-y-1/2">Stack is Empty</span>
                ) : (
                  adtState.map((val, idx) => (
                    <div
                      key={idx}
                      className={`w-full py-2 text-center rounded border font-mono text-xs font-bold transition-all ${
                        idx === adtState.length - 1
                          ? "bg-indigo-950 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/10"
                          : "bg-slate-850 border-slate-800 text-slate-400"
                      }`}
                    >
                      {val} {idx === adtState.length - 1 && <span className="text-[9px] text-indigo-400 font-bold ml-1 font-sans">(TOP)</span>}
                    </div>
                  ))
                )}
              </div>
            ) : (
              /* HORIZONTAL QUEUE CONTAINER */
              <div className="flex items-center justify-start gap-1 w-full h-16 bg-slate-900/40 border border-slate-800 rounded-lg p-2 mb-4 overflow-x-auto relative mt-12">
                {adtState.length === 0 ? (
                  <span className="text-[10px] text-slate-600 italic mx-auto">Queue is Empty</span>
                ) : (
                  adtState.map((val, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 min-w-[50px] py-3 text-center rounded border font-mono text-xs font-bold transition-all relative ${
                        idx === 0
                          ? "bg-emerald-950 border-emerald-500 text-emerald-300"
                          : idx === adtState.length - 1
                          ? "bg-sky-950 border-sky-500 text-sky-300"
                          : "bg-slate-850 border-slate-800 text-slate-400"
                      }`}
                    >
                      {val}
                      {idx === 0 && <span className="text-[8px] text-emerald-400 font-bold absolute -top-5 left-1/2 -translate-x-1/2">FRONT</span>}
                      {idx === adtState.length - 1 && idx !== 0 && (
                        <span className="text-[8px] text-sky-400 font-bold absolute -top-5 left-1/2 -translate-x-1/2">REAR</span>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* User interaction controls */}
            <div className="flex gap-2">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập số..."
                className="w-24 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 outline-none focus:border-slate-750"
              />
              <button
                onClick={handlePush}
                className={`px-3 py-2 text-white font-bold text-xs rounded-lg shadow transition-all ${
                  selectedAdt === "STACK" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {selectedAdt === "STACK" ? "Push" : "Enqueue"}
              </button>
              <button
                onClick={handlePop}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 font-semibold text-xs rounded-lg transition-all"
              >
                {selectedAdt === "STACK" ? "Pop" : "Dequeue"}
              </button>
              <button
                onClick={handlePeek}
                className="px-2 py-2 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-400 font-semibold text-xs rounded-lg transition-all"
              >
                {selectedAdt === "STACK" ? "Peek" : "Front"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator logs console */}
      <div className={`p-4 rounded-xl border flex gap-3 items-start transition-colors ${
        status === "idle"
          ? "bg-slate-950 border-slate-850 text-slate-300"
          : status === "success"
          ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300"
          : "bg-rose-950/20 border-rose-500/20 text-rose-300"
      }`}>
        {status === "error" ? (
          <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
        ) : (
          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${status === "success" ? "text-emerald-400" : "text-slate-500"}`} />
        )}
        <p className="text-xs leading-relaxed font-mono">{log}</p>
      </div>
    </div>
  );
}
