"use client";

import { ArrowDown, ArrowRight, LogIn } from "lucide-react";
import Scene03Algorithm from "./scenes/Scene03Algorithm";
import Scene04Diagram from "./scenes/Scene04Diagram";
import Scene05Tools from "./scenes/Scene05Tools";
import Scene06CTA from "./scenes/Scene06CTA";

const CHAPTERS = [
  ["study-story-s01", "Mở đầu"],
  ["home-s02", "Kiến thức"],
  ["home-s03", "Thuật toán"],
  ["home-s04", "Sơ đồ"],
  ["home-s05", "Công cụ"],
  ["home-s06", "Bắt đầu"],
];

export default function HomeContent({
  activeScene,
  onJumpScene,
  onOpenAuth,
  onExplore,
  onOpenBubbleSort,
  onOpenDiagram,
  onPrimaryAction,
  reducedMotion,
  viewerRole,
}) {
  return (
    <>
      <header className="home-nav" aria-label="Điều hướng trang giới thiệu">
        <a className="home-brand" href="#study-story-s01" aria-label="StudyMaster — về đầu trang">
          <span className="home-brand__mark" aria-hidden="true">{"\u264B\uFE0E"}</span>
          <span>StudyMaster</span>
        </a>
        <nav className="home-chapters" aria-label="Các chương trong câu chuyện">
          {CHAPTERS.map(([id, label], index) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={`${String(index + 1).padStart(2, "0")} · ${label}`}
              aria-current={activeScene === id ? "step" : undefined}
              onClick={(event) => {
                event.preventDefault();
                onJumpScene(id);
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="home-nav__login"
          onClick={onOpenAuth}
          data-testid="home-login"
        >
          <LogIn size={16} aria-hidden="true" />
          Đăng nhập
        </button>
      </header>

      <section
        id="study-story-s01"
        className="home-story-section home-story-section--hero"
        aria-labelledby="home-s01-title"
        data-testid="home-s01"
      >
        <div className="home-copy home-copy--hero">
          <p className="home-eyebrow">Cỗ máy tri thức Cự Giải · 01</p>
          <h1 id="home-s01-title">Hiểu kiến thức.<br />Nhìn thấy cách nó vận hành.</h1>
          <p className="home-lede">
            StudyMaster kết nối bài học, mô phỏng thuật toán và sơ đồ trực quan
            trong một không gian học tập mạch lạc.
          </p>
          <div className="home-actions" aria-label="Bắt đầu với StudyMaster">
            <button
              type="button"
              className="home-button home-button--primary"
              onClick={onOpenAuth}
              data-testid="home-start-learning"
            >
              Bắt đầu học
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="home-button home-button--secondary"
              onClick={onExplore}
              data-testid="home-explore"
            >
              Khám phá StudyMaster
              <ArrowDown size={17} aria-hidden="true" />
            </button>
          </div>
          <p className="home-motion-note">
            {reducedMotion
              ? "Chế độ giảm chuyển động đang được tôn trọng."
              : "Cuộn để mở không gian tri thức."}
          </p>
        </div>
      </section>

      <section
        id="home-s02"
        className="home-story-section home-story-section--knowledge"
        aria-labelledby="home-s02-title"
        data-testid="home-s02"
      >
        <div className="home-copy home-copy--knowledge">
          <p className="home-eyebrow">Mở không gian kiến thức · 02</p>
          <h2 id="home-s02-title">Từ từng chủ đề đến cấu trúc dễ khám phá.</h2>
          <p className="home-lede">
            Mỗi khái niệm được đặt trong đúng mối liên hệ: đọc để hiểu, quan sát
            chuyển động và bước vào công cụ học thật.
          </p>
          <ul className="home-knowledge-track" aria-label="Ba lớp khám phá kiến thức">
            <li><span>01</span><strong>Khái niệm</strong><small>Nắm điều cốt lõi</small></li>
            <li><span>02</span><strong>Cấu trúc</strong><small>Thấy các mối nối</small></li>
            <li><span>03</span><strong>Thực hành</strong><small>Kiểm chứng từng bước</small></li>
          </ul>
          <button
            type="button"
            className="home-button home-button--primary"
            onClick={onOpenAuth}
            data-testid="home-s02-start"
          >
            Bắt đầu học
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <div className="home-data-bridge" aria-label="Chuyển từ cấu trúc kiến thức sang dữ liệu mô phỏng">
            <span>Khối dữ liệu tiếp theo</span>
            <div><strong>3</strong><strong>1</strong><strong>2</strong></div>
            <small>Cuộn tiếp để theo dấu Bubble Sort</small>
          </div>
        </div>
      </section>

      <Scene03Algorithm onOpenBubbleSort={onOpenBubbleSort} />
      <Scene04Diagram onOpenDiagram={onOpenDiagram} />
      <Scene05Tools onOpenBubbleSort={onOpenBubbleSort} onOpenDiagram={onOpenDiagram} />
      <Scene06CTA viewerRole={viewerRole} onPrimaryAction={onPrimaryAction} />
    </>
  );
}
