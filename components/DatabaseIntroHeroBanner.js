"use client";

import React, { useState } from "react";
import {
  Database,
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Server,
  HardDrive,
  FileSpreadsheet,
  Table,
  Lock,
  Search,
  Code2,
  RefreshCw,
  Eye,
  Check,
  XCircle,
  Activity,
  Play,
  FileText,
  KeyRound,
  ShieldAlert,
  ArrowDownUp
} from "lucide-react";

export default function DatabaseIntroHeroBanner() {
  const [activeTab, setActiveTab] = useState("file-vs-dbms");
  const [acidActive, setAcidActive] = useState("A");

  /* =========================================================================
     TAB 1: FILE SYSTEM VS DBMS STATE & LOGIC
     ========================================================================= */
  const [fileSystemData, setFileSystemData] = useState({
    file1: [
      { id: "SV01", name: "Nguyễn Văn An", phone: "0901234567", faculty: "CNTT" },
      { id: "SV02", name: "Trần Thị Bình", phone: "0912345678", faculty: "KTPM" }
    ],
    file2: [
      { id: "SV01", name: "Nguyễn Văn An", phone: "0901234567", tuition: "Đã nộp" },
      { id: "SV02", name: "Trần Thị Bình", phone: "0912345678", tuition: "Chưa nộp" }
    ]
  });

  const [dbmsData, setDbmsData] = useState({
    students: [
      { id: "SV01", name: "Nguyễn Văn An", phone: "0901234567", faculty: "CNTT" },
      { id: "SV02", name: "Trần Thị Bình", phone: "0912345678", faculty: "KTPM" }
    ],
    tuitions: [
      { id: "SV01", tuition: "Đã nộp", semester: "HK1-2026" },
      { id: "SV02", tuition: "Chưa nộp", semester: "HK1-2026" }
    ]
  });

  const [fileAnomaly, setFileAnomaly] = useState(null); // 'inconsistency' | 'concurrency' | null
  const [dbmsSuccess, setDbmsSuccess] = useState(null);

  const handleUpdateFilePhone = () => {
    // Only update in File 1, leaving File 2 outdated (Update Anomaly)
    setFileSystemData(prev => ({
      ...prev,
      file1: prev.file1.map(s => s.id === "SV01" ? { ...s, phone: "0988889999" } : s)
    }));
    setFileAnomaly("inconsistency");
  };

  const handleSimulateFileConflict = () => {
    setFileAnomaly("concurrency");
  };

  const handleUpdateDbmsPhone = () => {
    // Updates centrally in single normalized table
    setDbmsData(prev => ({
      ...prev,
      students: prev.students.map(s => s.id === "SV01" ? { ...s, phone: "0988889999" } : s)
    }));
    setDbmsSuccess("updated");
  };

  const handleResetTab1 = () => {
    setFileSystemData({
      file1: [
        { id: "SV01", name: "Nguyễn Văn An", phone: "0901234567", faculty: "CNTT" },
        { id: "SV02", name: "Trần Thị Bình", phone: "0912345678", faculty: "KTPM" }
      ],
      file2: [
        { id: "SV01", name: "Nguyễn Văn An", phone: "0901234567", tuition: "Đã nộp" },
        { id: "SV02", name: "Trần Thị Bình", phone: "0912345678", tuition: "Chưa nộp" }
      ]
    });
    setDbmsData({
      students: [
        { id: "SV01", name: "Nguyễn Văn An", phone: "0901234567", faculty: "CNTT" },
        { id: "SV02", name: "Trần Thị Bình", phone: "0912345678", faculty: "KTPM" }
      ],
      tuitions: [
        { id: "SV01", tuition: "Đã nộp", semester: "HK1-2026" },
        { id: "SV02", tuition: "Chưa nộp", semester: "HK1-2026" }
      ]
    });
    setFileAnomaly(null);
    setDbmsSuccess(null);
  };

  /* =========================================================================
     TAB 2: 3-SCHEMA ANSI-SPARC STATE & LOGIC
     ========================================================================= */
  const [selectedView, setSelectedView] = useState("student"); // 'student' | 'lecturer' | 'accountant'
  const [hasAddedEmailField, setHasAddedEmailField] = useState(false);
  const [hasIndexedStorage, setHasIndexedStorage] = useState(false);
  const [independenceLog, setIndependenceLog] = useState("");

  const handleToggleLogicalIndependence = () => {
    const next = !hasAddedEmailField;
    setHasAddedEmailField(next);
    if (next) {
      setIndependenceLog("✅ ĐỘC LẬP DỮ LIỆU LOGIC: Đã thêm cột 'Email' vào Lược đồ Quan niệm. Các View Mức Ngoài (Sinh viên, Kế toán) vẫn hoạt động nguyên vẹn mà không cần sửa code ứng dụng!");
    } else {
      setIndependenceLog("Đã khôi phục lược đồ quan niệm ban đầu.");
    }
  };

  const handleTogglePhysicalIndependence = () => {
    const next = !hasIndexedStorage;
    setHasIndexedStorage(next);
    if (next) {
      setIndependenceLog("⚡ ĐỘC LẬP DỮ LIỆU VẬT LÝ: Đã chuyển đổi cấu trúc lưu trữ từ Heap File sang B+ Tree Clustered Index trên đĩa. Toàn bộ câu truy vấn SQL ở Mức Quan niệm và Mức Ngoài không cần thay đổi bất kỳ ký tự nào!");
    } else {
      setIndependenceLog("Đã chuyển về cấu trúc lưu trữ tuần tự thông thường.");
    }
  };

  /* =========================================================================
     TAB 3: LIVE SQL QUERY & BUFFER POOL MINI-ENGINE
     ========================================================================= */
  const [activeSqlPreset, setActiveSqlPreset] = useState("select-high-gpa");
  const [bufferPool, setBufferPool] = useState({
    page101: { loaded: true, table: "SinhVien", hitCount: 3 },
    page102: { loaded: false, table: "MonHoc", hitCount: 0 },
    page103: { loaded: false, table: "KetQua", hitCount: 0 }
  });
  const [queryExecutionState, setQueryExecutionState] = useState(null); // { status: 'hit'|'miss', timeMs: number, log: string, rows: [] }

  const sqlPresets = {
    "select-high-gpa": {
      query: "SELECT MaSV, HoTen, DiemTB, Khoa\nFROM SinhVien\nWHERE DiemTB >= 8.5;",
      targetPage: "page101",
      result: [
        { MaSV: "SV01", HoTen: "Nguyễn Văn An", DiemTB: 8.8, Khoa: "CNTT" },
        { MaSV: "SV04", HoTen: "Phạm Minh Đức", DiemTB: 9.1, Khoa: "KHMT" }
      ]
    },
    "select-join": {
      query: "SELECT S.HoTen, K.DiemThi\nFROM SinhVien S JOIN KetQua K ON S.MaSV = K.MaSV\nWHERE K.MaMH = 'CSDL';",
      targetPage: "page103",
      result: [
        { HoTen: "Nguyễn Văn An", DiemThi: 9.0 },
        { HoTen: "Trần Thị Bình", DiemThi: 8.5 }
      ]
    },
    "update-student": {
      query: "UPDATE SinhVien\nSET Khoa = 'Trí Tuệ Nhân Tạo'\nWHERE MaSV = 'SV01';",
      targetPage: "page101",
      result: [{ RowsAffected: 1, Status: "COMMIT SUCCESS (WAL Redo Log Generated)" }]
    }
  };

  const handleExecuteSql = (presetKey) => {
    const selected = sqlPresets[presetKey || activeSqlPreset];
    const isPageInMemory = bufferPool[selected.targetPage]?.loaded;

    if (isPageInMemory) {
      setQueryExecutionState({
        status: "hit",
        timeMs: 0.18,
        log: `⚡ CACHE HIT (RAM Buffer Pool): Trang dữ liệu [${selected.targetPage.toUpperCase()}] đã sẵn sàng trong RAM. Không tốn chi phí Disk I/O!`,
        rows: selected.result
      });
      setBufferPool(prev => ({
        ...prev,
        [selected.targetPage]: { ...prev[selected.targetPage], hitCount: prev[selected.targetPage].hitCount + 1 }
      }));
    } else {
      setQueryExecutionState({
        status: "miss",
        timeMs: 11.45,
        log: `⚠️ CACHE MISS (Disk I/O): Trang [${selected.targetPage.toUpperCase()}] chưa có trong RAM. Hệ thống đã đọc từ Ổ đĩa cứng nạp lên Buffer Pool. Lần truy vấn sau sẽ đạt Cache Hit tức thì!`,
        rows: selected.result
      });
      setBufferPool(prev => ({
        ...prev,
        [selected.targetPage]: { loaded: true, table: prev[selected.targetPage].table, hitCount: 1 }
      }));
    }
  };

  const handleClearBufferPool = () => {
    setBufferPool({
      page101: { loaded: false, table: "SinhVien", hitCount: 0 },
      page102: { loaded: false, table: "MonHoc", hitCount: 0 },
      page103: { loaded: false, table: "KetQua", hitCount: 0 }
    });
    setQueryExecutionState(null);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-orange-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 shadow-xl shadow-orange-950/5 text-slate-800 mb-10">
      {/* Background Ambience & Subtle Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(234,88,12,0.08),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="relative z-10 px-6 pt-8 pb-6 border-b border-orange-200/60 bg-white/70 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white">
              <Database className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-orange-100 text-orange-700 border border-orange-300">
                  Chương I • Kiến Trúc CSDL
                </span>
                <span className="flex items-center gap-1 text-xs text-amber-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Interactive Cyber-Vault
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Giới Thiệu Hệ Cơ Sở Dữ Liệu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">(DBMS)</span>
              </h1>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex items-center gap-2 bg-slate-100/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-600 px-2 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-orange-600" /> Chuẩn ACID:
            </span>
            {[
              { key: "A", title: "Atomicity (Nguyên tử)", desc: "Tất cả hoặc không gì cả (All-or-Nothing). Giao dịch hoặc hoàn tất 100% hoặc Rollback." },
              { key: "C", title: "Consistency (Nhất quán)", desc: "Bảo toàn mọi ràng buộc toàn vẹn (PK, FK, Check) trước và sau giao dịch." },
              { key: "I", title: "Isolation (Cô lập)", desc: "Các giao dịch chạy đồng thời không can thiệp, không thấy dữ liệu dở dang của nhau." },
              { key: "D", title: "Durability (Bền vững)", desc: "Dữ liệu sau khi COMMIT được ghi vĩnh viễn trên đĩa, an toàn kể cả mất điện." }
            ].map(acid => (
              <button
                key={acid.key}
                onClick={() => setAcidActive(acid.key)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                  acidActive === acid.key
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
                title={acid.title}
              >
                {acid.key}
              </button>
            ))}
          </div>
        </div>

        {/* ACID Detail Drawer */}
        <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-orange-50/80 border border-orange-200 text-xs text-slate-700 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-orange-700">
              {acidActive === "A" && "[A] Atomicity (Tính Nguyên tử):"}
              {acidActive === "C" && "[C] Consistency (Tính Nhất quán):"}
              {acidActive === "I" && "[I] Isolation (Tính Cô lập):"}
              {acidActive === "D" && "[D] Durability (Tính Bền vững):"}
            </span>
            <span className="text-slate-600">
              {acidActive === "A" && "Đảm bảo mọi thao tác trong một Transaction đều thành công, nếu 1 bước lỗi sẽ tự động hoàn tác toàn bộ (Rollback)."}
              {acidActive === "C" && "Cơ sở dữ liệu luôn chuyển từ một trạng thái hợp lệ này sang trạng thái hợp lệ khác, không vi phạm ràng buộc."}
              {acidActive === "I" && "Dùng cơ chế Khóa (Locking) hoặc MVCC để các tiến trình đồng thời không gây xung đột hay đọc dữ liệu rác (Dirty Read)."}
              {acidActive === "D" && "Sử dụng Nhật ký Ghi trước (WAL - Write-Ahead Logging) để khôi phục trạng thái chính xác ngay cả khi sập nguồn."}
            </span>
          </div>
          <span className="text-[11px] text-amber-700 font-mono font-bold shrink-0">ANSI SQL Standard</span>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap gap-2 mt-5">
          <button
            onClick={() => setActiveTab("file-vs-dbms")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
              activeTab === "file-vs-dbms"
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 ring-2 ring-orange-400/30"
                : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            Tab 1: Đấu Trường File System vs DBMS
          </button>

          <button
            onClick={() => setActiveTab("ansi-sparc")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
              activeTab === "ansi-sparc"
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 ring-2 ring-orange-400/30"
                : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            Tab 2: Kiến Trúc 3 Tầng ANSI-SPARC
          </button>

          <button
            onClick={() => setActiveTab("live-sql")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
              activeTab === "live-sql"
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 ring-2 ring-orange-400/30"
                : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Tab 3: Live SQL & Buffer Manager Engine
          </button>
        </div>
      </div>

      {/* BODY CONTENT AREA */}
      <div className="relative z-10 p-6">
        {/* =====================================================================
            TAB 1: FILE SYSTEM VS DBMS DUEL ARENA
            ===================================================================== */}
        {activeTab === "file-vs-dbms" && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-700 flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-600" />
                <span>Thao tác thử nghiệm bên dưới để chứng kiến sự khác biệt giữa <strong>Xử lý tập tin truyền thống</strong> và <strong>Hệ quản trị CSDL</strong>.</span>
              </div>
              <button
                onClick={handleResetTab1}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Khôi phục ban đầu
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT: FILE SYSTEM ARENA */}
              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-rose-200/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-900 text-sm sm:text-base">Hệ Thống Tập Tin (File System)</h3>
                      <p className="text-[11px] text-slate-600">Lưu trữ rời rạc, trùng lặp & cô lập</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-rose-100 text-rose-700 border border-rose-300">
                    Legacy File
                  </span>
                </div>

                {/* File 1 Table */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span className="font-mono text-amber-800 font-bold flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-amber-600" /> File_PhongDaoTao.csv
                    </span>
                    <span className="text-[11px] text-slate-500">Chứa SĐT sinh viên</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-100">
                          <th className="text-left pb-1.5">MaSV</th>
                          <th className="text-left pb-1.5">HoTen</th>
                          <th className="text-left pb-1.5">SDT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fileSystemData.file1.map(row => (
                          <tr key={row.id} className="border-b border-slate-100">
                            <td className="py-1.5 text-slate-800 font-bold">{row.id}</td>
                            <td className="py-1.5 text-slate-700">{row.name}</td>
                            <td className={`py-1.5 ${row.id === "SV01" && fileAnomaly === "inconsistency" ? "text-amber-700 font-bold bg-amber-50 px-1.5 rounded" : "text-slate-600"}`}>
                              {row.phone}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* File 2 Table */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span className="font-mono text-amber-800 font-bold flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-amber-600" /> File_PhongKeToan.csv
                    </span>
                    <span className="text-[11px] text-rose-600 font-bold">Trùng lặp SĐT sinh viên!</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-100">
                          <th className="text-left pb-1.5">MaSV</th>
                          <th className="text-left pb-1.5">SDT (Lặp lại)</th>
                          <th className="text-left pb-1.5">HocPhi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fileSystemData.file2.map(row => (
                          <tr key={row.id} className="border-b border-slate-100">
                            <td className="py-1.5 text-slate-800 font-bold">{row.id}</td>
                            <td className={`py-1.5 ${row.id === "SV01" && fileAnomaly === "inconsistency" ? "text-rose-700 font-bold bg-rose-100 px-1.5 rounded" : "text-slate-600"}`}>
                              {row.phone}
                            </td>
                            <td className="py-1.5 text-emerald-700 font-semibold">{row.tuition}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons for File System */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={handleUpdateFilePhone}
                    className="flex-1 px-3 py-2 text-xs font-semibold rounded-xl bg-rose-100 text-rose-800 hover:bg-rose-200 border border-rose-300 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    Cập nhật SĐT SV01 (Chỉ sửa File 1)
                  </button>
                  <button
                    onClick={handleSimulateFileConflict}
                    className="px-3 py-2 text-xs font-semibold rounded-xl bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-1 shadow-sm"
                  >
                    <Lock className="w-3.5 h-3.5" /> Ghi đồng thời
                  </button>
                </div>

                {/* Anomaly Feedback Notice */}
                {fileAnomaly === "inconsistency" && (
                  <div className="p-3.5 rounded-xl bg-rose-100/90 border border-rose-300 text-xs text-rose-900 space-y-1 animate-fadeIn shadow-sm">
                    <div className="font-bold flex items-center gap-1.5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-600" /> Dị thường không nhất quán (Data Inconsistency)!
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      SĐT của SV01 ở <strong>File 1</strong> là <code className="text-amber-800 font-bold bg-white px-1 rounded">0988889999</code> nhưng ở <strong>File 2</strong> vẫn là <code className="text-rose-800 font-bold bg-white px-1 rounded">0901234567</code>. Dữ liệu bị sai lệch nghiêm trọng do không có cơ chế quản lý tập trung!
                    </p>
                  </div>
                )}

                {fileAnomaly === "concurrency" && (
                  <div className="p-3.5 rounded-xl bg-rose-100/90 border border-rose-300 text-xs text-rose-900 space-y-1 animate-fadeIn shadow-sm">
                    <div className="font-bold flex items-center gap-1.5 text-rose-800">
                      <Lock className="w-4 h-4 text-rose-600" /> Xung đột đồng thời (Concurrency Deadlock / Lost Update)!
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      Khi 2 ứng dụng cùng mở ghi vào 1 file CSV, hệ điều hành khóa file khiến 1 tiến trình bị Crash hoặc ghi đè làm mất dữ liệu (Lost Update).
                    </p>
                  </div>
                )}
              </div>

              {/* RIGHT: DBMS ARENA */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-900 text-sm sm:text-base">Hệ Quản Trị CSDL (DBMS)</h3>
                      <p className="text-[11px] text-slate-600">Chuẩn hóa, Toàn vẹn & Khóa đồng thời</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Relational DBMS
                  </span>
                </div>

                {/* Normalized Table 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span className="font-mono text-orange-700 font-bold flex items-center gap-1">
                      <Table className="w-3.5 h-3.5" /> Bảng: SinhVien (PK: MaSV)
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold">Duy nhất 1 nơi lưu SĐT</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-100">
                          <th className="text-left pb-1.5">MaSV (PK)</th>
                          <th className="text-left pb-1.5">HoTen</th>
                          <th className="text-left pb-1.5">SDT</th>
                          <th className="text-left pb-1.5">Khoa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dbmsData.students.map(row => (
                          <tr key={row.id} className="border-b border-slate-100">
                            <td className="py-1.5 text-orange-600 font-bold">{row.id}</td>
                            <td className="py-1.5 text-slate-700">{row.name}</td>
                            <td className={`py-1.5 ${row.id === "SV01" && dbmsSuccess ? "text-emerald-700 font-bold bg-emerald-50 px-1.5 rounded" : "text-slate-600"}`}>
                              {row.phone}
                            </td>
                            <td className="py-1.5 text-slate-500">{row.faculty}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Normalized Table 2 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span className="font-mono text-orange-700 font-bold flex items-center gap-1">
                      <Table className="w-3.5 h-3.5" /> Bảng: HocPhi (FK: MaSV)
                    </span>
                    <span className="text-[11px] text-slate-500">Tham chiếu qua Khóa Ngoại</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-100">
                          <th className="text-left pb-1.5">MaSV (FK)</th>
                          <th className="text-left pb-1.5">HocPhi</th>
                          <th className="text-left pb-1.5">HocKy</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dbmsData.tuitions.map(row => (
                          <tr key={row.id} className="border-b border-slate-100">
                            <td className="py-1.5 text-orange-600 font-bold">{row.id}</td>
                            <td className="py-1.5 text-emerald-700 font-bold">{row.tuition}</td>
                            <td className="py-1.5 text-slate-500">{row.semester}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons for DBMS */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={handleUpdateDbmsPhone}
                    className="flex-1 px-3 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    Chạy 1 lệnh SQL: UPDATE SinhVien...
                  </button>
                </div>

                {/* DBMS Success Notice */}
                {dbmsSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-100/90 border border-emerald-300 text-xs text-emerald-900 space-y-1 animate-fadeIn shadow-sm">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Nhất quán hoàn hảo (Data Consistency 100%)!
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      DBMS chỉ lưu SĐT ở duy nhất bảng SinhVien. Mọi ứng dụng khi JOIN tra cứu đều nhận được số mới <code className="text-emerald-800 font-bold bg-white px-1 rounded font-mono">0988889999</code> mà không có bất kỳ dị thường nào!
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Comparison Summary Matrix */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-500" /> Bảng Tổng Hợp So Sánh Trực Quan: File System vs DBMS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[11px] font-semibold">Dư thừa dữ liệu (Redundancy)</div>
                  <div className="mt-1 font-bold text-rose-700">File: Rất cao (Lặp lại)</div>
                  <div className="text-emerald-700 font-bold">DBMS: Tối thiểu hóa (Chuẩn hóa)</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[11px] font-semibold">Tính toàn vẹn (Integrity)</div>
                  <div className="mt-1 font-bold text-rose-700">File: Khó kiểm soát</div>
                  <div className="text-emerald-700 font-bold">DBMS: Ràng buộc tự động</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[11px] font-semibold">Độc lập dữ liệu (Independence)</div>
                  <div className="mt-1 font-bold text-rose-700">File: Phụ thuộc mã lệnh</div>
                  <div className="text-emerald-700 font-bold">DBMS: Độc lập 2 mức</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[11px] font-semibold">Bảo mật & Đồng thời</div>
                  <div className="mt-1 font-bold text-rose-700">File: Phân quyền thô sơ</div>
                  <div className="text-emerald-700 font-bold">DBMS: User Roles + Lock ACID</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: 3-SCHEMA ARCHITECTURE (ANSI-SPARC)
            ===================================================================== */}
        {activeTab === "ansi-sparc" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs text-slate-700 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span>
                  Kiến trúc 3 mức <strong>ANSI-SPARC</strong> phân tách thế giới người dùng, lược đồ quan niệm toàn cục và cấu trúc vật lý trên đĩa nhằm đạt được <strong>Tính Độc Lập Dữ Liệu</strong>.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleLogicalIndependence}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    hasAddedEmailField
                      ? "bg-orange-600 text-white border-orange-500 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  ⚡ Thử nghiệm Độc lập Logic
                </button>
                <button
                  onClick={handleTogglePhysicalIndependence}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    hasIndexedStorage
                      ? "bg-amber-600 text-white border-amber-500 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  ⚡ Thử nghiệm Độc lập Vật lý
                </button>
              </div>
            </div>

            {/* Independence Notification Log */}
            {independenceLog && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 animate-fadeIn shadow-sm">
                {independenceLog}
              </div>
            )}

            {/* 3 TIERS VISUALIZER CONTAINER */}
            <div className="space-y-4">
              {/* TIER 1: EXTERNAL LEVEL (VIEWS) */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/80 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                      Mức Ngoài (External Level / User Views)
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500">Tùy biến góc nhìn cho từng đối tượng người dùng</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* View 1: Sinh Vien */}
                  <div
                    onClick={() => setSelectedView("student")}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      selectedView === "student"
                        ? "bg-white border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-400/30"
                        : "bg-white/80 border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-blue-900">View_SinhVien</span>
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">Chỉ xem: Mã SV, Họ Tên, Điểm TB (Ẩn học phí, số tài khoản ngân hàng)</p>
                  </div>

                  {/* View 2: Giang Vien */}
                  <div
                    onClick={() => setSelectedView("lecturer")}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      selectedView === "lecturer"
                        ? "bg-white border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-400/30"
                        : "bg-white/80 border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-blue-900">View_GiangVien</span>
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">Xem: Điểm thi, Lớp học phần, Chuyên cần, Đánh giá rèn luyện</p>
                  </div>

                  {/* View 3: Ke Toan */}
                  <div
                    onClick={() => setSelectedView("accountant")}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      selectedView === "accountant"
                        ? "bg-white border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-400/30"
                        : "bg-white/80 border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-blue-900">View_KeToan</span>
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">Xem: Mã SV, Số tiền học phí cần đóng, Trạng thái thanh toán</p>
                  </div>
                </div>
              </div>

              {/* Connecting Mapping Flow Arrow 1 */}
              <div className="flex justify-center -my-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] text-slate-600 font-mono shadow-sm">
                  <ArrowDownUp className="w-3 h-3 text-orange-600 animate-bounce" /> Ánh Xạ Ngoài - Quan Niệm (External/Conceptual Mapping)
                </div>
              </div>

              {/* TIER 2: CONCEPTUAL LEVEL */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">
                      Mức Quan Niệm (Conceptual / Logical Schema)
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500">Toàn bộ thực thể, thuộc tính và mối quan hệ ERD toàn cầu</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 font-mono text-xs space-y-2 shadow-sm">
                  <div className="text-slate-700 flex items-center gap-2">
                    <Table className="w-4 h-4 text-orange-600" />
                    <span className="font-bold text-slate-900">LƯỢC ĐỒ QUAN HỆ TOÀN CỤC (Global Relational Schema):</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800">
                      <span className="text-orange-700 font-bold">SINH_VIEN</span> (
                      <span className="underline text-amber-700 font-bold">MaSV</span>, HoTen, NgaySinh, QueQuan, Khoa
                      {hasAddedEmailField && (
                        <span className="text-emerald-700 font-bold bg-emerald-100 px-1 py-0.5 rounded ml-1 animate-pulse">
                          , Email (MỚI THÊM)
                        </span>
                      )}
                      )
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800">
                      <span className="text-orange-700 font-bold">KET_QUA</span> (
                      <span className="underline text-amber-700 font-bold">MaSV, MaMH</span>, DiemThi, LanThi)
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Mapping Flow Arrow 2 */}
              <div className="flex justify-center -my-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] text-slate-600 font-mono shadow-sm">
                  <ArrowDownUp className="w-3 h-3 text-amber-600 animate-bounce" /> Ánh Xạ Quan Niệm - Trong (Conceptual/Internal Mapping)
                </div>
              </div>

              {/* TIER 3: INTERNAL LEVEL (PHYSICAL STORAGE) */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/80 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wide">
                      Mức Trong (Internal / Physical Storage Level)
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500">Cấu trúc lưu trữ vật lý trên đĩa cứng & B-Tree Index</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-emerald-800 font-bold mb-1 flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5 text-emerald-600" /> File Block Layout
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      Block Size: 4096 Bytes<br />
                      Record Offset: 64 Bytes<br />
                      Allocation: Extent-based
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-emerald-800 font-bold mb-1 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-emerald-600" /> Chỉ Mục (Indexing)
                    </div>
                    <div className={`text-[11px] leading-relaxed ${hasIndexedStorage ? "text-emerald-700 font-bold" : "text-slate-600"}`}>
                      {hasIndexedStorage ? "B+ Tree Clustered Index (MaSV)" : "Sequential Heap File Scan (Chưa đánh index)"}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-emerald-800 font-bold mb-1 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" /> Nén & Bảo Mật
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      Compression: ZSTD Level 3<br />
                      Encryption: AES-256 at Rest
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: LIVE SQL QUERY & BUFFER POOL MINI-ENGINE
            ===================================================================== */}
        {activeTab === "live-sql" && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-700 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-600" />
                <span>
                  Trải nghiệm <strong>Live Query Engine</strong>: Xem cơ chế <strong>Buffer Manager</strong> nạp Data Pages từ Đĩa lên RAM Cache.
                </span>
              </div>
              <button
                onClick={handleClearBufferPool}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Xóa sạch RAM Buffer Pool
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* SQL QUERY EDITOR & PRESETS (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Chọn câu lệnh SQL mẫu:
                  </label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      { id: "select-high-gpa", title: "1. Lọc SV Điểm Cao (Page 101)", desc: "SELECT * FROM SinhVien WHERE DiemTB >= 8.5" },
                      { id: "select-join", title: "2. JOIN Bảng Kết Quả (Page 103)", desc: "SELECT HoTen, DiemThi FROM SinhVien JOIN..." },
                      { id: "update-student", title: "3. UPDATE Khoa (Ghi WAL Log)", desc: "UPDATE SinhVien SET Khoa = 'AI'..." }
                    ].map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveSqlPreset(p.id);
                          handleExecuteSql(p.id);
                        }}
                        className={`text-left p-2.5 rounded-xl border transition-all ${
                          activeSqlPreset === p.id
                            ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="text-xs font-bold text-orange-800">{p.title}</div>
                        <div className="text-[11px] font-mono text-slate-500 truncate">{p.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* SQL Code Block - Dark Terminal Theme */}
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 font-mono text-xs text-amber-300 shadow-md">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase font-bold mb-2 pb-1.5 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    </div>
                    <span>SQL Query Terminal</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed">{sqlPresets[activeSqlPreset].query}</pre>
                </div>

                <button
                  onClick={() => handleExecuteSql(activeSqlPreset)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <Play className="w-4 h-4 fill-white" /> Thực thi truy vấn (Run SQL)
                </button>
              </div>

              {/* BUFFER POOL & DISK STORAGE SIMULATOR (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* BUFFER POOL RAM BOX */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-600" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        RAM Cache (Buffer Pool / Memory Manager)
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold">Tốc độ siêu tốc ~0.15ms</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(bufferPool).map(([pageKey, pageInfo]) => (
                      <div
                        key={pageKey}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          pageInfo.loaded
                            ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                            : "bg-slate-50 border-dashed border-slate-200 text-slate-400"
                        }`}
                      >
                        <div className="text-xs font-bold font-mono">{pageKey.toUpperCase()}</div>
                        <div className="text-[10px] mt-0.5 font-sans font-semibold">{pageInfo.table}</div>
                        <div className="text-[10px] mt-1 font-mono">
                          {pageInfo.loaded ? (
                            <span className="text-emerald-700 font-bold">Hits: {pageInfo.hitCount}</span>
                          ) : (
                            <span>Empty</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DISK STORAGE BOX */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-amber-600" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Lưu Trữ Ổ Đĩa Cứng (Disk Storage / Tablespace)
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-amber-700 font-bold">Chi phí I/O ~10-15ms</span>
                  </div>

                  <div className="flex items-center justify-around gap-2 text-xs font-mono text-slate-600">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Server className="w-3.5 h-3.5 text-amber-600" /> Tablespace_Data.dbf
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold">
                      <FileText className="w-3.5 h-3.5 text-orange-600" /> Redo_Log_WAL.log
                    </div>
                  </div>
                </div>

                {/* QUERY RESULT GRID & STATS */}
                {queryExecutionState && (
                  <div className="p-4 rounded-2xl bg-white border border-orange-200 shadow-sm space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        {queryExecutionState.status === "hit" ? (
                          <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-emerald-600" /> CACHE HIT
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                            <RefreshCw className="w-3 h-3 text-amber-600" /> CACHE MISS (Disk Read)
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-700 font-bold">
                          Thời gian thực thi: <span className="text-orange-600">{queryExecutionState.timeMs} ms</span>
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 font-sans leading-relaxed">
                      {queryExecutionState.log}
                    </p>

                    {/* Result Table Data */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-2.5 font-mono text-xs shadow-inner">
                      <table className="w-full">
                        <thead>
                          <tr className="text-slate-500 border-b border-slate-200 text-left">
                            {Object.keys(queryExecutionState.rows[0] || {}).map(k => (
                              <th key={k} className="pb-1.5 px-2">{k}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {queryExecutionState.rows.map((r, i) => (
                            <tr key={i} className="border-b border-slate-100">
                              {Object.values(r).map((v, j) => (
                                <td key={j} className="py-1.5 px-2 text-slate-800">{String(v)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
