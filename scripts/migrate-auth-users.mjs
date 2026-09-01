import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const { getAdminAuth, getAdminDb } = await import("../lib/server/firebase-admin.js");

const args = new Map(
  process.argv.slice(2).map((argument) => {
    const [key, ...rest] = argument.split("=");
    return [key, rest.join("=") || true];
  })
);
const execute = args.has("--execute");
const confirmation = args.get("--confirm");
const backupPath = args.get("--backup");
const preservedUid = "admin";

async function listAllAuthUsers() {
  const users = [];
  let pageToken;
  do {
    const page = await getAdminAuth().listUsers(1000, pageToken);
    users.push(...page.users);
    pageToken = page.pageToken;
  } while (pageToken);
  return users;
}

const [authUsers, profileSnapshot] = await Promise.all([
  listAllAuthUsers(),
  getAdminDb().collection("users").get()
]);
const authTargets = authUsers.filter((user) => user.uid !== preservedUid);
const profileTargets = profileSnapshot.docs.filter((doc) => doc.id !== preservedUid);
const backup = {
  generatedAt: new Date().toISOString(),
  preservedUid,
  authUsers: authTargets.map((user) => user.toJSON()),
  profiles: profileTargets.map((doc) => ({ id: doc.id, data: doc.data() }))
};

console.log(JSON.stringify({
  mode: execute ? "execute" : "dry-run",
  preservedUid,
  authUsersToDelete: authTargets.map((user) => user.uid),
  profilesToDelete: profileTargets.map((doc) => doc.id)
}, null, 2));

if (!execute) {
  console.log("Dry-run hoàn tất. Không có dữ liệu nào bị xóa.");
  process.exit(0);
}

if (confirmation !== "DELETE_ALL_EXCEPT_ADMIN") {
  throw new Error("Thiếu --confirm=DELETE_ALL_EXCEPT_ADMIN.");
}
if (typeof backupPath !== "string" || !backupPath.trim()) {
  throw new Error("Bắt buộc truyền --backup=<đường-dẫn-file-json> trước khi xóa.");
}

const resolvedBackup = resolve(process.cwd(), backupPath);
await writeFile(resolvedBackup, JSON.stringify(backup, null, 2), "utf8");

for (let index = 0; index < authTargets.length; index += 1000) {
  const batch = authTargets.slice(index, index + 1000).map((user) => user.uid);
  const result = await getAdminAuth().deleteUsers(batch);
  if (result.failureCount > 0) {
    throw new Error(`Không thể xóa ${result.failureCount} Firebase Auth user.`);
  }
}

for (let index = 0; index < profileTargets.length; index += 400) {
  const batch = getAdminDb().batch();
  profileTargets.slice(index, index + 400).forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
}

console.log(`Migration hoàn tất. Backup: ${resolvedBackup}`);
