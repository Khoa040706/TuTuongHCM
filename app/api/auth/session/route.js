import {
  clearSessionCookie,
  createVerifiedSession,
  requireSession,
  setSessionCookie
} from "../../../../lib/server/auth";
import { jsonSuccess, routeError } from "../../../../lib/server/api-response";
import {
  readJson,
  requireBoolean,
  requireString
} from "../../../../lib/server/validation";

export const runtime = "nodejs";

export async function GET() {
  try {
    const user = await requireSession();
    return jsonSuccess({ user });
  } catch (error) {
    return routeError(error);
  }
}

export async function POST(request) {
  try {
    const body = await readJson(request);
    const idToken = requireString(body.idToken, "idToken", { max: 10000 });
    const rememberMe = requireBoolean(body.rememberMe, "rememberMe");
    const session = await createVerifiedSession(idToken, rememberMe);
    await setSessionCookie(session.sessionCookie, session.maxAgeSeconds);
    return jsonSuccess({ user: session.user });
  } catch (error) {
    return routeError(error);
  }
}

export async function DELETE() {
  try {
    await clearSessionCookie();
    return jsonSuccess({ authenticated: false });
  } catch (error) {
    return routeError(error);
  }
}
