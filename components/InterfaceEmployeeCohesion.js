"use client";
import React, { useState } from "react";
import { ShieldAlert, ArrowRight, CheckCircle2, AlertTriangle, FileText, Database, Mail, User, ShieldCheck } from "lucide-react";

export default function InterfaceEmployeeCohesion() {
  const [isHighCohesion, setIsHighCohesion] = useState(false);
  const [simulated, setSimulated] = useState(false);
  const [log, setLog] = useState("Chọn chế độ thiết kế và bấm 'Chạy thử sửa đổi Database' để bắt đầu mô phỏng.");

  const runSimulation = () => {
    setSimulated(true);
    setLog("Đang mô phỏng thay đổi cấu trúc bảng dữ liệu trong Database (đổi bảng workers thành employees)...");

    setTimeout(() => {
      if (isHighCohesion) {
        setLog(
          "KẾT QUẢ: Thành công! Chỉ có lớp EmployeeRepository cần cập nhật lại câu lệnh SQL. Lớp Employee (chứa dữ liệu), PaySlipPrinter (in ấn) và NotificationService (gửi mail) hoàn toàn không bị ảnh hưởng, không bị biên dịch lại."
        );
      } else {
        setLog(
          "KẾT QUẢ: Thất bại! Vì lớp Employee làm cả nhiệm vụ lưu DB, in ấn, và lưu trữ dữ liệu; khi thay đổi DB, toàn bộ lớp Employee bị lỗi biên dịch. Các phần in ấn và quản lý biến bị ngưng trệ, hệ thống gặp rủi ro cao."
        );
      }
    }, 1200);
  };

  const resetSim = () => {
    setSimulated(false);
    setLog("Đã khôi phục trạng thái ban đầu. Hãy chạy thử để xem sự khác biệt.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Trực Quan Hóa: Cohesion trong Thiết kế Lớp
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            So sánh thiết kế Low Cohesion (om đồm) vs High Cohesion (đơn nhiệm) khi có sự cố hệ thống
          </p>
        </div>

        {/* Toggle Cohesion Mode */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-805">
          <button
            onClick={() => {
              setIsHighCohesion(false);
              resetSim();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              !isHighCohesion
                ? "bg-rose-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Low Cohesion (Kém)
          </button>
          <button
            onClick={() => {
              setIsHighCohesion(true);
              resetSim();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              isHighCohesion
                ? "bg-emerald-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            High Cohesion (Tốt)
          </button>
        </div>
      </div>

      {/* Diagram Area */}
      <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800/80 mb-6 min-h-[260px] flex flex-col justify-center items-center relative">
        {!isHighCohesion ? (
          /* LOW COHESION DIAGRAM */
          <div className="w-full max-w-md">
            <div className={`p-5 border rounded-2xl transition-all duration-500 relative ${
              simulated 
                ? "bg-rose-950/20 border-rose-500 shadow-lg shadow-rose-500/10" 
                : "bg-slate-900 border-slate-800"
            }`}>
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-sm font-bold text-rose-400">class Employee</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  simulated ? "bg-rose-500/20 text-rose-400" : "bg-slate-800 text-slate-400"
                }`}>
                  {simulated ? "LỖI BIÊN DỊCH" : "Low Cohesion"}
                </span>
              </div>
              
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="p-2 bg-slate-950/80 rounded border border-slate-850 flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-400" />
                  <span>Dữ liệu: names, salaries</span>
                </div>
                <div className={`p-2 bg-slate-950/80 rounded border transition-colors ${
                  simulated ? "border-rose-500/50 text-rose-300" : "border-slate-850"
                } flex items-center gap-2`}>
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Lưu trữ: saveToDatabase()</span>
                </div>
                <div className="p-2 bg-slate-950/80 rounded border border-slate-850 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>In ấn: printReportCard()</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* HIGH COHESION DIAGRAM */
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {/* Class Employee (Data only) */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-400 block mb-2">class Employee</span>
                <p className="text-[10px] text-slate-400 mb-3">Chỉ quản lý cấu trúc dữ liệu cốt lõi.</p>
              </div>
              <div className="p-2 bg-slate-950 rounded border border-slate-850 flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                <span>names, salaries</span>
              </div>
            </div>

            {/* Class EmployeeRepository (DB only) */}
            <div className={`p-4 border rounded-xl flex flex-col justify-between transition-all duration-500 ${
              simulated 
                ? "bg-amber-950/30 border-amber-500 shadow-md shadow-amber-500/5" 
                : "bg-slate-900 border-slate-800"
            }`}>
              <div>
                <span className="font-mono text-xs font-bold text-emerald-400 block mb-2">class EmployeeRepository</span>
                <p className="text-[10px] text-slate-400 mb-3">Chỉ chịu trách nhiệm lưu/tải CSDL.</p>
              </div>
              <div className={`p-2 bg-slate-950 rounded border ${
                simulated ? "border-amber-500/50 text-amber-300" : "border-slate-850"
              } flex items-center gap-1.5 text-[10px] font-mono`}>
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>saveToDatabase()</span>
              </div>
            </div>

            {/* Class PaySlipPrinter (Print only) */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 block mb-2">class PaySlipPrinter</span>
                <p className="text-[10px] text-slate-400 mb-3">Chỉ phụ trách in ấn phiếu lương.</p>
              </div>
              <div className="p-2 bg-slate-950 rounded border border-slate-850 flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>printReportCard()</span>
              </div>
            </div>

            {/* Class NotificationService (Mail only) */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-purple-400 block mb-2">class NotificationService</span>
                <p className="text-[10px] text-slate-400 mb-3">Chỉ xử lý gửi thông báo email.</p>
              </div>
              <div className="p-2 bg-slate-950 rounded border border-slate-850 flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>sendEmail()</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls & Logs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-4 flex gap-2">
          <button
            onClick={runSimulation}
            disabled={simulated}
            className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold rounded-xl transition-all shadow-md flex justify-center items-center gap-1.5 text-xs hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            <ShieldAlert className="w-4 h-4 text-slate-950" />
            <span>CHẠY THỬ SỬA ĐỔI DB</span>
          </button>
          {simulated && (
            <button
              onClick={resetSim}
              className="px-4 py-3 bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-300 font-bold rounded-xl text-xs transition-all"
            >
              Đặt lại
            </button>
          )}
        </div>

        <div className="md:col-span-8">
          <div className={`h-full min-h-[60px] flex items-center p-4 rounded-xl border transition-colors ${
            !simulated
              ? "bg-slate-950 border-slate-850 text-slate-350"
              : isHighCohesion
              ? "bg-emerald-950/30 border-emerald-500/20 text-emerald-300"
              : "bg-rose-950/30 border-rose-500/20 text-rose-300"
          }`}>
            <div className="flex gap-3 items-start">
              {simulated ? (
                isHighCohesion ? (
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 text-rose-450 mt-0.5" />
                )
              ) : (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-slate-500 mt-0.5" />
              )}
              <p className="text-xs leading-relaxed font-mono">{log}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
