"use client";
import React, { useState } from "react";
import { HelpCircle, Database, ToggleLeft, Layers, Info } from "lucide-react";

export default function InterfaceDataAbstractionAdt() {
  const [activeExample, setActiveExample] = useState("int"); // "int" vs "stack"
  const [selectedAdtOp, setSelectedAdtOp] = useState(null);
  const [selectedDsImpl, setSelectedDsImpl] = useState("array"); // "array" vs "linkedlist" (for stack example)

  const intOps = [
    { name: "+ (Cộng)", spec: "Cộng hai số nguyên. Trả về tổng số nguyên. Tự động tràn số nếu vượt quá giới hạn." },
    { name: "- (Trừ)", spec: "Trừ số nguyên thứ hai khỏi số nguyên thứ nhất. Trả về hiệu số nguyên." },
    { name: "* (Nhân)", spec: "Nhân hai số nguyên. Trả về tích số nguyên." },
    { name: "/ (Chia)", spec: "Chia số nguyên thứ nhất cho số nguyên thứ hai. Trả về phần nguyên của thương (cắt bỏ phần thập phân)." }
  ];

  const stackOps = [
    { name: "push(v)", spec: "Thêm giá trị v vào đỉnh ngăn xếp. Kích thước ngăn xếp tăng thêm 1." },
    { name: "pop()", spec: "Lấy và trả về phần tử nằm ở đỉnh ngăn xếp. Kích thước ngăn xếp giảm đi 1. Lỗi nếu ngăn xếp rỗng." },
    { name: "peek()", spec: "Xem và trả về phần tử nằm ở đỉnh ngăn xếp mà không xóa nó khỏi ngăn xếp." },
    { name: "isEmpty()", spec: "Trả về true nếu ngăn xếp không chứa phần tử nào, ngược lại trả về false." }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
            Trực Quan Hóa: ADT vs Data Structure
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Chọn các mô hình thực tế để thấy rõ ranh giới giữa Đặc tả trừu tượng (ADT) và Lưu trữ vật lý (Data Structure)
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => {
              setActiveExample("int");
              setSelectedAdtOp(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeExample === "int"
                ? "bg-emerald-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Ví dụ 1: Kiểu int trong Java
          </button>
          <button
            onClick={() => {
              setActiveExample("stack");
              setSelectedAdtOp(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeExample === "stack"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Ví dụ 2: ADT Stack (Ngăn xếp)
          </button>
        </div>
      </div>

      {activeExample === "int" ? (
        /* INT EXAMPLE VIEW */
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ADT int View */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">ADT View (Kiểu trừu tượng)</span>
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Ở góc nhìn ADT, kiểu <code className="text-emerald-300">int</code> được định nghĩa bởi tập giá trị từ \( -2^{31} \) đến \( 2^{31}-1 \) và các phép toán cơ bản. Bạn chỉ cần dùng, không cần biết chip xử lý ra sao.
                </p>
                
                <span className="text-[10px] text-slate-500 font-bold block mb-2">DANH SÁCH PHÉP TOÁN (Click để xem chi tiết)</span>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {intOps.map((op, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAdtOp(op)}
                      className={`p-2.5 rounded-lg border text-left text-xs font-mono font-semibold transition-all ${
                        selectedAdtOp?.name === op.name
                          ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                          : "bg-slate-900 border-slate-850 text-slate-300 hover:bg-slate-850"
                      }`}
                    >
                      {op.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-16 flex items-center p-3 rounded-lg bg-slate-900/60 border border-slate-850 text-xs text-slate-300">
                {selectedAdtOp ? (
                  <p className="leading-relaxed"><strong className="text-emerald-400">{selectedAdtOp.name}:</strong> {selectedAdtOp.spec}</p>
                ) : (
                  <span className="text-slate-500 italic">Click vào một phép toán ở trên để xem đặc tả ADT.</span>
                )}
              </div>
            </div>

            {/* Data Structure int View */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">Data Structure View (Lưu trữ vật lý)</span>
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Ở dưới phần cứng, biến <code className="text-indigo-300">int</code> được lưu bằng 32 ô nhớ nhị phân (bits) sử dụng phương pháp **Số bù 2 (Two's Complement)**.
                </p>

                <div className="space-y-4">
                  {/* Bit representation of 5 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Biểu diễn số dương 5 trong RAM (32-bit):</span>
                      <span className="text-indigo-400 font-bold">0x00000005</span>
                    </div>
                    <div className="flex gap-0.5 justify-between">
                      {/* Show 32 bits simplified as blocks */}
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="flex-1 text-center py-1 bg-slate-900 text-[10px] text-slate-600 rounded border border-slate-850 font-mono">0</div>
                      ))}
                      <div className="flex-1 text-center py-1 bg-indigo-950 text-[10px] text-indigo-400 rounded border border-indigo-500/20 font-bold font-mono">1</div>
                      <div className="flex-1 text-center py-1 bg-indigo-950 text-[10px] text-indigo-400 rounded border border-indigo-500/20 font-bold font-mono">0</div>
                      <div className="flex-1 text-center py-1 bg-indigo-950 text-[10px] text-indigo-400 rounded border border-indigo-500/20 font-bold font-mono">1</div>
                    </div>
                  </div>

                  {/* Bit representation of -5 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Biểu diễn số âm -5 (Số bù 2):</span>
                      <span className="text-indigo-400 font-bold">0xFFFFFFFB</span>
                    </div>
                    <div className="flex gap-0.5 justify-between">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="flex-1 text-center py-1 bg-rose-950/20 text-[10px] text-rose-400/60 rounded border border-rose-950/30 font-mono">1</div>
                      ))}
                      <div className="flex-1 text-center py-1 bg-rose-950 text-[10px] text-rose-400 rounded border border-rose-500/20 font-bold font-mono">0</div>
                      <div className="flex-1 text-center py-1 bg-rose-950 text-[10px] text-rose-400 rounded border border-rose-500/20 font-bold font-mono">1</div>
                      <div className="flex-1 text-center py-1 bg-rose-950 text-[10px] text-rose-400 rounded border border-rose-500/20 font-bold font-mono">1</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-lg text-[10px] text-slate-400 leading-relaxed">
                * **Đúc kết:** Người dùng chỉ cần viết phép toán cộng <code className="text-slate-300">5 + 2</code> (ADT), máy tính sẽ tự chuyển thành phép dịch chuyển bit trên thanh ghi nhị phân (Data Structure).
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* STACK EXAMPLE VIEW */
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ADT Stack View */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">ADT View (Kiểu ngăn xếp)</span>
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Ngăn xếp ADT mô tả cấu trúc lưu trữ dữ liệu dạng &quot;vào sau ra trước&quot; (LIFO). Đặc tả chỉ quy định hành vi của các phương thức.
                </p>

                <span className="text-[10px] text-slate-500 font-bold block mb-2">CÁC PHÉP TOÁN CỦA STACK (Click xem đặc tả)</span>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {stackOps.map((op, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAdtOp(op)}
                      className={`p-2.5 rounded-lg border text-left text-xs font-mono font-semibold transition-all ${
                        selectedAdtOp?.name === op.name
                          ? "bg-indigo-950/40 border-indigo-500 text-indigo-300"
                          : "bg-slate-900 border-slate-850 text-slate-300 hover:bg-slate-850"
                      }`}
                    >
                      {op.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-16 flex items-center p-3 rounded-lg bg-slate-900/60 border border-slate-850 text-xs text-slate-300">
                {selectedAdtOp ? (
                  <p className="leading-relaxed"><strong className="text-indigo-400">{selectedAdtOp.name}:</strong> {selectedAdtOp.spec}</p>
                ) : (
                  <span className="text-slate-500 italic">Click vào phương thức để xem đặc tả ADT của Stack.</span>
                )}
              </div>
            </div>

            {/* Data Structure Stack View */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">Data Structure Implementation</span>
                  </div>

                  <div className="flex bg-slate-900 p-0.5 rounded border border-slate-800 text-[10px]">
                    <button
                      onClick={() => setSelectedDsImpl("array")}
                      className={`px-2 py-0.5 rounded font-medium ${
                        selectedDsImpl === "array" ? "bg-emerald-600 text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      Dùng Array
                    </button>
                    <button
                      onClick={() => setSelectedDsImpl("linkedlist")}
                      className={`px-2 py-0.5 rounded font-medium ${
                        selectedDsImpl === "linkedlist" ? "bg-emerald-600 text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      Dùng LinkedList
                    </button>
                  </div>
                </div>

                {selectedDsImpl === "array" ? (
                  /* Array implementation */
                  <div>
                    <p className="text-xs text-slate-400 mb-3">
                      Lưu trữ các phần tử liên tiếp nhau trong một mảng tĩnh kích thước cố định. Quản lý đỉnh bằng chỉ số <code className="text-emerald-300">top</code>.
                    </p>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 font-mono text-xs text-slate-300 space-y-1 mb-3">
                      <div>int[] items = new int[5];</div>
                      <div>int top = 2; <span className="text-slate-500">// Chỉ số đỉnh ngăn xếp</span></div>
                    </div>
                    {/* Visual array stack */}
                    <div className="flex gap-1 justify-center max-w-xs mx-auto">
                      {[12, 45, 78, null, null].map((val, idx) => (
                        <div key={idx} className={`flex-1 aspect-square rounded border flex flex-col items-center justify-center font-mono ${
                          val !== null 
                            ? idx === 2 
                              ? "bg-indigo-950 border-indigo-500 text-indigo-300 font-bold" 
                              : "bg-slate-850 border-slate-800 text-slate-400" 
                            : "bg-slate-900/40 border-slate-900/60 text-slate-700 border-dashed"
                        }`}>
                          <span className="text-xs">{val !== null ? val : ""}</span>
                          <span className="text-[8px] text-slate-600 mt-1">idx={idx}</span>
                          {idx === 2 && <span className="text-[8px] text-indigo-400 font-bold absolute -translate-y-8">TOP</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Linked List implementation */
                  <div>
                    <p className="text-xs text-slate-400 mb-3">
                      Lưu trữ bằng cách móc nối các đối tượng Node nằm rải rác trên vùng nhớ Heap. Mỗi Node chứa giá trị và địa chỉ của Node tiếp theo.
                    </p>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 font-mono text-xs text-slate-300 space-y-1 mb-3">
                      <div>Node top = node3; <span className="text-slate-500">// Trỏ trực tiếp vào Node đỉnh</span></div>
                      <div className="text-[10px] text-slate-400">class Node &#123; int val; Node next; &#125;</div>
                    </div>
                    {/* Visual linked list chain */}
                    <div className="flex items-center justify-center gap-3 w-full h-12">
                      <div className="px-2 py-1 bg-indigo-950 border border-indigo-500 rounded text-xs font-mono text-indigo-300 font-bold flex flex-col items-center">
                        <span>78 (top)</span>
                        <span className="text-[8px] text-indigo-400/80">next &rarr;</span>
                      </div>
                      <div className="px-2 py-1 bg-slate-850 border border-slate-800 rounded text-xs font-mono text-slate-400 flex flex-col items-center">
                        <span>45</span>
                        <span className="text-[8px] text-slate-600">next &rarr;</span>
                      </div>
                      <div className="px-2 py-1 bg-slate-850 border border-slate-800 rounded text-xs font-mono text-slate-400 flex flex-col items-center">
                        <span>12</span>
                        <span className="text-[8px] text-slate-600">next &rarr; null</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-lg text-[10px] text-slate-400 leading-relaxed">
                * **Đúc kết:** Đặc tả ADT Stack là duy nhất, nhưng bạn có thể tự do lựa chọn Data Structure cài đặt (Mảng hoặc LinkedList) phù hợp với bài toán cụ thể.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accordion / Callout Warning */}
      <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 mt-6 flex gap-3 items-start">
        <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
            Tóm tắt so sánh ADT vs Data Structure
          </span>
          <table className="w-full text-[11px] text-slate-300 mt-2 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-left">
                <th className="py-1.5 font-semibold">Đặc trưng</th>
                <th className="py-1.5 font-semibold">Abstract Data Type (ADT)</th>
                <th className="py-1.5 font-semibold">Data Structure (Cấu trúc dữ liệu)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-850">
                <td className="py-1.5 font-semibold text-slate-400">Khái niệm</td>
                <td className="py-1.5 text-emerald-400/90 font-medium">Bản thiết kế (Làm gì - WHAT)</td>
                <td className="py-1.5 text-indigo-400/90 font-medium">Cài đặt vật lý (Làm thế nào - HOW)</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-slate-400">Ví dụ</td>
                <td className="py-1.5">Kiểu int (+, -, *, /); List ADT</td>
                <td className="py-1.5">Số bù 2; Array; Singly Linked List</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
