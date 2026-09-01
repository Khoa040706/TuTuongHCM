import { requireSession } from "@/lib/server/auth";
import { jsonSuccess, routeError } from "@/lib/server/api-response";
import { reviewFlashcard } from "@/lib/server/learning-repository";
import {
  readJson,
  requireEnum,
  requireString
} from "@/lib/server/validation";

export const runtime = "nodejs";

const RATINGS = ["again", "hard", "good", "easy"];

export async function POST(request, { params }) {
  try {
    const user = await requireSession();
    const { cardId: rawCardId } = await params;
    const body = await readJson(request);
    const cardId = requireString(rawCardId, "cardId");
    const subjectId = requireString(body.subjectId, "subjectId");
    const rating = requireEnum(body.rating, "rating", RATINGS);
    return jsonSuccess(await reviewFlashcard(user.uid, subjectId, cardId, rating));
  } catch (error) {
    return routeError(error);
  }
}

