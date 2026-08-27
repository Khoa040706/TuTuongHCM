"use client";
import React, { useState } from "react";
import { Zap, Play, CheckCircle2, XCircle, RefreshCw, Layers, Database, ShieldAlert, BookOpen } from "lucide-react";

export default function MultiTriggerExecutionStudio() {
  const [activeTab, setActiveTab] = useState("siso"); // "siso" | "xoa" | "dtb" | "multi"

  // State for Trigger 1: kiemtra_siso
  const [inputSiso, setInputSiso] = useState(40);
  const [sisoResult, setSisoResult] = useState(null);

  // State for Trigger 2: xoa
  const [deletedStudents, setDeletedStudents] = useState([]);
  const [backupTable, setBackupTable] = useState([]);

  // State for Trigger 3: dtb
  const [studentScores, setStudentScores] = useState({
    masv: "01",
    tensv: "Nguyễn Văn A",
    diemCSDL: 8,
    diemCTDL: 6,
    dtb: 7.0
  });

  const handleTestSiso = () => {
    if (inputSiso > 0) {
      setSisoResult({
        success: true,
        msg: "COMMIT TRANSACTION: Thêm lớp mới thành công với sĩ số: " + inputSiso
      });
    } else {
      setSisoResult({
        success: false,
        msg: "ROLLBACK TRANSACTION: Lỗi! Sĩ số của lớp phải > 0. Câu lệnh INSERT đã bị hủy bỏ!"
      });
    }
  };

  const handleDeleteStudent = () => {
    const student = { masv: "01", tensv: "Nguyễn Văn A", malop: "CD10", deletedAt: new Date().toLocaleTimeString() };
    setBackupTable((prev) => [student, ...prev]);
    setDeletedStudents((prev) => [student, ...prev]);
  };

  const handleUpdateScore = (csdl, ctdl) => {
    const avg = ((csdl + ctdl) / 2).toFixed(1);
    setStudentScores({
      masv: "01",
      tensv: "Nguyễn Văn A",
      diemCSDL: csdl,
      diemCTDL: ctdl,
      dtb: parseFloat(avg)
    });
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase mb-1">
            <Layers className="w-4 h-4" />
            <span>Interactive Multi-Trigger Sandbox</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Mô Phỏng 4 Ví Dụ Trigger Chuẩn Mực Trong Giáo Trình
          </h3>
        </div>

        {/* 4 Tabs Selector */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono font-bold">
          <button
            onClick={() => setActiveTab("siso")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "siso" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            a) kiemtra_siso
          </button>
          <button
            onClick={() => setActiveTab("xoa")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "xoa" ? "bg-rose-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            b) xoa (Backup)
          </button>
          <button
            onClick={() => setActiveTab("dtb")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "dtb" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            c) dtb (Update)
          </button>
          <button
            onClick={() => setActiveTab("multi")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "multi" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            d) dtb1 (Gộp đa sự kiện)
          </button>
        </div>
      </div>

      {/* TAB A: KIEMTRA_SISO */}
      {activeTab === "siso" && (
        <div>
          <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
            Trigger <code>kiemtra_siso</code> trên bảng <code>lop</code> tự động kiểm tra xem sĩ số lớp mới thêm vào có lớn hơn 0 không. Nếu <code>siso &gt; 0</code> thì <code>Commit tran</code>, ngược lại in thông báo lỗi và gọi <code>Rollback tran</code>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400 block mb-2">1. Thử nghiệm lệnh INSERT INTO lop:</span>
              <div className="flex items-center gap-3 mb-3">
                <label className="text-xs font-mono text-slate-400">Nhập sĩ số (siso):</label>
                <input
                  type="number"
                  value={inputSiso}
                  onChange={(e) => {
                    setInputSiso(parseInt(e.target.value) || 0);
                    setSisoResult(null);
                  }}
                  className="w-28 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white text-center font-bold"
                />
              </div>

              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => {
                    setInputSiso(45);
                    setSisoResult(null);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-700"
                >
                  Sĩ số hợp lệ (45)
                </button>
                <button
                  onClick={() => {
                    setInputSiso(-5);
                    setSisoResult(null);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-rose-400 border border-slate-700"
                >
                  Sĩ số âm (-5)
                </button>
                <button
                  onClick={() => {
                    setInputSiso(0);
                    setSisoResult(null);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-amber-400 border border-slate-700"
                >
                  Sĩ số bằng 0
                </button>
              </div>

              <button
                onClick={handleTestSiso}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Kích hoạt lệnh INSERT vào bảng lop</span>
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">2. Kết quả phản hồi của Trigger:</span>
                {!sisoResult ? (
                  <div className="p-6 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
                    Nhập giá trị sĩ số và bấm 'Kích hoạt lệnh INSERT' để kiểm tra...
                  </div>
                ) : sisoResult.success ? (
                  <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{sisoResult.msg}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      ➔ Bảng <code>inserted</code> có <code>siso = {inputSiso} &gt; 0</code>. Trigger xác nhận hợp lệ.
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 font-mono text-xs">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-rose-400">
                      <XCircle className="w-4 h-4" />
                      <span>{sisoResult.msg}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      ➔ Sĩ số &le; 0 vi phạm ràng buộc nghiệp vụ. Lệnh <code>ROLLBACK TRAN</code> đã phục hồi dữ liệu ban đầu!
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] font-mono text-indigo-300">
                <code>If (select siso from inserted) &gt; 0 Commit tran Else Rollback tran</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB B: XOA (BACKUP TABLE) */}
      {activeTab === "xoa" && (
        <div>
          <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
            Trigger <code>xoa</code> trên bảng <code>sinhvien</code> tự động sao chép dòng dữ liệu từ bảng ảo <code>deleted</code> sang bảng lưu trữ <code>sinhvien_xoa</code> để lưu vết (Audit/Backup).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-mono font-bold text-rose-400 block mb-2">1. Bảng gốc sinhvien:</span>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono mb-3">
                <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1 mb-1">
                  <span>masv: 01</span>
                  <span>tensv: Nguyễn Văn A</span>
                  <span>malop: CD10</span>
                </div>
                <div className="text-slate-500 text-[11px]">Trạng thái: Đang tồn tại trong bảng sinhvien</div>
              </div>

              <button
                onClick={handleDeleteStudent}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Chạy lệnh: DELETE FROM sinhvien WHERE masv = '01'</span>
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">2. Bảng lưu trữ sinhvien_xoa (Tự động nạp từ deleted):</span>
                {backupTable.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
                    Bảng sinhvien_xoa đang trống. Bấm 'Chạy lệnh DELETE' để xem trigger tự động backup...
                  </div>
                ) : (
                  <div className="space-y-2 max-h-36 overflow-y-auto">
                    {backupTable.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs font-mono flex items-center justify-between text-emerald-300">
                        <span>masv: {item.masv} | {item.tensv} ({item.malop})</span>
                        <span className="text-[10px] text-slate-400">{item.deletedAt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] font-mono text-rose-300">
                <code>Insert into sinhvien_xoa select * from deleted</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB C: DTB (UPDATE TRIGGER) */}
      {activeTab === "dtb" && (
        <div>
          <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
            Trigger <code>dtb</code> trên bảng <code>diem</code> tự động tính lại điểm trung bình <code>AVG(diem)</code> và cập nhật thẳng vào cột <code>dtb</code> trên bảng <code>sinhvien</code> mỗi khi có thao tác sửa điểm.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-400 block mb-2">1. Điều chỉnh điểm số trong bảng diem:</span>
              
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Môn CSDL:</span>
                    <span className="font-bold text-indigo-300">{studentScores.diemCSDL} điểm</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={studentScores.diemCSDL}
                    onChange={(e) => handleUpdateScore(parseFloat(e.target.value), studentScores.diemCTDL)}
                    className="w-full accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Môn CTDL:</span>
                    <span className="font-bold text-purple-300">{studentScores.diemCTDL} điểm</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={studentScores.diemCTDL}
                    onChange={(e) => handleUpdateScore(studentScores.diemCSDL, parseFloat(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono">
                Thao tác kéo thanh trượt mô phỏng lệnh <code>UPDATE diem SET diem = ...</code>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">2. Cột dtb tự động nhảy trên bảng sinhvien:</span>
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
                  <span className="text-xs font-mono text-slate-400 block mb-1">Sinh viên 01: {studentScores.tensv}</span>
                  <div className="text-3xl font-extrabold font-mono text-emerald-400 my-1">
                    {studentScores.dtb}
                  </div>
                  <span className="text-[11px] text-emerald-300">✓ Tự động tính: ({studentScores.diemCSDL} + {studentScores.diemCTDL}) / 2</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] font-mono text-amber-300">
                <code>Update sinhvien Set dtb = (select avg(diem) from diem ...)</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB D: DTB1 (MULTI-ACTION TRIGGER) */}
      {activeTab === "multi" && (
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">Trigger gộp nhiều hành động: For insert, update, delete</span>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Có thể kết hợp nhiều sự kiện phân cách bằng dấu phẩy sau từ khóa <code>For</code> hoặc <code>After</code>. Thân trigger sử dụng khối <code>Begin...End</code> để bao bọc các câu lệnh cập nhật và hiển thị danh sách mới.
          </p>

          <pre className="font-mono text-xs text-indigo-200 bg-slate-900/90 p-3 rounded-lg overflow-x-auto leading-relaxed border border-slate-800">
            <code>{`CREATE TRIGGER dtb1 ON diem
FOR insert, update, delete
AS
BEGIN
    -- 1. Cập nhật lại điểm trung bình cho sinh viên tương ứng
    UPDATE sinhvien
    SET dtb = (SELECT AVG(diem) FROM diem WHERE diem.masv = sinhvien.masv GROUP BY sinhvien.masv);

    -- 2. Xuất bảng sinh viên sau khi đồng bộ
    SELECT * FROM sinhvien;
END;`}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
