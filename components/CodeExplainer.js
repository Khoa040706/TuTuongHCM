"use client";
import React, { useState } from "react";
import { Info } from "lucide-react";

export default function CodeExplainer({ code, language = "java", explanations = {}, title }) {
  const [hoveredLine, setHoveredLine] = useState(null);

  const lines = code.split("\n");

  return (
    <div className="w-full bg-stone-900 border border-stone-850 rounded-2xl shadow-xl overflow-hidden font-sans my-4">
      {/* Title Bar */}
      {title && (
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-2 flex items-center justify-between border-b border-stone-850">
          <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            {title}
          </span>
          <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-mono font-semibold">
            Interactive Explainer
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
        {/* Code Panel */}
        <div 
          className={`p-4 font-mono text-[11px] overflow-x-auto ${Object.keys(explanations).length > 0 ? "md:col-span-8 border-r border-stone-850" : "md:col-span-12"} leading-relaxed select-none`}
          style={{ backgroundColor: "#0c0a09", color: "#e7e5e4" }}
        >
          {lines.map((line, idx) => {
            const hasExplanation = explanations[idx] !== undefined;
            const isHovered = hoveredLine === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => hasExplanation && setHoveredLine(idx)}
                onMouseLeave={() => hasExplanation && setHoveredLine(null)}
                className={`group flex items-start -mx-4 px-4 py-1 transition-all duration-150 ${
                  hasExplanation ? "cursor-help" : ""
                }`}
                style={
                  isHovered
                    ? { backgroundColor: "rgba(14, 165, 233, 0.18)", borderLeft: "4px solid #0ea5e9" }
                    : hasExplanation
                    ? { borderLeft: "4px solid transparent" }
                    : { borderLeft: "4px solid transparent" }
                }
              >
                {/* Line number */}
                <span 
                  className="w-8 text-right pr-3 select-none font-mono text-[10px]"
                  style={isHovered ? { color: "#38bdf8", fontWeight: "bold" } : { color: "#57534e" }}
                >
                  {idx + 1}
                </span>

                {/* Line content */}
                <span 
                  className="flex-1 whitespace-pre font-mono"
                  style={isHovered ? { color: "#f0f9ff" } : { color: "#e7e5e4" }}
                >
                  {line || " "}
                </span>

                {/* Info icon indicator for lines with explanation */}
                {hasExplanation && (
                  <span className={`ml-2 transition-opacity duration-150 ${
                    isHovered ? "opacity-100 text-sky-400" : "opacity-30 group-hover:opacity-60 text-stone-505"
                  }`}>
                    <Info className="w-3.5 h-3.5 mt-0.5" />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Explanation Side Panel */}
        {Object.keys(explanations).length > 0 && (
          <div className="md:col-span-4 bg-stone-900/60 p-4 flex flex-col justify-center min-h-[120px] md:min-h-0 border-t md:border-t-0 border-stone-850">
            {hoveredLine !== null && explanations[hoveredLine] ? (
              <div className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-l-4 border-sky-500 rounded-r-xl p-4 transition-all duration-200 animate-fadeIn">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Info className="w-4 h-4 text-sky-500" />
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider font-mono">
                    Dòng {hoveredLine + 1}
                  </span>
                </div>
                <p 
                  className="text-xs leading-relaxed font-sans" 
                  style={{ color: "#e7e5e4" }}
                  dangerouslySetInnerHTML={{ __html: explanations[hoveredLine] }}
                >
                </p>
              </div>
            ) : (
              <div className="text-center text-xs text-stone-500 py-6 px-4 italic font-sans flex flex-col items-center gap-2">
                <Info className="w-5 h-5 text-stone-600" />
                <span>Rê chuột vào các dòng code có biểu tượng <Info className="w-3 h-3 inline-block" /> để xem giải nghĩa chi tiết từng dòng.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
