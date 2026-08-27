"use client";

import React, { useState } from "react";
import {
  Table,
  Zap,
  Play,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Scale,
  RotateCcw,
  Check,
  Search,
  Plus,
  Trash2,
  BarChart2,
  Users,
  Compass
} from "lucide-react";

export default function CensusTableBenchmark() {
  const unsortedDefault = [5, 7, 71, 50, 23, 4, 6, 15];
  const sortedDefault = [4, 5, 6, 7, 15, 23, 50, 71];

  const [selectedOpIndex, setSelectedOpIndex] = useState(0);
  const [activeIndicesUnsorted, setActiveIndicesUnsorted] = useState([]);
  const [activeIndicesSorted, setActiveIndicesSorted] = useState([]);
  const [targetAge, setTargetAge] = useState(23);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStepMsg, setSimStepMsg] = useState("");

  const operations = [
    {
      id: "search",
      name: "1. Search(age)",
      desc: "Tìm xem có sinh viên nào mang tuổi này không?",
      unsortedTime: "O(n)",
      unsortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      unsortedWhy: "Phải duyệt tuần tự (linear scan) toàn bộ mảng từ đầu đến cuối vì các phần tử nằm lộn xộn không có thứ tự.",
      sortedTime: "O(log n)",
      sortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      sortedWhy: "Dùng tìm kiếm nhị phân (Binary Search): mỗi bước so sánh chia đôi không gian tìm kiếm.",
      winner: "Sorted Array (Nhanh hơn vượt trội)",
      exampleTarget: 23
    },
    {
      id: "insert",
      name: "2. Insert(age)",
      desc: "Thêm một sinh viên mới (chèn tuổi của họ).",
      unsortedTime: "O(1)",
      unsortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      unsortedWhy: "Chỉ cần chèn phần tử mới vào vị trí cuối cùng của mảng (append) mà không cần quan tâm thứ tự.",
      sortedTime: "O(n)",
      sortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      sortedWhy: "Tìm vị trí chèn mất O(log n), nhưng bắt buộc phải dời (shift) toàn bộ các phần tử lớn hơn sang phải để giữ thứ tự sắp xếp.",
      winner: "Unsorted Array (Thao tác Insert cực nhanh O(1))",
      exampleTarget: 30
    },
    {
      id: "findOldest",
      name: "3. FindOldest() / FindYoungest()",
      desc: "Xác định sinh viên lớn tuổi nhất / nhỏ tuổi nhất.",
      unsortedTime: "O(n)",
      unsortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      unsortedWhy: "Phải duyệt qua tất cả n phần tử để so sánh và tìm giá trị lớn nhất / nhỏ nhất.",
      sortedTime: "O(1)",
      sortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      sortedWhy: "Phần tử nhỏ nhất luôn ở index 0 (A[0]), phần tử lớn nhất luôn ở vị trí cuối cùng A[n-1].",
      winner: "Sorted Array (Truy xuất tức thì O(1))",
      exampleTarget: 71
    },
    {
      id: "listSorted",
      name: "4. ListSortedAges()",
      desc: "Liệt kê tuổi các sinh viên theo thứ tự đã sắp xếp.",
      unsortedTime: "O(n log n)",
      unsortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      unsortedWhy: "Phải gọi giải thuật sắp xếp (như Merge Sort, Quick Sort) tốn O(n log n) trước khi duyệt in ra.",
      sortedTime: "O(n)",
      sortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      sortedWhy: "Mảng đã sắp xếp sẵn, chỉ cần duyệt 1 vòng for từ đầu đến cuối để in ra từng phần tử.",
      winner: "Sorted Array (Tiết kiệm toàn bộ chi phí sort)",
      exampleTarget: null
    },
    {
      id: "nextOlder",
      name: "5. NextOlder(age)",
      desc: "Tìm sinh viên có tuổi lớn hơn 'sát' một tuổi cho trước (Successor).",
      unsortedTime: "O(n)",
      unsortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      unsortedWhy: "Phải duyệt qua toàn bộ mảng để so sánh và tìm phần tử nhỏ nhất trong số các phần tử lớn hơn age.",
      sortedTime: "O(log n)",
      sortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      sortedWhy: "Dùng Binary Search để định vị age, phần tử liền kề bên phải (A[index + 1]) chính là NextOlder.",
      winner: "Sorted Array (Định vị tức thì qua Binary Search)",
      exampleTarget: 15
    },
    {
      id: "remove",
      name: "6. Remove(age)",
      desc: "Xóa một sinh viên đã tồn tại (xóa tuổi của họ).",
      unsortedTime: "O(n)",
      unsortedColor: "bg-amber-100 text-amber-800 border-amber-200",
      unsortedWhy: "Tìm vị trí mất O(n); sau đó xóa rồi dồn mảng hoặc đổi chỗ với phần tử cuối cùng rồi giảm size.",
      sortedTime: "O(n)",
      sortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      sortedWhy: "Tìm thấy mất O(log n), nhưng bắt buộc phải dời (shift) tất cả các phần tử bên phải sang trái để lấp chỗ trống.",
      winner: "Cả 2 đều tốn O(n) (Không có cấu trúc nào vượt trội)",
      exampleTarget: 23
    },
    {
      id: "getMedian",
      name: "7. GetMedian()",
      desc: "Xác định tuổi trung vị (median) của các sinh viên.",
      unsortedTime: "O(n log n) / O(n)",
      unsortedColor: "bg-amber-100 text-amber-800 border-amber-200",
      unsortedWhy: "Cách thông thường: Sort mảng O(n log n) rồi lấy A[n/2]. Cách tối ưu: Quickselect mất trung bình O(n).",
      sortedTime: "O(1)",
      sortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      sortedWhy: "Mảng đã có thứ tự, trực tiếp truy cập phần tử ở vị trí giữa A[n/2] với thời gian O(1).",
      winner: "Sorted Array (Truy cập trực tiếp O(1))",
      exampleTarget: 11
    },
    {
      id: "numYounger",
      name: "8. NumYounger(age)",
      desc: "Có bao nhiêu sinh viên trẻ hơn một tuổi cho trước?",
      unsortedTime: "O(n) / O(n log n)",
      unsortedColor: "bg-rose-100 text-rose-800 border-rose-200",
      unsortedWhy: "Phải duyệt qua từng phần tử và đếm nếu A[i] < age (mất O(n)).",
      sortedTime: "O(log n)",
      sortedColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      sortedWhy: "Dùng Binary Search tìm vị trí chèn của age; chỉ số index tìm được chính là số lượng phần tử nhỏ hơn.",
      winner: "Sorted Array (Binary Search cho kết quả ngay)",
      exampleTarget: 23
    }
  ];

  const currentOp = operations[selectedOpIndex];

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Run visual simulation
  const runSimulation = async () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveIndicesUnsorted([]);
    setActiveIndicesSorted([]);
    setSimStepMsg("Bắt đầu mô phỏng thao tác: " + currentOp.name);

    if (currentOp.id === "search" || currentOp.id === "nextOlder" || currentOp.id === "numYounger") {
      const target = currentOp.exampleTarget || 23;
      // 1. Unsorted Linear Scan
      setSimStepMsg(`[Unsorted Array]: Quét tuần tự từng phần tử tìm tuổi ${target}...`);
      for (let i = 0; i < unsortedDefault.length; i++) {
        setActiveIndicesUnsorted([i]);
        await delay(250);
        if (unsortedDefault[i] === target) {
          setSimStepMsg(`[Unsorted Array]: Đã tìm thấy ${target} tại index ${i} sau ${i + 1} phép so sánh!`);
          break;
        }
      }

      await delay(500);

      // 2. Sorted Binary Search
      setSimStepMsg(`[Sorted Array]: Dùng Binary Search tìm ${target} với O(log n)...`);
      let low = 0;
      let high = sortedDefault.length - 1;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        setActiveIndicesSorted([mid]);
        await delay(450);
        if (sortedDefault[mid] === target) {
          setSimStepMsg(`[Sorted Array]: Tìm thấy ${target} tại vị trí giữa (index ${mid}) chỉ sau ít bước so sánh!`);
          break;
        } else if (sortedDefault[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    } else if (currentOp.id === "insert") {
      setSimStepMsg("[Unsorted]: Chèn thẳng 30 vào cuối mảng O(1). [Sorted]: Tìm vị trí index 5 và phải dời 50, 71 sang phải O(n)!");
      setActiveIndicesUnsorted([unsortedDefault.length - 1]);
      setActiveIndicesSorted([5, 6, 7]);
      await delay(800);
    } else if (currentOp.id === "findOldest") {
      setSimStepMsg("[Unsorted]: Phải quét qua tất cả để tìm 71 (O(n)). [Sorted]: Lấy ngay phần tử cuối mảng A[7] = 71 (O(1))!");
      setActiveIndicesUnsorted([0, 1, 2, 3, 4, 5, 6, 7]);
      setActiveIndicesSorted([7]);
      await delay(800);
    } else if (currentOp.id === "getMedian") {
      setSimStepMsg("[Unsorted]: Phải Sort mảng hoặc dùng Quickselect. [Sorted]: Lấy ngay A[n/2] = A[4] = 15 tức thì O(1)!");
      setActiveIndicesUnsorted([0, 1, 2, 3, 4, 5, 6, 7]);
      setActiveIndicesSorted([3, 4]);
      await delay(800);
    } else {
      setSimStepMsg(`Đang chạy phân tích đối đầu cho ${currentOp.name}...`);
      setActiveIndicesUnsorted([0, 1, 2]);
      setActiveIndicesSorted([0, 1, 2]);
      await delay(600);
    }

    setIsSimulating(false);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-5 md:p-7 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5 text-indigo-600" />
            BENCHMARK WORKBENCH • CENSUS PROBLEM
          </div>
          <h3 className="text-lg md:text-xl font-extrabold text-slate-900">
            Bảng So Sánh Đối Đầu 8 Thao Tác: Unsorted vs Sorted Array
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Chọn một trong 8 thao tác khảo sát dân số để xem mô phỏng hoạt họa và đối chiếu độ phức tạp thời gian thực.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
        >
          <Play className="w-4 h-4" />
          Chạy Mô Phỏng Thao Tác Này
        </button>
      </div>

      {/* Operation Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 my-4">
        {operations.map((op, idx) => (
          <button
            key={op.id}
            onClick={() => {
              setSelectedOpIndex(idx);
              setActiveIndicesUnsorted([]);
              setActiveIndicesSorted([]);
              setSimStepMsg("");
            }}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
              selectedOpIndex === idx
                ? "bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-300"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
            }`}
          >
            <span className="text-xs font-bold leading-tight block line-clamp-1">{op.name.split(". ")[1]}</span>
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200/50">
              <span className={`text-[10px] font-mono px-1 rounded ${selectedOpIndex === idx ? "bg-indigo-700 text-indigo-100" : "bg-slate-200 text-slate-700"}`}>
                #{idx + 1}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Live Simulation Step Message */}
      {simStepMsg && (
        <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-semibold text-indigo-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>{simStepMsg}</span>
        </div>
      )}

      {/* Visual Side-by-side Arrays Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {/* Unsorted Array Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              Unsorted Array (Mảng chưa sắp xếp)
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold font-mono border ${currentOp.unsortedColor}`}>
              {currentOp.unsortedTime}
            </span>
          </div>

          {/* Array visualization */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs overflow-x-auto">
            <div className="text-[10px] text-slate-400 font-mono mb-1">Index: [ 0, 1, 2, 3, 4, 5, 6, 7 ]</div>
            <div className="flex items-center gap-1.5">
              {unsortedDefault.map((val, idx) => {
                const isActive = activeIndicesUnsorted.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`flex-1 min-w-[36px] h-11 rounded-lg flex flex-col items-center justify-center font-mono font-bold text-xs border transition-all ${
                      isActive
                        ? "bg-rose-500 text-white border-rose-600 scale-105 shadow-md ring-2 ring-rose-300"
                        : "bg-slate-50 text-slate-800 border-slate-200"
                    }`}
                  >
                    <span>{val}</span>
                    <span className={`text-[9px] opacity-70 ${isActive ? "text-white" : "text-slate-400"}`}>i:{idx}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-600 leading-relaxed bg-white/70 p-3 rounded-xl border border-slate-200/70">
            <strong className="text-slate-800 block mb-0.5 font-bold">Cơ chế & Lý do:</strong>
            {currentOp.unsortedWhy}
          </div>
        </div>

        {/* Sorted Array Box */}
        <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Sorted Array (Mảng đã sắp xếp)
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold font-mono border ${currentOp.sortedColor}`}>
              {currentOp.sortedTime}
            </span>
          </div>

          {/* Array visualization */}
          <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs overflow-x-auto">
            <div className="text-[10px] text-slate-400 font-mono mb-1">Index: [ 0, 1, 2, 3, 4, 5, 6, 7 ] (Tăng dần)</div>
            <div className="flex items-center gap-1.5">
              {sortedDefault.map((val, idx) => {
                const isActive = activeIndicesSorted.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`flex-1 min-w-[36px] h-11 rounded-lg flex flex-col items-center justify-center font-mono font-bold text-xs border transition-all ${
                      isActive
                        ? "bg-emerald-500 text-white border-emerald-600 scale-105 shadow-md ring-2 ring-emerald-300"
                        : "bg-emerald-50/40 text-emerald-950 border-emerald-200"
                    }`}
                  >
                    <span>{val}</span>
                    <span className={`text-[9px] opacity-70 ${isActive ? "text-white" : "text-emerald-600"}`}>i:{idx}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-600 leading-relaxed bg-white/70 p-3 rounded-xl border border-emerald-200/70">
            <strong className="text-slate-800 block mb-0.5 font-bold">Cơ chế & Lý do:</strong>
            {currentOp.sortedWhy}
          </div>
        </div>
      </div>

      {/* Winner & Insight Callout */}
      <div className="p-3.5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl flex flex-wrap items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase rounded">
            Kết luận Thao tác #{selectedOpIndex + 1}
          </span>
          <span className="text-xs font-bold text-slate-100">{currentOp.winner}</span>
        </div>
        <div className="text-xs text-slate-300 font-mono">
          Unsorted: <span className="text-rose-400 font-bold">{currentOp.unsortedTime}</span> vs Sorted:{" "}
          <span className="text-emerald-400 font-bold">{currentOp.sortedTime}</span>
        </div>
      </div>
    </div>
  );
}
