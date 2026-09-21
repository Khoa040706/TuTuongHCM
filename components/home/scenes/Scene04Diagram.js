"use client";

import { ArrowRight } from "lucide-react";
import {
  ATM_ACTIVITY_EDGES,
  ATM_ACTIVITY_NODES,
  ATM_GUARDS,
  ATM_SWIMLANES,
} from "../activity-diagram-data";

function ActivityNode({ node }) {
  const common = {
    className: `home-activity-node home-activity-node--${node.type}`,
    "data-node-id": node.id,
    "data-node-type": node.type,
    "data-lane": node.lane,
    role: "img",
    "aria-label": `${node.label} — ${node.type}`,
    transform: `translate(${node.x} ${node.y})`,
  };

  if (node.type === "initial") {
    return <g {...common}><circle r="10" /><title>{node.label}</title></g>;
  }
  if (node.type === "final") {
    return (
      <g {...common}>
        <circle r="12" className="home-activity-node__final-ring" />
        <circle r="7" />
        <title>{node.label}</title>
      </g>
    );
  }
  if (node.type === "decision") {
    return (
      <g {...common}>
        <path d="M0 -22 L22 0 L0 22 L-22 0 Z" />
        <title>{node.label}</title>
      </g>
    );
  }
  if (node.type === "fork" || node.type === "join") {
    return (
      <g {...common}>
        <rect x="-105" y="-4" width="210" height="8" rx="3" />
        <title>{node.label}</title>
      </g>
    );
  }

  return (
    <g {...common}>
      <rect x="-90" y="-22" width="180" height="44" rx="13" />
      <text textAnchor="middle" dominantBaseline="middle">{node.label}</text>
    </g>
  );
}

export default function Scene04Diagram({ onOpenDiagram }) {
  return (
    <section
      id="home-s04"
      className="home-story-section home-story-section--diagram"
      aria-labelledby="home-s04-title"
      data-testid="home-s04"
    >
      <div className="home-copy home-copy--diagram home-scene-reveal">
        <p className="home-eyebrow">Từ dữ liệu tới quy trình · 04</p>
        <h2 id="home-s04-title">Theo dấu một lần rút tiền qua từng bộ phận của ATM.</h2>
        <p className="home-lede">
          Mỗi bước nằm đúng làn trách nhiệm. Nút hình thoi đặt câu hỏi; chữ Y hoặc N trên
          từng nhánh cho biết luồng tiếp tục theo hướng nào.
        </p>

        <figure className="home-activity" data-testid="home-atm-diagram">
          <svg
            className="home-activity__stage"
            viewBox="0 0 900 520"
            role="img"
            aria-labelledby="home-atm-svg-title home-atm-svg-desc"
          >
            <title id="home-atm-svg-title">Activity Diagram rút tiền ATM</title>
            <desc id="home-atm-svg-desc">
              Ba làn Customer, ATM Terminal và Bank Host Server; hai decision có guard,
              một fork, một join và luồng phát tiền song song với trả thẻ.
            </desc>
            <defs>
              <marker id="home-activity-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6 Z" />
              </marker>
            </defs>
            {ATM_SWIMLANES.map((lane, index) => (
              <g key={lane.id} className="home-activity-lane" data-lane={lane.id}>
                <rect x={lane.x} y="0" width={lane.width} height="520" />
                {index > 0 ? <line x1={lane.x} y1="0" x2={lane.x} y2="520" /> : null}
                <text x={lane.x + lane.width / 2} y="24" textAnchor="middle">[{lane.label}]</text>
              </g>
            ))}
            <g className="home-activity-edges" aria-hidden="true">
              {ATM_ACTIVITY_EDGES.map((edge) => (
                <path
                  key={edge.id}
                  className={`home-activity-edge${edge.main ? " home-activity-edge--main" : ""}`}
                  data-edge-id={edge.id}
                  data-from={edge.from}
                  data-to={edge.to}
                  data-guard={edge.guard || ""}
                  d={edge.d}
                  pathLength="1"
                  markerEnd="url(#home-activity-arrow)"
                />
              ))}
              {ATM_GUARDS.map((guard) => (
                <text key={guard.id} className="home-activity-guard" x={guard.x} y={guard.y}>{guard.text}</text>
              ))}
              <text className="home-activity-branch-label" x="790" y="248">Y</text>
              <text className="home-activity-branch-label" x="692" y="214">N</text>
              <text className="home-activity-branch-label" x="790" y="390">Y</text>
              <text className="home-activity-branch-label" x="692" y="342">N</text>
            </g>
            <g className="home-activity-nodes">
              {ATM_ACTIVITY_NODES.map((node) => <ActivityNode key={node.id} node={node} />)}
            </g>
          </svg>
          <figcaption>
            Nút xuất hiện trước, cạnh nối theo sau; đường vàng đánh dấu luồng rút tiền hợp lệ.
          </figcaption>
        </figure>

        <details className="home-diagram-source">
          <summary>Xem ảnh nguồn để đối chiếu</summary>
          {/* Static review source: native lazy image avoids a responsive viewport listener retaining the unmounted story tree. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/diagrams/atm_activity_diagram.png"
            alt="Ảnh nguồn Activity Diagram ATM với ba swimlane"
            width={1376}
            height={768}
            loading="lazy"
            decoding="async"
          />
        </details>

        <button
          type="button"
          className="home-button home-button--primary"
          onClick={onOpenDiagram}
          data-testid="home-open-diagram"
        >
          Khám phá sơ đồ Activity
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
