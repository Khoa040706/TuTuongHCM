import { requireSession } from "@/lib/server/auth";
import { jsonSuccess, routeError } from "@/lib/server/api-response";
import { addBookmark, removeBookmark } from "@/lib/server/learning-repository";
import { readJson, requireString } from "@/lib/server/validation";

export const runtime = "nodejs";

export async function PUT(request, { params }) {
  try {
    const user = await requireSession();
    const { subsectionId: rawSubsectionId } = await params;
    const body = await readJson(request);
    const data = await addBookmark(user.uid, {
      subsectionId: requireString(rawSubsectionId, "subsectionId"),
      subjectId: requireString(body.subjectId, "subjectId"),
      chapterId: requireString(body.chapterId, "chapterId"),
      sectionId: requireString(body.sectionId, "sectionId")
    });
    return jsonSuccess(data);
  } catch (error) {
    return routeError(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const user = await requireSession();
    const { subsectionId: rawSubsectionId } = await params;
    const subsectionId = requireString(rawSubsectionId, "subsectionId");
    const subjectId = requireString(
      request.nextUrl.searchParams.get("subjectId"),
      "subjectId"
    );
    return jsonSuccess(await removeBookmark(user.uid, subjectId, subsectionId));
  } catch (error) {
    return routeError(error);
  }
}

