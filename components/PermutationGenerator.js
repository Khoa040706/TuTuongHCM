"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Type, RotateCcw, Copy, Check } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function PermutationGenerator() {
  const [word, setWord] = useState("eat");
  const [inputWord, setInputWord] = useState("eat");
  const [copied, setCopied] = useState(false);

  // Recursive permutations generator
  const getPermutations = (str) => {
    const results = [];
    const permute = (beginning, ending) => {
      if (ending.length <= 1) {
        results.push(beginning + ending);
      } else {
        for (let i = 0; i < ending.length; i++) {
          const newString = ending.substring(0, i) + ending.substring(i + 1);
          permute(beginning + ending.charAt(i), newString);
        }
      }
    };
    if (str.length > 0 && str.length <= 5) {
      permute("", str);
    }
    return results;
  };

  const perms = getPermutations(word);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (inputWord.trim().length >= 1 && inputWord.trim().length <= 5) {
      setWord(inputWord.trim().toLowerCase());
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(perms.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const permCode = `public class Permutations {
    public static void main(String args[]) {
        permuteString("", "eat");
    }

    public static void permuteString(String beginningString, String endingString) {
        if (endingString.length() <= 1) {
            System.out.println(beginningString + endingString); // Base case
        } else {
            for (int i = 0; i < endingString.length(); i++) {
                try {
                    String newString = endingString.substring(0, i) + endingString.substring(i + 1);
                    // newString = endingString nhưng bỏ ký tự tại vị trí i
                    permuteString(beginningString + endingString.charAt(i), newString);
                } catch (StringIndexOutOfBoundsException exception) {
                    exception.printStackTrace();
                }
            }
        }
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md border border-pink-200">
            Example 10 — Thuật toán Sinh Hoán Vị
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tìm Tất Cả Hoán Vị (Permutations) Của Chuỗi
          </h3>
          <p className="text-xs text-slate-500">
            Với chuỗi n ký tự, có đúng n! lời gọi đệ quy để sinh ra tất cả các hoán vị
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleGenerate} className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-mono">
            <span className="text-slate-500">Chuỗi:</span>
            <input
              type="text"
              maxLength={5}
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              className="w-16 bg-white border border-slate-300 rounded px-1.5 py-0.5 font-mono text-xs font-bold text-slate-900 uppercase"
            />
            <button
              type="submit"
              className="px-2.5 py-0.5 bg-pink-600 hover:bg-pink-700 text-white rounded text-xs font-bold transition cursor-pointer"
            >
              Sinh
            </button>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono">
            {["eat", "east", "abc"].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => {
                  setInputWord(w);
                  setWord(w);
                }}
                className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
              >
                "{w}"
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Stats & Results Grid */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono mb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">KẾT QUẢ CHO CHUỖI "{word.toUpperCase()}" (n = {word.length})</span>
            <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
              n! = {word.length}! = {perms.length} hoán vị
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] font-mono text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Đã copy" : "Copy tất cả"}
          </button>
        </div>

        {/* Permutations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
          {perms.map((p, idx) => (
            <div
              key={idx}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs font-bold text-center shadow-xs hover:border-pink-300 hover:bg-pink-50/40 transition"
            >
              <span className="text-slate-400 font-normal text-[10px] block">#{idx + 1}</span>
              <span className="text-pink-700 text-sm tracking-wider">{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-2xl border border-slate-800 shadow-md overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(permCode) }} />
      </pre>
    </div>
  );
}
