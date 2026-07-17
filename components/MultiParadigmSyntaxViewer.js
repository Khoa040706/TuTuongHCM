"use client";
import React, { useState } from "react";

export default function MultiParadigmSyntaxViewer() {
  const [selectedParadigm, setSelectedParadigm] = useState("procedural"); // procedural, oop, functional

  const paradigms = {
    procedural: {
      lang: "Pascal (Procedural/Imperative)",
      desc: "Cách tư duy: Chương trình là một chuỗi các câu lệnh tuần tự thực thi từ trên xuống dưới. Tập trung vào việc thay đổi dữ liệu thông qua các lệnh/thủ tục trực tiếp.",
      code: `program HelloWorld;
begin
  WriteLn('Hello World!');
end.`,
      worldview: "Thế giới quan: Máy tính là một bộ máy chấp hành lệnh. Ta ra lệnh cho máy tính làm từng bước một (chạy hàm này, gán biến kia)."
    },
    oop: {
      lang: "Java (Object Oriented)",
      desc: "Cách tư duy: Chương trình là tập hợp các đối tượng (objects) độc lập tương tác với nhau. Mọi dòng lệnh và hàm đều phải được đóng gói gọn gàng bên trong một thực thể lớp.",
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
      worldview: "Thế giới quan: Thế giới là tập hợp các đối tượng. Lớp HelloWorld đóng vai trò là một khuôn mẫu chứa hành vi hiển thị lời chào."
    },
    functional: {
      lang: "LISP / Scheme (Functional)",
      desc: "Cách tư duy: Chương trình là sự kết hợp và đánh giá của các biểu thức toán học (hàm số). Hạn chế tối đa việc thay đổi trạng thái của biến (không dùng phép gán trực tiếp).",
      code: `(display "Hello World!")
(newline)`,
      worldview: "Thế giới quan: Mọi thứ đều là hàm và danh sách. Ta giải bài toán bằng cách lồng các hàm toán học vào nhau để tính toán giá trị."
    }
  };

  const current = paradigms[selectedParadigm];

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          💻 Trình Đối Soạn Cú Pháp Đa Hệ Tư Tưởng (Hello World)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhấp chọn từng mô hình lập trình (paradigm) để thấy thế giới quan khác nhau của ngôn ngữ lập trình qua cùng một ví dụ kinh điển.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {Object.keys(paradigms).map((pKey) => (
          <button
            key={pKey}
            onClick={() => setSelectedParadigm(pKey)}
            className={`flex-1 py-2 px-3 border rounded-xl text-[11px] md:text-xs font-bold transition-all cursor-pointer text-center capitalize ${
              selectedParadigm === pKey
                ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
                : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
            }`}
          >
            {pKey === "procedural" ? "Procedural (Pascal)" : pKey === "oop" ? "OOP (Java)" : "Functional (LISP)"}
          </button>
        ))}
      </div>

      {/* Split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Code display (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md">
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">
              Mã nguồn {current.lang}
            </div>
            <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-3 rounded-xl border border-stone-850 text-[11px] leading-relaxed text-stone-200">
              {current.code}
            </pre>
          </div>
          <div className="text-[10px] text-stone-500 mt-3 border-t border-stone-850 pt-2 font-sans text-center">
            {selectedParadigm === "procedural" && "💡 Pascal thực thi tuần tự tuyến tính trong khối Begin-End."}
            {selectedParadigm === "oop" && "💡 Java bắt buộc bọc mọi thứ trong Class HelloWorld."}
            {selectedParadigm === "functional" && "💡 LISP sử dụng cú pháp dấu ngoặc đơn lồng danh sách."}
          </div>
        </div>

        {/* Paradigm explanation (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-1">Mô tả tư duy</div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {current.desc}
              </p>
            </div>

            <div className="border-t pt-3">
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-1">Thế giới quan (World View)</div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans italic">
                "{current.worldview}"
              </p>
            </div>
          </div>

          <div className="bg-amber-50/20 border border-amber-250 rounded-xl p-3 text-[10px] text-amber-900 mt-4 leading-relaxed font-sans">
            <strong>📌 Điểm mấu chốt:</strong> Lập trình hướng đối tượng (OOP) không chỉ là cú pháp khác biệt, mà là một cách thay đổi hoàn toàn **mẫu hình tư duy giải quyết bài toán** so với lập trình thủ tục (Procedural).
          </div>
        </div>

      </div>

    </div>
  );
}
