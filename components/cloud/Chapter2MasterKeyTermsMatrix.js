"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  BookOpen,
  Filter,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Tag,
  ShieldCheck,
  Server,
  Layers,
  Cpu,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Wind,
  Network,
  HardDrive,
  Activity,
  Laptop
} from "lucide-react";

const CHAPTER_2_TERMS = [
  {
    id: "c2-term-1",
    num: "01",
    term: "Data Center, Rack, PoD",
    termVi: "Phân cấp Vật lý: Trung tâm dữ liệu, Giá đỡ, Cụm giao tải",
    category: "Hạ tầng Vật lý",
    categoryKey: "physical",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Server,
    summary: "Cấu trúc phần cứng 3 tầng: Máy chủ nằm trong Rack, nhiều Rack ghép thành PoD, nhiều PoD tạo thành Data Center.",
    fullDefinition: "Data Center là cơ sở hạ tầng vật lý chuyên dụng. Rack là các tủ kim loại tiêu chuẩn chứa server đặt cạnh nhau thành hàng. PoD (Point of Delivery) là khối module khép kín gồm nhiều Rack kết hợp cùng 5 hệ thống hỗ trợ: PDS (phân phối điện), Modular UPS (bộ lưu điện), InfraSuite Manager (DCIM), RowCool (làm mát theo hàng) và Cold/Hot Aisle Containment.",
    roleInCloud: "Cung cấp nền tảng vật lý module hóa giúp trung tâm dữ liệu có thể mở rộng quy mô (Scale-out) dễ dàng theo từng cụm PoD.",
    examTip: "Bắt buộc nhớ đúng thứ tự phân cấp từ nhỏ đến lớn: Rack ➔ PoD ➔ Data Center. Nhớ 5 thành phần hỗ trợ cấu thành một PoD.",
    relatedTerms: ["Rack", "PoD", "PDS", "Modular UPS", "RowCool"]
  },
  {
    id: "c2-term-2",
    num: "02",
    term: "Raised Floor, Hot/Cold Aisle, Chimney, Lights-out DC",
    termVi: "Chuỗi Giải pháp Nhiệt & Quản trị Không đèn",
    category: "Hạ tầng & Làm mát",
    categoryKey: "cooling",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    icon: Wind,
    summary: "Hệ thống làm mát ngăn nhiệt tối ưu và mô hình vận hành tự động tắt đèn hoàn toàn.",
    fullDefinition: "Sàn nâng (Raised Floor cao 1-4 feet) dẫn cáp và thổi khí lạnh áp suất cao từ dưới lên. Lối đi lạnh (Cold Aisle) gom mặt trước các rack đón gió mát (18-21°C). Lối đi nóng (Hot Aisle) gom mặt sau thoát khí nóng lên ống khói Chimney. Lights-Out Data Center là phòng máy tắt đèn, điều khiển từ xa 100% giúp: (1) Giảm chi phí nhân sự, (2) Giảm lỗi cấu hình do con người, (3) Giảm nguy cơ tấn công vật lý.",
    roleInCloud: "Tiết kiệm 30-40% chi phí điện năng làm mát (chỉ số PUE tiệm cận 1.1) và tăng cường an ninh vận hành.",
    examTip: "Đề thi hay hỏi: Chiều cao sàn nâng (1-4 feet), phân biệt mặt trước (Cold) vs mặt sau (Hot), và 3 lợi ích cốt lõi của Lights-Out Data Center.",
    relatedTerms: ["PUE", "Cold Aisle", "Hot Aisle", "Chimney", "Lights-Out"]
  },
  {
    id: "c2-term-3",
    num: "03",
    term: "ToR Switch, North-South / East-West, Leaf-Spine, Super-Spine",
    termVi: "Hạ tầng Mạng Data Center & Kiến trúc Tô-pô",
    category: "Mạng & Lưu trữ",
    categoryKey: "network",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: Network,
    summary: "Kiến trúc kết nối mạng phẳng chịu lỗi cao và phân luồng lưu lượng nội bộ vs ngoài Internet.",
    fullDefinition: "ToR (Top of Rack) là switch đặt trên đỉnh mỗi tủ rack. Lưu lượng North-South là traffic vào/ra giữa Internet và máy chủ; East-West là traffic trao đổi ngang nội bộ giữa các server (chiếm >70% băng thông). Mạng Fat Tree truyền thống dễ bị nghẽn cổ chai ở tầng Core. Mạng Leaf-Spine giải quyết bằng mô hình 2 tầng: mọi Leaf nối tới mọi Spine, bảo đảm khả năng chịu lỗi (Fault Tolerance) cao. Super-Spine mở rộng Leaf-Spine để kết nối liên PoD.",
    roleInCloud: "Loại bỏ điểm nghẽn cổ chai, giảm độ trễ trao đổi dữ liệu phân tán giữa các máy chủ trong đám mây.",
    examTip: "Điểm chốt: East-West chiếm đa số lưu lượng DC. Leaf-Spine không có Single Point of Failure (hỏng 1 Spine traffic tự chuyển qua Spine khác). Link Aggregation ghép nhiều cổng (10x 10G = 100G).",
    relatedTerms: ["ToR Switch", "Leaf-Spine", "Link Aggregation", "Super-Spine", "East-West"]
  },
  {
    id: "c2-term-4",
    num: "04",
    term: "Storage Virtualization",
    termVi: "Ảo hóa Lưu trữ Tập trung",
    category: "Mạng & Lưu trữ",
    categoryKey: "network",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: HardDrive,
    summary: "Tách rời đĩa vật lý khỏi rack, gom thành Storage Pool chung để cấp phát quota động.",
    fullDefinition: "Kỹ thuật trừu tượng hóa các thiết bị lưu trữ vật lý rải rác trong phòng máy thành một kho tài nguyên thống nhất (Storage Pool - SAN/NAS). Máy ảo chỉ nhìn thấy ổ đĩa logic mà không cần biết ổ đĩa đó nằm trên máy chủ hay tủ đĩa vật lý nào.",
    roleInCloud: "Giải quyết 2 nhược điểm lớn của Local Storage: (1) Khó giới hạn quota lưu trữ cho nhiều VM, (2) Ổ cứng rải rác khó bảo trì khi bị hỏng. Là tiền đề cho Live VM Migration.",
    examTip: "Câu hỏi bẫy: Local storage lưu trực tiếp trên máy chủ vật lý; Storage Virtualization tách rời vật lý và gom thành Pool quản trị tập trung.",
    relatedTerms: ["SAN", "NAS", "Storage Pool", "Thin Provisioning", "IOPS"]
  },
  {
    id: "c2-term-5",
    num: "05",
    term: "Software Emulation, Para-virtualization, Full Virtualization",
    termVi: "3 Loại Công nghệ Ảo hóa",
    category: "Ảo hóa & Hypervisor",
    categoryKey: "virt",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    icon: Layers,
    summary: "3 mức độ ảo hóa: Giả lập từng lệnh, Ảo hóa bán phần (sửa OS), Ảo hóa toàn phần (chuẩn Cloud).",
    fullDefinition: "(1) Software Emulation: Emulator đọc tuần tự từng instruction để mô phỏng OS2 trên OS1 (chậm nhất, ví dụ BlueStacks, WINE). (2) Para-virtualization: Cho nhiều OS chạy chung, lệnh CPU thực thi trực tiếp tốc độ cao nhưng BẮT BUỘC PHẢI SỬA MÃ NGUỒN OS (Xen). (3) Full Virtualization: Không cần sửa OS, tránh chi phí mô phỏng, hỗ trợ phần cứng ảo hoàn chỉnh (Chuẩn Data Center hiện nay).",
    roleInCloud: "Full Virtualization là công nghệ nền tảng cốt lõi vận hành toàn bộ các dịch vụ Cloud Compute (EC2, Azure VM, Compute Engine).",
    examTip: "Ghi nhớ tiêu chí: Software Emulation = đọc từng lệnh; Para-virtualization = PHẢI sửa mã nguồn OS; Full Virtualization = KHÔNG sửa OS và là chuẩn cho Cloud DC.",
    relatedTerms: ["Xen", "Intel VT-x", "Hardware-assisted", "Trap-and-Emulate"]
  },
  {
    id: "c2-term-6",
    num: "06",
    term: "Hypervisor, VM, Guest OS, Host OS",
    termVi: "Kiến trúc Thực thể Ảo hóa",
    category: "Ảo hóa & Hypervisor",
    categoryKey: "virt",
    badgeColor: "bg-violet-100 text-violet-800 border-violet-200",
    icon: Cpu,
    summary: "Bộ giám sát máy ảo phân chia tài nguyên và các hệ điều hành khách/chủ.",
    fullDefinition: "Hypervisor (Virtual Machine Monitor - VMM) là phần mềm trung gian tạo lập, quản lý và điều phối tài nguyên cho các máy ảo (VM). Guest OS là hệ điều hành được cài đặt và vận hành bên trong một máy ảo độc lập. Host OS là hệ điều hành nền tảng cài trực tiếp trên máy vật lý (chỉ xuất hiện trong mô hình Type 2 Hosted Hypervisor).",
    roleInCloud: "Tạo ranh giới cô lập (Isolation) bảo mật giữa các khách thuê đa người dùng (Multi-tenancy) trên cùng một máy chủ vật lý.",
    examTip: "Phân biệt rõ: Type 1 KHÔNG CÓ Host OS (chạy trực tiếp trên Bare-Metal). Type 2 BẮT BUỘC CÓ Host OS bên dưới.",
    relatedTerms: ["VMM", "Multi-tenancy", "Bare-Metal", "Sandboxing"]
  },
  {
    id: "c2-term-7",
    num: "07",
    term: "User Mode / Kernel Mode / Hypervisor Mode",
    termVi: "3 Mức Đặc Quyền Phần Cứng",
    category: "Ảo hóa & Hypervisor",
    categoryKey: "virt",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    icon: ShieldCheck,
    summary: "Hệ thống bảo vệ phân cấp: Hypervisor mode (tin cậy nhất) > Kernel mode (OS) > User mode (App).",
    fullDefinition: "Khi có Hypervisor, kiến trúc phần cứng bổ sung mức đặc quyền mới. Hypervisor Mode (Root Ring 0 / Root mode): Nắm quyền cao nhất, chỉ nó mới được cấp phát RAM và quản trị máy ảo. Kernel Mode (Non-root Ring 0): Dành cho Guest OS, bị giới hạn tập lệnh nhạy cảm. User Mode (Ring 3): Dành cho ứng dụng của người dùng.",
    roleInCloud: "Ngăn chặn tuyệt đối một máy ảo ác ý hoặc bị nhiễm mã độc có thể tấn công xâm nhập sang máy ảo khác hoặc chiếm quyền máy chủ vật lý.",
    examTip: "Nếu Guest OS cố tình thực thi lệnh nhạy cảm của phần cứng, CPU sẽ kích hoạt 'Trap' đẩy quyền xử lý về cho Hypervisor kiểm duyệt và giả lập (Trap-and-Emulate).",
    relatedTerms: ["Ring 0", "Ring 3", "Root Mode", "Trap and Emulate", "Privilege Deprivileging"]
  },
  {
    id: "c2-term-8",
    num: "08",
    term: "Virtual I/O",
    termVi: "Ảo hóa Nhập/Xuất & Đường ống Thiết bị Ảo",
    category: "Vận hành VM",
    categoryKey: "vm",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: Activity,
    summary: "Đường ống chuyển tiếp: Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ DC Storage.",
    fullDefinition: "Cơ chế mà trong đó đối với Guest OS, thiết bị ảo (Virtual NIC, Virtual Disk) không thể phân biệt được với thiết bị vật lý thật. Mọi thao tác ghi/đọc từ Guest OS được Hypervisor chuyển tiếp qua trình điều khiển thiết bị (Device Controller) và lưu trữ phân tán vào DC Storage.",
    roleInCloud: "Tách rời phụ thuộc phần cứng: Cho phép một máy ảo chạy trơn tru dù phần cứng máy chủ bên dưới thay đổi từ Intel sang AMD hay từ HDD sang SSD NVMe.",
    examTip: "Khẳng định chuẩn đề thi: 'Đối với hệ điều hành khách (Guest OS), thiết bị ảo không thể phân biệt được với thiết bị phần cứng thật'. Đĩa ảo lưu vào DC Storage.",
    relatedTerms: ["Device Controller", "Virtual NIC", "Virtual Disk", "Device Emulation"]
  },
  {
    id: "c2-term-9",
    num: "09",
    term: "VM Live Migration (Pre-copy ➔ Stop-and-copy ➔ Post-copy)",
    termVi: "Di chuyển Máy ảo Trực tiếp 3 Giai đoạn",
    category: "Vận hành VM",
    categoryKey: "vm",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    icon: RefreshCw,
    summary: "Di chuyển máy ảo sống giữa 2 máy chủ với thời gian gián đoạn (downtime) dưới 0.5 giây.",
    fullDefinition: "VM là một Digital Object (đối tượng kỹ thuật số 100% phần mềm) nên có thể clone, đóng gói và di chuyển. 3 giai đoạn Live Migration: (1) Pre-copy: Sao chép các trang bộ nhớ RAM trong khi VM vẫn chạy và phục vụ người dùng; (2) Stop-and-copy: Tạm ngưng VM chớp nhoáng (vài trăm ms) để truyền nốt các trang nhớ bẩn (dirty pages) cuối cùng và thanh ghi CPU; (3) Post-copy: Máy đích khôi phục VM chạy tiếp, cập nhật bảng ARP mạng.",
    roleInCloud: "Bảo trì máy chủ vật lý, cân bằng tải khi máy chủ quá nóng/quá tải mà người dùng không hề hay biết hệ thống đang được chuyển giao.",
    examTip: "Phải nhớ đúng 3 giai đoạn: Pre-copy ➔ Stop-and-copy ➔ Post-copy. Đĩa ảo nằm cố định trên SAN/NAS nên chỉ cần truyền RAM và CPU state qua mạng.",
    relatedTerms: ["Digital Object", "Pre-copy", "Stop-and-copy", "Post-copy", "Dirty Pages"]
  },
  {
    id: "c2-term-10",
    num: "10",
    term: "Hosted Hypervisor vs Multiboot",
    termVi: "Ảo hóa Ứng dụng vs Khởi động kép",
    category: "Ảo hóa & Hypervisor",
    categoryKey: "virt",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    icon: Laptop,
    summary: "Hosted Hypervisor chạy nhiều OS đồng thời (chuyển trong 0.1s); Multiboot chỉ chạy 1 OS/lần và phải khởi động lại máy.",
    fullDefinition: "Hosted Hypervisor (Type 2) chạy như một ứng dụng trên Host OS (VirtualBox, VMware Workstation). Tính năng: Gán IP riêng cho Guest OS (Bridged/NAT/Host-only), ánh xạ đĩa ảo thành 1 tệp tin trên Host, chia sẻ thư mục & clipboard. So với Multiboot: Hosted chạy đồng thời nhiều OS, chuyển nhanh tức thì; Multiboot chỉ chạy 1 OS tại một thời điểm và bắt buộc phải reboot lại máy.",
    roleInCloud: "Cung cấp môi trường mô phỏng máy khách linh hoạt cho kỹ sư phát triển, kiểm thử ứng dụng đám mây trên máy cá nhân trước khi đẩy lên Data Center.",
    examTip: "Đặc điểm sống còn trong bài thi: Multiboot BẮT BUỘC khởi động lại máy; Hosted Hypervisor chạy đồng thời và gán IP riêng độc lập.",
    relatedTerms: ["Bridged", "NAT", "Host-Only", "Shared Folders", "VirtualBox"]
  }
];

const CATEGORIES = [
  { key: "all", label: "Tất cả 10 Từ khóa" },
  { key: "physical", label: "Hạ tầng Vật lý" },
  { key: "cooling", label: "Hạ tầng & Làm mát" },
  { key: "network", label: "Mạng & Lưu trữ" },
  { key: "virt", label: "Ảo hóa & Hypervisor" },
  { key: "vm", label: "Vận hành VM" }
];

export default function Chapter2MasterKeyTermsMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [studyMode, setStudyMode] = useState(false);
  const [revealedTerms, setRevealedTerms] = useState({});
  const [expandedTerm, setExpandedTerm] = useState(null);

  const toggleReveal = (id) => {
    setRevealedTerms((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleExpand = (id) => {
    setExpandedTerm(expandedTerm === id ? null : id);
  };

  const filteredTerms = useMemo(() => {
    return CHAPTER_2_TERMS.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.categoryKey === selectedCategory;
      const matchSearch =
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.termVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fullDefinition.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="my-10 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-8 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-stone-900 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Ma Trận Tổng Kết Toàn Chương 2
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            10 Từ Khóa Cốt Lõi: Hạ Tầng & Công Nghệ Đám Mây
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Bộ tổng kết toàn diện bao phủ 100% nội dung bài giảng Chương 2 từ cấu trúc phần cứng Data Center đến các công nghệ ảo hóa và di chuyển máy ảo.
          </p>
        </div>

        {/* Study Mode Toggle */}
        <button
          onClick={() => {
            setStudyMode(!studyMode);
            setRevealedTerms({});
          }}
          className={`px-4 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer self-start sm:self-auto ${
            studyMode
              ? "bg-amber-500 text-stone-950 shadow-md ring-2 ring-amber-300"
              : "bg-stone-900 text-white hover:bg-stone-800"
          }`}
        >
          {studyMode ? (
            <>
              <Eye className="w-4 h-4" />
              Chế Độ Ôn Thi: Đang Bật
            </>
          ) : (
            <>
              <EyeOff className="w-4 h-4" />
              Bật Chế Độ Ôn Thi (Ẩn Định Nghĩa)
            </>
          )}
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="my-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm theo từ khóa, tiếng Anh, tiếng Việt, định nghĩa..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          {/* Reset Search */}
          {(searchTerm || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-3 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Xóa lọc
            </button>
          )}
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Matrix List */}
      <div className="space-y-3">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-stone-200">
            <p className="text-sm font-bold text-stone-500">
              Không tìm thấy từ khóa phù hợp với bộ lọc hiện tại.
            </p>
          </div>
        ) : (
          filteredTerms.map((item) => {
            const IconComponent = item.icon;
            const isRevealed = revealedTerms[item.id];
            const isExpanded = expandedTerm === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 rounded-xl bg-stone-100 text-stone-700 mt-0.5 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-black text-amber-600">
                          #{item.num}
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-stone-900">
                          {item.term}
                        </h4>
                        <span className="text-xs font-bold text-stone-500">
                          • {item.termVi}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Summary or Study Mode Blocker */}
                      {studyMode && !isRevealed ? (
                        <div className="my-2 p-3 rounded-xl bg-amber-50/60 border border-dashed border-amber-300 text-xs text-amber-900 flex items-center justify-between">
                          <span>
                            🔒 <em>Nội dung định nghĩa đã được ẩn. Hãy tự nhớ lại trước khi bấm hiển thị!</em>
                          </span>
                          <button
                            onClick={() => toggleReveal(item.id)}
                            className="px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 font-black text-[11px] hover:bg-amber-400 transition-all cursor-pointer ml-2 shrink-0"
                          >
                            Hiện Định Nghĩa
                          </button>
                        </div>
                      ) : (
                        <p className="text-xs text-stone-600 leading-relaxed font-medium mt-1">
                          {item.summary}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expand Details Button */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="self-end sm:self-start px-2.5 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shrink-0"
                  >
                    <span>{isExpanded ? "Thu gọn" : "Chi tiết"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Expanded Detail Panel */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                      <div className="font-black text-stone-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                        Định nghĩa học thuật chuẩn
                      </div>
                      <p className="text-stone-700 leading-relaxed font-normal">
                        {item.fullDefinition}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 space-y-1">
                        <div className="font-extrabold text-sky-900 flex items-center gap-1.5 text-[11px]">
                          <Activity className="w-3.5 h-3.5 text-sky-600" />
                          Vai trò trong Đám mây
                        </div>
                        <p className="text-sky-950 font-normal leading-relaxed">
                          {item.roleInCloud}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                        <div className="font-extrabold text-amber-900 flex items-center gap-1.5 text-[11px]">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                          Trọng tâm thi cử & Mẹo nhớ nhanh
                        </div>
                        <p className="text-amber-950 font-normal leading-relaxed">
                          {item.examTip}
                        </p>
                      </div>
                    </div>

                    {/* Related Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-bold text-stone-400 flex items-center gap-1 mr-1">
                        <Tag className="w-3 h-3" /> Thuật ngữ liên quan:
                      </span>
                      {item.relatedTerms.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
