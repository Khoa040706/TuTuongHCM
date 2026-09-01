import { requireSession } from "@/lib/server/auth";
import { jsonSuccess, routeError } from "@/lib/server/api-response";
import { completeSubsection } from "@/lib/server/learning-repository";
import {
  readJson,
  requireBoolean,
  requireString
} from "@/lib/server/validation";

export const runtime = "nodejs";

export async function PUT(request, { params }) {
  try {
    const user = await requireSession();
    const { subsectionId: rawSubsectionId } = await params;
    const body = await readJson(request);
    const input = {
      subsectionId: requireString(rawSubsectionId, "subsectionId"),
      subjectId: requireString(body.subjectId, "subjectId"),
      chapterId: requireString(body.chapterId, "chapterId"),
      sectionId: requireString(body.sectionId, "sectionId"),
      reachedEnd: requireBoolean(body.reachedEnd, "reachedEnd")
    };
    return jsonSuccess(await completeSubsection(user.uid, input));
  } catch (error) {
    return routeError(error);
  }
}

