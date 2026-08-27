"use client";
import React, { useState } from "react";
import { 
  Cpu, 
  Database, 
  Users, 
  FileText, 
  Layers, 
  ArrowRight, 
  RefreshCw, 
  CheckCircle, 
  Sparkles, 
  HardDrive, 
  ShieldAlert, 
  Server,
  Play,
  RotateCcw
} from "lucide-react";

export default function InformationSystemArchitectureStudio() {
  const [activeStep, setActiveStep] = useState(0); // 0: Input, 1: Process, 2: Output, 3: Feedback
  const [selectedComponent, setSelectedComponent] = useState("hardware");
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simLog, setSimLog] = useState([
    "Sẵn sàng mô phỏng luồng chuyển đổi dữ liệu thời gian thực."
  ]);

  const ipoSteps = [
    {
      id: "input",
      title: "1. Input (Đầu vào)",
      icon: Database,
      badge: "Raw Data",
      color: "from-blue-500 to-cyan-500",
      border: "border-blue-400",
      description: "Thu thập dữ liệu thô từ các sự kiện nghiệp vụ, quét mã vạch, quẹt thẻ, giao dịch thương mại điện tử.",
      example: "Dữ liệu hóa đơn: Mã KH: KH09, Mã SP: SP102, Số lượng: 2, Đơn giá: 50.000 VNĐ."
    },
    {
      id: "process",
      title: "2. Process (Xử lý)",
      icon: Cpu,
      badge: "Logic Engine",
      color: "from-amber-500 to-orange-500",
      border: "border-amber-400",
      description: "Hệ thống kiểm tra tính hợp lệ, áp dụng quy tắc nghiệp vụ, tính toán tổng tiền, chiết khấu và lưu trữ vào CSDL.",
      example: "Tính toán: Thành tiền = 2 × 50.000 = 100.000. Kiểm tra tồn kho: SP102 còn 45 cái -> Trừ kho 2."
    },
    {
      id: "output",
      title: "3. Output (Đầu ra)",
      icon: FileText,
      badge: "Useful Info",
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-400",
      description: "Thông tin có ý nghĩa được xuất bản cho người dùng: Hóa đơn điện tử, thông báo trừ tiền, báo cáo doanh thu.",
      example: "In hóa đơn VAT, gửi email xác nhận cho khách hàng và cập nhật dashboard doanh thu thời gian thực."
    },
    {
      id: "feedback",
      title: "4. Feedback Loop (Phản hồi)",
      icon: RefreshCw,
      badge: "Optimization",
      color: "from-purple-500 to-pink-500",
      border: "border-purple-400",
      description: "Đánh giá hiệu quả, phát hiện hàng tồn kho thấp hoặc khiếu nại khách hàng để cải tiến quy trình input/process.",
      example: "Cảnh báo tự động gửi bộ phận mua hàng: Sản phẩm SP102 sắp hết hạn mức an toàn."
    }
  ];

  const componentsData = {
    hardware: {
      title: "Hardware (Phần cứng)",
      icon: HardDrive,
      tag: "Vật lý",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800",
      summary: "Thiết bị vật lý dùng để nhập, xử lý, lưu trữ và xuất dữ liệu.",
      details: [
        "Máy chủ cơ sở dữ liệu (Database Server) và máy chủ ứng dụng (App Server).",
        "Máy trạm làm việc của nhân viên, máy tính xách tay, thiết bị quét mã vạch (POS).",
        "Hạ tầng mạng: Router, Switch, tường lửa Firewall, hệ thống lưu trữ SAN/NAS."
      ]
    },
    software: {
      title: "Software (Phần mềm)",
      icon: Cpu,
      tag: "Logic",
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800",
      summary: "Tập hợp các chỉ thị và chương trình hướng dẫn phần cứng hoạt động.",
      details: [
        "Phần mềm hệ thống: Hệ điều hành (Windows Server, Linux), Hệ quản trị CSDL (SQL Server, Oracle).",
        "Phần mềm ứng dụng: Hệ thống ERP (SAP, Odoo), CRM (Salesforce), ứng dụng POS bán hàng.",
        "Dịch vụ Web Service, API trung gian xử lý thanh toán và đồng bộ dữ liệu."
      ]
    },
    data: {
      title: "Data (Dữ liệu)",
      icon: Database,
      tag: "Tài sản số",
      color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800",
      summary: "Dữ kiện thô phản ánh các sự kiện, giao dịch và trạng thái thực tế.",
      details: [
        "Cơ sở dữ liệu khách hàng, danh mục sản phẩm, bảng giá và kho hàng.",
        "Lịch sử giao dịch mua sắm, nhật ký truy cập (Log files), âm thanh, hình ảnh camera.",
        "Dữ liệu có cấu trúc (bảng quan hệ) và phi cấu trúc (văn bản tài liệu, email)."
      ]
    },
    people: {
      title: "People (Con người)",
      icon: Users,
      tag: "Chủ thể vận hành",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-800",
      summary: "Thành phần quan trọng nhất — người sử dụng, vận hành và quản trị hệ thống.",
      details: [
        "Người dùng cuối (End-users): Nhân viên thu ngân, kế toán, khách hàng dùng app di động.",
        "Business Analyst (BA): Khảo sát, định nghĩa yêu cầu và cầu nối nghiệp vụ - kỹ thuật.",
        "Chuyên gia kỹ thuật: Lập trình viên (Developers), Quản trị CSDL (DBA), Quản trị mạng (Network Admins)."
      ]
    },
    procedures: {
      title: "Procedures (Quy trình & Chính sách)",
      icon: FileText,
      tag: "Quy tắc vận hành",
      color: "text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800",
      summary: "Các quy tắc, hướng dẫn bằng văn bản điều chỉnh cách thức sử dụng và bảo vệ hệ thống.",
      details: [
        "Chính sách bảo mật: Đặt mật khẩu phức tạp, phân quyền truy cập dữ liệu theo cấp bậc.",
        "Quy trình vận hành chuẩn (SOP): Cách thức nhập đơn hàng, xử lý khiếu nại trả hàng.",
        "Kế hoạch sao lưu định kỳ (Backup) và phương án phục hồi sau sự cố thảm họa (Disaster Recovery)."
      ]
    }
  };

  const runSimulation = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setSimLog(["[Bắt đầu] Khởi chạy mô phỏng chu trình IPO bán hàng..."]);

    setTimeout(() => {
      setActiveStep(0);
      setSimLog((prev) => [
        ...prev,
        "-> [1. Input] Ghi nhận giao dịch mua hàng từ thiết bị POS tại cửa hàng."
      ]);
    }, 600);

    setTimeout(() => {
      setActiveStep(1);
      setSimLog((prev) => [
        ...prev,
        "-> [2. Process] Server kiểm tra mã thẻ, trừ tồn kho và tính chiết khấu thuế VAT."
      ]);
    }, 1800);

    setTimeout(() => {
      setActiveStep(2);
      setSimLog((prev) => [
        ...prev,
        "-> [3. Output] Xuất hóa đơn điện tử cho khách hàng và cập nhật doanh thu ngày."
      ]);
    }, 3000);

    setTimeout(() => {
      setActiveStep(3);
      setSimLog((prev) => [
        ...prev,
        "-> [4. Feedback Loop] Hệ thống phân tích nhận diện mẫu mua sắm và tự động đề xuất nhập thêm hàng.",
        "[Hoàn tất] Chu trình IPO đã chuyển đổi thành công Raw Data thành Useful Information!"
      ]);
      setIsRunningSim(false);
    }, 4200);
  };

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Mô Phỏng Luồng IPO & 5 Thành Phần Cốt Lõi IS
            </h2>
            <p className="text-xs text-slate-400">
              Trực quan hóa cơ chế biến đổi dữ liệu và mối tương tác giữa các cấu phần trong hệ thống thông tin.
            </p>
          </div>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunningSim}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md ${
            isRunningSim
              ? "bg-slate-800 text-slate-500 cursor-not-allowed"
              : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-emerald-950"
          }`}
        >
          {isRunningSim ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
          {isRunningSim ? "Đang chạy mô phỏng..." : "Chạy thử chu trình IPO"}
        </button>
      </div>

      {/* Part 1: Interactive IPO Pipeline */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
            Phần 1: Chu trình chuyển hóa thông tin (Input – Process – Output)
          </span>
          <span className="text-xs text-slate-400">Bấm chọn từng bước để xem giải phẫu:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ipoSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border relative ${
                  isActive
                    ? `bg-slate-800/90 ${step.border} ring-2 ring-emerald-400/40 shadow-lg scale-[1.02]`
                    : `bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700`
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white shadow`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive */}
        <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase">Ví dụ thực tế ({ipoSteps[activeStep].title}):</span>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">{ipoSteps[activeStep].example}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive 5 Core Components Explorer */}
      <div className="border-t border-slate-800 pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
            Phần 2: Giải phẫu 5 thành phần cấu tạo nên hệ thống thông tin
          </span>
          <span className="text-xs text-slate-400">Bấm chọn thành phần để xem chi tiết:</span>
        </div>

        {/* Component Selector Buttons */}
        <div className="flex flex-wrap gap-2 mb-5">
          {Object.entries(componentsData).map(([key, item]) => {
            const isSelected = selectedComponent === key;
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedComponent(key)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all border ${
                  isSelected
                    ? "bg-slate-800 border-cyan-400 text-cyan-300 ring-2 ring-cyan-400/30 shadow-md"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.title.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Component Card */}
        {selectedComponent && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/30">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                {componentsData[selectedComponent].title}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                Phân loại: {componentsData[selectedComponent].tag}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 font-medium">
              {componentsData[selectedComponent].summary}
            </p>

            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Các ví dụ & Đối tượng cụ thể:
              </span>
              <ul className="space-y-1.5">
                {componentsData[selectedComponent].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Simulation Live Console Logs */}
      {simLog.length > 1 && (
        <div className="mt-6 p-4 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-emerald-300 space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-800/60 mb-2">
            <span>Terminal: Real-time IPO Execution Log</span>
            <button
              onClick={() => setSimLog(["Sẵn sàng mô phỏng luồng chuyển đổi dữ liệu thời gian thực."])}
              className="hover:text-slate-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Xóa log
            </button>
          </div>
          {simLog.map((log, i) => (
            <div key={i} className="leading-relaxed">
              {log}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
