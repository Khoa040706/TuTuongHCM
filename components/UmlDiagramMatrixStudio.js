"use client";
import React, { useState } from "react";
import { 
  GitBranch, 
  Layers, 
  Activity, 
  Clock, 
  Database, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Box, 
  Workflow, 
  Eye,
  FileCode
} from "lucide-react";

export default function UmlDiagramMatrixStudio() {
  const [filterType, setFilterType] = useState("all"); // "all" | "structural" | "behavioral"
  const [selectedDiagram, setSelectedDiagram] = useState("uc");

  const diagrams = {
    uc: {
      code: "UC",
      name: "Use Case Diagram",
      vnName: "Biểu đồ Ca sử dụng",
      category: "behavioral",
      categoryLabel: "Behavioral (Hành vi động)",
      icon: Users,
      color: "from-amber-500 to-orange-500",
      border: "border-amber-400",
      answers: "Hệ thống làm gì (System functions) dưới góc nhìn của người dùng ngoài (Actors)?",
      keyElements: ["Actors (Người dùng / Hệ thống ngoài)", "Use Cases (Hình oval biểu diễn chức năng)", "System Boundary (Ranh giới hệ thống)", "Include / Extend Relationships"],
      example: "Khách hàng (Actor) thực hiện Use Case 'Đăng nhập', 'Tìm kiếm chuyến bay', 'Thanh toán vé máy bay' (Include 'Xác thực OTP')."
    },
    cl: {
      code: "CL",
      name: "Class Diagram",
      vnName: "Biểu đồ Lớp",
      category: "structural",
      categoryLabel: "Structural (Cấu trúc tĩnh)",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      border: "border-blue-400",
      answers: "Có những đối tượng dữ liệu nào tồn tại, thuộc tính gì và liên kết với nhau ra sao?",
      keyElements: ["Classes (Tên lớp, Thuộc tính attributes, Phương thức methods)", "Associations (Quan hệ liên kết)", "Multiplicity (1..1, 1..*)", "Inheritance & Composition"],
      example: "Lớp 'KháchHàng' có quan hệ 1-Nhiều với lớp 'ĐơnHàng', mỗi 'ĐơnHàng' chứa các 'ChiTiếtĐơnHàng' (Composition)."
    },
    sq: {
      code: "SQ",
      name: "Sequence Diagram",
      vnName: "Biểu đồ Tuần tự",
      category: "behavioral",
      categoryLabel: "Behavioral (Hành vi động)",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
      border: "border-purple-400",
      answers: "Các đối tượng trao đổi thông điệp với nhau theo trình tự thời gian cụ thể như thế nào?",
      keyElements: ["Lifelines (Đường sinh tồn của đối tượng)", "Activation Bars (Thanh kích hoạt xử lý)", "Synchronous / Asynchronous Messages (Mũi tên thông điệp)", "Return Messages"],
      example: "User nhấn 'Nạp tiền' -> WebApp gọi API BankGateway -> BankGateway trừ tiền ngân hàng -> Trả kết quả thành công về WebApp -> WebApp hiển thị cho User."
    },
    ac: {
      code: "AC",
      name: "Activity Diagram",
      vnName: "Biểu đồ Hoạt động / Quy trình",
      category: "behavioral",
      categoryLabel: "Behavioral (Hành vi động)",
      icon: Workflow,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-400",
      answers: "Quy trình nghiệp vụ gồm các bước tuần tự, rẽ nhánh điều kiện và song song nào?",
      keyElements: ["Initial / Final States (Nút bắt đầu & Kết thúc)", "Action States (Hành động)", "Decision Diamonds (Rẽ nhánh điều kiện IF-ELSE)", "Fork / Join Bars (Xử lý song song)"],
      example: "Quy trình duyệt đơn vay: Kiểm tra lịch sử tín dụng CIC -> NẾU CIC tốt THÌ song song: [Thẩm định tài sản] & [Xác minh thu nhập] -> Ký duyệt hợp đồng."
    },
    st: {
      code: "ST",
      name: "State Machine Diagram",
      vnName: "Biểu đồ Trạng thái",
      category: "behavioral",
      categoryLabel: "Behavioral (Hành vi động)",
      icon: Activity,
      color: "from-rose-500 to-red-500",
      border: "border-rose-400",
      answers: "Một đối tượng thay đổi qua những trạng thái nào trong suốt vòng đời khi gặp sự kiện?",
      keyElements: ["States (Trạng thái: Mới tạo, Đã thanh toán, Đang giao...)", "Transitions (Mũi tên chuyển trạng thái)", "Events / Triggers (Sự kiện kích hoạt)", "Guard Conditions (Điều kiện rào chắn)"],
      example: "Vòng đời đơn hàng: [Tạo mới] --(Khách thanh toán)--> [Đã thanh toán] --(Kho xuất hàng)--> [Đang giao] --(Khách nhận hàng)--> [Hoàn thành]."
    },
    cm: {
      code: "CM",
      name: "Component / Deployment Diagram",
      vnName: "Biểu đồ Thành phần & Triển khai",
      category: "structural",
      categoryLabel: "Structural (Cấu trúc tĩnh)",
      icon: Box,
      color: "from-indigo-500 to-violet-500",
      border: "border-indigo-400",
      answers: "Hệ thống phần mềm được đóng gói thành các module nào và triển khai lên hạ tầng phần cứng nào?",
      keyElements: ["Components (Module phần mềm, thư viện DLL/JAR)", "Interfaces (Cổng kết nối REST API)", "Nodes (Server vật lý, Cloud VM, Docker Containers)", "Artifacts (File đóng gói .war, .apk)"],
      example: "Ứng dụng React Frontend triển khai trên Vercel Node, giao tiếp qua HTTPS với Spring Boot Backend chạy trên AWS EC2 và cơ sở dữ liệu PostgreSQL."
    }
  };

  const filteredKeys = Object.keys(diagrams).filter((key) => {
    if (filterType === "all") return true;
    return diagrams[key].category === filterType;
  });

  const current = diagrams[selectedDiagram] || diagrams.uc;

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Thư Viện 6 Biểu Đồ UML & Đối Chiếu Tĩnh – Động
            </h2>
            <p className="text-xs text-slate-400">
              Khám phá hệ thống ngôn ngữ mô hình hóa trực quan chuẩn quốc tế UML và câu hỏi cốt lõi mỗi biểu đồ giải quyết.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              filterType === "all" ? "bg-purple-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Tất cả 6 Diagrams
          </button>
          <button
            onClick={() => setFilterType("structural")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              filterType === "structural" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Structural (Tĩnh)
          </button>
          <button
            onClick={() => setFilterType("behavioral")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              filterType === "behavioral" ? "bg-amber-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Behavioral (Động)
          </button>
        </div>
      </div>

      {/* Grid of 6 UML Diagram Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        {filteredKeys.map((key) => {
          const item = diagrams[key];
          const isSelected = selectedDiagram === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedDiagram(key)}
              className={`p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.border} ring-2 ring-purple-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-slate-900 text-slate-200">
                    {item.code}
                  </span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white truncate">{item.name}</h3>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.vnName}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px]">
                <span className={item.category === "structural" ? "text-blue-400" : "text-amber-400"}>
                  {item.category === "structural" ? "● Tĩnh" : "● Động"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-dive Selected UML Diagram Card */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                <current.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
                  <span className="text-xs text-slate-400">({current.vnName})</span>
                </div>
                <span className={`text-xs font-semibold ${current.category === "structural" ? "text-blue-400" : "text-amber-400"}`}>
                  Phân loại: {current.categoryLabel}
                </span>
              </div>
            </div>

            <span className="text-xs font-mono font-bold bg-slate-900 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800">
              Ký hiệu chuẩn: [{current.code}]
            </span>
          </div>

          {/* Question Answered */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold uppercase text-purple-400 block mb-1">
              Câu hỏi cốt lõi biểu đồ này giải quyết:
            </span>
            <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
              👉 {current.answers}
            </p>
          </div>

          {/* Key Elements & Use Case Example */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-xs font-bold uppercase text-cyan-400 block mb-2">
                Các thành phần & Ký hiệu chính:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.keyElements.map((el, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400 block mb-2">
                  Ví dụ ứng dụng thực tế:
                </span>
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  &quot;{current.example}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
