"use client";
import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  Grid,
  Link,
  Package,
  Zap,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ListChecks,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";

export default function Bai3SummaryDashboard() {
  // State for expand/collapse of individual cards
  const [expandedCards, setExpandedCards] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // Filter state for cards category (All, ADT, Cài đặt, Thư viện & Ứng dụng)
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setExpandedCards({
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
    });
  };

  const collapseAll = () => {
    setExpandedCards({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    });
  };

  // Card definitions
  const cardsData = [
    {
      id: 1,
      category: "adt",
      title: "1. Stack ADT (Ngăn xếp)",
      icon: Layers,
      headerColor: "text-indigo-700",
      badgeStyle: "bg-indigo-100 text-indigo-800",
      iconBg: "bg-indigo-600 text-white",
      hoverBorder: "hover:border-indigo-400",
      badge: "LIFO — Last In, First Out",
      summary: "Hoạt động theo nguyên lý Vào sau ra trước. Các thao tác push, pop, peek diễn ra ở đỉnh (top).",
      details: {
        principle: "LIFO (Last In, First Out) — Phần tử được thêm vào cuối cùng sẽ là phần tử đầu tiên được lấy ra.",
        methods: [
          { name: "push(e)", desc: "Thêm phần tử e vào đỉnh Stack", complexity: "O(1)" },
          { name: "pop()", desc: "Lấy và xóa phần tử ở đỉnh Stack (ném lỗi/null nếu rỗng)", complexity: "O(1)" },
          { name: "peek()", desc: "Xem giá trị phần tử ở đỉnh Stack nhưng không xóa", complexity: "O(1)" },
          { name: "isEmpty()", desc: "Kiểm tra Stack có rỗng không", complexity: "O(1)" },
        ],
        analogy: "Giống như chồng đĩa ăn: đĩa cuối cùng đặt lên chồng sẽ là đĩa đầu tiên được lấy ra.",
        keyTakeaway: "Chỉ truy xuất tại một đầu duy nhất (Đỉnh - Top)."
      }
    },
    {
      id: 2,
      category: "adt",
      title: "2. Queue ADT (Hàng đợi)",
      icon: ArrowRight,
      headerColor: "text-teal-700",
      badgeStyle: "bg-teal-100 text-teal-800",
      iconBg: "bg-teal-600 text-white",
      hoverBorder: "hover:border-teal-400",
      badge: "FIFO — First In, First Out",
      summary: "Hoạt động theo nguyên lý Vào trước ra trước. Thêm ở đuôi (tail) và lấy ra ở đầu (head).",
      details: {
        principle: "FIFO (First In, First Out) — Phần tử vào hàng đợi trước sẽ được xử lý và lấy ra trước.",
        methods: [
          { name: "offer(e) / enqueue(e)", desc: "Thêm phần tử e vào đuôi (tail) của Queue", complexity: "O(1)" },
          { name: "poll() / dequeue()", desc: "Lấy và xóa phần tử ở đầu (head) của Queue", complexity: "O(1)" },
          { name: "peek() / element()", desc: "Xem giá trị phần tử ở đầu Queue nhưng không xóa", complexity: "O(1)" },
          { name: "isEmpty()", desc: "Kiểm tra Queue có rỗng không", complexity: "O(1)" },
        ],
        analogy: "Giống như hàng người xếp hàng mua vé: người đến trước mua vé và rời đi trước.",
        keyTakeaway: "Truy xuất ở cả hai đầu: Thêm ở Đuôi (Rear/Tail), Lấy ở Đầu (Front/Head)."
      }
    },
    {
      id: 3,
      category: "impl",
      title: "3. Cài đặt bằng Array",
      icon: Grid,
      headerColor: "text-purple-700",
      badgeStyle: "bg-purple-100 text-purple-800",
      iconBg: "bg-purple-600 text-white",
      hoverBorder: "hover:border-purple-400",
      badge: "Stack Array & Queue Circular Array",
      summary: "Stack cần quản lý tràn mảng. Queue sử dụng mảng tuần hoàn (Circular Array) và chừa 1 ô trống.",
      details: {
        stackArray: {
          title: "Cài đặt Stack bằng Array",
          points: [
            "Sử dụng biến top khởi tạo = -1.",
            "Thao tác Push: array[++top] = item | Pop: return array[top--].",
            "Tràn mảng (Stack Overflow): Cần kiểm tra top == capacity - 1 để tăng kích thước mảng (gấp đôi)."
          ]
        },
        queueArray: {
          title: "Cài đặt Queue bằng Circular Array",
          points: [
            "Giải quyết vấn đề lãng phí ô nhớ bằng công thức chỉ số tuần hoàn: index = (index + 1) % capacity.",
            "Tránh mơ hồ Full/Empty: Khi head == tail, không rõ Queue Rỗng hay Đầy.",
            "Giải pháp tiêu chuẩn: Chừa lại 1 ô trống (blank slot). Queue Đầy khi (tail + 1) % capacity == head.",
            "Dung lượng lưu trữ thực tế tối đa là capacity - 1."
          ]
        }
      }
    },
    {
      id: 4,
      category: "impl",
      title: "4. Cài đặt bằng LinkedList",
      icon: Link,
      headerColor: "text-cyan-700",
      badgeStyle: "bg-cyan-100 text-cyan-800",
      iconBg: "bg-cyan-600 text-white",
      hoverBorder: "hover:border-cyan-400",
      badge: "BasicLL vs TailedLL",
      summary: "Stack cài đặt ở đầu list. Queue cần TailedLinkedList để thao tác offer/poll đạt O(1).",
      details: {
        stackLL: {
          title: "Stack với LinkedList (BasicLL)",
          points: [
            "Mọi thao tác push, pop, peek đều thực hiện ngay tại đầu danh sách (head).",
            "Đạt hiệu năng O(1) tuyệt đối cho tất cả thao tác.",
            "Không bao giờ bị tràn bộ nhớ tĩnh (không giới hạn capacity như Array)."
          ]
        },
        queueLL: {
          title: "Queue với LinkedList (TailedLL)",
          points: [
            "Thêm ở cuối (offer) và Lấy ở đầu (poll).",
            "Bắt buộc dùng TailedLinkedList (có biến con trỏ tail quản lý nút cuối).",
            "Nếu không có tail, việc thêm ở cuối sẽ mất thời gian O(N) để duyệt từ head đến nút cuối."
          ]
        }
      }
    },
    {
      id: 5,
      category: "java",
      title: "5. Thư viện Java (java.util)",
      icon: Package,
      headerColor: "text-emerald-700",
      badgeStyle: "bg-emerald-100 text-emerald-800",
      iconBg: "bg-emerald-600 text-white",
      hoverBorder: "hover:border-emerald-400",
      badge: "java.util.Stack vs java.util.Queue",
      summary: "Stack kế thừa Vector (Inheritance). Queue là Interface với 2 nhóm phương thức (ném ngoại lệ vs trả null).",
      details: {
        oopDesign: "OOP Design: 2 cách cài đặt — Composition (Ủy nhiệm bao bọc) vs Inheritance (Kế thừa). Composition an toàn hơn vì ẩn các thao tác không thuộc Stack/Queue.",
        javaStack: "java.util.Stack: Là Lớp (Class) kế thừa từ Vector. Đây là quyết định thiết kế Inheritance cũ có nhược điểm làm lộ các phương thức truy cập ngẫu nhiên của Vector.",
        javaQueue: "java.util.Queue: Là Interface, cài đặt phổ biến bằng LinkedList hoặc ArrayDeque.",
        methodsTable: [
          { type: "Thao tác", throwEx: "Ném Ngoại Lệ (Throws Exception)", returnNull: "Trả Giá Trị Đặc Biệt (null / false)" },
          { type: "Thêm (Insert)", throwEx: "add(e)", returnNull: "offer(e)" },
          { type: "Xóa (Remove)", throwEx: "remove()", returnNull: "poll()" },
          { type: "Xem (Examine)", throwEx: "element()", returnNull: "peek()" }
        ]
      }
    },
    {
      id: 6,
      category: "apps",
      title: "6. Ứng dụng & Palindrome",
      icon: Zap,
      headerColor: "text-amber-700",
      badgeStyle: "bg-amber-100 text-amber-800",
      iconBg: "bg-amber-600 text-white",
      hoverBorder: "hover:border-amber-400",
      badge: "Bracket, Postfix & Palindrome Hybrid",
      summary: "Stack: Khớp ngoặc, tính Postfix. Queue: Hàng đợi tác vụ. Kết hợp Stack+Queue kiểm tra Palindrome.",
      details: {
        stackApps: [
          "Bracket Matching: Kiểm tra tính hợp lệ của các cặp dấu ngoặc () [] {} trong trình biên dịch.",
          "Postfix Evaluation: Tính giá trị biểu thức hậu tố mà không cần quan tâm thứ tự ưu tiên toán tử.",
          "Infix → Postfix: Chuyển đổi biểu thức trung tố sang hậu tố bằng thuật toán Shunting-yard.",
          "Call Stack: Quản lý lời gọi hàm và biến cục bộ trong bộ nhớ chương trình."
        ],
        queueApps: [
          "CPU Task Scheduling: Quản lý tiến trình theo thuật toán Round-Robin.",
          "Printer Spooling: Hàng đợi in tài liệu.",
          "BFS (Breadth-First Search): Duyệt đồ thị/cây theo chiều rộng."
        ],
        hybridApp: {
          title: "Ứng dụng minh họa kết hợp Stack + Queue: Kiểm tra Palindrome",
          desc: "Đẩy lần lượt các ký tự vào cả Stack và Queue. Sau đó rút từng ký tự ra (pop() từ Stack cho thứ tự ngược, poll() từ Queue cho thứ tự thuận) để so sánh từng cặp. Nếu tất cả khớp nhau → chuỗi là Palindrome."
        }
      }
    }
  ];

  // Bullet points for bottom section (Section 11 Textbook Summary - all 7 points)
  const summaryBulletPoints = [
    {
      num: 1,
      title: "Stack vs Queue basics",
      content: "Stack hoạt động theo nguyên lý LIFO (Last In, First Out) với các thao tác cốt lõi: push (thêm ở đỉnh), pop (lấy ra ở đỉnh), peek (xem đỉnh). Queue hoạt động theo nguyên lý FIFO (First In, First Out) với các thao tác cốt lõi: offer (thêm ở đuôi), poll (lấy ra ở đầu), peek (xem đầu)."
    },
    {
      num: 2,
      title: "Array implementation",
      content: "Khi cài đặt bằng Mảng (Array): Stack Array cần xử lý tràn mảng (Stack Overflow) khi top vượt capacity. Queue Array cần sử dụng Mảng tuần hoàn (Circular Array) với công thức (i + 1) % N và xử lý trạng thái mơ hồ Full/Empty bằng cách chừa lại 1 ô trống."
    },
    {
      num: 3,
      title: "LinkedList implementation",
      content: "Khi cài đặt bằng Danh sách liên kết (LinkedList): Stack thao tác cực kỳ đơn giản ở đầu danh sách (head) đạt O(1). Queue thêm ở cuối (tail) và lấy ở đầu (head) nên bắt buộc phải sử dụng TailedLinkedList (có con trỏ tail) để thao tác offer đạt O(1)."
    },
    {
      num: 4,
      title: "OOP Design",
      content: "Thiết kế Hướng đối tượng (OOP Design) có 2 cách cài đặt: Composition (Ủy nhiệm / Bao bọc - Stack/Queue chứa một danh sách bên trong) giúp bảo vệ tính đóng gói và an toàn dữ liệu hơn; Inheritance (Kế thừa - kế thừa từ List/Vector) dễ cài đặt nhưng dễ làm lộ phương thức không thuộc ADT."
    },
    {
      num: 5,
      title: "java.util library",
      content: "Trong thư viện java.util: java.util.Stack là lớp kế thừa từ Vector (thiết kế Inheritance). java.util.Queue là một Interface. Queue chia làm 2 bộ phương thức: ném ngoại lệ (add, remove, element) và trả giá trị đặc biệt null/false (offer, poll, peek)."
    },
    {
      num: 6,
      title: "Applications",
      content: "Ứng dụng thực tế: Stack dùng trong kiểm tra khớp dấu ngoặc (bracket matching), tính giá trị biểu thức hậu tố (postfix calculation), chuyển đổi Infix sang Postfix. Ứng dụng minh họa kết hợp cả Stack và Queue là thuật toán kiểm tra chuỗi Palindrome (chuỗi đối xứng)."
    },
    {
      num: 7,
      title: "Key differences",
      content: "Sự khác biệt cốt lõi giữa LIFO (Stack) và FIFO (Queue): Mặc dù cấu trúc dữ liệu đều lưu trữ danh sách phần tử, quy tắc truy xuất dữ liệu ngược nhau hoàn toàn dẫn đến hai tư duy giải quyết bài toán và ứng dụng thực tiễn hoàn toàn khác biệt."
    }
  ];

  const filteredCards = cardsData.filter((card) => {
    if (activeFilter === "all") return true;
    return card.category === activeFilter;
  });

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-3xl shadow-xl p-6 md:p-8 font-sans my-6 w-full max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            DSA BÀI 3 — TỔNG KẾT
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Stack &amp; Queue — Tổng kết toàn diện
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Hệ thống hóa toàn bộ kiến thức về hai cấu trúc dữ liệu trừu tượng (ADT) cốt lõi: <strong className="text-indigo-700 font-semibold">Stack (LIFO)</strong> &amp; <strong className="text-teal-700 font-semibold">Queue (FIFO)</strong>. So sánh chi tiết cài đặt bằng Mảng, Danh sách liên kết, Thiết kế OOP, Thư viện Java và Ứng dụng thực tế.
          </p>

          {/* Controls Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1.5 rounded-xl transition-all font-semibold ${
                  activeFilter === "all"
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Tất cả (6)
              </button>
              <button
                onClick={() => setActiveFilter("adt")}
                className={`px-3 py-1.5 rounded-xl transition-all font-semibold ${
                  activeFilter === "adt"
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                ADT Cơ bản
              </button>
              <button
                onClick={() => setActiveFilter("impl")}
                className={`px-3 py-1.5 rounded-xl transition-all font-semibold ${
                  activeFilter === "impl"
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Cài đặt (Array/LL)
              </button>
              <button
                onClick={() => setActiveFilter("java")}
                className={`px-3 py-1.5 rounded-xl transition-all font-semibold ${
                  activeFilter === "java"
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Java &amp; OOP
              </button>
              <button
                onClick={() => setActiveFilter("apps")}
                className={`px-3 py-1.5 rounded-xl transition-all font-semibold ${
                  activeFilter === "apps"
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Ứng dụng
              </button>
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-indigo-700 border border-slate-200 rounded-xl transition-all flex items-center gap-1.5 font-semibold"
              >
                <ChevronDown className="w-3.5 h-3.5" />
                Mở tất cả
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 rounded-xl transition-all flex items-center gap-1.5 font-semibold"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                Thu gọn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 6 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {filteredCards.map((card) => {
          const Icon = card.icon;
          const isExpanded = expandedCards[card.id];

          return (
            <div
              key={card.id}
              className={`bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-between ${
                isExpanded ? "ring-2 ring-indigo-500/30 border-indigo-300" : ""
              }`}
            >
              <div>
                {/* Card Header & Icon */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${card.iconBg} shadow-sm flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold ${card.headerColor} text-base leading-snug`}>
                        {card.title}
                      </h3>
                      <span className={`text-[11px] font-bold ${card.badgeStyle} px-2 py-0.5 rounded-md inline-block mt-0.5`}>
                        {card.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary text */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                  {card.summary}
                </p>

                {/* Expanded Detailed Section */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-700">
                    {/* Card 1 & 2 Details */}
                    {card.details.principle && (
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                        <span className="font-bold text-slate-900 block mb-1">📌 Nguyên lý cốt lõi:</span>
                        <p className="text-slate-600 leading-relaxed">{card.details.principle}</p>
                      </div>
                    )}

                    {card.details.methods && (
                      <div className="bg-slate-950 text-slate-200 font-mono text-xs p-3.5 rounded-xl border border-slate-800 shadow-sm">
                        <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-slate-800">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="text-[10px] font-sans text-slate-400 ml-2 font-semibold">
                            ⚡ Các phương thức chính:
                          </span>
                        </div>
                        <div className="space-y-2">
                          {card.details.methods.map((m, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
                              <div>
                                <span className="text-teal-400 font-bold">{m.name}</span>
                                <span className="text-slate-400 text-[10px] block font-sans mt-0.5">{m.desc}</span>
                              </div>
                              <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 text-[10px] font-bold">
                                {m.complexity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {card.details.analogy && (
                      <div className="bg-indigo-50 border border-indigo-200 p-3.5 rounded-xl text-indigo-900 text-[11px] leading-relaxed">
                        <span className="font-bold text-indigo-950">💡 Ẩn dụ thực tế: </span>
                        {card.details.analogy}
                      </div>
                    )}

                    {/* Card 3 Details: Array */}
                    {card.details.stackArray && (
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-purple-700 block mb-1.5">🔹 {card.details.stackArray.title}</span>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                            {card.details.stackArray.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-purple-700 block mb-1.5">🔹 {card.details.queueArray.title}</span>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                            {card.details.queueArray.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Card 4 Details: LinkedList */}
                    {card.details.stackLL && (
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-cyan-700 block mb-1.5">🔹 {card.details.stackLL.title}</span>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                            {card.details.stackLL.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-cyan-700 block mb-1.5">🔹 {card.details.queueLL.title}</span>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                            {card.details.queueLL.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Card 5 Details: Java */}
                    {card.details.javaStack && (
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-emerald-800 block mb-1">📐 Thiết kế OOP:</span>
                          <p className="text-slate-600 mb-2 leading-relaxed">{card.details.oopDesign}</p>
                          <p className="text-slate-700 mb-1"><strong>Stack:</strong> {card.details.javaStack}</p>
                          <p className="text-slate-700"><strong>Queue:</strong> {card.details.javaQueue}</p>
                        </div>

                        {/* Methods Comparison Table inside Dark Code Block */}
                        <div className="bg-slate-950 text-slate-200 font-mono text-xs p-3.5 rounded-xl border border-slate-800 shadow-sm overflow-x-auto">
                          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-slate-800">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-sans text-emerald-400 ml-2 font-bold">
                              📊 java.util.Queue - 2 Nhóm Phương Thức:
                            </span>
                          </div>
                          <table className="w-full text-[11px] text-left">
                            <thead>
                              <tr className="border-b border-slate-800 text-slate-400">
                                <th className="p-1.5 font-sans">Thao tác</th>
                                <th className="p-1.5 text-rose-400">Ném Exception</th>
                                <th className="p-1.5 text-emerald-400">Trả null / false</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/80 font-mono">
                              {card.details.methodsTable.slice(1).map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-900/60">
                                  <td className="p-1.5 font-sans text-slate-300">{row.type}</td>
                                  <td className="p-1.5 text-rose-300">{row.throwEx}</td>
                                  <td className="p-1.5 text-emerald-300">{row.returnNull}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Card 6 Details: Apps */}
                    {card.details.stackApps && (
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-amber-800 block mb-1.5">📚 Stack Applications:</span>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                            {card.details.stackApps.map((app, i) => (
                              <li key={i}>{app}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-700">
                          <span className="font-extrabold text-teal-800 block mb-1.5">🔄 Queue Applications:</span>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                            {card.details.queueApps.map((app, i) => (
                              <li key={i}>{app}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
                          <span className="font-bold text-amber-950 block mb-1 flex items-center gap-1.5 text-xs">
                            <ArrowRightLeft className="w-4 h-4 text-amber-700" />
                            {card.details.hybridApp.title}
                          </span>
                          <p className="text-slate-700 text-[11px] leading-relaxed">
                            {card.details.hybridApp.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Action */}
              <button
                onClick={() => toggleCard(card.id)}
                className="mt-4 pt-3 border-t border-slate-200 w-full flex items-center justify-between text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span>{isExpanded ? "Thu gọn chi tiết" : "Xem chi tiết"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Section ("📌 Cần nhớ (tổng)") */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 md:p-8 text-amber-900 shadow-sm">
        <div className="flex items-center gap-3 mb-6 border-b border-amber-200/80 pb-4">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-200">
            <ListChecks className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              📌 Cần nhớ (tổng)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tóm tắt 7 điểm cốt lõi từ Mục 11 - Sách giáo khoa DSA Bài 3
            </p>
          </div>
        </div>

        <div className="space-y-3.5">
          {summaryBulletPoints.map((item) => (
            <div
              key={item.num}
              className="bg-white/80 hover:bg-white border border-amber-200/80 rounded-xl p-4 transition-all duration-200 flex items-start gap-4 shadow-sm group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                {item.num}
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold text-amber-900 text-sm sm:text-base mb-1 flex items-center gap-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2 font-medium">
        <ShieldCheck className="w-4 h-4 text-indigo-600" />
        <span>StudyMaster DSA Components — Bài 3: Stack &amp; Queue ADT</span>
      </div>
    </div>
  );
}
