"use client";
import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Code, ShieldCheck } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function FormingLinkedListComparison() {
  const [activeTab, setActiveTab] = useState("compare");

  const codeWay1 = `// Cách 1: Tạo thủ công bằng ListNode (Xây từ cuối lên đầu)
ListNode<String> node3 = new ListNode<String>("a3", null);
ListNode<String> node2 = new ListNode<String>("a2", node3);
ListNode<String> node1 = new ListNode<String>("a1", node2);
ListNode<String> head  = new ListNode<String>("a0", node1);`;

  const codeWay2 = `// Cách 2: Dùng addFirst() (Hướng đối tượng & Đóng gói)
LinkedList<String> list = new LinkedList<String>();
list.addFirst("a3");
list.addFirst("a2");
list.addFirst("a1");
list.addFirst("a0");`;

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-5 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            So sánh & Đánh giá VI.2 & VI.3
          </span>
          <span className="text-xs text-slate-500 font-mono">Forming a Linked List</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          So sánh 2 Cách khởi tạo Linked List (<code className="text-purple-700 font-mono">Tạo thủ công</code> vs <code className="text-purple-700 font-mono">addFirst()</code>)
        </h3>
      </div>

      {/* Dual Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* WAY 1: Manual ListNode Creation */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-800 text-xs font-mono flex items-center gap-1.5">
              <Code className="w-4 h-4 text-slate-600" />
              CÁCH 1: TẠO THỦ CÔNG BẰNG LISTNODE
            </span>
            <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
              Manual Node Wiring
            </span>
          </div>

          <div className="bg-[#1e1e1e] p-3 rounded-lg font-mono text-[11px] leading-relaxed text-[#d4d4d4] overflow-x-auto border border-[#2d2d2d]">
            <pre dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeWay1) }} />
          </div>

          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-start gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Phải tạo từ cuối:</strong> Phải tạo node3 ("a3") trước, sau đó mới tạo node2, node1, head.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Tốn biến trung gian:</strong> Sau khi xây xong, các biến <code>node1, node2, node3</code> không còn dùng nữa nhưng vẫn chiếm bộ nhớ Stack.</span>
            </div>
          </div>
        </div>

        {/* WAY 2: Using addFirst() */}
        <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-purple-200 pb-2">
            <span className="font-bold text-purple-950 text-xs font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              CÁCH 2: DÙNG ADDFIRST() (KHUYÊN DÙNG)
            </span>
            <span className="text-[10px] font-mono font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded">
              OOP Encapsulation
            </span>
          </div>

          <div className="bg-[#1e1e1e] p-3 rounded-lg font-mono text-[11px] leading-relaxed text-[#d4d4d4] overflow-x-auto border border-[#2d2d2d]">
            <pre dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeWay2) }} />
          </div>

          <div className="space-y-1.5 text-xs text-purple-950">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Đóng gói hoàn hảo (Encapsulation):</strong> Không cần quan tâm <code>addFirst()</code> liên kết con trỏ bên trong như thế nào.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Mã nguồn ngắn gọn & thực tế:</strong> Không tạo biến trung gian lãng phí, sát với lập trình Java chuyên nghiệp.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Result Output Box */}
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-slate-200 font-mono text-xs">
        <span className="text-purple-400 font-bold block mb-2 text-[11px] uppercase tracking-wider">
          RESULT: CẢ 2 CÁCH ĐỀU TẠO RA CÙNG 1 CẤU TRÚC LINKED LIST:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto text-xs py-1">
          <span className="bg-purple-600 text-white font-bold px-2 py-0.5 rounded">head</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
          <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded text-white">a0</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
          <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded text-white">a1</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
          <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded text-white">a2</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
          <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded text-white">a3</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
          <span className="bg-slate-950 text-slate-500 border border-slate-800 px-2.5 py-1 rounded font-bold">null</span>
        </div>
      </div>
    </div>
  );
}
