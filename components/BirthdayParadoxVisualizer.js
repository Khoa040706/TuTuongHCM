"use client";

import React, { useState } from "react";
import {
  Users,
  Sparkles,
  Percent,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  GitBranch,
  Split
} from "lucide-react";

export default function BirthdayParadoxVisualizer() {
  const [numPeople, setNumPeople] = useState(23);

  const calculateBirthdayProbability = (n) => {
    if (n <= 1) return { uniqueProb: 1, collisionProb: 0 };
    if (n > 365) return { uniqueProb: 0, collisionProb: 1 };

    let q = 1.0;
    for (let i = 1; i < n; i++) {
      q *= (365 - i) / 365;
    }
    const p = 1.0 - q;
    return {
      uniqueProb: q,
      collisionProb: p
    };
  };

  const prob = calculateBirthdayProbability(numPeople);
  const percentCollision = (prob.collisionProb * 100).toFixed(1);
  const percentUnique = (prob.uniqueProb * 100).toFixed(1);

  const techniques = [
    {
      id: 1,
      name: "1. Separate Chaining",
      type: "Closed Addressing",
      tag: "Linked List",
      desc: "Mỗi slot của hash table là 1 danh sách liên kết. Các key bị đụng độ được chèn nối tiếp vào chain của slot đó."
    },
    {
      id: 2,
      name: "2. Linear Probing",
      type: "Open Addressing",
      tag: "(hash(k) + i) mod m",
      desc: "Khi bị đụng độ, tuần tự quét qua các ô nhớ tiếp theo (+1, +2, +3, ...) để tìm slot trống đầu tiên."
    },
    {
      id: 3,
      name: "3. Quadratic Probing",
      type: "Open Addressing",
      tag: "(hash(k) + i²) mod m",
      desc: "Nhảy theo bước nhảy bậc hai (+1², +2², +3², ...) để phân tán rộng và tránh hiện tượng dồn cục sơ cấp."
    },
    {
      id: 4,
      name: "4. Double Hashing",
      type: "Open Addressing",
      tag: "(h₁(k) + i·h₂(k)) mod m",
      desc: "Sử dụng hàm băm thứ hai h₂(k) để tính toán độ dài bước nhảy riêng biệt cho từng khóa, loại bỏ dồn cục."
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 4 — Nghịch Lý Ngày Sinh &amp; Phân Loại
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Xác Suất Va Chạm (Birthday Paradox) &amp; 4 Kỹ Thuật Giải Quyết Collision
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá vì sao Collision rất dễ xảy ra và tổng quan 4 chiến lược giải quyết đụng độ kinh điển
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Calendar className="w-3.5 h-3.5 text-rose-600" />
          Von Mises Paradox
        </div>
      </div>

      {/* Interactive Birthday Paradox Simulator */}
      <div className="bg-gradient-to-br from-rose-50/70 via-white to-amber-50/40 text-slate-800 rounded-2xl p-5 border-2 border-rose-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-rose-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-rose-950 block uppercase">
              MÔ PHỎNG NGHỊCH LÝ NGÀY SINH (BIRTHDAY PARADOX SIMULATOR)
            </span>
            <span className="text-xs text-slate-500 font-sans">
              "Cần bao nhiêu người trong phòng để xác suất có ít nhất 2 người trùng ngày sinh &ge; 50%?"
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 font-bold">Chọn nhanh:</span>
            {[10, 23, 50, 70].map((n) => (
              <button
                key={n}
                onClick={() => setNumPeople(n)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer shadow-2xs ${
                  numPeople === n
                    ? "bg-rose-600 text-white font-bold shadow-xs"
                    : "bg-white text-rose-900 border border-rose-200 hover:bg-rose-50"
                }`}
              >
                n={n}
              </button>
            ))}
          </div>
        </div>

        {/* Slider & Math calculation */}
        <div className="space-y-4 font-mono text-xs">
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-700 font-bold">Số người trong phòng (hoặc số Key chèn vào 365 slot):</span>
              <span className="text-base font-black text-rose-700 font-mono">{numPeople} người</span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              value={numPeople}
              onChange={(e) => setNumPeople(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
          </div>

          {/* Probability Gauge Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 font-semibold">Xác suất KHÔNG ai trùng (Q(n)): {percentUnique}%</span>
              <span className="text-rose-700 font-bold">
                Xác suất CÓ ÍT NHẤT 2 NGƯỜI TRÙNG (P(n)): {percentCollision}%
              </span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex border border-slate-300 shadow-inner">
              <div
                style={{ width: `${percentUnique}%` }}
                className="bg-slate-300 h-full transition-all duration-300"
                title={`Unique: ${percentUnique}%`}
              />
              <div
                style={{ width: `${percentCollision}%` }}
                className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
                title={`Collision: ${percentCollision}%`}
              />
            </div>
          </div>

          {/* Result Highlight Box */}
          <div className="p-3.5 bg-white rounded-xl border-2 border-rose-200 text-slate-800 font-sans leading-relaxed text-xs shadow-xs">
            {numPeople === 23 ? (
              <p className="text-rose-900 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>
                  <strong>Tại đúng n = 23 người:</strong> $P(23) = 0.507 \approx 50.7\%$ &rarr; Đã vượt quá 50%! Một kết quả hoàn toàn phản trực giác với đa số mọi người!
                </span>
              </p>
            ) : numPeople >= 50 ? (
              <p className="text-amber-900 font-bold">
                Với <strong>{numPeople} người</strong>, xác suất xảy ra va chạm lên tới <strong>{percentCollision}%</strong> (gần như chắc chắn 100% xảy ra đụng độ)!
              </p>
            ) : (
              <p className="text-slate-700">
                Với <strong>{numPeople} người</strong>, xác suất xảy ra đụng độ là <strong>{percentCollision}%</strong>.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 4 Collision Techniques Overview Grid */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Split className="w-4 h-4 text-rose-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">
            4 KỸ THUẬT GIẢI QUYẾT COLLISION TRONG BẢNG BĂM
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {techniques.map((t) => (
            <div
              key={t.id}
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-2 hover:border-slate-300 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900 text-xs font-sans">{t.name}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {t.type}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded inline-block mb-1.5">
                  {t.tag}
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-rose-50/80 border-2 border-rose-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-rose-950">
        <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 4 Mở đầu):</strong><br/>
          • <strong>Birthday Paradox:</strong> Chỉ cần 23 người trong phòng thì xác suất có ít nhất 2 người trùng ngày sinh đã là <strong>50.7%</strong>.<br/>
          • <strong>Ứng dụng:</strong> Chèn 23 key vào bảng 365 slot thì hơn một nửa số lần ta sẽ gặp collision &rarr; <strong>Collision là điều tất yếu và rất dễ xảy ra!</strong><br/>
          • <strong>4 kỹ thuật giải quyết:</strong> Separate Chaining, Linear Probing, Quadratic Probing, Double Hashing.
        </div>
      </div>
    </div>
  );
}
