import { createAdminCustomToken } from "../../../../lib/server/auth";
import { jsonSuccess, routeError } from "../../../../lib/server/api-response";
import { readJson, requireString } from "../../../../lib/server/validation";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await readJson(request);
    const username = requireString(body.username, "username", { max: 100 });
    const password = requireString(body.password, "password", { max: 200 });
    const customToken = await createAdminCustomToken(username, password);
    return jsonSuccess({ customToken });
  } catch (error) {
    return routeError(error);
  }
}
