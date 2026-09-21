"use client";
import React, { useState } from "react";

export default function NasVsSanEvolutionDuel() {
  const [activeTab, setActiveTab] = useState("evolution"); // 'evolution' | 'san_layers' | 'duel_matrix'
  const [selectedEra, setSelectedEra] = useState("san"); // 'centralized' | 'nas' | 'san'
  const [activeSanLayer, setActiveSanLayer] = useState("fabric"); // 'host' | 'fabric' | 'storage'

  const eras = {
    centralized: {
      id: "centralized",
      name: "1. Centralized Storage (Lưu Trữ Tập Trung)",
      era: "Thập niên 1980 - Đầu 1990",
      badge: "Máy Chủ Cục Bộ",
      badgeColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
      icon: "🖥️",
      architecture: "Máy chủ lớn (Mainframe/Server) chứa ổ cứng nội bộ hoặc mảng đĩa gắn trực tiếp (Direct-Attached Storage - DAS).",
      mechanisms: [
        "Dữ liệu được lưu tại duy nhất một vị trí vật lý.",
        "Mọi máy trạm client phải kết nối trực tiếp vào máy chủ này để đọc/ghi.",
        "Sử dụng bus phần cứng nội bộ (SCSI, IDE, ATA cũ)."
      ],
      drawbacks: [
        "Khả năng mở rộng kém (Ability of extension): Bị giới hạn nghiêm ngặt bởi không gian thùng máy và số lượng khe cắm đĩa.",
        "Nghẽn cổ chai (Bottleneck / Efficiency): Khi hàng chục người dùng cùng truy cập, I/O của máy chủ bị quá tải làm sụt giảm hiệu năng.",
        "Quản lý tốn công & Rủi ro cao: Chi phí bảo trì đắt đỏ, dễ mất trắng dữ liệu khi ổ cứng hoặc bo mạch máy chủ bị hỏng (Single Point of Failure)."
      ],
      examTip: "Từ khóa đề thi: 'Lưu tại 1 vị trí duy nhất, nghẽn cổ chai khi đông người truy cập' ➔ Centralized Storage."
    },
    nas: {
      id: "nas",
      name: "2. NAS - Network Attached Storage",
      era: "Thập niên 1990 - Nay",
      badge: "Cấp Độ Tệp (File-Level)",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: "📁",
      architecture: "Thiết bị lưu trữ chuyên dụng (Appliance có CPU, RAM, OS riêng) kết nối trực tiếp vào mạng nội bộ LAN (Ethernet/TCP-IP).",
      mechanisms: [
        "Truy cập ở cấp độ tệp tin (File-level storage).",
        "Sử dụng các giao thức chia sẻ file mạng phổ biến: NFS (Linux), CIFS/SMB (Windows), AFP (Apple).",
        "Mọi thiết bị trong gia đình hoặc văn phòng (Mac, Windows, điện thoại, TV, camera giám sát) đều truy cập chung một nguồn dữ liệu."
      ],
      drawbacks: [
        "Băng thông bị chia sẻ với lưu lượng mạng LAN thông thường, dễ bị chậm khi mạng nội bộ bị nghẽn.",
        "Không tối ưu cho các cơ sở dữ liệu (Database) đòi hỏi tốc độ I/O cấp độ khối (block) cực lớn.",
        "Phù hợp nhất cho chia sẻ tài liệu, lưu trữ phim ảnh, sao lưu văn phòng quy mô vừa và nhỏ."
      ],
      examTip: "Từ khóa đề thi: 'Kết nối mạng LAN, truy cập File-level, chia sẻ đa thiết bị văn phòng' ➔ NAS."
    },
    san: {
      id: "san",
      name: "3. SAN - Storage Area Network",
      era: "Cuối thập niên 1990 - Kỷ nguyên Cloud Data Center",
      badge: "Cấp Độ Khối (Block-Level)",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      icon: "⚡",
      architecture: "Mạng chuyên dụng tốc độ cao riêng biệt hoàn toàn với mạng LAN, kết nối các mảng đĩa (Disk Arrays) với máy chủ doanh nghiệp.",
      mechanisms: [
        "Truy cập ở cấp độ khối (Block-level storage): Hệ điều hành máy chủ nhận diện như một ổ đĩa gắn trực tiếp cục bộ.",
        "Sử dụng cáp quang Fiber Channel (FC) tốc độ cao (16/32/64 Gbps) hoặc giao thức iSCSI qua mạng IP riêng.",
        "Hỗ trợ tính năng dự phòng đa đường (Multipathing) giúp loại bỏ hoàn toàn điểm lỗi đơn lẻ."
      ],
      drawbacks: [
        "Chi phí đầu tư ban đầu cực kỳ đắt đỏ (High initial cost): Cần SAN Switch quang, card mạng HBA chuyên dụng, tủ đĩa cao cấp.",
        "Cấu hình và quản trị vô cùng phức tạp (Complex configuration & management), đòi hỏi kỹ sư chuyên sâu.",
        "Tiêu thụ điện năng lớn và đòi hỏi phòng máy đạt tiêu chuẩn khắt khe về làm mát."
      ],
      examTip: "Từ khóa đề thi: 'Mạng tốc độ cao riêng, cáp quang Fiber Channel/iSCSI, Block-level, hiệu năng cao cho Enterprise/DB' ➔ SAN."
    }
  };

  const sanLayers = {
    host: {
      id: "host",
      title: "1. Host Layer (Lớp Máy Chủ Ứng Dụng)",
      icon: "🖥️",
      role: "Nơi chạy các hệ thống nghiệp vụ quan trọng (Enterprise Applications, Database Server, Virtualization Hosts VMware/Hyper-V).",
      details: [
        "Mỗi máy chủ được trang bị card giao tiếp quang chuyên dụng HBA (Host Bus Adapter).",
        "Hệ điều hành máy chủ gửi lệnh đọc/ghi SCSI dạng khối thô (raw blocks).",
        "Hệ thống nhận diện các ổ đĩa SAN từ xa hệt như ổ cứng cục bộ gắn trong máy."
      ],
      techSpecs: "Giao tiếp: HBA Card • Lệnh: SCSI-3 Commands • Tốc độ: 16Gb/32Gb Fiber Channel"
    },
    fabric: {
      id: "fabric",
      title: "2. Fabric Layer (Lớp Mạng Trung Gian - SAN Switch)",
      icon: "🔀",
      role: "Trái tim điều phối của SAN, là mạng chuyển mạch tốc độ cao độc lập kết nối giữa Host Layer và Storage Layer.",
      details: [
        "Bao gồm các thiết bị chuyển mạch quang (SAN Switches, Fiber Channel Directors) chuyên dụng.",
        "Cấu hình phân vùng an toàn (Zoning): Chỉ cho phép máy chủ được chỉ định nhìn thấy đúng mảng đĩa được cấp phép.",
        "Đảm bảo băng thông liên tục, không bao giờ bị nghẽn bởi lưu lượng Internet hay email của nhân viên văn phòng."
      ],
      techSpecs: "Thiết bị: SAN Fiber Channel Switches (Brocade, Cisco MDS) • Kỹ thuật: Fabric Zoning & LUN Masking"
    },
    storage: {
      id: "storage",
      title: "3. Storage Layer (Lớp Lưu Trữ Vật Lý)",
      icon: "🗄️",
      role: "Nơi lưu trữ dữ liệu thực tế gồm các tủ đĩa dung lượng khổng lồ (Disk Arrays, JBOD, Tape Drives, NVMe-oF).",
      details: [
        "Các ổ đĩa vật lý được gom nhóm và cấu hình dự phòng lỗi bằng RAID phần cứng (RAID 5, 6, 10).",
        "Phân chia không gian thành các phân vùng logic gọi là LUN (Logical Unit Numbers).",
        "Cung cấp các tính năng cao cấp cấp doanh nghiệp: Snapshot tức thì, sao chép từ xa (Remote Replication), Deduplication (chống trùng lặp dữ liệu)."
      ],
      techSpecs: "Hạ tầng: Mảng đĩa Enterprise (Dell EMC, NetApp, HPE 3PAR) • Đơn vị quản lý: LUN (Logical Unit Number)"
    }
  };

  const comparisonRows = [
    {
      criterion: "Loại Mạng Kết Nối",
      nas: "Mạng cục bộ LAN thông thường (Ethernet / TCP-IP)",
      san: "Mạng tốc độ cao riêng biệt (Fiber Channel hoặc iSCSI)",
      highlight: true
    },
    {
      criterion: "Cấp Độ Truy Cập Dữ Liệu",
      nas: "File-level (Cấp độ tệp tin: chia sẻ file qua thư mục)",
      san: "Block-level (Cấp độ khối: hệ điều hành thấy như ổ đĩa raw)",
      highlight: true
    },
    {
      criterion: "Giao Thức Truyền Tải",
      nas: "NFS, CIFS / SMB, AFP, HTTP, FTP",
      san: "Fiber Channel Protocol (FCP), iSCSI, FCoE, NVMe-oF",
      highlight: false
    },
    {
      criterion: "Chi Phí Đầu Tư",
      nas: "Thấp đến Vừa phải (dễ mua, phần cứng phổ thông)",
      san: "Rất cao (Switch quang, HBA, cáp quang, mảng đĩa Enterprise)",
      highlight: false
    },
    {
      criterion: "Độ Phức Tạp Cấu Hình",
      nas: "Đơn giản (Cắm vào LAN, cấu hình qua giao diện Web)",
      san: "Phức tạp (Cần kỹ sư chuyên môn cấu hình Zoning, LUN)",
      highlight: false
    },
    {
      criterion: "Hiệu Năng & Độ Trễ",
      nas: "Hiệu năng khá, phụ thuộc vào tải mạng LAN chung",
      san: "Hiệu năng cực cao, độ trễ cực thấp (Micro-giây)",
      highlight: true
    },
    {
      criterion: "Trường Hợp Sử Dụng Tiêu Biểu",
      nas: "Chia sẻ file văn phòng, sao lưu máy tính, media streaming",
      san: "Cơ sở dữ liệu lớn (Oracle, SQL Server), ảo hóa VMware cụm lớn",
      highlight: true
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-[#0a0f1d] p-6 shadow-2xl backdrop-blur-md">
      {/* Component Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 font-bold text-sm">
              7.2
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Mục II • Giai Đoạn Đầu Của Network Storage
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-100">
            Tiến Hóa Lưu Trữ Mạng: Centralized ➔ NAS ➔ SAN
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Đối soát trực quan 3 thời kỳ lưu trữ, bóc tách 3 lớp kiến trúc SAN và ma trận phân biệt kinh điển NAS (File-level) vs SAN (Block-level).
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("evolution")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "evolution"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⏳ Tiến Hóa 3 Thời Kỳ
          </button>
          <button
            onClick={() => setActiveTab("san_layers")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "san_layers"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏗️ 3 Lớp Kiến Trúc SAN
          </button>
          <button
            onClick={() => setActiveTab("duel_matrix")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "duel_matrix"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚔️ Ma Trận NAS vs SAN
          </button>
        </div>
      </div>

      {/* TAB 1: EVOLUTION OF NETWORK STORAGE */}
      {activeTab === "evolution" && (
        <div className="mt-6 space-y-6">
          {/* Era Selector Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(eras).map((item) => {
              const isSelected = selectedEra === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedEra(item.id)}
                  className={`flex flex-col items-start p-4 rounded-xl border transition-all text-left ${
                    isSelected
                      ? "border-sky-500 bg-sky-950/40 ring-1 ring-sky-500/50 shadow-lg shadow-sky-500/10"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-slate-100">{item.name}</h4>
                  <span className="text-[11px] text-slate-400 mt-0.5">{item.era}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Era Card */}
          {(() => {
            const cur = eras[selectedEra];
            return (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cur.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{cur.name}</h4>
                      <p className="text-xs text-sky-400 font-semibold">{cur.architecture}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cur.badgeColor} self-start md:self-auto`}>
                    {cur.era}
                  </span>
                </div>

                {/* Core Mechanisms */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    ⚙️ Đặc Điểm Vận Hành &amp; Kiến Trúc:
                  </h5>
                  <div className="space-y-1.5">
                    {cur.mechanisms.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-sky-400 font-bold mt-0.5">•</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drawbacks or Challenges */}
                <div className="rounded-lg bg-red-950/20 p-3.5 border border-red-500/20">
                  <h5 className="text-xs font-bold text-red-300 mb-1.5 flex items-center gap-1.5">
                    <span>⚠️</span> Hạn Chế &amp; Thách Thức Kỹ Thuật:
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {cur.drawbacks.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exam Tip Callout */}
                <div className="rounded-lg bg-amber-500/10 p-3 border border-amber-500/30 flex items-start gap-2.5">
                  <span className="text-base text-amber-400">💡</span>
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      Từ Khóa Nhận Diện Đề Thi:
                    </span>
                    <p className="mt-0.5 text-xs text-amber-200/90 leading-relaxed">
                      {cur.examTip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 2: SAN 3-TIER ARCHITECTURE */}
      {activeTab === "san_layers" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex items-center gap-3">
            <span className="text-3xl">🏛️</span>
            <div>
              <h4 className="text-sm font-bold text-emerald-200">
                Kiến Trúc 3 Tầng Chuẩn Giáo Trình Của SAN (Storage Area Network)
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Giáo trình nhấn mạnh SAN được chia thành 3 lớp riêng biệt: Host Layer, Fabric Layer và Storage Layer.
              </p>
            </div>
          </div>

          {/* Interactive 3 Layer Stack */}
          <div className="space-y-3">
            {Object.values(sanLayers).map((l) => {
              const isSelected = activeSanLayer === l.id;
              return (
                <div
                  key={l.id}
                  onClick={() => setActiveSanLayer(l.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-950/30 ring-1 ring-emerald-500/40 shadow-lg"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{l.icon}</span>
                      <h5 className="text-sm font-bold text-slate-100">{l.title}</h5>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                      {isSelected ? "Đang Chọn Xem" : "Nhấp Để Bóc Tách"}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-300">{l.role}</p>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                      <div className="text-xs text-slate-300 space-y-1">
                        {l.details.map((d, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                      <div className="rounded bg-slate-950 p-2 text-[11px] font-mono text-emerald-300 border border-slate-800">
                        {l.techSpecs}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span><strong>Mẹo thi:</strong> Fabric Layer (Lớp mạng trung gian / SAN Switch) là trái tim kết nối giữa Host và Storage.</span>
            </span>
            <span className="text-[11px] text-slate-500">Mục II.3</span>
          </div>
        </div>
      )}

      {/* TAB 3: DUEL MATRIX (NAS VS SAN) */}
      {activeTab === "duel_matrix" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-4 flex items-center gap-3">
            <span className="text-3xl">⚔️</span>
            <div>
              <h4 className="text-sm font-bold text-sky-200">
                Võ Đài Đối Sát Kinh Điển: NAS (File-Level) vs SAN (Block-Level)
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Bảng đối chiếu 7 tiêu chí then chốt thường xuyên xuất hiện trong 100% các đề thi trắc nghiệm học phần Cloud Storage.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-slate-200">
                  <th className="p-3 font-bold w-1/4">Tiêu Chí Đánh Giá</th>
                  <th className="p-3 font-bold text-blue-400 w-3/8 bg-blue-950/20">
                    📁 NAS (Network Attached Storage)
                  </th>
                  <th className="p-3 font-bold text-emerald-400 w-3/8 bg-emerald-950/20">
                    ⚡ SAN (Storage Area Network)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-950/60">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.highlight ? "bg-sky-950/15 font-medium" : "hover:bg-slate-900/40"
                    }`}
                  >
                    <td className="p-3 text-slate-300 font-semibold flex items-center gap-1.5">
                      {row.highlight && <span className="text-amber-400 font-bold">★</span>}
                      <span>{row.criterion}</span>
                    </td>
                    <td className="p-3 text-slate-300 bg-blue-950/10">{row.nas}</td>
                    <td className="p-3 text-slate-300 bg-emerald-950/10">{row.san}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200 flex items-start gap-2.5">
            <span className="text-lg text-amber-400">🚨</span>
            <div>
              <span className="font-bold uppercase tracking-wide text-amber-300 block">
                Bẫy Thi Cực Kỳ Nguy Hiểm:
              </span>
              <span>
                Đề thi hỏi: <em>"Một ứng dụng cơ sở dữ liệu giao dịch tài chính đòi hỏi ghi I/O liên tục ở cấp độ khối (Block-level) với độ trễ cực thấp thì bắt buộc phải dùng công nghệ nào?"</em> ➔ <strong>Đáp án luôn là SAN</strong>, tuyệt đối không chọn NAS vì NAS chỉ truy cập ở cấp độ tệp tin (File-level) qua mạng LAN.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Summary */}
      <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-sky-400 font-bold">💡 Khẩu quyết cốt tử:</span>
          <span><strong>NAS</strong> = Mạng LAN + Cấp độ File; <strong>SAN</strong> = Cáp quang riêng + Cấp độ Block.</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Mục II.1, II.2 &amp; II.3 • Giáo trình chính thức</span>
        </div>
      </div>
    </div>
  );
}
