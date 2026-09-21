"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";

const CTA_COPY = {
  guest: {
    label: "Bắt đầu học",
    note: "Đăng nhập hoặc tạo tài khoản để bước vào không gian học.",
  },
  learner: {
    label: "Khám phá môn học",
    note: "Chọn môn học phù hợp với mục tiêu hôm nay.",
  },
  admin: {
    label: "Vào quản trị",
    note: "Mở dashboard quản trị theo đúng quyền hiện tại.",
  },
};

export default function Scene06CTA({ viewerRole, onPrimaryAction }) {
  const copy = CTA_COPY[viewerRole] || CTA_COPY.guest;

  return (
    <section
      id="home-s06"
      className="home-story-section home-story-section--final"
      aria-labelledby="home-s06-title"
      data-testid="home-s06"
    >
      <div className="home-copy home-copy--final home-scene-reveal">
        <p className="home-eyebrow">Bắt đầu hành trình · 06</p>
        <h2 id="home-s06-title">Bắt đầu từ điều bạn muốn hiểu hôm nay.</h2>
        <p className="home-lede">
          Đọc khái niệm, quan sát cấu trúc rồi tự kiểm chứng bằng công cụ phù hợp.
          StudyMaster giữ ba bước đó trong cùng một luồng học.
        </p>
        <div className="home-final-card">
          <ShieldCheck size={22} aria-hidden="true" />
          <div><strong>Đích đến theo quyền truy cập</strong><span>{copy.note}</span></div>
        </div>
        <button
          type="button"
          className="home-button home-button--primary"
          onClick={onPrimaryAction}
          data-testid="home-final-cta"
          data-viewer-role={viewerRole}
        >
          {copy.label}
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
