"use client";
import React, { useState } from "react";
import { LogOut, CheckCircle2, XCircle, Play, Layers, Terminal, Award, HelpCircle, ArrowRight } from "lucide-react";

export default function StoredProcedureReturnSimulatorStudio() {
  const [activeMode, setActiveMode] = useState("early_exit"); // "early_exit" | "status_code" | "matrix"
  const [inputMaSV, setInputMaSV] = useState("01");
  const [isNullMode, setIsNullMode] = useState(false);
  const [simScore, setSimScore] = useState(7.5);
  const [executed, setExecuted] = useState(false);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-1">
            <LogOut className="w-4 h-4" />
            <span>Interactive RETURN Code & Flow Control</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Khám Phá Lệnh RETURN: Thoát Sớm & Trả Về Mã Trạng Thái Số Nguyên
          </h3>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => {
              setActiveMode("early_exit");
              setExecuted(false);
            }}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeMode === "early_exit" ? "bg-rose-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            a) Thoát sớm khi NULL
          </button>
          <button
            onClick={() => {
              setActiveMode("status_code");
              setExecuted(false);
            }}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeMode === "status_code" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            b) Trả về mã 0 / 1
          </button>
          <button
            onClick={() => setActiveMode("matrix")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeMode === "matrix" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Đại Ma Trận Đối Chiếu
          </button>
        </div>
      </div>

      {/* MODE 1: EARLY EXIT */}
      {activeMode === "early_exit" && (
        <div>
          <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
            Lệnh <code>RETURN</code> dùng để dừng và thoát khỏi thủ tục ngay lập tức khi phát hiện điều kiện tham số không hợp lệ (ví dụ: người dùng không truyền mã sinh viên).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            {/* Input Controls */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400 block mb-2">1. Giả lập giá trị truyền vào @masv:</span>
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => {
                    setIsNullMode(true);
                    setExecuted(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold border transition-all ${
                    isNullMode
                      ? "bg-rose-950/60 border-rose-500 text-rose-300"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  Truyền NULL (Không nhập)
                </button>
                <button
                  onClick={() => {
                    setIsNullMode(false);
                    setExecuted(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold border transition-all ${
                    !isNullMode
                      ? "bg-indigo-950/60 border-indigo-500 text-indigo-300"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  Truyền '01' (Hợp lệ)
                </button>
              </div>

              <button
                onClick={() => setExecuted(true)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Thực thi lệnh: EXEC xem_diem {isNullMode ? "" : "'01'"}</span>
              </button>
            </div>

            {/* Terminal Output */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">2. Kết quả Console Messages:</span>
                {!executed ? (
                  <div className="p-6 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
                    Bấm 'Thực thi lệnh' để xem luồng điều khiển IF...ELSE...
                  </div>
                ) : isNullMode ? (
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 font-mono text-xs">
                    <div className="font-bold text-rose-400 mb-1">▶ Phân nhánh: IF (@masv IS NULL) ➔ KÍCH HOẠT RETURN</div>
                    <div>PRINT 'Nhap ma sinh vien'</div>
                    <div className="text-[11px] text-slate-400 mt-1">➔ Lệnh RETURN ngắt thủ tục ngay, câu lệnh SELECT phía sau hoàn toàn không được chạy!</div>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs">
                    <div className="font-bold text-emerald-400 mb-1">▶ Phân nhánh: ELSE (Tham số hợp lệ)</div>
                    <div>SELECT diem FROM diem WHERE masv = '01'</div>
                    <div className="text-[11px] text-slate-400 mt-1">➔ Trả về bảng kết quả điểm của sinh viên mã '01'.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: STATUS CODE RETURN */}
      {activeMode === "status_code" && (
        <div>
          <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
            Thủ tục trả về mã số nguyên thông qua <code>RETURN 1</code> (Điểm trên trung bình &ge; 5) hoặc <code>RETURN 0</code> (Điểm dưới trung bình &lt; 5). Ứng dụng gọi hứng mã bằng cú pháp <code>EXEC @trave = kiemtra_diem '01'</code>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400 block mb-2">1. Chọn điểm số của sinh viên để kiểm tra:</span>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={simScore}
                  onChange={(e) => {
                    setSimScore(parseFloat(e.target.value));
                    setExecuted(false);
                  }}
                  className="flex-1 accent-indigo-500"
                />
                <span className="font-mono text-sm font-bold text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                  {simScore} điểm
                </span>
              </div>

              <button
                onClick={() => setExecuted(true)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Chạy: EXEC @trave = kiemtra_diem '01'</span>
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">2. Giá trị hứng tại biến @trave:</span>
                {!executed ? (
                  <div className="p-6 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
                    Kéo thanh trượt điểm và nhấn 'Chạy' để xem mã trả về...
                  </div>
                ) : (
                  <div className={`p-3 rounded-lg border font-mono text-xs ${
                    simScore >= 5 ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" : "bg-rose-950/40 border-rose-500/40 text-rose-300"
                  }`}>
                    <div className="font-bold mb-1">
                      Mã RETURN nhận được: <code>@trave = {simScore >= 5 ? "1" : "0"}</code>
                    </div>
                    <div className="text-slate-200">
                      PRINT {simScore >= 5 ? "'Diem tren trung binh'" : "'Diem duoi trung binh'"}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: COMPARISON MATRIX */}
      {activeMode === "matrix" && (
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
          <h4 className="text-sm font-bold text-indigo-300 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Đại Ma Trận So Sánh: OUTPUT Parameter vs RETURN Code</span>
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-2.5 px-3">Đặc điểm đối chiếu</th>
                  <th className="py-2.5 px-3 text-indigo-300">Tham số OUTPUT</th>
                  <th className="py-2.5 px-3 text-emerald-300">Mã Lệnh RETURN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-200">Kiểu dữ liệu hỗ trợ</td>
                  <td className="py-2.5 px-3 font-mono text-indigo-300">Đa dạng (varchar, int, decimal, datetime...)</td>
                  <td className="py-2.5 px-3 font-mono text-emerald-300 font-bold">Chỉ số nguyên (integer)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-200">Số lượng giá trị trả về</td>
                  <td className="py-2.5 px-3 text-indigo-300">Có thể có <strong>nhiều</strong> tham số OUTPUT trong 1 SP</td>
                  <td className="py-2.5 px-3 text-emerald-300 font-bold">Chỉ 1 giá trị duy nhất</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-200">Mục đích sử dụng chính</td>
                  <td className="py-2.5 px-3 text-indigo-300">Truyền dữ liệu tính toán nghiệp vụ ra bên ngoài</td>
                  <td className="py-2.5 px-3 text-emerald-300">Báo mã trạng thái / kiểm tra / thoát sớm</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-200">Cú pháp nhận kết quả</td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-indigo-300">EXEC proc @var OUTPUT</td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-emerald-300">EXEC @var = proc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
