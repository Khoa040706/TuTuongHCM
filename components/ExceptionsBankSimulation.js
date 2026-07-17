"use client";
import React, { useState } from "react";
import { Terminal, CreditCard, DollarSign, Cpu, Play, RotateCcw, FolderOpen, Info } from "lucide-react";

export default function ExceptionsBankSimulation() {
  // Part A: File explorer
  const [activeFile, setActiveFile] = useState("exception");

  // Part B: Bank Sandbox
  const [balance, setBalance] = useState(200.0);
  const [txAmount, setTxAmount] = useState("100");
  const [sandboxLogs, setSandboxLogs] = useState([
    "System: Khởi tạo tài khoản #1234 với số dư ban đầu $200.0"
  ]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Part C: Animated Flow Diagram
  const [flowStep, setFlowStep] = useState(0);
  const [flowLogs, setFlowLogs] = useState([]);

  const fileContents = {
    exception: {
      name: "NotEnoughFundException.java",
      code: `public class NotEnoughFundException extends Exception {
    private double amount; // Số tiền còn thiếu
    
    public NotEnoughFundException(String s, double amount) {
        super(s); // Truyền thông báo lỗi lên lớp cha Exception
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}`
    },
    acct: {
      name: "BankAcct.java",
      code: `class BankAcct {
    private int acctNum;
    private double balance;
    
    public BankAcct(int aNum, double bal) {
        acctNum = aNum;
        balance = bal;
    }
    
    public void deposit(double amount) {
        balance += amount;
    }
    
    // Khai báo phương thức có thể ném ngoại lệ Checked
    public void withdraw(double amount) throws NotEnoughFundException {
        if (balance >= amount) {
            balance -= amount;
        } else {
            double needs = amount - balance;
            // Ném ngoại lệ tự định nghĩa kèm thông điệp và số tiền thiếu
            throw new NotEnoughFundException("withdrawal Unsuccessful", needs);
        }
    }
}`
    },
    test: {
      name: "TestBankAcct.java",
      code: `public class TestBankAcct {
    public static void main(String[] args) {
        BankAcct acc = new BankAcct(1234, 200.0);
        try {
            acc.withdraw(150.0); // Rút lần 1 (thành công)
            acc.withdraw(100.0); // Rút lần 2 (thất bại ➔ ném ngoại lệ)
        } catch (NotEnoughFundException e) {
            System.out.println(e.getMessage());
            System.out.println("Your account is short of $" + e.getAmount());
        } finally {
            System.out.println("Current balance: $" + acc.getBalance());
        }
    }
}`
    }
  };

  const handleDeposit = () => {
    const amt = parseFloat(txAmount);
    if (isNaN(amt) || amt <= 0) return;
    setBalance((prev) => prev + amt);
    setSandboxLogs((prev) => [
      ...prev,
      `Console: Gửi tiền thành công +$${amt.toFixed(1)}`,
      `Console: Current balance: $${(balance + amt).toFixed(1)}`
    ]);
    setErrorMessage(null);
  };

  const handleWithdraw = () => {
    const amt = parseFloat(txAmount);
    if (isNaN(amt) || amt <= 0) return;

    if (balance >= amt) {
      setBalance((prev) => prev - amt);
      setSandboxLogs((prev) => [
        ...prev,
        `Console: Rút tiền thành công -$${amt.toFixed(1)}`,
        `Console: Current balance: $${(balance - amt).toFixed(1)}`
      ]);
      setErrorMessage(null);
    } else {
      const needs = amt - balance;
      setErrorMessage(`NotEnoughFundException: withdrawal Unsuccessful. Thiếu $${needs.toFixed(1)}`);
      setSandboxLogs((prev) => [
        ...prev,
        `❌ Lỗi: NotEnoughFundException: withdrawal Unsuccessful`,
        `❌ Your account is short of $${needs.toFixed(1)}`,
        `Console: Current balance: $${balance.toFixed(1)} (khối finally luôn chạy)`
      ]);
    }
  };

  // Flow simulation steps
  const flowSimulationSteps = [
    { text: "Khởi tạo tài khoản với số dư $200.0", log: "Current balance: $200.0" },
    { text: "Rút tiền lần 1: $150.0 ➔ Số dư đủ, trừ tiền thành công.", log: "Withdrawing $150..." },
    { text: "Rút tiền lần 2: $100.0 ➔ Chỉ còn $50.0, ném NotEnoughFundException!", log: "Withdrawing $100..." },
    { text: "Khối catch bắt Exception: In ra getMessage() và số tiền còn thiếu $50.0.", log: "withdrawal Unsuccessful\nYour account is short of $50.0" },
    { text: "Khối finally thực thi: In số dư hiện tại cuối cùng là $50.0.", log: "Current balance: $50.0" }
  ];

  const handleNextFlowStep = () => {
    if (flowStep >= flowSimulationSteps.length) return;
    const nextStep = flowStep + 1;
    setFlowStep(nextStep);
    setFlowLogs((prev) => [...prev, flowSimulationSteps[flowStep].log]);
  };

  const handleResetFlow = () => {
    setFlowStep(0);
    setFlowLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* PART A: File Explorer */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <FolderOpen className="w-5 h-5 text-indigo-600" />
          <span>Mục VII - Phần 1 & 2: Cấu Trúc Các File Mã Nguồn Bank Account</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Chuyển đổi qua lại giữa các tab để xem toàn bộ cấu trúc mã nguồn tích hợp cơ chế Custom Checked Exception.
        </p>

        {/* Tab Buttons */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200/60 select-none max-w-lg mb-4">
          {Object.keys(fileContents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveFile(key)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeFile === key ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
              }`}
            >
              {fileContents[key].name}
            </button>
          ))}
        </div>

        {/* Code display */}
        <div className="relative">
          <pre className="p-4 bg-stone-900 border border-stone-850 rounded-2xl font-mono text-[10px] leading-relaxed text-indigo-200 shadow-inner overflow-x-auto">
            {fileContents[activeFile].code}
          </pre>
        </div>

        {/* Explanations tooltips */}
        <div className="bg-indigo-50/50 border border-indigo-200/50 rounded-2xl p-4 flex gap-3 items-start mt-4 shadow-sm">
          <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed text-indigo-850">
            {activeFile === "exception" && (
              <span>💡 Lớp <strong>NotEnoughFundException</strong> kế thừa trực tiếp từ <code>Exception</code> ➔ Lỗi thuộc nhóm <strong>Checked Exception</strong> bắt buộc phải xử lý bằng try-catch hoặc throws khi biên dịch.</span>
            )}
            {activeFile === "acct" && (
              <span>💡 Phương thức <code>withdraw()</code> khai báo <code>throws NotEnoughFundException</code> trong signature, và ném lỗi bằng lệnh <code>throw new NotEnoughFundException(...)</code> khi số dư không đủ.</span>
            )}
            {activeFile === "test" && (
              <span>💡 Trong <code>TestBankAcct</code>, khối <code>finally</code> được đặt để in ra số dư tài khoản cuối cùng dù giao dịch rút tiền lần 2 có bị sập do ném ngoại lệ hay không.</span>
            )}
          </div>
        </div>
      </div>

      {/* PART B: Banking Sandbox */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <CreditCard className="w-5 h-5 text-teal-600" />
          <span>Mục VII - Phần 3: Trình Giả Lập Giao Dịch Tài Khoản (Bank Sandbox)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Thử gửi tiền và rút tiền với số lượng tùy ý để kích hoạt lỗi <code className="bg-stone-100 px-1 rounded font-mono">NotEnoughFundException</code> khi số dư tài khoản bị âm.
        </p>

        {/* Banking Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
          {/* Card UI */}
          <div className="bg-gradient-to-br from-teal-600 to-indigo-700 p-6 rounded-3xl text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-teal-200 uppercase tracking-widest font-mono font-bold">Tài khoản Ngân hàng</span>
                <div className="text-sm font-mono mt-1">#1234-5678-OOP</div>
              </div>
              <CreditCard className="w-8 h-8 text-white/80" />
            </div>

            <div className="mt-8">
              <span className="text-[10px] text-teal-250 uppercase tracking-wider font-mono">Số dư hiện tại (Balance)</span>
              <div className="text-3xl font-black font-mono mt-1 flex items-center">
                <DollarSign className="w-6 h-6 shrink-0" />
                <span>{balance.toFixed(2)}</span>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-4 p-2 bg-rose-500/25 border border-rose-450/40 rounded-xl text-[10px] font-mono leading-normal text-rose-100 animate-pulse">
                ⚠️ {errorMessage}
              </div>
            )}
          </div>

          {/* Form UI */}
          <div className="bg-stone-50/60 p-5 rounded-3xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Số tiền giao dịch ($):</label>
              <input
                type="number"
                value={txAmount}
                onChange={(e) => setTxAmount(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-teal-500 transition-colors shadow-sm font-mono mb-4"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleDeposit}
                className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.02] select-none"
              >
                Gửi tiền (Deposit)
              </button>
              <button
                onClick={handleWithdraw}
                className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.02] select-none"
              >
                Rút tiền (Withdraw)
              </button>
            </div>
          </div>
        </div>

        {/* Sandbox Console Output */}
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
          Nhật ký giao dịch thời gian thực (Console Output)
        </span>
        <div className="p-4 bg-stone-900 border border-stone-850 rounded-2xl font-mono text-[10.5px] text-emerald-400 space-y-1 shadow-md max-h-[140px] overflow-y-auto">
          {sandboxLogs.map((line, idx) => {
            let color = "text-emerald-300";
            if (line.startsWith("❌")) color = "text-rose-400 font-bold";
            if (line.startsWith("System:")) color = "text-stone-500 italic";
            return <div key={idx} className={color}>{line}</div>;
          })}
        </div>
      </div>

      {/* PART C: Animated Flow Diagram */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-indigo-600" />
          <span>Mục VII - Phần 4 & 5: Sơ Đồ Luồng Rút Tiền TestBankAcct</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Chạy từng bước để xem thứ tự JVM nhảy mã nguồn từ khối try sang catch và cuối cùng thực thi khối code dọn dẹp finally.
        </p>

        {/* Step controls */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={handleNextFlowStep}
            disabled={flowStep >= flowSimulationSteps.length}
            className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 select-none hover:scale-[1.02]"
          >
            Chạy bước tiếp theo ({flowStep + 1}/5)
          </button>
          <button
            onClick={handleResetFlow}
            className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Flowchart elements */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6 select-none text-center">
          {flowSimulationSteps.map((s, idx) => {
            const isPassed = flowStep > idx;
            const isCurrent = flowStep === idx + 1;
            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-[11px] font-medium transition-all ${
                  isCurrent ? "bg-indigo-600 text-white border-indigo-700 shadow-md scale-105" :
                  isPassed ? "bg-indigo-50 border-indigo-200 text-indigo-700" :
                  "bg-stone-50/50 border-stone-200 text-stone-400"
                }`}
              >
                <div className="font-bold text-[9px] uppercase tracking-wider mb-1 font-mono">BƯỚC {idx + 1}</div>
                <div>{s.text}</div>
              </div>
            );
          })}
        </div>

        {/* Output */}
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
          Console Output tương ứng của TestBankAcct
        </span>
        <div className="p-4 bg-stone-900 border border-stone-850 rounded-2xl font-mono text-[10.5px] text-indigo-300 min-h-[100px] shadow-md space-y-1 overflow-y-auto">
          {flowLogs.length > 0 ? (
            flowLogs.map((log, idx) => (
              <div key={idx} className="whitespace-pre-line">
                {log}
              </div>
            ))
          ) : (
            <div className="text-stone-650 italic text-[11px]">Chờ khởi chạy luồng rút tiền...</div>
          )}
        </div>
      </div>
    </div>
  );
}
