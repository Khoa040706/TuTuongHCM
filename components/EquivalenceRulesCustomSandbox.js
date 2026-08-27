"use client";

import React, { useState } from "react";
import { Sparkles, Play, RotateCcw, ArrowRight, CheckCircle2, Layers, Cpu, Code2 } from "lucide-react";

export default function EquivalenceRulesCustomSandbox() {
  const [selectedScenario, setSelectedScenario] = useState("scenario1");
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const scenarios = {
    scenario1: {
      name: "Truy vấn 1: Lọc nhân viên & phòng ban (σ pushdown)",
      initialSql: "SELECT NV.TenNV FROM NV, PB WHERE NV.MaPB = PB.MaPB AND PB.DiaDiem = 'Q1' AND NV.Luong > 1000",
      steps: [
        {
          desc: "Cây cú pháp sơ khai (Canonical): Phép chọn ở đỉnh trên tích Đề-các",
          expr: "π_{TenNV}( σ_{(NV.MaPB = PB.MaPB) ∧ (PB.DiaDiem = 'Q1') ∧ (NV.Luong > 1000)} ( NV × PB ) )",
          rule: "Sơ khai ban đầu"
        },
        {
          desc: "Tách dãy phép chọn theo Luật L4",
          expr: "π_{TenNV}( σ_{NV.MaPB = PB.MaPB}( σ_{PB.DiaDiem = 'Q1'}( σ_{NV.Luong > 1000}( NV × PB ) ) ) )",
          rule: "Luật L4: Dãy phép chọn"
        },
        {
          desc: "Đẩy phép chọn đơn quan hệ xuống từng lá theo Luật L6 (Hệ quả 1)",
          expr: "π_{TenNV}( σ_{NV.MaPB = PB.MaPB}( σ_{NV.Luong > 1000}(NV) × σ_{PB.DiaDiem = 'Q1'}(PB) ) )",
          rule: "Luật L6: Đẩy σ xuống từng lá"
        },
        {
          desc: "Chuyển tích Đề-các kèm phép chọn điều kiện nối thành Phép Nối (Equi-Join)",
          expr: "π_{TenNV}( σ_{NV.Luong > 1000}(NV) ⋈_{NV.MaPB = PB.MaPB} σ_{PB.DiaDiem = 'Q1'}(PB) )",
          rule: "Tổ hợp Join tối ưu"
        }
      ]
    },
    scenario2: {
      name: "Truy vấn 2: Đẩy phép chiếu π giảm độ rộng cột",
      initialSql: "SELECT SV.HoTen FROM SV, KHOA WHERE SV.MaKhoa = KHOA.MaKhoa AND KHOA.TenKhoa = 'CNTT'",
      steps: [
        {
          desc: "Biểu thức sau khi đã đẩy phép chọn σ",
          expr: "π_{HoTen}( SV(MaSV, HoTen, NgaySinh, MaKhoa) ⋈_{SV.MaKhoa = KHOA.MaKhoa} σ_{TenKhoa = 'CNTT'}(KHOA(MaKhoa, TenKhoa, TruongKhoa)) )",
          rule: "Bước trung gian"
        },
        {
          desc: "Đẩy phép chiếu π xuống từng lá để loại bỏ cột thừa (NgaySinh, TruongKhoa) theo Luật L10",
          expr: "π_{HoTen}( π_{HoTen, MaKhoa}(SV) ⋈_{SV.MaKhoa = KHOA.MaKhoa} π_{MaKhoa}( σ_{TenKhoa = 'CNTT'}(KHOA) ) )",
          rule: "Luật L10: Đẩy π xuống lá"
        }
      ]
    }
  };

  const currScen = scenarios[selectedScenario];
  const currStep = currScen.steps[currentStepIndex];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Code2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">EquivalenceRulesCustomSandbox</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Sandbox Tương Tác Biến Đổi Tương Đương
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Thử nghiệm tối ưu hóa từng bước áp dụng 11 quy tắc L1 - L11 trên các biểu thức truy vấn mẫu
            </p>
          </div>
        </div>

        {/* Scenario Switcher */}
        <div className="flex rounded-xl bg-teal-100/80 p-1 border border-teal-200">
          {Object.keys(scenarios).map((sKey) => (
            <button
              key={sKey}
              onClick={() => {
                setSelectedScenario(sKey);
                setCurrentStepIndex(0);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedScenario === sKey ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
              }`}
            >
              {sKey === "scenario1" ? "Truy Vấn 1 (σ pushdown)" : "Truy Vấn 2 (π pushdown)"}
            </button>
          ))}
        </div>
      </div>

      {/* SQL Box */}
      <div className="mt-5 rounded-xl bg-slate-900 p-4 text-emerald-400 font-mono text-xs shadow-inner space-y-1">
        <span className="text-teal-300 font-bold block text-[11px] font-sans">CÂU TRUY VẤN SQL ĐẦU VÀO:</span>
        <pre className="whitespace-pre-wrap">{currScen.initialSql}</pre>
      </div>

      {/* Step Progress Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-teal-200 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold bg-teal-100 text-teal-900 px-3 py-1 rounded-full border border-teal-300">
            Bước {currentStepIndex + 1} / {currScen.steps.length}: {currStep.rule}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentStepIndex(Math.max(0, currentStepIndex - 1))}
            disabled={currentStepIndex === 0}
            className="rounded-lg border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold text-teal-900 hover:bg-teal-50 disabled:opacity-40 transition-all"
          >
            &larr; Bước Trước
          </button>
          <button
            onClick={() => setCurrentStepIndex(Math.min(currScen.steps.length - 1, currentStepIndex + 1))}
            disabled={currentStepIndex === currScen.steps.length - 1}
            className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-40 shadow-sm transition-all"
          >
            Áp Dụng Bước Tiếp Theo &rarr;
          </button>
          <button
            onClick={() => setCurrentStepIndex(0)}
            className="p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            title="Khởi tạo lại"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Transformed Result Card */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="border-b border-gray-100 pb-2">
          <span className="text-gray-500 font-sans text-xs font-bold">MÔ TẢ BIẾN ĐỔI:</span>
          <p className="text-gray-900 font-sans text-xs font-bold mt-0.5">{currStep.desc}</p>
        </div>

        <div>
          <span className="text-gray-500 font-sans text-[11px] font-bold block mb-1">
            BIỂU THỨC ĐẠI SỐ QUAN HỆ HIỆN TẠI:
          </span>
          <div className="rounded-xl bg-slate-950 p-4 text-cyan-300 font-mono text-xs sm:text-sm text-center shadow-inner leading-relaxed">
            {currStep.expr}
          </div>
        </div>

        {currentStepIndex === currScen.steps.length - 1 && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-3.5 text-emerald-950 font-sans text-xs flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span>ĐÃ TỐI ƯU HÓA HOÀN TOÀN CÂY TRUY VẤN!</span>
            </div>
            <span className="text-[11px] bg-white px-2.5 py-0.5 rounded border border-emerald-300 text-emerald-800 font-mono">
              Phép tính đạt hiệu năng cao nhất
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
