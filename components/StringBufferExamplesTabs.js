"use client";
import React, { useState } from "react";

export default function StringBufferExamplesTabs() {
  const [activeTab, setActiveTab] = useState("append"); // append, insert, replace, delete, reverse

  const tabs = {
    append: {
      title: "a. append()",
      desc: "Phương thức nối thêm một chuỗi mới vào cuối chuỗi hiện tại.",
      code: `class StringBufferExample {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Hello ");
        sb.append("Java"); // thay đổi trực tiếp chuỗi gốc
        System.out.println(sb); // in ra: Hello Java
    }
}`,
      analysis: [
        "<code>class</code>: khai báo lớp trong Java.",
        "<code>public static void main</code>: Hàm chính chạy chương trình.",
        "<code>sb.append(\"Java\")</code>: nối thêm \"Java\" vào cuối đối tượng <code>sb</code> ban đầu.",
        "💡 <strong>Điểm khác biệt với String:</strong> Phương thức này tác động trực tiếp vào vùng nhớ đối tượng <code>sb</code>, không tạo đối tượng trung gian mới."
      ]
    },
    insert: {
      title: "b. insert()",
      desc: "Chèn một chuỗi con vào vị trí chỉ định (offset).",
      code: `class StringBufferInsertExample {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.insert(1, "Java"); // chèn "Java" vào vị trí số 1
        System.out.println(sb); // in ra: HJavaello
    }
}`,
      analysis: [
        "Mảng chỉ số (index) bắt đầu từ 0 (H ở chỉ số 0, e ở chỉ số 1).",
        "<code>sb.insert(1, \"Java\")</code>: chèn chuỗi mới vào vị trí index 1.",
        "Các ký tự phía sau tự động dịch chuyển về bên phải để nhường chỗ."
      ]
    },
    replace: {
      title: "c. replace()",
      desc: "Thay thế một đoạn ký tự bằng một chuỗi mới.",
      code: `class StringBufferReplaceExample {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.replace(1, 3, "Java"); // thay thế ký tự từ vị trí 1 đến 3
        System.out.println(sb); // in ra: HJavalo
      }
}`,
      analysis: [
        "<code>sb.replace(1, 3, \"Java\")</code>: thay thế các ký tự từ index 1 đến trước index 3.",
        "⚠️ <strong>Lưu ý:</strong> Vị trí kết thúc <code>end = 3</code> là <strong>không bao gồm</strong> (exclusive). Chỉ thay thế các ký tự tại index 1 và 2 (ở đây là 'el').",
        "Kết quả thu được: 'H' + 'Java' + 'lo' = 'HJavalo'."
      ]
    },
    delete: {
      title: "d. delete()",
      desc: "Xóa một đoạn ký tự từ chỉ số bắt đầu đến kết thúc.",
      code: `class StringBufferDeleteExample {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.delete(1, 3); // xóa ký tự từ vị trí 1 đến 3
        System.out.println(sb); // in ra: Hlo
    }
}`,
      analysis: [
        "<code>sb.delete(1, 3)</code>: xóa các ký tự từ index 1 đến trước index 3.",
        "⚠️ <strong>Lưu ý:</strong> Vị trí kết thúc <code>end = 3</code> là <strong>không bao gồm</strong> (exclusive). Xóa ký tự index 1 ('e') và index 2 ('l').",
        "Kết quả thu được: 'H' + 'lo' = 'Hlo'."
      ]
    },
    reverse: {
      title: "e. reverse()",
      desc: "Đảo ngược thứ tự toàn bộ các ký tự trong đối tượng đệm hiện tại.",
      code: `class StringBufferReverseExample {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.reverse(); // đảo ngược chuỗi
        System.out.println(sb); // in ra: olleH
    }
}`,
      analysis: [
        "<code>sb.reverse()</code>: đảo ngược chuỗi tại chỗ.",
        "Mọi ký tự ban đầu được sắp xếp theo chiều ngược lại.",
        "Kết quả: 'Hello' chuyển thành 'olleH'."
      ]
    }
  };

  const current = tabs[activeTab];

  return (
    <div className="bg-[#1e1e1e] border border-[#2d2d2d] rounded-3xl p-5 my-6 text-[#d4d4d4] font-sans shadow-md">
      
      {/* Header */}
      <div className="border-b border-[#2d2d2d] pb-3 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 select-none">
        <div>
          <span className="bg-[#3e3e42] text-[#c5c5c5] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Ví dụ code mẫu</span>
          <h5 className="text-sm font-extrabold text-stone-100 mt-1">Các hàm StringBuffer mẫu</h5>
        </div>
        
        {/* Tabs Bar */}
        <div className="flex flex-wrap gap-1.5 bg-[#252526] p-1 rounded-xl border border-[#2d2d2d]">
          {Object.keys(tabs).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border-none cursor-pointer ${
                  isActive
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-transparent text-[#858585] hover:text-[#c5c5c5]"
                }`}
              >
                {tabs[key].title.split(" ")[1]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-[#a5a5a5] mb-3 italic">
        💡 {current.desc}
      </div>

      {/* Code and Analysis Side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Code Visualizer (7 cols) */}
        <div className="lg:col-span-7 bg-[#121110] border border-[#2d2d2d] rounded-2xl p-4 font-mono text-xs overflow-x-auto">
          <pre className="text-stone-300 leading-normal font-mono select-all">
            {current.code}
          </pre>
        </div>

        {/* Code Analysis (5 cols) */}
        <div className="lg:col-span-5 bg-[#252526] border border-[#2d2d2d] rounded-2xl p-4 flex flex-col justify-between text-xs">
          <div>
            <div className="text-[9px] text-[#858585] uppercase font-black tracking-wider mb-2.5 select-none">Giải thích từng dòng lệnh:</div>
            <ul className="space-y-2 text-[#b5b5b5] list-none p-0 m-0">
              {current.analysis.map((item, index) => (
                <li key={index} className="flex gap-2 items-baseline">
                  <span className="text-amber-500 font-bold leading-none select-none">➔</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Special Gotcha Note */}
      {(activeTab === "replace" || activeTab === "delete") && (
        <div className="mt-4 p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 text-[11px] text-amber-300/80 leading-normal flex items-start gap-2 select-none">
          <span className="text-sm leading-none">⚠️</span>
          <div>
            <strong>Ghi nhớ quy tắc đi thi:</strong> Chỉ số <code>end</code> luôn là <strong>không bao gồm</strong> (exclusive). Ví dụ: <code>sb.delete(1, 3)</code> chỉ tác động lên vị trí <code>1</code> và <code>2</code>.
          </div>
        </div>
      )}

    </div>
  );
}
