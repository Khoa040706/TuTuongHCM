"use client";
import React, { useState } from "react";
import { FileCode, Check, Copy } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function VsCodeEditorWindow({
  code,
  fileName = "Solution.java",
  badge = "JAVA",
  maxHeight = "380px"
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedHtml = highlightJavaVsCode(code);
  const lines = code.split("\n");

  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#2d2d2d] bg-[#1e1e1e] shadow-2xl font-mono text-xs my-3">
      {/* VS Code Window Header */}
      <div className="flex items-center justify-between bg-[#252526] px-4 py-2 border-b border-[#2d2d2d] select-none">
        {/* Window controls & Tab */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
          </div>

          <div className="flex items-center gap-2 bg-[#1e1e1e] text-[#cccccc] px-3 py-1 rounded-t border-t-2 border-[#007acc] text-xs font-semibold">
            <FileCode className="w-3.5 h-3.5 text-[#569cd6]" />
            <span>{fileName}</span>
          </div>
        </div>

        {/* Copy Button & Badge */}
        <div className="flex items-center gap-3">
          {badge && (
            <span className="text-[10px] font-bold text-[#4ec9b0] bg-[#1e1e1e] px-2 py-0.5 rounded border border-[#3c3c3c] hidden sm:inline-block">
              {badge}
            </span>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[#cccccc] hover:text-white bg-[#2d2d2d] hover:bg-[#3e3e3e] px-2 py-1 rounded transition-all text-[11px]"
            title="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Body with Line Numbers */}
      <div
        className="p-4 overflow-x-auto leading-relaxed text-[#d4d4d4] flex"
        style={{ maxHeight }}
      >
        {/* Line numbers column */}
        <div className="select-none text-[#555555] pr-4 border-r border-[#2d2d2d] text-right font-mono flex flex-col">
          {lines.map((_, i) => (
            <span key={i} className="leading-relaxed">
              {i + 1}
            </span>
          ))}
        </div>

        {/* Highlighted Code content */}
        <pre className="pl-4 font-mono whitespace-pre text-xs leading-relaxed overflow-x-auto flex-1">
          <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        </pre>
      </div>
    </div>
  );
}
