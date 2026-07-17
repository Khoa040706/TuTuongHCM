"use client";
import React, { useState } from "react";
import { Check, ClipboardList, HelpCircle, Layers, Play, Settings, RefreshCw } from "lucide-react";

export default function InterfaceFractionSandbox() {
  const [activeTab, setActiveTab] = useState("sandbox"); // "sandbox" | "fraction-code" | "fraction-arr-code"
  
  // Sandbox states
  const [n1, setN1] = useState(2);
  const [d1, setD1] = useState(4);
  const [n2, setN2] = useState(2);
  const [d2, setD2] = useState(3);
  
  const [activeOp, setActiveOp] = useState("ADD"); // "SIMPLIFY" | "ADD" | "MINUS" | "TIMES"
  const [steps, setSteps] = useState([]);
  const [mathResult, setMathResult] = useState("");

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b > 0) {
      const rem = a % b;
      a = b;
      b = rem;
    }
    return a;
  };

  const runCalculation = () => {
    const listSteps = [];
    
    if (d1 === 0 || d2 === 0) {
      setMathResult("Mẫu số không được phép bằng 0!");
      setSteps(["Lỗi: Mẫu số = 0 vi phạm điều kiện xác định toán học."]);
      return;
    }

    if (activeOp === "SIMPLIFY") {
      const g1 = gcd(n1, d1);
      const simpN1 = n1 / g1;
      const simpD1 = d1 / g1;
      listSteps.push(`Bước 1: Tìm GCD của tử số (${n1}) và mẫu số (${d1}) ➔ GCD = ${g1}`);
      listSteps.push(`Bước 2: Chia cả tử và mẫu cho GCD ➔ (${n1}/${g1}) / (${d1}/${g1})`);
      setMathResult(`${simpN1}/${simpD1}`);
      setSteps(listSteps);
      return;
    }

    // Common fraction math
    const commonDenom = d1 * d2;
    const term1 = n1 * d2;
    const term2 = n2 * d1;

    if (activeOp === "ADD") {
      const sumNumer = term1 + term2;
      listSteps.push(`Bước 1: Quy đồng mẫu số ➔ Mẫu chung = ${d1} * ${d2} = ${commonDenom}`);
      listSteps.push(`Bước 2: Quy đồng tử số ➔ Tử 1 = ${n1} * ${d2} = ${term1}, Tử 2 = ${n2} * ${d1} = ${term2}`);
      listSteps.push(`Bước 3: Cộng tử số ➔ ${term1} + ${term2} = ${sumNumer}`);
      
      const g = gcd(sumNumer, commonDenom);
      const finalN = sumNumer / g;
      const finalD = commonDenom / g;
      listSteps.push(`Bước 4: Rút gọn phân số bằng GCD(${sumNumer}, ${commonDenom}) = ${g} ➔ Kết quả = ${finalN}/${finalD}`);
      
      setMathResult(`${finalN}/${finalD}`);
      setSteps(listSteps);
    } else if (activeOp === "MINUS") {
      const diffNumer = term1 - term2;
      listSteps.push(`Bước 1: Quy đồng mẫu số ➔ Mẫu chung = ${d1} * ${d2} = ${commonDenom}`);
      listSteps.push(`Bước 2: Quy đồng tử số ➔ Tử 1 = ${n1} * ${d2} = ${term1}, Tử 2 = ${n2} * ${d1} = ${term2}`);
      listSteps.push(`Bước 3: Trừ tử số ➔ ${term1} - ${term2} = ${diffNumer}`);
      
      const g = gcd(diffNumer, commonDenom);
      const finalN = diffNumer / g;
      const finalD = commonDenom / g;
      listSteps.push(`Bước 4: Rút gọn phân số bằng GCD(${diffNumer}, ${commonDenom}) = ${g} ➔ Kết quả = ${finalN}/${finalD}`);
      
      setMathResult(`${finalN}/${finalD}`);
      setSteps(listSteps);
    } else if (activeOp === "TIMES") {
      const multNumer = n1 * n2;
      const multDenom = d1 * d2;
      listSteps.push(`Bước 1: Nhân hai tử số ➔ ${n1} * ${n2} = ${multNumer}`);
      listSteps.push(`Bước 2: Nhân hai mẫu số ➔ ${d1} * ${d2} = ${multDenom}`);
      
      const g = gcd(multNumer, multDenom);
      const finalN = multNumer / g;
      const finalD = multDenom / g;
      listSteps.push(`Bước 3: Rút gọn phân số bằng GCD(${multNumer}, ${multDenom}) = ${g} ➔ Kết quả = ${finalN}/${finalD}`);
      
      setMathResult(`${finalN}/${finalD}`);
      setSteps(listSteps);
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-teal-400" />
            <span>Interactive Fraction Sandbox & Code Solver</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Nhập phân số để tính toán từng bước và xem code Java đã được điền hoàn chỉnh
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => setActiveTab("sandbox")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "sandbox" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sân Chơi Sandbox
          </button>
          <button
            onClick={() => setActiveTab("fraction-code")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "fraction-code" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Fraction.java (Full)
          </button>
          <button
            onClick={() => setActiveTab("fraction-arr-code")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "fraction-arr-code" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            FractionArr.java (Full)
          </button>
        </div>
      </div>

      {activeTab === "sandbox" ? (
        /* Sandbox tab content */
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-4 font-mono">
                  Tham số đầu vào
                </span>

                <div className="space-y-4 font-mono text-xs">
                  {/* Fraction 1 */}
                  <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-850">
                    <div className="flex justify-between items-center mb-2 text-[10px] text-teal-400 font-bold">
                      <span>PHÂN SỐ f1</span>
                      <span>({n1}/{d1})</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-slate-500 block mb-1">Tử số (n1):</label>
                        <input
                          type="number"
                          value={n1}
                          onChange={(e) => setN1(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-center font-bold text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 block mb-1">Mẫu số (d1):</label>
                        <input
                          type="number"
                          value={d1}
                          onChange={(e) => setD1(parseInt(e.target.value) || 1)}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-center font-bold text-slate-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fraction 2 */}
                  <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-850">
                    <div className="flex justify-between items-center mb-2 text-[10px] text-teal-400 font-bold">
                      <span>PHÂN SỐ f2</span>
                      <span>({n2}/{d2})</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-slate-500 block mb-1">Tử số (n2):</label>
                        <input
                          type="number"
                          value={n2}
                          onChange={(e) => setN2(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-center font-bold text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 block mb-1">Mẫu số (d2):</label>
                        <input
                          type="number"
                          value={d2}
                          onChange={(e) => setD2(parseInt(e.target.value) || 1)}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-center font-bold text-slate-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setActiveOp("SIMPLIFY"); setTimeout(runCalculation, 50); }}
                  className="px-3 py-2 bg-slate-850 hover:bg-slate-800 text-[10px] font-bold rounded border border-slate-800 transition-all text-slate-300"
                >
                  Rút Gọn f1
                </button>
                <button
                  onClick={() => { setActiveOp("ADD"); setTimeout(runCalculation, 50); }}
                  className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-[10px] font-bold rounded text-white shadow shadow-teal-500/10 transition-all"
                >
                  Phép Cộng (+)
                </button>
                <button
                  onClick={() => { setActiveOp("MINUS"); setTimeout(runCalculation, 50); }}
                  className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-[10px] font-bold rounded text-white shadow shadow-teal-500/10 transition-all"
                >
                  Phép Trừ (-)
                </button>
                <button
                  onClick={() => { setActiveOp("TIMES"); setTimeout(runCalculation, 50); }}
                  className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-[10px] font-bold rounded text-white shadow shadow-teal-500/10 transition-all"
                >
                  Phép Nhân (*)
                </button>
              </div>
            </div>

            {/* Calculations and Output */}
            <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-4 font-mono">
                  Các bước tính toán chi tiết
                </span>

                <div className="space-y-2.5 font-mono text-[11px] text-slate-400">
                  {steps.length > 0 ? (
                    steps.map((s, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-850 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10 text-slate-600">
                      Vui lòng thiết lập thông số và bấm chọn phép toán để xem phân tích.
                    </div>
                  )}
                </div>
              </div>

              {mathResult && (
                <div className="mt-4 p-4 bg-teal-950/20 border border-teal-900/40 rounded-lg flex justify-between items-center font-mono">
                  <span className="text-xs text-teal-400 font-bold">KẾT QUẢ CUỐI CÙNG:</span>
                  <span className="text-lg font-bold text-white tracking-wide">{mathResult}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : activeTab === "fraction-code" ? (
        /* Fraction.java Full code tab */
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 relative">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
            Fraction.java (Hoàn chỉnh - Đáp án phần tự điền)
          </span>
          <pre className="p-4 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-300 overflow-y-auto max-h-[450px]">
{`class Fraction implements FractionI {
    private int numer;
    private int denom;
    
    public Fraction() { this(1, 1); }
    
    public Fraction(int numer, int denom) {
        setNumer(numer);
        setDenom(denom);
    }
    
    public int getNumer() { return this.numer; }
    public int getDenom() { return this.denom; }
    
    public void setNumer(int numer) { this.numer = numer; }
    
    public void setDenom(int denom) {
        if (denom == 0) {
            throw new IllegalArgumentException("Mẫu số không được bằng 0!");
        }
        this.denom = denom;
    }
    
    private static int gcd(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        int rem;
        while (b > 0) {
            rem = a % b;
            a = b;
            b = rem;
        }
        return a;
    }
    
    public FractionI simplify() {
        int g = gcd(numer, denom);
        // Bảo toàn dấu ở tử số
        int sign = (numer * denom < 0) ? -1 : 1;
        return new Fraction(sign * Math.abs(numer) / g, Math.abs(denom) / g);
    }
    
    public FractionI add(FractionI f) {
        int n = this.numer * f.getDenom() + f.getNumer() * this.denom;
        int d = this.denom * f.getDenom();
        return new Fraction(n, d).simplify();
    }
    
    public FractionI minus(FractionI f) {
        int n = this.numer * f.getDenom() - f.getNumer() * this.denom;
        int d = this.denom * f.getDenom();
        return new Fraction(n, d).simplify();
    }
    
    public FractionI times(FractionI f) {
        int n = this.numer * f.getNumer();
        int d = this.denom * f.getDenom();
        return new Fraction(n, d).simplify();
    }
    
    @Override
    public String toString() {
        return numer + "/" + denom;
    }
    
    @Override
    public boolean equals(Object o) {
        if (o instanceof FractionI) {
            FractionI f = (FractionI) o;
            FractionI s1 = this.simplify();
            FractionI s2 = f.simplify();
            return s1.getNumer() == s2.getNumer() && s1.getDenom() == s2.getDenom();
        }
        return false;
    }
}`}
          </pre>
        </div>
      ) : (
        /* FractionArr.java Full code tab */
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 relative">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
            FractionArr.java (Hoàn chỉnh - Đáp án phần tự điền)
          </span>
          <pre className="p-4 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-300 overflow-y-auto max-h-[450px]">
{`class FractionArr implements FractionI {
    private int[] members;
    
    public FractionArr() { this(1, 1); }
    
    public FractionArr(int numer, int denom) {
        members = new int[2];
        setNumer(numer);
        setDenom(denom);
    }
    
    public int getNumer() { return this.members[0]; }
    public int getDenom() { return this.members[1]; }
    
    public void setNumer(int numer) { this.members[0] = numer; }
    
    public void setDenom(int denom) {
        if (denom == 0) {
            throw new IllegalArgumentException("Mẫu số không được bằng 0!");
        }
        this.members[1] = denom;
    }
    
    private static int gcd(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        int rem;
        while (b > 0) {
            rem = a % b;
            a = b;
            b = rem;
        }
        return a;
    }
    
    public FractionI simplify() {
        int g = gcd(members[0], members[1]);
        int sign = (members[0] * members[1] < 0) ? -1 : 1;
        return new FractionArr(sign * Math.abs(members[0]) / g, Math.abs(members[1]) / g);
    }
    
    public FractionI add(FractionI f) {
        int n = this.getNumer() * f.getDenom() + f.getNumer() * this.getDenom();
        int d = this.getDenom() * f.getDenom();
        return new FractionArr(n, d).simplify();
    }
    
    public FractionI minus(FractionI f) {
        int n = this.getNumer() * f.getDenom() - f.getNumer() * this.getDenom();
        int d = this.getDenom() * f.getDenom();
        return new FractionArr(n, d).simplify();
    }
    
    public FractionI times(FractionI f) {
        int n = this.getNumer() * f.getNumer();
        int d = this.getDenom() * f.getDenom();
        return new FractionArr(n, d).simplify();
    }
    
    @Override
    public String toString() {
        return getNumer() + "/" + getDenom();
    }
    
    @Override
    public boolean equals(Object o) {
        if (o instanceof FractionI) {
            FractionI f = (FractionI) o;
            FractionI s1 = this.simplify();
            FractionI s2 = f.simplify();
            return s1.getNumer() == s2.getNumer() && s1.getDenom() == s2.getDenom();
        }
        return false;
    }
}`}
          </pre>
        </div>
      )}
    </div>
  );
}
