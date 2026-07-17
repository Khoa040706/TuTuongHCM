"use client";
import React, { useState } from "react";
import { Info, HelpCircle, ShieldAlert, Cpu, Award, Play, RotateCcw } from "lucide-react";

export default function ExceptionsIndicationVisualizer() {
  // Part A: Predefined Exceptions State
  const [selectedEx, setSelectedEx] = useState("nullpointer");

  // Part B: Step Runner State
  const [runnerStep, setRunnerStep] = useState(0);
  const [runnerLogs, setRunnerLogs] = useState([]);
  const [runnerStatus, setRunnerStatus] = useState("idle");

  const predefinedEx = {
    arithmetic: {
      name: "ArithmeticException",
      desc: "Lỗi phát sinh do phép toán số học bất hợp lệ, điển hình nhất là thực hiện phép chia một số nguyên cho 0.",
      example: "int val = 50 / 0; // Thổi bay chương trình với ArithmeticException"
    },
    nullpointer: {
      name: "NullPointerException",
      desc: "Xảy ra khi bạn cố gắng truy cập hoặc thực thi các thuộc tính, phương thức trên một đối tượng tham chiếu trỏ tới giá trị null.",
      example: "String text = null;\nint length = text.length(); // Gây NullPointerException"
    },
    indexout: {
      name: "IndexOutOfBoundsException",
      desc: "Xảy ra khi cố gắng truy cập vào một chỉ số index không tồn tại (nằm ngoài biên) của một Mảng (Array), Vector, ArrayList hoặc Chuỗi.",
      example: "int[] arr = new int[5];\nint val = arr[10]; // Chỉ số 10 nằm ngoài kích thước 5"
    },
    illegalarg: {
      name: "IllegalArgumentException",
      desc: "Được ném ra khi truyền vào một phương thức một đối số (argument) không hợp lệ hoặc không phù hợp với logic xử lý của phương thức đó.",
      example: "public void setAge(int age) {\n    if (age < 0) throw new IllegalArgumentException(\"Tuổi không hợp lệ\");\n}"
    }
  };

  const handleNextStep = () => {
    if (runnerStep >= 4) return;
    const nextStep = runnerStep + 1;
    setRunnerStep(nextStep);

    if (nextStep === 1) {
      setRunnerStatus("running");
      setRunnerLogs(["JVM: Gọi hàm factorial(-3)...", "JVM: Khởi chạy trong Stack Frame..."]);
    } else if (nextStep === 2) {
      setRunnerLogs((prev) => [
        ...prev,
        "JVM: Kiểm tra điều kiện (n < 0) ➔ (-3 < 0) là TRUE.",
        "JVM: Đi vào khối lệnh xử lý lỗi."
      ]);
    } else if (nextStep === 3) {
      setRunnerLogs((prev) => [
        ...prev,
        "JVM: Khởi tạo đối tượng ngoại lệ: exObj = new IllegalArgumentException('-3 is invalid!')",
        "JVM: Đối tượng ngoại lệ lưu thông điệp lỗi và calling stack."
      ]);
    } else if (nextStep === 4) {
      setRunnerStatus("crashed");
      setRunnerLogs((prev) => [
        ...prev,
        "JVM: Thực thi: throw exObj; ➔ Ném đối tượng ngoại lệ ra khỏi phương thức!",
        "JVM: Thao tác tính toán factorial bị hủy bỏ giữa chừng.",
        "❌ THROWN: IllegalArgumentException: -3 is invalid!"
      ]);
    }
  };

  const handleReset = () => {
    setRunnerStep(0);
    setRunnerLogs([]);
    setRunnerStatus("idle");
  };

  return (
    <div className="space-y-6">
      {/* PART A: Predefined Exceptions */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <ShieldAlert className="w-5 h-5 text-indigo-600" />
          <span>Mục II - Phần 1: Các Lớp Exception Có Sẵn & Phương Thức</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Java cung cấp sẵn các lớp Exception cơ bản để biểu diễn các lỗi runtime thường gặp. Hãy chọn một lớp bên dưới để xem ví dụ.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-4 select-none">
          {Object.keys(predefinedEx).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedEx(key)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer border ${
                selectedEx === key
                  ? "bg-stone-900 border-stone-900 text-white shadow-sm"
                  : "bg-white border-stone-200 text-stone-500 hover:text-stone-800"
              }`}
            >
              {predefinedEx[key].name}
            </button>
          ))}
        </div>

        {/* Selected Ex Info */}
        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/80 mb-6">
          <p className="text-xs text-stone-650 leading-relaxed mb-3">
            {predefinedEx[selectedEx].desc}
          </p>
          <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] leading-relaxed text-indigo-300 overflow-x-auto shadow-inner">
            {predefinedEx[selectedEx].example}
          </pre>
        </div>

        {/* Methods and constructors table */}
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
          Constructor và phương thức chung của lớp Exception
        </span>

        <div className="overflow-x-auto border border-stone-200/80 rounded-2xl shadow-sm bg-stone-50/20">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 font-mono text-[10px] text-stone-450 uppercase font-bold">
                <th className="p-3.5 pl-5">Loại</th>
                <th className="p-3.5">Nội dung giải nghĩa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-150 bg-white">
              <tr>
                <td className="p-3.5 pl-5 font-bold font-mono text-stone-800">ExceptionClassName(String Msg)</td>
                <td className="p-3.5 text-stone-600">Constructor ➔ Tạo đối tượng exception với thông báo lỗi 'Msg'.</td>
              </tr>
              <tr>
                <td className="p-3.5 pl-5 font-bold font-mono text-indigo-700">getMessage()</td>
                <td className="p-3.5 text-stone-600">Phương thức (trả về String) ➔ Lấy thông báo lỗi đã được lưu trong đối tượng.</td>
              </tr>
              <tr>
                <td className="p-3.5 pl-5 font-bold font-mono text-indigo-700">printStackTrace()</td>
                <td className="p-3.5 text-stone-600">Phương thức (trả về void) ➔ In ra calling stack (chuỗi các lời gọi hàm dẫn tới lỗi).</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Memo box */}
        <div className="bg-indigo-50/60 border border-indigo-200/80 rounded-2xl p-4 flex gap-3 items-start mt-4 shadow-sm">
          <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-indigo-900 font-mono uppercase tracking-wider block">
              📌 Ghi nhớ từ đề cương
            </span>
            <p className="text-xs text-indigo-700 mt-1 leading-relaxed">
              Các lớp Exception khác nhau chủ yếu khác nhau về <strong>mục đích phân loại lỗi</strong>, không khác biệt nhiều về phương thức. Phương thức <code>getMessage()</code> và <code>printStackTrace()</code> là 2 phương thức <strong>rất hay xuất hiện trong đề thi/bài tập</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* PART B: Step Executor throw in factorial() */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-teal-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-teal-600" />
          <span>Mục II - Phần 2 & 3: Ví dụ Báo Hiệu Ngoại Lệ (Exception Indication)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Chạy từng bước để xem cách JVM khởi tạo đối tượng ngoại lệ và ném nó ra ngoài phương thức bằng từ khóa <code className="bg-stone-100 px-1 rounded font-mono">throw</code>.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Source Code */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Mã nguồn factorial(int n)
              </span>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9.5px] leading-relaxed text-indigo-100 shadow-md overflow-x-auto">
                <div className="px-1.5 py-0.5 text-stone-550">
                  {`public static int factorial(int n)`}
                  <span className="text-yellow-300 font-bold"> throws IllegalArgumentException</span>
                  {` {`}
                </div>
                <div className={runnerStep === 2 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-6" : "px-1.5 py-0.5 pl-6"}>
                  {`if (n < 0) {`}
                </div>
                <div className={runnerStep === 3 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-12" : "px-1.5 py-0.5 pl-12"}>
                  {`IllegalArgumentException exObj =`}
                </div>
                <div className={runnerStep === 3 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-16" : "px-1.5 py-0.5 pl-16"}>
                  {`new IllegalArgumentException(n + " is invalid!");`}
                </div>
                <div className={runnerStep === 4 ? "text-red-400 font-bold bg-red-950/40 px-1.5 py-0.5 rounded border border-red-800/30 pl-12 animate-pulse" : "px-1.5 py-0.5 pl-12"}>
                  {`throw exObj;`}
                </div>
                <div className="px-1.5 py-0.5 text-stone-550 pl-6">{`}`}</div>
                <div className="px-1.5 py-0.5 text-stone-550 pl-6">{`int ans = 1;`}</div>
                <div className="px-1.5 py-0.5 text-stone-550 pl-6">{`for (int i = 2; i <= n; i++) ans *= i;`}</div>
                <div className="px-1.5 py-0.5 text-stone-550 pl-6">{`return ans;`}</div>
                <div className="px-1.5 py-0.5 text-stone-550">{`}`}</div>
              </pre>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleNextStep}
                disabled={runnerStep >= 4}
                className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Chạy bước tiếp theo (n = -3)</span>
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* JVM State Console */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Bảng thông tin xử lý lỗi của JVM
              </span>

              <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] min-h-[140px] space-y-1.5 shadow-md overflow-y-auto">
                {runnerLogs.length > 0 ? (
                  runnerLogs.map((line, idx) => {
                    let color = "text-stone-300";
                    if (line.startsWith("❌") || line.startsWith("JVM: Thực thi: throw")) color = "text-red-400 font-bold";
                    if (line.startsWith("JVM: Kiểm tra")) color = "text-yellow-300";
                    if (line.startsWith("JVM: Gọi hàm")) color = "text-emerald-300";
                    return <div key={idx} className={color}>{line}</div>;
                  })
                ) : (
                  <div className="text-stone-600 italic text-[11px]">Chờ khởi chạy factorial(-3)...</div>
                )}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="text-stone-450 font-mono text-[10px] uppercase">JVM status:</span>
                {runnerStatus === "idle" && (
                  <span className="px-2 py-0.5 bg-stone-100 border border-stone-250/30 text-stone-600 rounded-md">Idle</span>
                )}
                {runnerStatus === "running" && (
                  <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md animate-pulse">Running</span>
                )}
                {runnerStatus === "crashed" && (
                  <span className="px-2 py-0.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-md">Thrown Exception!</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Alert */}
        <div className="bg-yellow-50/60 border border-yellow-250/60 rounded-2xl p-4 flex gap-3 items-start shadow-sm mb-4">
          <ShieldAlert className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-yellow-900 font-mono uppercase tracking-wider block">
              ⚠️ Rất Dễ Nhầm Lẫn: throw vs throws (Có trong đề thi)
            </span>
            <p className="text-xs text-yellow-700 mt-1 leading-relaxed">
              • <strong>throw</strong>: là ĐỘNG TỪ, dùng trong thân hàm để ném ra 1 đối tượng ngoại lệ cụ thể (ví dụ: <code>throw new IllegalArgumentException(...)</code>).
              <br/>
              • <strong>throws</strong>: dùng khai báo ở chữ ký hàm (method signature) để cảnh báo rằng phương thức này có khả năng ném ra các kiểu Exception tương ứng.
            </p>
          </div>
        </div>

        {/* Tip code */}
        <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex gap-3 items-start">
          <Award className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-stone-855 font-mono">
              💡 Mẹo Viết Code Gọn Gàng
            </span>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Thay vì viết 2 dòng tạo đối tượng ngoại lệ rồi ném đi, bạn có thể gộp làm 1 dòng duy nhất rất thông dụng:
              <br/>
              <code className="bg-stone-200 px-1 rounded block mt-1.5 font-mono text-[10px] py-1 border border-stone-300">
                throw new IllegalArgumentException(n + " is invalid!");
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
