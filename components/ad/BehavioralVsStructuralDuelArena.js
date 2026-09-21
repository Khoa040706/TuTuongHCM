"use client";
import React, { useState } from "react";
import { 
  Swords, 
  Activity, 
  Database, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  Check
} from "lucide-react";

const COMPARISON_CRITERIA = [
  {
    criteria: "Định nghĩa cốt lõi",
    behavioral: "Phân tích cách hệ thống phản hồi và tương tác nhịp nhàng với các External Actors.",
    structural: "Phân tích cấu trúc dữ liệu mà hệ thống cần ghi nhớ và các mối liên kết dữ liệu."
  },
  {
    criteria: "Câu hỏi cốt lõi",
    behavioral: "'Hệ thống LÀM GÌ và PHẢN HỒI THẾ NÀO khi có sự kiện xảy ra?'",
    structural: "'Hệ thống LƯU TRỮ DỮ LIỆU GÌ và CÁC THỰC THỂ LIÊN KẾT RA SAO?'"
  },
  {
    criteria: "Trọng tâm khảo sát",
    behavioral: "Processes (Quy trình), Functions (Chức năng), System behavior (Hành vi).",
    structural: "Data entities (Thực thể), Attributes (Thuộc tính), Relationships (Mối quan hệ)."
  },
  {
    criteria: "Sự phụ thuộc CSDL",
    behavioral: "HOÀN TOÀN ĐỘC LẬP — Không phụ thuộc vào cấu trúc dữ liệu nội bộ.",
    structural: "RẤT CHẶT CHẼ — Là nền móng để thiết kế Schema CSDL sau này."
  },
  {
    criteria: "Biểu đồ UML chủ đạo",
    behavioral: "Use-Case Diagram, Activity Diagram, Use-Case Descriptions.",
    structural: "Domain Model, Class Diagram, Entity Relationship Diagram (ERD)."
  }
];

const QUIZ_SCENARIOS = [
  {
    id: "sc-1",
    scenario: "Xác định các thuộc tính của thực thể 'SinhVien' gồm MãSV, HọTên, NgàySinh và liên kết 1-nhiều với 'LopHoc'.",
    correct: "structural",
    explanation: "Đây là phân tích dữ liệu cần lưu trữ và mối quan hệ giữa các thực thể dữ liệu ➔ Thuộc Structural Analysis."
  },
  {
    id: "sc-2",
    scenario: "Mô tả các bước sinh viên đăng nhập, chọn môn học, hệ thống kiểm tra điều kiện tiên quyết và gửi thông báo xác nhận.",
    correct: "behavioral",
    explanation: "Đây là chuỗi hành động tương tác phản hồi giữa Actor và Hệ thống ➔ Thuộc Behavioral Analysis."
  },
  {
    id: "sc-3",
    scenario: "Xây dựng biểu đồ Use Case mô tả mối quan hệ giữa Actor 'Cán bộ Đào tạo' và chức năng 'Phê duyệt danh sách lớp'.",
    correct: "behavioral",
    explanation: "Use Case Diagram là sản phẩm điển hình của Behavioral Analysis (trả lời ai làm việc gì)."
  },
  {
    id: "sc-4",
    scenario: "Mô hình hóa quan hệ Kế thừa (Inheritance) giữa lớp cha 'NguoiDung' và hai lớp con 'GiangVien', 'SinhVien' trong Class Diagram.",
    correct: "structural",
    explanation: "Class Diagram và phân cấp dữ liệu đối tượng là trọng tâm của Structural Analysis."
  }
];

export default function BehavioralVsStructuralDuelArena() {
  const [activeTab, setActiveTab] = useState("duel"); // "duel" | "quiz"
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (scenarioId, choice) => {
    setUserAnswers(prev => ({ ...prev, [scenarioId]: choice }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = Object.entries(userAnswers).filter(([id, val]) => {
    const sc = QUIZ_SCENARIOS.find(s => s.id === id);
    return sc && sc.correct === val;
  }).length;

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-purple-50/30 p-6 md:p-8 shadow-xl shadow-purple-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-950 border border-purple-300/60 mb-2">
            <Swords className="w-3.5 h-3.5 text-purple-700" />
            Mục 3.1 — Behavioral vs Structural Analysis Arena
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Đấu trường Đối chiếu: Phân tích Hành vi vs Phân tích Cấu trúc
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Làm chủ sự khác biệt bản chất giữa <strong>Behavioral Analysis</strong> (Hệ thống làm gì / phản hồi thế nào) và <strong>Structural Analysis</strong> (Hệ thống nhớ gì / dữ liệu liên hệ ra sao).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setActiveTab("duel")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "duel"
                ? "bg-white text-stone-900 shadow-xs border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Bảng đối đầu 5 Tiêu chí
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "quiz"
                ? "bg-white text-stone-900 shadow-xs border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Mini-Test Phản xạ (4 câu)
          </button>
        </div>
      </div>

      {/* Exam Flash Formula */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-900 via-stone-900 to-purple-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block">
            Mẹo phòng thi bất bại (Exam Formula):
          </span>
          <div className="text-xs sm:text-sm font-extrabold mt-1">
            ⚡ <span className="text-blue-300">Behavioral</span> = Hệ thống LÀM GÌ / PHẢN HỒI THẾ NÀO?
            <br className="sm:hidden" />
            {"  vs  "}
            ⚡ <span className="text-purple-300">Structural</span> = Hệ thống LƯU DỮ LIỆU GÌ / QUAN HỆ RA SAO?
          </div>
        </div>
        <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-1 rounded-lg border border-white/20 self-start sm:self-auto">
          Không phụ thuộc vào CSDL
        </span>
      </div>

      {/* Tab 1: Duel Comparison Table */}
      {activeTab === "duel" && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Behavioral Side */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 pb-2 border-b border-blue-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-blue-950 uppercase">Behavioral (Functional) Analysis</h4>
                  <span className="text-[11px] text-blue-700">Phân tích hành vi tương tác ngoài đời</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700">
                <p><strong>Trọng tâm:</strong> Processes, Functions, System Behavior.</p>
                <p><strong>Bản chất:</strong> Quan sát hệ thống như một "Hộp đen" (Black box) tiếp nhận kích hoạt từ Actor và tạo ra phản hồi có giá trị.</p>
                <p><strong>Không trói buộc:</strong> Không quan tâm dữ liệu bên trong được lưu vào bảng nào, khóa chính là gì.</p>
                <div className="p-2.5 rounded-lg bg-white border border-blue-200 text-[11px] text-blue-900 font-medium">
                  📌 Sản phẩm: <strong>Use-Case Diagram, Use-Case Descriptions</strong>.
                </div>
              </div>
            </div>

            {/* Structural Side */}
            <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 pb-2 border-b border-purple-200/80">
                <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-purple-950 uppercase">Structural Analysis (Đối chiếu)</h4>
                  <span className="text-[11px] text-purple-700">Phân tích cấu trúc dữ liệu ghi nhớ</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700">
                <p><strong>Trọng tâm:</strong> Dữ liệu gì cần lưu trữ, các thực thể liên hệ với nhau ra sao.</p>
                <p><strong>Bản chất:</strong> Quan sát bộ nhớ nội bộ của hệ thống (Internal Memory) để xây dựng cấu trúc quan hệ bền vững.</p>
                <p><strong>Mục tiêu:</strong> Làm tiền đề để thiết kế bảng CSDL (Tables, Keys, Foreign Keys) và các Lớp đối tượng.</p>
                <div className="p-2.5 rounded-lg bg-white border border-purple-200 text-[11px] text-purple-900 font-medium">
                  📌 Sản phẩm: <strong>Domain Model, Class Diagram, ERD</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Criteria Table */}
          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/80 border-b border-stone-200 text-stone-700 font-bold">
                  <th className="p-3 w-1/4">Tiêu chí so sánh</th>
                  <th className="p-3 w-3/8 text-blue-900 bg-blue-50/40">Behavioral Analysis</th>
                  <th className="p-3 w-3/8 text-purple-900 bg-purple-50/40">Structural Analysis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {COMPARISON_CRITERIA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="p-3 font-bold text-stone-900">{row.criteria}</td>
                    <td className="p-3 text-stone-700 leading-relaxed bg-blue-50/10">{row.behavioral}</td>
                    <td className="p-3 text-stone-700 leading-relaxed bg-purple-50/10">{row.structural}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Mini-Test */}
      {activeTab === "quiz" && (
        <div className="mt-6 space-y-4">
          <div className="text-xs text-stone-600">
            Hãy phân loại 4 tình huống phân tích sau đây thuộc về <strong>Behavioral Analysis</strong> hay <strong>Structural Analysis</strong>:
          </div>

          <div className="space-y-3">
            {QUIZ_SCENARIOS.map((item, idx) => {
              const userChoice = userAnswers[item.id];
              const isCorrect = userChoice === item.correct;

              return (
                <div key={item.id} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      Tình huống #{idx + 1}
                    </span>
                    {quizSubmitted && (
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                      }`}>
                        {isCorrect ? "✓ Chính xác" : "✗ Chưa đúng"}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-stone-900 leading-relaxed">
                    {item.scenario}
                  </p>

                  <div className="flex gap-2 pt-1">
                    <button
                      disabled={quizSubmitted}
                      onClick={() => handleSelectAnswer(item.id, "behavioral")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        userChoice === "behavioral"
                          ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                          : "bg-stone-50 hover:bg-blue-50 text-stone-700 border-stone-200"
                      }`}
                    >
                      Behavioral Analysis
                    </button>
                    <button
                      disabled={quizSubmitted}
                      onClick={() => handleSelectAnswer(item.id, "structural")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        userChoice === "structural"
                          ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                          : "bg-stone-50 hover:bg-purple-50 text-stone-700 border-stone-200"
                      }`}
                    >
                      Structural Analysis
                    </button>
                  </div>

                  {quizSubmitted && (
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-[11px] text-stone-600">
                      💡 <strong>Giải thích:</strong> {item.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            {!quizSubmitted ? (
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(userAnswers).length < QUIZ_SCENARIOS.length}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Chấm điểm ({Object.keys(userAnswers).length}/{QUIZ_SCENARIOS.length})
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-stone-900">
                  Điểm số: <strong className="text-purple-700 text-sm">{quizScore}/{QUIZ_SCENARIOS.length}</strong> câu đúng!
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Làm lại
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
