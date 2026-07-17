"use client";
import React, { useState } from "react";
import { Layers, Box, HelpCircle } from "lucide-react";

export default function UmlInteractiveDiagram() {
  const [diagramType, setDiagramType] = useState("class"); // 'class' or 'object'
  const [hoveredItem, setHoveredItem] = useState(null);

  const getExplanation = () => {
    switch (hoveredItem) {
      case "class-name":
        return "🏷️ Class Name: Tên của lớp dịch vụ (MyBall).";
      case "static-attr":
        return "✨ static quantity: Gạch chân chỉ thuộc tính lớp (static attribute). Chỉ xuất hiện duy nhất 1 lần ở cấp lớp, các đối tượng dùng chung.";
      case "private-attr":
        return "🔒 Dấu '-' chỉ thuộc tính private. Chỉ truy cập được nội bộ lớp.";
      case "public-ctor":
        return "🛠️ Dấu '+' chỉ public constructor. Cho phép khởi tạo đối tượng từ bên ngoài.";
      case "static-method":
        return "⚙️ static getQuantity(): Gạch chân chỉ phương thức lớp (static method) có thể gọi trực tiếp qua tên Lớp.";
      case "public-method":
        return "🟢 Dấu '+' chỉ public method. Cung cấp dịch vụ công khai ra bên ngoài.";
      case "obj-name-1":
        return "📦 myBall1: MyBall ➔ Đối tượng cụ thể (Object Name: Class Name), được gạch chân theo chuẩn UML.";
      case "obj-val-1":
        return "🎨 Trạng thái dữ liệu cụ thể của đối tượng myBall1 (màu đỏ, bán kính 1.2).";
      default:
        return "💡 Di chuột (hover) vào các thành phần của sơ đồ để xem giải thích chi tiết!";
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none">
      
      {/* Header & Tabs */}
      <div className="border-b border-stone-200 pb-3 mb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            📊 Trình Biểu Diễn Sơ Đồ UML Tương Tác
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Chuyển đổi giữa sơ đồ Lớp (Class Diagram) và sơ đồ Đối tượng (Object Diagram) để thấy sự khác biệt về cú pháp.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-stone-250/60 p-1 rounded-xl gap-1 shrink-0 border border-stone-200">
          <button
            onClick={() => { setDiagramType("class"); setHoveredItem(null); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              diagramType === "class"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-550 hover:text-stone-800"
            }`}
          >
            Class Diagram
          </button>
          <button
            onClick={() => { setDiagramType("object"); setHoveredItem(null); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              diagramType === "object"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-550 hover:text-stone-800"
            }`}
          >
            Object Diagram
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: Diagram Render Box (7 cols) */}
        <div className="lg:col-span-7 bg-[#151413] border border-stone-850 rounded-2xl p-5 flex items-center justify-center min-h-[340px] relative shadow-inner">
          <div className="text-[8px] text-stone-500 uppercase font-black tracking-wider absolute top-3 left-3 flex items-center gap-1.5">
            <Box size={10} />
            <span>Mô phỏng bản vẽ UML</span>
          </div>

          {diagramType === "class" ? (
            /* Class Diagram standard box */
            <div className="w-[280px] bg-stone-900 border border-stone-700 shadow-xl rounded overflow-hidden text-left font-mono text-[11px] text-stone-300">
              {/* Part 1: Class Name */}
              <div
                onMouseEnter={() => setHoveredItem("class-name")}
                onMouseLeave={() => setHoveredItem(null)}
                className="p-2.5 text-center font-bold border-b border-stone-700 bg-stone-850 text-stone-100 cursor-help hover:bg-stone-800 transition-colors"
              >
                MyBall
              </div>

              {/* Part 2: Attributes */}
              <div className="p-2.5 border-b border-stone-700 space-y-1.5">
                <div
                  onMouseEnter={() => setHoveredItem("static-attr")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  - <u>quantity: int</u>
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("private-attr")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  - colour: String
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("private-attr")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  - radius: double
                </div>
              </div>

              {/* Part 3: Methods */}
              <div className="p-2.5 space-y-1.5">
                <div
                  onMouseEnter={() => setHoveredItem("public-ctor")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + MyBall()
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("public-ctor")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + MyBall(colour: String, radius: double)
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("static-method")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + <u>getQuantity(): int</u>
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("public-method")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + getColour(): String
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("public-method")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + getRadius(): double
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("public-method")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + setColour(colour: String): void
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("public-method")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="cursor-help hover:text-amber-400 transition-colors"
                >
                  + setRadius(radius: double): void
                </div>
              </div>
            </div>
          ) : (
            /* Object Diagram Box */
            <div className="flex flex-col gap-4 items-center">
              {/* Object 1 */}
              <div className="w-[230px] bg-stone-900 border border-stone-700 shadow-md rounded overflow-hidden text-left font-mono text-[11px] text-stone-300">
                <div
                  onMouseEnter={() => setHoveredItem("obj-name-1")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="p-2 border-b border-stone-700 bg-stone-850 text-center font-bold text-stone-150 cursor-help hover:bg-stone-800 transition-colors"
                >
                  <u>myBall1: MyBall</u>
                </div>
                <div
                  onMouseEnter={() => setHoveredItem("obj-val-1")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="p-2 space-y-1 cursor-help hover:text-amber-400 transition-colors"
                >
                  <div>colour = "red"</div>
                  <div>radius = 1.2</div>
                </div>
              </div>

              {/* Object 2 */}
              <div className="w-[230px] bg-stone-900 border border-stone-700 shadow-md rounded overflow-hidden text-left font-mono text-[11px] text-stone-300">
                <div
                  className="p-2 border-b border-stone-700 bg-stone-850 text-center font-bold text-stone-150"
                >
                  <u>myBall2: MyBall</u>
                </div>
                <div className="p-2 space-y-1">
                  <div>colour = "blue"</div>
                  <div>radius = 3.5</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Explanations Box (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-3">Giải thích chi tiết thành phần</div>
            
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 min-h-[140px] flex items-center">
              <p className="text-xs text-stone-750 font-medium leading-relaxed">
                {getExplanation()}
              </p>
            </div>
          </div>

          <div className="bg-stone-100 border border-stone-200 rounded-xl p-3 text-[10px] text-stone-500 mt-4 leading-relaxed">
            💡 <strong>Quy tắc thi cử:</strong>
            <br/>• Sơ đồ đối tượng có tên đối tượng gạch chân dạng: <code><u>tên_đối_tượng: Tên_Lớp</u></code>.
            <br/>• Sơ đồ đối tượng <strong>chỉ chứa thuộc tính + giá trị cụ thể</strong>, hoàn toàn không chứa phương thức.
          </div>
        </div>

      </div>
    </div>
  );
}
