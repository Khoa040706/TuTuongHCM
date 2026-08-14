"use client";

import React, { useState } from "react";
import { Layers, Bookmark, Code2, ListOrdered, GitMerge, Search, Binary, Hash, Shuffle, ChevronDown, ChevronUp } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";
import LinkedListPrintComparator from "./LinkedListPrintComparator";
import TowersOfHanoiSimulator from "./TowersOfHanoiSimulator";
import BinarySearchVisualizer from "./BinarySearchVisualizer";
import PermutationGenerator from "./PermutationGenerator";

export default function RecursionExamplesGallery() {
  const [activeCategory, setActiveCategory] = useState("basic"); // "basic", "structures", "advanced"
  const [expandedEx, setExpandedEx] = useState("ex1");

  const toggleExpand = (id) => {
    setExpandedEx(expandedEx === id ? null : id);
  };

  const ex1Code = `public class CountDown {
    public static void countDown(int n) {
        if (n <= 0) // không dùng == (vì n có thể "nhảy" qua 0 nếu code sai)
            System.out.println("BLAST OFF!!!!");
        else {
            System.out.println("Count down at time " + n);
            countDown(n - 1);
        }
    }

    public static void main(String[] args) {
        countDown(10);
    }
}`;

  const ex2Code = `public static void displayInBase(int n, int base) {
    if (n > 0) {
        displayInBase(n / base, base); // Gọi đệ quy phần nguyên
        System.out.print(n % base);    // In phần dư
    }
}
// Precondition: base >= 2
// Ví dụ 1: n = 123, base = 10 -> kết quả: '123'
// Ví dụ 2: n = 123, base = 8  -> kết quả: '173'`;

  const ex5Code = `public static ListNode insert(ListNode p, int v) {
    // Tìm node đầu tiên có value lớn hơn v và chèn trước nó.
    // p là "head" của lần đệ quy hiện tại.
    // Trả về "head" sau khi đệ quy xong.
    if (p == null || v < p.element)
        return new ListNode(v, p);
    else {
        p.next = insert(p.next, v);
        return p;
    }
}
// Cách gọi: head = insert(head, newItem);`;

  const ex7Code = `public static int choose(int n, int k) {
    if (k > n) return 0;
    if (k == n || k == 0) return 1; // Base case
    return choose(n - 1, k - 1) + choose(n - 1, k); // Recursive call
}

// Ví dụ tính c(4,2):
// c(4,2) = c(3,1) + c(3,2)
// c(3,1) = c(2,0) + c(2,1) = 1 + (c(1,0)+c(1,1)) = 1 + (1+1) = 3
// c(3,2) = c(2,1) + c(2,2) = (c(1,0)+c(1,1)) + 1 = (1+1) + 1 = 3
// => c(4,2) = 3 + 3 = 6`;

  const ex9Code = `public static int kthSmallest(int k, int[] a) { // k >= 1
    // Chọn pivot p từ a[], partition thành left (<=p) và right (>p)
    int numLeft = sizeOf(left);

    if (k == numLeft) return p; // Tìm thấy pivot
    if (k < numLeft) {
        return kthSmallest(k, left); // Tìm trong nửa trái
    } else {
        return kthSmallest(k - numLeft, right); // Tìm trong nửa phải
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 3 — Các Ví Dụ Ứng Dụng (Examples)
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Thư Viện 10 Ví Dụ Thuật Toán Đệ Quy
          </h3>
          <p className="text-xs text-slate-500">
            Tổng hợp đầy đủ 10 bài toán kinh điển từ giáo trình, phân loại theo 3 nhóm chuyên đề
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto">
          {[
            { id: "basic", label: "1. Cơ bản (Ex 1-4)" },
            { id: "structures", label: "2. Cấu trúc (Ex 5-6)" },
            { id: "advanced", label: "3. Nâng cao (Ex 7-10)" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Basic Examples (1 to 4) */}
      {activeCategory === "basic" && (
        <div className="space-y-4">
          {/* Ex 1: Countdown */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex1")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center">
                  #1
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 1: Đếm ngược (Count Down)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Đệ quy đuôi (Tail Recursion)</span>
                </div>
              </div>
              {expandedEx === "ex1" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex1" && (
              <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-700 leading-relaxed">
                  • <strong>Base case:</strong> <code>n &lt;= 0</code> (không dùng <code>== 0</code> vì nếu bước nhảy sai có thể bỏ sót 0).<br/>
                  • <strong>Recursive case:</strong> In ra <code>n</code> rồi gọi đệ quy <code>countDown(n - 1)</code>.
                </div>
                <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(ex1Code) }} />
                </pre>
              </div>
            )}
          </div>

          {/* Ex 2: Display integer in base b */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex2")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center">
                  #2
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 2: Chuyển đổi Cơ số (Display Integer in Base b)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Đổi cơ số bằng đệ quy chia lấy dư</span>
                </div>
              </div>
              {expandedEx === "ex2" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex2" && (
              <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-700 leading-relaxed">
                  • <strong>Precondition:</strong> <code>base &gt;= 2</code>.<br/>
                  • <strong>Ý tưởng:</strong> Gọi đệ quy <code>displayInBase(n / base, base)</code> trước để in các chữ số cao, sau đó in phần dư <code>n % base</code> khi quay lui.
                </div>
                <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(ex2Code) }} />
                </pre>
              </div>
            )}
          </div>

          {/* Ex 3 & 4: Print Linked List */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex34")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center">
                  #3-4
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 3 &amp; 4: In Linked List Xuôi vs Ngược
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">So sánh thứ tự gọi lệnh và đệ quy</span>
                </div>
              </div>
              {expandedEx === "ex34" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex34" && (
              <div className="p-4 bg-white border-t border-slate-200">
                <LinkedListPrintComparator />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Structures & Classics (5 to 6) */}
      {activeCategory === "structures" && (
        <div className="space-y-4">
          {/* Ex 5: Sorted Linked List Insertion */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex5")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-violet-100 text-violet-700 font-mono font-bold text-xs flex items-center justify-center">
                  #5
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 5: Chèn Phần Tử Vào Sorted Linked List
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">3 trường hợp chèn có thứ tự</span>
                </div>
              </div>
              {expandedEx === "ex5" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex5" && (
              <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div><strong>Case 1 — Tail insertion:</strong> <code>p == null</code> ➔ chèn vào cuối list.</div>
                  <div><strong>Case 2 — Insert before p:</strong> <code>v &lt; p.element</code> ➔ chèn trước <code>p</code>.</div>
                  <div><strong>Case 3 — Insert after p:</strong> <code>v &gt;= p.element</code> ➔ đệ quy tiếp với <code>p.next</code>.</div>
                </div>
                <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(ex5Code) }} />
                </pre>
              </div>
            )}
          </div>

          {/* Ex 6: Towers of Hanoi */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex6")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-violet-100 text-violet-700 font-mono font-bold text-xs flex items-center justify-center">
                  #6
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 6: Tháp Hà Nội (Towers of Hanoi)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Bài toán đệ quy kinh điển O(2ⁿ)</span>
                </div>
              </div>
              {expandedEx === "ex6" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex6" && (
              <div className="p-4 bg-white border-t border-slate-200">
                <TowersOfHanoiSimulator />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Advanced Examples (7 to 10) */}
      {activeCategory === "advanced" && (
        <div className="space-y-4">
          {/* Ex 7: Combinations */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex7")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  #7
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 7: Tổ Hợp (Combinations — n choose k)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Tam giác Pascal đệ quy</span>
                </div>
              </div>
              {expandedEx === "ex7" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex7" && (
              <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-700 leading-relaxed">
                  • <strong>Ý tưởng:</strong> Xét phần tử X bất kỳ ➔ Có 2 trường hợp: X được chọn (chọn k-1 trong n-1 còn lại) hoặc X không được chọn (chọn k trong n-1 còn lại).<br/>
                  • <strong>Base case:</strong> <code>k == n || k == 0</code> ➔ trả về 1.
                </div>
                <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(ex7Code) }} />
                </pre>
              </div>
            )}
          </div>

          {/* Ex 8: Binary Search */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex8")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  #8
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 8: Tìm Kiếm Nhị Phân (Binary Search)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Độ phức tạp O(log n) &amp; Hàm phụ trợ</span>
                </div>
              </div>
              {expandedEx === "ex8" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex8" && (
              <div className="p-4 bg-white border-t border-slate-200">
                <BinarySearchVisualizer />
              </div>
            )}
          </div>

          {/* Ex 9: Kth Smallest */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex9")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  #9
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 9: Tìm Phần Tử Nhỏ Thứ K (Kth Smallest — QuickSelect)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Phân hoạch Pivot trong mảng chưa sắp xếp</span>
                </div>
              </div>
              {expandedEx === "ex9" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex9" && (
              <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-700 leading-relaxed">
                  • <strong>Ý tưởng:</strong> Chọn pivot <code>p</code>, partition mảng thành <code>left (&lt;= p)</code> và <code>right (&gt; p)</code>.<br/>
                  • So sánh <code>k</code> với <code>numLeft</code>:<br/>
                  &nbsp;&nbsp;- Nếu <code>k == numLeft</code> ➔ trả về <code>p</code>.<br/>
                  &nbsp;&nbsp;- Nếu <code>k &lt; numLeft</code> ➔ đệ quy tìm trong nửa <code>left</code>.<br/>
                  &nbsp;&nbsp;- Ngược lại ➔ đệ quy tìm phần tử thứ <code>k - numLeft</code> trong nửa <code>right</code>.
                </div>
                <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(ex9Code) }} />
                </pre>
              </div>
            )}
          </div>

          {/* Ex 10: Permutations */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleExpand("ex10")}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-pink-700 font-mono font-bold text-xs flex items-center justify-center">
                  #10
                </span>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900">
                    Example 10: Sinh Tất Cả Hoán Vị (Permutations)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Đệ quy sinh n! chuỗi hoán vị</span>
                </div>
              </div>
              {expandedEx === "ex10" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {expandedEx === "ex10" && (
              <div className="p-4 bg-white border-t border-slate-200">
                <PermutationGenerator />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
