import { requireSession } from "@/lib/server/auth";
import { jsonSuccess, routeError } from "@/lib/server/api-response";
import { getLearningReport } from "@/lib/server/report-service";
import { optionalString, requireEnum } from "@/lib/server/validation";

export const runtime = "nodejs";

const COMPLETION = ["all", "completed", "incomplete"];
const REVIEW = ["all", "yes", "no"];

export function parseReportFilters(searchParams) {
  return {
    uid: optionalString(searchParams.get("uid"), "uid"),
    subjectId: optionalString(searchParams.get("subjectId"), "subjectId"),
    chapterId: optionalString(searchParams.get("chapterId"), "chapterId"),
    completion: requireEnum(
      searchParams.get("completion") || "all",
      "completion",
      COMPLETION
    ),
    needsReview: requireEnum(
      searchParams.get("needsReview") || "all",
      "needsReview",
      REVIEW
    )
  };
}

export async function GET(request) {
  try {
    await requireSession({ roles: ["admin", "teacher"] });
    const filters = parseReportFilters(request.nextUrl.searchParams);
    return jsonSuccess(await getLearningReport(filters));
  } catch (error) {
    return routeError(error);
  }
}

