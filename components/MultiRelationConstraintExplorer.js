"use client";

import React, { useState } from "react";
import { Layers, Calendar, DollarSign, ShoppingCart, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function MultiRelationConstraintExplorer() {
  const [activeConstraint, setActiveConstraint] = useState("inter_tuple_rel");

  const items = {
    inter_tuple_rel: {
      id: "6.2",
      title: "6.2 RBTV Liên Bộ, Liên Quan Hệ",
      subtitle: "Tác dụng đối với từng nhóm các bộ của nhiều bảng khác nhau",
      icon: ShoppingCart,
      color: "from-blue-600 to-indigo-600",
      ruleText: "Mỗi hóa đơn bán hàng phải có ít nhất một mặt hàng được bán.",
      formalLogic: "∀ hd ∈ HOA_DON : ∃ ct ∈ CTIET_HD : (hd.soHD = ct.soHD)",
      context: "HOA_DON và CTIET_HD",
      analysis: "Hóa đơn được lập theo đơn đặt hàng, nhưng phải xem chi tiết hóa đơn (CTIET_HD) mới biết công ty đã thực tế xuất bán cho khách những mặt hàng nào. Không thể tồn tại một hóa đơn rỗng không có mặt hàng."
    },
    inter_attr_rel: {
      id: "6.3",
      title: "6.3 RBTV Liên Thuộc Tính, Liên Quan Hệ",
      subtitle: "Mối liên hệ so sánh giữa các cột ở các bảng khác nhau",
      icon: Calendar,
      color: "from-emerald-600 to-teal-600",
      ruleText: "Ngày làm hóa đơn in trên hóa đơn phải sau hoặc bằng ngày đặt hàng in trên đơn đặt hàng.",
      formalLogic: "∀ hd ∈ HOA_DON, dh ∈ DAT_HANG : (hd.soDH = dh.soDH ⇒ hd.ngayHD ≥ dh.ngayDH)",
      context: "DAT_HANG và HOA_DON",
      analysis: "Quy luật dòng thời gian nghiệp vụ: Khách hàng phải đặt hàng trước rồi công ty mới lập hóa đơn xuất hàng, do đó ngày hóa đơn không bao giờ được xảy ra trước ngày đặt hàng."
    },
    aggregate_attr: {
      id: "6.4",
      title: "6.4 RBTV Về Thuộc Tính Tổng Hợp (Derived Attribute)",
      subtitle: "Thuộc tính được tính toán từ dữ liệu tổng hợp của các bảng khác",
      icon: DollarSign,
      color: "from-amber-600 to-rose-600",
      ruleText: "Công nợ (congNo) của khách hàng = Tổng trị giá các hóa đơn bán ra - Tổng số tiền đã thu từ các phiếu thu.",
      formalLogic: "∀ k ∈ KHACH : k.congNo = (SUM(hd.trigiaHD) của khách k) - (SUM(pt.soTien) của khách k)",
      context: "KHACH, HOA_DON và PHIEU_THU",
      analysis: "Thuộc tính congNo trong bảng KHACH là thuộc tính dẫn xuất (derived attribute). Giá trị của nó phản ánh kết quả tính toán động từ tổng doanh số bán và tổng thu tiền."
    }
  };

  const curr = items[activeConstraint];
  const Icon = curr.icon;

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">MultiRelationConstraintExplorer</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                RBTV Đa Quan Hệ Phức Tạp
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá các quy tắc ràng buộc liên bộ liên bảng, liên thuộc tính liên bảng và thuộc tính tổng hợp
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          {Object.keys(items).map((key) => (
            <button
              key={key}
              onClick={() => setActiveConstraint(key)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                activeConstraint === key ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
              }`}
            >
              {items[key].id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Box */}
      <div className="mt-5 space-y-4">
        <div className="rounded-xl bg-white border border-indigo-200 p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 font-bold">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{curr.title}</h4>
                <p className="text-[11px] text-gray-500">{curr.subtitle}</p>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
              Bối cảnh: {curr.context}
            </span>
          </div>

          <div className="mt-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nội dung Quy tắc nghiệp vụ:</span>
            <p className="mt-1 text-xs font-semibold text-indigo-950 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 leading-relaxed">
              &ldquo;{curr.ruleText}&rdquo;
            </p>
          </div>

          <div className="mt-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Biểu diễn Hình thức (Logic Vị Từ):</span>
            <pre className="mt-1 font-mono text-xs text-amber-900 bg-amber-50/60 p-3 rounded-lg border border-amber-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {curr.formalLogic}
            </pre>
          </div>

          <div className="mt-4 rounded-lg bg-gray-50 p-3 text-xs text-gray-700 border border-gray-200 leading-relaxed">
            <strong className="text-gray-900">💡 Phân tích kỹ thuật: </strong>
            {curr.analysis}
          </div>
        </div>
      </div>
    </div>
  );
}
