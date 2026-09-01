import { spawn } from "node:child_process";
import { access, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const firebaseCli = path.join(root, "node_modules", "firebase-tools", "lib", "bin", "firebase.js");
const configHome = path.join(root, ".firebase-cli-config");
const cacheHome = path.join(root, ".firebase-cache");
const emulatorCache = path.join(cacheHome, "emulators");
const localJavaRoot = path.join(cacheHome, "java21");

await Promise.all([
  mkdir(configHome, { recursive: true }),
  mkdir(cacheHome, { recursive: true }),
  mkdir(emulatorCache, { recursive: true })
]);

async function findLocalJavaHome() {
  try {
    const entries = await readdir(localJavaRoot, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const javaHome = path.join(localJavaRoot, entry.name);
      await access(path.join(javaHome, "bin", process.platform === "win32" ? "java.exe" : "java"));
      return javaHome;
    }
  } catch {
    return null;
  }
  return null;
}

const localJavaHome = await findLocalJavaHome();
const runtimePath = localJavaHome
  ? `${path.join(localJavaHome, "bin")}${path.delimiter}${process.env.PATH || ""}`
  : process.env.PATH;

const child = spawn(
  process.execPath,
  [
    firebaseCli,
    "emulators:exec",
    "--project",
    "demo-studymaster",
    "--config",
    "firebase.json",
    "--only",
    "auth,firestore",
    "node --test tests/integration/backend-emulator.test.mjs"
  ],
  {
    cwd: root,
    env: {
      ...process.env,
      CI: process.env.CI || "true",
      DEBUG: "",
      FIREBASE_CLI_DISABLE_UPDATE_CHECK: "true",
      FIREBASE_EMULATORS_PATH: emulatorCache,
      ...(localJavaHome ? { JAVA_HOME: localJavaHome } : {}),
      PATH: runtimePath,
      XDG_CONFIG_HOME: configHome,
      XDG_CACHE_HOME: cacheHome
    },
    stdio: "inherit"
  }
);

child.on("error", (error) => {
  console.error("Không thể khởi động Firebase Emulator Suite:", error);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Firebase Emulator Suite dừng bởi signal ${signal}.`);
    process.exitCode = 1;
    return;
  }
  process.exitCode = code ?? 1;
});
