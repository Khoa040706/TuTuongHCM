"use client";
import React, { useState } from "react";
import { PlusCircle, MinusCircle, Search, HelpCircle, Code } from "lucide-react";

export default function CollectionArrayListApiTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  const methods = [
    {
      type: "boolean",
      name: "isEmpty()",
      desc: "Kiểm tra danh sách có rỗng không",
      example: "ArrayList<String> list = new ArrayList<>();\nboolean empty = list.isEmpty(); // true",
      category: "query"
    },
    {
      type: "int",
      name: "size()",
      desc: "Số phần tử thực tế trong danh sách",
      example: "ArrayList<Integer> list = new ArrayList<>();\nlist.add(10);\nint size = list.size(); // 1",
      category: "query"
    },
    {
      type: "boolean",
      name: "add(E e)",
      desc: "Thêm phần tử vào cuối danh sách",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"Hello\"); // thêm vào cuối\nlist.add(\"World\"); // [Hello, World]",
      category: "add"
    },
    {
      type: "void",
      name: "add(int index, E element)",
      desc: "Chèn phần tử vào vị trí chỉ định (index)",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.add(\"B\");\nlist.add(0, \"C\"); // [C, A, B] (chèn C vào đầu, đẩy A và B)",
      category: "add"
    },
    {
      type: "E",
      name: "remove(int index)",
      desc: "Xóa phần tử tại vị trí chỉ định (index)",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nString deleted = list.remove(0); // xóa 'Java' và trả về 'Java'",
      category: "remove"
    },
    {
      type: "boolean",
      name: "remove(Object o)",
      desc: "Xóa lần xuất hiện đầu tiên của phần tử (nếu có)",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.add(\"B\");\nboolean success = list.remove(\"A\"); // xóa 'A', trả về true\n// list còn: [B]",
      category: "remove"
    },
    {
      type: "E",
      name: "get(int index)",
      desc: "Lấy phần tử tại vị trí chỉ định (index)",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"First\");\nString first = list.get(0); // \"First\"",
      category: "query"
    },
    {
      type: "int",
      name: "indexOf(Object o)",
      desc: "Trả về vị trí xuất hiện đầu tiên của phần tử, hoặc -1 nếu không có",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"A\");\nint idx = list.indexOf(\"A\"); // 0\nint notFound = list.indexOf(\"Z\"); // -1",
      category: "query"
    },
    {
      type: "boolean",
      name: "contains(Object elem)",
      desc: "Kiểm tra phần tử có nằm trong danh sách không",
      example: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"OOP\");\nboolean hasOop = list.contains(\"OOP\"); // true\nboolean hasC = list.contains(\"C++\"); // false",
      category: "query"
    }
  ];

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />

      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
        <Code className="w-5 h-5 text-emerald-600" />
        <span>Bảng Phương thức thường dùng & Cú pháp API</span>
      </h4>
      <p className="text-xs text-stone-500 mb-6">
        Click vào mỗi dòng phương thức bên dưới để xem ví dụ code minh họa chi tiết và cách sử dụng thực tế.
      </p>

      {/* API Table */}
      <div className="overflow-hidden border border-stone-200/80 rounded-2xl shadow-sm bg-stone-50/20">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 font-mono text-[10px] text-stone-450 uppercase font-bold">
              <th className="p-3.5 pl-5 w-24">Kiểu trả về</th>
              <th className="p-3.5 w-52">Phương thức</th>
              <th className="p-3.5">Ý nghĩa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-150 font-sans">
            {methods.map((method, idx) => {
              const isSelected = selectedRow === idx;
              let categoryIcon = <HelpCircle className="w-4 h-4 text-stone-400" />;
              
              if (method.category === "add") {
                categoryIcon = <PlusCircle className="w-4 h-4 text-emerald-500 shrink-0" />;
              } else if (method.category === "remove") {
                categoryIcon = <MinusCircle className="w-4 h-4 text-rose-500 shrink-0" />;
              } else if (method.category === "query") {
                categoryIcon = <Search className="w-4 h-4 text-indigo-500 shrink-0" />;
              }

              return (
                <React.Fragment key={idx}>
                  <tr
                    onClick={() => setSelectedRow(isSelected ? null : idx)}
                    className={`cursor-pointer transition-colors duration-200 hover:bg-stone-100/50 ${
                      isSelected ? "bg-stone-100/70" : "bg-white"
                    }`}
                  >
                    <td className="p-3.5 pl-5 font-mono text-stone-500">{method.type}</td>
                    <td className="p-3.5 font-bold font-mono text-stone-850 flex items-center gap-2">
                      {categoryIcon}
                      <span>{method.name}</span>
                    </td>
                    <td className="p-3.5 text-stone-600">{method.desc}</td>
                  </tr>

                  {/* Expandable row for Example Code */}
                  {isSelected && (
                    <tr>
                      <td colSpan={3} className="bg-stone-50/80 p-4 border-t border-stone-200/50">
                        <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block mb-2 font-mono">
                          💻 Ví dụ minh họa Java
                        </span>
                        <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] leading-relaxed text-emerald-300 overflow-x-auto shadow-inner">
                          {method.example}
                        </pre>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
