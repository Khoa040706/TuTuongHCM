"use client";
import React, { useState } from "react";
import { Database, Table, Copy, Check, Terminal, Share2, Layers, Key, Link2, Sparkles } from "lucide-react";

export default function SqlComprehensiveQldtStudio() {
  const [activeTab, setActiveTab] = useState("all");
  const [copied, setCopied] = useState(false);

  const fullDdlScript = `-- ============================================================
-- DỰ ÁN CƠ SỞ DỮ LIỆU TỔNG HỢP: QUẢN LÝ ĐỀ TÀI (QLDT)
-- ============================================================

-- 1. Tạo cơ sở dữ liệu và chuyển vùng làm việc
CREATE DATABASE QLDT;
GO
USE QLDT;
GO

-- 2. Tạo bảng SinhVien (Bảng Cha 1)
CREATE TABLE SinhVien (
    masv int PRIMARY KEY,
    hoten nvarchar(30),
    namsinh datetime,
    qq nvarchar(20),
    hocluc float
);
GO

-- 3. Tạo bảng DeTai (Bảng Cha 2)
CREATE TABLE DeTai (
    madt int PRIMARY KEY,
    tendt nvarchar(30),
    chunhiem nvarchar(30),
    kinhphi int
);
GO

-- 4. Tạo bảng liên kết SV_DT với Khóa chính phức hợp & 2 Khóa ngoại
CREATE TABLE SV_DT (
    masv int FOREIGN KEY REFERENCES SinhVien(masv),
    madt int FOREIGN KEY REFERENCES DeTai(madt),
    noiAD nvarchar(20),
    kq float,
    CONSTRAINT pk_svdt PRIMARY KEY (masv, madt)
);
GO`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullDdlScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlComprehensiveQldtStudio</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Full DDL Project Studio
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá đồ án CSDL mẫu QLDT với Khóa chính phức hợp (Composite PK) và 2 Khóa ngoại liên kết
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700 transition-all shadow-md"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Đã Sao Chép Script!" : "One-Click Copy Script"}
        </button>
      </div>

      {/* Relational Diagram Explorer */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Table 1: SinhVien */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-blue-200 pb-2">
            <span className="font-mono text-xs font-bold text-blue-900">1. SinhVien (Bảng Cha)</span>
            <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">1</span>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-xs text-gray-700">
            <div className="flex items-center justify-between font-bold text-blue-950">
              <span className="flex items-center gap-1"><Key className="h-3 w-3 text-amber-600" /> masv</span>
              <span className="text-[11px] text-gray-500 font-normal">int (PK)</span>
            </div>
            <div className="flex justify-between"><span>hoten</span><span className="text-gray-400">nvarchar(30)</span></div>
            <div className="flex justify-between"><span>namsinh</span><span className="text-gray-400">datetime</span></div>
            <div className="flex justify-between"><span>qq</span><span className="text-gray-400">nvarchar(20)</span></div>
            <div className="flex justify-between"><span>hocluc</span><span className="text-gray-400">float</span></div>
          </div>
        </div>

        {/* Table 2: SV_DT */}
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50/70 p-4 shadow-md">
          <div className="flex items-center justify-between border-b border-amber-300 pb-2">
            <span className="font-mono text-xs font-bold text-amber-950">3. SV_DT (Bảng Liên Kết)</span>
            <span className="rounded bg-amber-200 px-2 py-0.5 text-[10px] font-bold text-amber-900">N - N</span>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-xs text-gray-700">
            <div className="flex items-center justify-between font-bold text-amber-950 bg-amber-100/80 px-1.5 py-0.5 rounded">
              <span className="flex items-center gap-1"><Key className="h-3 w-3 text-amber-700" /><Link2 className="h-3 w-3 text-blue-600" /> masv</span>
              <span className="text-[10px] text-amber-800 font-normal">int (PK & FK1)</span>
            </div>
            <div className="flex items-center justify-between font-bold text-amber-950 bg-amber-100/80 px-1.5 py-0.5 rounded">
              <span className="flex items-center gap-1"><Key className="h-3 w-3 text-amber-700" /><Link2 className="h-3 w-3 text-emerald-600" /> madt</span>
              <span className="text-[10px] text-amber-800 font-normal">int (PK & FK2)</span>
            </div>
            <div className="flex justify-between px-1.5"><span>noiAD</span><span className="text-gray-400">nvarchar(20)</span></div>
            <div className="flex justify-between px-1.5"><span>kq</span><span className="text-gray-400">float</span></div>
          </div>
        </div>

        {/* Table 3: DeTai */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <span className="font-mono text-xs font-bold text-emerald-900">2. DeTai (Bảng Cha)</span>
            <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">1</span>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-xs text-gray-700">
            <div className="flex items-center justify-between font-bold text-emerald-950">
              <span className="flex items-center gap-1"><Key className="h-3 w-3 text-amber-600" /> madt</span>
              <span className="text-[11px] text-gray-500 font-normal">int (PK)</span>
            </div>
            <div className="flex justify-between"><span>tendt</span><span className="text-gray-400">nvarchar(30)</span></div>
            <div className="flex justify-between"><span>chunhiem</span><span className="text-gray-400">nvarchar(30)</span></div>
            <div className="flex justify-between"><span>kinhphi</span><span className="text-gray-400">int</span></div>
          </div>
        </div>
      </div>

      {/* Script Terminal Viewer */}
      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-amber-400" />
            <span className="font-mono text-xs font-bold text-gray-300">Complete QLDT Database DDL Script</span>
          </div>
          <span className="font-mono text-[10px] text-emerald-400">SQL Server 2000 / T-SQL</span>
        </div>

        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {fullDdlScript}
        </pre>
      </div>
    </div>
  );
}
