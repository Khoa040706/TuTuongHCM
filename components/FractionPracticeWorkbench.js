"use client";
import React, { useState } from "react";
import { Code, Eye, EyeOff, Terminal, Play } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function FractionPracticeWorkbench() {
  const [activeTab, setActiveTab] = useState("ex26");
  const [showSolution, setShowSolution] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const ex26Skeleton = `// PracEx#26 - Fraction (dùng 2 biến int)
class Fraction implements FractionI {
    private int numer;
    private int denom;

    public Fraction() { this(1,1); }
    public Fraction(int numer, int denom) {
        setNumer(numer);
        setDenom(denom);
    }

    public void setNumer(int numer) { /* ... */ }
    public void setDenom(int denom) { /* ... */ }

    private static int gcd(int a, int b) {
        int rem;
        while (b > 0) {
            rem = a % b;
            a = b;
            b = rem;
        }
        return a;
    }

    public FractionI simplify() { // fill in the code }
    public FractionI add(FractionI f) { // fill in the code }
    public FractionI minus(FractionI f) { // fill in the code }
    public FractionI times(FractionI f) { // fill in the code }

    public String toString() { // fill in the code }
    public boolean equals(Object o) { // fill in the code }
}`;

  const ex26Solution = `// PracEx#26 - LỜI GIẢI HOÀN CHỈNH (Fraction.java)
class Fraction implements FractionI {
    private int numer;
    private int denom;

    public Fraction() { this(1,1); }
    public Fraction(int numer, int denom) {
        setNumer(numer);
        setDenom(denom);
    }

    public int getNumer() { return numer; }
    public int getDenom() { return denom; }
    public void setNumer(int numer) { this.numer = numer; }
    public void setDenom(int denom) { this.denom = (denom != 0) ? denom : 1; }

    private static int gcd(int a, int b) {
        int rem;
        int x = Math.abs(a), y = Math.abs(b);
        while (y > 0) {
            rem = x % y;
            x = y;
            y = rem;
        }
        return x;
    }

    public FractionI simplify() {
        int common = gcd(numer, denom);
        return new Fraction(numer / common, denom / common);
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

    public String toString() { return numer + "/" + denom; }

    public boolean equals(Object o) {
        if (o instanceof FractionI) {
            FractionI f = (FractionI) o;
            FractionI f1Simp = this.simplify();
            FractionI f2Simp = f.simplify();
            return f1Simp.getNumer() == f2Simp.getNumer() && f1Simp.getDenom() == f2Simp.getDenom();
        }
        return false;
    }
}`;

  const ex27Skeleton = `// PracEx#27 - FractionArr (dùng mảng int[2])
class FractionArr implements FractionI {
    private int[] members;

    public FractionArr() { this(1,1); }
    public FractionArr(int numer, int denom) {
        members = new int[2];
        setNumer(numer);
        setDenom(denom);
    }

    public int getNumer() { // fill in the code }
    public int getDenom() { // fill in the code }

    public void setNumer(int numer) { // fill in the code }
    public void setDenom(int denom) { // fill in the code }

    // các phương thức add, minus, times, simplify, toString, equals còn lại...
}`;

  const ex27Solution = `// PracEx#27 - LỜI GIẢI HOÀN CHỈNH (FractionArr.java)
class FractionArr implements FractionI {
    private int[] members;

    public FractionArr() { this(1,1); }
    public FractionArr(int numer, int denom) {
        members = new int[2];
        setNumer(numer);
        setDenom(denom);
    }

    public int getNumer() { return members[0]; }
    public int getDenom() { return members[1]; }
    public void setNumer(int numer) { members[0] = numer; }
    public void setDenom(int denom) { members[1] = (denom != 0) ? denom : 1; }

    private static int gcd(int a, int b) {
        int rem, x = Math.abs(a), y = Math.abs(b);
        while (y > 0) { rem = x % y; x = y; y = rem; }
        return x;
    }

    public FractionI simplify() {
        int common = gcd(getNumer(), getDenom());
        return new FractionArr(getNumer() / common, getDenom() / common);
    }

    public FractionI add(FractionI f) {
        int n = getNumer() * f.getDenom() + f.getNumer() * getDenom();
        int d = getDenom() * f.getDenom();
        return new FractionArr(n, d).simplify();
    }

    public FractionI minus(FractionI f) {
        int n = getNumer() * f.getDenom() - f.getNumer() * getDenom();
        int d = getDenom() * f.getDenom();
        return new FractionArr(n, d).simplify();
    }

    public FractionI times(FractionI f) {
        int n = getNumer() * f.getNumer();
        int d = getDenom() * f.getDenom();
        return new FractionArr(n, d).simplify();
    }

    public String toString() { return getNumer() + "/" + getDenom(); }
}`;

  const terminalOutput = `Enter 1st fraction: 2 4
Enter 2nd fraction: 2 3
1st fraction is 2/4
2nd fraction is 2/3
The fractions are not the same.
Sum is 7/6
Difference is -1/6
Product is 1/3`;

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              PRACEX#26 & #27 WORKBENCH
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Interactive Code Practice & Solution Workbench
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            So sánh 2 cách cài đặt <code>FractionI</code>: 2 biến int vs Mảng <code>int[2]</code>. Client code hoàn toàn không đổi!
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 border border-purple-300 text-purple-900 font-bold text-xs hover:bg-purple-200 transition-all shadow-sm"
          >
            {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showSolution ? "Ẩn Lời giải" : "Xem Lời giải Cài đặt"}</span>
          </button>

          <button
            onClick={() => setShowTerminal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>RUN CLIENT TEST</span>
          </button>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-t-xl border-t border-x border-purple-200 text-xs font-mono">
        <button
          onClick={() => setActiveTab("ex26")}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition-all ${
            activeTab === "ex26"
              ? "bg-white text-purple-900 border border-purple-200 shadow-sm"
              : "text-slate-600 hover:text-purple-900"
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>PracEx#26 (Fraction - 2 int)</span>
        </button>

        <button
          onClick={() => setActiveTab("ex27")}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition-all ${
            activeTab === "ex27"
              ? "bg-white text-indigo-900 border border-purple-200 shadow-sm"
              : "text-slate-600 hover:text-indigo-900"
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>PracEx#27 (FractionArr - int[2])</span>
        </button>
      </div>

      {/* Code Area */}
      {(() => {
        const codeToDisplay = activeTab === "ex26"
          ? showSolution ? ex26Solution : ex26Skeleton
          : showSolution ? ex27Solution : ex27Skeleton;
        return (
          <div className="bg-[#1e1e1e] p-4 rounded-b-xl border border-[#2d2d2d] font-mono text-xs text-[#d4d4d4] overflow-x-auto max-h-[380px] leading-relaxed flex">
            <div className="select-none text-[#555555] pr-4 border-r border-[#2d2d2d] text-right font-mono flex flex-col">
              {codeToDisplay.split("\n").map((_, i) => (
                <span key={i} className="leading-relaxed">{i + 1}</span>
              ))}
            </div>
            <pre className="pl-4 font-mono whitespace-pre text-xs leading-relaxed overflow-x-auto flex-1">
              <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeToDisplay) }} />
            </pre>
          </div>
        );
      })()}

      {/* Terminal Area */}
      {showTerminal && (
        <div className="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-4 animate-in">
          <div className="flex justify-between items-center pb-2 mb-3 border-b border-slate-800 text-xs">
            <span className="font-mono font-bold text-purple-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              TERMINAL OUTPUT (TestFraction.java / TestFractionArr.java)
            </span>
            <button
              onClick={() => setShowTerminal(false)}
              className="text-[10px] text-slate-400 hover:text-white font-mono"
            >
              Đóng Console ✕
            </button>
          </div>
          <pre className="font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
            {terminalOutput}
          </pre>
        </div>
      )}
    </div>
  );
}
