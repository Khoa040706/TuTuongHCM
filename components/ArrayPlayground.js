"use client";
import React, { useState } from "react";

export default function ArrayPlayground() {
  const [activeTab, setActiveTab] = useState("traversal"); // traversal, passing, reverse
  
  // Tab 1 state
  const [loopType, setLoopType] = useState("for"); // for, foreach
  const [tStep, setTStep] = useState(0);
  const [tArray, setTArray] = useState([1.9, 2.9, 3.4, 3.5]);
  const [tCopyVar, setTCopyVar] = useState(null);

  // Tab 2 state
  const [pStep, setPStep] = useState(0);
  const [pArray, setPArray] = useState([3, 1, 2, 6, 4, 2]);

  // Tab 3 state
  const [rStep, setRStep] = useState(0);
  const [rSource, setRSource] = useState([3, 1, 2, 6]);
  const [rResult, setRResult] = useState([0, 0, 0, 0]);

  // --- Tab 1 Data Generator ---
  const getTraversalSteps = () => {
    if (loopType === "for") {
      return [
        {
          codeLine: 1,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Khởi tạo mảng số thực: <code>myList = {1.9, 2.9, 3.4, 3.5}</code>.",
          pointer: null,
          eVal: null
        },
        {
          codeLine: 2,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Khởi đầu vòng lặp: gán chỉ số <code>i = 0</code>. Kiểm tra điều kiện <code>i < 4</code> (Thỏa mãn).",
          pointer: 0,
          eVal: null
        },
        {
          codeLine: 3,
          array: [3.8, 2.9, 3.4, 3.5],
          desc: "Thực thi <code>myList[0] = myList[0] * 2</code>. Giá trị tại phần tử số 0 nhân đôi từ <code>1.9 ➔ 3.8</code>.",
          pointer: 0,
          eVal: null
        },
        {
          codeLine: 2,
          array: [3.8, 2.9, 3.4, 3.5],
          desc: "Tăng biến đếm: <code>i = 1</code>. Kiểm tra điều kiện <code>i < 4</code> (Thỏa mãn).",
          pointer: 1,
          eVal: null
        },
        {
          codeLine: 3,
          array: [3.8, 5.8, 3.4, 3.5],
          desc: "Thực thi <code>myList[1] = myList[1] * 2</code>. Giá trị tại phần tử số 1 nhân đôi từ <code>2.9 ➔ 5.8</code>.",
          pointer: 1,
          eVal: null
        },
        {
          codeLine: 2,
          array: [3.8, 5.8, 3.4, 3.5],
          desc: "Tăng biến đếm: <code>i = 2</code>. Kiểm tra điều kiện <code>i < 4</code> (Thỏa mãn).",
          pointer: 2,
          eVal: null
        },
        {
          codeLine: 3,
          array: [3.8, 5.8, 6.8, 3.5],
          desc: "Thực thi <code>myList[2] = myList[2] * 2</code>. Giá trị tại phần tử số 2 nhân đôi từ <code>3.4 ➔ 6.8</code>.",
          pointer: 2,
          eVal: null
        },
        {
          codeLine: 2,
          array: [3.8, 5.8, 6.8, 3.5],
          desc: "Tăng biến đếm: <code>i = 3</code>. Kiểm tra điều kiện <code>i < 4</code> (Thỏa mãn).",
          pointer: 3,
          eVal: null
        },
        {
          codeLine: 3,
          array: [3.8, 5.8, 6.8, 7.0],
          desc: "Thực thi <code>myList[3] = myList[3] * 2</code>. Giá trị tại phần tử số 3 nhân đôi từ <code>3.5 ➔ 7.0</code>.",
          pointer: 3,
          eVal: null
        },
        {
          codeLine: 2,
          array: [3.8, 5.8, 6.8, 7.0],
          desc: "Tăng biến đếm: <code>i = 4</code>. Kiểm tra điều kiện <code>i < 4</code> (Sai). Kết thúc vòng lặp. Mảng gốc <strong>bị thay đổi hoàn toàn</strong>.",
          pointer: null,
          eVal: null
        }
      ];
    } else {
      // Foreach loop
      return [
        {
          codeLine: 1,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Khởi tạo mảng số thực: <code>myList = {1.9, 2.9, 3.4, 3.5}</code>.",
          pointer: null,
          eVal: null
        },
        {
          codeLine: 2,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Vòng lặp lấy phần tử số 0. Nhân bản giá trị <code>1.9</code> gán vào biến tạm <code>e</code>.",
          pointer: 0,
          eVal: 1.9
        },
        {
          codeLine: 3,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Thực thi <code>e = e * 2</code>. Giá trị biến tạm <code>e</code> nhân đôi thành <code>3.8</code>. Lưu ý: <strong>Mảng gốc vẫn giữ nguyên 1.9!</strong>",
          pointer: 0,
          eVal: 3.8
        },
        {
          codeLine: 2,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Vòng lặp lấy phần tử số 1. Nhân bản giá trị <code>2.9</code> gán vào biến tạm <code>e</code>.",
          pointer: 1,
          eVal: 2.9
        },
        {
          codeLine: 3,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Thực thi <code>e = e * 2</code>. Biến tạm <code>e</code> nhân đôi thành <code>5.8</code>. Mảng gốc vẫn giữ nguyên 2.9.",
          pointer: 1,
          eVal: 5.8
        },
        {
          codeLine: 2,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Vòng lặp lấy phần tử số 2. Nhân bản giá trị <code>3.4</code> gán vào biến tạm <code>e</code>.",
          pointer: 2,
          eVal: 3.4
        },
        {
          codeLine: 3,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Thực thi <code>e = e * 2</code>. Biến tạm <code>e ➔ 6.8</code>. Mảng gốc vẫn giữ nguyên 3.4.",
          pointer: 2,
          eVal: 6.8
        },
        {
          codeLine: 2,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Vòng lặp lấy phần tử số 3. Nhân bản giá trị <code>3.5</code> gán vào biến tạm <code>e</code>.",
          pointer: 3,
          eVal: 3.5
        },
        {
          codeLine: 3,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Thực thi <code>e = e * 2</code>. Biến tạm <code>e ➔ 7.0</code>. Mảng gốc vẫn giữ nguyên 3.5.",
          pointer: 3,
          eVal: 7.0
        },
        {
          codeLine: 2,
          array: [1.9, 2.9, 3.4, 3.5],
          desc: "Hết các phần tử. Kết thúc vòng lặp. <strong>Kết luận:</strong> Foreach KHÔNG THỂ dùng để chỉnh sửa phần tử của mảng gốc.",
          pointer: null,
          eVal: null
        }
      ];
    }
  };

  const tSteps = getTraversalSteps();
  const currentTStep = tSteps[tStep] || tSteps[0];

  const forCode = [
    "double[] myList = {1.9, 2.9, 3.4, 3.5};",
    "for (int i = 0; i < myList.length; i++) {",
    "    myList[i] = myList[i] * 2;",
    "}"
  ];

  const foreachCode = [
    "double[] myList = {1.9, 2.9, 3.4, 3.5};",
    "for (double e : myList) {",
    "    e = e * 2;",
    "}"
  ];

  // --- Tab 2: Passing Arrays ---
  const pCode = [
    "public static void main(String[] args) {",
    "    int[] myList = {3, 1, 2, 6, 4, 2};",
    "    change(myList);",
    "    System.out.println(myList[0]);",
    "}",
    "public static void change(int[] array) {",
    "    array[0] = 99;",
    "}"
  ];

  const pStepsData = [
    {
      codeLine: 1,
      array: [3, 1, 2, 6, 4, 2],
      desc: "<strong>Khởi tạo mảng ở hàm main():</strong> <code>int[] myList = {3, 1, 2, 6, 4, 2};</code> được cấp phát trên Heap. Biến tham chiếu <code>myList</code> lưu địa chỉ (Ví dụ: <code>0x7ffe</code>).",
      mainPointer: "0x7ffe",
      methodPointer: null,
      methodActive: false
    },
    {
      codeLine: 2,
      array: [3, 1, 2, 6, 4, 2],
      desc: "<strong>Gọi hàm change(myList):</strong> Một Stack Frame mới được mở ra cho hàm phụ. Biến tham số <code>array</code> nhận địa chỉ tham chiếu <code>0x7ffe</code> truyền vào. Cả hai biến đều trỏ vào <strong>cùng một đối tượng mảng trên Heap</strong>!",
      mainPointer: "0x7ffe",
      methodPointer: "0x7ffe",
      methodActive: true
    },
    {
      codeLine: 6,
      array: [99, 1, 2, 6, 4, 2],
      desc: "<strong>Thực thi thay đổi:</strong> Hàm phụ thực hiện <code>array[0] = 99;</code>. Giá trị phần tử index 0 trên vùng Heap lập tức bị sửa thành <code>99</code>.",
      mainPointer: "0x7ffe",
      methodPointer: "0x7ffe",
      methodActive: true
    },
    {
      codeLine: 3,
      array: [99, 1, 2, 6, 4, 2],
      desc: "<strong>Kết thúc hàm phụ:</strong> Stack Frame hàm phụ bị xóa bỏ hoàn toàn. Bộ nhớ quay về hàm <code>main()</code>. Biến gốc <code>myList</code> vẫn trỏ đến vùng Heap đã bị sửa đổi. Lệnh in in ra kết quả: <code>99</code>.",
      mainPointer: "0x7ffe",
      methodPointer: null,
      methodActive: false
    }
  ];

  const currentPStep = pStepsData[pStep] || pStepsData[0];

  // --- Tab 3: Reverse Array ---
  const rCode = [
    "public static int[] reverse(int[] list) {",
    "    int[] result = new int[list.length];",
    "    for (int i = 0; i < list.length; i++) {",
    "        result[list.length - 1 - i] = list[i];",
    "    }",
    "    return result;",
    "}"
  ];

  const rStepsData = [
    {
      codeLine: 1,
      i: null,
      j: null,
      result: [0, 0, 0, 0],
      desc: "<strong>Khởi tạo:</strong> Cấp phát mảng mới <code>result</code> có cùng độ dài 4, khởi tạo toàn bộ bằng giá trị mặc định là <code>0</code>."
    },
    {
      codeLine: [2, 3],
      i: 0,
      j: 3,
      result: [0, 0, 0, 3],
      desc: "<strong>Bước lặp 1 (i = 0):</strong> Gán <code>result[4 - 1 - 0] = list[0]</code> (tức là <code>result[3] = 3</code>)."
    },
    {
      codeLine: [2, 3],
      i: 1,
      j: 2,
      result: [0, 0, 1, 3],
      desc: "<strong>Bước lặp 2 (i = 1):</strong> Gán <code>result[4 - 1 - 1] = list[1]</code> (tức là <code>result[2] = 1</code>)."
    },
    {
      codeLine: [2, 3],
      i: 2,
      j: 1,
      result: [0, 2, 1, 3],
      desc: "<strong>Bước lặp 3 (i = 2):</strong> Gán <code>result[4 - 1 - 2] = list[2]</code> (tức là <code>result[1] = 2</code>)."
    },
    {
      codeLine: [2, 3],
      i: 3,
      j: 0,
      result: [6, 2, 1, 3],
      desc: "<strong>Bước lặp 4 (i = 3):</strong> Gán <code>result[4 - 1 - 3] = list[3]</code> (tức là <code>result[0] = 6</code>)."
    },
    {
      codeLine: 5,
      i: null,
      j: null,
      result: [6, 2, 1, 3],
      desc: "Vòng lặp kết thúc (i = 4, điều kiện lặp sai). Hàm trả về địa chỉ mảng <code>result</code> chứa kết quả đảo ngược thành công: <code>{6, 2, 1, 3}</code>."
    }
  ];

  const currentRStep = rStepsData[rStep] || rStepsData[0];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      
      {/* Component Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5 border-b border-stone-200 pb-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            Hộp Cát Giả Lập Mảng (Array Interactive Playground)
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Mô phỏng 3 chuyên đề cốt lõi của Mảng trong Java: Duyệt, Truyền tham chiếu và Đảo ngược.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-stone-200 p-1 rounded-xl shrink-0 overflow-x-auto w-full md:w-auto">
          <button
            onClick={() => { setActiveTab("traversal"); setTStep(0); }}
            className={`flex-1 md:flex-none px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "traversal"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            🔄 Duyệt (For vs Foreach)
          </button>
          <button
            onClick={() => { setActiveTab("passing"); setPStep(0); }}
            className={`flex-1 md:flex-none px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "passing"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            🔗 Truyền (Reference)
          </button>
          <button
            onClick={() => { setActiveTab("reverse"); setRStep(0); }}
            className={`flex-1 md:flex-none px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "reverse"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            ↩️ Đảo Mảng (Reverse)
          </button>
        </div>
      </div>

      {/* --- TAB 1 CONTENT: TRAVERSAL --- */}
      {activeTab === "traversal" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Code Box */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Cú pháp lặp</span>
                <div className="flex gap-1.5 bg-stone-850 p-0.5 rounded-md">
                  <button
                    onClick={() => { setLoopType("for"); setTStep(0); }}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                      loopType === "for" ? "bg-amber-500 text-black" : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    For thường
                  </button>
                  <button
                    onClick={() => { setLoopType("foreach"); setTStep(0); }}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                      loopType === "foreach" ? "bg-amber-500 text-black" : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    Foreach
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                {(loopType === "for" ? forCode : foreachCode).map((line, idx) => {
                  const isHighlighted = idx === currentTStep.codeLine;
                  return (
                    <div
                      key={idx}
                      className={`py-1 px-2 rounded transition-all whitespace-pre ${
                        isHighlighted
                          ? "bg-amber-500/10 border-l-4 border-amber-500 text-amber-300 font-bold"
                          : "text-stone-300 opacity-55"
                      }`}
                    >
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: RAM & Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Trạng thái mảng trong RAM</div>
              
              {/* Array representation */}
              <div className="flex gap-2.5 mb-6 justify-center">
                {currentTStep.array.map((val, idx) => {
                  const isPointed = currentTStep.pointer === idx;
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 border rounded-xl flex items-center justify-center font-mono text-sm font-black transition-all ${
                          isPointed
                            ? "border-amber-500 bg-amber-500/10 text-amber-700 shadow-md scale-105 border-2"
                            : "border-stone-200 bg-stone-50 text-stone-750"
                        }`}
                      >
                        {val}
                      </div>
                      <span className="text-[10px] font-bold text-stone-400 mt-1">index {idx}</span>
                      {isPointed && (
                        <span className="text-[9px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black mt-1 animate-bounce">
                          {loopType === "for" ? "i" : "con trỏ"}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Copy variable representation for foreach */}
              {loopType === "foreach" && (
                <div className="border border-dashed border-stone-200 p-3.5 rounded-xl bg-stone-50 flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="font-bold text-stone-500 flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
                    Biến tạm sao chép (double e)
                  </span>
                  <span className="font-black text-purple-600 bg-purple-550/10 border border-purple-200 px-3 py-1 rounded-lg">
                    {currentTStep.eVal !== null ? currentTStep.eVal : "Chưa khai báo"}
                  </span>
                </div>
              )}
            </div>

            {/* Stepper Desc */}
            <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-700 min-h-[65px]">
              <span dangerouslySetInnerHTML={{ __html: currentTStep.desc }} />
            </div>

            {/* Stepper Controls */}
            <div className="flex justify-between items-center border-t border-stone-100 pt-3">
              <span className="text-[10px] font-bold text-stone-450">Bước {tStep + 1} / {tSteps.length}</span>
              <div className="flex gap-2">
                {tStep > 0 && (
                  <button
                    onClick={() => setTStep(tStep - 1)}
                    className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    ◀ Lùi lại
                  </button>
                )}
                {tStep < tSteps.length - 1 ? (
                  <button
                    onClick={() => setTStep(tStep + 1)}
                    className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Tiếp tục ▶
                  </button>
                ) : (
                  <button
                    onClick={() => setTStep(0)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    🔄 Chạy lại
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2 CONTENT: PASSING ARRAYS (REFERENCE) --- */}
      {activeTab === "passing" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Code Box */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1">
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Mã nguồn truyền tham chiếu</div>
              <div className="space-y-1">
                {pCode.map((line, idx) => {
                  const isHighlighted = idx === currentPStep.codeLine;
                  return (
                    <div
                      key={idx}
                      className={`py-1 px-2 rounded transition-all whitespace-pre ${
                        isHighlighted
                          ? "bg-amber-500/10 border-l-4 border-amber-500 text-amber-300 font-bold"
                          : "text-stone-300 opacity-55"
                      }`}
                    >
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Stack vs Heap diagram */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Cơ chế quản lý bộ nhớ Stack & Heap</div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                  
                  {/* Stack Column (5 cols) */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="text-[10px] font-bold text-stone-450 uppercase tracking-wider text-center">STACK (Các tham chiếu)</div>
                    
                    {/* Frame change() */}
                    {currentPStep.methodActive ? (
                      <div className="border border-amber-400 bg-amber-50/20 p-2.5 rounded-lg font-mono text-[11px] relative shadow-sm">
                        <span className="text-[8px] bg-amber-500 text-black px-1 rounded font-extrabold uppercase absolute -top-2 right-2 shadow-sm">Hàm change</span>
                        <div className="flex justify-between items-center mt-1">
                          <span className="font-bold text-stone-600">int[] array</span>
                          <span className="bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-black text-amber-600">
                            {currentPStep.methodPointer}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="border border-dashed border-stone-200 p-3 rounded-lg text-center text-[10px] text-stone-450 italic">
                        Stack Frame change() trống
                      </div>
                    )}

                    {/* Frame main() */}
                    <div className="border border-sky-400 bg-sky-50/20 p-2.5 rounded-lg font-mono text-[11px] relative shadow-sm">
                      <span className="text-[8px] bg-sky-500 text-white px-1 rounded font-extrabold uppercase absolute -top-2 right-2 shadow-sm">Hàm main</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-bold text-stone-600">int[] myList</span>
                        <span className="bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 font-black text-sky-600">
                          {currentPStep.mainPointer}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Heap Column (7 cols) */}
                  <div className="md:col-span-7 border-l md:border-l border-stone-150 pl-0 md:pl-4 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-stone-450 uppercase tracking-wider text-center mb-3">HEAP (Đối tượng mảng thực tế)</div>
                    <div className="bg-[#151413] border border-stone-800 rounded-xl p-3 shadow-inner relative flex flex-col items-center">
                      <span className="text-[8px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold absolute -top-2 left-3">
                        Địa chỉ: 0x7ffe (Mảng)
                      </span>
                      <div className="flex gap-1.5 mt-2 justify-center">
                        {currentPStep.array.map((val, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded border flex items-center justify-center font-mono text-[11px] font-black ${
                              idx === 0 && currentPStep.codeLine === 6
                                ? "bg-amber-500 border-amber-600 text-black animate-pulse"
                                : "bg-stone-900 border-stone-850 text-emerald-400"
                            }`}>
                              {val}
                            </div>
                            <span className="text-[8px] text-stone-450 font-bold mt-1">[{idx}]</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Stepper Desc */}
            <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-700 min-h-[65px]">
              <span dangerouslySetInnerHTML={{ __html: currentPStep.desc }} />
            </div>

            {/* Stepper Controls */}
            <div className="flex justify-between items-center border-t border-stone-100 pt-3">
              <span className="text-[10px] font-bold text-stone-450">Bước {pStep + 1} / {pStepsData.length}</span>
              <div className="flex gap-2">
                {pStep > 0 && (
                  <button
                    onClick={() => setPStep(pStep - 1)}
                    className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    ◀ Lùi lại
                  </button>
                )}
                {pStep < pStepsData.length - 1 ? (
                  <button
                    onClick={() => setPStep(pStep + 1)}
                    className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Tiếp tục ▶
                  </button>
                ) : (
                  <button
                    onClick={() => setPStep(0)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    🔄 Chạy lại
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 3 CONTENT: REVERSE ARRAY --- */}
      {activeTab === "reverse" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Code Box */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1">
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Mã nguồn thuật toán đảo mảng</div>
              <div className="space-y-1">
                {rCode.map((line, idx) => {
                  const isHighlighted = Array.isArray(currentRStep.codeLine) 
                    ? currentRStep.codeLine.includes(idx) 
                    : idx === currentRStep.codeLine;
                  return (
                    <div
                      key={idx}
                      className={`py-1 px-2 rounded transition-all whitespace-pre ${
                        isHighlighted
                          ? "bg-amber-500/10 border-l-4 border-amber-500 text-amber-300 font-bold"
                          : "text-stone-300 opacity-55"
                      }`}
                    >
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Stepper Visuals */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Trạng thái các mảng khi đảo ngược</div>
              <div className="space-y-4">
                
                {/* Source Array (list) */}
                <div className="flex items-center gap-3 bg-stone-50 border border-stone-150 p-2.5 rounded-xl">
                  <div className="w-16 text-[10px] font-black uppercase text-stone-500 tracking-wider">Mảng nguồn (list)</div>
                  <div className="flex gap-2">
                    {rSource.map((val, idx) => {
                      const isPointerI = currentRStep.i === idx;
                      return (
                        <div key={idx} className="flex flex-col items-center">
                          <div
                            className={`w-9 h-9 border rounded-lg flex items-center justify-center font-mono text-xs font-black transition-all ${
                              isPointerI
                                ? "border-amber-500 bg-amber-500/10 text-amber-700 shadow-sm border-2 scale-102"
                                : "border-stone-200 bg-white text-stone-700"
                            }`}
                          >
                            {val}
                          </div>
                          {isPointerI && (
                            <span className="text-[9px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black mt-1">
                              i = {idx}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Destination Array (result) */}
                <div className="flex items-center gap-3 bg-stone-50 border border-stone-150 p-2.5 rounded-xl">
                  <div className="w-16 text-[10px] font-black uppercase text-stone-500 tracking-wider">Mảng đích (result)</div>
                  <div className="flex gap-2">
                    {currentRStep.result.map((val, idx) => {
                      const isPointerJ = currentRStep.j === idx;
                      return (
                        <div key={idx} className="flex flex-col items-center">
                          <div
                            className={`w-9 h-9 border rounded-lg flex items-center justify-center font-mono text-xs font-black transition-all ${
                              isPointerJ
                                ? "border-sky-500 bg-sky-550/10 text-sky-750 shadow-sm border-2 scale-102 animate-pulse"
                                : val !== 0
                                ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                                : "border-stone-200 bg-white text-stone-400"
                            }`}
                          >
                            {val}
                          </div>
                          {isPointerJ && (
                            <span className="text-[9px] bg-sky-500 text-white px-1.5 py-0.5 rounded font-black mt-1">
                              j = {idx}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Stepper Desc */}
            <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-700 min-h-[65px]">
              <span dangerouslySetInnerHTML={{ __html: currentRStep.desc }} />
            </div>

            {/* Stepper Controls */}
            <div className="flex justify-between items-center border-t border-stone-100 pt-3">
              <span className="text-[10px] font-bold text-stone-450">Bước {rStep + 1} / {rStepsData.length}</span>
              <div className="flex gap-2">
                {rStep > 0 && (
                  <button
                    onClick={() => setRStep(rStep - 1)}
                    className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    ◀ Lùi lại
                  </button>
                )}
                {rStep < rStepsData.length - 1 ? (
                  <button
                    onClick={() => setRStep(rStep + 1)}
                    className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Tiếp tục ▶
                  </button>
                ) : (
                  <button
                    onClick={() => setRStep(0)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    🔄 Chạy lại
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
