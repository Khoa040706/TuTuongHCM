"use client";
import React, { useState } from "react";
import { MousePointer, Edit2, Highlighter, Eraser, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

export default function NoteToolbar({
  activeTool,
  setActiveTool,
  activeColor,
  setActiveColor,
  onClearAll
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToolClick = (tool) => {
    setActiveTool(tool);
  };

  const handleColorClick = (color, tool) => {
    setActiveColor(color);
    setActiveTool(tool);
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      // Revert to cursor when closing
      setActiveTool("cursor");
    }
  };

  const penColors = [
    { value: "#EF4444", label: "🔴" },
    { value: "#EAB308", label: "🟡" },
    { value: "#22C55E", label: "🟢" }
  ];

  const hlColors = [
    { value: "rgba(254, 240, 138, 0.45)", label: "🟡" },
    { value: "rgba(244, 63, 94, 0.4)", label: "💗" },
    { value: "rgba(34, 197, 94, 0.35)", label: "🟢" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Main Toolbar */}
      <div
        className={`bg-stone-900/95 dark:bg-stone-950/95 text-stone-100 border border-stone-850 dark:border-stone-800 rounded-full shadow-2xl px-4 py-2 flex items-center gap-3 transition-all duration-300 ${
          isCollapsed
            ? "opacity-0 pointer-events-none translate-x-4 scale-95"
            : "opacity-100 pointer-events-auto translate-x-0 scale-100"
        }`}
      >
        {/* Cursor & Eraser */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleToolClick("cursor")}
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              activeTool === "cursor"
                ? "bg-accent text-white dark:text-stone-950 scale-110 font-bold shadow-md shadow-accent/25"
                : "text-stone-400 hover:text-stone-100 hover:bg-stone-800"
            }`}
            title="Chế độ đọc & cuộn (Cursor)"
          >
            <MousePointer size={18} />
          </button>
          <button
            onClick={() => handleToolClick("eraser")}
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              activeTool === "eraser"
                ? "bg-accent text-white dark:text-stone-950 scale-110 font-bold shadow-md shadow-accent/25"
                : "text-stone-400 hover:text-stone-100 hover:bg-stone-800"
            }`}
            title="Cục tẩy nét vẽ & highlight (Eraser)"
          >
            <Eraser size={18} />
          </button>
        </div>

        <div className="w-[1px] h-6 bg-stone-800" />

        {/* Pen & Colors */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleToolClick("pen")}
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              activeTool === "pen" && penColors.some((c) => c.value === activeColor)
                ? "bg-accent text-white dark:text-stone-950 scale-110 font-bold shadow-md shadow-accent/25"
                : "text-stone-400 hover:text-stone-100 hover:bg-stone-800"
            }`}
            title="Bút vẽ tự do (Pen)"
          >
            <Edit2 size={17} />
          </button>
          {penColors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorClick(color.value, "pen")}
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs hover:scale-125 transition-transform duration-200 cursor-pointer"
              style={{
                transform:
                  activeTool === "pen" && activeColor === color.value ? "scale(1.25)" : ""
              }}
              title={`Bút màu ${color.label}`}
            >
              {color.label}
            </button>
          ))}
        </div>

        <div className="w-[1px] h-6 bg-stone-800" />

        {/* Highlighter & Colors */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleToolClick("highlighter")}
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              activeTool === "highlighter" && hlColors.some((c) => c.value === activeColor)
                ? "bg-accent text-white dark:text-stone-950 scale-110 font-bold shadow-md shadow-accent/25"
                : "text-stone-400 hover:text-stone-100 hover:bg-stone-800"
            }`}
            title="Bút dạ quang (Highlighter)"
          >
            <Highlighter size={18} />
          </button>
          {hlColors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorClick(color.value, "highlighter")}
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs hover:scale-125 transition-transform duration-200 cursor-pointer"
              style={{
                transform:
                  activeTool === "highlighter" && activeColor === color.value
                    ? "scale(1.25)"
                    : ""
              }}
              title={`Highlight màu ${color.label}`}
            >
              {color.label}
            </button>
          ))}
        </div>

        <div className="w-[1px] h-6 bg-stone-800" />

        {/* Delete button */}
        <button
          onClick={onClearAll}
          className="p-2 rounded-full text-red-500 hover:bg-red-500/20 transition-all duration-200 cursor-pointer"
          title="Xóa sạch toàn bộ ghi chú (Clear All)"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className={`w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
          isCollapsed
            ? "bg-accent text-white dark:text-stone-950 hover:bg-accent/90"
            : "bg-stone-700 text-white hover:bg-stone-600 rotate-90"
        }`}
        title={isCollapsed ? "Mở công cụ ghi chú" : "Đóng công cụ"}
      >
        {isCollapsed ? "🎨" : "✕"}
      </button>
    </div>
  );
}
