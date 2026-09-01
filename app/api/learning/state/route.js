import { requireSession } from "@/lib/server/auth";
import { jsonSuccess, routeError } from "@/lib/server/api-response";
import { getLearningState } from "@/lib/server/learning-repository";
import { requireString } from "@/lib/server/validation";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    const user = await requireSession();
    const subjectId = requireString(
      request.nextUrl.searchParams.get("subjectId"),
      "subjectId"
    );
    return jsonSuccess(await getLearningState(user.uid, subjectId));
  } catch (error) {
    return routeError(error);
  }
}

