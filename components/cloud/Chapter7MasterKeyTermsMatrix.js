"use client";
import React, { useState } from "react";

export default function Chapter7MasterKeyTermsMatrix() {
  const [activeTab, setActiveTab] = useState("pillars"); // 'pillars' | 'evolution' | 'terms' | 'traps'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      title: "1. Network Storage & Tiền Đề",
      badge: "Mục I & II",
      icon: "🌐",
      summary: "Sự tiến hóa từ Centralized Storage đến NAS (File-level, mạng LAN) và SAN (Block-level, Fiber Channel mạng riêng tốc độ cao).",
      keyRule: "NAS dùng cho chia sẻ tệp tin văn phòng; SAN dùng cho máy chủ CSDL và ứng dụng hiệu năng cao."
    },
    {
      title: "2. Kiến Trúc Cloud Storage 4 Lớp",
      badge: "Mục III.1",
      icon: "🏛️",
      summary: "Kiến trúc xếp chồng 4 tầng: Client Layer → Access Layer → Service Layer → Storage Infrastructure.",
      keyRule: "CSA gồm 3 thành phần: Storage Servers, Data Transfer Network, Management Services."
    },
    {
      title: "3. Xu Hướng Lưu Trữ Hiện Đại",
      badge: "Mục III.2",
      icon: "📈",
      summary: "Unstructured Data (80% dữ liệu), Object Storage (Data + Metadata + Unique ID), Software-Defined Storage (SDS), Hybrid Storage.",
      keyRule: "Object Storage tối ưu cho dữ liệu phi cấu trúc vô hạn; SDS tách rời phần mềm khỏi phần cứng vật lý."
    },
    {
      title: "4. An Ninh Dữ Liệu Đám Mây",
      badge: "Mục IV",
      icon: "🛡️",
      summary: "3 Mối đe dọa (Cyber attack, Data leak, Lost data) đối ứng với 3 Biện pháp bảo vệ (Encryption, Access Control, Backup and Recovery).",
      keyRule: "Tích hợp hệ thống phát hiện xâm nhập IDS và tuân thủ các chuẩn quốc tế: GDPR, HIPAA, ISO 27001."
    },
    {
      title: "5. Cloud-based Backup System",
      badge: "Mục V",
      icon: "🔄",
      summary: "Hệ thống sao lưu với 3 thành phần (Data Sources, Cloud Infrastructure, Backup Management Software).",
      keyRule: "Quy trình 3 bước chuẩn: Select backup data → Transfer data to cloud → Store and manage backup data."
    },
    {
      title: "6. Ứng Dụng Ngành Công Nghiệp",
      badge: "Mục VI.1",
      icon: "🏭",
      summary: "4 Lợi ích (Scalability, Cost, Access, Security) kết hợp 4 Ứng dụng thực tế: Chuỗi cung ứng, Quản lý sản xuất, Bảo trì dự đoán, Big Data Analytics.",
      keyRule: "Vượt qua thách thức Độ trễ (Latency) và Tích hợp (Integration) nhờ hạ tầng phân tán và giải pháp tích hợp API."
    },
    {
      title: "7. Tam Hùng Cloud Database",
      badge: "Mục VI.2",
      icon: "👑",
      summary: "3 'Ông lớn' cung cấp dịch vụ Database trên Cloud: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP).",
      keyRule: "Chiến lược bảo vệ dữ liệu cốt lõi: Regular Backups (sao lưu định kỳ tự động) và các công cụ quản trị chuyên sâu."
    },
    {
      title: "8. Block Storage Cấp Khối",
      badge: "Mục VII",
      icon: "🧱",
      summary: "Dữ liệu lưu dưới dạng các khối block riêng lẻ, mỗi khối có unique identifier. Hiệu suất cao, độ trễ mili-giây cực thấp.",
      keyRule: "Bộ ba đại diện: AWS EBS, Google Persistent Disk, Azure Managed Disks. Tối ưu nhất cho Database & Virtual Machine."
    }
  ];

  const termsList = [
    { en: "Centralized Storage", vi: "Lưu trữ tập trung", category: "Network", desc: "Mô hình lưu trữ dữ liệu tại một trung tâm dữ liệu duy nhất, dễ quản lý nhưng có nguy cơ Single Point of Failure." },
    { en: "NAS (Network Attached Storage)", vi: "Lưu trữ gắn mạng", category: "Network", desc: "Thiết bị lưu trữ chuyên dụng kết nối trực tiếp vào mạng LAN thông thường, truy xuất ở cấp độ tệp tin (File-level)." },
    { en: "SAN (Storage Area Network)", vi: "Mạng vùng lưu trữ", category: "Network", desc: "Mạng tốc độ cao riêng biệt chuyên dụng (Fiber Channel/iSCSI) kết nối máy chủ với tủ đĩa, truy xuất ở cấp độ khối (Block-level)." },
    { en: "Object Storage", vi: "Lưu trữ đối tượng", category: "Cloud", desc: "Mô hình lưu trữ dữ liệu thành các Object gồm: Data thô + Siêu dữ liệu Metadata phong phú + Mã định danh Unique ID." },
    { en: "Metadata", vi: "Siêu dữ liệu", category: "Cloud", desc: "Thông tin mô tả ngữ cảnh, bản quyền, thuộc tính chi tiết của đối tượng dữ liệu trong Object Storage." },
    { en: "Software-Defined Storage (SDS)", vi: "Lưu trữ định nghĩa bằng phần mềm", category: "Cloud", desc: "Kiến trúc lưu trữ tách biệt phần mềm điều khiển và quản lý ra khỏi phần cứng lưu trữ vật lý bên dưới." },
    { en: "Hybrid Storage", vi: "Lưu trữ lai", category: "Cloud", desc: "Mô hình kết hợp linh hoạt giữa lưu trữ tại chỗ (On-premises) và lưu trữ đám mây (Cloud Storage) để cân bằng chi phí và bảo mật." },
    { en: "IDS (Intrusion Detection System)", vi: "Hệ thống phát hiện xâm nhập", category: "Security", desc: "Công cụ giám sát lưu lượng mạng và nhật ký hệ thống nhằm phát hiện các hành vi tấn công hoặc truy cập trái phép." },
    { en: "Data Sources", vi: "Nguồn dữ liệu sao lưu", category: "Backup", desc: "Thành phần chứa dữ liệu hoạt động ban đầu cần được bảo vệ (Database, VM, tài liệu doanh nghiệp)." },
    { en: "Cloud Infrastructure", vi: "Hạ tầng đám mây", category: "Backup", desc: "Môi trường lưu trữ an toàn đa vùng của nhà cung cấp Cloud lưu giữ các bản sao lưu." },
    { en: "Backup Management Software", vi: "Phần mềm quản lý sao lưu", category: "Backup", desc: "Phần mềm chịu trách nhiệm lập lịch, nén, khử trùng lặp, mã hóa và điều phối quy trình sao lưu/phục hồi." },
    { en: "Select Backup Data", vi: "Chọn lọc dữ liệu sao lưu", category: "Backup", desc: "Bước đầu tiên trong quy trình 3 bước sao lưu, xác định chính xác các phân vùng và tệp tin cần bảo vệ." },
    { en: "Transfer Data to Cloud", vi: "Truyền dữ liệu lên cloud", category: "Backup", desc: "Bước thứ hai trong quy trình sao lưu, thực hiện nén và mã hóa đường truyền SSL/TLS để đưa dữ liệu lên Cloud." },
    { en: "Store and Manage Backup Data", vi: "Lưu trữ & quản lý bản sao lưu", category: "Backup", desc: "Bước thứ ba trong quy trình sao lưu, lưu trữ dữ liệu an toàn và quản lý chính sách lưu trữ (Retention Policy)." },
    { en: "Supply Chain Management", vi: "Quản lý chuỗi cung ứng", category: "Industry", desc: "Ứng dụng Cloud Storage trong việc đồng bộ hóa dữ liệu logistics, kho hàng và đơn vận chuyển toàn cầu." },
    { en: "Production Management", vi: "Quản lý sản xuất", category: "Industry", desc: "Ứng dụng Cloud Storage theo dõi các chỉ số dây chuyền lắp ráp và quản lý quy trình chế tạo trong nhà máy thông minh." },
    { en: "Predictive Maintenance", vi: "Bảo trì dự đoán", category: "Industry", desc: "Ứng dụng phân tích dữ liệu cảm biến IoT công nghiệp lưu trữ trên Cloud để cảnh báo trước thời điểm máy móc hỏng." },
    { en: "Big Data Analytics", vi: "Phân tích dữ liệu lớn", category: "Industry", desc: "Ứng dụng Cloud Data Lake để lưu trữ Petabyte dữ liệu và phân tích báo cáo kinh doanh thông minh (BI)." },
    { en: "AWS (Amazon Web Services)", vi: "Đám mây Amazon", category: "Database", desc: "Nhà cung cấp Cloud hàng đầu với các giải pháp CSDL tiêu biểu: Amazon RDS, Aurora, DynamoDB, Redshift." },
    { en: "Microsoft Azure", vi: "Đám mây Microsoft", category: "Database", desc: "Nhà cung cấp Cloud doanh nghiệp với Azure SQL Database, Azure Cosmos DB, Azure Synapse Analytics." },
    { en: "Google Cloud Platform (GCP)", vi: "Đám mây Google", category: "Database", desc: "Nhà cung cấp Cloud mạnh về Big Data & AI với Cloud SQL, Cloud Spanner, BigQuery, Firestore." },
    { en: "Regular Backups", vi: "Sao lưu định kỳ", category: "Database", desc: "Chiến lược tạo bản sao lưu cơ sở dữ liệu tự động theo chu kỳ (hàng giờ/hàng ngày) để phòng ngừa thảm họa mất dữ liệu." },
    { en: "Block Storage", vi: "Lưu trữ cấp khối", category: "Block", desc: "Mô hình lưu trữ chia dữ liệu thành các block riêng lẻ có unique identifier, cho phép truy cập nhanh và linh hoạt." },
    { en: "Amazon EBS", vi: "Amazon Elastic Block Store", category: "Block", desc: "Dịch vụ ổ đĩa lưu trữ khối hiệu năng cao gắn liền với máy ảo Amazon EC2." },
    { en: "Google Persistent Disk", vi: "Đĩa bền vững Google", category: "Block", desc: "Dịch vụ lưu trữ đĩa khối bền vững gắn vào máy ảo Google Compute Engine." },
    { en: "Azure Managed Disks", vi: "Đĩa quản lý Azure", category: "Block", desc: "Dịch vụ ổ cứng khối cấp doanh nghiệp gắn vào Azure Virtual Machines." },
    { en: "IOPS (Input/Output Operations Per Second)", vi: "Số tác vụ I/O mỗi giây", category: "Block", desc: "Thước đo tốc độ đọc/ghi dữ liệu quan trọng nhất của các ổ đĩa Block Storage." }
  ];

  const examTraps = [
    {
      title: "Bẫy 1: Nhầm lẫn cấp độ truy cập giữa NAS và SAN",
      trap: "Đề thi hay gài: 'NAS cho phép truy cập ở cấp độ khối (Block-level)' hoặc 'SAN kết nối trực tiếp vào mạng LAN thông thường'.",
      truth: "Chính xác: NAS là File-level và chạy trên mạng LAN thông thường. SAN là Block-level và chạy trên mạng chuyên dụng tốc độ cao (Fiber Channel / iSCSI).",
      tag: "Cực kỳ phổ biến"
    },
    {
      title: "Bẫy 2: 3 Thành phần cấu thành Object Storage",
      trap: "Đề thi hỏi: 'Một đối tượng trong Object Storage gồm các thành phần nào?' và đưa ra đáp án nhiễu có 'File path' hoặc 'Directory'.",
      truth: "Chính xác: Một đối tượng trong Object Storage CHỈ gồm đúng 3 thành phần: Data (dữ liệu thô) + Metadata (siêu dữ liệu) + Unique Identifier (mã định danh duy nhất). Tuyệt đối không có cây thư mục hay đường dẫn tệp.",
      tag: "Điểm liệt lý thuyết"
    },
    {
      title: "Bẫy 3: Thứ tự 3 bước trong Cloud Data Backup Process",
      trap: "Đề thi đảo lộn thứ tự các bước: 'Transfer data → Select data → Store data'.",
      truth: "Chính xác: Khẩu quyết chuẩn slide: Bước 1: Select backup data → Bước 2: Transfer data to the cloud → Bước 3: Store and manage backup data.",
      tag: "Quy trình chuẩn"
    },
    {
      title: "Bẫy 4: Lựa chọn mô hình lưu trữ tối ưu cho Database & Máy ảo",
      trap: "Đề thi hỏi: 'Lưu trữ cơ sở dữ liệu quan hệ (RDBMS) và Boot Volume máy ảo nên sử dụng Object Storage vì giá rẻ'.",
      truth: "Chính xác: Cả Database Storage và Virtual Machine Storage bắt buộc phải sử dụng Block Storage (EBS, Persistent Disk, Managed Disks) do đòi hỏi IOPS cao, độ trễ mili-giây và khả năng ghi đè từng sector độc lập.",
      tag: "Vận dụng thực tế"
    }
  ];

  const filteredTerms = termsList.filter(
    (t) =>
      t.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-8 rounded-2xl border border-amber-500/20 bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-900/95 p-5 shadow-2xl backdrop-blur-xl sm:p-7 text-slate-100">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-amber-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
            <span>Mục VIII</span>
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span>🔑 Tổng Kết Nhanh &amp; Ma Trận Toàn Diện Chương 7</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Chapter 7 Master Key Terms &amp; Synthesis Matrix
          </h3>
          <p className="text-xs text-amber-200/70 sm:text-sm">
            Hệ thống hóa 8 Trụ Cột Tri Thức, Sơ đồ tiến hóa, Từ điển 27+ thuật ngữ &amp; Radar cảnh báo bẫy thi
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1 rounded-xl border border-slate-700/50 bg-slate-950/70 p-1">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "pillars"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏛️ 8 Trụ Cột
          </button>
          <button
            onClick={() => setActiveTab("evolution")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "evolution"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🌊 Sơ Đồ Tiến Hóa
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "terms"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            📖 Từ Điển Thuật Ngữ
          </button>
          <button
            onClick={() => setActiveTab("traps")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "traps"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🎯 Radar Bẫy Thi
          </button>
        </div>
      </div>

      {/* TAB 1: 8 CORE PILLARS */}
      {activeTab === "pillars" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {pillars.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPillar(idx)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  selectedPillar === idx
                    ? "border-amber-400 bg-amber-500/15 ring-1 ring-amber-400/50 shadow-md"
                    : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-[10px] font-bold text-amber-400">{p.badge}</span>
                </div>
                <div className="mt-2 text-xs font-bold text-white line-clamp-1">{p.title}</div>
              </button>
            ))}
          </div>

          {/* Active Pillar Showcase */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{pillars[selectedPillar].icon}</span>
                <h4 className="text-base font-bold text-white">{pillars[selectedPillar].title}</h4>
              </div>
              <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-300">
                {pillars[selectedPillar].badge}
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {pillars[selectedPillar].summary}
            </p>

            <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                🔑 KHẨU QUYẾT TRỌNG TÂM ÔN THI
              </span>
              <div className="mt-1 text-xs font-semibold text-white">
                {pillars[selectedPillar].keyRule}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EVOLUTION FLOW */}
      {activeTab === "evolution" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
            Dòng chảy tiến hóa của kiến trúc lưu trữ dữ liệu từ trung tâm dữ liệu truyền thống đến đám mây hiện đại:
          </div>

          <div className="relative border-l-2 border-amber-500/40 ml-4 space-y-6 pl-6 py-2">
            {[
              {
                stage: "1. Centralized Storage",
                sub: "Tiền đề ban đầu",
                desc: "Tập trung máy chủ và ổ đĩa vào một trung tâm duy nhất, quản lý tập trung nhưng nghẽn cổ chai và rủi ro sụp đổ hệ thống.",
                color: "slate"
              },
              {
                stage: "2. NAS (Network Attached Storage)",
                sub: "Truy cập cấp độ Tệp tin (File-level)",
                desc: "Kết nối trực tiếp vào mạng LAN thông thường qua giao thức NFS/SMB, chi phí thấp, tối ưu cho việc chia sẻ tài liệu văn phòng.",
                color: "sky"
              },
              {
                stage: "3. SAN (Storage Area Network)",
                sub: "Truy cập cấp độ Khối (Block-level)",
                desc: "Mạng tốc độ cao riêng biệt dùng cáp quang Fiber Channel hoặc iSCSI, độ trễ cực thấp cho các cơ sở dữ liệu lớn.",
                color: "indigo"
              },
              {
                stage: "4. Cloud Object Storage",
                sub: "Dữ liệu phi cấu trúc vô hạn (Data + Metadata + ID)",
                desc: "Đột phá lưu trữ hàng tỷ tệp tin qua RESTful API/HTTP, độ bền 11 số 9, không giới hạn không gian lưu trữ.",
                color: "emerald"
              },
              {
                stage: "5. Cloud Block Storage (EBS, PD, Managed Disks)",
                sub: "Ổ đĩa ảo hóa hiệu năng cao cho VM & Database",
                desc: "Dữ liệu phân rã thành các block 4KB kèm ID riêng, tốc độ IOPS tới hàng trăm nghìn, gắn tháo linh hoạt trên Cloud.",
                color: "violet"
              },
              {
                stage: "6. Cloud-based Backup System",
                sub: "Phòng thủ thảm họa toàn diện (Select → Transfer → Store/Manage)",
                desc: "Tự động hóa sao lưu định kỳ, khử trùng lặp dữ liệu, mã hóa đa tầng và phục hồi tức thì.",
                color: "amber"
              }
            ].map((st, i) => (
              <div key={i} className="relative group">
                <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 ring-4 ring-slate-950" />
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-amber-500/40">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-white text-sm">{st.stage}</h5>
                    <span className="text-[11px] font-semibold text-amber-400">{st.sub}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: MASTER TERMINOLOGY DICTIONARY */}
      {activeTab === "terms" && (
        <div className="mt-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Tìm kiếm thuật ngữ (Anh / Việt / Chuyên mục)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="text-xs text-slate-400">
            Hiển thị <strong className="text-amber-300">{filteredTerms.length}</strong> / {termsList.length} thuật ngữ chuẩn hóa
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-h-[480px] overflow-y-auto pr-1">
            {filteredTerms.map((t, idx) => (
              <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/70 p-3.5 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">{t.en}</span>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[9px] font-semibold text-slate-300">{t.category}</span>
                </div>
                <div className="mt-0.5 text-xs font-semibold text-white">{t.vi}</div>
                <p className="mt-1.5 text-[11px] text-slate-300 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: EXAM TRAPS RADAR */}
      {activeTab === "traps" && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-4">
            <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
              ⚠️ RADAR CẢNH BÁO ĐIỂM LIỆT &amp; BẪY THI TRẮC NGHIỆM
            </span>
            <p className="mt-1 text-xs text-slate-300">
              Tổng hợp 4 bẫy tư duy thường gặp nhất trong các đề thi môn Điện toán đám mây liên quan đến Lưu trữ dữ liệu
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {examTraps.map((tr, idx) => (
              <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
                      {tr.tag}
                    </span>
                    <span className="text-base">🎯</span>
                  </div>
                  <h5 className="mt-2 font-bold text-white text-xs sm:text-sm">{tr.title}</h5>
                  <div className="mt-2 rounded-lg bg-red-950/30 p-2.5 text-[11px] text-red-200 border border-red-500/20">
                    <strong>Bẫy thường gặp:</strong> {tr.trap}
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-emerald-950/30 p-2.5 text-[11px] text-emerald-200 border border-emerald-500/20">
                  <strong>Khắc cốt ghi tâm:</strong> {tr.truth}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
