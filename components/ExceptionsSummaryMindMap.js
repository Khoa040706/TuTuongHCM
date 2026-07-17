import React, { useState } from "react";
import { HelpCircle, Network, BookOpen, AlertCircle, ShieldAlert, ChevronRight, Terminal, Layers } from "lucide-react";

export default function ExceptionsSummaryMindMap() {
  const [activeBranch, setActiveBranch] = useState("motivation");

  const mindMapData = {
    motivation: {
      title: "1. Động lực (Motivation)",
      desc: "Exception ra đời để thay thế các kỹ thuật kiểm tra lỗi thô sơ (như System.exit) làm dừng đứng luồng chạy của ứng dụng gọi.",
      bullets: [
        "Phân biệt 3 loại lỗi lập trình: Syntax (cú pháp), Runtime (lúc chạy), Logic (thuật toán).",
        "Độ khó phát hiện tăng dần: Syntax ➔ Runtime ➔ Logic.",
        "Stack trace: lịch sử gọi phương thức dẫn tới điểm gây ra lỗi."
      ],
      gotcha: "Đề thi hay hỏi phân loại lỗi. Hãy nhớ Compiler CHỈ phát hiện được duy nhất Syntax error!"
    },
    indication: {
      title: "2. Báo hiệu (Indication)",
      desc: "Cách ném ngoại lệ khi phát hiện trạng thái lỗi trong phương thức bằng từ khóa throw.",
      bullets: [
        "Đối tượng exception bắt buộc phải kế thừa trực tiếp hoặc gián tiếp lớp Throwable.",
        "Cú pháp: throw new ExceptionClassName('Thông báo lỗi');",
        "Khai báo throws ở chữ ký phương thức để cảnh báo đối phương gọi hàm."
      ],
      gotcha: "Bẫy thi: Phân biệt throw (ném 1 đối tượng lỗi cụ thể) và throws (định nghĩa các kiểu lỗi có thể quăng ở tiêu đề hàm)."
    },
    handling: {
      title: "3. Xử lý (Handling)",
      desc: "Bọc các đoạn code nguy cơ gây sập bằng cấu trúc try-catch-finally để phục hồi chương trình.",
      bullets: [
        "Khối try: Chứa mã nguồn có nguy cơ ném lỗi.",
        "Khối catch: Bắt lấy exception và xử lý êm đẹp để chạy tiếp.",
        "Khối finally: Khối lệnh dọn dẹp tài nguyên."
      ],
      gotcha: "Bẫy cực hot: Khối finally LUÔN LUÔN được chạy bất chấp trong try hoặc catch có lệnh return hay không."
    },
    types: {
      title: "4. Phân loại Checked vs Unchecked",
      desc: "Java chia Exception thành hai nhánh lớn dựa trên mức độ kiểm soát của compiler.",
      bullets: [
        "Checked: Compiler bắt buộc phải bọc try-catch hoặc ném throws từ lúc viết code (FileNotFoundException, IOException).",
        "Unchecked: Kế thừa RuntimeException, compiler bỏ qua, lỗi phát sinh do sơ suất logic của lập trình viên (NullPointerException, ArithmeticException)."
      ],
      gotcha: "Lỗi NullPointerException và IndexOutOfBoundsException là unchecked exception, không cần try-catch cưỡng chế."
    },
    custom: {
      title: "5. Ngoại lệ tùy chỉnh (Custom)",
      desc: "Tạo các lớp lỗi nghiệp vụ riêng phù hợp với nghiệp vụ ứng dụng thực tế (ví dụ: NotEnoughFundException).",
      bullets: [
        "Tạo lớp kế thừa Exception: class MyException extends Exception.",
        "Trong constructor bắt buộc phải gọi super(message) để đưa thông điệp lỗi lên lớp cha quản lý.",
        "Cấp phát và ném ra bằng: throw new MyException('Thông điệp');"
      ],
      gotcha: "Trong bài thi tự luận/thực hành, nếu đề yêu cầu viết Custom Exception, thiếu super(s) trong constructor sẽ bị trừ điểm nặng!"
    }
  };

  const themes = {
    motivation: {
      border: "border-indigo-100",
      activeBorder: "border-indigo-500",
      activeBg: "bg-indigo-50/50",
      iconBg: "bg-indigo-500 text-white",
      iconInactive: "bg-stone-100 text-indigo-500",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      accent: "text-indigo-600"
    },
    indication: {
      border: "border-rose-100",
      activeBorder: "border-rose-500",
      activeBg: "bg-rose-50/50",
      iconBg: "bg-rose-500 text-white",
      iconInactive: "bg-stone-100 text-rose-500",
      badge: "bg-rose-50 text-rose-700 border-rose-100",
      accent: "text-rose-600"
    },
    handling: {
      border: "border-emerald-100",
      activeBorder: "border-emerald-500",
      activeBg: "bg-emerald-50/50",
      iconBg: "bg-emerald-500 text-white",
      iconInactive: "bg-stone-100 text-emerald-500",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
      accent: "text-emerald-600"
    },
    types: {
      border: "border-amber-100",
      activeBorder: "border-amber-500",
      activeBg: "bg-amber-50/50",
      iconBg: "bg-amber-500 text-white",
      iconInactive: "bg-stone-100 text-amber-500",
      badge: "bg-amber-50 text-amber-700 border-amber-100",
      accent: "text-amber-600"
    },
    custom: {
      border: "border-teal-100",
      activeBorder: "border-teal-500",
      activeBg: "bg-teal-50/50",
      iconBg: "bg-teal-500 text-white",
      iconInactive: "bg-stone-100 text-teal-500",
      badge: "bg-teal-50 text-teal-700 border-teal-100",
      accent: "text-teal-600"
    }
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-rose-500 h-1.5 absolute top-0 left-0 right-0" />
      
      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
        <Network className="w-5 h-5 text-indigo-600" />
        <span>Sơ Đồ Tư Duy Tổng Kết Bài Exceptions</span>
      </h4>
      <p className="text-xs text-stone-500 mb-6">
        Chọn một nhánh chuyên đề bên dưới để xem tóm tắt ý chính và bẫy trắc nghiệm ôn tập từng chủ đề.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Bento-style Navigation Card Stack */}
        <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
          {Object.keys(mindMapData).map((key, index) => {
            const isSelected = activeBranch === key;
            const theme = themes[key];
            return (
              <button
                key={key}
                onClick={() => setActiveBranch(key)}
                className={`group flex items-center gap-4 w-full p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? `${theme.activeBg} ${theme.activeBorder} shadow-md ring-1 ring-stone-250`
                    : "bg-white border-stone-200 text-stone-700 hover:border-stone-300 hover:bg-stone-50/20"
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  isSelected ? theme.iconBg : theme.iconInactive
                }`}>
                  {key === "motivation" && <Terminal className="w-4 h-4" />}
                  {key === "indication" && <AlertCircle className="w-4 h-4" />}
                  {key === "handling" && <Layers className="w-4 h-4" />}
                  {key === "types" && <HelpCircle className="w-4 h-4" />}
                  {key === "custom" && <ShieldAlert className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-stone-400">Chủ đề 0{index + 1}</span>
                    {isSelected && <ChevronRight className={`w-4 h-4 ${theme.accent} transition-transform group-hover:translate-x-1`} />}
                  </div>
                  <span className="text-xs md:text-sm font-bold block mt-0.5 text-stone-850 truncate">
                    {mindMapData[key].title.substring(3)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Node Details */}
        <div className={`lg:col-span-7 bg-stone-50/25 p-5 rounded-2xl border ${themes[activeBranch].border} flex flex-col justify-between shadow-xs transition-all duration-300`}>
          <div className="space-y-4">
            {/* Header detail */}
            <div className="border-b border-stone-200/50 pb-3">
              <span className={`text-[9px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded ${themes[activeBranch].badge} border`}>
                Tóm tắt cốt lõi
              </span>
              <h5 className="text-sm md:text-base font-black text-stone-900 uppercase tracking-wide mt-2">
                {mindMapData[activeBranch].title}
              </h5>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-normal">
                {mindMapData[activeBranch].desc}
              </p>
            </div>

            {/* Bullets */}
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                📌 Nội dung trọng tâm:
              </span>
              <ul className="list-disc pl-4 text-xs text-stone-700 space-y-2 font-normal leading-relaxed">
                {mindMapData[activeBranch].bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gotchas block */}
          <div className="mt-5 p-3.5 bg-amber-50/50 border border-amber-100 rounded-xl flex gap-3 text-xs leading-relaxed text-amber-900">
            <ShieldAlert className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-950 mb-0.5 font-bold uppercase tracking-wide text-[10px] font-mono">🚨 Lưu ý đi thi (Gotcha):</strong>
              <p className="text-[11px] text-stone-650 font-normal leading-relaxed">
                {mindMapData[activeBranch].gotcha}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
