"use client";
import React, { useState } from "react";
import { 
  Users, 
  Box, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Building2
} from "lucide-react";

export default function BusinessUseCaseVisualizerStudio() {
  const [selectedElement, setSelectedElement] = useState("boundary");

  const elements = {
    boundary: {
      title: "Business System Boundary",
      type: "Khung Ranh Giới Doanh Nghiệp",
      desc: "Khung chữ nhật đại diện cho toàn bộ tổ chức 'Order Fulfillment Business'. Các Business Use Case nằm bên trong là các năng lực tạo giá trị của doanh nghiệp.",
      rule: "Mô tả toàn bộ doanh nghiệp như một 'Hộp đen' (Black-Box), không đi sâu vào việc xử lý thủ công hay bằng phần mềm."
    },
    customer: {
      title: "Primary Business Actor: Customer",
      type: "Tác nhân chính (Bên ngoài)",
      desc: "Khách hàng là người khởi tạo nhu cầu mua hàng và trực tiếp nhận giá trị là đơn hàng được giao tận nơi.",
      rule: "Ký hiệu: Người que có gạch chéo (/) trên đầu thể hiện cấp độ Business Actor."
    },
    supplier: {
      title: "External Business Actor: Supplier",
      type: "Tác nhân hỗ trợ (Bên ngoài)",
      desc: "Nhà cung cấp tương tác với doanh nghiệp để nhập thêm hàng hóa vào kho hoặc tiếp nhận hàng hoàn trả.",
      rule: "Ký hiệu: Người que có gạch chéo (/) kết nối với các Use Case tiếp nhận và bổ sung hàng."
    },
    placeOrder: {
      title: "Business Use Case: Place Order",
      type: "Ca sử dụng nghiệp vụ (Tạo giá trị)",
      desc: "Hoạt động nghiệp vụ cho phép khách hàng chọn món hàng, thanh toán và xác nhận đặt mua thành công.",
      rule: "Ký hiệu: Hình Oval có gạch chéo (/) ở góc trên bên trái để phân biệt với System Use Case."
    },
    fulfillOrder: {
      title: "Business Use Case: Fulfill Order",
      type: "Ca sử dụng nghiệp vụ (Tạo giá trị)",
      desc: "Chuỗi hoạt động từ đóng gói, xuất kho cho đến khi vận chuyển giao hàng tận tay khách hàng.",
      rule: "Khách hàng nhận được kết quả quan sát được có giá trị thực tế."
    },
    replenishStock: {
      title: "Business Use Case: Replenish Stock",
      type: "Ca sử dụng nghiệp vụ (Tạo giá trị)",
      desc: "Quy trình làm việc với nhà cung ứng để nhập thêm hàng vào kho khi lượng tồn kho xuống dưới định mức.",
      rule: "Tương tác trực tiếp với Actor Supplier."
    }
  };

  const current = elements[selectedElement];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Trực Quan Hóa Sơ Đồ Business Use Case (Black-Box View)
            </h2>
            <p className="text-xs text-slate-400">
              Nhấn vào từng thành phần để khám phá ký hiệu gạch chéo (/) và ranh giới hệ thống doanh nghiệp.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive UML Canvas Diagram */}
      <div className="p-5 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 mb-6 relative overflow-hidden">
        <div className="text-center mb-4">
          <span className="text-xs font-mono font-bold uppercase text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800">
            Hệ thống: Order Fulfillment Business
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Left: Customer Actor */}
          <div className="md:col-span-3 flex flex-col items-center justify-center space-y-3">
            <button
              onClick={() => setSelectedElement("customer")}
              className={`p-4 rounded-2xl border transition-all text-center group w-full max-w-[200px] ${
                selectedElement === "customer"
                  ? "bg-blue-600/20 border-blue-400 ring-2 ring-blue-400/50 shadow-lg scale-105"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-600"
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300 font-mono font-bold relative">
                <Users className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 text-[11px] bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center">/</span>
              </div>
              <span className="text-xs font-black text-white block">«business actor»</span>
              <span className="text-sm font-bold text-blue-300">Customer</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">(Primary Actor)</span>
            </button>
          </div>

          {/* Center: Business Boundary Box */}
          <div 
            onClick={() => setSelectedElement("boundary")}
            className={`md:col-span-6 p-4 sm:p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer ${
              selectedElement === "boundary"
                ? "bg-slate-900/90 border-cyan-400 ring-2 ring-cyan-400/40 shadow-xl"
                : "bg-slate-900/40 border-slate-700 hover:border-slate-500"
            }`}
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                <Box className="w-4 h-4 text-cyan-400" /> Business System Boundary
              </span>
              <span className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded text-cyan-300">
                Enterprise Black-Box
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedElement("placeOrder"); }}
                className={`p-3 rounded-full border transition-all text-center flex items-center justify-center gap-2 ${
                  selectedElement === "placeOrder"
                    ? "bg-cyan-500/30 border-cyan-400 ring-2 ring-cyan-400 shadow scale-105"
                    : "bg-slate-950 border-slate-800 hover:border-cyan-500/50"
                }`}
              >
                <span className="text-xs font-mono font-bold text-cyan-400">(/)</span>
                <span className="text-xs font-bold text-slate-100">Place Order</span>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); setSelectedElement("fulfillOrder"); }}
                className={`p-3 rounded-full border transition-all text-center flex items-center justify-center gap-2 ${
                  selectedElement === "fulfillOrder"
                    ? "bg-cyan-500/30 border-cyan-400 ring-2 ring-cyan-400 shadow scale-105"
                    : "bg-slate-950 border-slate-800 hover:border-cyan-500/50"
                }`}
              >
                <span className="text-xs font-mono font-bold text-cyan-400">(/)</span>
                <span className="text-xs font-bold text-slate-100">Fulfill Order</span>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); setSelectedElement("replenishStock"); }}
                className={`p-3 rounded-full border transition-all text-center flex items-center justify-center gap-2 sm:col-span-2 ${
                  selectedElement === "replenishStock"
                    ? "bg-cyan-500/30 border-cyan-400 ring-2 ring-cyan-400 shadow scale-105"
                    : "bg-slate-950 border-slate-800 hover:border-cyan-500/50"
                }`}
              >
                <span className="text-xs font-mono font-bold text-cyan-400">(/)</span>
                <span className="text-xs font-bold text-slate-100">Replenish Stock</span>
              </button>
            </div>
          </div>

          {/* Right: Supplier Actor */}
          <div className="md:col-span-3 flex flex-col items-center justify-center space-y-3">
            <button
              onClick={() => setSelectedElement("supplier")}
              className={`p-4 rounded-2xl border transition-all text-center group w-full max-w-[200px] ${
                selectedElement === "supplier"
                  ? "bg-purple-600/20 border-purple-400 ring-2 ring-purple-400/50 shadow-lg scale-105"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-600"
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center text-purple-300 font-mono font-bold relative">
                <Users className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 text-[11px] bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center">/</span>
              </div>
              <span className="text-xs font-black text-white block">«business actor»</span>
              <span className="text-sm font-bold text-purple-300">Supplier</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">(External Actor)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Element Detail Card */}
      {current && (
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="font-extrabold text-sm sm:text-base text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {current.title}
            </h3>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {current.type}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {current.desc}
          </p>
          <div className="p-2.5 rounded-lg bg-slate-900 text-xs text-amber-300 font-mono">
            📌 Quy tắc chuẩn UML: {current.rule}
          </div>
        </div>
      )}
    </div>
  );
}
