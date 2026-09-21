"use client";

import { ArrowRight, Braces, Pause, RotateCcw, SkipForward } from "lucide-react";

const VERIFIED_ACTIONS = [
  { icon: Braces, label: "Nhập mảng ví dụ" },
  { icon: Pause, label: "Chạy / tạm dừng" },
  { icon: SkipForward, label: "Tiến từng bước" },
];

export default function Scene05Tools({ onOpenBubbleSort, onOpenDiagram }) {
  return (
    <section
      id="home-s05"
      className="home-story-section home-story-section--tools"
      aria-labelledby="home-s05-title"
      data-testid="home-s05"
    >
      <div className="home-copy home-copy--wide home-scene-reveal">
        <p className="home-eyebrow">Từ quan sát tới công cụ · 05</p>
        <h2 id="home-s05-title">Thử lại bằng công cụ học đang có thật.</h2>
        <p className="home-lede">
          Bản xem cô lập bên dưới mô phỏng đúng ba thao tác đang có trong Bubble Sort Lab;
          đây không phải một bộ điều khiển thứ hai.
        </p>

        <div className="home-tool-preview" aria-label="Minh họa giao diện Bubble Sort Lab">
          <div className="home-tool-preview__bar">
            <span className="home-demo-label">Minh họa</span>
            <strong>Bubble Sort Lab</strong>
            <span className="home-tool-preview__status">[3, 1, 2]</span>
          </div>
          <div className="home-tool-preview__stage" aria-hidden="true">
            <span style={{ "--bar-height": "76%" }}>3</span>
            <span style={{ "--bar-height": "34%" }}>1</span>
            <span style={{ "--bar-height": "55%" }}>2</span>
          </div>
          <ul className="home-tool-preview__actions">
            {VERIFIED_ACTIONS.map(({ icon: Icon, label }) => (
              <li key={label}><Icon size={15} aria-hidden="true" />{label}</li>
            ))}
          </ul>
          <div className="home-tool-preview__hint"><RotateCcw size={14} aria-hidden="true" /> Đặt lại cũng có trong lab thật.</div>
        </div>

        <div className="home-actions">
          <button type="button" className="home-button home-button--primary" onClick={onOpenBubbleSort}>
            Mở Bubble Sort Lab <ArrowRight size={17} aria-hidden="true" />
          </button>
          <button type="button" className="home-button home-button--secondary" onClick={onOpenDiagram}>
            Xem thư viện sơ đồ
          </button>
        </div>
      </div>
    </section>
  );
}
