"use client";
import React, { useState } from "react";
import { Info, HelpCircle, HardDrive, Cpu, ArrowRight, Activity } from "lucide-react";

export default function FileGoalsExplorer() {
  const [activeTab, setActiveTab] = useState("foundation");
  const [selectedGoal, setSelectedGoal] = useState("stream_def");
  const [streamType, setStreamType] = useState("BYTE"); // "BYTE" | "CHAR"
  const [isFlowing, setIsFlowing] = useState(true);

  const tabs = {
    foundation: {
      name: "1. Nền tảng I/O",
      goals: {
        stream_def: {
          title: "Định nghĩa data stream (luồng dữ liệu)",
          desc: "Data Stream là một dòng chảy liên tục của dữ liệu kết nối chương trình Java với thiết bị ngoại vi hoặc file. Dữ liệu có thể đi vào chương trình (InputStream) hoặc đi ra ngoài (OutputStream)."
        },
        stream_need: {
          title: "Xác định nhu cầu sử dụng stream",
          desc: "Giúp đọc/ghi các file có kích thước cực kỳ lớn từng phần một một cách tuần tự mà không bắt buộc phải nạp toàn bộ file vào bộ nhớ RAM cùng một lúc, tránh hiện tượng tràn bộ nhớ OutOfMemoryError."
        },
        file_class: {
          title: "Mục đích của lớp File, các constructor và method",
          desc: "Lớp File đại diện cho siêu dữ liệu (metadata) của tệp tin hoặc thư mục vật lý (như đường dẫn, kiểm tra sự tồn tại, kích thước, quyền đọc/ghi). Chú ý: Lớp File không hỗ trợ đọc hoặc ghi trực tiếp nội dung bên trong tệp tin."
        },
        data_io: {
          title: "Interface DataInput và DataOutput",
          desc: "Định nghĩa các phương thức chuẩn độc lập phần cứng để đọc/ghi trực tiếp các kiểu dữ liệu nguyên thủy trong Java (int, double, boolean...) dưới dạng nhị phân nguyên bản."
        }
      }
    },
    classification: {
      name: "2. Phân loại Stream",
      goals: {
        byte_char: {
          title: "Byte Stream vs Character Stream",
          desc: "Byte Stream (8-bit) dùng cho mọi tệp tin thô nhị phân (hình ảnh, âm thanh, tệp thực thi). Character Stream (16-bit Unicode) chuyên dùng cho văn bản chữ thuần túy, tự động xử lý và chuyển dịch bảng mã ký tự quốc tế."
        },
        in_out: {
          title: "Lớp InputStream và OutputStream",
          desc: "Hai lớp cha trừu tượng (abstract class) tối cao làm nền tảng cho mọi luồng Byte Input và Byte Output trong package java.io."
        },
        buffered: {
          title: "BufferedInputStream và BufferedOutputStream",
          desc: "Tạo một vùng đệm (buffer) trong RAM để gom dữ liệu đọc/ghi rồi ghi hàng loạt, giảm thiểu tối đa số lần truy cập đọc/ghi đĩa cứng vật lý vốn có tốc độ rất chậm."
        },
        char_streams: {
          title: "Các lớp Character Stream",
          desc: "Bao gồm các lớp kế thừa Reader và Writer (như FileReader, FileWriter, BufferedReader) phục vụ riêng biệt cho việc đọc/ghi các tệp ký tự văn bản unicode."
        }
      }
    },
    advanced: {
      name: "3. Cơ chế nâng cao",
      goals: {
        chaining: {
          title: "Cơ chế chaining (nối chuỗi) I/O",
          desc: "Kỹ thuật lồng các đối tượng luồng vào nhau (ví dụ: bọc một luồng file thô vào một luồng đệm bộ nhớ và luồng định dạng dữ liệu) để kết hợp các chức năng nâng cao chỉ trong một câu lệnh khởi tạo."
        },
        serialization: {
          title: "Định nghĩa Serialization và mục đích",
          desc: "Serialization là quá trình chuyển đổi toàn bộ trạng thái của một đối tượng (Object) trong RAM thành một chuỗi byte để lưu xuống đĩa cứng hoặc truyền đi qua mạng internet, cho phép tái thiết lập lại đối tượng nguyên bản sau này."
        }
      }
    }
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    // Auto select first goal of the new tab
    const firstGoalKey = Object.keys(tabs[tabKey].goals)[0];
    setSelectedGoal(firstGoalKey);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <HardDrive className="w-5 h-5 text-sky-600" />
          <span>Khám Phá Mục Tiêu Bài Học: Xử Lý Tệp Trong Java (File Handling)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Nhấp chọn vào các thẻ nhóm mục tiêu phía dưới để tìm hiểu các khái niệm nền tảng về Stream, File I/O và Serialization.
        </p>

        {/* Tab Buttons */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200/60 select-none max-w-xl mb-6">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === key ? "bg-white text-sky-700 shadow-sm" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {tabs[key].name}
            </button>
          ))}
        </div>

        {/* Content split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Goals List */}
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-2 font-mono">
              Danh sách mục tiêu bài học
            </span>

            <div className="space-y-2">
              {Object.keys(tabs[activeTab].goals).map((key) => {
                const goal = tabs[activeTab].goals[key];
                const isSelected = selectedGoal === key;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedGoal(key)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all select-none ${
                      isSelected
                        ? "bg-sky-50 border-sky-350 text-sky-900 font-bold shadow-sm"
                        : "bg-white border-stone-200 text-stone-600 hover:border-sky-200"
                    }`}
                  >
                    {goal.title}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Goal Explanation Panel & Animation */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Diễn giải chi tiết mục tiêu học tập
              </span>

              <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-sm min-h-[90px] flex items-center">
                <p className="text-xs text-stone-700 leading-relaxed">
                  {tabs[activeTab].goals[selectedGoal].desc}
                </p>
              </div>

              {/* Stream Animation */}
              <div className="bg-stone-900 border border-stone-850 rounded-xl p-4 relative overflow-hidden shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] text-stone-500 uppercase tracking-wider font-bold font-mono flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
                    <span>Mô phỏng Luồng Dữ Liệu (Data Stream)</span>
                  </span>

                  {/* Toggle Stream Type */}
                  <div className="flex bg-stone-800 p-0.5 rounded-lg border border-stone-750 select-none">
                    <button
                      onClick={() => setStreamType("BYTE")}
                      className={`px-2 py-0.5 text-[8px] font-bold rounded transition-all cursor-pointer ${
                        streamType === "BYTE" ? "bg-sky-600 text-white" : "text-stone-400"
                      }`}
                    >
                      Byte
                    </button>
                    <button
                      onClick={() => setStreamType("CHAR")}
                      className={`px-2 py-0.5 text-[8px] font-bold rounded transition-all cursor-pointer ${
                        streamType === "CHAR" ? "bg-indigo-600 text-white" : "text-stone-400"
                      }`}
                    >
                      Char
                    </button>
                  </div>
                </div>

                {/* Animated Pipeline */}
                <div className="flex items-center justify-between gap-2 border border-stone-800 bg-stone-950 p-3 rounded-lg relative min-h-[50px] overflow-hidden">
                  <div className="flex flex-col items-center flex-shrink-0 z-10">
                    <Cpu className="w-5 h-5 text-sky-400" />
                    <span className="text-[8px] text-stone-500 mt-1 font-mono uppercase">RAM (JVM)</span>
                  </div>

                  {/* Pipe pipeline */}
                  <div className="flex-1 h-3 border-y border-stone-800 relative bg-stone-900/60 overflow-hidden flex items-center">
                    {isFlowing && (
                      <div className="w-full flex justify-around animate-[marquee_5s_linear_infinite] whitespace-nowrap font-mono text-[9px] font-bold text-sky-300">
                        {streamType === "BYTE" ? (
                          <>
                            <span className="animate-pulse">0101</span>
                            <span className="animate-pulse">1100</span>
                            <span className="animate-pulse">0011</span>
                            <span className="animate-pulse">1010</span>
                          </>
                        ) : (
                          <>
                            <span className="text-indigo-350">H</span>
                            <span className="text-indigo-350">e</span>
                            <span className="text-indigo-350">l</span>
                            <span className="text-indigo-350">l</span>
                            <span className="text-indigo-350">o</span>
                            <span className="text-indigo-350">!</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center flex-shrink-0 z-10">
                    <ArrowRight className="w-4 h-4 text-stone-500" />
                  </div>

                  <div className="flex flex-col items-center flex-shrink-0 z-10">
                    <HardDrive className="w-5 h-5 text-emerald-400" />
                    <span className="text-[8px] text-stone-500 mt-1 font-mono uppercase">File (Disk)</span>
                  </div>
                </div>

                {/* Flow Control */}
                <div className="mt-3 flex justify-between items-center text-[8px] text-stone-500 font-mono">
                  <span>Trạng thái: {isFlowing ? "FLOWING" : "STOPPED"}</span>
                  <button
                    onClick={() => setIsFlowing(!isFlowing)}
                    className="px-2 py-0.5 bg-stone-850 hover:bg-stone-800 text-stone-300 rounded border border-stone-750 transition-colors select-none cursor-pointer"
                  >
                    {isFlowing ? "Pause Stream" : "Resume Stream"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global info note */}
        <div className="bg-sky-50/60 border border-sky-250/60 rounded-2xl p-4 flex gap-3 items-start mt-6 shadow-sm">
          <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-sky-900 font-mono uppercase tracking-wider block">
              📌 Tóm tắt chương học File Handling
            </span>
            <p className="text-xs text-sky-750 mt-1 leading-relaxed">
              Chương này sẽ chia làm 2 mảng lớn: <strong>Thao tác Metadata tệp tin</strong> (sử dụng lớp <code>File</code>) và <strong>Thao tác Đọc/Ghi nội dung tệp tin</strong> (sử dụng luồng Byte/Character). Cuối cùng là cơ chế tuần tự hóa đối tượng Java (Serialization) để lưu trữ bền vững.
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind keyframe helper */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
