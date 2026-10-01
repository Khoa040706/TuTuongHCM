"use client";

import React, { useState } from "react";
import {
  Activity,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldCheck,
  Terminal,
  Cpu,
  Info,
  Layers,
  Sparkles
} from "lucide-react";

export default function ImpactMatrixInteractiveSimulator() {
  const [selectedOperation, setSelectedOperation] = useState("insert_sv");

  const scenarios = {
    insert_sv: {
      id: "insert_sv",
      badge: "+ (BẮT BUỘC KIỂM TRA)",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
      action: "THÊM (INSERT) 1 Sinh Viên Mới",
      target: "Bảng SINH_VIEN",
      checkNeeded: true,
      reason:
        "Khi thêm sinh viên mới, mã số sinh viên vừa nhập có thể trùng với một sinh viên đã tồn tại từ trước trong bảng. Do đó, DBMS bắt buộc phải quét kiểm tra tính duy nhất (+).",
      dbmsResponse:
        "EXECUTION PLAN: Index Unique Scan trên PK_SinhVien(maSV). Nếu phát hiện trùng lặp -> Hủy lệnh và Rollback.",
      cost: "Tiêu tốn tài nguyên kiểm tra I/O (Bắt buộc để bảo vệ dữ liệu)"
    },
    delete_sv: {
      id: "delete_sv",
      badge: "- (AN TOÀN - BỎ QUA)",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      action: "XÓA (DELETE) 1 Sinh Viên",
      target: "Bảng SINH_VIEN",
      checkNeeded: false,
      reason:
        "Xóa bớt 1 sinh viên khỏi bảng chỉ làm giảm bớt số dòng, tuyệt đối không bao giờ làm cho 2 sinh viên còn lại bị trùng mã số với nhau. Do đó, thao tác này an toàn tuyệt đối đối với ràng buộc khóa chính C1 (-).",
      dbmsResponse:
        "OPTIMIZER: Ràng buộc C1 được đánh dấu dấu (-). Bỏ qua toàn bộ thủ tục kiểm tra duy nhất. Tiết kiệm 100% chi phí CPU/Disk I/O!",
      cost: "Chi phí kiểm tra: 0 (Được tối ưu hóa hoàn toàn)"
    },
    update_sv_name: {
      id: "update_sv_name",
      badge: "- (KHÔNG LIÊN QUAN - BỎ QUA)",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      action: "SỬA (UPDATE) Họ Tên Sinh Viên (hotenSV)",
      target: "Bảng SINH_VIEN (Cột hotenSV)",
      checkNeeded: false,
      reason:
        "Ràng buộc C1 chỉ giám sát duy nhất trên cột khóa chính maSV. Việc sửa đổi họ tên sinh viên không làm suy chuyển giá trị maSV, nên DBMS bỏ qua kiểm tra (-).",
      dbmsResponse:
        "OPTIMIZER: Cột hotenSV không nằm trong tập thuộc tính bảo vệ của C1. Cho phép cập nhật trực tiếp mà không cần kích hoạt Trigger/Constraint check.",
      cost: "Chi phí kiểm tra: 0"
    },
    update_sv_id: {
      id: "update_sv_id",
      badge: "+(*) (KIỂM TRA CÓ ĐIỀU KIỆN)",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      action: "SỬA (UPDATE) Mã Sinh Viên (maSV)",
      target: "Bảng SINH_VIEN (Cột maSV)",
      checkNeeded: true,
      reason:
        "Mã sinh viên được sửa thành một giá trị mới có nguy cơ đụng độ với một sinh viên khác đã có. Do đó, khi thuộc tính maSV bị thay đổi, DBMS bắt buộc phải kích hoạt kiểm tra (+(*)).",
      dbmsResponse:
        "EXECUTION PLAN: Thuộc tính maSV bị biến động. Kích hoạt Unique Constraint Validation. Nếu mã mới đã tồn tại -> Báo lỗi vi phạm khóa chính.",
      cost: "Tiêu tốn tài nguyên kiểm tra I/O khi cột khóa bị sửa"
    }
  };

  const curr = scenarios[selectedOperation];

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/20 p-5 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/20">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900">ImpactMatrixInteractiveSimulator</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-200">
                Live Impact Engine
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Mô phỏng cơ chế xác định dấu (+, -, *) trong Bảng Tầm Ảnh Hưởng và quyết định quét kiểm tra của DBMS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-amber-950 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
          <Cpu className="h-3.5 w-3.5 text-amber-600" />
          <span>QUERY OPTIMIZATION MATRIX</span>
        </div>
      </div>

      {/* Summary Impact Table */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
          Bảng Tầm Ảnh Hưởng Chuẩn Của Ràng Buộc Khóa Chính C1 (SINH_VIEN):
        </span>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-slate-100 text-slate-800 border-b border-slate-200">
              <tr>
                <th className="p-3">Quan Hệ (Bảng)</th>
                <th className="p-3 text-center">Thêm (Insert)</th>
                <th className="p-3 text-center">Xóa (Delete)</th>
                <th className="p-3 text-center">Sửa (Update)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-bold">
              <tr className="hover:bg-slate-50">
                <td className="p-3 text-indigo-900">SINH_VIEN</td>
                <td className="p-3 text-center">
                  <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 border border-rose-200">
                    + (Bắt buộc)
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                    - (An toàn)
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 border border-amber-200">
                    +(*) (Cột maSV)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Operation Buttons: 2x2 on laptop, 4 on desktop */}
      <div className="mt-5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
          Chọn thao tác người dùng để DBMS phân tích tầm ảnh hưởng:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <button
            onClick={() => setSelectedOperation("insert_sv")}
            className={`flex items-center gap-2 p-3.5 rounded-2xl font-mono text-xs font-bold transition-all border text-left ${
              selectedOperation === "insert_sv"
                ? "bg-rose-50 text-rose-950 border-rose-400 shadow-md ring-2 ring-rose-300"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-600 text-white shrink-0">
              <Plus className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[10px] text-rose-700 uppercase">Thao tác 1</span>
              <span>1. Thêm Sinh Viên (+)</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedOperation("delete_sv")}
            className={`flex items-center gap-2 p-3.5 rounded-2xl font-mono text-xs font-bold transition-all border text-left ${
              selectedOperation === "delete_sv"
                ? "bg-emerald-50 text-emerald-950 border-emerald-400 shadow-md ring-2 ring-emerald-300"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0">
              <Trash2 className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[10px] text-emerald-700 uppercase">Thao tác 2</span>
              <span>2. Xóa Sinh Viên (-)</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedOperation("update_sv_name")}
            className={`flex items-center gap-2 p-3.5 rounded-2xl font-mono text-xs font-bold transition-all border text-left ${
              selectedOperation === "update_sv_name"
                ? "bg-emerald-50 text-emerald-950 border-emerald-400 shadow-md ring-2 ring-emerald-300"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white shrink-0">
              <Edit3 className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[10px] text-teal-700 uppercase">Thao tác 3</span>
              <span>3. Sửa Họ Tên (-)</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedOperation("update_sv_id")}
            className={`flex items-center gap-2 p-3.5 rounded-2xl font-mono text-xs font-bold transition-all border text-left ${
              selectedOperation === "update_sv_id"
                ? "bg-amber-50 text-amber-950 border-amber-400 shadow-md ring-2 ring-amber-300"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-600 text-white shrink-0">
              <Edit3 className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[10px] text-amber-700 uppercase">Thao tác 4</span>
              <span>4. Sửa MaSV (+(*))</span>
            </div>
          </button>
        </div>
      </div>

      {/* Decision Output Bento Panel */}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Thao tác đang kiểm tra:
            </span>
            <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
              {curr.action} trên {curr.target}
            </h4>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-bold text-xs border ${curr.badgeColor}`}>
            {curr.checkNeeded ? (
              <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
            ) : (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            )}
            <span>{curr.badge}</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-xs text-slate-700 leading-relaxed font-medium">
          <strong>Lý do kỹ thuật giáo trình: </strong>
          {curr.reason}
        </div>

        {/* Terminal Execution Log */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-100 font-mono text-xs shadow-md">
          <div className="flex items-center justify-between text-cyan-400 text-[11px] mb-2 border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5 font-bold">
              <Terminal className="h-3.5 w-3.5" />
              DBMS ENGINE EXECUTION PLANNER
            </span>
            <span className="text-slate-400 text-[10px]">{curr.cost}</span>
          </div>
          <p className="text-amber-300 text-xs leading-relaxed">{curr.dbmsResponse}</p>
        </div>
      </div>
    </div>
  );
}
