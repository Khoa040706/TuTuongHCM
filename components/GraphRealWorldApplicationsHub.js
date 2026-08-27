"use client";

import React, { useState } from "react";
import { Users, Navigation, Globe, Radio, Sparkles, Trophy } from "lucide-react";

export default function GraphRealWorldApplicationsHub() {
  const [selectedApp, setSelectedApp] = useState(0);

  const apps = [
    {
      id: 0,
      title: "1. Social Network (Mạng Xã Hội)",
      icon: Users,
      color: "emerald",
      desc: "Facebook, Instagram, LinkedIn: Mỗi người dùng là một đỉnh (Vertex), quan hệ bạn bè/theo dõi là cạnh (Edge).",
      useCase: "Gợi ý kết bạn ('Bạn có thể biết...'), phát hiện cộng đồng và đo lường mức độ ảnh hưởng.",
    },
    {
      id: 1,
      title: "2. Transportation Network (Mạng Giao Thông)",
      icon: Navigation,
      color: "sky",
      desc: "Google Maps, Grab, Đường sắt & Hàng không: Giao lộ/Sân bay là đỉnh, các tuyến đường kết nối là cạnh có trọng số (khoảng cách/thời gian kẹt xe).",
      useCase: "Tìm đường đi ngắn nhất (Dijkstra/A*), định tuyến giao thông thông minh trong giờ cao điểm.",
    },
    {
      id: 2,
      title: "3. Internet & Computer Networks (Mạng Máy Tính)",
      icon: Globe,
      color: "indigo",
      desc: "Hạ tầng Internet toàn cầu: Các Router / Switch là đỉnh, cáp quang kết nối là các cạnh truyền tải dữ liệu.",
      useCase: "Giao thức định tuyến OSPF/BGP, cân bằng tải băng thông và phòng ngừa sự cố đứt mạng.",
    },
    {
      id: 3,
      title: "4. Communication Network (Mạng Truyền Thông)",
      icon: Radio,
      color: "purple",
      desc: "Trạm phát sóng di động (5G/LTE), mạng lưới cảm biến IoT và vệ tinh không gian.",
      useCase: "Tối ưu hóa độ phủ sóng, gán tần số không bị xung đột (Graph Coloring).",
    },
    {
      id: 4,
      title: "5. Optimization & AI (Tối Ưu Hóa & Trí Tuệ Nhân Tạo)",
      icon: Sparkles,
      color: "amber",
      desc: "Thuật toán tìm kiếm và xếp hạng toàn cầu: Google PageRank, Chu trình Euler, Đề xuất phim ảnh (Movie Rating).",
      useCase: "Xếp hạng trang web dựa trên liên kết đồ thị, đề xuất nội dung cá nhân hóa trên Netflix/YouTube.",
    },
  ];

  const app = apps[selectedApp];

  return (
    <div className="my-8 rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Ứng Dụng Thực Tế (Mục 3.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-pink-950 to-slate-900 bg-clip-text text-transparent">
            5 Trụ Cột Ứng Dụng Thực Tế Của Graph Trong Công Nghệ
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Từ mạng xã hội, bản đồ GPS đến thuật toán tìm kiếm PageRank của Google.
          </p>
        </div>

        {/* Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-purple-100 border border-purple-300 text-purple-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          CS2010 Core Ecosystem
        </div>
      </div>

      {/* 5-Button Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-6">
        {apps.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedApp === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedApp(item.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 shadow-sm ${
                isSelected
                  ? "bg-purple-100 border-purple-400 text-purple-950 ring-2 ring-purple-500/40 font-bold scale-105"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              <Icon className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-bold font-mono">{item.title.split("(")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <div className="p-6 rounded-2xl bg-white border border-purple-100 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <app.icon className="w-5 h-5 text-purple-700" />
          <h4 className="text-sm font-bold text-purple-950 font-mono">{app.title}</h4>
        </div>

        <p className="text-xs text-slate-700 font-sans leading-relaxed">
          {app.desc}
        </p>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-950 flex items-start gap-2 shadow-sm">
          <Trophy className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Bài toán giải quyết:</strong> {app.useCase}
          </div>
        </div>
      </div>
    </div>
  );
}
