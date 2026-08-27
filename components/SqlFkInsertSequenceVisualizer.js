"use client";
import React, { useState } from "react";
import { Link2, ArrowRight, CheckCircle2, AlertTriangle, Layers, GitFork, UserCheck, ShieldCheck, Terminal } from "lucide-react";

export default function SqlFkInsertSequenceVisualizer() {
  const [activeCase, setActiveCase] = useState("case1");
  const [stepIndex, setStepIndex] = useState(0);

  const cases = {
    case1: {
      title: "Trường hợp 1: Quan hệ 1 chiều đơn giản (PHONGBAN -> DEAN)",
      desc: "Bảng DEAN chứa khóa ngoại trỏ đến khóa chính maphong của PHONGBAN.",
      steps: [
        {
          stepTitle: "Bước 1: Chèn dữ liệu vào bảng Cha (PHONGBAN)",
          code: `INSERT INTO PhongBan (maphong, tenphong)\nVALUES (1, N'Phòng Nghiên Cứu');`,
          note: "Bắt buộc nhập bảng cha trước để tạo mã phòng ban số 1 hợp lệ trong CSDL.",
          tableState: "Bảng PHONGBAN: Đã có phòng [1 - Nghiên Cứu]"
        },
        {
          stepTitle: "Bước 2: Chèn dữ liệu vào bảng Con (DEAN)",
          code: `INSERT INTO DeAn (madean, tendt, phong)\nVALUES ('DA01', N'Hệ Thống AI', 1);`,
          note: "Nhập bảng con an toàn vì giá trị phong = 1 đã tồn tại ở bảng cha PHONGBAN.",
          tableState: "Bảng DEAN: Đề án DA01 tham chiếu hợp lệ tới Phòng 1"
        }
      ],
      altStrategy: "Cách 2: Nếu chưa kịp nhập PHONGBAN, có thể chèn DEAN với giá trị phong = NULL trước, sau đó khi có PHONGBAN thì dùng lệnh UPDATE để gán mã phòng."
    },
    case2: {
      title: "Trường hợp 2: Hai bảng tham chiếu chéo qua lại (NHANVIEN <-> PHONGBAN)",
      desc: "NHANVIEN có khóa ngoại 'phong' trỏ về PHONGBAN, nhưng PHONGBAN lại có khóa ngoại 'trphong' trỏ về NHANVIEN (Tham chiếu vòng).",
      steps: [
        {
          stepTitle: "Bước 1: Chèn NHANVIEN với phong = NULL",
          code: `INSERT INTO NhanVien (manv, tennv, phong)\nVALUES ('NV01', N'Trần Văn Nam', NULL);`,
          note: "Tạm thời gán phong = NULL để tránh lỗi khóa ngoại vì bảng PHONGBAN lúc này chưa có dữ liệu.",
          tableState: "NHANVIEN: Đã tạo nhân viên NV01 (phong: NULL)"
        },
        {
          stepTitle: "Bước 2: Chèn PHONGBAN với trphong = 'NV01'",
          code: `INSERT INTO PhongBan (maphong, tenphong, trphong)\nVALUES (1, N'Kỹ Thuật', 'NV01');`,
          note: "Chèn phòng ban thành công vì Trưởng phòng NV01 đã được tạo ở Bước 1.",
          tableState: "PHONGBAN: Đã tạo Phòng 1 do NV01 làm trưởng phòng"
        },
        {
          stepTitle: "Bước 3: Cập nhật ngược lại phong cho NHANVIEN",
          code: `UPDATE NhanVien\nSET phong = 1\nWHERE manv = 'NV01';`,
          note: "Hoàn tất tham chiếu 2 chiều: NV01 thuộc Phòng 1 và NV01 là Trưởng phòng 1!",
          tableState: "Đồng bộ hoàn tất: Tham chiếu vòng được giải quyết trọn vẹn"
        }
      ],
      altStrategy: "Cách 2 ngược lại: Chèn PHONGBAN (trphong = NULL) trước -> Chèn NHANVIEN (phong = 1) -> UPDATE PHONGBAN SET trphong = 'NV01'."
    },
    case3: {
      title: "Trường hợp 3: Bảng tự tham chiếu chính nó (NHANVIEN - manql)",
      desc: "Cột người quản lý 'manql' là khóa ngoại trỏ ngược lại khóa chính 'manv' của chính bảng NHANVIEN (Cây phân cấp).",
      steps: [
        {
          stepTitle: "Bước 1: Chèn nhân viên cấp cao nhất (Giám đốc có manql = NULL)",
          code: `INSERT INTO NhanVien (manv, tennv, manql)\nVALUES ('NV_GD', N'Nguyễn Văn Giám Đốc', NULL);`,
          note: "Người đứng đầu tổ chức không có người quản lý cấp trên nên manql bắt buộc là NULL.",
          tableState: "NHANVIEN: Đã tạo Giám đốc (manql = NULL)"
        },
        {
          stepTitle: "Bước 2: Chèn nhân viên cấp dưới tham chiếu tới Giám đốc",
          code: `INSERT INTO NhanVien (manv, tennv, manql)\nVALUES ('NV02', N'Lê Thị Nhân Viên', 'NV_GD');`,
          note: "Nhân viên cấp dưới tham chiếu hợp lệ tới mã NV_GD đã tồn tại trong bảng.",
          tableState: "NHANVIEN: Đã tạo NV02 dưới quyền quản lý của NV_GD"
        }
      ],
      altStrategy: "Mẹo nhớ: Luôn chèn từ đỉnh cây phân cấp (Root node: sếp cao nhất không có quản lý) xuống dần các nhánh nhân viên cấp dưới."
    }
  };

  const current = cases[activeCase];

  const handleCaseChange = (cKey) => {
    setActiveCase(cKey);
    setStepIndex(0);
  };

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-sky-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <GitFork className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlFkInsertSequenceVisualizer</h3>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                FK Insertion Order Simulator
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng 3 chiến thuật chèn dữ liệu khi có khóa ngoại và giải quyết bế tắc tham chiếu vòng
            </p>
          </div>
        </div>

        {/* Tabs for 3 cases */}
        <div className="flex rounded-xl bg-blue-100/80 p-1 border border-blue-200">
          <button
            onClick={() => handleCaseChange("case1")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeCase === "case1"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-blue-900 hover:text-blue-700"
            }`}
          >
            1 Chiều (1-Way)
          </button>
          <button
            onClick={() => handleCaseChange("case2")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeCase === "case2"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-blue-900 hover:text-blue-700"
            }`}
          >
            2 Chiều Chéo (Cross-Ref)
          </button>
          <button
            onClick={() => handleCaseChange("case3")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeCase === "case3"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-blue-900 hover:text-blue-700"
            }`}
          >
            Tự Tham Chiếu (Recursive)
          </button>
        </div>
      </div>

      {/* Case Description */}
      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
        <h4 className="text-sm font-bold text-blue-950">{current.title}</h4>
        <p className="mt-1 text-xs text-blue-900/80 leading-relaxed">{current.desc}</p>
      </div>

      {/* Step Sequence Navigator */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {current.steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStepIndex(idx)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
              stepIndex === idx
                ? "bg-blue-600 text-white border-blue-700 shadow-md"
                : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50"
            }`}
          >
            <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-mono ${
              stepIndex === idx ? "bg-white text-blue-700" : "bg-blue-100 text-blue-800"
            }`}>
              {idx + 1}
            </span>
            <span>Bước {idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Step Details Display */}
      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        {/* Code Box */}
        <div className="rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-400" />
              <span className="font-mono text-xs font-bold text-gray-300">
                {current.steps[stepIndex].stepTitle}
              </span>
            </div>
            <span className="rounded bg-blue-950 px-2 py-0.5 font-mono text-[10px] text-blue-400 border border-blue-800">
              STEP {stepIndex + 1} / {current.steps.length}
            </span>
          </div>

          <pre className="mt-3 font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap">
            {current.steps[stepIndex].code}
          </pre>

          <div className="mt-4 rounded-lg bg-gray-900 p-3 border border-gray-800 text-xs text-gray-300">
            <span className="font-bold text-amber-300">💡 Giải thích thao tác: </span>
            {current.steps[stepIndex].note}
          </div>
        </div>

        {/* Simulation State Box */}
        <div className="flex flex-col justify-between rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="font-bold text-xs text-gray-700 uppercase tracking-wider">
                Trạng Thái Bộ Nhớ & Khóa Ngoại:
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Toàn Vẹn Hợp Lệ
              </span>
            </div>

            <div className="mt-4 rounded-xl bg-blue-50/60 p-4 border border-blue-200">
              <div className="text-xs font-mono font-bold text-blue-950">
                {current.steps[stepIndex].tableState}
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Không phát sinh lỗi xung đột khóa ngoại <code>Msg 547</code>.</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-500 italic">
            <strong>Chiến lược thay thế:</strong> {current.altStrategy}
          </div>
        </div>
      </div>
    </div>
  );
}
