"use client";
import React, { useState } from "react";
import { Code, Terminal, Compass, BarChart, RotateCw, CheckCircle2, XCircle } from "lucide-react";

export default function InheritanceOverridingReview() {
  const [selectedWord, setSelectedWord] = useState("toString");
  const [consoleMode, setConsoleMode] = useState("default"); // "default" | "override"
  const [equalsMode, setEqualsMode] = useState("reference"); // "reference" | "value"
  
  // Flashcards state
  const [flippedCards, setFlippedCards] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });

  const toggleCard = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const explanations = {
    public: {
      title: "public (Access Modifier)",
      desc: "Phạm vi truy cập công khai. Giúp phương thức có thể được gọi từ bất kỳ lớp nào bên ngoài project."
    },
    returntype: {
      title: "String / boolean (Kiểu trả về)",
      desc: "Kiểu dữ liệu trả về của phương thức. <code>toString()</code> bắt buộc trả về một chuỗi ký tự, còn <code>equals()</code> trả về đúng/sai."
    },
    toString: {
      title: "toString() (Ghi đè hiển thị)",
      desc: "Mặc định của lớp <code>Object</code> sẽ in ra định dạng <code>TênLớp@MãHash</code>. Ta ghi đè để trả về chuỗi mô tả thuộc tính chi tiết giúp lập trình viên dễ đọc."
    },
    equals: {
      title: "equals(Object obj) (Ghi đè so sánh)",
      desc: "Mặc định của lớp <code>Object</code> chỉ so sánh địa chỉ ô nhớ (toán tử <code>==</code>). Ta ghi đè để so sánh giá trị các thuộc tính thực tế bên trong đối tượng."
    },
    instanceof: {
      title: "instanceof (Kiểm tra kiểu)",
      desc: "Toán tử kiểm tra xem đối tượng truyền vào <code>obj</code> có thực sự là một thực thể của lớp <code>MyBall</code> hay không trước khi thực hiện ép kiểu, tránh lỗi <code>ClassCastException</code>."
    },
    casting: {
      title: "(MyBall) obj (Ép kiểu đối tượng)",
      desc: "Ép kiểu từ lớp cha tối cao <code>Object</code> về lớp con chuyên biệt <code>MyBall</code> để có thể truy xuất đến các phương thức <code>getColour()</code> và <code>getRadius()</code> của quả bóng."
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // II. OVERRIDING METHODS (ÔN TẬP GHI ĐÈ PHƯƠNG THỨC)
      </span>

      {/* Grid: Code Explorer & Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
        
        {/* Left column: Code Box */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-bold mb-1">
            <Code className="w-4 h-4 text-indigo-500" />
            <span>Mã nguồn tương tác (MyBall.java)</span>
          </div>

          <div className="font-mono text-[10px] md:text-xs text-stone-750 bg-stone-900 border border-stone-850 rounded-2xl p-4 leading-relaxed overflow-x-auto text-stone-300">
            {/* toString override */}
            <div className="border-b border-stone-800 pb-3 mb-3">
              <span className="text-stone-500 block mb-1">// 1. Ghi đè phương thức toString()</span>
              <div>
                <span className="text-indigo-400 cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("public")}>public</span>{" "}
                <span className="text-purple-400 cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("returntype")}>String</span>{" "}
                <span className="text-emerald-400 font-bold cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("toString")}>toString</span>() &#123;
              </div>
              <div className="pl-4">
                return <span className="text-amber-300">"["</span> + getColour() + <span className="text-amber-300">", "</span> + getRadius() + <span className="text-amber-300">"]"</span>;
              </div>
              <div>&#125;</div>
            </div>

            {/* equals override */}
            <div>
              <span className="text-stone-500 block mb-1">// 2. Ghi đè phương thức equals()</span>
              <div>
                <span className="text-indigo-400 cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("public")}>public</span>{" "}
                <span className="text-purple-400 cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("returntype")}>boolean</span>{" "}
                <span className="text-emerald-400 font-bold cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("equals")}>equals</span>(<span className="text-blue-300">Object</span> obj) &#123;
              </div>
              <div className="pl-4">
                <span className="text-purple-400">if</span> (obj <span className="text-indigo-400 font-bold cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("instanceof")}>instanceof</span> <span className="text-blue-300">MyBall</span>) &#123;
              </div>
              <div className="pl-8">
                <span className="text-blue-300">MyBall</span> ball = <span className="text-indigo-400 font-bold cursor-pointer hover:bg-stone-800 px-1 rounded transition-colors" onClick={() => setSelectedWord("casting")}>(MyBall)</span> obj;
              </div>
              <div className="pl-8 text-stone-400">
                <span className="text-purple-400">return</span> <span className="text-stone-300">this</span>.getColour().equals(ball.getColour()) &&
              </div>
              <div className="pl-16 text-stone-400">
                <span className="text-stone-300">this</span>.getRadius() == ball.getRadius();
              </div>
              <div className="pl-4">&#125;</div>
              <div className="pl-4 text-purple-400">else</div>
              <div className="pl-8 text-purple-400">return <span className="text-rose-400">false</span>;</div>
              <div>&#125;</div>
            </div>
          </div>
          <span className="text-[9px] text-stone-500 block text-right font-semibold italic">* Nhấp vào các từ được highlight màu sắc để đọc chú giải nhanh.</span>
        </div>

        {/* Right column: Explanations Panel */}
        <div className="lg:col-span-5 flex flex-col justify-stretch">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-bold mb-2">
            <Compass className="w-4 h-4 text-indigo-500" />
            <span>Chú giải từ khóa hệ thống</span>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 flex-1 flex flex-col justify-center min-h-[160px] shadow-sm">
            <div className="space-y-2 animate-in fade-in duration-200">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">
                {explanations[selectedWord].title}
              </span>
              <p 
                className="text-xs leading-relaxed text-stone-700 font-medium"
                dangerouslySetInnerHTML={{ __html: explanations[selectedWord].desc }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Console Output Simulator */}
      <div className="border border-stone-200 rounded-2xl p-4 bg-white mb-6">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-bold">
            <Terminal className="w-4 h-4 text-stone-600" />
            <span>Mô phỏng Kết quả đầu ra (Console Simulator)</span>
          </div>

          <div className="flex bg-stone-100 p-0.5 rounded-lg border border-stone-200">
            <button
              onClick={() => setConsoleMode("default")}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-md border-none cursor-pointer transition-all ${
                consoleMode === "default" ? "bg-stone-900 text-white shadow-sm" : "text-stone-500 hover:text-stone-850"
              }`}
            >
              Mặc định (Lớp Object)
            </button>
            <button
              onClick={() => setConsoleMode("override")}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-md border-none cursor-pointer transition-all ${
                consoleMode === "override" ? "bg-stone-900 text-white shadow-sm" : "text-stone-500 hover:text-stone-850"
              }`}
            >
              Đã ghi đè (Override)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-5 bg-stone-50 p-3 rounded-xl border border-stone-150">
            <span className="text-[8px] uppercase tracking-wider text-stone-400 font-black block mb-1">Mã nguồn chạy thử</span>
            <pre className="font-mono text-[10px] text-stone-600 leading-normal">
{`MyBall b1 = new MyBall("Red", 5.5);
System.out.println(b1);`}
            </pre>
          </div>

          <div className="md:col-span-1 flex justify-center text-stone-400 text-lg">➔</div>

          <div className="md:col-span-6 bg-stone-900 p-3 rounded-xl border border-stone-950 text-white flex flex-col justify-between min-h-[75px]">
            <div>
              <span className="text-[8px] uppercase tracking-wider text-stone-500 font-black block mb-1">Màn hình Console</span>
              <span className="font-mono text-xs text-amber-400 block font-bold">
                {consoleMode === "default" ? "MyBall@7a811977" : "[Red, 5.5]"}
              </span>
            </div>
            <span className="text-[9px] text-stone-400 block mt-2 font-medium">
              {consoleMode === "default" 
                ? "💡 Lớp Object trả về mã hash địa chỉ vùng nhớ, khó hiểu cho lập trình viên." 
                : "💡 Hàm toString() đã override hiển thị rõ màu sắc và bán kính quả bóng."}
            </span>
          </div>
        </div>
      </div>

      {/* Visual comparison for equals() */}
      <div className="border border-stone-200 rounded-2xl p-4 bg-white mb-6">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block font-mono">
            // CƠ CHẾ SO SÁNH CỦA PHƯƠNG THỨC EQUALS()
          </span>

          <div className="flex bg-stone-100 p-0.5 rounded-lg border border-stone-200">
            <button
              onClick={() => setEqualsMode("reference")}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-md border-none cursor-pointer transition-all ${
                equalsMode === "reference" ? "bg-rose-500 text-white shadow-sm" : "text-stone-500 hover:text-stone-850"
              }`}
            >
              So sánh địa chỉ ô nhớ (==)
            </button>
            <button
              onClick={() => setEqualsMode("value")}
              className={`px-3 py-1 text-[10px] font-extrabold rounded-md border-none cursor-pointer transition-all ${
                equalsMode === "value" ? "bg-emerald-600 text-white shadow-sm" : "text-stone-500 hover:text-stone-850"
              }`}
            >
              So sánh giá trị (Override)
            </button>
          </div>
        </div>

        {/* Comparison Graphic */}
        <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-stone-50 rounded-xl gap-4 border border-stone-150">
          {/* Ball 1 */}
          <div className="flex flex-col items-center bg-white p-3 rounded-xl border border-stone-200 shadow-sm w-36">
            <div className="w-10 h-10 rounded-full bg-rose-500 shadow-inner flex items-center justify-center text-white text-[10px] font-bold">b1</div>
            <span className="text-[10px] font-black text-stone-800 mt-2 block">Màu: Red, R: 5.5</span>
            <span className="text-[8px] font-mono text-stone-400 mt-1 block">Địa chỉ: 0x00A1</span>
          </div>

          {/* Operator Arrow */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-stone-600 px-3 py-1 bg-stone-200 rounded-md">
              {equalsMode === "reference" ? "obj1 == obj2" : "equals() Override"}
            </span>
            <div className="h-6 w-0.5 bg-stone-300 my-1" />
            <div className="flex items-center gap-1">
              {equalsMode === "reference" ? (
                <>
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-xs font-black text-rose-600">false</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-black text-emerald-600">true</span>
                </>
              )}
            </div>
          </div>

          {/* Ball 2 */}
          <div className="flex flex-col items-center bg-white p-3 rounded-xl border border-stone-200 shadow-sm w-36">
            <div className="w-10 h-10 rounded-full bg-rose-500 shadow-inner flex items-center justify-center text-white text-[10px] font-bold">b2</div>
            <span className="text-[10px] font-black text-stone-800 mt-2 block">Màu: Red, R: 5.5</span>
            <span className="text-[8px] font-mono text-stone-400 mt-1 block">Địa chỉ: 0x00B2</span>
          </div>
        </div>

        <p className="text-[10px] text-stone-500 font-semibold leading-relaxed mt-3 text-center max-w-xl mx-auto">
          {equalsMode === "reference" 
            ? "⚠️ Hai quả bóng hoàn toàn giống nhau về thuộc tính, nhưng do lưu ở 2 ô nhớ khác nhau (0x00A1 và 0x00B2), phép so sánh mặc định sẽ báo false." 
            : "✅ Sau khi Override, ta so sánh trực tiếp thuộc tính màu sắc ('Red' == 'Red') và bán kính (5.5 == 5.5), phép so sánh báo true chính xác."}
        </p>
      </div>

      {/* Comparison table Overriding vs Overloading */}
      <div className="border border-stone-200 rounded-2xl p-4 bg-white mb-6">
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-bold mb-3">
          <BarChart className="w-4 h-4 text-stone-600" />
          <span>Điểm thi cử trọng tâm: Phân biệt Ghi đè (Overriding) & Nạp chồng (Overloading)</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 text-[10px] font-black uppercase text-stone-500 tracking-wider border-b border-stone-200">
                <th className="p-3">Tiêu chí</th>
                <th className="p-3">Overriding (Ghi đè)</th>
                <th className="p-3">Overloading (Nạp chồng)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-150">
              <tr>
                <td className="p-3 font-bold text-stone-800 bg-stone-50/30">Vị trí lớp</td>
                <td className="p-3">Xảy ra giữa lớp cha và lớp con (Kế thừa).</td>
                <td className="p-3">Xảy ra trong cùng một lớp.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-800 bg-stone-50/30">Tên phương thức</td>
                <td className="p-3 font-semibold text-indigo-650">Bắt buộc GIỐNG NHAU.</td>
                <td className="p-3 font-semibold text-violet-650">Bắt buộc GIỐNG NHAU.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-800 bg-stone-50/30">Chữ ký tham số</td>
                <td className="p-3 font-bold text-rose-600">Bắt buộc GIỐNG NHAU hoàn toàn.</td>
                <td className="p-3 font-bold text-emerald-600">Bắt buộc KHÁC NHAU về tham số.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-800 bg-stone-50/30">Thời điểm liên kết</td>
                <td className="p-3 font-medium">Runtime (Liên kết động - Dynamic).</td>
                <td className="p-3 font-medium">Compile-time (Liên kết tĩnh - Static).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Takeaway Flashcards */}
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // THẺ HỌC NHANH (FLASHCARDS) - CHẠM ĐỂ LẬT XEM MẶT SAU
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div 
          onClick={() => toggleCard(1)}
          className={`min-h-[120px] rounded-2xl border p-4 cursor-pointer flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
            flippedCards[1] 
              ? "bg-stone-900 border-stone-900 text-white transform rotate-y-180" 
              : "bg-white border-stone-200 hover:border-stone-300 text-stone-850 hover:-translate-y-0.5"
          }`}
        >
          {flippedCards[1] ? (
            <div className="flex flex-col justify-between h-full space-y-2">
              <span className="text-[8px] font-black text-stone-500 uppercase tracking-widest">// Đáp án</span>
              <p className="text-[11px] font-semibold leading-relaxed">
                Là việc viết lại một phương thức đã kế thừa từ lớp cha với <strong>cùng tên, cùng tham số, cùng kiểu trả về (chữ ký)</strong>.
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-full">
              <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">// Câu hỏi 1</span>
              <h4 className="text-xs font-black text-stone-800 leading-tight">
                Thế nào là Overriding (Ghi đè)?
              </h4>
            </div>
          )}
        </div>

        {/* Card 2 */}
        <div 
          onClick={() => toggleCard(2)}
          className={`min-h-[120px] rounded-2xl border p-4 cursor-pointer flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
            flippedCards[2] 
              ? "bg-stone-900 border-stone-900 text-white" 
              : "bg-white border-stone-200 hover:border-stone-300 text-stone-850 hover:-translate-y-0.5"
          }`}
        >
          {flippedCards[2] ? (
            <div className="flex flex-col justify-between h-full space-y-2">
              <span className="text-[8px] font-black text-stone-500 uppercase tracking-widest">// Đáp án</span>
              <p className="text-[11px] font-semibold leading-relaxed">
                Để tùy biến lại hành vi được thừa hưởng từ lớp cha sao cho phù hợp với đặc thù riêng biệt của đối tượng thuộc lớp con.
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-full">
              <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">// Câu hỏi 2</span>
              <h4 className="text-xs font-black text-stone-800 leading-tight">
                Mục đích tối thượng của Overriding là gì?
              </h4>
            </div>
          )}
        </div>

        {/* Card 3 */}
        <div 
          onClick={() => toggleCard(3)}
          className={`min-h-[120px] rounded-2xl border p-4 cursor-pointer flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
            flippedCards[3] 
              ? "bg-stone-900 border-stone-900 text-white" 
              : "bg-white border-stone-200 hover:border-stone-300 text-stone-850 hover:-translate-y-0.5"
          }`}
        >
          {flippedCards[3] ? (
            <div className="flex flex-col justify-between h-full space-y-2">
              <span className="text-[8px] font-black text-stone-500 uppercase tracking-widest">// Đáp án</span>
              <p className="text-[11px] font-semibold leading-relaxed">
                Là <code>toString()</code> và <code>equals()</code>. Chúng tự động kế thừa từ lớp cha tối cao <code>Object</code>.
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-full">
              <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">// Câu hỏi 3</span>
              <h4 className="text-xs font-black text-stone-800 leading-tight">
                Hai phương thức kế thừa mặc định nào của lớp Object hay bị hỏi thi nhất?
              </h4>
            </div>
          )}
        </div>

        {/* Card 4 */}
        <div 
          onClick={() => toggleCard(4)}
          className={`min-h-[120px] rounded-2xl border p-4 cursor-pointer flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
            flippedCards[4] 
              ? "bg-stone-900 border-stone-900 text-white" 
              : "bg-white border-stone-200 hover:border-stone-300 text-stone-850 hover:-translate-y-0.5"
          }`}
        >
          {flippedCards[4] ? (
            <div className="flex flex-col justify-between h-full space-y-2">
              <span className="text-[8px] font-black text-stone-500 uppercase tracking-widest">// Đáp án</span>
              <p className="text-[11px] font-semibold leading-relaxed">
                Overriding diễn ra ở hai lớp khác nhau có quan hệ Kế thừa. Overloading diễn ra ngay bên trong một lớp duy nhất.
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-full">
              <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">// Câu hỏi 4</span>
              <h4 className="text-xs font-black text-stone-800 leading-tight">
                Phân biệt phạm vi diễn ra giữa Overriding và Overloading?
              </h4>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
