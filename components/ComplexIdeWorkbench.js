"use client";
import React, { useState } from "react";
import { Play, FileCode, Terminal } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function ComplexIdeWorkbench() {
  const [activeFile, setActiveFile] = useState("Complex.java");
  const [showConsole, setShowConsole] = useState(false);

  const files = {
    "Complex.java": {
      type: "interface",
      badge: "INTERFACE (SPECIFICATION)",
      code: `// Complex.java - Interface định nghĩa các ADT operations
public interface Complex {
    public double realpart();  // returns this.real
    public double imagpart();  // returns this.imag
    public double angle();     // returns this.ang
    public double mag();       // returns this.mag
    public void add(Complex c);   // this = this + c
    public void minus(Complex c); // this = this - c
    public void times(Complex c); // this = this * c
}`
    },
    "ComplexCart.java": {
      type: "class",
      badge: "IMPLEMENTATION #1 (CARTESIAN)",
      code: `// ComplexCart.java - Cài đặt theo Tọa độ Đề các (real, imag)
class ComplexCart implements Complex {
    private double real;
    private double imag;

    public ComplexCart(double r, double i) { real = r; imag = i; }

    public double realpart() { return real; }
    public double imagpart() { return imag; }
    public double mag() { return Math.sqrt(real*real + imag*imag); }
    public double angle() {
        if (real != 0) {
            if (real < 0) return (Math.PI + Math.atan(imag/real));
            else return Math.atan(imag/real);
        }
        else if (imag == 0) return 0;
        else if (imag > 0) return Math.PI/2;
        else return -Math.PI/2;
    }

    public void add(Complex c) {
        this.real += c.realpart();
        this.imag += c.imagpart();
    }

    public void minus(Complex c) {
        this.real -= c.realpart();
        this.imag -= c.imagpart();
    }

    public void times(Complex c) {
        double tempReal = real * c.realpart() - imag * c.imagpart();
        imag = real * c.imagpart() + imag * c.realpart();
        real = tempReal;
    }

    public String toString() {
        if (imag == 0) return (real + "");
        else if (imag < 0) return (real + "" + imag + "i");
        else return (real + "+" + imag + "i");
    }
}`
    },
    "ComplexPolar.java": {
      type: "class",
      badge: "IMPLEMENTATION #2 (POLAR)",
      code: `// ComplexPolar.java - Cài đặt theo Tọa độ Cực (mag, ang)
class ComplexPolar implements Complex {
    private double mag; // magnitude
    private double ang; // angle

    public ComplexPolar(double m, double a) { mag = m; ang = a; }

    public double realpart() { return mag * Math.cos(ang); }
    public double imagpart() { return mag * Math.sin(ang); }
    public double mag() { return mag; }
    public double angle() { return ang; }

    public void add(Complex c) {
        double real = this.realpart() + c.realpart();
        double imag = this.imagpart() + c.imagpart();
        mag = Math.sqrt(real*real + imag*imag);
        if (real != 0) {
            if (real < 0) ang = (Math.PI + Math.atan(imag/real));
            else ang = Math.atan(imag/real);
        }
        else if (imag == 0) ang = 0;
        else if (imag > 0) ang = Math.PI/2;
        else ang = -Math.PI/2;
    }

    public void minus(Complex c) {
        double real = mag * Math.cos(ang) - c.realpart();
        double imag = mag * Math.sin(ang) - c.imagpart();
        mag = Math.sqrt(real*real + imag*imag);
        if (real != 0) {
            if (real < 0) ang = (Math.PI + Math.atan(imag/real));
            else ang = Math.atan(imag/real);
        }
        else if (imag == 0) ang = 0;
        else if (imag > 0) ang = Math.PI/2;
        else ang = -Math.PI/2;
    }

    public void times(Complex c) {
        mag *= c.mag();
        ang += c.angle();
    }

    public String toString() {
        if (imagpart() == 0) return (realpart() + "");
        else if (imagpart() < 0) return (realpart() + "" + imagpart() + "i");
        else return (realpart() + "+" + imagpart() + "i");
    }
}`
    },
    "TestComplex.java": {
      type: "main",
      badge: "MAIN TEST PROGRAM",
      code: `// TestComplex.java - Chương trình kiểm thử đa hình (Polymorphism)
public class TestComplex {
    public static void main(String[] args) {
        // Testing ComplexCart
        Complex a = new ComplexCart(10.0, 12.0);
        Complex b = new ComplexCart(1.0, 2.0);

        System.out.println("Testing ComplexCart:");
        a.add(b);
        System.out.println("a=a+b is " + a);
        a.minus(b);
        System.out.println("a-b (which is the original a) is " + a);
        System.out.println("Angle of a is " + a.angle());
        a.times(b);
        System.out.println("a=a*b is " + a);

        // Testing ComplexPolar
        Complex c = new ComplexPolar(10.0, Math.PI/6.0);
        Complex d = new ComplexPolar(1.0, Math.PI/3.0);

        System.out.println("\\nTesting ComplexPolar:");
        System.out.println("c is " + c);
        System.out.println("d is " + d);
        c.add(d);
        System.out.println("c=c+d is " + c);
        c.minus(d);
        System.out.println("c-d (which is the original c) is " + c);
        c.times(d);
        System.out.println("c=c*d is " + c);

        // Testing Combined
        System.out.println("\\nTesting Combined:");
        System.out.println("a is " + a);
        System.out.println("d is " + d);
        a.minus(d);
        System.out.println("a=a-d is " + a);
        a.times(d);
        System.out.println("a=a*d is " + a);
        d.add(a);
        System.out.println("d=d+a is " + d);
        d.times(a);
        System.out.println("d=d*a is " + d);
    }
}`
    }
  };

  const sampleConsoleOutput = `Testing ComplexCart:
a=a+b is 11.0+14.0i
a-b (which is the original a) is 10.0+12.0i
Angle of a is 0.8760580505981934
a=a*b is -14.0+32.0i

Testing ComplexPolar:
c is 8.660254037844387+4.999999999999999i
d is 5.000000000000001+8.660254037844386i
c=c+d is 13.660254037844393+13.660254037844387i
c-d (which is the original c) is 8.660254037844393+5.0000000000000002i
c=c*d is 2.83276944823992E-14+100.00000000000007i

Testing Combined:
a is -14.0+32.0i
d is 5.000000000000001+8.660254037844386i
a=a-d is -19.0+23.339745962155614i
a=a*d is -297.1281292110204-47.84609690826524i
d=d+a is -292.12812921102045-39.18584287042089i
d=d*a is 84924.59488697552+25620.40696350589i`;

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              JAVA WORKBENCH
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Multi-file IDE Simulator: Complex Number ADT
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Minh họa kiến trúc đa tệp Java: Interface <code>Complex</code>, 2 lớp cài đặt (<code>ComplexCart</code>, <code>ComplexPolar</code>) và chương trình Test.
          </p>
        </div>

        <button
          onClick={() => setShowConsole(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>RUN TEST (TestComplex.java)</span>
        </button>
      </div>

      {/* IDE Tabs Header */}
      <div className="flex items-center justify-between bg-purple-50 px-3 py-2 rounded-t-xl border-t border-x border-purple-200">
        <div className="flex gap-1 overflow-x-auto">
          {Object.keys(files).map((fileName) => (
            <button
              key={fileName}
              onClick={() => setActiveFile(fileName)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                activeFile === fileName
                  ? "bg-white text-purple-700 border border-purple-200 shadow-sm"
                  : "text-slate-600 hover:text-purple-900 hover:bg-purple-100/50"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{fileName}</span>
            </button>
          ))}
        </div>

        <span className="text-[10px] font-mono font-bold text-purple-700 bg-white border border-purple-200 px-2 py-0.5 rounded shadow-sm hidden sm:inline-block">
          {files[activeFile].badge}
        </span>
      </div>

      {/* Code Editor Window */}
      <div className="bg-[#1e1e1e] p-4 rounded-b-xl border border-[#2d2d2d] font-mono text-xs text-[#d4d4d4] overflow-x-auto max-h-[380px] leading-relaxed flex">
        <div className="select-none text-[#555555] pr-4 border-r border-[#2d2d2d] text-right font-mono flex flex-col">
          {files[activeFile].code.split("\n").map((_, i) => (
            <span key={i} className="leading-relaxed">{i + 1}</span>
          ))}
        </div>
        <pre className="pl-4 font-mono whitespace-pre text-xs leading-relaxed overflow-x-auto flex-1">
          <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(files[activeFile].code) }} />
        </pre>
      </div>

      {/* Console Output Window */}
      {showConsole && (
        <div className="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-4 animate-in">
          <div className="flex justify-between items-center pb-2 mb-3 border-b border-slate-800 text-xs">
            <span className="font-mono font-bold text-purple-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              CONSOLE TERMINAL OUTPUT (TestComplex.main)
            </span>
            <button
              onClick={() => setShowConsole(false)}
              className="text-[10px] text-slate-400 hover:text-white font-mono"
            >
              Đóng Console ✕
            </button>
          </div>
          <pre className="font-mono text-xs text-emerald-400 overflow-x-auto max-h-60 leading-relaxed">
            {sampleConsoleOutput}
          </pre>
        </div>
      )}
    </div>
  );
}
