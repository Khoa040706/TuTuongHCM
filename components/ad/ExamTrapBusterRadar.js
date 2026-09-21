"use client";
import React, { useState } from "react";
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  HelpCircle, 
  RefreshCw, 
  Sparkles, 
  AlertTriangle,
  Flame,
  Lightbulb
} from "lucide-react";

const EXAM_TRAPS = [
  {
    id: 1,
    category: "Baseline",
    myth: "Baseline là bản đặc tả yêu cầu cuối cùng và hoàn chỉnh 100% của toàn bộ dự án phần mềm.",
    reality: "Baseline chỉ là mốc cơ sở (Snapshot) được các bên thỏa thuận tại một thời điểm để làm thước đo kiểm soát thay đổi (Change Control). Yêu cầu sẽ tiếp tục tiến hóa có kiểm soát qua các Change Requests.",
    examTip: "Từ khóa phòng thi: 'Baseline != final requirements'. Nếu đề bài ghi 'Baseline là bất biến không thể sửa đổi' -> Chọn SAI ngay lập tức."
  },
  {
    id: 2,
    category: "Discovery Phase",
    myth: "Giai đoạn Discovery phải đưa ra quyết định chọn cơ sở dữ liệu (SQL vs NoSQL) và công nghệ lập trình (HOW).",
    reality: "Discovery Phase chỉ tập trung khám phá và cấu trúc các yêu cầu của người dùng, trả lời câu hỏi 'WHAT' (Hệ thống phải làm gì) TRƯỚC KHI quyết định 'HOW' (Thiết kế công nghệ ra sao).",
    examTip: "Quy tắc vàng: 'WHAT before HOW'. Giai đoạn Discovery là thời kỳ của BA và người dùng, chưa phải thời điểm chốt chi tiết công nghệ cài đặt."
  },
  {
    id: 3,
    category: "Diagram vs Description",
    myth: "Use-Case Diagram là tài liệu mô tả chi tiết từng bước tương tác giữa người dùng và phần mềm.",
    reality: "Diagram chỉ đóng vai trò như 'Mục lục cuốn sách' (Table of Contents), chỉ ra WHAT (ca sử dụng nào tồn tại, ai tham gia). Use-Case Description mới là nơi mô tả 'Nội dung chương' (HOW) với các bước chi tiết.",
    examTip: "Nếu câu hỏi trắc nghiệm hỏi 'Vẽ biểu đồ Use-Case có biết được luồng xử lý lỗi không?' -> Đáp án là KHÔNG, chỉ có Description mới thể hiện được."
  },
  {
    id: 4,
    category: "Flow Types",
    myth: "Alternate Flow và Exception Flow là hai khái niệm hoàn toàn đồng nghĩa và có thể dùng thay thế nhau.",
    reality: "Alternate Flow là biến thể thành công hợp lệ (Happy path biến thể, ví dụ: Áp mã giảm giá, trả tiền mặt thay vì chuyển khoản). Exception Flow là nhánh lỗi cản trở ca sử dụng không thể hoàn tất (ví dụ: Hết hàng, thẻ bị khóa).",
    examTip: "Nhận diện trắc nghiệm: Nếu mục tiêu cuối cùng của use case vẫn đạt được -> Alternate Flow. Nếu mục tiêu bị hủy bỏ hoặc thất bại -> Exception Flow."
  },
  {
    id: 5,
    category: "Arrow Direction: Include vs Extend",
    myth: "Cả <<include>> và <<extend>> đều có mũi tên trỏ từ Base Use Case ra Use Case phụ trợ.",
    reality: "<<include>> trỏ từ Base -> Included (Base gọi Included). Nhưng <<extend>> trỏ NGƯỢC LẠI từ Extension -> Base (Extension chèn ngược vào Base tại Extension Point)!",
    examTip: "Bẫy trắc nghiệm số 1 về UML: 'Extension trỏ về Base'. Nhớ câu thần chú: Include thì Base chỉ ra, Extend thì nhánh ngoài chỉ vào!"
  },
  {
    id: 6,
    category: "Generalization",
    myth: "Mũi tên Generalization là mũi tên nét đứt có chữ <<generalize>> trỏ từ cha xuống con.",
    reality: "Generalization dùng ĐƯỜNG NÉT LIỀN (Solid line) với MŨI TÊN TAM GIÁC RỖNG (Hollow triangle) trỏ từ Con lên Cha (Child -> Parent), tương tự kế thừa trong Class Diagram.",
    examTip: "Không có stereotype <<generalize>>. Mũi tên tam giác rỗng luôn hướng từ lớp/ca con hướng lên lớp/ca cha."
  },
  {
    id: 7,
    category: "Authoring Flow",
    myth: "Trong luồng chính (Normal Flow), ta có thể viết 5 bước liên tục đều là 'Hệ thống tự động thực hiện...'.",
    reality: "Use-Case là cuộc đối thoại tương tác hai chiều, bắt buộc phải viết luân phiên: Actor hành động -> Hệ thống phản hồi -> Actor tiếp tục -> Hệ thống xác nhận.",
    examTip: "Cấu trúc chuẩn tắc: Actor -> System -> Actor -> System... Bất kỳ mô tả nào dồn hết một phía đều bị trừ điểm chất lượng nghiệp vụ."
  }
];

export default function ExamTrapBusterRadar() {
  const [activeTrapId, setActiveTrapId] = useState(1);
  const [bustedTraps, setBustedTraps] = useState([]);

  const currentTrap = EXAM_TRAPS.find((t) => t.id === activeTrapId) || EXAM_TRAPS[0];
  const isBusted = bustedTraps.includes(currentTrap.id);

  const toggleBust = (id) => {
    if (bustedTraps.includes(id)) {
      setBustedTraps(bustedTraps.filter((item) => item !== id));
    } else {
      setBustedTraps([...bustedTraps, id]);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-stone-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-800">
            <Flame className="h-3.5 w-3.5 text-rose-600" /> Mục 7.2: Exam Trap Buster Radar
          </div>
          <h3 className="mt-2 text-2xl font-bold text-stone-900">
            Radar Giải Mã 7 Cạm Bẫy Trắc Nghiệm Dễ Nhầm Khi Đi Thi
          </h3>
          <p className="text-sm text-stone-600">
            Tổng hợp các câu hỏi lừa và quan niệm sai lầm kinh điển từ giáo trình, kèm mẹo bắt bài nhanh phòng thi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-600">Tiến độ hóa giải:</span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-mono font-bold text-emerald-800 border border-emerald-300">
            {bustedTraps.length} / {EXAM_TRAPS.length} Bẫy
          </span>
        </div>
      </div>

      {/* Traps Navigation Selector */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {EXAM_TRAPS.map((trap) => {
          const isActive = activeTrapId === trap.id;
          const busted = bustedTraps.includes(trap.id);
          return (
            <button
              key={trap.id}
              onClick={() => setActiveTrapId(trap.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-stone-900 text-white border-stone-900 shadow-md"
                  : busted
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              {busted ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              )}
              <span>Bẫy #{trap.id}: {trap.category}</span>
            </button>
          );
        })}
      </div>

      {/* Main Trap Card */}
      <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
        {/* Category Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" /> Bẫy Phòng Thi Số #{currentTrap.id}: {currentTrap.category}
          </span>
          <button
            onClick={() => toggleBust(currentTrap.id)}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
              isBusted
                ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
            }`}
          >
            {isBusted ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" /> Đã nắm chắc bẫy này
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Bấm để đánh dấu đã hiểu
              </>
            )}
          </button>
        </div>

        {/* Myth vs Reality Grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Myth / The Trap */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-4">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
              <XCircle className="w-4 h-4 text-rose-600" /> Quan niệm sai lầm (Cạm bẫy đề thi)
            </div>
            <p className="text-sm font-semibold text-rose-950 leading-relaxed">
              &quot;{currentTrap.myth}&quot;
            </p>
          </div>

          {/* Reality / True Standard */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sự thật học thuật chuẩn xác
            </div>
            <p className="text-sm font-medium text-emerald-950 leading-relaxed">
              {currentTrap.reality}
            </p>
          </div>
        </div>

        {/* Exam Tip Callout */}
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950">
            <strong className="text-amber-900 font-bold">Mẹo phòng thi thực chiến (Exam Tip):</strong>
            <p className="mt-0.5 leading-relaxed font-medium">
              {currentTrap.examTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
