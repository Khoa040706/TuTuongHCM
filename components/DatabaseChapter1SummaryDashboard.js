"use client";

import React, { useState } from "react";
import {
  Sparkles,
  BookOpen,
  HelpCircle,
  RotateCw,
  CheckCircle2,
  Layers,
  Database,
  FileWarning,
  ShieldCheck,
  Shapes,
  Share2,
  FolderTree,
  Table,
  Braces
} from "lucide-react";

export default function DatabaseChapter1SummaryDashboard() {
  const [flippedCards, setFlippedCards] = useState({});
  const [activeTab, setActiveTab] = useState("flashcards"); // 'flashcards' | 'matrix'

  const flashcards = [
    {
      id: 1,
      tag: "Trọng điểm 1",
      topic: "Nhược Điểm Của Hệ Thống Xử Lý Tập Tin",
      icon: FileWarning,
      front: "Hệ thống xử lý tập tin (File Processing System) có 6 nhược điểm chí mạng nào?",
      back: "1. Dư thừa dữ liệu (Data Redundancy)\n2. Dị thường / Không nhất quán (Inconsistency)\n3. Khó đảm bảo tính nguyên tố giao tác (Atomicity)\n4. Khó khăn trong bảo đảm toàn vẹn (Integrity)\n5. Dị thường truy cập tương tranh (Concurrency)\n6. Thiếu an toàn & bảo mật dữ liệu (Security)."
    },
    {
      id: 2,
      tag: "Trọng điểm 2",
      topic: "Định Nghĩa Cơ Sở Dữ Liệu",
      icon: Database,
      front: "Định nghĩa chuẩn mực của Cơ sở dữ liệu (Database) là gì?",
      back: "CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin nhằm thỏa mãn yêu cầu khai thác thông tin đồng thời cho nhiều người sử dụng hay nhiều chương trình ứng dụng với các mục đích khác nhau."
    },
    {
      id: 3,
      tag: "Trọng điểm 3",
      topic: "Kiến Trúc Ba Mức ANSI-SPARC",
      icon: Layers,
      front: "Hệ thống CSDL gồm 3 mức biểu diễn trừu tượng nào từ dưới lên trên?",
      back: "1. Mức vật lý / Mức trong (Physical/Internal Level): Lưu trữ thực tế trên đĩa.\n2. Mức khái niệm (Conceptual Level / ER Schema): Sự trừu tượng hóa toàn thể CSDL.\n3. Mức khung nhìn / Mức ngoài (View/External Level): Góc nhìn riêng của từng người dùng."
    },
    {
      id: 4,
      tag: "Trọng điểm 4",
      topic: "Hệ Quản Trị CSDL (DBMS)",
      icon: ShieldCheck,
      front: "Hệ quản trị CSDL là gì và mối quan hệ giữa CSDL với HQTCSDL?",
      back: "HQTCSDL là phần mềm dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là MỘT THÀNH PHẦN bên trong HQTCSDL. HQTCSDL có 2 khả năng cơ bản: quản lý tệp và truy cập dữ liệu lớn hiệu năng cao."
    },
    {
      id: 5,
      tag: "Trọng điểm 5",
      topic: "Phân Loại 3 Nhóm Mô Hình Dữ Liệu",
      icon: Shapes,
      front: "Khoa học CSDL phân chia mô hình dữ liệu thành 3 nhóm lớn nào?",
      back: "1. Nhóm Logic trên cơ sở đối tượng (ER, OO, Ngữ nghĩa, Chức năng).\n2. Nhóm Logic trên cơ sở bản ghi (Quan hệ, Mạng, Phân cấp).\n3. Nhóm Mô hình dữ liệu vật lý (Mô hình hợp nhất, Mô hình bộ nhớ khung)."
    },
    {
      id: 6,
      tag: "Trọng điểm 6",
      topic: "Đặc Điểm 5 Mô Hình Dữ Liệu Cụ Thể",
      icon: Table,
      front: "Tóm tắt cấu trúc biểu diễn cốt lõi của 5 mô hình dữ liệu cụ thể?",
      back: "• Mạng (Network): Đồ thị có hướng (Mẫu tin hình chữ nhật, Liên hệ hình bầu dục).\n• Phân cấp (Hierarchical): Cấu trúc Cây 1-Nhiều.\n• ER: Thực thể mạnh/yếu, Thuộc tính, Khóa, Mối kết hợp, Bậc số lượng.\n• Quan hệ (Relational): Bảng (Tập k-bộ, hàng, cột).\n• Hướng đối tượng (OODM): Class, Thuộc tính & Phương thức, Đóng gói, Đa hình, Kế thừa."
    }
  ];

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Exam Master Summary • Tóm Tắt Ôn Thi
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Tổng Kết 6 Trọng Điểm Cốt Lõi Chương I: Tổng Quan Hệ Cơ Sở Dữ Liệu
            </h3>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "flashcards"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> 6 Thẻ Flashcards
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "matrix"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Table className="w-3.5 h-3.5" /> Ma Trận Tổng Kết
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="p-6">
        {/* VIEW 1: INTERACTIVE FLASHCARDS */}
        {activeTab === "flashcards" && (
          <div className="space-y-4">
            <div className="text-xs text-slate-500 flex items-center justify-between">
              <span>Nhấn vào thẻ bất kỳ để lật mặt sau và kiểm tra trí nhớ học thuật:</span>
              <span className="text-orange-700 font-mono font-bold">6 Key Flashcards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {flashcards.map((card) => {
                const isFlipped = !!flippedCards[card.id];
                const CardIcon = card.icon;

                return (
                  <div
                    key={card.id}
                    onClick={() => toggleFlip(card.id)}
                    className="h-64 cursor-pointer perspective"
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl transition-all duration-300 p-5 flex flex-col justify-between border shadow-sm ${
                        isFlipped
                          ? "bg-orange-50/90 border-orange-400 text-slate-900 ring-1 ring-orange-400/30"
                          : "bg-slate-50 border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 text-slate-800"
                      }`}
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isFlipped ? "bg-orange-200 text-orange-900" : "bg-slate-200 text-slate-700"
                        }`}>
                          {card.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500">
                          <RotateCw className="w-3 h-3 text-orange-600" />
                          <span>{isFlipped ? "Đáp án" : "Câu hỏi"}</span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="flex-1 flex flex-col justify-center py-2">
                        {!isFlipped ? (
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                              {card.topic}
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                              {card.front}
                            </h4>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="text-[11px] font-bold text-orange-800 uppercase tracking-wide">
                              Nội dung ghi nhớ cốt lõi:
                            </div>
                            <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                              {card.back}
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div className="pt-2 border-t border-slate-200/80 text-[10px] text-slate-500 text-center font-mono">
                        {isFlipped ? "✔ Nhấn để xem lại câu hỏi" : "👉 Nhấn thẻ để lật đáp án"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: MASTER SUMMARY MATRIX */}
        {activeTab === "matrix" && (
          <div className="space-y-3 animate-fadeIn">
            {flashcards.map((f) => (
              <div key={f.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 text-[10px] font-bold font-mono">
                      {f.tag}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{f.topic}</h4>
                  </div>
                </div>
                <div className="text-xs text-slate-700 space-y-1.5">
                  <div className="font-semibold text-orange-950 font-sans">• {f.front}</div>
                  <pre className="text-[11px] text-slate-600 whitespace-pre-wrap font-sans bg-white p-3 rounded-lg border border-slate-200 leading-relaxed shadow-sm">
                    {f.back}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
