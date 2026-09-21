"use client";

import { ArrowRight, Check, MoveRight } from "lucide-react";

const TRACE = [
  {
    id: "initial",
    label: "Bắt đầu",
    array: [3, 1, 2],
    detail: "So sánh 3 với 1",
  },
  {
    id: "swap-01",
    label: "Đổi chỗ lần 1",
    array: [1, 3, 2],
    detail: "3 > 1 nên hai khối đổi vị trí",
  },
  {
    id: "swap-02",
    label: "Đổi chỗ lần 2",
    array: [1, 2, 3],
    detail: "3 > 2; số 3 đã về đúng chỗ",
  },
  {
    id: "early-exit",
    label: "Kiểm tra lượt mới",
    array: [1, 2, 3],
    detail: "1 ≤ 2, không đổi chỗ nên kết thúc sớm",
  },
];

export default function Scene03Algorithm({ onOpenBubbleSort }) {
  return (
    <section
      id="home-s03"
      className="home-story-section home-story-section--algorithm"
      aria-labelledby="home-s03-title"
      data-testid="home-s03"
    >
      <div className="home-copy home-copy--wide home-scene-reveal">
        <p className="home-eyebrow">Theo dấu dữ liệu · 03</p>
        <h2 id="home-s03-title">Theo dõi hai phần tử đổi chỗ để hiểu cách sắp xếp.</h2>
        <p className="home-lede">
          Mỗi khối giữ nguyên con số của mình. Khi cuộn, cặp đang được so sánh sáng lên,
          di chuyển sang vị trí mới rồi đứng yên khi đã đúng thứ tự.
        </p>

        <ol className="home-sort-trace" aria-label="Các bước Bubble Sort cho mảng 3, 1, 2">
          {TRACE.map((step, index) => (
            <li key={step.id} data-trace-step={step.id}>
              <div className="home-sort-trace__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.label}</strong>
              </div>
              <div className="home-sort-blocks" aria-label={`[${step.array.join(", ")}]`}>
                {step.array.map((value, valueIndex) => (
                  <span
                    key={`${step.id}-${valueIndex}`}
                    className={step.id === "early-exit" ? "is-locked" : ""}
                  >
                    {value}
                  </span>
                ))}
              </div>
              <p>{step.detail}</p>
              {index < TRACE.length - 1 ? <MoveRight aria-hidden="true" /> : <Check aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <button
          type="button"
          className="home-button home-button--primary"
          onClick={onOpenBubbleSort}
          data-testid="home-open-bubble-sort"
        >
          Xem Bubble Sort
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
