import { requireSession } from "@/lib/server/auth";
import { ApiError, jsonSuccess, routeError } from "@/lib/server/api-response";
import { getDueFlashcards } from "@/lib/server/learning-repository";
import { requireString } from "@/lib/server/validation";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    const user = await requireSession();
    const subjectId = requireString(
      request.nextUrl.searchParams.get("subjectId"),
      "subjectId"
    );
    const rawLimit = request.nextUrl.searchParams.get("limit");
    const limit = rawLimit === null ? 100 : Number(rawLimit);
    if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
      throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
        limit: "Phải là số nguyên từ 1 đến 100."
      });
    }
    return jsonSuccess(await getDueFlashcards(user.uid, subjectId, limit));
  } catch (error) {
    return routeError(error);
  }
}

