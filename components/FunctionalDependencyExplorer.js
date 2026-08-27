"use client";

import React, { useState } from "react";
import { KeyRound, ArrowRight, ShieldCheck, CheckCircle2, XCircle, Users, Sparkles, HelpCircle } from "lucide-react";

export default function FunctionalDependencyExplorer() {
  const [selectedFd, setSelectedFd] = useState("fd1");

  const fdList = {
    fd1: {
      fd: "dept_name → class",
      lhs: "dept_name",
      rhs: "class",
      explanation: "Mỗi tên phòng ban xác định duy nhất một cấp phân loại phòng ban (class). Mọi nhân viên thuộc cùng phòng ban đều có cùng class.",
      valid: true
    },
    fd2: {
      fd: "dept_name → dept_addr",
      lhs: "dept_name",
      rhs: "dept_addr",
      explanation: "Mỗi tên phòng ban xác định duy nhất một địa chỉ phòng ban (dept_addr). Không thể có 1 phòng ban nằm ở 2 địa chỉ khác nhau.",
      valid: true
    },
    fd3: {
      fd: "e# → ename",
      lhs: "e#",
      rhs: "ename",
      explanation: "Mỗi mã số nhân viên e# xác định duy nhất một tên nhân viên ename.",
      valid: true
    },
    fd4: {
      fd: "e# → {dept_name, dept_addr, class}",
      lhs: "e#",
      rhs: "dept_name, dept_addr, class",
      explanation: "Vì e# là khóa, e# xác định hàm toàn bộ thông tin phòng ban, địa chỉ và cấp lớp của nhân viên đó.",
      valid: true
    },
    asymmetry: {
      fd: "ename ↛ e# (Tính Bất Đối Xứng)",
      lhs: "ename",
      rhs: "e#",
      explanation: "Chiều ngược lại KHÔNG ĐÚNG: Hai nhân viên khác nhau hoàn toàn có thể trùng họ tên (ví dụ cùng tên 'Nguyễn Văn A' nhưng có e# khác nhau là NV01 và NV02).",
      valid: false
    }
  };

  const curr = fdList[selectedFd];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">FunctionalDependencyExplorer</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Định Nghĩa & Bản Chất FD (Mục 2)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá định nghĩa hình thức (t1.X = t2.X &rArr; t1.Y = t2.Y) trên bảng Nhân Viên và tính bất đối xứng
            </p>
          </div>
        </div>
      </div>

      {/* Formal Definition Formula Box */}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 font-mono text-xs text-indigo-950">
        <div className="font-bold text-indigo-900 uppercase text-[11px] mb-1">ĐỊNH NGHĨA HÌNH THỨC CỦA PHỤ THUỘC HÀM X → Y:</div>
        <div className="text-sm font-bold text-emerald-800 bg-white p-2.5 rounded-lg border border-indigo-100">
          {"∀ t1, t2 ∈ r : ( t1.X = t2.X ⇒ t1.Y = t2.Y )"}
        </div>
        <p className="text-xs text-gray-600 mt-2 font-sans leading-relaxed">
          &ldquo;Nếu hai bộ bất kỳ t1, t2 trùng nhau trên tập thuộc tính X thì bắt buộc phải trùng nhau trên tập thuộc tính Y.&rdquo;
        </p>
      </div>

      {/* Employee Table Example */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <span className="font-mono text-xs font-bold text-gray-700 block mb-2">
          BẢNG NHÂN VIÊN: NHAN_VIEN(e#, ename, dept_name, dept_addr, class)
        </span>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
              <tr>
                <th className="p-2">e# (Mã NV)</th>
                <th className="p-2">ename (Họ tên)</th>
                <th className="p-2">dept_name (Phòng)</th>
                <th className="p-2">dept_addr (Địa chỉ phòng)</th>
                <th className="p-2">class (Cấp bậc)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-2 font-bold text-indigo-700">NV01</td>
                <td className="p-2">Nguyễn Văn An</td>
                <td className="p-2 text-emerald-700 font-semibold">Phòng Kế Toán</td>
                <td className="p-2">Tầng 3 - Tòa A</td>
                <td className="p-2">Loại 1</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-indigo-700">NV02</td>
                <td className="p-2">Trần Thị Bình</td>
                <td className="p-2 text-emerald-700 font-semibold">Phòng Kế Toán</td>
                <td className="p-2">Tầng 3 - Tòa A</td>
                <td className="p-2">Loại 1</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-indigo-700">NV03</td>
                <td className="p-2">Nguyễn Văn An</td>
                <td className="p-2 text-purple-700 font-semibold">Phòng Kỹ Thuật</td>
                <td className="p-2">Tầng 5 - Tòa B</td>
                <td className="p-2">Loại 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FD Switcher & Explanations */}
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {Object.keys(fdList).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedFd(key)}
            className={`rounded-xl p-3 text-left font-mono text-xs font-bold transition-all border ${
              selectedFd === key
                ? "bg-indigo-600 text-white border-indigo-700 shadow-md"
                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50"
            }`}
          >
            {fdList[key].fd}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-4 shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-indigo-900">{curr.fd}</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
            curr.valid ? "bg-emerald-100 text-emerald-800 border-emerald-200" : "bg-rose-100 text-rose-800 border-rose-200"
          }`}>
            {curr.valid ? "PHỤ THUỘC HÀM HỢP LỆ" : "TÍNH BẤT ĐỐI XỨNG (KHÔNG HỢP LỆ)"}
          </span>
        </div>
        <p className="text-xs text-gray-700 leading-relaxed font-medium">
          {curr.explanation}
        </p>
      </div>
    </div>
  );
}
