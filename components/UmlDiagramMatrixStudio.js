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
  FileCode,
  Tag,
  HelpCircle
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
      accentBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      answers: "Hệ thống làm gì (System functions) dưới góc nhìn của người dùng ngoài (Actors)?",
      keyElements: [
        "Actors (Người dùng / Hệ thống ngoài tương tác)",
        "Use Cases (Hình oval biểu diễn chức năng hệ thống)",
        "System Boundary (Hộp ranh giới phạm vi hệ thống)",
        "Include / Extend Relationships (Quan hệ bao hàm và mở rộng)"
      ],
      example:
        "Khách hàng (Actor) thực hiện Use Case 'Đăng nhập', 'Tìm kiếm chuyến bay', 'Thanh toán vé' (Include 'Xác thực OTP').",
      notationHint: "Ký hiệu: Người que (Actor), Hình bầu dục (Use Case), Mũi tên đứt nét có nhãn «include» / «extend»."
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
      accentBg: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      answers: "Có những đối tượng dữ liệu nào tồn tại, thuộc tính gì và liên kết với nhau ra sao?",
      keyElements: [
        "Classes (Khối 3 ngăn: Tên lớp, Thuộc tính attributes, Phương thức methods)",
        "Associations (Đường thẳng biểu diễn quan hệ liên kết)",
        "Multiplicity (Bội số quan hệ: 1..1, 1..*, 0..1)",
        "Inheritance & Composition (Quan hệ kế thừa và hợp thành)"
      ],
      example:
        "Lớp 'KháchHàng' có quan hệ 1-Nhiều với lớp 'ĐơnHàng', mỗi 'ĐơnHàng' chứa nhiều 'ChiTiếtĐơnHàng' (Composition).",
      notationHint: "Ký hiệu: Hình chữ nhật 3 ngăn, hình thoi đen (Composition), hình thoi trắng (Aggregation), tam giác trắng (Inheritance)."
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
      accentBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      answers: "Các đối tượng trao đổi thông điệp với nhau theo trình tự thời gian cụ thể như thế nào?",
      keyElements: [
        "Lifelines (Đường sinh tồn nét đứt của đối tượng)",
        "Activation Bars (Thanh chữ nhật kích hoạt xử lý)",
        "Synchronous Messages (Mũi tên đặc: Gọi hàm đồng bộ)",
        "Return Messages (Mũi tên đứt nét: Trả về kết quả)"
      ],
      example:
        "User nhấn 'Nạp tiền' ➔ WebApp gọi API BankGateway ➔ BankGateway trừ tiền ngân hàng ➔ Trả kết quả thành công về WebApp ➔ WebApp hiển thị cho User.",
      notationHint: "Ký hiệu: Trục thời gian chạy từ trên xuống dưới; mũi tên có nhãn hàm và tham số."
    },
    ac: {
      code: "AC",
      name: "Activity Diagram",
      vnName: "Biểu đồ Hoạt động / Luồng công việc",
      category: "behavioral",
      categoryLabel: "Behavioral (Hành vi động)",
      icon: Workflow,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-400",
      accentBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      answers: "Quy trình nghiệp vụ gồm các bước tuần tự, rẽ nhánh điều kiện và xử lý song song nào?",
      keyElements: [
        "Initial / Final States (Chấm tròn đen bắt đầu & Vòng tròn mắt bò kết thúc)",
        "Action States (Hình chữ nhật bo tròn góc)",
        "Decision Diamonds (Hình thoi rẽ nhánh điều kiện [Guard Condition])",
        "Fork / Join Bars (Thanh đen đặc tách / gom luồng song song)"
      ],
      example:
        "Quy trình duyệt đơn vay: Kiểm tra lịch sử tín dụng CIC ➔ NẾU CIC tốt THÌ song song: [Thẩm định tài sản] & [Xác minh thu nhập] ➔ Ký duyệt hợp đồng.",
      notationHint: "Ký hiệu: Rất giống Flowchart nhưng hỗ trợ xử lý song song (Fork/Join) và phân làn bơi (Swimlanes)."
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
      accentBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      answers: "Một đối tượng duy nhất thay đổi qua những trạng thái nào trong suốt vòng đời khi gặp sự kiện?",
      keyElements: [
        "States (Khối bo góc chứa tên trạng thái: Chờ duyệt, Đã duyệt, Đã hủy)",
        "Transitions (Mũi tên chuyển trạng thái có nhãn Event[Guard]/Action)",
        "Initial & Final States (Trạng thái sơ khởi và kết thúc vòng đời)",
        "Self-transitions (Mũi tên vòng lặp lại chính trạng thái đó)"
      ],
      example:
        "Vòng đời đơn hàng: [Tạo mới] --(Khách thanh toán)--> [Đã thanh toán] --(Kho xuất hàng)--> [Đang giao] --(Khách nhận hàng)--> [Hoàn thành].",
      notationHint: "Ký hiệu: Tập trung giải phẫu vòng đời của DUY NHẤT một thực thể trọng yếu."
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
      accentBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      answers: "Hệ thống phần mềm được đóng gói thành các module nào và triển khai lên hạ tầng phần cứng nào?",
      keyElements: [
        "Components (Khối chữ nhật có biểu tượng 2 tab: Module JAR/DLL, Microservice)",
        "Interfaces (Vòng tròn Lollipop cung cấp dịch vụ hoặc hình ổ cắm Socket)",
        "Nodes (Hình lập phương 3D đại diện Server, Cloud VM, Docker Container)",
        "Communication Paths (Giao thức kết nối: HTTPS, TCP/IP, gRPC)"
      ],
      example:
        "Ứng dụng React Frontend triển khai trên Vercel CDN, giao tiếp qua HTTPS với Spring Boot Backend chạy trên AWS EC2 và cơ sở dữ liệu PostgreSQL RDS.",
      notationHint: "Ký hiệu: Khối lập phương 3D (Hardware Node) chứa bên trong các Artifact đóng gói phần mềm."
    }
  };

  const filteredKeys = Object.keys(diagrams).filter((key) => {
    if (filterType === "all") return true;
    return diagrams[key].category === filterType;
  });

  const current = diagrams[selectedDiagram] || diagrams.uc;

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-100">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white font-bold text-xl">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-wider">
                UML 2.5 Catalog
              </span>
              <span className="text-xs text-slate-400">6 Biểu Đồ Trọng Tâm</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              Studio: Thư Viện 6 Biểu Đồ UML & Đối Chiếu Tĩnh – Động
            </h2>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold gap-1">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterType === "all" ? "bg-purple-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Tất cả (6)
          </button>
          <button
            onClick={() => setFilterType("structural")}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterType === "structural" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ● Tĩnh (Structural)
          </button>
          <button
            onClick={() => setFilterType("behavioral")}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterType === "behavioral" ? "bg-amber-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ● Động (Behavioral)
          </button>
        </div>
      </div>

      {/* Grid of 6 UML Diagram Cards: 3 cols on laptop (lg), 6 on xl desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
        {filteredKeys.map((key) => {
          const item = diagrams[key];
          const isSelected = selectedDiagram === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedDiagram(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800/90 ${item.border} ring-2 ring-purple-400/50 shadow-xl scale-[1.02]`
                  : `bg-slate-950/80 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700 text-slate-300`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-black px-2 py-0.5 rounded-md bg-slate-900 text-slate-200 border border-slate-800">
                    {item.code}
                  </span>
                </div>

                {/* Fully visible names without truncate */}
                <h3 className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.vnName}</p>
              </div>

              <div className="mt-3.5 pt-2 border-t border-slate-800/80 text-[10px] font-bold">
                <span className={item.category === "structural" ? "text-blue-400" : "text-amber-400"}>
                  {item.category === "structural" ? "● Cấu trúc tĩnh" : "● Hành vi động"}
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

            <span className="text-xs font-mono font-bold bg-slate-900 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-800">
              Ký hiệu chuẩn: [{current.code}]
            </span>
          </div>

          {/* Question Answered */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold uppercase text-purple-400 block mb-1">
              Câu hỏi cốt lõi biểu đồ này giải quyết:
            </span>
            <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
              👉 {current.answers}
            </p>
          </div>

          {/* Key Elements & Use Case Example */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
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
              <div className="pt-2 text-[11px] text-slate-400 font-mono italic">
                {current.notationHint}
              </div>
            </div>

            <div className="md:col-span-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400 block mb-2">
                  Ví dụ kịch bản ứng dụng thực tế:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium bg-slate-950 p-3 rounded-lg border border-slate-800">
                  {current.example}
                </p>
              </div>
              <div className="text-[11px] text-slate-400">
                Đây là một trong những biểu đồ hay xuất hiện nhất trong các đề thi và đồ án môn học.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
