"use client";
import React, { useState } from "react";
import { Database, Zap, ShieldAlert, Cpu, Terminal, Play, CheckCircle2, Layers, RefreshCw, ArrowRight, Activity, Sparkles, Server, Code } from "lucide-react";

export default function StoredProcedureTriggerCyberHeroBanner() {
  const [activeStage, setActiveStage] = useState("sp");

  const stages = {
    sp: {
      id: "sp",
      title: "Chặng 1: Stored Procedure & Pre-compiled Binary Plan",
      tier: "CHẶNG 1: THỦ TỤC LƯU TRỮ",
      badge: "PRE-COMPILED BINARY PLAN",
      accentColor: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/40",
      textColor: "text-purple-300",
      bgGlow: "bg-purple-500/10",
      summary: "Biên dịch và tối ưu hóa câu lệnh T-SQL một lần duy nhất ở lần gọi đầu tiên (First Execution). Binary Execution Plan được lưu giữ vĩnh viễn trong RAM (Plan Cache) để tái sử dụng ngay lập tức trong các lần chạy sau.",
      mechanism: "Parsing ➔ Catalog Verification ➔ Query Optimization ➔ Plan Cache Generation ➔ Direct RAM Execution.",
      gain: "Tiết kiệm 88% thời gian CPU do bỏ qua bước Compile; Giảm 90% lưu lượng mạng (Client chỉ truyền lệnh EXEC ngắn gọn ~30 bytes).",
      metrics: [
        { label: "Thời gian thực thi CPU", value: "~1.3 ms", sub: "Nhanh hơn 9 lần truy vấn Ad-hoc" },
        { label: "Dung lượng gói tin mạng", value: "~30 Bytes", sub: "Giảm 98% băng thông đường truyền" },
        { label: "Bảo mật & Phân quyền", value: "100% Secure", sub: "Triệt tiêu hoàn toàn SQL Injection" }
      ],
      code: `-- Tạo thủ tục lưu trữ an toàn có tham số OUTPUT
CREATE PROCEDURE dbo.sp_ThongKeDoanhThu
    @MaKH VARCHAR(10),
    @TongTien DECIMAL(18,2) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT @TongTien = ISNULL(SUM(TongTien), 0)
    FROM dbo.HOADON
    WHERE MaKH = @MaKH;
END;
GO
-- Thực thi từ ứng dụng: Tái sử dụng Plan Cache trong RAM
DECLARE @DoanhThu DECIMAL(18,2);
EXEC dbo.sp_ThongKeDoanhThu @MaKH = 'KH001', @TongTien = @DoanhThu OUTPUT;`
    },
    udf: {
      id: "udf",
      title: "Chặng 2: User-Defined Functions (UDF) & Deterministic Calculation",
      tier: "CHẶNG 2: HÀM DO NGƯỜI DÙNG ĐỊNH NGHĨA",
      badge: "DETERMINISTIC IN-QUERY COMPUTATION",
      accentColor: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-300",
      bgGlow: "bg-emerald-500/10",
      summary: "Đóng gói các công thức tính toán logic phức tạp thành hàm có thể gọi trực tiếp bên trong mệnh đề SELECT, WHERE, HAVING hoặc FROM. Phân chia rõ rệt giữa Hàm vô hướng (Scalar UDF) và Hàm bảng nội tuyến (Inline TVF).",
      mechanism: "Scalar Function trả về 1 giá trị đơn lẻ; Inline Table-Valued Function (iTVF) trả về bảng kết quả và được SQL Server nhúng trực tiếp như một View có tham số.",
      gain: "Tái sử dụng công thức nghiệp vụ nhất quán trên toàn bộ hệ thống; Tối ưu hóa kế hoạch thực thi dạng inline cho iTVF.",
      metrics: [
        { label: "Khả năng nhúng truy vấn", value: "SELECT / FROM", sub: "Gọi trực tiếp trong câu lệnh SQL" },
        { label: "Tính toàn vẹn CSDL", value: "Pure Logic", sub: "Nghiêm cấm thay đổi dữ liệu bảng" },
        { label: "Hiệu năng Inline TVF", value: "Tương đương View", sub: "Được tối ưu hóa song song (Parallel)" }
      ],
      code: `-- 1. HÀM BẢNG NỘI TUYẾN (INLINE TVF): Tối ưu hóa cực nhanh
CREATE FUNCTION dbo.fn_LaySanPhamTheoKhoangGia (@GiaMin DECIMAL, @GiaMax DECIMAL)
RETURNS TABLE AS RETURN (
    SELECT MaSP, TenSP, GiaBan, SoLuongTon
    FROM dbo.SANPHAM
    WHERE GiaBan BETWEEN @GiaMin AND @GiaMax
);
GO
-- 2. GỌI HÀM TRỰC TIẾP TRONG MỆNH ĐỀ FROM NHƯ MỘT BẢNG VẬT LÝ:
SELECT * FROM dbo.fn_LaySanPhamTheoKhoangGia(100000, 5000000);`
    },
    trigger: {
      id: "trigger",
      title: "Chặng 3: DML Triggers & Giải Phẫu 2 Bảng Logic Ảo (INSERTED / DELETED)",
      tier: "CHẶNG 3: BẪY SỰ KIỆN DML",
      badge: "RAM VIRTUAL TABLES ANATOMY",
      accentColor: "from-amber-500 to-orange-500",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-300",
      bgGlow: "bg-amber-500/10",
      summary: "Bẫy sự kiện tự động kích hoạt (Auto-fired daemon) ngầm trên Server ngay khi phát sinh lệnh INSERT, UPDATE hoặc DELETE. Phân tích trạng thái dữ liệu trước và sau biến đổi thông qua 2 bảng logic ảo cư trú tạm thời trong RAM.",
      mechanism: "INSERT nạp vào INSERTED; DELETE nạp vào DELETED; UPDATE thực hiện thao tác kép (dữ liệu cũ vào DELETED, dữ liệu mới vào INSERTED).",
      gain: "Kiểm soát các ràng buộc nghiệp vụ phức tạp liên bảng; Ghi nhật ký kiểm toán (Audit Logging); Tự động đồng bộ tồn kho.",
      metrics: [
        { label: "Cơ chế kích hoạt", value: "Tự động 100%", sub: "Không thể gọi trực tiếp bằng EXEC" },
        { label: "Bảng ảo trong RAM", value: "INSERTED / DELETED", sub: "Giải phẫu chính xác dữ liệu cũ & mới" },
        { label: "Phạm vi kiểm soát", value: "Multi-row Ready", sub: "Xử lý hàng loạt dòng trong 1 transaction" }
      ],
      code: `-- AFTER TRIGGER TỰ ĐỘNG KIỂM TRA VÀ TRỪ TỒN KHO AN TOÀN
CREATE TRIGGER trg_CTHD_TruTonKho
ON dbo.CHITIETHOADON AFTER INSERT AS
BEGIN
    SET NOCOUNT ON;
    -- Kiểm tra số lượng tồn kho trước khi chấp nhận bán
    IF EXISTS (
        SELECT 1 FROM dbo.SANPHAM sp
        INNER JOIN inserted ins ON sp.MaSP = ins.MaSP
        WHERE sp.SoLuongTon < ins.SoLuongMua
    )
    BEGIN
        RAISERROR(N'Lỗi: Số lượng tồn kho không đủ để xuất hàng!', 16, 1);
        ROLLBACK TRANSACTION; -- Hủy bỏ toàn bộ giao dịch
        RETURN;
    END;
    -- Trừ kho tự động hàng loạt dòng (Multi-row)
    UPDATE sp SET sp.SoLuongTon = sp.SoLuongTon - ins.SoLuongMua
    FROM dbo.SANPHAM sp INNER JOIN inserted ins ON sp.MaSP = ins.MaSP;
END;`
    },
    insteadof: {
      id: "insteadof",
      title: "Chặng 4: INSTEAD OF Trigger & Quản Trị Giao Dịch (Rollback Safeguard)",
      tier: "CHẶNG 4: ĐÁNH CHẶN & GIAO DỊCH",
      badge: "VIEW INTERCEPTION & ACID GUARD",
      accentColor: "from-rose-500 to-pink-500",
      borderColor: "border-rose-500/40",
      textColor: "text-rose-300",
      bgGlow: "bg-rose-500/10",
      summary: "Đánh chặn và thay thế hoàn toàn câu lệnh DML ban đầu. Cứu cánh cho Khung nhìn (View) kết hợp đa bảng: Cho phép client gọi INSERT/UPDATE vào View, Trigger sẽ tự động phân tách và định tuyến dữ liệu vào các bảng vật lý tương ứng.",
      mechanism: "Lệnh DML ban đầu bị vô hiệu hóa; Logic bên trong INSTEAD OF Trigger nhận dữ liệu từ bảng INSERTED và thực hiện các thao tác chèn/sửa tùy biến.",
      gain: "Cho phép cập nhật dữ liệu trên View phức hợp; Bảo vệ tuyệt đối tính nguyên tử (Atomicity) của giao dịch thông qua ROLLBACK.",
      metrics: [
        { label: "Cập nhật Khung nhìn", value: "View Updatability", sub: "Giải quyết hạn chế INSERT trên View" },
        { label: "Bảo vệ Giao dịch", value: "ROLLBACK TRAN", sub: "Khôi phục trạng thái nguyên vẹn khi lỗi" },
        { label: "Mức độ can thiệp", value: "Full Override", sub: "Thay thế 100% câu lệnh DML gốc" }
      ],
      code: `-- INSTEAD OF TRIGGER CHO PHÉP CHÈN DỮ LIỆU VÀO VIEW ĐA BẢNG
CREATE TRIGGER trg_View_Insert_ChiTietHoaDon
ON dbo.V_ChiTietHoaDon INSTEAD OF INSERT AS
BEGIN
    SET NOCOUNT ON;
    -- 1. Định tuyến chèn bảng cha HOADON nếu chưa tồn tại
    INSERT INTO dbo.HOADON (MaHD, NgayLap, MaKH)
    SELECT DISTINCT ins.MaHD, ins.NgayLap, ins.MaKH
    FROM inserted ins
    WHERE NOT EXISTS (SELECT 1 FROM dbo.HOADON WHERE MaHD = ins.MaHD);

    -- 2. Định tuyến chèn bảng con CHITIETHOADON
    INSERT INTO dbo.CHITIETHOADON (MaHD, MaSP, SoLuongMua, DonGiaBan)
    SELECT ins.MaHD, ins.MaSP, ins.SoLuongMua, ins.DonGiaBan
    FROM inserted ins;
END;`
    }
  };

  const curr = stages[activeStage];

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-950 via-purple-950/80 to-slate-900 p-6 sm:p-8 text-white shadow-[0_0_50px_-12px_rgba(168,85,247,0.25)]">
      {/* Background Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Top Banner Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/30 pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 px-4 py-1.5 text-xs font-mono text-purple-300 backdrop-blur-md shadow-inner">
            <Terminal className="h-4 w-4 animate-pulse text-purple-400" />
            <span className="font-semibold tracking-wider uppercase">T-SQL Advanced Server-Side Engine</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Plan Cache: ACTIVE (RAM 0.1ms)</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-1 text-xs font-mono text-amber-300">
            <ShieldAlert className="h-3.5 w-3.5 text-amber-400" />
            <span>ACID Rollback: SECURED</span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono tracking-widest text-purple-400/80 uppercase">Module Spec</span>
          <p className="text-xs font-mono font-bold text-slate-300">RDBMS Core Programming v8.0</p>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="relative z-10 my-6">
        <div className="inline-block rounded-md bg-purple-500/10 px-2.5 py-1 text-[11px] font-mono font-bold text-purple-300 mb-2 border border-purple-500/20 uppercase tracking-wider">
          CHƯƠNG VIII — LẬP TRÌNH CSDL NÂNG CAO PHÍA SERVER
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-100 to-indigo-300 bg-clip-text text-transparent">
          Thủ Tục Lưu Trữ (Stored Procedure) & Bẫy Sự Kiện (Trigger)
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Đóng gói logic nghiệp vụ, tối ưu hóa thời gian thực thi bằng cơ chế <span className="text-purple-300 font-semibold">Pre-compiled Execution Plan</span> trong RAM, linh hoạt với <span className="text-emerald-300 font-semibold">Hàm người dùng (UDF)</span>, và kiểm soát toàn vẹn dữ liệu tự động với <span className="text-amber-300 font-semibold">Bẫy sự kiện (Trigger) & Bảng ảo INSERTED/DELETED</span>.
        </p>
      </div>

      {/* 4 Interactive Stage Navigation Tabs */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-6">
        {[
          { id: "sp", icon: Cpu, label: "1. Stored Procedure", sub: "Plan Cache & IN/OUT" },
          { id: "udf", icon: Layers, label: "2. User Functions (UDF)", sub: "Scalar & Inline TVF" },
          { id: "trigger", icon: Zap, label: "3. DML Triggers", sub: "INSERTED & DELETED RAM" },
          { id: "insteadof", icon: ShieldAlert, label: "4. INSTEAD OF Trigger", sub: "View Updates & Rollback" }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeStage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveStage(tab.id)}
              className={`group relative flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                isActive
                  ? "bg-slate-900 border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.3)] translate-y-[-2px]"
                  : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <div className={`p-1.5 rounded-lg ${isActive ? "bg-purple-500/20 text-purple-300" : "bg-slate-900 text-slate-500 group-hover:text-slate-300"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                {isActive && (
                  <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                )}
              </div>
              <span className={`text-xs font-bold font-mono ${isActive ? "text-white" : "text-slate-300"}`}>
                {tab.label}
              </span>
              <span className="text-[10px] text-slate-400 font-sans mt-0.5">
                {tab.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="relative z-10 rounded-2xl border border-slate-800 bg-slate-950/90 p-5 sm:p-6 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 border border-purple-500/30">
                {curr.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">{curr.tier}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1">
              {curr.title}
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {curr.summary}
        </p>

        {/* Technical Mechanism & Performance Gain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-300 mb-1">
              <Server className="h-3.5 w-3.5" />
              <span>CƠ CHẾ KỸ THUẬT TẦNG VẬT LÝ</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {curr.mechanism}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300 mb-1">
              <Activity className="h-3.5 w-3.5" />
              <span>GIÁ TRỊ TỐI ƯU HÓA CỐT LÕI</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {curr.gain}
            </p>
          </div>
        </div>

        {/* Live Performance Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {curr.metrics.map((m, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400">{m.label}</span>
              <div className="text-base font-extrabold font-mono text-purple-300 my-1">{m.value}</div>
              <span className="text-[10px] text-emerald-400 font-sans">✓ {m.sub}</span>
            </div>
          ))}
        </div>

        {/* T-SQL Code Snippet Box */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs overflow-x-auto">
          <div className="flex items-center justify-between text-slate-500 mb-2 border-b border-slate-800 pb-2 text-[11px]">
            <div className="flex items-center gap-2">
              <Code className="h-3.5 w-3.5 text-purple-400" />
              <span className="font-bold text-slate-300">T-SQL Reference Implementation</span>
            </div>
            <span className="text-emerald-400 font-mono text-[10px]">Microsoft SQL Server (T-SQL)</span>
          </div>
          <pre className="text-indigo-200 leading-relaxed">
            <code>{curr.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

