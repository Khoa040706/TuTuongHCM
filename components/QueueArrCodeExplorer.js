"use client";
import React, { useState } from "react";
import { Code2, Zap, Copy, Check } from "lucide-react";

export default function QueueArrCodeExplorer() {
  const [activeTab, setActiveTab] = useState("offer");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "constructor", label: "QueueArr()", timeComp: "O(1)", spaceComp: "O(N)" },
    { id: "isEmpty", label: "isEmpty()", timeComp: "O(1)", spaceComp: "O(1)" },
    { id: "peek", label: "peek()", timeComp: "O(1)", spaceComp: "O(1)" },
    { id: "poll", label: "poll()", timeComp: "O(1)", spaceComp: "O(1)" },
    { id: "offer", label: "offer()", timeComp: "O(1) / O(N)", spaceComp: "O(1)" },
    { id: "enlargeArr", label: "enlargeArr()", timeComp: "O(N)", spaceComp: "O(N)" },
  ];

  const codeSnippets = {
    constructor: {
      title: "Khởi tạo QueueArr với kích thước mặc định",
      code: `public class QueueArr<E> implements QueueADT<E> {
    private E[] arr;
    private int front, back;
    private int maxSize;
    private final int INITSIZE = 1000;

    public QueueArr() {
        arr = (E[]) new Object[INITSIZE]; // ép kiểu mảng Object sang E[]
        front = 0; // queue rỗng ban đầu
        back = 0;
        maxSize = INITSIZE;
    }
}`,
      notes: [
        "Tạo mảng Object kích thước 1000 rồi ép kiểu sang (E[]).",
        "Ban đầu front = 0, back = 0 (thỏa mãn front == back ➔ Queue rỗng)."
      ]
    },
    isEmpty: {
      title: "Kiểm tra Queue rỗng (Solution 2)",
      code: `public boolean isEmpty() {
    return (front == back); // dùng solution 2 (chừa 1 ô trống)
}`,
      notes: [
        "Theo Solution 2, khi front == back thì Queue hoàn toàn RỖNG.",
        "Độ phức tạp O(1) cực kỳ nhanh."
      ]
    },
    peek: {
      title: "Xem phần tử ở đầu Queue mà không xóa",
      code: `public E peek() {
    if (isEmpty()) return null; // Queue rỗng trả về null
    else return arr[front];     // Trả về phần tử ở vị trí front
}`,
      notes: [
        "Trả về arr[front] mà KHÔNG thay đổi chỉ số front.",
        "Nếu isEmpty() == true, trả về null."
      ]
    },
    poll: {
      title: "Lấy và xóa phần tử ở đầu Queue (dequeue)",
      code: `public E poll() {
    if (isEmpty()) return null;
    
    E obj = arr[front];
    arr[front] = null; // giải phóng tham chiếu ngầm (garbage collection)
    front = (front + 1) % maxSize; // tăng chỉ số theo mảng "tuần hoàn"
    return obj;
}`,
      notes: [
        "Gán arr[front] = null giúp Java Garbage Collector thu hồi bộ nhớ.",
        "Công thức front = (front + 1) % maxSize giúp front xoay vòng về 0 khi đến cuối mảng."
      ]
    },
    offer: {
      title: "Thêm phần tử vào cuối Queue (enqueue)",
      code: `public boolean offer(E o) {
    // Kiểm tra mảng ĐẦY theo Solution 2: (back + 1) % maxSize == front
    if (((back + 1) % maxSize) == front) {
        if (!enlargeArr()) return false; // không đủ bộ nhớ mở rộng
    }
    
    arr[back] = o; // gán phần tử vào vị trí back
    back = (back + 1) % maxSize; // mảng "tuần hoàn"
    return true;
}`,
      notes: [
        "Kiểm tra đầy: ((back + 1) % maxSize) == front.",
        "Nếu đầy ➔ tự động gọi enlargeArr() nhân đôi kích thước mảng.",
        "Gán arr[back] = o rồi tăng back = (back + 1) % maxSize."
      ]
    },
    enlargeArr: {
      title: "Mở rộng mảng tuần hoàn khi bị ĐẦY (private method)",
      code: `private boolean enlargeArr() {
    int newSize = maxSize * 2; // gấp đôi kích thước
    E[] x = (E[]) new Object[newSize];
    if (x == null) return false;

    for (int j = 0; j < maxSize; j++) {
        // copy phần tử bắt đầu từ front trong mảng gốc sang vị trí 0, 1, 2... mảng mới
        x[j] = arr[(front + j) % maxSize];
    }
    
    front = 0; // reset front về 0
    back = maxSize - 1; // back đặt ở vị trí cuối mảng cũ
    arr = x; // trỏ sang mảng mới
    maxSize = newSize;
    return true;
}`,
      notes: [
        "CỰC KỲ QUAN TRỌNG: Phải copy từ (front + j) % maxSize sang mảng mới từ chỉ số 0.",
        "Sau khi copy xong, reset front = 0 và back = maxSize - 1 (mảng cũ).",
        "Độ phức tạp O(N) do phải duyệt qua N phần tử."
      ]
    }
  };

  const current = codeSnippets[activeTab];
  const activeTabInfo = tabs.find((t) => t.id === activeTab);

  const handleCopy = () => {
    if (current?.code) {
      navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold font-mono bg-cyan-100 text-cyan-800 border border-cyan-200 px-2.5 py-1 rounded-full uppercase">
            Mục 7.4 - 7.6
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2">
            Mã nguồn hoàn chỉnh <code className="text-teal-700 font-mono">QueueArr.java</code>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded">
            Time: {activeTabInfo?.timeComp}
          </span>
          <span className="text-xs font-mono font-semibold bg-indigo-100 text-indigo-800 border border-indigo-300 px-2.5 py-1 rounded">
            Space: {activeTabInfo?.spaceComp}
          </span>
        </div>
      </div>

      {/* Tabs Navbar */}
      <div className="bg-slate-100 p-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5 overflow-x-auto my-4 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 text-xs font-mono transition whitespace-nowrap rounded-lg ${
              activeTab === tab.id
                ? "bg-teal-600 text-white font-bold shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        {/* Left 2 Cols: Dark Code Box with Mac Controls */}
        <div className="lg:col-span-2 bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md flex flex-col overflow-hidden">
          {/* Mac OS Window Header */}
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <span className="text-slate-400 text-xs font-sans font-semibold ml-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" /> {current.title}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] font-sans text-slate-400 hover:text-slate-200 transition bg-slate-800/60 hover:bg-slate-800 px-2 py-1 rounded border border-slate-700"
              title="Sao chép mã"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép</span>
                </>
              )}
            </button>
          </div>

          {/* Code Content */}
          <div className="p-4 overflow-x-auto">
            <pre className="text-slate-200 leading-relaxed">
              <code>{current.code}</code>
            </pre>
          </div>
        </div>

        {/* Right 1 Col: Notes Sidebar */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold font-mono text-teal-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500/20" /> Ghi chú giải thích
            </h4>
            <ul className="space-y-2.5">
              {current.notes.map((note, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                  <span className="text-teal-600 font-bold font-mono text-[11px]">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 italic bg-amber-50/60 border-amber-200/80 p-2.5 rounded-lg border">
            💡 <span className="font-semibold text-slate-700">Ghi nhớ:</span> Khi tăng con trỏ <code className="text-teal-700 font-mono font-semibold">front</code> hoặc <code className="text-teal-700 font-mono font-semibold">back</code>, luôn dùng phép chia lấy dư <code className="text-amber-700 font-mono font-semibold">% maxSize</code>.
          </div>
        </div>
      </div>
    </div>
  );
}

