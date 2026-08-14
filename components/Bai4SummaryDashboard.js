"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Repeat,
  Layers,
  Zap,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Check,
  Flame,
  Award
} from "lucide-react";

export default function Bai4SummaryDashboard() {
  const [activeTab, setActiveTab] = useState("pillars"); // "pillars", "fifolifo", "compare", "quiz"
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  // FIFO vs LIFO Interactive Simulation
  const [simStep, setSimStep] = useState(0);

  const fifoLifoSteps = [
    {
      step: 0,
      title: "1. Khởi động: Gọi hàm đệ quy f(1)",
      beforeAction: "Thực hiện lệnh TRƯỚC đệ quy ➔ In '1'",
      stackState: ["f(1)"],
      afterAction: "Chưa chạy (đang chờ trong Stack)",
      orderBefore: ["1"],
      orderAfter: []
    },
    {
      step: 1,
      title: "2. Đi sâu: f(1) gọi f(2)",
      beforeAction: "Thực hiện lệnh TRƯỚC đệ quy ➔ In '2'",
      stackState: ["f(2)", "f(1)"],
      afterAction: "Chưa chạy (đang chờ trong Stack)",
      orderBefore: ["1", "2"],
      orderAfter: []
    },
    {
      step: 2,
      title: "3. Đi sâu: f(2) gọi f(3) (Base Case)",
      beforeAction: "Thực hiện lệnh TRƯỚC đệ quy ➔ In '3' (Chạm đáy)",
      stackState: ["f(3) (BASE)", "f(2)", "f(1)"],
      afterAction: "Bắt đầu Unwinding! Pop f(3) ➔ In '3' SAU",
      orderBefore: ["1", "2", "3"],
      orderAfter: ["3"]
    },
    {
      step: 3,
      title: "4. Quay lui: Pop f(2)",
      beforeAction: "Đã hoàn thành trước đó",
      stackState: ["f(2)", "f(1)"],
      afterAction: "Thực hiện lệnh SAU đệ quy khi pop ➔ In '2'",
      orderBefore: ["1", "2", "3"],
      orderAfter: ["3", "2"]
    },
    {
      step: 4,
      title: "5. Kết thúc: Pop f(1)",
      beforeAction: "Đã hoàn thành trước đó",
      stackState: ["f(1)"],
      afterAction: "Thực hiện lệnh SAU đệ quy khi pop ➔ In '1'",
      orderBefore: ["1", "2", "3"],
      orderAfter: ["3", "2", "1"]
    }
  ];

  const currentSim = fifoLifoSteps[simStep];

  // 5 Quiz Questions
  const quizQuestions = [
    {
      id: "q1",
      question: "Một giải thuật đệ quy bắt buộc phải có hai thành phần cốt lõi nào?",
      options: [
        { key: "A", text: "Vòng lặp while và mảng lưu trữ tạm thời" },
        { key: "B", text: "Base Case (Điểm dừng) và Inductive Step (Bước quy nạp thu hẹp bài toán)" },
        { key: "C", text: "Hàm đệ quy chính và Con trỏ Double Pointer" },
        { key: "D", text: "Câu lệnh switch-case và Stack mảng tĩnh" }
      ],
      correct: "B",
      explanation: "Công thức chung của mọi bài đệ quy: Base Case (phiên bản giải trực tiếp) + Inductive Step (đơn giản hóa bài toán và đảm bảo tiến về Base case)."
    },
    {
      id: "q2",
      question: "Các thao tác TRƯỚC và SAU lời gọi đệ quy diễn ra theo thứ tự hàng đợi/ngăn xếp nào?",
      options: [
        { key: "A", text: "Cả hai đều diễn ra theo thứ tự LIFO" },
        { key: "B", text: "Cả hai đều diễn ra theo thứ tự FIFO" },
        { key: "C", text: "TRƯỚC đệ quy theo FIFO (xuôi), SAU đệ quy theo LIFO (ngược)" },
        { key: "D", text: "TRƯỚC đệ quy theo LIFO, SAU đệ quy theo FIFO" }
      ],
      correct: "C",
      explanation: "Lệnh đặt trước lời gọi đệ quy thực thi ngay khi đẩy Stack (theo thứ tự xuôi FIFO), lệnh đặt sau lời gọi đệ quy chỉ thực thi khi Pop Stack Frame trở về (theo thứ tự ngược LIFO)."
    },
    {
      id: "q3",
      question: "Điều gì sẽ xảy ra nếu hàm đệ quy thiếu Base Case hoặc bước Inductive không bao giờ hội tụ về Base Case?",
      options: [
        { key: "A", text: "Chương trình chạy vô tận dẫn đến lỗi StackOverflowError (tràn bộ nhớ Call Stack)" },
        { key: "B", text: "Chương trình tự động chuyển sang vòng lặp for" },
        { key: "C", text: "Hệ điều hành tự động giải phóng biến và trả về 0" },
        { key: "D", text: "Độ phức tạp thời gian tự động giảm về O(1)" }
      ],
      correct: "A",
      explanation: "Nếu không đạt được Base Case, các Stack Frame liên tục được PUSH vào Call Stack vô hạn cho đến khi cạn kiệt bộ nhớ và gây ra ngoại lệ StackOverflowError."
    },
    {
      id: "q4",
      question: "Độ phức tạp thời gian của bài toán Tháp Hà Nội (Towers of Hanoi) với n đĩa là bao nhiêu?",
      options: [
        { key: "A", text: "O(n)" },
        { key: "B", text: "O(n log n)" },
        { key: "C", text: "O(2ⁿ) — Tăng theo cấp số nhân" },
        { key: "D", text: "O(n²)" }
      ],
      correct: "C",
      explanation: "Towers of Hanoi cần f(n) = 2ⁿ - 1 bước di chuyển, do đó độ phức tạp thời gian là O(2ⁿ)."
    },
    {
      id: "q5",
      question: "Vì sao hàm đệ quy Fibonacci ngây thơ fib(n) = fib(n-1) + fib(n-2) lại bị coi là cực kỳ kém hiệu quả?",
      options: [
        { key: "A", text: "Vì Java không hỗ trợ tính toán dãy Fibonacci" },
        { key: "B", text: "Vì phát sinh quá nhiều lời gọi trùng lặp (Duplicate calls) tính lại các giá trị đã biết" },
        { key: "C", text: "Vì không thể xác định được Base Case cho n <= 2" },
        { key: "D", text: "Vì bắt buộc phải dùng mảng phụ trợ" }
      ],
      correct: "B",
      explanation: "fib(n) có cây đệ quy nhị phân O(2ⁿ), cùng một giá trị như fib(3) bị gọi tính lại nhiều lần dẫn đến lãng phí tài nguyên nghiêm trọng."
    }
  ];

  const handleSelectAnswer = (qId, optionKey) => {
    setQuizAnswers({ ...quizAnswers, [qId]: optionKey });
    setShowExplanation({ ...showExplanation, [qId]: true });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm my-6 font-sans">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-100 text-violet-800 border border-violet-200 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
              TỔNG KẾT BÀI 4 — RECURSION, THE MIRRORS
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">
            Dashboard Tổng Kết: Bản Chất Thuật Toán Đệ Quy
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Hệ thống hóa toàn bộ tri thức, cơ chế Call Stack, đối chiếu FIFO/LIFO và trắc nghiệm ôn tập
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto flex-wrap">
          {[
            { id: "pillars", label: "4 Trụ cột" },
            { id: "fifolifo", label: "Mô phỏng FIFO/LIFO" },
            { id: "compare", label: "Đệ quy vs Vòng lặp" },
            { id: "quiz", label: "Trắc nghiệm nhanh" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-violet-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: 4 Pillars of Recursion */}
      {activeTab === "pillars" && (
        <div className="my-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border border-emerald-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold font-mono">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Base Case (Điểm Dừng)</h4>
                    <span className="text-[11px] font-mono text-emerald-700">Trivial Instance</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Là <strong>phiên bản đơn giản nhất của bài toán</strong> có thể giải trực tiếp dễ dàng mà không cần gọi hàm đệ quy thêm (ví dụ: <code>n == 0 ➔ 1</code>, <code>n == null</code>, <code>1 đĩa</code>).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-xs font-mono text-emerald-800 font-semibold">
                ✓ Ngăn chặn lỗi tràn ngăn xếp (StackOverflowError)
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gradient-to-br from-indigo-50/70 via-white to-indigo-50/30 border border-indigo-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold font-mono">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Inductive Step (Bước Quy Nạp)</h4>
                    <span className="text-[11px] font-mono text-indigo-700">Progress to Base Case</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Phải thực hiện hai nhiệm vụ bắt buộc: <strong>Đơn giản hóa bài toán (Simplify)</strong> và <strong>Đảm bảo hội tụ đạt tới Base case</strong> ở một thời điểm xác định (ví dụ: <code>n - 1</code>, <code>n / 2</code>).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-100 text-xs font-mono text-indigo-800 font-semibold">
                ✓ Thu hẹp kích thước bài toán qua từng tầng hàm
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gradient-to-br from-violet-50/70 via-white to-violet-50/30 border border-violet-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold font-mono">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Call Stack &amp; Tự Đồng Dạng</h4>
                    <span className="text-[11px] font-mono text-violet-700">Winding &amp; Unwinding</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Dễ visualize bằng <strong>Stack</strong>: <code>push()</code> khi gọi đệ quy mới (tạo bản sao biến cục bộ) và <code>pop()</code> khi hoàn tất trả kết quả ngược lên caller.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-violet-100 text-xs font-mono text-violet-800 font-semibold">
                ✓ Lệnh trước theo FIFO, lệnh sau theo LIFO
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border border-amber-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold font-mono">
                    4
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Trade-Off Cân Nhắc</h4>
                    <span className="text-[11px] font-mono text-amber-700">Elegant vs Inefficiency</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Đệ quy rất <strong>thanh thoát (elegant), dễ đọc, dễ viết</strong> nhưng <strong>không phải lúc nào cũng hiệu quả nhất</strong> (như Fibonacci bị duplicate calls). Cần cân nhắc dùng vòng lặp hoặc Quy hoạch động khi cần tối ưu.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100 text-xs font-mono text-amber-800 font-semibold">
                ✓ Luôn phân tích chi phí bộ nhớ Stack O(depth)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: FIFO vs LIFO Simulation */}
      {activeTab === "fifolifo" && (
        <div className="my-6 space-y-5">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Mô phỏng Luồng: Thao tác TRƯỚC (FIFO) vs SAU (LIFO)
                </h4>
                <p className="text-xs text-slate-500">
                  Quan sát thứ tự in của lệnh đặt trước và sau lời gọi đệ quy
                </p>
              </div>

              {/* Stepper controls */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  onClick={() => setSimStep((prev) => Math.max(0, prev - 1))}
                  disabled={simStep === 0}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 disabled:opacity-40 text-xs font-bold cursor-pointer"
                >
                  Lùi
                </button>
                <button
                  onClick={() => setSimStep((prev) => Math.min(fifoLifoSteps.length - 1, prev + 1))}
                  disabled={simStep === fifoLifoSteps.length - 1}
                  className="px-4 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-40 text-white text-xs font-bold cursor-pointer shadow-xs"
                >
                  Bước tiếp ({simStep + 1}/5)
                </button>
                <button
                  onClick={() => setSimStep(0)}
                  className="p-1.5 rounded-xl bg-white border border-slate-300 text-slate-600 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Stack Visualizer */}
              <div className="md:col-span-5 bg-slate-50/90 text-slate-800 rounded-2xl p-4 font-mono text-xs flex flex-col justify-between border border-slate-200 shadow-sm">
                <div className="text-[11px] text-slate-500 pb-2.5 border-b border-slate-200 flex items-center justify-between font-bold">
                  <span>CALL STACK FRAMES</span>
                  <span className="text-violet-700 font-bold bg-violet-50 px-2 py-0.5 rounded border border-violet-200">
                    Depth: {currentSim.stackState.length}
                  </span>
                </div>

                <div className="flex flex-col-reverse gap-2 my-auto py-3">
                  {currentSim.stackState.map((frame, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border text-center font-bold shadow-xs transition-all ${
                        idx === 0
                          ? "bg-violet-600 text-white border-violet-700 shadow-md"
                          : "bg-white text-slate-700 border-slate-300"
                      }`}
                    >
                      {frame}
                    </div>
                  ))}
                </div>

                <div className="text-[10px] text-slate-400 text-center pt-2.5 border-t border-slate-200 font-mono">
                  ▲ Đỉnh Stack (Top Frame)
                </div>
              </div>

              {/* Output Columns */}
              <div className="md:col-span-7 space-y-4">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-900 mb-1">
                    <span className="flex items-center gap-1.5">
                      <ArrowDown className="w-4 h-4 text-indigo-600" />
                      1. THAO TÁC TRƯỚC ĐỆ QUY ➔ THỨ TỰ FIFO (XUÔI)
                    </span>
                  </div>
                  <p className="text-xs text-indigo-700 mb-2">{currentSim.beforeAction}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Output:</span>
                    {currentSim.orderBefore.map((v, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-indigo-600 text-white font-mono text-xs font-bold">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-violet-50 border border-violet-200 rounded-xl p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-violet-900 mb-1">
                    <span className="flex items-center gap-1.5">
                      <ArrowUp className="w-4 h-4 text-violet-600" />
                      2. THAO TÁC SAU ĐỆ QUY ➔ THỨ TỰ LIFO (NGƯỢC)
                    </span>
                  </div>
                  <p className="text-xs text-violet-700 mb-2">{currentSim.afterAction}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Output:</span>
                    {currentSim.orderAfter.length === 0 ? (
                      <span className="text-xs font-mono text-slate-400 italic">(chưa pop)</span>
                    ) : (
                      currentSim.orderAfter.map((v, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-violet-600 text-white font-mono text-xs font-bold">
                          {v}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Compare Recursion vs Iteration */}
      {activeTab === "compare" && (
        <div className="my-6">
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs md:text-sm font-sans border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="p-3.5 md:p-4">Tiêu chí So Sánh</th>
                  <th className="p-3.5 md:p-4 text-violet-700">Recursion (Đệ quy)</th>
                  <th className="p-3.5 md:p-4 text-emerald-700">Iteration (Vòng lặp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3.5 md:p-4 font-bold bg-slate-50/50">Cơ chế thực thi</td>
                  <td className="p-3.5 md:p-4">Hàm tự gọi lại chính nó với kích thước nhỏ hơn</td>
                  <td className="p-3.5 md:p-4">Lặp lại khối lệnh với biến đếm vòng lặp (for, while)</td>
                </tr>
                <tr>
                  <td className="p-3.5 md:p-4 font-bold bg-slate-50/50">Điều kiện kết thúc</td>
                  <td className="p-3.5 md:p-4">Chạm <strong>Base Case</strong></td>
                  <td className="p-3.5 md:p-4">Điều kiện kiểm tra vòng lặp trả về <code>false</code></td>
                </tr>
                <tr>
                  <td className="p-3.5 md:p-4 font-bold bg-slate-50/50">Bộ nhớ phụ trợ (Space)</td>
                  <td className="p-3.5 md:p-4 text-rose-700 font-medium">
                    <code>O(depth)</code> cho Call Stack Frames (dễ tràn bộ nhớ)
                  </td>
                  <td className="p-3.5 md:p-4 text-emerald-700 font-medium">
                    <code>O(1)</code> bộ nhớ cố định (tiết kiệm RAM)
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 md:p-4 font-bold bg-slate-50/50">Tốc độ &amp; Hiệu năng</td>
                  <td className="p-3.5 md:p-4">Chậm hơn do overhead tạo frame và chuyển ngữ cảnh</td>
                  <td className="p-3.5 md:p-4">Nhanh hơn, trực tiếp thực thi trên thanh ghi/CPU</td>
                </tr>
                <tr>
                  <td className="p-3.5 md:p-4 font-bold bg-slate-50/50">Độ phức tạp code</td>
                  <td className="p-3.5 md:p-4 text-violet-700 font-bold">
                    Rất ngắn gọn, thanh thoát (elegant), tự nhiên cho Cây/Đồ thị
                  </td>
                  <td className="p-3.5 md:p-4">Dài hơn, phức tạp khi duyệt cấu trúc phi tuyến tính</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Quick Quiz Flashcards */}
      {activeTab === "quiz" && (
        <div className="my-6 space-y-6">
          <div className="flex items-center justify-between bg-violet-50 border border-violet-200 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-violet-950 font-bold text-sm">
              <Award className="w-5 h-5 text-violet-600" />
              Điểm số Ôn tập Nhanh: {calculateScore()} / {quizQuestions.length} câu đúng
            </div>
            <button
              onClick={() => {
                setQuizAnswers({});
                setShowExplanation({});
              }}
              className="px-3 py-1 rounded-xl bg-white border border-violet-200 text-xs font-mono font-bold text-violet-700 hover:bg-violet-100 transition cursor-pointer"
            >
              Làm lại
            </button>
          </div>

          <div className="space-y-4">
            {quizQuestions.map((q, qIdx) => {
              const selected = quizAnswers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correct;

              return (
                <div key={q.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-slate-900">
                      {q.question}
                    </h4>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {q.options.map((opt) => {
                      const isOptionSelected = selected === opt.key;
                      const isOptionCorrect = opt.key === q.correct;

                      let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-100";
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-300";
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-bold ring-1 ring-rose-300";
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          disabled={isAnswered}
                          onClick={() => handleSelectAnswer(q.id, opt.key)}
                          className={`w-full p-3 rounded-xl border text-left text-xs md:text-sm font-sans flex items-center justify-between transition cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono font-bold">{opt.key}.</span>
                            <span>{opt.text}</span>
                          </div>
                          {isAnswered && isOptionCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                          {isAnswered && isOptionSelected && !isOptionCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {isAnswered && (
                    <div className={`p-3 rounded-xl text-xs leading-relaxed border ${
                      isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-amber-50 border-amber-200 text-amber-900"
                    }`}>
                      <strong>{isCorrect ? "✓ Chính xác! " : "✗ Chưa đúng! "}</strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
