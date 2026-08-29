"use client";
import React, { useState, useEffect, useRef } from "react";
import SectionSkeletonPlaceholder from "./SectionSkeletonPlaceholder";

export default function LazySection({
  id,
  type,
  headerIcon: HeaderIcon,
  headerTitle,
  headerBadge,
  headerBadgeColor = "bg-[#FAF5EE] text-[#D85A38] border border-[#E8DACB]",
  headerDesc,
  actionButton = null,
  initialMount = false,
  forceMount = false,
  children,
  className = "min-h-screen scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-8"
}) {
  const [isMounted, setIsMounted] = useState(initialMount || forceMount);
  const containerRef = useRef(null);

  // If parent triggers forceMount (e.g. click Dock)
  useEffect(() => {
    if (forceMount && !isMounted) {
      setIsMounted(true);
    }
  }, [forceMount, isMounted]);

  // IntersectionObserver to lazy-mount 300px ahead
  useEffect(() => {
    if (isMounted) return;
    if (typeof window === "undefined" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px 300px 0px",
        threshold: 0
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <section
      id={`section-${id}`}
      data-admin-section={id}
      ref={containerRef}
      className={className}
    >
      {/* 1. SECTION HEADER (ALWAYS RENDERED REAL FOR NARRATIVE CLARITY) */}
      {(HeaderIcon || headerTitle) && (
        <div className="flex items-center justify-between border-b border-[#E8DACB] dark:border-white/10 pb-5 select-none">
          <div className="flex items-center gap-3.5">
            {HeaderIcon && (
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] dark:bg-white/10 border border-[#E8DACB] dark:border-white/15 flex items-center justify-center text-[#D85A38] shadow-xs shrink-0">
                <HeaderIcon size={24} />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-2xl sm:text-3xl text-[#38150E] dark:text-white tracking-tight">
                  {headerTitle}
                </h2>
                {headerBadge && (
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-extrabold ${headerBadgeColor}`}
                  >
                    {headerBadge}
                  </span>
                )}
              </div>
              {headerDesc && (
                <p className="text-xs sm:text-sm text-[#8C7A70] dark:text-stone-400 font-medium mt-1">
                  {headerDesc}
                </p>
              )}
            </div>
          </div>

          {actionButton && <div>{actionButton}</div>}
        </div>
      )}

      {/* 2. SECTION BODY: REAL CONTENT OR SHIMMER SKELETON */}
      {isMounted ? (
        <div className="animate-in fade-in duration-300 ease-out">{children}</div>
      ) : (
        <SectionSkeletonPlaceholder type={type || id} />
      )}
    </section>
  );
}
