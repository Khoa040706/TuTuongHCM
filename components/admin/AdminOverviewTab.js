"use client";
import React, { useState } from "react";
import {
  Users,
  Award,
  BookCheck,
  Flame,
  TrendingUp,
  PieChart as PieIcon,
  Activity,
  Download,
  Trash2,
  Calendar
} from "lucide-react";

export default function AdminOverviewTab({
  stats,
  dailyData = [],
  subjectDist = [],
  logs = [],
  onClearLogs,
  onExportExcel
}) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // SVG Chart Calculation
  const svgWidth = 620;
  const svgHeight = 200;
  const paddingX = 40;
  const paddingY = 25;
  const maxAttempt = Math.max(...dailyData.map((d) => d.count), 4);

  const linePoints = dailyData.map((d, i) => {
    const totalPoints = dailyData.length > 1 ? dailyData.length - 1 : 1;
    const x = paddingX + (i * (svgWidth - 2 * paddingX)) / totalPoints;
    const y = svgHeight - paddingY - (d.count / maxAttempt) * (svgHeight - 2 * paddingY);
    return { x, y, date: d.date, count: d.count };
  });

  // Generate Smooth Cubic Bézier Curve Path
  const makeSmoothPath = (pts) => {
    if (pts.length === 0) return "";
    if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

    let path = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return path;
  };

  const smoothPath = makeSmoothPath(linePoints);
  const fillPath =
    linePoints.length > 0
      ? `${smoothPath} L ${linePoints[linePoints.length - 1].x} ${svgHeight - paddingY} L ${linePoints[0].x} ${svgHeight - paddingY} Z`
      : "";

  // Donut Chart Calculation
  const r = 52;
  const circumference = 2 * Math.PI * r;
  let accumulatedPercent = 0;

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* 4 Hero Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Học viên đăng ký",
            value: stats?.totalUsers || 0,
            desc: "Tài khoản hệ thống",
            icon: Users,
            color: "text-[#38150E]",
            bg: "bg-[#FAF5EE]",
            border: "border-[#E8DACB]"
          },
          {
            label: "Độ chuẩn xác TB",
            value: `${stats?.avgScore || 0}%`,
            desc: "Tỉ lệ câu trả lời đúng",
            icon: Award,
            color: "text-[#15803D]",
            bg: "bg-[#F0FDF4]",
            border: "border-[#BBF7D0]"
          },
          {
            label: "Tổng lượt ôn tập",
            value: stats?.totalAttempts || 0,
            desc: "Bài kiểm tra hoàn thành",
            icon: BookCheck,
            color: "text-[#D48B38]",
            bg: "bg-[#FFFBEB]",
            border: "border-[#FDE68A]"
          },
          {
            label: "Bẫy tư duy quản trị",
            value: stats?.totalTraps || 50,
            desc: "Có phân tích bẫy chi tiết",
            icon: Flame,
            color: "text-[#D85A38]",
            bg: "bg-[#FEF2F2]",
            border: "border-[#FECACA]"
          }
        ].map((card, idx) => {
          const CardIcon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-[#E8DACB] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 space-y-3 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8C7A70]">
                  {card.label}
                </span>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border ${card.bg} ${card.border} group-hover:scale-110 transition-transform`}
                >
                  <CardIcon size={16} className={card.color} />
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#38150E] tracking-tight">{card.value}</div>
                <div className="text-[11px] text-[#8C7A70] font-medium mt-0.5">{card.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Charts: 7-day Area Chart + Donut Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 7-Day Activity Smooth Area Chart */}
        <div className="lg:col-span-2 bg-white border border-[#E8DACB] rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F4EBE0] pb-4">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#D85A38]" />
                <h3 className="text-sm font-extrabold text-[#38150E] uppercase tracking-wider">
                  Tần Suất Luyện Thi (7 Ngày Gần Nhất)
                </h3>
              </div>
              <p className="text-[11px] text-[#8C7A70] font-medium mt-0.5">
                Biểu đồ số lượt nộp bài trắc nghiệm mỗi ngày của học viên.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#6E5D53] bg-[#FAF5EE] border border-[#E8DACB] px-3 py-1 rounded-full w-fit">
              <Calendar size={12} className="text-[#D48B38]" />
              <span>Thời gian thực</span>
            </div>
          </div>

          {/* SVG Area Chart */}
          <div className="relative w-full overflow-hidden flex justify-center items-center py-2 bg-[#FAF8F5]/80 border border-[#F4EBE0] rounded-2xl">
            <svg
              width="100%"
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="max-w-full overflow-visible"
            >
              <defs>
                {/* Warm Gradient for Chart Area */}
                <linearGradient id="warmChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D85A38" stopOpacity="0.28" />
                  <stop offset="50%" stopColor="#E8B86D" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.0" />
                </linearGradient>

                <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D85A38" />
                  <stop offset="100%" stopColor="#D48B38" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                const y = paddingY + ratio * (svgHeight - 2 * paddingY);
                return (
                  <line
                    key={idx}
                    x1={paddingX}
                    y1={y}
                    x2={svgWidth - paddingX}
                    y2={y}
                    stroke="#EADBCE"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                );
              })}

              {/* Gradient Fill Area */}
              {fillPath && <path d={fillPath} fill="url(#warmChartGrad)" />}

              {/* Main Curve Stroke */}
              {smoothPath && (
                <path
                  d={smoothPath}
                  fill="none"
                  stroke="url(#strokeGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Data Points */}
              {linePoints.map((p, i) => {
                const isHovered = hoveredPoint === i;
                return (
                  <g
                    key={i}
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    className="cursor-pointer"
                  >
                    {/* Outer pulse when hovered */}
                    {isHovered && (
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="9"
                        fill="rgba(216, 90, 56, 0.2)"
                        className="animate-ping"
                      />
                    )}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isHovered ? "6.5" : "4.5"}
                      fill="#FFFFFF"
                      stroke="#D85A38"
                      strokeWidth="2.5"
                      className="transition-all duration-200 shadow-sm"
                    />

                    {/* Point Count Label */}
                    <text
                      x={p.x}
                      y={p.y - 10}
                      textAnchor="middle"
                      className="text-[10px] font-black fill-[#38150E]"
                    >
                      {p.count}
                    </text>

                    {/* Date label at bottom */}
                    <text
                      x={p.x}
                      y={svgHeight - 6}
                      textAnchor="middle"
                      className="text-[9px] font-semibold fill-[#8C7A70]"
                    >
                      {p.date}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Subject Distribution Donut & Legend */}
        <div className="bg-white border border-[#E8DACB] rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div className="border-b border-[#F4EBE0] pb-4">
            <div className="flex items-center gap-2">
              <PieIcon size={16} className="text-[#D48B38]" />
              <h3 className="text-sm font-extrabold text-[#38150E] uppercase tracking-wider">
                Tỷ Trọng Môn Ôn Tập
              </h3>
            </div>
            <p className="text-[11px] text-[#8C7A70] font-medium mt-0.5">
              Phân bố lượt làm bài theo từng môn học.
            </p>
          </div>

          {/* SVG Donut Ring */}
          <div className="flex items-center justify-center py-2">
            <svg width="180" height="180" viewBox="0 0 140 140" className="mx-auto">
              <circle
                cx="70"
                cy="70"
                r={r}
                fill="transparent"
                stroke="#FAF5EE"
                strokeWidth="16"
              />
              {subjectDist.map((item, idx) => {
                const strokeLength = (item.percent / 100) * circumference;
                const strokeOffset =
                  circumference - (accumulatedPercent / 100) * circumference;
                accumulatedPercent += item.percent;

                return (
                  <circle
                    key={idx}
                    cx="70"
                    cy="70"
                    r={r}
                    fill="transparent"
                    stroke={item.color || "#D85A38"}
                    strokeWidth="16"
                    strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                    strokeDashoffset={strokeOffset}
                    transform="rotate(-90 70 70)"
                    className="transition-all duration-500 hover:stroke-[20px] cursor-pointer"
                  >
                    <title>{`${item.name}: ${item.percent}%`}</title>
                  </circle>
                );
              })}
              <text
                x="70"
                y="68"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-black text-xs fill-[#38150E]"
              >
                Môn Học
              </text>
              <text
                x="70"
                y="81"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[9px] fill-[#8C7A70] font-semibold"
              >
                Phân bố ôn
              </text>
            </svg>
          </div>

          {/* Subject Legend List */}
          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {subjectDist.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#FAF8F5] border border-[#F4EBE0]"
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color || "#D85A38" }}
                  />
                  <span className="font-semibold text-[#38150E] truncate">{item.name}</span>
                </div>
                <span className="font-extrabold text-[#D85A38] text-[11px] shrink-0 ml-2">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Activity Feed Ticker & Export Bar */}
      <div className="bg-white border border-[#E8DACB] rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4EBE0] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-[#15803D]" />
              <h3 className="text-sm font-extrabold text-[#38150E] uppercase tracking-wider">
                Nhật Ký Khảo Thí Thời Gian Thực (Live Activity Stream)
              </h3>
            </div>
            <p className="text-[11px] text-[#8C7A70] font-medium mt-0.5">
              Luồng hoạt động làm bài thi và điểm số của học sinh vừa ghi nhận.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExportExcel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#38150E] bg-[#FAF5EE] hover:bg-[#F4EBE0] border border-[#E8DACB] transition-colors cursor-pointer"
            >
              <Download size={13} className="text-[#D48B38]" />
              <span>Xuất Excel</span>
            </button>

            <button
              onClick={onClearLogs}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#8C7A70] hover:text-[#B91C1C] hover:bg-red-50 border border-transparent transition-colors cursor-pointer bg-transparent"
              title="Xóa lịch sử luồng sự kiện"
            >
              <Trash2 size={13} />
              <span>Xóa nhật ký</span>
            </button>
          </div>
        </div>

        {/* Logs List Container */}
        <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
          {logs.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#8C7A70] italic">
              Chưa có nhật ký hoạt động mới nào.
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-[#F4EBE0] hover:border-[#E8DACB] hover:bg-[#FAF5EE] transition-all duration-200 text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F4EBE0] border border-[#E8DACB] flex items-center justify-center text-sm font-bold text-[#38150E]">
                    🎓
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#38150E]">{log.user}</span>
                      <span className="text-[#6E5D53] font-medium">{log.action}</span>
                    </div>
                    {log.score !== undefined && (
                      <span className="inline-flex items-center gap-1 mt-0.5 px-2 py-0.2 rounded-full text-[10px] font-extrabold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ⭐ {log.score}/{log.total} điểm
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-[#8C7A70] shrink-0 ml-3">
                  {log.time}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
