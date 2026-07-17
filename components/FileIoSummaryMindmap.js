"use client";
import React, { useState } from "react";
import { BookOpen, Key, Code, ArrowRight, Layers, FileText, Cpu, ChevronRight } from "lucide-react";

export default function FileIoSummaryMindmap() {
  const [selectedNode, setSelectedNode] = useState("byte");

  const nodes = {
    byte: {
      title: "Byte Streams (Luồng Byte)",
      summary: "Xử lý dữ liệu nhị phân thô (hình ảnh, âm thanh, video, tệp nén), kích thước đơn vị 8-bit (1 byte).",
      classes: ["InputStream (abstract)", "OutputStream (abstract)", "FileInputStream", "FileOutputStream", "ByteArrayInputStream", "ByteArrayOutputStream"],
      methods: [
        "<code>read()</code> ➔ đọc 1 byte tiếp theo (trả về <code>-1</code> khi hết file)",
        "<code>write(byte[] b)</code> ➔ ghi mảng byte ra luồng",
        "<code>close()</code> ➔ đóng luồng, giải phóng tài nguyên hệ thống",
        "<code>flush()</code> ➔ đẩy dữ liệu từ bộ đệm RAM xuống đích vật lý"
      ],
      syntax: 'FileInputStream fis = new FileInputStream("image.png");\nFileOutputStream fos = new FileOutputStream("copy.png");',
      tip: "Thích hợp cho mọi loại tệp tin (ảnh, nhạc, video, nén) ngoại trừ việc đọc ghi ký tự Unicode đa ngôn ngữ. Đây là nền tảng của mọi lớp luồng khác trong Java."
    },
    char: {
      title: "Character Streams (Luồng Ký tự)",
      summary: "Xử lý văn bản, tài liệu văn bản, ký tự mã hóa chuẩn quốc tế Unicode 16-bit (2 bytes).",
      classes: ["Reader (abstract)", "Writer (abstract)", "FileReader", "FileWriter", "CharArrayReader", "CharArrayWriter", "PrintWriter"],
      methods: [
        "<code>read()</code> ➔ đọc 1 ký tự (trả về <code>-1</code> khi đạt cuối tệp)",
        "<code>write(char[] cbuf)</code> ➔ ghi mảng ký tự",
        "<code>println(String s)</code> ➔ ghi chuỗi kèm tự động xuống dòng (PrintWriter)",
        "<code>checkError()</code> ➔ kiểm tra trạng thái lỗi in ấn (PrintWriter)"
      ],
      syntax: 'PrintWriter pw = new PrintWriter(new FileWriter("report.txt"), true);\npw.println("Hello World");',
      tip: "Chuyên dụng cho tệp tin văn bản (text files). Lớp PrintWriter là lớp xuất ký tự mạnh mẽ nhất, không ném ngoại lệ trực tiếp và hỗ trợ autoFlush."
    },
    buffer: {
      title: "Buffered & Filter Streams (Luồng lọc & Đệm)",
      summary: "Bọc luồng thô để tối ưu tốc độ đọc/ghi bằng cache RAM và bổ sung các hàm lọc thông tin tiện ích.",
      classes: ["FilterInputStream / FilterOutputStream", "BufferedInputStream / BufferedOutputStream", "BufferedReader / BufferedWriter"],
      methods: [
        "<code>mark(int readlimit)</code> ➔ đánh dấu vị trí hiện tại trong stream",
        "<code>reset()</code> ➔ quay lại vị trí đánh dấu gần nhất",
        "<code>flush()</code> ➔ ép dữ liệu đang lưu tạm trong RAM xuống tệp vật lý",
        "<code>readLine()</code> ➔ đọc toàn bộ một dòng văn bản (BufferedReader)"
      ],
      syntax: 'BufferedInputStream bis = new BufferedInputStream(new FileInputStream("data.bin"));\n// Chaining: lồng các stream để kết hợp tính năng',
      tip: "Buffered Stream giúp tăng tốc độ gấp hàng trăm lần bằng cách giảm tối đa số lần truy cập đĩa cứng. Kỹ thuật Chaining cho phép xếp chồng các luồng qua constructor."
    },
    serialization: {
      title: "Serialization (Tuần tự hóa đối tượng)",
      summary: "Đọc/ghi và lưu trữ trực tiếp trạng thái của đối tượng (object state) Java xuống luồng byte để lưu file hoặc truyền mạng.",
      classes: ["Serializable (Marker Interface)", "ObjectOutputStream", "ObjectInputStream"],
      methods: [
        "<code>writeObject(Object obj)</code> ➔ tuần tự hóa và ghi đối tượng xuống file",
        "<code>readObject()</code> ➔ đọc file và giải tuần tự hóa về đối tượng (cần ép kiểu)"
      ],
      syntax: 'ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("employee.ser"));\noos.writeObject(employeeObj);\n\nObjectInputStream ois = new ObjectInputStream(new FileInputStream("employee.ser"));\nEmployee emp = (Employee) ois.readObject();',
      tip: "• Thuộc tính có từ khóa transient hoặc static sẽ KHÔNG được tuần tự hóa.\n• Lớp đối tượng bắt buộc phải implements Serializable, nếu không sẽ ném Exception khi ghi."
    }
  };

  const themes = {
    byte: {
      border: "border-sky-100",
      activeBorder: "border-sky-500",
      activeBg: "bg-sky-50/50",
      iconBg: "bg-sky-500 text-white",
      iconInactive: "bg-stone-100 text-sky-500",
      badge: "bg-sky-50 text-sky-700 border-sky-100",
      accent: "text-sky-600",
      syntaxColor: "text-sky-400"
    },
    char: {
      border: "border-amber-100",
      activeBorder: "border-amber-500",
      activeBg: "bg-amber-50/40",
      iconBg: "bg-amber-500 text-white",
      iconInactive: "bg-stone-100 text-amber-600",
      badge: "bg-amber-50 text-amber-800 border-amber-100",
      accent: "text-amber-600",
      syntaxColor: "text-amber-400"
    },
    buffer: {
      border: "border-emerald-100",
      activeBorder: "border-emerald-500",
      activeBg: "bg-emerald-50/50",
      iconBg: "bg-emerald-500 text-white",
      iconInactive: "bg-stone-100 text-emerald-600",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
      accent: "text-emerald-600",
      syntaxColor: "text-emerald-400"
    },
    serialization: {
      border: "border-indigo-100",
      activeBorder: "border-indigo-500",
      activeBg: "bg-indigo-50/50",
      iconBg: "bg-indigo-500 text-white",
      iconInactive: "bg-stone-100 text-indigo-600",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      accent: "text-indigo-600",
      syntaxColor: "text-indigo-400"
    }
  };

  return (
    <div className="w-full bg-white border border-stone-200 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans my-6 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 h-1.5 absolute top-0 left-0 right-0" />

      {/* Header */}
      <div className="mb-6">
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span>Mục IX: Sơ đồ tư duy ôn tập tổng hợp toàn bộ chương File I/O</span>
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chọn một chuyên đề lớn bên dưới để xem nhanh các lớp, phương thức, cú pháp mẫu và lưu ý đặc biệt khi đi thi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Bento-style Navigation Card Stack */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {/* Byte Stream */}
          <button
            onClick={() => setSelectedNode("byte")}
            className={`group flex items-center gap-4 w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
              selectedNode === "byte"
                ? `${themes.byte.activeBg} ${themes.byte.activeBorder} shadow-md ring-1 ring-sky-500/10`
                : "bg-white border-stone-200 text-stone-700 hover:border-sky-300 hover:bg-stone-50/20"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
              selectedNode === "byte" ? themes.byte.iconBg : themes.byte.iconInactive
            }`}>
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-stone-400">Chuyên đề 01</span>
                {selectedNode === "byte" && <ChevronRight className="w-4 h-4 text-sky-500 transition-transform group-hover:translate-x-1" />}
              </div>
              <span className="text-xs md:text-sm font-bold block mt-0.5 text-stone-850 truncate">Byte Streams (Luồng Byte)</span>
            </div>
          </button>

          {/* Character Stream */}
          <button
            onClick={() => setSelectedNode("char")}
            className={`group flex items-center gap-4 w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
              selectedNode === "char"
                ? `${themes.char.activeBg} ${themes.char.activeBorder} shadow-md ring-1 ring-amber-500/10`
                : "bg-white border-stone-200 text-stone-700 hover:border-amber-300 hover:bg-stone-50/20"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
              selectedNode === "char" ? themes.char.iconBg : themes.char.iconInactive
            }`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-stone-400">Chuyên đề 02</span>
                {selectedNode === "char" && <ChevronRight className="w-4 h-4 text-amber-500 transition-transform group-hover:translate-x-1" />}
              </div>
              <span className="text-xs md:text-sm font-bold block mt-0.5 text-stone-850 truncate">Character Streams (Luồng Ký tự)</span>
            </div>
          </button>

          {/* Buffer & Filter */}
          <button
            onClick={() => setSelectedNode("buffer")}
            className={`group flex items-center gap-4 w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
              selectedNode === "buffer"
                ? `${themes.buffer.activeBg} ${themes.buffer.activeBorder} shadow-md ring-1 ring-emerald-500/10`
                : "bg-white border-stone-200 text-stone-700 hover:border-emerald-300 hover:bg-stone-50/20"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
              selectedNode === "buffer" ? themes.buffer.iconBg : themes.buffer.iconInactive
            }`}>
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-stone-400">Chuyên đề 03</span>
                {selectedNode === "buffer" && <ChevronRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />}
              </div>
              <span className="text-xs md:text-sm font-bold block mt-0.5 text-stone-850 truncate">Buffered & Filter Streams</span>
            </div>
          </button>

          {/* Serialization */}
          <button
            onClick={() => setSelectedNode("serialization")}
            className={`group flex items-center gap-4 w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
              selectedNode === "serialization"
                ? `${themes.serialization.activeBg} ${themes.serialization.activeBorder} shadow-md ring-1 ring-indigo-500/10`
                : "bg-white border-stone-200 text-stone-700 hover:border-indigo-300 hover:bg-stone-50/20"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
              selectedNode === "serialization" ? themes.serialization.iconBg : themes.serialization.iconInactive
            }`}>
              <Cpu className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-stone-400">Chuyên đề 04</span>
                {selectedNode === "serialization" && <ChevronRight className="w-4 h-4 text-indigo-500 transition-transform group-hover:translate-x-1" />}
              </div>
              <span className="text-xs md:text-sm font-bold block mt-0.5 text-stone-850 truncate">Tuần tự hóa đối tượng</span>
            </div>
          </button>
        </div>

        {/* Right: Selected Node Details */}
        <div className={`lg:col-span-7 bg-stone-50/25 p-5 rounded-2xl border ${themes[selectedNode].border} flex flex-col justify-between shadow-xs transition-all duration-300`}>
          <div className="space-y-4">
            {/* Header detail */}
            <div className="border-b border-stone-200/50 pb-3">
              <span className={`text-[9px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded ${themes[selectedNode].badge} border`}>
                Chi tiết chuyên đề
              </span>
              <h5 className="text-sm md:text-base font-black text-stone-900 uppercase tracking-wide mt-2">
                {nodes[selectedNode].title}
              </h5>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-normal">
                {nodes[selectedNode].summary}
              </p>
            </div>

            {/* Key classes list */}
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                📚 Các Class chính trong java.io:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {nodes[selectedNode].classes.map((cls, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-white border border-stone-200 rounded font-mono text-[10px] text-stone-700 shadow-2xs">
                    {cls}
                  </span>
                ))}
              </div>
            </div>

            {/* Core methods */}
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                ⚙️ Phương thức quan trọng:
              </span>
              <ul className="list-disc pl-4 text-xs text-stone-700 space-y-1.5 font-normal">
                {nodes[selectedNode].methods.map((method, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: method }}></li>
                ))}
              </ul>
            </div>

            {/* Syntax example */}
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-1.5 font-mono">
                💻 Cú pháp khởi tạo mẫu:
              </span>
              <pre className="p-3 bg-stone-900 border border-stone-800 rounded-xl font-mono text-[11px] text-emerald-400 overflow-x-auto leading-relaxed shadow-sm">
                {nodes[selectedNode].syntax}
              </pre>
            </div>
          </div>

          {/* Exam Tips block */}
          <div className="mt-4 p-3 bg-amber-50/50 border border-amber-100 rounded-xl flex gap-2 text-xs leading-relaxed text-amber-900">
            <Key className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-950 mb-0.5">📌 Lưu ý đi thi:</strong>
              <p className="whitespace-pre-line text-[11px] text-stone-650 font-normal">
                {nodes[selectedNode].tip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
