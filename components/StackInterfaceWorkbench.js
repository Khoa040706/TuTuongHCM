"use client";
import React, { useState } from "react";
import { FileCode, Check, Copy, Terminal, Layers } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function StackInterfaceWorkbench() {
  const [activeTab, setActiveTab] = useState("interface");
  const [copied, setCopied] = useState(false);

  const files = {
    interface: {
      name: "StackADT.java",
      badge: "Interface",
      desc: "Khai báo hợp đồng các phương thức cốt lõi cho Stack ADT",
      code: `// StackADT.java
import java.util.*;

public interface StackADT <E> {
    // kiểm tra stack rỗng hay không
    public boolean empty();

    // lấy phần tử ở đỉnh stack (không xóa)
    public E peek() throws EmptyStackException;

    // lấy và xóa phần tử ở đỉnh stack
    public E pop() throws EmptyStackException;

    // đưa phần tử vào đỉnh stack
    public void push(E item);
}`,
      output: `Khai báo Interface StackADT thành công.
Sẵn sàng cho các lớp cài đặt (StackArr, StackLinkedList...).`
    },
    usage: {
      name: "TestUsage.java",
      badge: "Test Client",
      desc: "Ví dụ minh họa cách gọi push, pop, peek theo LIFO",
      code: `// TestUsage.java
import java.util.*;

public class TestUsage {
    public static void main(String[] args) {
        Stack<String> s = new Stack<String>();

        s.push("a");
        s.push("b");
        s.push("c");

        String d = s.peek(); // d = "c" (xem đỉnh, không xóa)
        System.out.println("peek(): " + d);

        s.pop();             // xóa "c" khỏi đỉnh

        s.push("e");
        s.push("e");
        s.pop();             // xóa "e" khỏi đỉnh

        System.out.println("Stack size: " + s.size());
    }
}`,
      output: `Output Terminal:
--------------------------------------------------
peek(): c
Stack size: 3
(Các phần tử trong stack: "a", "b", "e")`
    }
  };

  const activeFile = files[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-indigo-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-indigo-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                IDE Workbench §1.4 & §1.5
              </span>
              <span className="text-xs text-slate-500 font-mono">StackADT Interface & Usage</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <FileCode className="w-5 h-5 text-indigo-600" />
              Interface StackADT.java & Chương trình Minh họa Cách Dùng
            </h3>
          </div>
        </div>
      </div>

      {/* VS Code Window Container */}
      <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-[#1e1e1e]">
        {/* Title Bar & Tabs */}
        <div className="bg-[#252526] border-b border-[#333333] flex items-center justify-between px-4 py-2">
          {/* Traffic Lights & File Tabs */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-1 border-l border-slate-700 pl-3">
              {Object.entries(files).map(([key, f]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors ${
                    activeTab === key
                      ? "bg-[#1e1e1e] text-indigo-400 border-t-2 border-indigo-500 font-bold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-[#2a2d2e]"
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" /> {f.name}
                </button>
              ))}
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-[#2a2d2e] hover:bg-[#37373d] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Code"}</span>
          </button>
        </div>

        {/* Code Content View */}
        <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-[#1e1e1e] text-[#d4d4d4]">
          <pre dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(activeFile.code) }} />
        </div>

        {/* Terminal Output */}
        <div className="bg-[#181818] border-t border-[#2d2d2d] p-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400 font-bold mb-2 pb-1 border-b border-[#2a2a2a]">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Console Output ({activeFile.name})</span>
          </div>
          <pre className="text-emerald-400/90 whitespace-pre-wrap">{activeFile.output}</pre>
        </div>
      </div>
    </div>
  );
}
