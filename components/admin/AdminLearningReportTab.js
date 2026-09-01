"use client";
import React, { useState, useEffect, useCallback } from "react";
import { adminApi } from "../../lib/client/api";
import { FileSpreadsheet, FileText, Filter, CheckCircle2, AlertCircle, RefreshCw, Loader2, Download } from "lucide-react";
import ExcelJS from "exceljs";
import jsPDF from "jspdf";

export default function AdminLearningReportTab() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [filters, setFilters] = useState({
    subjectId: "",
    completion: "all",
    needsReview: "all"
  });

  const fetchReport = useCallback(async () => {
    try {
      setLoading(true);
      const res = await adminApi.getReport(filters);
      if (res.ok && res.data) {
        setReport(res.data);
      }
    } catch (err) {
      console.warn("Failed to fetch learning report:", err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchReport();
  }, [fetchReport]);

  // Export to Excel using ExcelJS
  const handleExportExcel = async () => {
    if (!report) return;
    try {
      setExporting(true);
      const workbook = new ExcelJS.Workbook();
      workbook.creator = "StudyMaster Admin System";
      workbook.created = new Date();

      const sheet = workbook.addWorksheet("Báo cáo Tiến độ Học tập");
      sheet.columns = [
        { header: "Mã Học viên (UID)", key: "uid", width: 22 },
        { header: "Tên Học viên", key: "displayName", width: 25 },
        { header: "Email", key: "email", width: 28 },
        { header: "Môn học", key: "subjectId", width: 18 },
        { header: "Mã Chương", key: "chapterId", width: 15 },
        { header: "Số tiểu mục hoàn thành", key: "completedSubsections", width: 24 },
        { header: "Tổng tiểu mục yêu cầu", key: "totalRequiredSubsections", width: 22 },
        { header: "Đạt chương", key: "completed", width: 14 },
        { header: "Điểm Quiz cao nhất", key: "bestQuizScore10", width: 20 },
        { header: "Số nội dung cần ôn", key: "reviewItemsCount", width: 20 }
      ];

      // Format header row
      sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
      sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };

      report.users.forEach((u) => {
        (u.subjects || []).forEach((s) => {
          (s.chapters || []).forEach((c) => {
            sheet.addRow({
              uid: u.uid,
              displayName: u.displayName,
              email: u.email || "N/A",
              subjectId: s.subjectId,
              chapterId: c.chapterId,
              completedSubsections: c.completedSubsections,
              totalRequiredSubsections: c.totalRequiredSubsections,
              completed: c.completed ? "ĐÃ ĐẠT" : "CHƯA",
              bestQuizScore10: c.bestQuizScore10 !== null ? `${c.bestQuizScore10}/10` : "N/A",
              reviewItemsCount: c.reviewItemsCount || 0
            });
          });
        });
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `studymaster-learning-report-${Date.now()}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.warn("Export Excel error:", err);
    } finally {
      setExporting(false);
    }
  };

  // Export to PDF using jsPDF
  const handleExportPDF = async () => {
    if (!report) return;
    try {
      setExporting(true);
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("StudyMaster - Bao Cao Tien Do Hoc Tap", 14, 20);

      doc.setFontSize(10);
      doc.text(`Ngay xuat bao cao: ${new Date().toLocaleDateString("vi-VN")}`, 14, 28);
      doc.text(`Tong so hoc vien: ${report.summary.totalUsers}`, 14, 34);
      doc.text(`So chuong da hoan thanh: ${report.summary.completedChapters}`, 14, 40);
      doc.text(`So hoc vien can on tap: ${report.summary.usersNeedingReview}`, 14, 46);

      let yPos = 56;
      doc.setFontSize(11);
      doc.text("Danh sach hoc vien & tien do:", 14, yPos);
      yPos += 8;

      doc.setFontSize(9);
      report.users.slice(0, 15).forEach((u, idx) => {
        const textLine = `${idx + 1}. ${u.displayName} (${u.uid.slice(0, 8)}) - So mon: ${u.subjects?.length || 0}`;
        doc.text(textLine, 14, yPos);
        yPos += 6;
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
      });

      doc.save(`studymaster-learning-report-${Date.now()}.pdf`);
    } catch (err) {
      console.warn("Export PDF error:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white rounded-3xl border border-stone-200 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Phân hệ Quản trị</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-850">Báo cáo Học tập & Tiến độ</h2>
          <p className="text-xs text-stone-500 mt-1">
            Tổng hợp thời gian thực ma trận hoàn thành bài đọc, điểm thi và danh sách học viên cần phụ đạo ôn tập.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={fetchReport}
            disabled={loading}
            className="p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Làm mới</span>
          </button>
          <button
            type="button"
            onClick={handleExportExcel}
            disabled={exporting || !report}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Xuất Excel (.xlsx)</span>
          </button>
          <button
            type="button"
            onClick={handleExportPDF}
            disabled={exporting || !report}
            className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-95 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Xuất PDF</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      {report && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <span className="text-stone-400 text-xs font-bold block mb-1">TỔNG HỌC VIÊN</span>
            <span className="text-xl font-extrabold text-stone-850">{report.summary.totalUsers}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <span className="text-emerald-600 text-xs font-bold block mb-1">CHƯƠNG ĐẠT</span>
            <span className="text-xl font-extrabold text-emerald-700">{report.summary.completedChapters}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <span className="text-amber-600 text-xs font-bold block mb-1">ĐANG HỌC</span>
            <span className="text-xl font-extrabold text-amber-700">{report.summary.incompleteChapters}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <span className="text-blue-600 text-xs font-bold block mb-1">LƯỢT LÀM QUIZ</span>
            <span className="text-xl font-extrabold text-blue-700">{report.summary.quizAttempts}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <span className="text-rose-600 text-xs font-bold block mb-1">CẦN ÔN TẬP</span>
            <span className="text-xl font-extrabold text-rose-700">{report.summary.usersNeedingReview}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <span className="text-purple-600 text-xs font-bold block mb-1">FLASHCARD ĐẾN HẠN</span>
            <span className="text-xl font-extrabold text-purple-700">{report.summary.dueFlashcards}</span>
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-wrap items-center gap-3 text-xs">
        <span className="font-bold text-stone-500 flex items-center gap-1.5">
          <Filter className="w-4 h-4" />
          <span>Bộ lọc:</span>
        </span>
        <select
          value={filters.subjectId}
          onChange={(e) => setFilters((prev) => ({ ...prev, subjectId: e.target.value }))}
          className="p-2 rounded-xl border border-stone-200 bg-stone-50 font-semibold text-stone-800"
        >
          <option value="">Tất cả môn học</option>
          <option value="cloud-computing">Điện toán đám mây</option>
          <option value="tu-tuong-hcm">Tư tưởng Hồ Chí Minh</option>
          <option value="lich-su-dang">Lịch sử Đảng</option>
        </select>
        <select
          value={filters.completion}
          onChange={(e) => setFilters((prev) => ({ ...prev, completion: e.target.value }))}
          className="p-2 rounded-xl border border-stone-200 bg-stone-50 font-semibold text-stone-800"
        >
          <option value="all">Mọi trạng thái hoàn thành</option>
          <option value="completed">Đã hoàn thành chương</option>
          <option value="incomplete">Chưa hoàn thành</option>
        </select>
      </div>

      {/* Report Table */}
      <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs overflow-x-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <Loader2 className="w-8 h-8 text-accent animate-spin" />
            <span className="text-xs font-bold text-stone-400 tracking-wider uppercase">Đang nạp báo cáo...</span>
          </div>
        ) : !report || report.users.length === 0 ? (
          <div className="text-center py-12 text-stone-400 text-sm font-semibold">
            Không có dữ liệu học tập phù hợp với bộ lọc hiện tại.
          </div>
        ) : (
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50/70 text-stone-600 font-bold">
                <th className="p-3.5">Học viên</th>
                <th className="p-3.5">Môn học</th>
                <th className="p-3.5 text-center">Tiểu mục Đạt</th>
                <th className="p-3.5 text-center">Trạng thái Chương</th>
                <th className="p-3.5 text-center">Điểm Quiz Cao nhất</th>
                <th className="p-3.5 text-center">Cần Ôn tập</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {report.users.map((u) => (
                <React.Fragment key={u.uid}>
                  {u.subjects?.map((s) =>
                    s.chapters?.map((c, cIdx) => (
                      <tr key={`${u.uid}-${s.subjectId}-${c.chapterId || cIdx}`} className="hover:bg-stone-50/60">
                        <td className="p-3.5 font-bold text-stone-850">
                          <div>{u.displayName}</div>
                          <div className="text-[10px] text-stone-400 font-normal">{u.email || u.uid}</div>
                        </td>
                        <td className="p-3.5 font-medium text-stone-700">
                          <span className="font-bold">{s.subjectId}</span>
                          <span className="text-stone-400 block text-[10px]">{c.chapterId}</span>
                        </td>
                        <td className="p-3.5 text-center font-bold text-stone-800">
                          {c.completedSubsections} / {c.totalRequiredSubsections}
                        </td>
                        <td className="p-3.5 text-center">
                          {c.completed ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Hoàn thành</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-bold text-[10px]">
                              <span>Đang học</span>
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-center font-bold">
                          {c.bestQuizScore10 !== null ? (
                            <span className={c.bestQuizScore10 >= 7.0 ? "text-emerald-600 font-extrabold" : "text-amber-600"}>
                              {c.bestQuizScore10} / 10
                            </span>
                          ) : (
                            <span className="text-stone-400">Chưa thi</span>
                          )}
                        </td>
                        <td className="p-3.5 text-center">
                          {c.reviewItemsCount > 0 ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold text-[10px]">
                              <AlertCircle className="w-3 h-3" />
                              <span>{c.reviewItemsCount} mục</span>
                            </span>
                          ) : (
                            <span className="text-stone-400">0</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
