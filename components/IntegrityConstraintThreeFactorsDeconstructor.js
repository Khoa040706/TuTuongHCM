"use client";

import React, { useState } from "react";
import { Layers, Activity, Database, CheckCircle2, Sliders, ArrowRight, ShieldCheck } from "lucide-react";

export default function IntegrityConstraintThreeFactorsDeconstructor() {
  const [selectedConstraint, setSelectedConstraint] = useState("c1"); // 'c1' | 'c2' | 'c3'

  const data = {
    c1: {
      name: "Ràng buộc C1: Mã sinh viên là duy nhất (Khóa chính)",
      condition: "Mỗi sinh viên có một mã số riêng biệt, không trùng với bất kỳ sinh viên nào khác: ∀t1, t2 ∈ SINH_VIEN (t1.maSV = t2.maSV ⇒ t1 = t2)",
      context: "Quan hệ SINH_VIEN (Bối cảnh 1 quan hệ)",
      impact: [
        { relation: "SINH_VIEN", insert: "+ (Cần KT trùng mã)", update: "+ (Nếu sửa cột maSV)", delete: "- (An toàn, không KT)" }
      ],
      note: "Xóa 1 sinh viên không bao giờ làm phát sinh lỗi trùng mã số sinh viên, nên cột Xóa mang dấu '-'. Thêm 1 sinh viên mới có thể trùng với sinh viên đã có sẵn, nên cột Thêm mang dấu '+'."
    },
    c2: {
      name: "Ràng buộc C2: Mỗi sinh viên thi tối đa 2 lần / môn học",
      condition: "Số lần thi không vượt quá 2: ∀t ∈ KET_QUA (t.lanThi ∈ {1, 2})",
      context: "Quan hệ KET_QUA (Bối cảnh 1 quan hệ)",
      impact: [
        { relation: "KET_QUA", insert: "+ (Kiểm tra lanThi ≤ 2)", update: "+ (Nếu sửa cột lanThi)", delete: "- (An toàn, không KT)" }
      ],
      note: "Xóa bớt 1 dòng kết quả thi không làm tăng số lần thi của sinh viên đó, nên Xóa mang dấu '-'. Thêm lần thi mới có thể là lần thứ 3 vi phạm quy chế, nên Thêm mang dấu '+'."
    },
    c3: {
      name: "Ràng buộc C3: Sinh viên phải thuộc về một khoa hợp lệ (Khóa ngoại)",
      condition: "Mã khoa của sinh viên phải tồn tại trong bảng KHOA: ∀t ∈ SINH_VIEN ∃k ∈ KHOA (t.maKhoa = k.makhoa)",
      context: "Quan hệ SINH_VIEN và KHOA (Bối cảnh nhiều quan hệ)",
      impact: [
        { relation: "SINH_VIEN (Con)", insert: "+ (Kiểm tra có mã khoa cha)", update: "+ (Nếu sửa cột maKhoa)", delete: "- (An toàn, không KT)" },
        { relation: "KHOA (Cha)", insert: "- (An toàn, không KT)", update: "+ (Nếu sửa cột makhoa)", delete: "+ (Kiểm tra có sinh viên trực thuộc)" }
      ],
      note: "Khi xóa 1 Khoa ở bảng cha, nếu khoa đó đang có sinh viên theo học thì sẽ vi phạm tính toàn vẹn tham chiếu (sinh viên mồ côi), do đó thao tác Xóa ở bảng KHOA bắt buộc phải kiểm tra (+)."
    }
  };

  const curr = data[selectedConstraint];

  return (
    <div className="my-8 rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-violet-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-600/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">IntegrityConstraintThreeFactorsDeconstructor</h3>
              <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-800 border border-violet-200">
                3 Yếu Tố Cấu Thành
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bộ giải phẫu chi tiết 3 thành phần bắt buộc của một RBTV: Điều kiện, Bối cảnh và Bảng tầm ảnh hưởng
            </p>
          </div>
        </div>

        {/* Constraint Tabs */}
        <div className="flex rounded-xl bg-violet-100/80 p-1 border border-violet-200">
          <button
            onClick={() => setSelectedConstraint("c1")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedConstraint === "c1" ? "bg-violet-600 text-white shadow-sm" : "text-violet-900 hover:text-violet-700"
            }`}
          >
            Ràng Buộc C1 (Khóa chính)
          </button>
          <button
            onClick={() => setSelectedConstraint("c2")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedConstraint === "c2" ? "bg-violet-600 text-white shadow-sm" : "text-violet-900 hover:text-violet-700"
            }`}
          >
            Ràng Buộc C2 (Miền giá trị)
          </button>
          <button
            onClick={() => setSelectedConstraint("c3")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedConstraint === "c3" ? "bg-violet-600 text-white shadow-sm" : "text-violet-900 hover:text-violet-700"
            }`}
          >
            Ràng Buộc C3 (Khóa ngoại)
          </button>
        </div>
      </div>

      {/* Main 3-Factor Cards Layout */}
      <div className="mt-6 space-y-4">
        {/* Factor A: Condition */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4">
          <div className="flex items-center justify-between border-b border-blue-200/60 pb-2">
            <span className="text-xs font-bold text-blue-950 uppercase tracking-wider">
              Yếu Tố 1: Điều Kiện (Condition)
            </span>
            <span className="font-mono text-[10px] text-blue-700 font-bold bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
              LOGIC INVARIANT
            </span>
          </div>
          <p className="mt-2 text-xs font-mono text-blue-950 bg-white p-3 rounded-lg border border-blue-200 leading-relaxed font-semibold">
            {curr.condition}
          </p>
        </div>

        {/* Factor B: Context */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2">
            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
              Yếu Tố 2: Bối Cảnh (Context)
            </span>
            <span className="font-mono text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
              APPLICABLE RELATIONS
            </span>
          </div>
          <p className="mt-2 text-xs text-emerald-950 bg-white p-3 rounded-lg border border-emerald-200 font-bold">
            {curr.context}
          </p>
        </div>

        {/* Factor C: Affected Operations */}
        <div className="rounded-xl border border-violet-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-violet-600" />
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Yếu Tố 3: Tầm Ảnh Hưởng (Affected Operations)
              </span>
            </div>
            <span className="font-mono text-[10px] text-violet-700 font-bold bg-violet-50 px-2 py-0.5 rounded border border-violet-200">
              IMPACT MATRIX
            </span>
          </div>

          {/* Table Matrix */}
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-violet-50 text-violet-950 border-b border-violet-200">
                <tr>
                  <th className="p-3">Quan Hệ (Bảng)</th>
                  <th className="p-3">Thêm (+)</th>
                  <th className="p-3">Sửa (*)</th>
                  <th className="p-3">Xóa (-)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {curr.impact.map((row, idx) => (
                  <tr key={idx} className="hover:bg-violet-50/40">
                    <td className="p-3 font-bold text-violet-900">{row.relation}</td>
                    <td className="p-3 font-semibold text-amber-700">{row.insert}</td>
                    <td className="p-3 text-cyan-700 font-semibold">{row.update}</td>
                    <td className="p-3 text-gray-500 font-medium">{row.delete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 rounded-lg bg-violet-50/70 p-3 text-xs text-violet-950 border border-violet-200 leading-relaxed font-medium">
            <strong>💡 Giải thích bản chất:</strong> {curr.note}
          </div>
        </div>
      </div>
    </div>
  );
}
