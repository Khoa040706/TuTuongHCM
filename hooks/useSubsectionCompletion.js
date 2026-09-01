"use client";
import { useState, useEffect, useRef } from "react";

export function useSubsectionCompletion(subsectionId, onComplete) {
  const [reachedEnd, setReachedEnd] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sentinelRef = useRef(null);

  // Reset reachedEnd whenever subsectionId changes
  useEffect(() => {
    setReachedEnd(false);
  }, [subsectionId]);

  // Setup IntersectionObserver on sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setReachedEnd(true);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 50px 0px",
        threshold: 0.1
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [subsectionId]);

  const handleCompleteClick = async () => {
    if (!reachedEnd || isSubmitting) return;
    try {
      setIsSubmitting(true);
      if (onComplete) {
        await onComplete({ reachedEnd: true });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    reachedEnd,
    isSubmitting,
    sentinelRef,
    handleCompleteClick
  };
}
