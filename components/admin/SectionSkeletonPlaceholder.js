"use client";
import React from "react";

export default function SectionSkeletonPlaceholder({ type = "overview" }) {
  if (type === "overview") {
    return (
      <div className="space-y-6 animate-pulse select-none">
        {/* 3 KPI Summary Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-5 space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="h-4 w-28 bg-stone-200 dark:bg-white/10 rounded-md" />
                <div className="w-8 h-8 rounded-xl bg-stone-200 dark:bg-white/10" />
              </div>
              <div className="h-8 w-20 bg-stone-300 dark:bg-white/15 rounded-lg" />
              <div className="h-3 w-36 bg-stone-200 dark:bg-white/10 rounded-md" />
            </div>
          ))}
        </div>

        {/* 2 Charts Row Skeleton (Line Chart + Donut Chart) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-6 space-y-4 shadow-xs h-[360px] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="h-5 w-48 bg-stone-200 dark:bg-white/10 rounded-md" />
              <div className="h-4 w-24 bg-stone-200 dark:bg-white/10 rounded-md" />
            </div>
            <div className="flex-1 w-full bg-stone-100 dark:bg-white/5 rounded-xl flex items-end p-4 gap-4">
              {[40, 65, 30, 85, 55, 90, 70].map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-stone-200 dark:bg-white/10 rounded-t-md"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-6 space-y-4 shadow-xs h-[360px] flex flex-col items-center justify-center">
            <div className="h-5 w-36 bg-stone-200 dark:bg-white/10 rounded-md self-start" />
            <div className="w-40 h-40 rounded-full border-8 border-stone-200 dark:border-white/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-stone-100 dark:bg-white/5" />
            </div>
            <div className="h-3 w-28 bg-stone-200 dark:bg-white/10 rounded-md" />
          </div>
        </div>

        {/* Audit Log Table Skeleton */}
        <div className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-6 space-y-4 shadow-xs">
          <div className="h-5 w-44 bg-stone-200 dark:bg-white/10 rounded-md" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-12 w-full bg-stone-100 dark:bg-white/5 rounded-xl flex items-center px-4 justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-white/10" />
                  <div className="h-4 w-48 bg-stone-200 dark:bg-white/10 rounded-md" />
                </div>
                <div className="h-4 w-20 bg-stone-200 dark:bg-white/10 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "users") {
    return (
      <div className="space-y-6 animate-pulse select-none">
        {/* Search Bar & Action Bar Skeleton */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="h-11 w-full sm:w-80 bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-xl" />
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="h-11 w-32 bg-stone-200 dark:bg-white/10 rounded-xl" />
            <div className="h-11 w-32 bg-stone-200 dark:bg-white/10 rounded-xl" />
          </div>
        </div>

        {/* Table Rows Skeleton */}
        <div className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl overflow-hidden shadow-xs">
          <div className="h-12 bg-stone-100 dark:bg-white/5 border-b border-[#E8DACB]/60 dark:border-white/10 flex items-center px-6 justify-between">
            <div className="h-4 w-24 bg-stone-200 dark:bg-white/10 rounded-md" />
            <div className="h-4 w-32 bg-stone-200 dark:bg-white/10 rounded-md" />
            <div className="h-4 w-20 bg-stone-200 dark:bg-white/10 rounded-md" />
            <div className="h-4 w-28 bg-stone-200 dark:bg-white/10 rounded-md" />
          </div>
          <div className="divide-y divide-[#E8DACB]/40 dark:divide-white/5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 flex items-center px-6 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-stone-200 dark:bg-white/10" />
                  <div className="space-y-1.5">
                    <div className="h-4 w-32 bg-stone-200 dark:bg-white/10 rounded-md" />
                    <div className="h-3 w-40 bg-stone-100 dark:bg-white/5 rounded-md" />
                  </div>
                </div>
                <div className="h-6 w-24 bg-stone-200 dark:bg-white/10 rounded-full" />
                <div className="h-4 w-16 bg-stone-200 dark:bg-white/10 rounded-md" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-white/10" />
                  <div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "questions") {
    return (
      <div className="space-y-6 animate-pulse select-none">
        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-5 space-y-2.5 shadow-xs"
            >
              <div className="h-4 w-28 bg-stone-200 dark:bg-white/10 rounded-md" />
              <div className="h-8 w-16 bg-stone-300 dark:bg-white/15 rounded-lg" />
              <div className="h-3 w-40 bg-stone-200 dark:bg-white/10 rounded-md" />
            </div>
          ))}
        </div>

        {/* Question Inspector Skeleton */}
        <div className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-6 space-y-4 shadow-xs">
          <div className="h-10 w-full bg-stone-100 dark:bg-white/5 rounded-xl" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-[#E8DACB]/60 dark:border-white/10 rounded-xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="h-4 w-40 bg-stone-200 dark:bg-white/10 rounded-md" />
                  <div className="h-5 w-20 bg-stone-200 dark:bg-white/10 rounded-full" />
                </div>
                <div className="h-5 w-3/4 bg-stone-200 dark:bg-white/10 rounded-md" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div
                      key={j}
                      className="h-10 bg-stone-100 dark:bg-white/5 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Leaderboard Skeleton (Top 3 Podium + Table)
  return (
    <div className="space-y-6 animate-pulse select-none">
      {/* Golden Podium Skeleton */}
      <div className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-8 shadow-xs flex items-end justify-center gap-6 h-[260px]">
        {/* Silver #2 */}
        <div className="w-28 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-white/10" />
          <div className="h-3 w-16 bg-stone-200 dark:bg-white/10 rounded-md" />
          <div className="w-full h-24 bg-stone-200 dark:bg-white/10 rounded-t-xl" />
        </div>
        {/* Gold #1 */}
        <div className="w-32 flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-stone-300 dark:bg-white/15" />
          <div className="h-3.5 w-20 bg-stone-300 dark:bg-white/15 rounded-md" />
          <div className="w-full h-36 bg-stone-300 dark:bg-white/15 rounded-t-xl" />
        </div>
        {/* Bronze #3 */}
        <div className="w-28 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-white/10" />
          <div className="h-3 w-16 bg-stone-200 dark:bg-white/10 rounded-md" />
          <div className="w-full h-16 bg-stone-200 dark:bg-white/10 rounded-t-xl" />
        </div>
      </div>

      {/* Leaderboard Table Skeleton */}
      <div className="bg-white/80 dark:bg-[#18191B]/80 border border-[#E8DACB]/60 dark:border-white/10 rounded-2xl p-6 space-y-3 shadow-xs">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-14 bg-stone-100 dark:bg-white/5 rounded-xl flex items-center px-6 justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-white/10" />
              <div className="h-4 w-32 bg-stone-200 dark:bg-white/10 rounded-md" />
            </div>
            <div className="h-5 w-20 bg-stone-200 dark:bg-white/10 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
