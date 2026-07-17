"use client";
import React, { useState } from "react";
import { Terminal, Lock, HelpCircle, ShieldCheck, Info, Cpu, Play } from "lucide-react";

export default function ExceptionsHandlingVisualizer() {
  // Part A: Input Simulator
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isError, setIsError] = useState(true);

  // Part B: Flowchart Hover
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const blockInfo = {
    try: "Khối try: Chứa các lệnh bình thường có khả năng phát sinh lỗi. Khi xảy ra lỗi, phần code còn lại trong try bị hủy bỏ và nhảy sang khối catch tương ứng.",
    catch: "Khối catch: Chạy khi có lỗi trùng khớp loại được bắt. Có thể khai báo nhiều khối catch liên tiếp để đón đầu các loại lỗi khác nhau.",
    finally: "Khối finally: Luôn luôn được thực thi bất chấp lỗi có xảy ra hay không, thậm chí cả khi trong khối try hoặc catch có chứa từ khóa return."
  };

  const handleInputSubmit = () => {
    if (!userInput.trim()) return;
    const value = userInput.trim();
    setUserInput("");

    // Simulate java behavior
    const parsedVal = parseInt(value, 10);
    const isInt = /^-?\d+$/.test(value); // strictly integer check

    if (!isInt) {
      setHistory((prev) => [
        ...prev,
        `Enter an integer: ${value}`,
        `❌ Incorrect input: integer required.`,
        `[sc.nextLine() cleared incorrect buffer '${value}']`,
        `Enter an integer: `
      ]);
      setIsError(true);
    } else {
      setHistory((prev) => [
        ...prev,
        `Enter an integer: ${value}`,
        `num = ${parsedVal}`,
        `✅ Nhập số nguyên thành công! Thoát do-while loop.`
      ]);
      setIsError(false);
    }
  };

  const handleResetSim = () => {
    setHistory([]);
    setIsError(true);
    setUserInput("");
  };

  return (
    <div className="space-y-6">
      {/* PART A: Input Simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-emerald-600" />
          <span>Mục III - Phần 1: Giả Lập Nhập Số Nguyên (ExampleImproved.java)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Mô phỏng vòng lặp <code className="bg-stone-100 px-1 rounded font-mono">do-while</code> kết hợp <code className="bg-stone-100 px-1 rounded font-mono">try-catch</code>. Nhập thử chữ hoặc số thực để xem chương trình bắt lỗi và yêu cầu nhập lại thế nào.
        </p>

        {/* Input area */}
        <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/65 mb-6 flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Nhập giá trị đầu vào của bạn:</label>
            <input
              type="text"
              value={userInput}
              disabled={!isError}
              placeholder={isError ? "Ví dụ: abc hoặc 92" : "Đã hoàn thành"}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleInputSubmit()}
              className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm font-mono"
            />
          </div>

          <button
            onClick={handleInputSubmit}
            disabled={!isError}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50 select-none hover:scale-[1.02]"
          >
            Nhập số
          </button>

          <button
            onClick={handleResetSim}
            className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            Đặt lại simulation
          </button>
        </div>

        {/* Console Box */}
        <div className="bg-stone-900 border border-stone-850 rounded-2xl p-5 font-mono text-xs text-emerald-400 min-h-[140px] space-y-1 shadow-md mb-6">
          <span className="text-[8px] text-stone-500 block uppercase tracking-wider font-bold mb-2">Màn hình Console Output</span>
          {history.length > 0 ? (
            history.map((line, idx) => {
              let color = "text-emerald-300";
              if (line.startsWith("❌")) color = "text-rose-400 font-bold";
              if (line.startsWith("✅")) color = "text-emerald-400 font-black";
              if (line.startsWith("[sc.nextLine")) color = "text-stone-500 italic";
              return <div key={idx} className={color}>{line}</div>;
            })
          ) : (
            <div className="text-stone-600 italic text-[11px]">Chờ giá trị nhập đầu vào... (Hãy gõ 'abc' rồi nhấn Enter)</div>
          )}
        </div>

        {/* Bullet explanation */}
        <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex gap-3 items-start">
          <Info className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-stone-855 font-mono">
              💡 Giải thích từ khóa trong ExampleImproved.java
            </span>
            <ul className="text-xs text-stone-600 mt-1.5 space-y-1 list-disc pl-4 leading-relaxed font-sans">
              <li><code>try {"{ ... }"}</code>: Khối lệnh chứa <code>sc.nextInt()</code> có nguy cơ ném lỗi nhập sai kiểu.</li>
              <li><code>catch (InputMismatchException e)</code>: Bắt đối tượng lỗi để xử lý, ngăn không cho chương trình bị sụp đổ bất ngờ.</li>
              <li><code>sc.nextLine()</code>: Rất quan trọng! Dùng để xóa ký tự lỗi còn sót lại trong bộ đệm Scanner, giúp vòng lặp tiếp theo hoạt động chính xác.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PART B: Flowchart try-catch-finally */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-indigo-600" />
          <span>Mục III - Phần 2: Cú Pháp Tổng Quát try-catch-finally</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Rê chuột vào các khối điều khiển bên dưới để quan sát vai trò và luồng chạy của khối mã lệnh Exception.
        </p>

        {/* Blocks diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 select-none text-center">
          <div
            onMouseEnter={() => setHoveredBlock("try")}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-2xl border border-indigo-250 bg-indigo-50/30 hover:bg-indigo-50/50 cursor-pointer shadow-sm transition-all"
          >
            <span className="text-[10px] text-indigo-500 font-bold block mb-1 font-mono">STEP 1</span>
            <span className="font-bold text-xs text-indigo-900">try {"{ ... }"}</span>
          </div>

          <div
            onMouseEnter={() => setHoveredBlock("catch")}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-2xl border border-amber-250 bg-amber-50/30 hover:bg-amber-50/50 cursor-pointer shadow-sm transition-all"
          >
            <span className="text-[10px] text-amber-500 font-bold block mb-1 font-mono">STEP 2 (Nếu lỗi)</span>
            <span className="font-bold text-xs text-amber-900">catch (Exception e) {"{ ... }"}</span>
          </div>

          <div
            onMouseEnter={() => setHoveredBlock("finally")}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-2xl border border-emerald-250 bg-emerald-50/30 hover:bg-emerald-50/50 cursor-pointer shadow-sm transition-all"
          >
            <span className="text-[10px] text-emerald-500 font-bold block mb-1 font-mono">STEP 3 (Luôn chạy)</span>
            <span className="font-bold text-xs text-emerald-950">finally {"{ ... }"}</span>
          </div>
        </div>

        {/* Explain text box */}
        <div className="bg-stone-100 border border-stone-250 p-4 rounded-2xl font-mono text-xs leading-relaxed text-stone-650 min-h-[58px] flex items-center shadow-inner mb-4">
          {hoveredBlock ? (
            <span>{blockInfo[hoveredBlock]}</span>
          ) : (
            <span className="italic text-stone-400">Di chuột vào khối try, catch, hoặc finally để xem giải nghĩa chi tiết...</span>
          )}
        </div>

        {/* Finally gotcha warning */}
        <div className="bg-rose-50/60 border border-rose-250/60 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
          <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-rose-900 font-mono uppercase tracking-wider block">
              🚨 Điểm bẫy trắc nghiệm: Khối finally luôn chạy!
            </span>
            <p className="text-xs text-rose-700 mt-1 leading-relaxed">
              Khối <code>finally</code> <strong>luôn được thực thi</strong> kể cả khi có câu lệnh <code>return</code> nằm trong khối <code>try</code> hoặc khối <code>catch</code>. Đây là bẫy thi lý thuyết kinh điển của các giáo viên Java.
            </p>
          </div>
        </div>
      </div>

      {/* PART C: TestException.java Source view */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-rose-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-rose-600" />
          <span>Mục III - Phần 3: Ví dụ Xử Lý Exception với factorial()</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Xem mã nguồn cách gọi hàm factorial và dùng khối catch để đón bắt lỗi an toàn rồi hiển thị lỗi thông qua <code className="bg-stone-100 px-1 rounded font-mono">getMessage()</code>.
        </p>

        <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] leading-relaxed text-indigo-250 shadow-md overflow-x-auto">
{`public class TestException {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int input = sc.nextInt();
        try {
            System.out.println("Ans = " + factorial(input));
        } catch (IllegalArgumentException expObj) {
            System.out.println(expObj.getMessage()); // ➔ In ra thông báo lỗi đã lưu
        }
    }
}`}
        </pre>
      </div>

      {/* PART D: Cheat Sheet Grid */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
        💡 Cheat Sheet Tổng Hợp Ngoại Lệ (Exception Indication & Handling)
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1: throw/throws */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-bold text-xs uppercase tracking-wider text-rose-700">Exception Indication (Báo hiệu)</h5>
            <span className="text-[9px] font-bold px-2 py-0.5 bg-rose-50 text-rose-700 rounded-lg">Cấp phát & Ném</span>
          </div>

          <ul className="text-xs text-stone-600 space-y-3 leading-relaxed">
            <li>
              <strong>Khái niệm:</strong> Dùng từ khóa <code>throw</code> để ném một đối tượng ngoại lệ (Exception Object) cụ thể để báo lỗi.
            </li>
            <li>
              <strong>Mục đích:</strong> Thông báo cho chương trình gọi bên ngoài biết một tình huống bất thường đã xảy ra.
            </li>
            <li>
              <strong>Cú pháp:</strong> 
              <br/>
              • Trong hàm: <code>throw new ExClass("Msg");</code>
              <br/>
              • Chữ ký hàm: <code>void method() throws ExClass</code>
            </li>
            <li>
              <strong>Ví dụ thực tế:</strong> Ném lỗi khi truyền tham số giai thừa âm:
              <br/>
              <code>throw new IllegalArgumentException("invalid!");</code>
            </li>
            <li>
              <strong>Bẫy thi:</strong> Phân biệt rõ <code>throw</code> (ném đối tượng) và <code>throws</code> (khai báo lớp lỗi có thể xảy ra ở tiêu đề hàm).
            </li>
          </ul>
        </div>

        {/* Column 2: try/catch/finally */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-bold text-xs uppercase tracking-wider text-emerald-700">Exception Handling (Xử lý)</h5>
            <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-lg">Bắt & Khôi phục</span>
          </div>

          <ul className="text-xs text-stone-600 space-y-3 leading-relaxed">
            <li>
              <strong>Khái niệm:</strong> Dùng khối <code>try-catch-finally</code> để cô lập và xử lý sự cố.
            </li>
            <li>
              <strong>Mục đích:</strong> Giúp chương trình khôi phục dòng chạy bình thường và tiếp tục hoạt động không bị crash.
            </li>
            <li>
              <strong>Cú pháp:</strong> 
              <br/>
              <code>try {"{...}"} catch (ExType e) {"{...}"} finally {"{...}"}</code>
            </li>
            <li>
              <strong>Ví dụ thực tế:</strong> Tránh sập khi người dùng nhập sai kiểu dữ liệu của số nguyên qua Scanner.
            </li>
            <li>
              <strong>Bẫy thi:</strong> Khối <code>finally</code> bắt buộc luôn chạy kể cả khi khối try/catch có câu lệnh <code>return</code>. Chỉ có duy nhất 1 khối finally.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
