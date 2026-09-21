"use client";
import React, { useState } from "react";
import { 
  Network, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Layers, 
  BookOpen, 
  ArrowRight,
  Info,
  GitFork,
  FolderTree
} from "lucide-react";

// Scope Guard Items
const SCOPE_IN = [
  { item: "Khảo sát và hiểu quy trình nghiệp vụ (Business Processes)", note: "Pha Initiation / Inception" },
  { item: "Event Decomposition: 3 loại Business Events (External, Temporal, State)", note: "Lập Master Event Table 6 cột" },
  { item: "Nhận diện 4 nhóm Actors (Human, External Systems, Hardware Devices, Internal Roles)", note: "Đặt bên ngoài System Boundary" },
  { item: "Chuyển hóa 1:1 từ Business Event sang System Use Case", note: "Đặt tên chuẩn Verb + Noun" },
  { item: "Mô hình hóa biểu đồ UML Use Case Diagram", note: "Boundary, Actors, Use Cases, Associations" },
  { item: "Tổ chức & Cấu trúc Use Case (<<include>>, <<extend>>, Generalization)", note: "Tối ưu hóa tránh trùng lặp" },
  { item: "Viết bản đặc tả sơ bộ (Brief/Fully-developed Use Case Descriptions)", note: "Pre/Postconditions, Main & Alternate Flows" },
  { item: "Kiểm định & Xác nhận mô hình với Stakeholders", note: "Hoàn tất bàn giao sang pha Elaboration" }
];

const SCOPE_OUT = [
  { item: "Biểu đồ lớp (Class Diagram) & Thiết kế CSDL (Database Schema)", reason: "Thuộc pha Elaboration và Design Phase" },
  { item: "Biểu đồ tuần tự (Sequence Diagram) & Biểu đồ giao tiếp (Communication)", reason: "Thuộc phân tích tương tác động ở pha Elaboration" },
  { item: "Yêu cầu phi chức năng chi tiết (FURPS+: Performance, Security architecture)", reason: "Chỉ thu thập sơ bộ ở Supplementary Specs, không đi sâu ở Ch3" },
  { item: "Các quan hệ phần mềm hướng đối tượng: Aggregation, Composition, Interface", reason: "Áp dụng trong Class/Component Diagram, không có trong Use Case Diagram" },
  { item: "Thiết kế giao diện UI/UX chi tiết (Wireframes/Mockups chuẩn Pixel)", reason: "Chỉ làm prototype thô kiểm chứng, thiết kế chuẩn thuộc Design Phase" },
  { item: "Viết mã nguồn (Coding), Unit Test và Triển khai hạ tầng (Deployment)", reason: "Thuộc Construction và Transition Phases" }
];

// Tree Nodes for 5 Major Branches
const MINDMAP_BRANCHES = [
  {
    id: "b1",
    title: "1. Event Decomposition (Phân rã sự kiện)",
    color: "border-amber-400 bg-amber-50/50 text-amber-950",
    badge: "Phần III",
    summary: "Xuất phát điểm của toàn bộ quá trình xác định yêu cầu hệ thống.",
    leaves: [
      { name: "3 Loại sự kiện nghiệp vụ", detail: "External (Do người dùng/hệ thống ngoài kích hoạt); Temporal (Do thời gian/hạn chót kích hoạt); State (Do trạng thái/ngưỡng nội bộ kích hoạt)." },
      { name: "Event Table 6 cột chuẩn", detail: "Event | Trigger | Source | Use Case | Response | Destination. Đây là cầu nối trung gian chuyển hóa bài toán nghiệp vụ thành ca sử dụng." },
      { name: "Event-Driven Thinking", detail: "Tư duy phản hồi sự kiện thực tế thay vì tư duy liệt kê chức năng thụ động." }
    ]
  },
  {
    id: "b2",
    title: "2. Actor Identification (Nhận diện tác nhân)",
    color: "border-blue-400 bg-blue-50/50 text-blue-950",
    badge: "Phần IV",
    summary: "Xác định các chủ thể bên ngoài tương tác trực tiếp với ranh giới hệ thống.",
    leaves: [
      { name: "Khái niệm Role", detail: "Actor là vai trò thực hiện tương tác, không phải con người cụ thể." },
      { name: "4 Nhóm Actor", detail: "Human Users, External Systems (API, Payment), Hardware Devices (Barcode, Sensor), Internal Background Timers/Daemons." },
      { name: "Phân hạng Actor", detail: "Primary Actor (Khởi xướng nhận giá trị) vs Secondary/Supporting Actor (Cung cấp dịch vụ hỗ trợ)." }
    ]
  },
  {
    id: "b3",
    title: "3. System Use Cases (Xác định ca sử dụng)",
    color: "border-emerald-400 bg-emerald-50/50 text-emerald-950",
    badge: "Phần V",
    summary: "Định hình các đơn vị chức năng độc lập mang lại giá trị trọn vẹn.",
    leaves: [
      { name: "Quy tắc 1:1 Vàng", detail: "Mỗi Business Event trong Event Table chuyển hóa trực tiếp thành đúng 1 System Use Case." },
      { name: "Quy ước đặt tên Verb + Noun", detail: "Bắt đầu bằng động từ hành động + danh từ bổ ngữ (VD: Register for Courses, Submit Grade)." },
      { name: "Anti-Pattern Màn hình", detail: "Không đặt tên theo UI như 'Màn hình đăng nhập', 'Form tra cứu'." }
    ]
  },
  {
    id: "b4",
    title: "4. Organizing Use Cases (Tổ chức & Cấu trúc)",
    color: "border-purple-400 bg-purple-50/50 text-purple-950",
    badge: "Phần VI",
    summary: "Tối ưu hóa sơ đồ bằng các mối quan hệ cấu trúc chuẩn UML.",
    leaves: [
      { name: "<<include>> (Bao hàm)", detail: "Hành vi trích xuất LUÔN LUÔN BẮT BUỘC PHẢI CHẠY. Mũi tên: Base ---> Included." },
      { name: "<<extend>> (Mở rộng)", detail: "Hành vi tùy chọn/ngoại lệ CHỈ CHẠY KHI CÓ ĐIỀU KIỆN (Extension Point). Mũi tên: Extension ---> Base." },
      { name: "Generalization (Kế thừa)", detail: "Quan hệ Is-A chuyên biệt hóa. Mũi tên: Tam giác rỗng từ Con chỉ về Cha." }
    ]
  },
  {
    id: "b5",
    title: "5. Use Case Descriptions (Đặc tả chi tiết)",
    color: "border-rose-400 bg-rose-50/50 text-rose-950",
    badge: "Phần II",
    summary: "Văn bản hóa hành vi tương tác nhịp nhàng giữa Actor và Hệ thống.",
    leaves: [
      { name: "Brief vs Fully-Developed", detail: "Từ đoạn văn tóm tắt ngắn (Brief) đến mẫu biểu chi tiết 8 mục (Fully-Developed)." },
      { name: "Pre & Postconditions", detail: "Trạng thái bắt buộc trước khi bắt đầu và cam kết lưu trữ dữ liệu sau khi hoàn tất." },
      { name: "Main vs Alternate Flows", detail: "Kịch bản hạnh phúc (Happy Path) và các nhánh xử lý ngoại lệ từng bước." }
    ]
  }
];

export default function OnePageMemoryMapVisualizer() {
  const [activeTab, setActiveTab] = useState("mindmap"); // 'mindmap' | 'scope'
  const [expandedBranch, setExpandedBranch] = useState("b1");

  return (
    <div className="my-8 rounded-2xl border border-stone-200/80 bg-white p-6 md:p-8 shadow-xl shadow-stone-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200 mb-2">
            <FolderTree className="w-3.5 h-3.5 text-blue-600" />
            Mục 7.7 & 7.8 — Tổng lực tri thức
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            One-Page Memory Map & Chapter Scope Guard
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Cây sơ đồ trí nhớ toàn năng của Chapter 3 và Hàng rào phân định phạm vi kiến thức (Scope Guard) giúp không bị đề thi đánh lạc hướng.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("mindmap")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "mindmap"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <GitFork className="w-3.5 h-3.5 text-blue-600" />
            One-Page Mindmap
          </button>
          <button
            onClick={() => setActiveTab("scope")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "scope"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            Scope Guard (Trong vs Ngoài)
          </button>
        </div>
      </div>

      {/* Tab 1: One-Page Mindmap Tree */}
      {activeTab === "mindmap" && (
        <div className="mt-6 space-y-6">
          {/* Root Concept Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white shadow-lg text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Root Knowledge Node — Chapter 3
            </span>
            <h4 className="text-lg md:text-xl font-extrabold mt-1">
              Initiation Phase: From Business Events to System Use Case Model
            </h4>
            <p className="text-xs text-stone-300 mt-1 max-w-xl mx-auto">
              Chuỗi chuyển hóa giá trị cốt lõi: Khảo sát quy trình ➔ Phân rã sự kiện ➔ Xác định tác nhân ➔ Chuyển hóa Use Case ➔ Cấu trúc hóa mô hình ➔ Đặc tả kịch bản.
            </p>
          </div>

          {/* 5 Branches */}
          <div className="space-y-4">
            {MINDMAP_BRANCHES.map(branch => {
              const isExpanded = expandedBranch === branch.id;
              return (
                <div 
                  key={branch.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isExpanded ? "ring-2 ring-stone-900/10 shadow-md" : "hover:border-stone-400"
                  }`}
                >
                  <button
                    onClick={() => setExpandedBranch(isExpanded ? null : branch.id)}
                    className={`w-full p-4 text-left flex items-center justify-between transition-colors ${branch.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/80 border border-current shadow-xs">
                        {branch.badge}
                      </span>
                      <div>
                        <h5 className="font-black text-sm md:text-base">
                          {branch.title}
                        </h5>
                        <p className="text-xs opacity-80 mt-0.5">
                          {branch.summary}
                        </p>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0 text-stone-700">
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Leaves / Sub-nodes */}
                  {isExpanded && (
                    <div className="p-4 bg-white border-t border-stone-200 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {branch.leaves.map((leaf, lIdx) => (
                          <div 
                            key={lIdx}
                            className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors"
                          >
                            <div className="font-bold text-xs text-stone-900 mb-1 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                              {leaf.name}
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed">
                              {leaf.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Scope Guard Matrix */}
      {activeTab === "scope" && (
        <div className="mt-6 space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5 text-amber-950">Mẹo làm bài thi trắc nghiệm (Scope Guard):</strong>
              Giảng viên ra đề rất thích gài bẫy hỏi các khái niệm thuộc pha <em>Elaboration</em> hoặc <em>Design</em> (như Class Diagram, Sequence Diagram, Aggregation, Database Schema) vào câu hỏi về pha <em>Initiation</em>. Bảng dưới đây giúp bạn lập tức loại bỏ các phương án nhiễu!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Scope IN (Green) */}
            <div className="rounded-xl border border-emerald-300 bg-emerald-50/30 p-5 space-y-4">
              <div className="flex items-center gap-2 border-b border-emerald-200 pb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <div>
                  <h4 className="font-extrabold text-sm text-emerald-950">
                    THUỘC PHẠM VI CHAPTER 3 (IN SCOPE)
                  </h4>
                  <span className="text-[11px] text-emerald-700">Trọng tâm nghiên cứu của Initiation Phase & Use Case Modeling</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {SCOPE_IN.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-emerald-200 text-xs flex items-start gap-2.5 shadow-xs"
                  >
                    <span className="font-bold text-emerald-700 mt-0.5">✓</span>
                    <div>
                      <div className="font-semibold text-stone-900">{item.item}</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">({item.note})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope OUT (Red) */}
            <div className="rounded-xl border border-rose-300 bg-rose-50/30 p-5 space-y-4">
              <div className="flex items-center gap-2 border-b border-rose-200 pb-3">
                <XCircle className="w-5 h-5 text-rose-600" />
                <div>
                  <h4 className="font-extrabold text-sm text-rose-950">
                    KHÔNG THUỘC CHAPTER 3 (OUT OF SCOPE / BẪY THI)
                  </h4>
                  <span className="text-[11px] text-rose-700">Các khái niệm thuộc pha sau hoặc lĩnh vực kỹ thuật khác</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {SCOPE_OUT.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-rose-200 text-xs flex items-start gap-2.5 shadow-xs"
                  >
                    <span className="font-bold text-rose-600 mt-0.5">✗</span>
                    <div>
                      <div className="font-semibold text-stone-900">{item.item}</div>
                      <div className="text-[11px] text-rose-700 mt-0.5 font-medium">➔ Lý do: {item.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
