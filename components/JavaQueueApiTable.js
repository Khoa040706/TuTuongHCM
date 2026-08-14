"use client";

import React, { useState } from "react";
import {
  Layers,
  AlertTriangle,
  Info,
  CheckCircle2,
  AlertCircle,
  Code2,
  BookOpen,
  CornerDownRight,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function JavaQueueApiTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  const methods = [
    {
      id: "element",
      returnType: "E",
      name: "element()",
      desc: "Lấy (không xóa) phần tử đầu queue",
      whenEmptyText: "ném lỗi NoSuchElementException nếu rỗng",
      isException: true,
      badgeText: "Ném Exception",
      badgeClass: "bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-2 py-0.5 rounded",
      details:
        "Phương thức element() lấy (nhưng không xóa) phần tử ở đầu (head) của hàng đợi. Nếu hàng đợi đang rỗng, phương thức này sẽ ngay lập tức ném ra ngoại lệ java.util.NoSuchElementException.",
      note: "Khác biệt quan trọng: element() KHÔNG CÓ trong QueueADT tự viết của môn học.",
      example:
        "Queue<String> queue = new LinkedList<>();\n// Queue đang rỗng\nString item = queue.element(); // ❌ Throws NoSuchElementException!"
    },
    {
      id: "offer",
      returnType: "boolean",
      name: "offer(E o)",
      desc: "Thêm phần tử vào queue, nếu có thể",
      whenEmptyText: "trả false",
      isException: false,
      isNullReturn: false,
      badgeText: "Trả false khi đầy",
      badgeClass: "bg-teal-100 text-teal-800 border border-teal-300 font-mono font-bold px-2 py-0.5 rounded",
      details:
        "Phương thức offer(E o) chèn phần tử được chỉ định vào hàng đợi nếu sức chứa cho phép. Khi hàng đợi có hạn chế sức chứa (bounded queue) bị đầy, offer() trả về false thay vì ném ngoại lệ như add().",
      note: "Thao tác chèn an toàn (tương đương enqueue trong bài học).",
      example:
        "Queue<Integer> queue = new ArrayBlockingQueue<>(2);\nqueue.offer(10); // true\nqueue.offer(20); // true\nboolean success = queue.offer(30); // ⚠️ false (Queue đã đầy)"
    },
    {
      id: "peek",
      returnType: "E",
      name: "peek()",
      desc: "Lấy (không xóa) phần tử đầu, trả về null nếu rỗng",
      whenEmptyText: "trả null",
      isException: false,
      isNullReturn: true,
      badgeText: "Trả null khi rỗng",
      badgeClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold px-2 py-0.5 rounded",
      details:
        "Phương thức peek() lấy (nhưng không xóa) phần tử ở đầu hàng đợi. Nếu hàng đợi rỗng, phương thức sẽ trả về null thay vì ném ngoại lệ.",
      note: "Cách kiểm tra phần tử đầu an toàn nhất trong Java Queue API.",
      example:
        "Queue<String> queue = new LinkedList<>();\nString head = queue.peek(); // ✅ head = null (không bị crash chương trình)"
    },
    {
      id: "poll",
      returnType: "E",
      name: "poll()",
      desc: "Lấy và xóa phần tử đầu; trả null nếu rỗng",
      whenEmptyText: "trả null",
      isException: false,
      isNullReturn: true,
      badgeText: "Trả null khi rỗng",
      badgeClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold px-2 py-0.5 rounded",
      details:
        "Phương thức poll() lấy và xóa phần tử ở đầu hàng đợi. Nếu hàng đợi rỗng, phương thức trả về null.",
      note: "Tương tự dequeue() trong QueueADT bài học nhưng trả về null khi rỗng.",
      example:
        "Queue<String> queue = new LinkedList<>();\nqueue.offer(\"Java\");\nString first = queue.poll(); // \"Java\", queue trở thành rỗng\nString second = queue.poll(); // ✅ second = null"
    },
    {
      id: "remove",
      returnType: "E",
      name: "remove()",
      desc: "Lấy và xóa phần tử đầu; ném lỗi nếu rỗng",
      whenEmptyText: "ném lỗi NoSuchElementException",
      isException: true,
      badgeText: "Ném Exception",
      badgeClass: "bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-2 py-0.5 rounded",
      details:
        "Phương thức remove() lấy và xóa phần tử ở đầu hàng đợi. Nếu hàng đợi rỗng, phương thức sẽ ném ra ngoại lệ java.util.NoSuchElementException.",
      note: "Khác biệt quan trọng: remove() KHÔNG CÓ trong QueueADT tự viết của môn học.",
      example:
        "Queue<String> queue = new LinkedList<>();\n// Queue đang rỗng\nString deleted = queue.remove(); // ❌ Throws NoSuchElementException!"
    }
  ];

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-5">
        <div className="flex items-center gap-3">
          <span className="bg-teal-100 text-teal-800 border border-teal-200 px-3 py-1 rounded-full font-mono text-xs font-bold tracking-wide shrink-0">
            Mục 9
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-600 shrink-0" />
            <span>java.util.interface Queue&lt;E&gt; — Method Summary</span>
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-mono bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
          Interface java.util.Queue&lt;E&gt;
        </span>
      </div>

      {/* Subtitle / User hint */}
      <p className="text-xs md:text-sm text-slate-600 mb-5 leading-relaxed">
        Bảng tóm tắt các phương thức chuẩn trong giao diện <code className="text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/60 font-mono font-semibold">Queue&lt;E&gt;</code> của Java. 
        Nhấp vào từng dòng để xem chi tiết cách hoạt động, so sánh và ví dụ code.
      </p>

      {/* Interactive Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6 bg-white shadow-sm">
        <table className="w-full text-left font-sans text-xs md:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider font-mono">
              <th className="py-3 px-4 w-28 md:w-32">Kiểu trả về</th>
              <th className="py-3 px-4 w-36 md:w-44">Method</th>
              <th className="py-3 px-4">Ý nghĩa</th>
              <th className="py-3 px-4 w-52 md:w-64">Khi rỗng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {methods.map((m) => {
              const isSelected = selectedRow === m.id;
              return (
                <React.Fragment key={m.id}>
                  <tr
                    onClick={() => setSelectedRow(isSelected ? null : m.id)}
                    className={`transition-colors duration-150 ${
                      isSelected
                        ? "bg-teal-50 border-l-4 border-teal-500 shadow-sm border-b border-slate-200 cursor-pointer"
                        : "bg-white hover:bg-teal-50/50 border-b border-slate-200 cursor-pointer"
                    }`}
                  >
                    {/* Return Type */}
                    <td className="py-3.5 px-4 font-mono font-semibold text-teal-700">
                      {m.returnType}
                    </td>

                    {/* Method Name */}
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        {isSelected ? (
                          <ChevronDown className="w-4 h-4 text-teal-600 shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className="text-teal-700">{m.name}</span>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-3.5 px-4 text-slate-700">
                      {m.desc}
                    </td>

                    {/* When Empty Behavior */}
                    <td className="py-3.5 px-4">
                      {m.isException ? (
                        <span className="bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-2 py-0.5 rounded text-xs inline-flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span>ném lỗi NoSuchElementException</span>
                        </span>
                      ) : m.isNullReturn ? (
                        <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold px-2 py-0.5 rounded text-xs inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>trả null</span>
                        </span>
                      ) : (
                        <span className="bg-teal-100 text-teal-800 border border-teal-300 font-mono font-bold px-2 py-0.5 rounded text-xs inline-flex items-center gap-1">
                          <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>trả false</span>
                        </span>
                      )}
                    </td>
                  </tr>

                  {/* Expanded Detail Panel */}
                  {isSelected && (
                    <tr className="bg-slate-50/80">
                      <td colSpan={4} className="p-3 md:p-4 border-b border-slate-200">
                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-800 space-y-3.5">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                            <div className="flex items-center gap-2 font-mono text-sm font-bold text-slate-900">
                              <Code2 className="w-4 h-4 text-teal-600" />
                              <span>Chi tiết phương thức: {m.name}</span>
                            </div>
                            <span className={m.badgeClass}>
                              {m.badgeText}
                            </span>
                          </div>

                          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                            {m.details}
                          </p>

                          {m.note && (
                            <div className="flex items-center gap-2 text-xs md:text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-3">
                              <CornerDownRight className="w-4 h-4 text-amber-600 shrink-0" />
                              <span>{m.note}</span>
                            </div>
                          )}

                          <div>
                            <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold block mb-1.5">
                              Ví dụ minh họa Java:
                            </span>
                            <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 overflow-hidden shadow-sm">
                              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-slate-400 text-[11px]">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                                </div>
                                <span>QueueExample.java</span>
                              </div>
                              <pre className="p-3 bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto">
                                {m.example}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Important Notes Below Table */}
      <div className="space-y-3 mb-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-bold">Kế thừa các method từ java.util.Collection:</strong>{" "}
            <code className="text-slate-800 font-mono text-xs bg-slate-200/70 px-1.5 py-0.5 rounded border border-slate-300">
              add, addAll, clear, contains, containsAll, equals, hashCode, isEmpty, iterator, remove, removeAll, retainAll, size, toArray,...
            </code>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-bold">Ghi chú quan trọng:</strong>{" "}
            <code className="bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-1.5 py-0.5 rounded">element()</code> và{" "}
            <code className="bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-1.5 py-0.5 rounded">remove()</code>{" "}
            <strong className="text-amber-800 font-bold">KHÔNG CÓ</strong> trong QueueADT tự viết của môn học – đây là điểm khác biệt cần lưu ý.
          </div>
        </div>
      </div>

      {/* Callout Warning Box (📌 Cần nhớ) */}
      <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm md:text-base mb-3 border-b border-amber-200/80 pb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>📌 Cần nhớ</span>
        </div>
        <ul className="space-y-2.5 text-xs md:text-sm font-sans">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
            <div>
              <code className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold px-1.5 py-0.5 rounded">peek()</code> /{" "}
              <code className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold px-1.5 py-0.5 rounded">poll()</code> → trả{" "}
              <code className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold px-1.5 py-0.5 rounded">null</code> khi queue rỗng.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
            <div>
              <code className="bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-1.5 py-0.5 rounded">element()</code> /{" "}
              <code className="bg-rose-100 text-rose-800 border border-rose-300 font-mono font-bold px-1.5 py-0.5 rounded">remove()</code> →{" "}
              <strong className="text-rose-900 font-bold">ném exception</strong> khi queue rỗng (khác với peek/poll).
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
            <div>
              <code className="bg-amber-100 text-amber-900 border border-amber-300 font-mono font-bold px-1.5 py-0.5 rounded">element()</code> và{" "}
              <code className="bg-amber-100 text-amber-900 border border-amber-300 font-mono font-bold px-1.5 py-0.5 rounded">remove()</code> không có trong QueueADT tự cài đặt trong bài học.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

