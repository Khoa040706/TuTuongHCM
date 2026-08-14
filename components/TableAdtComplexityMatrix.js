"use client";

import React, { useState } from "react";
import {
  Table,
  Zap,
  Sparkles,
  CheckCircle2,
  Database,
  Layers,
  HardDrive,
  Cpu,
  Bookmark,
  Share2,
  Server
} from "lucide-react";

export default function TableAdtComplexityMatrix() {
  const [selectedApp, setSelectedApp] = useState("map");

  const applications = [
    {
      id: "map",
      title: "1. Mảng Kết Hợp (Associative Array / Map)",
      icon: <Layers className="w-4 h-4 text-emerald-600" />,
      tag: "Dictionary / HashMap",
      desc: "Lưu trữ các cặp Khóa - Giá trị (Key-Value) cho phép truy xuất giá trị qua khóa bất kỳ (chuỗi, đối tượng) trong thời gian trung bình O(1).",
      example: "map.get(\"MSSV_202401\") &rarr; Thông tin sinh viên"
    },
    {
      id: "db",
      title: "2. Chỉ Mục Cơ Sở Dữ Liệu (Database Indexing)",
      icon: <Database className="w-4 h-4 text-blue-600" />,
      tag: "Hash Index",
      desc: "Tạo cấu trúc Hash Index trên các cột khóa chính hoặc cột tra cứu để hệ quản trị CSDL tìm kiếm bản ghi tức thì mà không cần quét toàn bộ bảng (Full Table Scan).",
      example: "SELECT * FROM Users WHERE user_id = 998811"
    },
    {
      id: "cache",
      title: "3. Bộ Nhớ Đệm Tốc Độ Cao (Caching)",
      icon: <Server className="w-4 h-4 text-amber-600" />,
      tag: "Redis / Memcached",
      desc: "Lưu trữ kết quả tính toán đắt đỏ hoặc dữ liệu truy vấn thường xuyên trong RAM để phục vụ hàng triệu yêu cầu mỗi giây với độ trễ siêu thấp (sub-millisecond).",
      example: "cache.get(\"weather_hanoi\") &rarr; Dữ liệu thời tiết"
    },
    {
      id: "set",
      title: "4. Tập Hợp Khử Trùng Lặp (Set / HashSet)",
      icon: <Share2 className="w-4 h-4 text-purple-600" />,
      tag: "Membership Testing",
      desc: "Kiểm tra sự tồn tại của một phần tử trong tập hợp (contains / add / remove) và loại bỏ các phần tử trùng lặp trong thời gian O(1).",
      example: "visitedUrls.contains(\"https://google.com\") &rarr; true/false"
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Mục 0 — Khái Niệm &amp; Đối Chiếu ADT
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Hashing Là Gì? So Sánh Độ Phức Tạp Các Cấu Trúc ADT Table
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá lý do Hashing thống trị trong việc hỗ trợ Table ADT với thời gian hằng số trung bình <code>O(1)</code>
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          O(1) Average Operations
        </div>
      </div>

      {/* Main Complexity Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="py-3 px-3.5 font-bold">Thao tác (Operation)</th>
                <th className="py-3 px-3 font-bold text-slate-600">Sorted Array (Mảng Đã Xếp)</th>
                <th className="py-3 px-3 font-bold text-slate-600">Balanced BST (Cây Nhị Phân)</th>
                <th className="py-3 px-3 font-bold text-emerald-800 bg-emerald-50/60">Hashing (Bảng Băm ⭐)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">1. Insertion (Thêm)</td>
                <td className="py-2.5 px-3 text-rose-700 font-bold">O(n) (phải dịch mảng)</td>
                <td className="py-2.5 px-3 text-indigo-700 font-bold">O(log n)</td>
                <td className="py-2.5 px-3 font-black text-emerald-700 bg-emerald-50/30">O(1) avg ⭐</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">2. Deletion (Xóa)</td>
                <td className="py-2.5 px-3 text-rose-700 font-bold">O(n) (phải dịch mảng)</td>
                <td className="py-2.5 px-3 text-indigo-700 font-bold">O(log n)</td>
                <td className="py-2.5 px-3 font-black text-emerald-700 bg-emerald-50/30">O(1) avg ⭐</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">3. Retrieval / Find (Tìm)</td>
                <td className="py-2.5 px-3 text-indigo-700 font-bold">O(log n) (Binary Search)</td>
                <td className="py-2.5 px-3 text-indigo-700 font-bold">O(log n)</td>
                <td className="py-2.5 px-3 font-black text-emerald-700 bg-emerald-50/30">O(1) avg ⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 Real-World Applications Grid */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">
            4 ỨNG DỤNG RỘNG RÃI CỦA HASHING TRONG PHẦN MỀM HIỆN ĐẠI
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {applications.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app.id)}
              className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between select-none ${
                selectedApp === app.id
                  ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                  : "bg-white/80 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-1.5 rounded-xl bg-slate-100">{app.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {app.tag}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-slate-900 font-sans mb-1">{app.title}</h5>
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed">{app.desc}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-mono text-emerald-900 bg-emerald-50/50 p-1.5 rounded-lg">
                Ví dụ: <code>{app.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-emerald-950">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 0):</strong><br/>
          • <strong>Hashing:</strong> Thuật toán ánh xạ tập dữ liệu lớn có độ dài thay đổi (key) thành tập dữ liệu nhỏ hơn có độ dài cố định.<br/>
          • <strong>Ưu thế vượt trội:</strong> Hash table hỗ trợ Table ADT với thời gian <strong>hằng số trung bình O(1)</strong> cho cả 3 thao tác Insertion / Deletion / Retrieval — nhanh hơn hẳn Sorted Array và Balanced BST.
        </div>
      </div>
    </div>
  );
}
