"use client";
import React, { useState } from "react";

export default function ConceptQuiz() {
  const quizData = [
    {
      id: 1,
      title: "Câu 1: String vs int[]: output là gì?",
      code: `static void change(String s, int[] arr) {
    s = "World";    // Gán String mới
    arr[0] = 99;    // Sửa phần tử của mảng
}

public static void main(String[] args) {
    String msg = "Hello";
    int[] nums = {1, 2, 3};
    change(msg, nums);
    System.out.println(msg + " " + nums[0]);
}`,
      options: [
        { label: "A. Hello 1", val: "A" },
        { label: "B. World 99", val: "B" },
        { label: "C. Hello 99", val: "C" },
        { label: "D. World 1", val: "D" }
      ],
      correct: "C",
      explanation: `<b>Giải thích cơ chế:</b>
<ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
  <li><b>Với String:</b> Vì String là bất biến (immutable), nên phép gán <code>s = "World"</code> thực chất là tạo ra đối tượng String mới và gán cho tham chiếu bản sao cục bộ <code>s</code>. Biến gốc <code>msg</code> ở ngoài hàm vẫn trỏ đến "Hello".</li>
  <li><b>Với mảng int[]:</b> Tham chiếu bản sao <code>arr</code> trỏ đến cùng vùng nhớ mảng với <code>nums</code>. Phép gán <code>arr[0] = 99</code> thay đổi trực tiếp nội dung bên trong vùng nhớ chung đó.</li>
</ul>
<div class="mt-2.5 bg-green-50 text-green-800 p-2 rounded border border-green-150 text-xs font-semibold">
  ✔ Đáp án đúng: C — In ra "Hello 99"
</div>`
    },
    {
      id: 2,
      title: "Câu 2: Gán mảng mới trong hàm: output là gì?",
      code: `static void reset(int[] arr) {
    arr = new int[]{0, 0, 0}; // Tạo mảng MỚI
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3};
    reset(nums);
    System.out.println(nums[0]);
}`,
      options: [
        { label: "A. 0", val: "A" },
        { label: "B. 1", val: "B" },
        { label: "C. null", val: "C" },
        { label: "D. Lỗi runtime", val: "D" }
      ],
      correct: "B",
      explanation: `<b>Giải thích cơ chế:</b>
<ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
  <li>Tham số <code>arr</code> nhận <b>bản sao của địa chỉ tham chiếu</b> trỏ đến mảng <code>nums</code>.</li>
  <li>Lệnh <code>arr = new int[]{0, 0, 0}</code> gán một đối tượng mảng mới cho tham chiếu cục bộ <code>arr</code>. Điều này chỉ làm cho <code>arr</code> trỏ đi nơi khác, địa chỉ của mảng gốc <code>nums</code> bên ngoài không bị thay đổi và vẫn giữ nguyên giá trị <code>{1, 2, 3}</code>.</li>
</ul>
<div class="mt-2.5 bg-green-50 text-green-800 p-2 rounded border border-green-150 text-xs font-semibold">
  ✔ Đáp án đúng: B — In ra 1 (nums không đổi)
</div>`
    },
    {
      id: 3,
      title: "Câu 3: StringBuilder vs String: output là gì?",
      code: `static void appendStr(String s) {
    s += " World"; // String bất biến -> tạo object mới
}
static void appendSB(StringBuilder sb) {
    sb.append(" World"); // StringBuilder khả biến -> sửa gốc
}

public static void main(String[] args) {
    String s = "Hello";
    StringBuilder sb = new StringBuilder("Hello");
    appendStr(s);
    appendSB(sb);
    System.out.println(s);
    System.out.println(sb);
}`,
      options: [
        { label: "A. Hello World / Hello World", val: "A" },
        { label: "B. Hello / Hello", val: "B" },
        { label: "C. Hello / Hello World", val: "C" },
        { label: "D. Hello World / Hello", val: "D" }
      ],
      correct: "C",
      explanation: `<b>Giải thích cơ chế:</b>
<ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
  <li><b>String là Immutable:</b> Phép nối chuỗi <code>s += " World"</code> bản chất là gán lại một String mới cho tham số bản sao <code>s</code> trong hàm. Chuỗi gốc ngoài hàm vẫn là "Hello".</li>
  <li><b>StringBuilder là Mutable:</b> Lời gọi <code>sb.append()</code> sửa đổi trực tiếp nội dung bộ đệm của đối tượng gốc mà tham chiếu bản sao đang đồng trỏ đến.</li>
</ul>
<div class="mt-2.5 bg-green-50 text-green-800 p-2 rounded border border-green-150 text-xs font-semibold">
  ✔ Đáp án đúng: C — In ra s=Hello và sb=Hello World
</div>`
    },
    {
      id: 4,
      title: "Câu 4: Swap hai biến primitive int: có hoạt động không?",
      code: `static void swap(int x, int y) {
    int tmp = x;
    x = y;
    y = tmp;
}

public static void main(String[] args) {
    int a = 5, b = 9;
    swap(a, b);
    System.out.println(a + " " + b);
}`,
      options: [
        { label: "A. 9 5 (hoán đổi thành công)", val: "A" },
        { label: "B. 5 9 (hoán đổi THẤT BẠI)", val: "B" },
        { label: "C. 0 0", val: "C" },
        { label: "D. Lỗi biên dịch", val: "D" }
      ],
      correct: "B",
      explanation: `<b>Giải thích cơ chế:</b>
<ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
  <li>Kiểu dữ liệu nguyên thuỷ (primitive như <code>int</code>, <code>double</code>,...) luôn được truyền hoàn toàn bằng giá trị (Pass by Value).</li>
  <li>Hàm <code>swap</code> nhận bản copy các số nguyên 5 và 9. Việc tráo đổi <code>x</code> và <code>y</code> trong hàm chỉ hoán đổi 2 bản copy cục bộ trên Stack, hoàn toàn không làm đổi giá trị <code>a</code> và <code>b</code> trong hàm <code>main()</code>.</li>
</ul>
<div class="mt-2.5 bg-green-50 text-green-800 p-2 rounded border border-green-150 text-xs font-semibold">
  ✔ Đáp án đúng: B — In ra 5 9 (swap THẤT BẠI)
</div>`
    },
    {
      id: 5,
      title: "Câu 5: Object tự tạo: output là gì?",
      code: `static class Box {
    int value;
    Box(int v) { this.value = v; }
}

static void modify(Box b) {
    b.value = 99;       // Sửa thuộc tính của object gốc
    b = new Box(0);     // Cho b trỏ sang object MỚI
    b.value = 777;      // Sửa object mới
}

public static void main(String[] args) {
    Box box = new Box(10);
    modify(box);
    System.out.println(box.value);
}`,
      options: [
        { label: "A. 10", val: "A" },
        { label: "B. 99", val: "B" },
        { label: "C. 0", val: "C" },
        { label: "D. 777", val: "D" }
      ],
      correct: "B",
      explanation: `<b>Giải thích cơ chế:</b>
<ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
  <li>Bước 1: <code>b</code> nhận copy tham chiếu của <code>box</code>, cả hai cùng trỏ đến vùng nhớ của đối tượng ban đầu.</li>
  <li>Bước 2: <code>b.value = 99</code> sửa trường <code>value</code> của đối tượng ban đầu qua tham chiếu chung, làm giá trị đổi thành 99.</li>
  <li>Bước 3: <code>b = new Box(0)</code> đổi tham chiếu cục bộ <code>b</code> trỏ sang vùng nhớ đối tượng mới. Từ lúc này, mọi thao tác trên <code>b</code> không liên quan gì đến <code>box</code> ban đầu nữa. Kết quả cuối cùng vẫn là 99.</li>
</ul>
<div class="mt-2.5 bg-green-50 text-green-800 p-2 rounded border border-green-150 text-xs font-semibold">
  ✔ Đáp án đúng: B — In ra 99
</div>`
    },
    {
      id: 6,
      title: "Câu 6: ArrayList trong hàm: output là gì?",
      code: `static void process(ArrayList<Integer> list) {
    list.add(4);            // Thêm vào list GỐC
    list = new ArrayList<>(); // list trỏ sang list MỚI
    list.add(99);           // Thêm vào list MỚI
}

public static void main(String[] args) {
    ArrayList<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3));
    process(nums);
    System.out.println(nums);
}`,
      options: [
        { label: "A. [1, 2, 3]", val: "A" },
        { label: "B. [1, 2, 3, 4]", val: "B" },
        { label: "C. [1, 2, 3, 99]", val: "C" },
        { label: "D. [1, 2, 3, 4, 99]", val: "D" }
      ],
      correct: "B",
      explanation: `<b>Giải thích cơ chế:</b>
<ul class="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
  <li>Tương tự như mảng hay object thông thường, <code>list.add(4)</code> được thực hiện qua địa chỉ tham chiếu copy, làm thay đổi trực tiếp danh sách <code>nums</code> gốc.</li>
  <li>Lệnh <code>list = new ArrayList<>()</code> ngắt liên kết của tham chiếu bản sao cục bộ <code>list</code> khỏi đối tượng gốc và trỏ đến đối tượng rỗng mới tạo. Do đó <code>list.add(99)</code> chỉ thay đổi danh sách mới này.</li>
</ul>
<div class="mt-2.5 bg-green-50 text-green-800 p-2 rounded border border-green-150 text-xs font-semibold">
  ✔ Đáp án đúng: B — In ra [1, 2, 3, 4]
</div>`
    }
  ];

  const [answers, setAnswers] = useState({}); // Stores selected answers (e.g. {1: 'C', 2: 'B'})
  const [showExplanations, setShowExplanations] = useState({}); // Stores explanation state (e.g. {1: true})

  const handleSelect = (questionId, optionVal) => {
    // Only allow selecting once
    if (answers[questionId]) return;

    setAnswers(prev => ({
      ...prev,
      [questionId]: optionVal
    }));

    // Auto expand explanation on selection
    setShowExplanations(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const getOptionClass = (q, opt) => {
    const selected = answers[q.id];
    if (!selected) {
      return "border-stone-200 hover:border-accent bg-white text-stone-750 hover:bg-stone-50 cursor-pointer";
    }

    const isCurrent = selected === opt.val;
    const isCorrect = opt.val === q.correct;

    if (isCorrect) {
      return "border-emerald-500 bg-emerald-50 text-emerald-800 font-bold pointer-events-none";
    }
    if (isCurrent && !isCorrect) {
      return "border-red-500 bg-red-50 text-red-800 font-bold pointer-events-none";
    }
    return "border-stone-150 bg-stone-50 text-stone-400 opacity-60 pointer-events-none";
  };

  const score = Object.keys(answers).filter(
    id => answers[id] === quizData.find(q => q.id === parseInt(id)).correct
  ).length;

  return (
    <div className="space-y-8 font-sans my-6">
      {/* Quiz Progress Dashboard */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            Trắc Nghiệm Thực Chiến: Bẫy Phỏng Vấn Java
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Đọc hiểu mã nguồn Java và đưa ra phán đoán kết quả đầu ra chính xác.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-stone-200 px-4.5 py-2 rounded-xl shadow-inner">
          <span className="text-xs font-bold text-stone-555">Tiến độ bài tập:</span>
          <span className="text-sm font-black font-mono text-accent">
            {Object.keys(answers).length} / 6
          </span>
          <div className="h-4 w-px bg-stone-200" />
          <span className="text-xs font-bold text-stone-555">Số câu đúng:</span>
          <span className="text-sm font-black font-mono text-emerald-600">
            {score}
          </span>
        </div>
      </div>

      {/* Vertical list of questions */}
      <div className="space-y-6">
        {quizData.map((q) => {
          const selectedAnswer = answers[q.id];
          const showExp = showExplanations[q.id];

          return (
            <div
              key={q.id}
              className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
            >
              {/* Question Title */}
              <div className="flex justify-between items-start gap-4">
                <h5 className="font-extrabold text-stone-850 text-sm md:text-base leading-snug">
                  {q.title}
                </h5>
                {selectedAnswer && (
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border whitespace-nowrap ${
                      selectedAnswer === q.correct
                        ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                        : "bg-red-100 text-red-700 border-red-200"
                    }`}
                  >
                    {selectedAnswer === q.correct ? "Đúng ✔" : "Sai ❌"}
                  </span>
                )}
              </div>

              {/* Code Snippet block */}
              <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4] select-text">
                <div className="px-4 py-1.5 bg-[#252526] border-b border-[#2d2d2d] text-[10px] font-mono text-[#858585] select-none">
                  java
                </div>
                <pre className="p-4 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{q.code}</code>
                </pre>
              </div>

              {/* Multiple Choice Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                {q.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(q.id, opt.val)}
                    className={`border p-3.5 rounded-xl text-xs text-left font-semibold transition-all duration-200 flex items-center gap-3 ${getOptionClass(
                      q,
                      opt
                    )}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-stone-300 flex justify-center items-center text-[10px] font-bold bg-stone-50 select-none shrink-0">
                      {opt.val}
                    </span>
                    <span className="leading-normal">{opt.label}</span>
                  </button>
                ))}
              </div>

              {/* Explanation block */}
              {showExp && (
                <div className="mt-2 bg-stone-50 border border-stone-200 rounded-xl p-4 animate-in fade-in duration-300">
                  <div className="text-[10px] text-stone-450 font-bold uppercase tracking-wider border-b border-stone-200 pb-1.5 mb-2.5 flex items-center gap-1.5">
                    <span>💡</span> Giải thích đáp án chi tiết
                  </div>
                  <div
                    className="text-xs text-stone-650 leading-relaxed font-sans"
                    dangerouslySetInnerHTML={{ __html: q.explanation }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
