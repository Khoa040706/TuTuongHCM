"use client";
import React, { useState, useMemo } from "react";
import { 
  BookOpen, 
  Search, 
  Filter, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  Layers, 
  Compass, 
  Check, 
  AlertTriangle,
  RotateCcw
} from "lucide-react";

// 15 Master Terms for Chapter 3
const TERMS = [
  {
    id: "term-1",
    term: "Business Event",
    vietnamese: "Sự kiện nghiệp vụ",
    category: "Events & Triggers",
    definition: "Một sự cố, hành động hoặc thời khắc xảy ra trong thế giới thực đòi hỏi hệ thống thông tin phải ghi nhận và phản hồi.",
    formula: "Xảy ra ở thế giới thực ➔ Kích hoạt phản hồi phần mềm",
    example: "Sinh viên nộp phiếu đăng ký học phần, Hết hạn nộp học phí, Số lượng chỗ ngồi bằng 0.",
    pitfall: "Đừng nhầm sự kiện nghiệp vụ với thao tác UI (bấm nút Submit) hay xử lý nội bộ CSDL."
  },
  {
    id: "term-2",
    term: "External Event",
    vietnamese: "Sự kiện ngoại sinh",
    category: "Events & Triggers",
    definition: "Sự kiện do một Actor (người dùng, hệ thống bên ngoài) chủ động khởi phát từ ngoài biên giới hệ thống.",
    formula: "Do tác nhân bên ngoài chủ động hành động",
    example: "Sinh viên yêu cầu tra cứu lịch thi; Giảng viên chấm điểm; Ngân hàng gửi callback thanh toán.",
    pitfall: "Actor là chủ thể khởi tạo, hệ thống là bên bị động tiếp nhận và xử lý."
  },
  {
    id: "term-3",
    term: "Temporal Event",
    vietnamese: "Sự kiện thời gian",
    category: "Events & Triggers",
    definition: "Sự kiện tự động kích hoạt khi chạm đến một mốc thời gian định kỳ hoặc thời hạn quy định (Deadlines, Timers).",
    formula: "Kích hoạt theo đồng hồ / lịch trình (Không có Actor bên ngoài bấm nút)",
    example: "Đúng 24h00 đóng cổng đăng ký; 01h00 sáng chạy batch sao lưu dữ liệu; 7 ngày sau gửi nhắc nợ.",
    pitfall: "Source là 'Internal System Clock' / 'Time', Trigger là 'Đến thời điểm T', không có Human Actor."
  },
  {
    id: "term-4",
    term: "State Event",
    vietnamese: "Sự kiện trạng thái",
    category: "Events & Triggers",
    definition: "Sự kiện kích hoạt tự động bên trong hệ thống khi một điều kiện trạng thái hoặc ngưỡng dữ liệu nội bộ bị vượt qua.",
    formula: "Dữ liệu thỏa mãn điều kiện logic nội bộ (Threshold reached)",
    example: "Lớp học phần đã đủ 50/50 sinh viên ➔ Chuyển trạng thái 'Khóa lớp'; Số dư tài khoản < 0 ➔ Khóa giao dịch.",
    pitfall: "Thường phát sinh ngầm sau một chuỗi giao dịch trước đó, không do người dùng trực tiếp yêu cầu lúc đó."
  },
  {
    id: "term-5",
    term: "Trigger",
    vietnamese: "Tín hiệu kích hoạt",
    category: "Events & Triggers",
    definition: "Dạng thức hoặc tín hiệu cụ thể mà sự kiện gửi tới ranh giới hệ thống để đánh thức Use Case.",
    formula: "Cách thức biến cố 'chạm' vào hệ thống",
    example: "Tín hiệu HTTP Request gửi Form đăng ký; Bộ đếm thời gian chạm mốc 00:00; Cờ trạng thái 'Enrolled_Count == Capacity'.",
    pitfall: "Cột Trigger trong Event Table phải mô tả rõ tín hiệu đầu vào chứ không chỉ nói chung chung tên sự kiện."
  },
  {
    id: "term-6",
    term: "Actor",
    vietnamese: "Tác nhân",
    category: "Core Foundations",
    definition: "Bất kỳ thực thể bên ngoài nào tương tác trực tiếp với hệ thống (Người, Phòng ban, Thiết bị phần cứng, Hệ thống ngoài).",
    formula: "Role bên ngoài hệ thống (External Entity)",
    example: "Sinh viên, Cán bộ phòng Đào tạo, Cổng thanh toán VNPay, Máy quẹt thẻ từ RFID.",
    pitfall: "Actor đại diện cho VAI TRÒ (Role), không phải chức danh hay cá nhân cụ thể của một con người."
  },
  {
    id: "term-7",
    term: "System Use Case",
    vietnamese: "Ca sử dụng hệ thống",
    category: "Core Foundations",
    definition: "Chuỗi các hành động phản hồi tương tác giữa Actor và hệ thống nhằm mang lại một kết quả có giá trị đo lường được cho Actor.",
    formula: "1 Business Event ➔ 1 System Use Case (Quy tắc 1:1)",
    example: "Đăng ký học phần (Register for Courses), Tra cứu điểm thi, Tạo báo cáo doanh thu.",
    pitfall: "Không chia nhỏ Use Case thành từng màn hình lẻ như 'Nhập mật khẩu' hay 'Bấm nút Lưu'."
  },
  {
    id: "term-8",
    term: "System Boundary",
    vietnamese: "Ranh giới hệ thống",
    category: "UML Relationships & Boundary",
    definition: "Đường biên chữ nhật phân định rõ phạm vi trách nhiệm của phần mềm đang xây dựng với thế giới bên ngoài.",
    formula: "Bên trong hình chữ nhật: Use Cases; Bên ngoài: Actors",
    example: "Hộp chữ nhật ghi nhãn 'Course Registration System' chứa toàn bộ 15 use cases của hệ thống.",
    pitfall: "Tuyệt đối không vẽ Actor vào bên trong hộp ranh giới hệ thống."
  },
  {
    id: "term-9",
    term: "Precondition",
    vietnamese: "Tiền điều kiện",
    category: "Use Case Structure",
    definition: "Trạng thái bắt buộc hệ thống phải thỏa mãn TRƯỚC KHI Use Case được phép bắt đầu thực thi.",
    formula: "Điều kiện cần để Use Case được kích hoạt",
    example: "Sinh viên đã đăng nhập thành công và đã hoàn tất nghĩa vụ học phí học kỳ trước.",
    pitfall: "Không ghi các thao tác thực thi trong use case vào Precondition (VD: 'Sinh viên chọn môn' là bước thực thi, không phải precondition)."
  },
  {
    id: "term-10",
    term: "Postcondition",
    vietnamese: "Hậu điều kiện / Đảm bảo thành công",
    category: "Use Case Structure",
    definition: "Trạng thái cam kết của dữ liệu và hệ thống SAU KHI Use Case kết thúc thành công.",
    formula: "Bảo chứng kết quả hệ thống sau luồng thành công",
    example: "Thời khóa biểu sinh viên được cập nhật; Số chỗ lớp giảm đi 1; Hóa đơn học phí tạm tính được tạo.",
    pitfall: "Hậu điều kiện phải là sự thay đổi bền vững của dữ liệu hệ thống (Persistent State Changes)."
  },
  {
    id: "term-11",
    term: "Main Success Scenario",
    vietnamese: "Luồng sự kiện chính / Luồng hạnh phúc (Happy Path)",
    category: "Use Case Structure",
    definition: "Kịch bản tương tác lý tưởng từng bước giữa Actor và Hệ thống khi mọi thứ diễn ra trơn tru không có lỗi phát sinh.",
    formula: "Tương tác nhịp nhàng 2 bên: Actor làm X ➔ Hệ thống đáp ứng Y",
    example: "1. Sinh viên chọn kỳ học -> 2. Hệ thống hiển thị DS môn -> 3. Sinh viên chọn môn -> 4. Hệ thống lưu thành công.",
    pitfall: "Viết dưới góc nhìn hành vi người dùng và hệ thống, không viết code SQL hay UI layout."
  },
  {
    id: "term-12",
    term: "Alternate Flow",
    vietnamese: "Luồng nhánh / Luồng ngoại lệ",
    category: "Use Case Structure",
    definition: "Các nhánh rẽ xử lý khi xảy ra tình huống bất thường, dữ liệu không hợp lệ hoặc người dùng hủy thao tác.",
    formula: "Xử lý ngoại lệ, sự cố và các đường rẽ nhánh",
    example: "3a. Môn học đã hết chỗ ➔ Hệ thống thông báo và đề xuất lớp phụ; 3b. Môn học trùng lịch ➔ Cảnh báo xung đột.",
    pitfall: "Phải đánh số đối ứng với bước trong Main Flow (Ví dụ bước 3 lỗi thì nhánh là 3a, 3b)."
  },
  {
    id: "term-13",
    term: "<<include>>",
    vietnamese: "Quan hệ bao hàm (Bắt buộc)",
    category: "UML Relationships & Boundary",
    definition: "Mối quan hệ trích xuất đoạn hành vi chung mà Use Case cơ sở LUÔN LUÔN BẮT BUỘC phải thực thi trong mọi lần chạy.",
    formula: "Base Use Case ---<<include>>---> Included Use Case (Mũi tên chỉ về phía hành vi con)",
    example: "Đăng ký học phần ---<<include>>---> Xác thực người dùng (Luôn phải xác thực).",
    pitfall: "Nếu hành vi chỉ chạy thỉnh thoảng hoặc có điều kiện thì KHÔNG ĐƯỢC dùng <<include>>."
  },
  {
    id: "term-14",
    term: "<<extend>>",
    vietnamese: "Quan hệ mở rộng (Có điều kiện)",
    category: "UML Relationships & Boundary",
    definition: "Mối quan hệ bổ sung một hành vi tùy chọn/đặc biệt vào Use Case cơ sở CHỈ KHI thỏa mãn một điểm mở rộng (Extension Point) hoặc điều kiện cụ thể.",
    formula: "Extension Use Case ---<<extend>>---> Base Use Case (Mũi tên chỉ NGƯỢC về Use Case cơ sở)",
    example: "Đăng ký vào danh sách chờ ---<<extend>>---> Đăng ký học phần (Chỉ chạy khi Lớp đã đầy).",
    pitfall: "Mũi tên chỉ từ Extension Use Case VỀ Base Use Case, ngược lại hoàn toàn so với <<include>>!"
  },
  {
    id: "term-15",
    term: "Generalization",
    vietnamese: "Quan hệ chuyên biệt hóa / Kế thừa",
    category: "UML Relationships & Boundary",
    definition: "Mối quan hệ giữa một Use Case/Actor cha tổng quát và các Use Case/Actor con cụ thể kế thừa hành vi và bổ sung đặc tính riêng.",
    formula: "Con ---▷ Cha (Mũi tên tam giác rỗng hướng về cha)",
    example: "Sinh viên chính quy / Sinh viên tại chức ───▷ Sinh viên (Actor); Thanh toán qua Thẻ ATM / Momo ───▷ Thanh toán học phí (Use Case).",
    pitfall: "Mũi tên là tam giác rỗng liền nét nét liền (Solid line with hollow triangle), không phải nét đứt có nhãn stereotype."
  }
];

const CATEGORIES = ["All", "Core Foundations", "Events & Triggers", "Use Case Structure", "UML Relationships & Boundary"];

// 3 Diagnostic Questions for UML Relationships
const DIAGNOSTIC_QUESTIONS = [
  {
    id: "diag-1",
    question: "Tình huống: Khi khách hàng thực hiện use case 'Đặt vé xem phim', bước 'Thanh toán tiền vé' có phải lúc nào cũng xảy ra để hoàn tất vé không?",
    keyQuestion: "Hành vi này có LUÔN LUÔN BẮT BUỘC PHẢI CHẠY trong mọi lần thực thi use case gốc không?",
    correctAnswer: "include",
    explanation: "Đúng! Vì không thể đặt vé thành công mà không thanh toán, đây là hành vi thiết yếu luôn chạy. Quan hệ chuẩn xác là <<include>> (Base ---> Included).",
    options: [
      { id: "include", label: "Có, luôn bắt buộc chạy ➔ Dùng <<include>>", correct: true },
      { id: "extend", label: "Chỉ thỉnh thoảng mới chạy ➔ Dùng <<extend>>", correct: false },
      { id: "generalization", label: "Là một loại vé đặc biệt ➔ Dùng Generalization", correct: false }
    ]
  },
  {
    id: "diag-2",
    question: "Tình huống: Trong use case 'Đặt tour du lịch', khách hàng có thể chọn thêm dịch vụ 'Mua bảo hiểm du lịch quốc tế' nếu chuyến đi là bay nước ngoài.",
    keyQuestion: "Hành vi này là bắt buộc 100% hay chỉ kích hoạt khi CÓ ĐIỀU KIỆN ĐẶC BIỆT?",
    correctAnswer: "extend",
    explanation: "Chính xác! 'Mua bảo hiểm du lịch quốc tế' là hành vi tùy chọn, chỉ chạy khi có điều kiện (đi nước ngoài hoặc khách tự nguyện). Chuẩn xác là <<extend>> (Extension ---> Base).",
    options: [
      { id: "include", label: "Luôn luôn bao hàm ➔ Dùng <<include>>", correct: false },
      { id: "extend", label: "Chỉ kích hoạt khi thỏa mãn điều kiện ➔ Dùng <<extend>>", correct: true },
      { id: "generalization", label: "Là biến thể kế thừa ➔ Dùng Generalization", correct: false }
    ]
  },
  {
    id: "diag-3",
    question: "Tình huống: Hệ thống cho phép 'Thanh toán trực tuyến', trong đó hỗ trợ 2 hình thức độc lập: 'Thanh toán qua Thẻ tín dụng quốc tế' và 'Thanh toán qua Ví điện tử MoMo'.",
    keyQuestion: "Đây là mối quan hệ mở rộng theo điều kiện hay là CÁC BIẾN THỂ CỤ THỂ CỦA MỘT KHÁI NIỆM TỔNG QUÁT?",
    correctAnswer: "generalization",
    explanation: "Rất chuẩn! Thẻ tín dụng và Ví MoMo là 2 hình thức chuyên biệt (Is-A type of) của khái niệm tổng quát 'Thanh toán trực tuyến'. Mối quan hệ chuẩn là Kế thừa / Tổng quát hóa (Generalization ───▷).",
    options: [
      { id: "include", label: "Quan hệ bao hàm bắt buộc ➔ Dùng <<include>>", correct: false },
      { id: "extend", label: "Quan hệ nhánh rẽ điều kiện ➔ Dùng <<extend>>", correct: false },
      { id: "generalization", label: "Là loại chuyên biệt hóa của hành vi cha ➔ Dùng Generalization (Kế thừa)", correct: true }
    ]
  }
];

export default function Chapter3TerminologyMasterMatrix() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTermId, setExpandedTermId] = useState("term-1");
  const [activeTab, setActiveTab] = useState("matrix"); // 'matrix' | 'diagnostic'

  // Diagnostic states
  const [answers, setAnswers] = useState({});
  const [diagSubmitted, setDiagSubmitted] = useState(false);

  const filteredTerms = useMemo(() => {
    return TERMS.filter(t => {
      const matchCat = selectedCategory === "All" || t.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || 
        t.term.toLowerCase().includes(q) || 
        t.vietnamese.toLowerCase().includes(q) || 
        t.definition.toLowerCase().includes(q) ||
        t.example.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectAnswer = (qId, optionId) => {
    setAnswers(prev => ({ ...prev, [qId]: optionId }));
  };

  const handleResetDiagnostic = () => {
    setAnswers({});
    setDiagSubmitted(false);
  };

  const diagScore = useMemo(() => {
    let correct = 0;
    DIAGNOSTIC_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return correct;
  }, [answers]);

  return (
    <div className="my-8 rounded-2xl border border-amber-200/70 bg-gradient-to-br from-[#faf8f4] via-white to-amber-50/40 p-6 md:p-8 shadow-xl shadow-amber-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300/60 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Mục 7.4 & 7.5 — Ôn tập trọng tâm
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Chapter 3 Terminology Matrix & UML Diagnostic Tool
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Bảng tra cứu 15 thuật ngữ cốt lõi và Công cụ 3 câu hỏi vàng phân định rạch ròi bản chất giữa <code className="text-purple-700 bg-purple-50 px-1 py-0.5 rounded">&lt;&lt;include&gt;&gt;</code>, <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">&lt;&lt;extend&gt;&gt;</code> và <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Generalization</code>.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "matrix"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            15 Thuật ngữ ({TERMS.length})
          </button>
          <button
            onClick={() => setActiveTab("diagnostic")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "diagnostic"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            3 Câu hỏi chẩn đoán UML
          </button>
        </div>
      </div>

      {activeTab === "matrix" && (
        <div className="mt-6 space-y-6">
          {/* Controls: Category Pills & Live Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-stone-100 hover:bg-stone-200/80 text-stone-700 border border-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Tìm thuật ngữ, tiếng Việt, ví dụ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Term Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map(term => {
              const isExpanded = expandedTermId === term.id;
              return (
                <div
                  key={term.id}
                  onClick={() => setExpandedTermId(isExpanded ? null : term.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                    isExpanded 
                      ? "bg-white border-amber-400 shadow-md ring-2 ring-amber-500/10" 
                      : "bg-white/80 hover:bg-white border-stone-200/80 hover:border-amber-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                        {term.category}
                      </span>
                      <h4 className="text-base font-extrabold text-stone-900 mt-2">
                        {term.term}
                      </h4>
                      <p className="text-xs font-semibold text-amber-800">
                        {term.vietnamese}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {term.definition}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px]">
                    <span className="text-stone-400 italic">
                      {isExpanded ? "Bấm để thu gọn" : "Bấm xem công thức & bẫy thi"}
                    </span>
                    <span className="font-bold text-amber-700 inline-flex items-center gap-1">
                      Chi tiết <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-amber-100 space-y-2.5 text-xs">
                      <div className="bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60">
                        <span className="font-bold text-amber-900 block mb-0.5">💡 Công thức ghi nhớ nhanh:</span>
                        <p className="text-amber-800">{term.formula}</p>
                      </div>

                      <div>
                        <span className="font-bold text-stone-800 block mb-0.5">📌 Ví dụ thực tế:</span>
                        <p className="text-stone-600 italic bg-stone-50 p-2 rounded border border-stone-200/60">
                          {term.example}
                        </p>
                      </div>

                      <div className="bg-rose-50/70 p-2 rounded border border-rose-200/60 text-rose-900">
                        <span className="font-bold block mb-0.5 text-rose-800">⚠️ Bẫy đề thi cần né:</span>
                        <p className="text-rose-700">{term.pitfall}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12 bg-white/50 rounded-xl border border-dashed border-stone-200">
              <Compass className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-stone-600">Không tìm thấy thuật ngữ phù hợp với từ khóa.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-2 text-xs text-amber-600 font-bold hover:underline"
              >
                Xóa bộ lọc và xem lại tất cả
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: 3 Diagnostic Questions Tool */}
      {activeTab === "diagnostic" && (
        <div className="mt-6 space-y-6">
          <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-purple-950">
                Quy tắc 3 câu hỏi vàng phân định quan hệ UML Use Case (Mục 7.5)
              </h4>
              <p className="text-xs text-purple-800 mt-1 leading-relaxed">
                Khi đối mặt với một liên kết giữa 2 Use Case trong đề thi, hãy tự vấn 3 câu theo thứ tự:
                <br />
                1. <strong>Luôn phải chạy 100%?</strong> ➔ <span className="font-mono bg-purple-100 px-1 rounded">&lt;&lt;include&gt;&gt;</span>
                <br />
                2. <strong>Chỉ chạy khi có điều kiện/ngoại lệ/tùy chọn?</strong> ➔ <span className="font-mono bg-purple-100 px-1 rounded">&lt;&lt;extend&gt;&gt;</span>
                <br />
                3. <strong>Là một loại chuyên biệt cụ thể (Is-A type of)?</strong> ➔ <span className="font-mono bg-purple-100 px-1 rounded">Generalization (Kế thừa)</span>
              </p>
            </div>
          </div>

          {/* Diagnostic Questions List */}
          <div className="space-y-5">
            {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
              const selectedOpt = answers[q.id];
              const isSubmitted = diagSubmitted;
              const isCorrect = selectedOpt === q.correctAnswer;

              return (
                <div 
                  key={q.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-bold text-xs border border-stone-200">
                      Tình huống #{idx + 1}
                    </span>
                    {isSubmitted && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                      }`}>
                        {isCorrect ? "✓ Chính xác" : "✗ Chưa đúng"}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-bold text-stone-900">
                    {q.question}
                  </p>

                  <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200/80 text-xs text-stone-700 font-medium">
                    🔍 <strong className="text-stone-900">Câu hỏi tư duy:</strong> {q.keyQuestion}
                  </div>

                  {/* Options */}
                  <div className="space-y-2 pt-1">
                    {q.options.map(opt => {
                      const isChosen = selectedOpt === opt.id;
                      let optionClasses = "border-stone-200 hover:border-purple-300 hover:bg-purple-50/30 text-stone-800";
                      
                      if (isSubmitted) {
                        if (opt.correct) {
                          optionClasses = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500";
                        } else if (isChosen && !opt.correct) {
                          optionClasses = "border-rose-400 bg-rose-50 text-rose-950 font-semibold";
                        } else {
                          optionClasses = "border-stone-200 opacity-60 text-stone-500";
                        }
                      } else if (isChosen) {
                        optionClasses = "border-purple-600 bg-purple-50 text-purple-950 font-bold ring-2 ring-purple-500/20";
                      }

                      return (
                        <button
                          key={opt.id}
                          disabled={isSubmitted}
                          onClick={() => handleSelectAnswer(q.id, opt.id)}
                          className={`w-full text-left p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${optionClasses}`}
                        >
                          <span>{opt.label}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isChosen ? "border-purple-600 bg-purple-600 text-white" : "border-stone-300"
                          }`}>
                            {isChosen && <Check className="w-2.5 h-2.5" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback explanation when submitted */}
                  {isSubmitted && (
                    <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs leading-relaxed text-stone-700">
                      <span className="font-bold text-stone-900 block mb-1">📘 Luận giải chuẩn:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {!diagSubmitted ? (
              <button
                onClick={() => setDiagSubmitted(true)}
                disabled={Object.keys(answers).length < DIAGNOSTIC_QUESTIONS.length}
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-700 text-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Chấm điểm chẩn đoán ({Object.keys(answers).length}/{DIAGNOSTIC_QUESTIONS.length} câu)
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="text-sm font-bold text-stone-900">
                  Kết quả: <span className="text-purple-700">{diagScore}/{DIAGNOSTIC_QUESTIONS.length}</span> câu chính xác!
                </div>
                <button
                  onClick={handleResetDiagnostic}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại chẩn đoán
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
