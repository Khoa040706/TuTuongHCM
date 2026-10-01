"use client";

import React, { useState } from "react";
import {
  Link2,
  KeyRound,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Database,
  Trash2,
  AlertTriangle,
  Table,
  Info
} from "lucide-react";

export default function ExistenceDependencyInspector() {
  const [selectedSign, setSelectedSign] = useState("sign1"); // 'sign1' | 'sign2'
  const [fkPolicy, setFkPolicy] = useState("restrict"); // 'restrict' | 'cascade' | 'set_null'
  const [simStep, setSimStep] = useState(null);

  // Sign 1 test state
  const [testMaSV, setTestMaSV] = useState("SV01");
  const [testMaMH, setTestMaMH] = useState("CSDL");
  const [testLanThi, setTestLanThi] = useState(1);
  const [testDiem, setTestDiem] = useState(8.5);

  const existingStudents = ["SV01", "SV02", "SV03"];

  const handleTestSign1 = () => {
    if (existingStudents.includes(testMaSV)) {
      setSimStep({
        valid: true,
        msg: `HỢP LỆ (SUCCESS): Sinh viên ${testMaSV} đã tồn tại trong SINH_VIEN. Kết quả thi được ghi nhận an toàn vào KET_QUA!`
      });
    } else {
      setSimStep({
        valid: false,
        msg: `VI PHẠM (FOREIGN KEY VIOLATION): Sinh viên ${testMaSV} CHƯA TỒN TẠI trong bảng SINH_VIEN. Không thể tạo kết quả thi cho một sinh viên ảo!`
      });
    }
  };

  return (
    <div className="my-8 rounded-3xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-purple-50/20 p-5 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-violet-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/20">
            <Link2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900">ExistenceDependencyInspector</h3>
              <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-bold text-violet-800 border border-violet-200">
                Phụ Thuộc Tồn Tại & Khóa Ngoại
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Giải phẫu 2 dấu hiệu toán học nhận biết Phụ thuộc tồn tại và các chính sách toàn vẹn tham chiếu
            </p>
          </div>
        </div>

        {/* Responsive Tabs Switcher */}
        <div className="flex flex-wrap rounded-2xl bg-violet-100/80 p-1.5 border border-violet-200 gap-1">
          <button
            onClick={() => {
              setSelectedSign("sign1");
              setSimStep(null);
            }}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              selectedSign === "sign1"
                ? "bg-violet-600 text-white shadow-sm"
                : "text-violet-900 hover:bg-violet-200/50"
            }`}
          >
            Dấu Hiệu (1): K1 ⊆ K2 (Khóa Phức Hợp)
          </button>
          <button
            onClick={() => {
              setSelectedSign("sign2");
              setSimStep(null);
            }}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
              selectedSign === "sign2"
                ? "bg-violet-600 text-white shadow-sm"
                : "text-violet-900 hover:bg-violet-200/50"
            }`}
          >
            Dấu Hiệu (2): K1 ⊆ R2 (Khóa Ngoại Đơn)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {selectedSign === "sign1" ? (
        <div className="mt-6 space-y-5">
          {/* Theory Banner */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/60 to-teal-50/40 p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-emerald-600" />
              <h4 className="text-sm font-extrabold text-emerald-950">
                Dấu Hiệu (1): Khóa K1 Của R1 Nằm Bên Trong Khóa Chính Phức Hợp K2 Của R2
              </h4>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-300 bg-white p-3 font-mono text-xs text-emerald-900 font-bold leading-relaxed shadow-sm">
              Định lý: Nếu K1 ⊆ K2 ⇒ Có phụ thuộc tồn tại của quan hệ R2 vào quan hệ R1.
            </div>
            <p className="mt-2 text-xs text-emerald-800 leading-relaxed">
              Mỗi bộ trong R2 muốn xuất hiện thì giá trị của thành phần khóa K1 trong R2 bắt buộc phải tồn tại từ trước trong R1.
            </p>
          </div>

          {/* Dual-Card Bridge Visualizer for Sign 1 */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Table 1: SINH_VIEN (Parent) */}
            <div className="rounded-2xl border border-indigo-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5">
                <span className="font-mono text-xs font-bold text-indigo-900">
                  R1: SINH_VIEN (Bảng Độc Lập)
                </span>
                <span className="font-mono text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  Khóa K1 = &#123;maSV&#125;
                </span>
              </div>

              <div className="mt-3 text-xs">
                <div className="font-bold text-slate-600 mb-1.5">Tập sinh viên hiện có:</div>
                <div className="space-y-1 font-mono">
                  {existingStudents.map((sv) => (
                    <div key={sv} className="flex items-center justify-between p-2 rounded-lg bg-indigo-50/60 border border-indigo-100 text-indigo-950 font-bold">
                      <span>maSV: &apos;{sv}&apos;</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-sans">
                        Tồn tại
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Table 2: KET_QUA (Child) */}
            <div className="rounded-2xl border border-purple-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-purple-100 pb-2.5">
                <span className="font-mono text-xs font-bold text-purple-900">
                  R2: KET_QUA (Bảng Phụ Thuộc)
                </span>
                <span className="font-mono text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  Khóa K2 = &#123;maSV, maMH, lanThi&#125;
                </span>
              </div>

              <div className="mt-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  Khóa chính <code>K2</code> là <strong>Khóa phức hợp (Composite Key)</strong> gồm 3 thuộc tính.
                  Vì <code>&#123;maSV&#125; ⊆ &#123;maSV, maMH, lanThi&#125;</code>, <code>KET_QUA</code> không thể tự sinh điểm nếu sinh viên chưa có hồ sơ.
                </p>

                <div className="mt-3 p-3 rounded-xl bg-purple-50 border border-purple-100 font-mono text-[11px] text-purple-950">
                  FOREIGN KEY (maSV) REFERENCES SINH_VIEN(maSV)
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Insert Test Sandbox */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
              Sandbox Thử Nghiệm Thêm Kết Quả Thi Vào KET_QUA:
            </span>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 text-xs font-mono">
              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-1">maSV:</label>
                <select
                  value={testMaSV}
                  onChange={(e) => setTestMaSV(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2 font-bold text-slate-900 focus:outline-none focus:border-violet-500"
                >
                  <option value="SV01">SV01 (Có sẵn)</option>
                  <option value="SV02">SV02 (Có sẵn)</option>
                  <option value="SV03">SV03 (Có sẵn)</option>
                  <option value="SV99">SV99 (ẢO - Chưa có)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-1">maMH:</label>
                <input
                  type="text"
                  value={testMaMH}
                  onChange={(e) => setTestMaMH(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2 font-bold text-slate-900 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-1">lanThi:</label>
                <input
                  type="number"
                  min="1"
                  max="2"
                  value={testLanThi}
                  onChange={(e) => setTestLanThi(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 p-2 font-bold text-slate-900 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-1">Diem:</label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="10"
                  value={testDiem}
                  onChange={(e) => setTestDiem(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 p-2 font-bold text-slate-900 focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={handleTestSign1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-md transition-all"
              >
                <Sparkles className="h-4 w-4" />
                Kiểm Tra Ràng Buộc Tồn Tại
              </button>
            </div>

            {simStep && (
              <div
                className={`mt-4 flex items-start gap-2.5 p-3.5 rounded-xl border text-xs font-semibold leading-relaxed ${
                  simStep.valid
                    ? "bg-emerald-50 text-emerald-950 border-emerald-300"
                    : "bg-rose-50 text-rose-950 border-rose-300"
                }`}
              >
                {simStep.valid ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                )}
                <span>{simStep.msg}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {/* Theory Banner for Sign 2 */}
          <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50/60 to-violet-50/40 p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Link2 className="h-5 w-5 text-purple-600" />
              <h4 className="text-sm font-extrabold text-purple-950">
                Dấu Hiệu (2): Khóa K1 Của R1 Xuất Hiện Như Một Thuộc Tính Thông Thường Trong R2
              </h4>
            </div>

            <div className="mt-3 rounded-xl border border-purple-300 bg-white p-3 font-mono text-xs text-purple-900 font-bold leading-relaxed shadow-sm">
              Định lý: Nếu K1 ⊆ R2 (với K1 không là khóa chính của R2) ⇒ K1 chính là Khóa Ngoại (Foreign Key) của R2 trỏ về R1.
            </div>
            <p className="mt-2 text-xs text-purple-800 leading-relaxed">
              Mô hình cha-con kinh điển: Bảng KHOA là Cha (makhoa là PK), bảng SINH_VIEN là Con (maKhoa là FK).
            </p>
          </div>

          {/* Dual-Card Visual Bridge with Action Policy Simulator */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Table 1: KHOA (Parent) */}
            <div className="rounded-2xl border border-indigo-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5">
                <span className="font-mono text-xs font-bold text-indigo-900">
                  R1: KHOA (Bảng Cha / Referenced Table)
                </span>
                <span className="font-mono text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  PK = &#123;makhoa&#125;
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
                  <span className="font-mono font-bold text-indigo-950">&apos;Toan&apos; (Khoa Toán - Tin)</span>
                  <span className="text-[10px] text-slate-500">Đang có 120 sinh viên</span>
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
                  <span className="font-mono font-bold text-indigo-950">&apos;CNTT&apos; (Khoa Công Nghệ TT)</span>
                  <span className="text-[10px] text-slate-500">Đang có 250 sinh viên</span>
                </div>
              </div>
            </div>

            {/* Table 2: SINH_VIEN (Child) */}
            <div className="rounded-2xl border border-purple-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-purple-100 pb-2.5">
                <span className="font-mono text-xs font-bold text-purple-900">
                  R2: SINH_VIEN (Bảng Con / Referencing Table)
                </span>
                <span className="font-mono text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  FK = maKhoa
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-purple-50/70 border border-purple-100 flex items-center justify-between font-mono">
                  <span>(&apos;SV01&apos;, &apos;Nguyen Van A&apos;, &apos;Toan&apos;)</span>
                  <span className="text-emerald-700 text-[10px] font-sans font-bold">Trỏ đến &apos;Toan&apos;</span>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-50/70 border border-purple-100 flex items-center justify-between font-mono">
                  <span>(&apos;SV02&apos;, &apos;Tran Thi B&apos;, &apos;CNTT&apos;)</span>
                  <span className="text-emerald-700 text-[10px] font-sans font-bold">Trỏ đến &apos;CNTT&apos;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Policy Simulator: ON DELETE Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Mô Phỏng Xóa Dòng Ở Bảng Cha (DELETE FROM KHOA WHERE makhoa = &apos;Toan&apos;):
            </span>
            <p className="text-xs text-slate-600 mb-3">
              Hệ quản trị CSDL xử lý như thế nào tùy thuộc vào điều khoản toàn vẹn tham chiếu đã khai báo:
            </p>

            <div className="grid gap-2 sm:grid-cols-3">
              <button
                onClick={() => setFkPolicy("restrict")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  fkPolicy === "restrict"
                    ? "bg-rose-50 border-rose-500 shadow-sm ring-2 ring-rose-400/40 text-rose-950"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
                }`}
              >
                <div className="font-mono text-xs font-bold">1. NO ACTION / RESTRICT</div>
                <div className="text-[10px] text-slate-500 mt-1">Chặn đứng thao tác xóa</div>
              </button>

              <button
                onClick={() => setFkPolicy("cascade")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  fkPolicy === "cascade"
                    ? "bg-amber-50 border-amber-500 shadow-sm ring-2 ring-amber-400/40 text-amber-950"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
                }`}
              >
                <div className="font-mono text-xs font-bold">2. ON DELETE CASCADE</div>
                <div className="text-[10px] text-slate-500 mt-1">Xóa lan truyền sang bảng con</div>
              </button>

              <button
                onClick={() => setFkPolicy("set_null")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  fkPolicy === "set_null"
                    ? "bg-blue-50 border-blue-500 shadow-sm ring-2 ring-blue-400/40 text-blue-950"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
                }`}
              >
                <div className="font-mono text-xs font-bold">3. ON DELETE SET NULL</div>
                <div className="text-[10px] text-slate-500 mt-1">Đặt FK của con về NULL</div>
              </button>
            </div>

            {/* Policy Outcome Display */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs font-mono text-slate-200 shadow-md">
              {fkPolicy === "restrict" && (
                <div>
                  <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Msg 547, Level 16: FOREIGN KEY CONSTRAINT CONFLICT</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    Lệnh xóa bảng cha bị TỪ CHỐI & TRANSACTION BỊ ROLLBACK vì còn sinh viên &apos;SV01&apos; đang trỏ về khoa &apos;Toan&apos;. Phải chuyển hoặc xóa các sinh viên này trước!
                  </p>
                </div>
              )}

              {fkPolicy === "cascade" && (
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                    <Trash2 className="h-4 w-4" />
                    <span>CASCADE DELETE EXECUTED</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    Khoa &apos;Toan&apos; bị xóa khỏi bảng KHOA, và toàn bộ 120 sinh viên thuộc khoa này trong bảng SINH_VIEN cũng TỰ ĐỘNG BỊ XÓA THEO để đảm bảo không có sinh viên mồ côi!
                  </p>
                </div>
              )}

              {fkPolicy === "set_null" && (
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>SET NULL EXECUTED</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    Khoa &apos;Toan&apos; bị xóa khỏi bảng KHOA. Cột maKhoa của sinh viên &apos;SV01&apos; được cập nhật thành NULL (Sinh viên tạm thời chưa phân khoa).
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
