"use client";
import React, { useState } from "react";
import { Grid, ShieldAlert, CheckCircle2, Code, ArrowRight } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function TllBoundaryMatrixCard() {
  const [activeCase, setActiveCase] = useState("1B");

  const casesData = {
    "1A": {
      title: "Case 1A: current != null && current != tail",
      badge: "CHÈN GIỮA DANH SÁCH",
      needTailUpdate: false,
      desc: "Chèn node mới vào vị trí giữa 2 node đã có. Con trỏ tail KHÔNG thay đổi.",
      code: `if (current != null) {
    current.setNext(new ListNode<E>(item, current.getNext()));
    // current != tail nên tail giữ nguyên!
}`
    },
    "1B": {
      title: "Case 1B: current != null && current == tail",
      badge: "CHÈN SAU TAIL CŨ",
      needTailUpdate: true,
      desc: "Chèn sau node cuối cùng. BẮT BUỘC cập nhật tail trỏ sang node mới!",
      code: `if (current != null) {
    current.setNext(new ListNode<E>(item, current.getNext()));
    if (current == tail) {
        tail = current.getNext(); // Cập nhật tail = node mới!
    }
}`
    },
    "2A": {
      title: "Case 2A: current == null && tail != null",
      badge: "CHÈN ĐẦU (LIST CÓ ĐỒNG CƠ)",
      needTailUpdate: false,
      desc: "Chèn vào đầu danh sách đã chứa sẵn phần tử. Con trỏ head thay đổi, tail KHÔNG thay đổi.",
      code: `else { // current == null
    head = new ListNode<E>(item, head);
    // tail != null nên tail giữ nguyên!
}`
    },
    "2B": {
      title: "Case 2B: current == null && tail == null",
      badge: "CHÈN ĐẦU (LIST RỖNG)",
      needTailUpdate: true,
      desc: "Chèn vào danh sách rỗng. Node mới vừa là head vừa là tail! BẮT BUỘC cập nhật tail = head.",
      code: `else { // current == null
    head = new ListNode<E>(item, head);
    if (tail == null) {
        tail = head; // Cập nhật tail = head!
    }
}`
    }
  };

  const currentInfo = casesData[activeCase];

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            Ma trận Trường hợp Biên VIII.3
          </span>
          <span className="text-xs text-slate-500 font-mono">TailedLinkedList addAfter Matrix</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          Ma trận 4 Trường hợp Biên khi cài đặt <code className="text-purple-700 font-mono">addAfter()</code> trong TailedLinkedList
        </h3>
      </div>

      {/* Matrix Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
        {Object.keys(casesData).map((key) => {
          const item = casesData[key];
          const isActive = activeCase === key;

          return (
            <button
              key={key}
              onClick={() => setActiveCase(key)}
              className={`p-3 rounded-xl text-left border font-mono transition-all ${
                isActive
                  ? "bg-purple-950 text-white border-purple-800 shadow-md ring-2 ring-purple-400/40"
                  : "bg-purple-50/50 text-slate-700 border-purple-100 hover:bg-purple-100/60"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs">CASE {key}</span>
                {item.needTailUpdate ? (
                  <span className="text-[9px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-bold">
                    CỬA BẪY (SỬA TAIL)
                  </span>
                ) : (
                  <span className="text-[9px] bg-slate-200 text-slate-700 px-1 py-0.5 rounded">
                    TAIL KO ĐỔI
                  </span>
                )}
              </div>
              <span className="text-[10px] opacity-80 block truncate font-sans">
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Case Inspection Card */}
      <div className="bg-slate-900 text-slate-200 rounded-xl p-4 border border-slate-800 space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-purple-400 text-xs flex items-center gap-2">
            <Grid className="w-4 h-4" />
            {currentInfo.title}
          </span>
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded ${
              currentInfo.needTailUpdate
                ? "bg-amber-400 text-slate-950"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {currentInfo.needTailUpdate ? "⚠️ PHẢI CẬP NHẬT TAIL" : "✅ TAIL KHÔNG ĐỔI"}
          </span>
        </div>

        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          {currentInfo.desc}
        </p>

        {/* Code view */}
        <div className="bg-[#1e1e1e] p-3 rounded-lg text-xs leading-relaxed overflow-x-auto border border-[#2d2d2d]">
          <pre dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(currentInfo.code) }} />
        </div>
      </div>
    </div>
  );
}
