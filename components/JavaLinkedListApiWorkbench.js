"use client";
import React, { useState } from "react";
import { FileCode, Check, Copy, Terminal, BookOpen, Layers } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function JavaLinkedListApiWorkbench() {
  const [activeTab, setActiveTab] = useState("code");
  const [copied, setCopied] = useState(false);

  const javaCode = `import java.util.*;

public class TestLinkedListAPI {

    static void printList(LinkedList<Integer> alist) {
        System.out.print("List is: ");
        for (int i = 0; i < alist.size(); i++) {
            System.out.print(alist.get(i) + "\\t");
        }
        System.out.println();
    }

    // Print elements in the list and also delete them
    static void printListv2(LinkedList<Integer> alist) {
        System.out.print("List is: ");
        while (alist.size() != 0) {
            System.out.print(alist.element() + "\\t");
            alist.removeFirst();
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList<Integer> alist = new LinkedList<Integer>();
        for (int i = 1; i <= 5; i++) {
            alist.add(new Integer(i));
        }

        printList(alist);

        System.out.println("First element: " + alist.getFirst());
        System.out.println("Last element: " + alist.getLast());

        alist.addFirst(888);
        alist.addLast(999);
        printListv2(alist);
        printList(alist);
    }
}`;

  const terminalOutput = `Output Terminal (java TestLinkedListAPI):
--------------------------------------------------
List is: 1	2	3	4	5	
First element: 1
Last element: 5
List is: 888	1	2	3	4	5	999	
List is: `;

  const apiMethods = [
    { method: "add(E e)", returnType: "boolean", desc: "Thêm phần tử vào cuối LinkedList (tương đương addLast)." },
    { method: "addFirst(E e)", returnType: "void", desc: "Chèn phần tử vào đầu danh sách (O(1))." },
    { method: "addLast(E e)", returnType: "void", desc: "Chèn phần tử vào cuối danh sách (O(1))." },
    { method: "get(int index)", returnType: "E", desc: "Lấy phần tử tại vị trí index (O(n))." },
    { method: "getFirst()", returnType: "E", desc: "Lấy phần tử đầu tiên (ném exception nếu rỗng)." },
    { method: "getLast()", returnType: "E", desc: "Lấy phần tử cuối cùng (ném exception nếu rỗng)." },
    { method: "element()", returnType: "E", desc: "Lấy phần tử đầu mà không xóa (tương đương getFirst())." },
    { method: "removeFirst()", returnType: "E", desc: "Xóa và trả về phần tử đầu tiên (O(1))." },
    { method: "removeLast()", returnType: "E", desc: "Xóa và trả về phần tử cuối cùng (O(1))." },
    { method: "size()", returnType: "int", desc: "Trả về số lượng phần tử hiện tại trong LinkedList." }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(javaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-blue-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-blue-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Java API Workbench X.2
              </span>
              <span className="text-xs text-slate-500 font-mono">java.util.LinkedList</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <FileCode className="w-5 h-5 text-blue-600" />
              Thử nghiệm Class java.util.LinkedList & Bảng API Reference
            </h3>
          </div>
        </div>
      </div>

      {/* VS Code Window Container */}
      <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-[#1e1e1e]">
        {/* Title Bar & Tabs */}
        <div className="bg-[#252526] border-b border-[#333333] flex items-center justify-between px-4 py-2">
          {/* Traffic Lights & Tabs */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-1 border-l border-slate-700 pl-3">
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors ${
                  activeTab === "code"
                    ? "bg-[#1e1e1e] text-blue-400 border-t-2 border-blue-500 font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-[#2a2d2e]"
                }`}
              >
                <FileCode className="w-3.5 h-3.5" /> TestLinkedListAPI.java
              </button>
              <button
                onClick={() => setActiveTab("reference")}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors ${
                  activeTab === "reference"
                    ? "bg-[#1e1e1e] text-emerald-400 border-t-2 border-emerald-500 font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-[#2a2d2e]"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" /> API Reference
              </button>
            </div>
          </div>

          {/* Copy Button */}
          {activeTab === "code" && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-[#2a2d2e] hover:bg-[#37373d] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Code"}</span>
            </button>
          )}
        </div>

        {/* Tab Content */}
        {activeTab === "code" ? (
          <div>
            {/* Code View */}
            <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-[#1e1e1e] text-[#d4d4d4]">
              <pre dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(javaCode) }} />
            </div>

            {/* Console Output Panel */}
            <div className="bg-[#181818] border-t border-[#2d2d2d] p-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400 font-bold mb-2 pb-1 border-b border-[#2a2a2a]">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Console Output</span>
              </div>
              <pre className="text-emerald-400/90 whitespace-pre-wrap">{terminalOutput}</pre>
            </div>
          </div>
        ) : (
          /* API Reference Table */
          <div className="p-4 bg-[#1e1e1e] text-slate-200 overflow-x-auto">
            <table className="w-full text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-[#252526] text-slate-300">
                  <th className="p-2.5 text-left font-bold">Method</th>
                  <th className="p-2.5 text-left font-bold">Return Type</th>
                  <th className="p-2.5 text-left font-bold font-sans">Mô tả & Độ phức tạp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {apiMethods.map((m, idx) => (
                  <tr key={idx} className="hover:bg-[#252526]/50">
                    <td className="p-2.5 text-blue-400 font-bold">{m.method}</td>
                    <td className="p-2.5 text-emerald-400">{m.returnType}</td>
                    <td className="p-2.5 text-slate-300 font-sans">{m.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
