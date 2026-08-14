"use client";
import React, { useState } from "react";
import { Network, Layers, Zap, Clock, CheckCircle2, AlertTriangle, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

export default function DsaBai2SummaryMindMap() {
  const [selectedBranch, setSelectedBranch] = useState("tll");

  const branches = [
    {
      id: "array",
      name: "1. Array (Mảng)",
      badge: "Kế thừa / Động",
      color: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      summary: "Kích thước cố định hoặc mở rộng mảng. Truy cập ngẫu nhiên get(i) cực nhanh O(1).",
      complexity: { get: "O(1)", addFirst: "O(n)", addLast: "O(1)*", removeFirst: "O(n)" },
      pros: ["Truy cập O(1) ngẫu nhiên", "Bộ nhớ liên tục, cache-friendly"],
      cons: ["Thao tác chèn/xóa ở đầu O(n) phải dồn mảng", "Tốn công re-allocate khi đầy"]
    },
    {
      id: "bll",
      name: "2. BasicLinkedList",
      badge: "Single Pointer",
      color: "bg-slate-700",
      lightBg: "bg-slate-50",
      borderColor: "border-slate-300",
      textColor: "text-slate-700",
      summary: "Danh sách liên kết đơn cơ bản chỉ giữ duy nhất con trỏ head.",
      complexity: { get: "O(n)", addFirst: "O(1)", addLast: "O(n)", removeFirst: "O(1)" },
      pros: ["Thêm/xóa đầu O(1) siêu nhanh", "Kích thước linh hoạt không lo đầy bộ nhớ"],
      cons: ["addLast O(n) phải duyệt từ head tới cuối", "Không truy cập ngẫu nhiên O(1) được"]
    },
    {
      id: "ell",
      name: "3. EnhancedLinkedList",
      badge: "Current Pointer",
      color: "bg-purple-600",
      lightBg: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      summary: "Thêm con trỏ current cho phép addAfter(current, item) và removeAfter(current).",
      complexity: { addAfter: "O(1)", removeAfter: "O(1)", search: "O(n)" },
      pros: ["Thao tác chèn/xóa ở giữa O(1) nếu đã có con trỏ current", "Quy ước current=null hỗ trợ chèn/xóa đầu"],
      cons: ["Phải quản lý vị trí current chính xác", "Cần cẩn thận xử lý null"]
    },
    {
      id: "tll",
      name: "4. TailedLinkedList",
      badge: "Head + Tail",
      color: "bg-amber-600",
      lightBg: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      summary: "Thêm con trỏ tail trỏ tới node cuối, tối ưu addLast từ O(n) thành O(1).",
      complexity: { addLast: "O(1)", addFirst: "O(1)", removeFirst: "O(1)", removeLast: "O(n)" },
      pros: ["addLast O(1) cực kỳ hiệu quả mà không cần duyệt list"],
      cons: ["Nguyên tắc 'No free lunch': phải bảo trì tail trong mọi hàm update", "4 boundary cases dễ nhầm"]
    },
    {
      id: "cll",
      name: "5. CircularLinkedList",
      badge: "Circular Ring",
      color: "bg-teal-600",
      lightBg: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-700",
      summary: "Node cuối (tail) có tail.next trỏ ngược về head, tạo thành vòng khép kín.",
      complexity: { cycle: "Vô tận", addFirst: "O(1)", addLast: "O(1)" },
      pros: ["Lặp vòng liên tục không bao giờ gặp null", "Thích hợp ứng dụng Round-Robin chia sẻ tài nguyên CPU"],
      cons: ["Phải xử lý cẩn thận điều kiện dừng khi duyệt", "Dễ gây lặp vô tận nếu sai logic"]
    },
    {
      id: "dll",
      name: "6. DoublyLinkedList",
      badge: "Prev + Next",
      color: "bg-indigo-600",
      lightBg: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      summary: "Mỗi node chứa cả 2 con trỏ prev và next, cho phép duyệt 2 chiều tiến/lùi.",
      complexity: { traverse2Way: "O(n)", removeNode: "O(1)*", addBefore: "O(1)*" },
      pros: ["Duyệt tiến và lùi linh hoạt", "Xóa node khi có con trỏ tới node đó O(1)"],
      cons: ["Tốn thêm bộ nhớ cho con trỏ prev", "Phải cập nhật cả 2 con trỏ prev & next khi update"]
    },
    {
      id: "api",
      name: "7. Java API LinkedList",
      badge: "java.util.LinkedList",
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      summary: "Thư viện có sẵn của Java chuẩn hóa List interface, cài đặt theo kiểu Doubly Linked List.",
      complexity: { builtIn: "Tối ưu sẵn", add: "O(1)", get: "O(n)", removeFirst: "O(1)" },
      pros: ["Đầy đủ method tiện ích: addFirst, addLast, removeFirst, element, get..."],
      cons: ["Phân biệt với các class tự viết trong bài thi/lab", "Không nhầm lẫn với ListInterface tự định nghĩa"]
    }
  ];

  const activeData = branches.find((b) => b.id === selectedBranch) || branches[3];

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-purple-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mind Map Tổng Kết XII.1
              </span>
              <span className="text-xs text-slate-500 font-mono">Bản đồ Kiến thức Bài 2</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <Network className="w-5 h-5 text-purple-600" />
              Sơ đồ Tư duy Tổng hợp Kiến thức List ADT (Bài 2)
            </h3>
          </div>
        </div>
      </div>

      {/* Center Hub & Branch Selector */}
      <div className="mb-6">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-md">
            <Layers className="w-4 h-4" /> CẤU TRÚC DỮ LIỆU BÀI 2 (LIST ADT)
          </span>
        </div>

        {/* Interactive Buttons Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
          {branches.map((b) => {
            const isSelected = b.id === selectedBranch;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(b.id)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? `${b.borderColor} ${b.lightBg} ring-2 ring-purple-400 font-bold shadow-md`
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className={`w-2.5 h-2.5 rounded-full ${b.color}`} />
                  <span className="text-xs font-bold truncate">{b.name}</span>
                </div>
                <span className={`text-[10px] font-mono block ${b.textColor}`}>{b.badge}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Branch Details */}
      <div className={`p-5 rounded-2xl border ${activeData.borderColor} ${activeData.lightBg} transition-all`}>
        <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-full ${activeData.color}`} />
            <h4 className="font-bold text-slate-900 text-base">{activeData.name}</h4>
            <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${activeData.color} text-white`}>
              {activeData.badge}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-700 mb-4 font-sans leading-relaxed">{activeData.summary}</p>

        {/* Complexity Grid & Pros/Cons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Complexity Box */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
            <h5 className="text-xs font-bold text-slate-800 font-mono mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-600" /> Độ Phức Tạp (Complexity)
            </h5>
            <div className="space-y-1 text-xs font-mono">
              {Object.entries(activeData.complexity).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-slate-100 py-1">
                  <span className="text-slate-500">{k}:</span>
                  <span className="font-bold text-purple-700">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros Box */}
          <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-sm">
            <h5 className="text-xs font-bold text-emerald-800 font-mono mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Ưu Điểm Nổi Bật
            </h5>
            <ul className="space-y-1 text-xs text-slate-700">
              {activeData.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Box */}
          <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-sm">
            <h5 className="text-xs font-bold text-amber-800 font-mono mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> Lưu Ý & Nhược Điểm
            </h5>
            <ul className="space-y-1 text-xs text-slate-700">
              {activeData.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
