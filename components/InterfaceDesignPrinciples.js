"use client";
import React, { useState } from "react";
import { Layers, Link2, EyeOff, Sparkles, CheckCircle, XCircle, ArrowRight } from "lucide-react";

export default function InterfaceDesignPrinciples() {
  const [activeTab, setActiveTab] = useState(0);
  
  // States for interactive sliders
  const [couplingLevel, setCouplingLevel] = useState(30); // 0 (Low/Good) to 100 (High/Bad)
  const [cohesionLevel, setCohesionLevel] = useState(80);  // 0 (Low/Bad) to 100 (High/Good)
  const [abstractionLevel, setAbstractionLevel] = useState(90); // 0 (Low/Bad) to 100 (High/Good)
  const [infoHidingLevel, setInfoHidingLevel] = useState(85); // 0 (Low/Bad) to 100 (High/Good)

  const principles = [
    {
      id: 0,
      title: "Abstraction",
      subtitle: "Trừu tượng hóa",
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      desc: "Chỉ quan tâm chương trình làm được gì (specification), không quan tâm làm như thế nào (implementation).",
      value: abstractionLevel,
      setValue: setAbstractionLevel,
      minLabel: "Chi tiết vụn vặt",
      maxLabel: "Trừu tượng hóa cao",
      goodRange: [70, 100],
      detail: {
        problem: "Cài đặt trực tiếp mọi thứ trong hàm main hoặc lớp chính, phụ thuộc trực tiếp vào thuật toán cụ thể.",
        solution: "Sử dụng Java Interface hoặc Abstract Class để định nghĩa hành vi, tách biệt phần gọi hàm và phần thực thi thuật toán.",
        codeBad: `// BAD: Phụ thuộc trực tiếp vào MysqlDatabase
class PaymentProcessor {
    private MysqlDatabase db = new MysqlDatabase();
    
    public void process() {
        db.connect(); // Gắn chặt vào MySQL
        db.savePayment();
    }
}`,
        codeGood: `// GOOD: Sử dụng Interface làm lớp trừu tượng
interface Database {
    void save();
}

class PaymentProcessor {
    private Database db; // Phụ thuộc vào trừu tượng
    
    public PaymentProcessor(Database db) {
        this.db = db;
    }
    
    public void process() {
        db.save(); // Chạy tự do với bất kỳ DB nào
    }
}`
      }
    },
    {
      id: 1,
      title: "Coupling",
      subtitle: "Sự liên kết",
      icon: <Link2 className="w-6 h-6 text-cyan-400" />,
      desc: "Mức độ phụ thuộc lẫn nhau giữa các lớp. Càng thấp (Loose Coupling) càng dễ bảo trì và thay thế.",
      value: couplingLevel,
      setValue: setCouplingLevel,
      minLabel: "Loose (Tốt)",
      maxLabel: "Tight (Xấu)",
      goodRange: [0, 40],
      detail: {
        problem: "Các lớp liên kết trực tiếp với nhau qua biến public hoặc gọi khởi tạo trực tiếp, thay đổi lớp này làm vỡ lớp kia.",
        solution: "Liên kết qua Interface, truyền tham chiếu (Dependency Injection) thay vì tự khởi tạo cứng.",
        codeBad: `// TIGHT COUPLING (Xấu)
class Car {
    private Engine engine = new Engine(); // Cố định Engine
    
    public void start() {
        engine.igniteWithGasoline(); // Phụ thuộc loại xăng cụ thể
    }
}`,
        codeGood: `// LOOSE COUPLING (Tốt)
interface Engine {
    void start();
}

class Car {
    private Engine engine; // Nhận bất kỳ loại động cơ nào
    
    public Car(Engine engine) {
        this.engine = engine;
    }
    
    public void start() {
        engine.start();
    }
}`
      }
    },
    {
      id: 2,
      title: "Cohesion",
      subtitle: "Tính gắn kết",
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      desc: "Mỗi lớp chỉ nên đại diện cho một thực thể/nhiệm vụ duy nhất. Càng cao (High Cohesion) càng tốt.",
      value: cohesionLevel,
      setValue: setCohesionLevel,
      minLabel: "Tạp nham (Xấu)",
      maxLabel: "Tập trung (Tốt)",
      goodRange: [60, 100],
      detail: {
        problem: "Một lớp 'vạn năng' làm quá nhiều nhiệm vụ: lưu database, đọc console, định dạng chuỗi, tính toán nghiệp vụ.",
        solution: "Chia nhỏ lớp, gom nhóm logic sao cho mỗi phương thức và thuộc tính đều phục vụ mục đích duy nhất của lớp đó.",
        codeBad: `// LOW COHESION (Xấu)
class Student {
    public String name;
    
    public void saveToDatabase() { /* Lưu DB */ }
    public void printReportCard() { /* In điểm */ }
    public void readFromConsole() { /* Nhập dữ liệu */ }
}`,
        codeGood: `// HIGH COHESION (Tốt)
class Student {
    public String name; // Chỉ chứa thông tin sinh viên
}

class StudentRepository {
    public void save(Student s) { /* Chỉ làm nhiệm vụ lưu DB */ }
}

class StudentPrinter {
    public void printReport(Student s) { /* Chỉ làm nhiệm vụ in */ }
}`
      }
    },
    {
      id: 3,
      title: "Information Hiding",
      subtitle: "Che giấu thông tin",
      icon: <EyeOff className="w-6 h-6 text-amber-400" />,
      desc: "Chỉ để lộ ra ngoài những gì thực sự cần thiết (giao diện sử dụng), che giấu hoàn toàn chi tiết cài đặt bên trong.",
      value: infoHidingLevel,
      setValue: setInfoHidingLevel,
      minLabel: "Lộ thiên (Xấu)",
      maxLabel: "Bảo vệ (Tốt)",
      goodRange: [60, 100],
      detail: {
        problem: "Để thuộc tính public hoặc cung cấp toàn bộ chi tiết cách lớp hoạt động làm cho bên ngoài can thiệp bừa bãi.",
        solution: "Sử dụng từ khóa private cho các thuộc tính, chỉ công khai method header (giao diện gọi hàm) và mô tả đặc tả.",
        codeBad: `// NO INFORMATION HIDING (Xấu)
class BankAccount {
    public double balance; // Lộ thiên hoàn toàn
}`,
        codeGood: `// INFORMATION HIDING (Tốt)
class BankAccount {
    private double balance; // Giấu balance
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount; // Kiểm soát truy cập chặt chẽ
        }
    }
    public double getBalance() {
        return balance;
    }
}`
      }
    }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl overflow-hidden my-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            4 Nguyên Tắc Thiết Kế Chương Trình
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Điều chỉnh thanh trượt để trực quan hóa mức độ tối ưu của thiết kế hệ thống
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/60 text-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-semibold text-slate-300">Khuyên dùng: Coupling thấp, Cohesion cao</span>
        </div>
      </div>

      {/* Grid of 4 Principles */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {principles.map((p) => {
          const isGood = p.value >= p.goodRange[0] && p.value <= p.goodRange[1];
          const isActive = activeTab === p.id;
          
          return (
            <div
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`relative cursor-pointer p-4 rounded-xl border transition-all duration-300 select-none flex flex-col justify-between ${
                isActive
                  ? "bg-slate-800/80 border-indigo-500/80 shadow-md shadow-indigo-500/10"
                  : "bg-slate-850/50 border-slate-800 hover:border-slate-750 hover:bg-slate-800/40"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-slate-800 rounded-lg border border-slate-750">
                    {p.icon}
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isGood
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                      : "bg-rose-500/15 text-rose-400 border border-rose-500/20"
                  }`}>
                    {isGood ? "Đạt chuẩn" : "Chưa đạt"}
                  </span>
                </div>
                <h5 className="font-bold text-sm text-slate-200">{p.title}</h5>
                <p className="text-xs text-slate-400 italic mb-3">{p.subtitle}</p>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{p.desc}</p>
              </div>

              {/* Slider inside card */}
              <div className="mt-4 pt-3 border-t border-slate-800/80" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                  <span>{p.minLabel}</span>
                  <span className="font-bold text-slate-400">{p.value}%</span>
                  <span>{p.maxLabel}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={p.value}
                  onChange={(e) => p.setValue(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Block */}
      <div className="bg-slate-850 border border-slate-800 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded">
            So sánh thiết kế thực tế
          </span>
          <span className="text-slate-500 text-xs">—</span>
          <span className="text-slate-300 font-medium text-xs">
            {principles[activeTab].title} ({principles[activeTab].subtitle})
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bad side */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold mb-2">
              <XCircle className="w-4 h-4" />
              <span>Thiết kế chưa tối ưu (Ví dụ thực tế)</span>
            </div>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              {principles[activeTab].detail.problem}
            </p>
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-3 overflow-x-auto">
              <pre className="text-[11px] font-mono text-rose-300/90 leading-relaxed font-semibold">
                <code>{principles[activeTab].detail.codeBad}</code>
              </pre>
            </div>
          </div>

          {/* Good side */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Thiết kế đạt chuẩn (Giải pháp khuyên dùng)</span>
            </div>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              {principles[activeTab].detail.solution}
            </p>
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-3 overflow-x-auto">
              <pre className="text-[11px] font-mono text-emerald-300/90 leading-relaxed font-semibold">
                <code>{principles[activeTab].detail.codeGood}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Dynamic visual relationship graphic based on coupling level (for Coupling tab) */}
        {activeTab === 1 && (
          <div className="mt-5 p-4 bg-slate-900/60 rounded-lg border border-slate-800/80 flex flex-col items-center">
            <span className="text-xs text-slate-400 font-semibold mb-3">Mô hình liên kết các lớp trong thực tế</span>
            <div className="flex items-center justify-center gap-12 w-full max-w-md h-24 relative">
              <div className="px-4 py-2 bg-indigo-950/80 border border-indigo-500 rounded-lg font-bold text-sm text-indigo-300 z-10">
                Class Car
              </div>
              
              {/* Connection line */}
              <div className="absolute left-[30%] right-[30%] h-0.5 bg-slate-700 flex justify-center items-center">
                <div className={`text-[10px] px-2 py-0.5 rounded border ${
                  couplingLevel > 40 
                    ? "bg-rose-950/80 border-rose-500 text-rose-400" 
                    : "bg-emerald-950/80 border-emerald-500 text-emerald-400"
                }`}>
                  {couplingLevel > 40 ? "Phụ thuộc trực tiếp" : "Phụ thuộc qua Interface"}
                </div>
                <ArrowRight className={`absolute -right-2 text-slate-500 w-4 h-4 ${
                  couplingLevel > 40 ? "text-rose-500" : "text-emerald-500"
                }`} />
              </div>

              <div className={`px-4 py-2 border rounded-lg font-bold text-sm z-10 transition-colors duration-300 ${
                couplingLevel > 40
                  ? "bg-rose-950/50 border-rose-500 text-rose-300"
                  : "bg-emerald-950/50 border-emerald-500 text-emerald-300"
              }`}>
                {couplingLevel > 40 ? "EngineGasoline" : "Interface Engine"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
