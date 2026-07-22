"use client";
import React, { useState } from "react";
import { Calendar, Search, Filter } from "lucide-react";

export default function LsdChronologyTable1954To1975() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const events = [
    { year: "7-1954", title: "Ký Hiệp định Geneve", desc: "Chấm dứt chiến tranh xâm lược của thực dân Pháp, vĩ tuyến 17 thành ranh giới quân sự tạm thời.", cat: "Hiệp định" },
    { year: "9-1954", title: "Bộ Chính trị họp đề ra nhiệm vụ miền Bắc", desc: "Hàn gắn vết thương chiến tranh, phục hồi kinh tế quốc dân.", cat: "Hội nghị" },
    { year: "10-1954", title: "Thành lập Xứ ủy Nam Bộ", desc: "Đồng chí Lê Duẩn làm Bí thư Xứ ủy Nam Bộ.", cat: "Sự kiện" },
    { year: "8-1956", title: "Đồng chí Lê Duẩn dự thảo 'Đề cương cách mạng miền Nam'", desc: "Dự thảo tại Bến Tre, khẳng định con đường bạo lực cách mạng.", cat: "Văn kiện" },
    { year: "9-1956", title: "Hội nghị Trung ương 10 (khóa II)", desc: "Kiểm điểm và công tác sửa sai Cải cách ruộng đất.", cat: "Hội nghị" },
    { year: "1-1959", title: "Hội nghị Trung ương 15", desc: "Ra Nghị quyết về cách mạng miền Nam: Sử dụng bạo lực cách mạng.", cat: "Hội nghị" },
    { year: "19-5-1959", title: "Mở đường 559 (Đường Trường Sơn)", desc: "Tuyến đường vận tải chiến lược trên bộ chi viện miền Nam.", cat: "Sự kiện" },
    { year: "17-1-1960", title: "Phong trào 'Đồng khởi' Bến Tre", desc: "Bùng nổ tại Mỏ Cày, do nữ tướng Nguyễn Thị Định lãnh đạo.", cat: "Chiến dịch" },
    { year: "9-1960", title: "Đại hội đại biểu toàn quốc lần thứ III của Đảng", desc: "Họp tại Hà Nội, đề ra 2 chiến lược cách mạng ở hai miền.", cat: "Hội nghị" },
    { year: "20-12-1960", title: "Thành lập Mặt trận Dân tộc Giải phóng miền Nam", desc: "Luật sư Nguyễn Hữu Thọ làm Chủ tịch.", cat: "Sự kiện" },
    { year: "2-1-1963", title: "Chiến thắng Ấp Bắc (Mỹ Tho)", desc: "Mở đầu khả năng đánh bại chiến thuật Trực thăng vận & Thiết xa vận.", cat: "Chiến dịch" },
    { year: "1-11-1963", title: "Đảo chính Ngô Đình Diệm - Ngô Đình Nhu", desc: "Chính quyền độc tài tay sai bị tiêu diệt.", cat: "Sự kiện" },
    { year: "8-1964", title: "Sự kiện Vịnh Bắc Bộ", desc: "Mỹ vô cớ dựng dựng sự kiện mở cuộc chiến tranh phá hoại miền Bắc lần 1.", cat: "Sự kiện" },
    { year: "3-1965", title: "Quân Mỹ đổ bộ vào Đà Nẵng", desc: "Mở đầu chiến lược 'Chiến tranh cục bộ' ở miền Nam.", cat: "Sự kiện" },
    { year: "31-1-1968", title: "Tổng tiến công và nổi dậy Tết Mậu Thân 1968", desc: "Đột kích 37 tỉnh + 4 đô thị, buộc Mỹ xuống thang ngừng ném bom.", cat: "Chiến dịch" },
    { year: "18-30/12/1972", title: "Trận 'Điện Biên Phủ trên không'", desc: "Đập tan đợt tập kích B-52 của Nixon vào Hà Nội - Hải Phòng.", cat: "Chiến dịch" },
    { year: "27-1-1973", title: "Ký Hiệp định Paris về Việt Nam", desc: "Mỹ cam kết rút toàn bộ quân Mỹ khỏi miền Nam Việt Nam.", cat: "Hiệp định" },
    { year: "10-3-1975", title: "Trận Buôn Ma Thuột mở đầu Chiến dịch Tây Nguyên", desc: "Mở đầu cuộc Tổng tiến công Mùa Xuân 1975.", cat: "Chiến dịch" },
    { year: "30-4-1975", title: "Giải phóng hoàn toàn miền Nam", desc: "Lá cờ tung bay trên Dinh Độc Lập lúc 11h30, toàn thắng kháng chiến chống Mỹ.", cat: "Chiến dịch" }
  ];

  const filteredEvents = events.filter((e) => {
    const matchSearch = e.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        e.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCat === "all" || e.cat === selectedCat;
    return matchSearch && matchCat;
  });

  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-5 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <Calendar size={14} className="text-amber-600" /> Tra cứu niên biểu lịch sử 1954 - 1975
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Bảng Niên Biểu Sự Kiện Quan Trọng (1954 - 1975)
        </h3>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-between items-center">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm theo năm, sự kiện..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none"
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1">
          {["all", "Hội nghị", "Chiến dịch", "Hiệp định", "Văn kiện", "Sự kiện"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedCat === cat ? "bg-amber-600 text-white" : "bg-white text-slate-700 border border-slate-200"
              }`}
            >
              {cat === "all" ? "Tất cả" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-amber-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <table className="w-full text-left text-xs md:text-sm">
          <thead className="bg-amber-100/70 dark:bg-amber-950/60 font-serif text-amber-900 dark:text-amber-200 font-bold border-b border-amber-200 dark:border-slate-800">
            <tr>
              <th className="p-3 w-28">Thời gian</th>
              <th className="p-3 w-48">Sự kiện</th>
              <th className="p-3">Mô tả chi tiết</th>
              <th className="p-3 w-24">Phân loại</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredEvents.map((ev, idx) => (
              <tr key={idx} className="hover:bg-amber-50/40 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-3 font-bold font-serif text-amber-800 dark:text-amber-300">{ev.year}</td>
                <td className="p-3 font-bold text-slate-900 dark:text-white font-serif">{ev.title}</td>
                <td className="p-3 text-slate-600 dark:text-slate-300">{ev.desc}</td>
                <td className="p-3">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {ev.cat}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
