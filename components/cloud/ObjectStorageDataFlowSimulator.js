"use client";
import React, { useState } from "react";

export default function ObjectStorageDataFlowSimulator() {
  const [activeTab, setActiveTab] = useState("anatomy"); // 'anatomy' | 'upload_sim' | 'trends_arena'
  const [activeTrend, setActiveTrend] = useState("object"); // 'unstructured' | 'object' | 'sds' | 'hybrid'
  const [simState, setSimState] = useState("idle"); // 'idle' | 'uploading' | 'replicated'
  const [activeFile, setActiveFile] = useState("photo.jpg");

  const trends = {
    unstructured: {
      id: "unstructured",
      name: "1. Unstructured Storage (Phi Cấu Trúc)",
      badge: "Text, Ảnh, Video",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: "🎞️",
      characteristics: "Dữ liệu không tuân theo mô hình hàng/cột cố định của cơ sở dữ liệu quan hệ (RDBMS). Chiếm hơn 80% dữ liệu thế giới.",
      pros: "Cực kỳ linh hoạt, có thể chứa bất kỳ định dạng nào (Video 4K, tệp âm thanh, tài liệu PDF, bản vẽ CAD, log ứng dụng).",
      cons: "Khó tìm kiếm và truy vấn bằng câu lệnh SQL truyền thống, đòi hỏi công cụ lập chỉ mục (Indexing) và AI chuyên dụng.",
      examples: "Google Photos, YouTube, Netflix, Dropbox, iCloud Drive.",
      examTip: "Từ khóa đề thi: 'Dữ liệu không theo bảng/cột (text, ảnh, video), không dùng SQL' ➔ Unstructured Storage."
    },
    object: {
      id: "object",
      name: "2. Object Storage (Lưu Trữ Đối Tượng)",
      badge: "Data + Metadata + Unique ID",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      icon: "📦",
      characteristics: "Dữ liệu được đóng gói thành từng Object riêng biệt gồm đúng 3 thành phần: Dữ liệu thô (Data) + Siêu dữ liệu phong phú (Metadata) + Mã định danh duy nhất (Unique ID / GUID).",
      pros: "Khả năng mở rộng vô hạn (Exabytes), chi phí lưu trữ cực rẻ, quản lý và phân loại dữ liệu siêu hiệu quả nhờ Metadata tùy biến không giới hạn.",
      cons: "Không phù hợp cho các tác vụ cần tốc độ đọc/ghi I/O cao liên tục (như cơ sở dữ liệu quan hệ transactional DB), chỉ hỗ trợ ghi đè toàn bộ chứ không sửa đổi từng byte.",
      examples: "Amazon S3, Google Cloud Storage, Microsoft Azure Blob Storage.",
      examTip: "Khẩu quyết cốt tử: 'Object Storage = Data + Metadata + Unique ID' (khác hẳn File storage truyền thống có cấu trúc cây thư mục)."
    },
    sds: {
      id: "sds",
      name: "3. SDS - Software-Defined Storage",
      badge: "Tách Phần Mềm Khỏi Phần Cứng",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: "💻",
      characteristics: "Tách biệt hoàn toàn lớp phần mềm quản lý lưu trữ (Storage Logic) ra khỏi lớp phần cứng vật lý (Proprietary Hardware).",
      pros: "Linh hoạt tối đa, tận dụng được phần cứng máy chủ x86 phổ thông giá rẻ (Commodity hardware), không bị phụ thuộc vào một nhà cung cấp thiết bị độc quyền.",
      cons: "Cấu hình triển khai phức tạp, đòi hỏi đội ngũ kỹ sư có tay nghề kỹ thuật cao để vận hành và cân chỉnh cụm phân tán.",
      examples: "Ceph Storage, OpenStack Swift, VMware vSAN, Red Hat GlusterFS.",
      examTip: "Từ khóa đề thi: 'Tách phần mềm quản lý khỏi phần cứng (Hardware abstraction)' ➔ Software-Defined Storage (SDS)."
    },
    hybrid: {
      id: "hybrid",
      name: "4. Hybrid Storage (Lưu Trữ Lai)",
      badge: "Cloud + On-Premises",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      icon: "🔄",
      characteristics: "Mô hình kết hợp linh hoạt giữa lưu trữ đám mây công cộng (Cloud Storage) và hạ tầng lưu trữ tại chỗ nội bộ (On-premises Storage).",
      pros: "Cân bằng tối ưu bộ ba 'Bảo mật - Chi phí - Hiệu năng': Dữ liệu nhạy cảm mật giữ on-premises, dữ liệu sao lưu hoặc ít quan trọng đẩy lên Cloud.",
      cons: "Kiến trúc quản lý phân tán phức tạp, đòi hỏi đường truyền mạng chuyên dụng đắt đỏ và chi phí đầu tư kép.",
      examples: "AWS Outposts, Microsoft Azure Stack, Google Anthos Storage.",
      examTip: "Trọng tâm bài toán thực tế: 'Phù hợp tổ chức tài chính, y tế, chính phủ cần tuân thủ bảo mật nhưng muốn tối ưu chi phí'."
    }
  };

  const handleSimulateUpload = () => {
    setSimState("uploading");
    setTimeout(() => {
      setSimState("replicated");
    }, 1200);
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-[#0a0f1d] p-6 shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 font-bold text-sm">
              7.4
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Mục III.4 &amp; III.5 • Cơ Chế Upload &amp; 4 Xu Hướng Hiện Đại
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-100">
            Giải Phẫu Object Storage &amp; Hộp Cát 4 Xu Hướng Lưu Trữ Hiện Đại
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Khám phá bộ ba cấu trúc đối tượng (Data + Metadata + Unique ID), mô phỏng upload phân tán và võ đài 4 xu hướng công nghệ lưu trữ.
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("anatomy")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "anatomy"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            📦 Giải Phẫu 1 Object
          </button>
          <button
            onClick={() => setActiveTab("upload_sim")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "upload_sim"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🚀 Giả Lập Upload Phân Tán
          </button>
          <button
            onClick={() => setActiveTab("trends_arena")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "trends_arena"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚔️ Võ Đài 4 Xu Hướng
          </button>
        </div>
      </div>

      {/* TAB 1: OBJECT ANATOMY */}
      {activeTab === "anatomy" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
            <h4 className="text-sm font-bold text-emerald-200 flex items-center gap-2">
              <span>💎</span> Công Thức Cốt Tử: Object = Data Payload + Metadata + Unique ID
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Khác hoàn toàn với hệ thống File System truyền thống (cây thư mục phân cấp cha con), Object Storage lưu trữ mọi thứ trong một không gian phẳng (Flat namespace) duy nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Component 1: Data Payload */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">📄</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Thành phần #1
                </span>
              </div>
              <h5 className="text-sm font-bold text-blue-200">1. Data Payload (Dữ Liệu Thô)</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Chuỗi byte nhị phân thực tế của tệp tin. Có thể là một bức ảnh JPEG, tệp video MP4 10GB, cơ sở dữ liệu sao lưu SQL hoặc tệp văn bản.
              </p>
              <div className="rounded bg-slate-950 p-2 text-[11px] font-mono text-blue-300 border border-slate-800">
                Payload Size: 4.8 MB (Binary Stream)
              </div>
            </div>

            {/* Component 2: Metadata */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🏷️</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Thành phần #2
                </span>
              </div>
              <h5 className="text-sm font-bold text-emerald-200">2. Metadata (Siêu Dữ Liệu)</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tập hợp thông tin mô tả chi tiết: Kích thước, MIME type, ngày tạo, tác giả, thẻ bảo mật (Confidential), vị trí GPS chụp ảnh.
              </p>
              <div className="rounded bg-slate-950 p-2 text-[11px] font-mono text-emerald-300 border border-slate-800">
                Type: image/jpeg • Tag: dept=finance
              </div>
            </div>

            {/* Component 3: Unique ID */}
            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🔑</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Thành phần #3
                </span>
              </div>
              <h5 className="text-sm font-bold text-purple-200">3. Unique ID (Mã Định Danh Duy Nhất)</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Khóa nhận diện toàn cầu (GUID / URI / Hash) đại diện cho vị trí logic của đối tượng. Người dùng truy xuất trực tiếp qua URL Internet.
              </p>
              <div className="rounded bg-slate-950 p-2 text-[11px] font-mono text-purple-300 border border-slate-800">
                ID: obj-9a8f-4b1c-82e3-0d5f
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: UPLOAD & MULTI-REGION SIMULATOR */}
      {activeTab === "upload_sim" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-sm font-bold text-slate-100">
                  Hộp Cát Giả Lập Quy Trình Upload 3 Bước Chuẩn Giáo Trình
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  (1) Upload qua UI ➔ (2) Phân tán &amp; sao lưu backup đa server ➔ (3) Truy cập qua Internet.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={activeFile}
                  onChange={(e) => {
                    setActiveFile(e.target.value);
                    setSimState("idle");
                  }}
                  className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-1 text-xs text-slate-200"
                >
                  <option value="photo.jpg">Ảnh: customer_profile.jpg (3.2 MB)</option>
                  <option value="backup.sql">CSDL: database_backup.sql (1.4 GB)</option>
                  <option value="video.mp4">Video: product_demo.mp4 (450 MB)</option>
                </select>

                <button
                  onClick={handleSimulateUpload}
                  disabled={simState === "uploading"}
                  className="px-4 py-1.5 text-xs font-bold rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition-all disabled:opacity-50"
                >
                  {simState === "uploading" ? "Đang Băm & Phân Tán..." : "Bắt Đầu Upload 🚀"}
                </button>
              </div>
            </div>

            {/* Visualizer Pipeline Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Step 1 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simState !== "idle"
                  ? "border-sky-500 bg-sky-950/40"
                  : "border-slate-800 bg-slate-950/60"
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xl">📤</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-sky-400">
                    Bước 1
                  </span>
                </div>
                <h5 className="mt-2 text-xs font-bold text-slate-200">1. Client Upload</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  User tải {activeFile} qua REST API / Web Console.
                </p>
              </div>

              {/* Step 2 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simState === "replicated"
                  ? "border-emerald-500 bg-emerald-950/40 ring-1 ring-emerald-500/40"
                  : "border-slate-800 bg-slate-950/60"
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xl">🔀</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400">
                    Bước 2 (Cốt Lõi)
                  </span>
                </div>
                <h5 className="mt-2 text-xs font-bold text-slate-200">2. Phân Tán &amp; Nhân Bản</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  Tự động nhân bản 3 bản sao sang 3 Data Center độc lập.
                </p>
              </div>

              {/* Step 3 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simState === "replicated"
                  ? "border-purple-500 bg-purple-950/40"
                  : "border-slate-800 bg-slate-950/60"
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xl">🌐</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-purple-400">
                    Bước 3
                  </span>
                </div>
                <h5 className="mt-2 text-xs font-bold text-slate-200">3. Truy Cập Bất Kỳ Đâu</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  Cấp link HTTPS truy cập dữ liệu với độ sẵn sàng 99.999999999% (11 số 9).
                </p>
              </div>
            </div>

            {simState === "replicated" && (
              <div className="rounded-lg bg-emerald-950/30 p-3 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between">
                <span>✓ Đã phân tán thành công lên Region A (Hà Nội), Region B (Đà Nẵng), Region C (TP.HCM)!</span>
                <span className="font-mono text-[11px] bg-slate-950 px-2 py-0.5 rounded border border-emerald-500/40">
                  Status: 200 OK
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: MODERN TRENDS ARENA */}
      {activeTab === "trends_arena" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.values(trends).map((t) => {
              const isSelected = activeTrend === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTrend(t.id)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border transition-all text-left ${
                    isSelected
                      ? "border-sky-500 bg-sky-950/40 ring-1 ring-sky-500/50 shadow-lg shadow-sky-500/10"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl">{t.icon}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${t.badgeColor}`}>
                      {t.badge}
                    </span>
                  </div>
                  <h5 className="mt-2 text-xs sm:text-sm font-bold text-slate-100">{t.name}</h5>
                </button>
              );
            })}
          </div>

          {/* Active Trend Detailed Card */}
          {(() => {
            const cur = trends[activeTrend];
            return (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cur.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{cur.name}</h4>
                      <p className="text-xs text-sky-400 font-semibold">{cur.characteristics}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="rounded-lg bg-emerald-950/20 p-3.5 border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
                      ✓ Ưu Điểm Đột Phá:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{cur.pros}</p>
                  </div>

                  <div className="rounded-lg bg-red-950/20 p-3.5 border border-red-500/20">
                    <span className="text-xs font-bold text-red-300 uppercase tracking-wider block mb-1">
                      ✗ Nhược Điểm &amp; Đánh Đổi:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{cur.cons}</p>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-950 p-3 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-400">Ứng dụng &amp; Ví dụ thực tế: </span>
                  <span className="text-slate-200 font-medium">{cur.examples}</span>
                </div>

                <div className="rounded-lg bg-amber-500/10 p-3 border border-amber-500/30 text-xs text-amber-200/90 flex items-start gap-2">
                  <span className="text-base">💡</span>
                  <span>{cur.examTip}</span>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-sky-400 font-bold">💡 Khẩu quyết cốt tử:</span>
          <span><strong>Object Storage</strong> = Data + Metadata + ID; <strong>SDS</strong> = Tách phần mềm khỏi phần cứng.</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Mục III.4 &amp; III.5 • Giáo trình chính thức</span>
        </div>
      </div>
    </div>
  );
}
