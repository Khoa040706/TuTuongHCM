"use client";

import React, { useState } from "react";
import { Activity, Plus, Trash2, Edit3, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Terminal } from "lucide-react";

export default function ImpactMatrixInteractiveSimulator() {
  const [selectedOperation, setSelectedOperation] = useState("insert_sv");

  const scenarios = {
    insert_sv: {
      action: "THÊM (INSERT) 1 Sinh Viên Mới",
      target: "Bảng SINH_VIEN",
      checkNeeded: true,
      reason: "Khi thêm sinh viên mới, mã số sinh viên vừa nhập có thể trùng với sinh viên đã có sẵn trong bảng -> Bắt buộc phải quét kiểm tra tính duy nhất (+).",
      dbmsResponse: "TRIGGER ENGINE: Kích hoạt kiểm tra trùng khóa chính (UNIQUE INDEX SCAN)."
    },
    delete_sv: {
      action: "XÓA (DELETE) 1 Sinh Viên",
      target: "Bảng SINH_VIEN",
      checkNeeded: false,
      reason: "Xóa bớt 1 sinh viên khỏi bảng chỉ làm giảm bớt số dòng, tuyệt đối không bao giờ làm cho 2 sinh viên còn lại bị trùng mã số với nhau -> An toàn tuyệt đối (-).",
      dbmsResponse: "TRIGGER ENGINE: Bỏ qua kiểm tra ràng buộc C1 (NO SCAN REQUIRED - Tiết kiệm chi phí CPU/I/O)."
    },
    update_sv_name: {
      action: "SỬA (UPDATE) Họ Tên Sinh Viên",
      target: "Bảng SINH_VIEN (Cột hotenSV)",
      checkNeeded: false,
      reason: "Ràng buộc C1 chỉ ràng buộc trên cột khóa chính maSV. Thay đổi hotenSV không tác động đến maSV -> Bỏ qua kiểm tra (-).",
      dbmsResponse: "TRIGGER ENGINE: Cột hotenSV không nằm trong tầm ảnh hưởng -> Bỏ qua kiểm tra."
    },
    update_sv_id: {
      action: "SỬA (UPDATE) Mã Sinh Viên",
      target: "Bảng SINH_VIEN (Cột maSV)",
      checkNeeded: true,
      reason: "Mã sinh viên được sửa thành giá trị mới có nguy cơ trùng lặp với một sinh viên khác -> Bắt buộc phải kiểm tra (+(*)).",
      dbmsResponse: "TRIGGER ENGINE: Cột maSV nằm trong tầm ảnh hưởng -> Kích hoạt kiểm tra ràng buộc C1."
    }
  };

  const curr = scenarios[selectedOperation];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ImpactMatrixInteractiveSimulator</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Live Impact Matrix Engine
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng cơ chế xác định dấu (+, -, *) trong Bảng Tầm Ảnh Hưởng và quyết định quét kiểm tra của DBMS
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Operation Buttons */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setSelectedOperation("insert_sv")}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-xl font-mono text-xs font-bold transition-all border ${
            selectedOperation === "insert_sv"
              ? "bg-amber-600 text-white border-amber-700 shadow-md"
              : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50"
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
          1. Thêm Sinh Viên (+)
        </button>
        <button
          onClick={() => setSelectedOperation("delete_sv")}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-xl font-mono text-xs font-bold transition-all border ${
            selectedOperation === "delete_sv"
              ? "bg-amber-600 text-white border-amber-700 shadow-md"
              : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50"
          }`}
        >
          <Trash2 className="h-3.5 w-3.5" />
          2. Xóa Sinh Viên (-)
        </button>
        <button
          onClick={() => setSelectedOperation("update_sv_name")}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-xl font-mono text-xs font-bold transition-all border ${
            selectedOperation === "update_sv_name"
              ? "bg-amber-600 text-white border-amber-700 shadow-md"
              : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50"
          }`}
        >
          <Edit3 className="h-3.5 w-3.5" />
          3. Sửa Họ Tên (-)
        </button>
        <button
          onClick={() => setSelectedOperation("update_sv_id")}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-xl font-mono text-xs font-bold transition-all border ${
            selectedOperation === "update_sv_id"
              ? "bg-amber-600 text-white border-amber-700 shadow-md"
              : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50"
          }`}
        >
          <Edit3 className="h-3.5 w-3.5" />
          4. Sửa MaSV (+(*))
        </button>
      </div>

      {/* Decision Output Card */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Thao tác đang kiểm tra:</span>
            <h4 className="text-sm font-bold text-gray-900 mt-0.5">{curr.action} trên {curr.target}</h4>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-bold text-xs border ${
            curr.checkNeeded
              ? "bg-rose-50 text-rose-800 border-rose-300"
              : "bg-emerald-50 text-emerald-800 border-emerald-300"
          }`}>
            {curr.checkNeeded ? <AlertTriangle className="h-4 w-4 text-rose-600" /> : <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
            <span>{curr.checkNeeded ? "DẤU (+): BẮT BUỘC KIỂM TRA" : "DẤU (-): AN TOÀN, BỎ QUA KIỂM TRA"}</span>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-700 leading-relaxed font-medium">
          <strong>Lý do kỹ thuật:</strong> {curr.reason}
        </p>

        {/* Terminal Log */}
        <div className="mt-4 rounded-xl border border-gray-800 bg-gray-950 p-3 text-white font-mono text-xs shadow-inner">
          <div className="flex items-center gap-2 text-cyan-400 text-[11px] mb-1">
            <Terminal className="h-3.5 w-3.5" />
            <span>DBMS ENGINE EXECUTION PLANNER</span>
          </div>
          <p className="text-amber-300 text-xs">{curr.dbmsResponse}</p>
        </div>
      </div>
    </div>
  );
}
