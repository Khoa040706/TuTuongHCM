"use client";
import React, { useState } from "react";
import { GitFork, ChevronRight, RefreshCw, Play, CheckCircle2, XCircle, Info, Sliders, Award, Terminal, ArrowDown } from "lucide-react";

export default function InheritanceCreatingSubclass() {
  const [activeTab, setActiveTab] = useState("concept"); // "concept" | "uml" | "constructor" | "sandbox"
  
  // Interactive Copy-Paste vs Inheritance
  const [showCopyCode, setShowCopyCode] = useState(true);

  // Constructor Flow steps
  const [flowStep, setFlowStep] = useState(0);

  // Sandbox simulation steps
  const [sandboxStep, setSandboxStep] = useState(0);
  const [sandboxOutput, setSandboxOutput] = useState([]);

  // Sandbox simulation data
  const sandboxCodes = [
    { line: 'SavingAcct sa1 = new SavingAcct(2, 1000.0, 0.03);', out: "Khởi tạo tài khoản sa1: số TK = 2, số dư = 1000.0, lãi suất = 3.0%" },
    { line: 'sa1.print();', out: "Account Number: 2\nBalance: $1000.00\nInterest: 0.03" },
    { line: 'sa1.withdraw(50.0);', out: "sa1 rút $50.0 thành công. Số dư hiện tại = $950.0" },
    { line: 'sa1.payInterest();', out: "Trả lãi: 950.0 + (950.0 * 0.03) = 978.50. Số dư hiện tại = $978.50" },
    { line: 'sa1.print();', out: "Account Number: 2\nBalance: $978.50\nInterest: 0.03" }
  ];

  const handleSandboxStep = () => {
    if (sandboxStep < sandboxCodes.length) {
      const current = sandboxCodes[sandboxStep];
      setSandboxOutput(prev => [...prev, { line: current.line, out: current.out }]);
      setSandboxStep(prev => prev + 1);
    }
  };

  const resetSandbox = () => {
    setSandboxStep(0);
    setSandboxOutput([]);
  };

  const constructorSteps = [
    { title: "1. Khởi chạy lớp con", desc: "Gọi constructor con: <code>new SavingAcct(2, 1000.0, 0.03)</code>.", code: "public SavingAcct(int aNum, double bal, double rate) {" },
    { title: "2. Chuyển tiếp lên lớp cha", desc: "Gặp lệnh <code>super(aNum, bal)</code> đầu tiên. JVM nhảy lên constructor lớp cha.", code: "    super(aNum, bal);" },
    { title: "3. Lớp cha khởi tạo", desc: "Lớp cha <code>BankAcct</code> nhận và gán các thuộc tính chung.", code: "public BankAcct(int aNum, double bal) {\n    this.acctNum = aNum;\n    this.balance = bal;\n}" },
    { title: "4. Lớp con hoàn tất", desc: "Constructor cha hoàn tất, quyền điều khiển trả về lớp con để gán thuộc tính riêng.", code: "    this.rate = rate;\n}" }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // III. CREATING A SUBCLASS (TẠO LỚP CON)
      </span>

      {/* Tab bar Navigation */}
      <div className="flex bg-stone-150 p-1 rounded-xl mb-6 gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab("concept")}
          className={`flex-1 min-w-[120px] py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all ${
            activeTab === "concept" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
          }`}
        >
          1. Khái niệm & Kế thừa
        </button>
        <button
          onClick={() => setActiveTab("uml")}
          className={`flex-1 min-w-[120px] py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all ${
            activeTab === "uml" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
          }`}
        >
          2. Sơ đồ UML (IS-A)
        </button>
        <button
          onClick={() => setActiveTab("constructor")}
          className={`flex-1 min-w-[120px] py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all ${
            activeTab === "constructor" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
          }`}
        >
          3. Constructor & super()
        </button>
        <button
          onClick={() => setActiveTab("sandbox")}
          className={`flex-1 min-w-[120px] py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all ${
            activeTab === "sandbox" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
          }`}
        >
          4. Sử dụng & Ghi đè
        </button>
      </div>

      {/* TAB 1: Concept & Copy-Paste vs Inheritance */}
      {activeTab === "concept" && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-2">
            <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">Khái niệm & Thuật ngữ</span>
            <p className="text-xs leading-relaxed text-stone-700 font-semibold">
              Kế thừa cho phép một lớp mới được định nghĩa dựa trên một lớp đã có. Lớp con sẽ tự động sở hữu toàn bộ thuộc tính và phương thức từ lớp cha.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div className="bg-stone-100 p-2.5 rounded-xl border border-stone-200">
                <span className="text-[8px] font-black text-stone-400 block mb-1">LỚP CHA</span>
                <span className="font-bold text-stone-800">Superclass / Parent Class</span>
              </div>
              <div className="bg-stone-100 p-2.5 rounded-xl border border-stone-200">
                <span className="text-[8px] font-black text-stone-400 block mb-1">LỚP CON</span>
                <span className="font-bold text-indigo-700">Subclass / Child Class</span>
              </div>
            </div>
          </div>

          {/* Copy-paste vs Inheritance comparative widget */}
          <div className="border border-stone-200 rounded-2xl p-4 bg-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// SO SÁNH THIẾT KẾ: SAO CHÉP VS KẾ THỪA</span>
              <button
                onClick={() => setShowCopyCode(!showCopyCode)}
                className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Xem {showCopyCode ? "Kế thừa (Inheritance)" : "Sao chép (Copy-Paste)"}</span>
              </button>
            </div>

            {showCopyCode ? (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="bg-rose-500/5 border border-rose-500/25 p-3 rounded-xl text-xs flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span className="font-bold text-rose-800">Thiết kế tồi: Trùng lặp code (Duplicate Code)</span>
                </div>
                <pre className="font-mono text-[9px] text-stone-600 bg-stone-900 text-stone-300 p-3 rounded-xl border border-stone-850 leading-relaxed overflow-x-auto">
{`// Sao chép code từ BankAcct sang SavingAcct
class SavingAcct {
    private int acctNum;      // ❌ Lặp lại thuộc tính
    private double balance;   // ❌ Lặp lại thuộc tính
    private double rate;      // Thuộc tính mới

    public void withdraw(double val) {} // ❌ Lặp lại logic
    public void deposit(double val) {}  // ❌ Lặp lại logic
    public void payInterest() {}        // Phương thức mới
}`}
                </pre>
                <p className="text-[10px] text-rose-600 font-medium">⚠️ Nhược điểm lớn: Rất khó bảo trì. Khi sửa logic lớp cha, bắt buộc phải tìm và sửa tất cả các bản sao ở lớp con.</p>
              </div>
            ) : (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="bg-emerald-500/5 border border-emerald-500/25 p-3 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-emerald-800">Thiết kế tối ưu: Dùng từ khóa extends và protected</span>
                </div>
                <pre className="font-mono text-[9px] text-stone-600 bg-stone-900 text-stone-300 p-3 rounded-xl border border-stone-850 leading-relaxed overflow-x-auto">
{`// BankAcct khai báo protected cho phép con truy cập
class BankAcct {
    protected int acctNum;
    protected double balance;
}

// Lớp con kế thừa từ BankAcct
class SavingAcct extends BankAcct {
    private double rate; // Chỉ khai báo thuộc tính mới

    public void payInterest() {
        balance += balance * rate; // Truy cập trực tiếp thuộc tính cha
    }
}`}
                </pre>
                <p className="text-[10px] text-emerald-600 font-medium">✅ Ưu điểm: Lớp con tự động kế thừa toàn bộ mã nguồn của lớp cha mà không cần viết lại. Dễ bảo trì, mã nguồn cực kỳ gọn gàng.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: Interactive UML Class Diagram */}
      {activeTab === "uml" && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-2">
            <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">Quan hệ IS-A & Biểu diễn UML</span>
            <p className="text-xs leading-relaxed text-stone-700 font-semibold">
              Kế thừa biểu diễn quan hệ <strong>IS-A (Là một)</strong>: <code>SavingAcct</code> <em>is-a</em> <code>BankAcct</code>. Trong UML, quan hệ này được biểu diễn bằng <strong>đường thẳng liền nét (solid line)</strong> với <strong>mũi tên rỗng đóng (closed unfilled arrowhead)</strong> chỉ từ con lên cha.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl min-h-[300px]">
            <div className="w-full max-w-sm flex flex-col items-center gap-4">
              
              {/* Superclass Box */}
              <div className="w-full border-2 border-stone-900 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <div className="bg-stone-900 text-white text-center py-2 px-3">
                  <span className="text-[8px] uppercase tracking-wider block text-stone-400 font-bold">Superclass</span>
                  <span className="font-mono text-xs font-black">BankAcct</span>
                </div>
                <div className="p-3 text-[10px] font-mono border-b border-stone-200 space-y-1 bg-stone-50/50">
                  <div className="hover:bg-amber-100/50 rounded px-1 cursor-help" title="protected int acctNum"># acctNum : int</div>
                  <div className="hover:bg-amber-100/50 rounded px-1 cursor-help" title="protected double balance"># balance : double</div>
                </div>
                <div className="p-3 text-[10px] font-mono space-y-1 bg-white text-stone-600">
                  <div>+ getAcctNum() : int</div>
                  <div>+ getBalance() : double</div>
                  <div>+ withdraw(double) : boolean</div>
                  <div>+ deposit(double) : void</div>
                  <div>+ print() : void</div>
                </div>
              </div>

              {/* Inheriting arrow */}
              <div className="flex flex-col items-center">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-stone-900" />
                <div className="w-0.5 h-8 bg-stone-900" />
              </div>

              {/* Subclass Box */}
              <div className="w-full border-2 border-indigo-600 rounded-xl overflow-hidden bg-indigo-50/10 shadow-sm hover:shadow-md transition-all">
                <div className="bg-indigo-600 text-white text-center py-2 px-3">
                  <span className="text-[8px] uppercase tracking-wider block text-indigo-200 font-bold">Subclass (extends BankAcct)</span>
                  <span className="font-mono text-xs font-black">SavingAcct</span>
                </div>
                <div className="p-3 text-[10px] font-mono border-b border-indigo-200 bg-indigo-50/30 space-y-1">
                  <div className="hover:bg-indigo-100 rounded px-1 cursor-help" title="protected double rate"># rate : double</div>
                </div>
                <div className="p-3 text-[10px] font-mono space-y-1 bg-white text-stone-600">
                  <div className="text-indigo-700 font-bold">+ payInterest() : void</div>
                  <div className="text-indigo-700 font-bold">+ print() : void <span className="text-[8px] font-sans font-black text-indigo-500 uppercase tracking-widest">@Override</span></div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-sm text-[9px] font-mono border border-stone-200 p-2.5 rounded-xl bg-stone-50">
              <div className="text-center font-bold text-stone-700 hover:bg-stone-150 p-1 rounded cursor-help" title="Công khai (Truy cập mọi nơi)">+ : public</div>
              <div className="text-center font-bold text-stone-700 hover:bg-stone-150 p-1 rounded cursor-help" title="Bảo vệ (Truy cập lớp con)"># : protected</div>
              <div className="text-center font-bold text-stone-700 hover:bg-stone-150 p-1 rounded cursor-help" title="Riêng tư (Chỉ trong lớp này)">- : private</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Constructor chain & super() */}
      {activeTab === "constructor" && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-amber-500/5 border border-amber-500/25 p-4 rounded-2xl text-stone-850 flex items-start gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 shrink-0">
              <Award className="w-4 h-4 animate-pulse" />
            </div>
            <div className="text-xs space-y-1">
              <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block font-mono">// 📌 ĐIỂM DỄ BỊ LỪA TRONG ĐỀ THI</span>
              <p className="font-bold text-stone-700 leading-relaxed">
                <strong>Constructor (Hàm khởi tạo) KHÔNG ĐƯỢC KẾ THỪA!</strong> Lớp con bắt buộc phải tự định nghĩa constructor riêng, và sử dụng <code>super(...)</code> để gọi constructor của cha.
              </p>
            </div>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="border border-stone-200 rounded-2xl p-4 bg-white">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// TRỰC QUAN HÓA CHUỖI GỌI CONSTRUCTOR (SUPER CHAIN)</span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFlowStep(prev => (prev + 1) % constructorSteps.length)}
                  className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1.5 shadow"
                >
                  <Play className="w-3 h-3" />
                  <span>Bước kế tiếp</span>
                </button>
                <button
                  onClick={() => setFlowStep(0)}
                  className="p-1 text-stone-500 hover:text-stone-800 border-none bg-transparent cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Steps indicator */}
            <div className="flex justify-between items-center mb-4 text-[9px] font-bold text-stone-400">
              {constructorSteps.map((s, idx) => (
                <div 
                  key={idx}
                  className={`flex-1 text-center py-1 border-b-2 transition-all ${
                    flowStep === idx 
                      ? "border-indigo-500 text-indigo-700 font-black text-[10px]" 
                      : idx < flowStep 
                        ? "border-emerald-500 text-emerald-600" 
                        : "border-stone-200"
                  }`}
                >
                  Bước {idx + 1}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Step detail card */}
              <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl flex flex-col justify-between min-h-[120px]">
                <div>
                  <h4 className="text-xs font-black text-indigo-950 mb-1">{constructorSteps[flowStep].title}</h4>
                  <p className="text-[10px] leading-relaxed text-stone-600 font-semibold" dangerouslySetInnerHTML={{ __html: constructorSteps[flowStep].desc }} />
                </div>
                {flowStep === 1 && (
                  <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest block bg-rose-50 p-1.5 rounded-lg border border-rose-100 font-mono mt-2">
                    // super(...) phải nằm ở dòng đầu tiên của constructor con!
                  </span>
                )}
              </div>

              {/* Code display highlight */}
              <div className="bg-stone-900 p-4 rounded-xl border border-stone-950 text-stone-300 font-mono text-[9px] md:text-xs min-h-[120px] flex items-center">
                <pre className="w-full whitespace-pre-wrap leading-relaxed">
                  {constructorSteps[flowStep].code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Interactive Sandbox & super.method() */}
      {activeTab === "sandbox" && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="border border-stone-200 rounded-2xl p-4 bg-white">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-bold">
                <Terminal className="w-4 h-4 text-stone-600" />
                <span>Console Sandbox: Giả lập chạy TestSavingAcct</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSandboxStep}
                  disabled={sandboxStep === sandboxCodes.length}
                  className={`px-3 py-1 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1.5 shadow ${
                    sandboxStep === sandboxCodes.length 
                      ? "bg-stone-200 text-stone-400 cursor-not-allowed" 
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>Chạy dòng tiếp theo</span>
                </button>
                <button
                  onClick={resetSandbox}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Sandbox Code window */}
              <div className="lg:col-span-6 bg-stone-900 border border-stone-950 p-4 rounded-xl text-stone-300 font-mono text-[10px] md:text-xs">
                <span className="text-[8px] uppercase tracking-widest text-stone-500 font-black block mb-3 border-b border-stone-800 pb-1">// TestSavingAcct.java</span>
                <div className="space-y-1 bg-stone-950 p-2.5 rounded-lg border border-stone-850">
                  {sandboxCodes.map((c, idx) => (
                    <div 
                      key={idx} 
                      className={`px-2 py-0.5 rounded transition-all ${
                        sandboxStep === idx 
                          ? "bg-amber-500/10 text-amber-300 font-bold border-l-2 border-amber-500" 
                          : idx < sandboxStep 
                            ? "text-stone-500" 
                            : "text-stone-300"
                      }`}
                    >
                      {c.line}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sandbox Console Output window */}
              <div className="lg:col-span-6 bg-black text-emerald-400 p-4 rounded-xl font-mono text-[10px] md:text-xs flex flex-col justify-between min-h-[160px]">
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-stone-600 font-black block mb-3 border-b border-stone-900 pb-1">// Output Console</span>
                  <div className="space-y-2 max-h-[120px] overflow-y-auto">
                    {sandboxOutput.map((out, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-[8px] text-stone-600 font-sans font-bold">&gt; {out.line}</div>
                        <div className="text-white whitespace-pre-wrap pl-2 border-l border-emerald-500/30">{out.out}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {sandboxStep === sandboxCodes.length && (
                  <span className="text-[8px] text-emerald-600 font-sans font-black block mt-2 text-right">// Chương trình chạy hoàn tất.</span>
                )}
              </div>
            </div>
          </div>

          {/* super(...) vs super.method() Comparison table */}
          <div className="border border-stone-200 rounded-2xl p-4 bg-white">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-bold mb-3">
              <Sliders className="w-4 h-4 text-stone-600" />
              <span>Phân biệt super(...) và super.tenPhuongThuc()</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                <span className="text-[9px] font-black text-indigo-700 uppercase tracking-widest block">super(...)</span>
                <p className="text-[10px] font-bold text-stone-600 leading-relaxed">
                  Gọi <strong>Constructor của lớp cha</strong>. Bắt buộc phải viết ở dòng lệnh đầu tiên trong constructor của con.
                </p>
                <pre className="font-mono text-[9px] text-stone-700 bg-white p-2 rounded-lg border border-stone-150">
{`public SavingAcct(int aNum, double bal) {
    super(aNum, bal); // Gọi constructor cha
}`}
                </pre>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                <span className="text-[9px] font-black text-indigo-700 uppercase tracking-widest block">super.tenPhuongThuc()</span>
                <p className="text-[10px] font-bold text-stone-600 leading-relaxed">
                  Gọi <strong>Phương thức của lớp cha</strong>. Hữu ích khi phương thức đó đã bị ghi đè ở con nhưng ta vẫn muốn tái sử dụng logic gốc.
                </p>
                <pre className="font-mono text-[9px] text-stone-700 bg-white p-2 rounded-lg border border-stone-150">
{`public void print() {
    super.print(); // In thông tin cha
    printRate();   // In thông tin con
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
