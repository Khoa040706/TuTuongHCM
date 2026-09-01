/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect, useCallback } from "react";
import { learningApi } from "../lib/client/api";

export function useLearningState(subjectId, enabled = true) {
  const [state, setState] = useState({
    subjectId: subjectId || "cloud-computing",
    chapters: [],
    subsections: [],
    bookmarks: [],
    reviewItems: [],
    flashcards: { totalTracked: 0, dueCount: 0 }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchState = useCallback(async () => {
    if (!subjectId || !enabled) return;
    try {
      setLoading(true);
      setError(null);
      const res = await learningApi.getState(subjectId);
      if (res.ok && res.data) {
        setState(res.data);
      } else {
        setError(res.error?.message || "Không thể tải tiến độ học tập");
      }
    } catch (err) {
      setError("Lỗi kết nối khi tải tiến độ");
    } finally {
      setLoading(false);
    }
  }, [subjectId, enabled]);

  useEffect(() => {
    fetchState();
  }, [fetchState]);

  // Complete a subsection (LEARN-02)
  const completeSubsection = async (subsectionId, meta) => {
    try {
      const res = await learningApi.completeSubsection(subsectionId, {
        subjectId,
        chapterId: meta.chapterId,
        sectionId: meta.sectionId,
        reachedEnd: meta.reachedEnd === true
      });

      if (res.ok && res.data) {
        // Optimistic local update
        setState((prev) => {
          const subs = [...prev.subsections];
          const idx = subs.findIndex((s) => s.subsectionId === subsectionId);
          if (idx >= 0) {
            subs[idx] = { ...subs[idx], completed: true, completedAt: res.data.subsection.completedAt };
          } else {
            subs.push({
              chapterId: meta.chapterId,
              sectionId: meta.sectionId,
              subsectionId,
              completed: true,
              completedAt: res.data.subsection.completedAt
            });
          }

          const chaps = [...prev.chapters];
          const cIdx = chaps.findIndex((c) => c.chapterId === res.data.chapter.chapterId);
          if (cIdx >= 0) {
            chaps[cIdx] = res.data.chapter;
          } else {
            chaps.push(res.data.chapter);
          }

          return { ...prev, subsections: subs, chapters: chaps };
        });
        return { success: true, data: res.data };
      }
      return { success: false, error: res.error };
    } catch (err) {
      return { success: false, error: { message: err.message } };
    }
  };

  // Toggle Bookmark (LEARN-03 / LEARN-04)
  const toggleBookmark = async (subsectionId, meta) => {
    const isBookmarked = state.bookmarks.some((b) => b.subsectionId === subsectionId);
    try {
      if (isBookmarked) {
        const res = await learningApi.removeBookmark(subsectionId, subjectId);
        if (res.ok) {
          setState((prev) => ({
            ...prev,
            bookmarks: prev.bookmarks.filter((b) => b.subsectionId !== subsectionId)
          }));
          return { bookmarked: false };
        }
      } else {
        const res = await learningApi.addBookmark(subsectionId, {
          subjectId,
          chapterId: meta.chapterId,
          sectionId: meta.sectionId
        });
        if (res.ok && res.data) {
          setState((prev) => ({
            ...prev,
            bookmarks: [...prev.bookmarks, res.data]
          }));
          return { bookmarked: true };
        }
      }
    } catch (err) {
      console.warn("Toggle bookmark error:", err);
    }
    return { bookmarked: isBookmarked };
  };

  // Toggle Manual Review (LEARN-05 / LEARN-06)
  const toggleReview = async (subsectionId, meta) => {
    const revItem = state.reviewItems.find((r) => r.subsectionId === subsectionId);
    const isManual = Boolean(revItem?.manual);

    try {
      if (isManual) {
        const res = await learningApi.removeReview(subsectionId, subjectId);
        if (res.ok && res.data) {
          setState((prev) => {
            const list = prev.reviewItems.map((r) =>
              r.subsectionId === subsectionId
                ? {
                    ...r,
                    manual: false,
                    needsReview: res.data.needsReview,
                    systemReasons: Array.isArray(res.data.systemReasons) ? res.data.systemReasons : [],
                    updatedAt: res.data.updatedAt || new Date().toISOString()
                  }
                : r
            );
            return { ...prev, reviewItems: list };
          });
          return { needsReview: res.data.needsReview, manual: false };
        }
      } else {
        const res = await learningApi.addReview(subsectionId, {
          subjectId,
          chapterId: meta.chapterId,
          sectionId: meta.sectionId
        });
        if (res.ok && res.data) {
          setState((prev) => {
            const list = [...prev.reviewItems];
            const idx = list.findIndex((r) => r.subsectionId === subsectionId);
            if (idx >= 0) list[idx] = res.data;
            else list.push(res.data);
            return { ...prev, reviewItems: list };
          });
          return { needsReview: true, manual: true };
        }
      }
    } catch (err) {
      console.warn("Toggle review error:", err);
    }
    return { needsReview: Boolean(revItem?.needsReview), manual: isManual };
  };

  const decrementDueCount = useCallback(() => {
    setState((prev) => ({
      ...prev,
      flashcards: {
        ...prev.flashcards,
        dueCount: Math.max(0, (prev.flashcards?.dueCount || 0) - 1)
      }
    }));
  }, []);

  return {
    state,
    loading,
    error,
    refreshState: fetchState,
    completeSubsection,
    toggleBookmark,
    toggleReview,
    decrementDueCount,
    isSubsectionCompleted: (subId) => state.subsections.some((s) => s.subsectionId === subId && s.completed),
    isBookmarked: (subId) => state.bookmarks.some((b) => b.subsectionId === subId),
    getReviewStatus: (subId) => state.reviewItems.find((r) => r.subsectionId === subId)
  };
}
