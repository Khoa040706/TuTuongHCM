import { subjects } from "../curriculum.js";

export function getSubject(subjectId) {
  return subjects[subjectId] || null;
}

export function getChapter(subjectId, chapterId) {
  const subject = getSubject(subjectId);
  return subject?.chapters?.find((chapter) => chapter.id === chapterId) || null;
}

export function getSubsection(subjectId, chapterId, subsectionId) {
  const chapter = getChapter(subjectId, chapterId);
  if (!chapter) return null;

  for (const section of chapter.sections || []) {
    const subsection = (section.subsections || []).find((item) => item.id === subsectionId);
    if (subsection) {
      return {
        subjectId,
        chapterId,
        sectionId: section.id,
        subsectionId,
        subsection
      };
    }
  }
  return null;
}

export function listChapterSubsections(subjectId, chapterId) {
  const chapter = getChapter(subjectId, chapterId);
  if (!chapter) return [];
  return (chapter.sections || []).flatMap((section) =>
    (section.subsections || []).map((subsection) => ({
      subjectId,
      chapterId,
      sectionId: section.id,
      subsectionId: subsection.id
    }))
  );
}

export function chapterRequiresQuiz(subjectId, chapterId) {
  const questionData = getSubject(subjectId)?.questionsMap?.[chapterId];
  if (!questionData) return false;
  return [questionData.inside, questionData.outside, questionData.tricks].some(
    (items) => Array.isArray(items) && items.length > 0
  ) || Boolean(questionData.sets && Object.keys(questionData.sets).length > 0);
}

export function listSubjectChapters(subjectId) {
  return getSubject(subjectId)?.chapters || [];
}

export function listSubjects() {
  return Object.values(subjects);
}
