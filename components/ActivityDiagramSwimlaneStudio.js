"use client";
import React, { useState } from "react";
import { 
  Workflow, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  GitBranch, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  PackageCheck,
  User,
  ShoppingBag,
  Warehouse
} from "lucide-react";

export default function ActivityDiagramSwimlaneStudio() {
  const [inStockChoice, setInStockChoice] = useState("yes"); // "yes" | "no"
  const [currentStep, setCurrentStep] = useState(0);

  // Steps flow:
  // Step 0: Initial State
  // Step 1: Customer [Place Order]
  // Step 2: Sales Rep [Check Stock]
  // Step 3: Decision [In Stock?] -> Yes/No
  // Step 4 (Yes): Warehouse [Ship Order] / (No): Sales Rep [Create Backorder]
  // Step 5 (Yes): Customer [Receive Order] -> Final Node / (No): Final Node

  const stepLabels = [
    "Sẵn sàng (Initial Node: Điểm bắt đầu)",
    "Bước 1: [Customer] Bấm 'Place Order' gửi đơn hàng",
    "Bước 2: [Sales Rep] Tiếp nhận & 'Check Stock' kiểm tra tồn kho",
    "Bước 3: [Decision Node] Đánh giá điều kiện 'In Stock?' (Có hàng hay không?)",
    inStockChoice === "yes" ? "Bước 4: [Warehouse] Đóng gói & 'Ship Order' giao hàng" : "Bước 4: [Sales Rep] Lập phiếu chờ hàng 'Create Backorder'",
    inStockChoice === "yes" ? "Bước 5: [Customer] Nhận hàng 'Receive Order' & Kết thúc (Final Node)" : "Bước 5: Thông báo khách hàng & Kết thúc luồng (Final Node)"
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Workflow className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Mô Phỏng Luồng Động 3 Làn Bơi (Activity Diagram Swimlanes)
            </h2>
            <p className="text-xs text-slate-400">
              Quan sát trực quan cách công việc được bàn giao (Hand-off) giữa Customer, Sales Rep và Warehouse.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Bắt đầu lại
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep >= 5}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-lg ${
              currentStep >= 5
                ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-500 text-white"
            }`}
          >
            <Play className="w-3.5 h-3.5" /> Bước tiếp theo
          </button>
        </div>
      </div>

      {/* Decision Choice Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 mb-6">
        <div className="flex items-center gap-2 text-xs">
          <GitBranch className="w-4 h-4 text-amber-400" />
          <span className="text-slate-300 font-medium">Tình huống kiểm tra tồn kho tại Decision Node:</span>
        </div>
        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-bold">
          <button
            onClick={() => { setInStockChoice("yes"); setCurrentStep(0); }}
            className={`px-3 py-1 rounded transition-all ${
              inStockChoice === "yes" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Còn hàng (In Stock = Yes)
          </button>
          <button
            onClick={() => { setInStockChoice("no"); setCurrentStep(0); }}
            className={`px-3 py-1 rounded transition-all ${
              inStockChoice === "no" ? "bg-rose-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Hết hàng (In Stock = No)
          </button>
        </div>
      </div>

      {/* 3 Swimlanes Visual Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {/* Lane 1: Customer */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-blue-500/30 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-black uppercase text-blue-400 flex items-center gap-1.5">
              <User className="w-4 h-4" /> Swimlane 1: Customer
            </span>
            <span className="text-[10px] font-mono bg-blue-950/80 text-blue-300 px-1.5 py-0.5 rounded">Tác nhân ngoài</span>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            {/* Initial Node */}
            <div className={`flex items-center gap-2 p-2 rounded-xl transition-all ${currentStep === 0 ? "bg-cyan-500/20 ring-2 ring-cyan-400" : ""}`}>
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shadow">
                <div className="w-4 h-4 rounded-full bg-slate-900"></div>
              </div>
              <span className="text-[11px] font-mono text-slate-300">Initial Node (●)</span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />

            {/* Place Order Activity */}
            <div className={`p-3 rounded-2xl border transition-all text-center w-full max-w-[200px] ${
              currentStep === 1 
                ? "bg-blue-600 text-white border-blue-300 shadow-xl scale-105 animate-pulse" 
                : currentStep > 1 
                  ? "bg-blue-950/40 border-blue-500/40 text-blue-200"
                  : "bg-slate-900 border-slate-800 text-slate-400"
            }`}>
              <span className="text-xs font-extrabold block">Place Order</span>
              <span className="text-[10px] opacity-80">(Khách đặt đơn hàng)</span>
            </div>

            {inStockChoice === "yes" && (
              <>
                <div className="h-16 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-slate-600">-- chờ xử lý --</span>
                </div>
                {/* Receive Order Activity */}
                <div className={`p-3 rounded-2xl border transition-all text-center w-full max-w-[200px] ${
                  currentStep === 5 
                    ? "bg-emerald-600 text-white border-emerald-300 shadow-xl scale-105 animate-pulse" 
                    : "bg-slate-900 border-slate-800 text-slate-400"
                }`}>
                  <span className="text-xs font-extrabold block">Receive Order</span>
                  <span className="text-[10px] opacity-80">(Khách nhận kiện hàng)</span>
                </div>
              </>
            )}
          </div>
          <div className="text-[10px] text-slate-500 text-center font-mono">Bắt đầu & Nhận giá trị</div>
        </div>

        {/* Lane 2: Sales Rep */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-black uppercase text-purple-400 flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4" /> Swimlane 2: Sales Rep
            </span>
            <span className="text-[10px] font-mono bg-purple-950/80 text-purple-300 px-1.5 py-0.5 rounded">Business Worker</span>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            {/* Check Stock Activity */}
            <div className={`p-3 rounded-2xl border transition-all text-center w-full max-w-[200px] ${
              currentStep === 2 
                ? "bg-purple-600 text-white border-purple-300 shadow-xl scale-105 animate-pulse" 
                : currentStep > 2 
                  ? "bg-purple-950/40 border-purple-500/40 text-purple-200"
                  : "bg-slate-900 border-slate-800 text-slate-400"
            }`}>
              <span className="text-xs font-extrabold block">Check Stock</span>
              <span className="text-[10px] opacity-80">(Kiểm tra tồn kho)</span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />

            {/* Decision Node */}
            <div className={`p-2.5 rounded-xl border transition-all text-center ${
              currentStep === 3 
                ? "bg-amber-600 text-white border-amber-300 shadow-xl scale-105" 
                : "bg-slate-900 border-slate-800 text-slate-400"
            }`}>
              <span className="text-xs font-mono font-bold block">◆ In Stock?</span>
              <span className="text-[10px] opacity-80 font-mono">[{inStockChoice === "yes" ? "Yes: Còn hàng" : "No: Hết hàng"}]</span>
            </div>

            {inStockChoice === "no" && (
              <>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
                <div className={`p-3 rounded-2xl border transition-all text-center w-full max-w-[200px] ${
                  currentStep === 4 
                    ? "bg-rose-600 text-white border-rose-300 shadow-xl scale-105 animate-pulse" 
                    : "bg-slate-900 border-slate-800 text-slate-400"
                }`}>
                  <span className="text-xs font-extrabold block">Create Backorder</span>
                  <span className="text-[10px] opacity-80">(Lập phiếu chờ hàng)</span>
                </div>
              </>
            )}
          </div>
          <div className="text-[10px] text-slate-500 text-center font-mono">Kiểm duyệt & Xử lý nghiệp vụ</div>
        </div>

        {/* Lane 3: Warehouse */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-black uppercase text-emerald-400 flex items-center gap-1.5">
              <Warehouse className="w-4 h-4" /> Swimlane 3: Warehouse
            </span>
            <span className="text-[10px] font-mono bg-emerald-950/80 text-emerald-300 px-1.5 py-0.5 rounded">Business Worker</span>
          </div>

          <div className="space-y-4 flex flex-col items-center justify-center flex-1">
            {inStockChoice === "yes" ? (
              <div className={`p-3 rounded-2xl border transition-all text-center w-full max-w-[200px] ${
                currentStep === 4 
                  ? "bg-emerald-600 text-white border-emerald-300 shadow-xl scale-105 animate-pulse" 
                  : currentStep > 4 
                    ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                    : "bg-slate-900 border-slate-800 text-slate-400"
              }`}>
                <span className="text-xs font-extrabold block">Ship Order</span>
                <span className="text-[10px] opacity-80">(Xuất kho & Vận chuyển)</span>
              </div>
            ) : (
              <div className="text-xs text-slate-500 italic text-center p-4">
                Không kích hoạt nhánh kho khi hết hàng (No).
              </div>
            )}
          </div>
          <div className="text-[10px] text-slate-500 text-center font-mono">Vận hành xuất kho</div>
        </div>
      </div>

      {/* Step Status Bar */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs">
            Step {currentStep}/5
          </div>
          <span className="text-xs sm:text-sm font-bold text-slate-200">
            {stepLabels[currentStep]}
          </span>
        </div>
      </div>
    </div>
  );
}
