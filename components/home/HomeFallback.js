"use client";

import Image from "next/image";

export default function HomeFallback({ status = "loading" }) {
  const isError = status === "error" || status === "webgl-error";
  const title = isError ? "Chế độ xem nhẹ đang hoạt động" : "Đang mở mô hình Cự Giải";
  const detail = isError
    ? "Nội dung và các nút học vẫn dùng được bình thường."
    : "Nội dung học đã sẵn sàng trong khi mô hình được tải.";

  return (
    <div
      className={`home-visual-fallback home-visual-fallback--${status}`}
      data-testid={`home-model-${status}`}
      role="status"
      aria-live="polite"
    >
      <span className="home-visual-fallback__orbit" aria-hidden="true" />
      <Image
        src="/assets/home/cancer-knowledge-machine/cancer-machine-fallback.png"
        alt=""
        width={768}
        height={768}
        className="home-visual-fallback__mascot"
      />
      <div className="home-visual-fallback__copy">
        <strong>{title}</strong>
        <span>{detail}</span>
      </div>
    </div>
  );
}
