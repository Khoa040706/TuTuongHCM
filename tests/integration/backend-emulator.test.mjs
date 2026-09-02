import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const projectId = "demo-studymaster";
const baseUrl = "http://127.0.0.1:3100";
const authEmulatorUrl = "http://127.0.0.1:9099";
const firestoreEmulatorUrl = "http://127.0.0.1:8080";
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const require = createRequire(import.meta.url);
const {
  createFromFetch,
  createTemporaryReferenceSet,
  encodeReply
} = require("../../node_modules/next/dist/compiled/react-server-dom-turbopack/client");

let server;
let serverLogs = "";

function capture(chunk) {
  serverLogs = `${serverLogs}${chunk}`.slice(-20000);
}

async function waitForServer(timeoutMs = 120000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next server dừng sớm.\n${serverLogs}`);
    }
    try {
      const response = await fetch(`${baseUrl}/api/auth/session`);
      if (response.status === 401) return;
    } catch {
      // Server chưa sẵn sàng.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Hết thời gian chờ Next server.\n${serverLogs}`);
}

async function clearEmulators() {
  await Promise.all([
    fetch(`${authEmulatorUrl}/emulator/v1/projects/${projectId}/accounts`, {
      method: "DELETE"
    }),
    fetch(
      `${firestoreEmulatorUrl}/emulator/v1/projects/${projectId}/databases/(default)/documents`,
      { method: "DELETE" }
    )
  ]);
}

async function jsonRequest(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();
  return { response, data };
}

function appRequest(pathname, { cookie, body, ...options } = {}) {
  const headers = new Headers(options.headers || {});
  if (cookie) headers.set("cookie", cookie);
  if (body !== undefined) headers.set("content-type", "application/json");
  return jsonRequest(`${baseUrl}${pathname}`, {
    ...options,
    headers,
    ...(body === undefined ? {} : { body: JSON.stringify(body) })
  });
}

async function readServerActionId(exportedName, timeoutMs = 30000) {
  const manifestPath = path.join(root, ".next", "dev", "server", "server-reference-manifest.json");
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
      const match = Object.entries(manifest.node || {}).find(
        ([, reference]) =>
          reference.filename === "app/actions/quiz.js" &&
          reference.exportedName === exportedName
      );
      if (match) return match[0];
    } catch {
      // Trang chính có thể vẫn đang được Turbopack biên dịch.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Không tìm thấy Server Action ${exportedName} trong manifest.`);
}

async function callServerAction(exportedName, args, cookie) {
  const pageResponse = await fetch(`${baseUrl}/`, {
    headers: cookie ? { cookie } : undefined
  });
  assert.equal(pageResponse.status, 200, await pageResponse.text());

  const actionId = await readServerActionId(exportedName);
  const temporaryReferences = createTemporaryReferenceSet();
  const body = await encodeReply(args, { temporaryReferences });
  const response = await fetch(`${baseUrl}/`, {
    method: "POST",
    headers: {
      accept: "text/x-component",
      cookie,
      "next-action": actionId
    },
    body
  });
  assert.equal(
    response.headers.get("content-type")?.startsWith("text/x-component"),
    true,
    `Server Action trả content-type ${response.headers.get("content-type") || "rỗng"}.`
  );
  const decoded = await createFromFetch(Promise.resolve(response), {
    temporaryReferences,
    callServer() {
      throw new Error("Server Action lồng nhau không được hỗ trợ trong integration harness.");
    }
  });
  return decoded.a;
}

async function exchangeSession(idToken, rememberMe = false) {
  const { response, data } = await appRequest("/api/auth/session", {
    method: "POST",
    body: { idToken, rememberMe }
  });
  assert.equal(response.status, 200, JSON.stringify(data));
  assert.equal(data.ok, true);
  const setCookie = response.headers.get("set-cookie");
  assert.ok(setCookie?.startsWith("studymaster_session="));
  return {
    cookie: setCookie.split(";", 1)[0],
    user: data.data.user
  };
}

async function createStudentSession() {
  const { response, data } = await jsonRequest(
    `${authEmulatorUrl}/identitytoolkit.googleapis.com/v1/accounts:signUp?key=fake-api-key`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: "student.integration@example.test",
        password: "Integration123!",
        returnSecureToken: true
      })
    }
  );
  assert.equal(response.status, 200, JSON.stringify(data));
  return exchangeSession(data.idToken);
}

async function createAdminSession() {
  const tokenResult = await appRequest("/api/auth/admin-token", {
    method: "POST",
    body: { username: "admin", password: "admin" }
  });
  assert.equal(tokenResult.response.status, 200, JSON.stringify(tokenResult.data));

  const exchange = await jsonRequest(
    `${authEmulatorUrl}/identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=fake-api-key`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        token: tokenResult.data.data.customToken,
        returnSecureToken: true
      })
    }
  );
  assert.equal(exchange.response.status, 200, JSON.stringify(exchange.data));
  return exchangeSession(exchange.data.idToken);
}

test("protected learning APIs run against Auth and Firestore emulators", async (t) => {
  await clearEmulators();
  server = spawn(process.execPath, [nextBin, "dev", "--hostname", "127.0.0.1", "--port", "3100"], {
    cwd: root,
    env: {
      ...process.env,
      FIREBASE_AUTH_EMULATOR_HOST: "127.0.0.1:9099",
      FIRESTORE_EMULATOR_HOST: "127.0.0.1:8080",
      FIREBASE_ADMIN_PROJECT_ID: projectId,
      GCLOUD_PROJECT: projectId,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: projectId,
      ADMIN_USERNAME: "admin",
      ADMIN_PASSWORD: "admin"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  server.stdout.on("data", capture);
  server.stderr.on("data", capture);

  t.after(async () => {
    if (server && server.exitCode === null) {
      server.kill("SIGTERM");
      await new Promise((resolve) => server.once("exit", resolve));
    }
  });

  await waitForServer();

  await t.test("auth guard still rejects requests without a session", async () => {
    const { response, data } = await appRequest(
      "/api/learning/state?subjectId=cloud-computing"
    );
    assert.equal(response.status, 401);
    assert.equal(data.error.code, "UNAUTHENTICATED");
  });

  const student = await createStudentSession();
  assert.equal(student.user.role, "student");

  await t.test("ITP-CAT-003 returns seven Cloud chapters", async () => {
    const { response, data } = await appRequest(
      "/api/learning/state?subjectId=cloud-computing",
      { cookie: student.cookie }
    );
    assert.equal(response.status, 200, JSON.stringify(data));
    assert.equal(data.ok, true);
    assert.deepEqual(
      data.data.chapters.map((chapter) => chapter.chapterId),
      ["cloud-ch1", "cloud-ch2", "cloud-ch3", "cloud-ch4", "cloud-ch5", "cloud-ch6", "cloud-ch7"]
    );
    assert.ok(data.data.chapters.every((chapter) => chapter.quizRequired === false));
  });

  await t.test("ITP-CAT-004 completes a valid Cloud subsection", async () => {
    const completion = await appRequest(
      "/api/learning/subsections/cloud-ch1-s1-scope/completion",
      {
        method: "PUT",
        cookie: student.cookie,
        body: {
          subjectId: "cloud-computing",
          chapterId: "cloud-ch1",
          sectionId: "cloud-ch1-s1",
          reachedEnd: true
        }
      }
    );
    assert.equal(completion.response.status, 200, JSON.stringify(completion.data));
    assert.equal(completion.data.data.subsection.subsectionId, "cloud-ch1-s1-scope");
    assert.equal(completion.data.data.chapter.completedSubsections, 1);
  });

  await t.test("ITP-CAT-005 reaches catalog validation after auth", async () => {
    const missingChapter = await appRequest(
      "/api/learning/subsections/cloud-ch1-s1-scope/completion",
      {
        method: "PUT",
        cookie: student.cookie,
        body: {
          subjectId: "cloud-computing",
          chapterId: "cloud-ch999",
          sectionId: "cloud-ch1-s1",
          reachedEnd: true
        }
      }
    );
    assert.equal(missingChapter.response.status, 404);
    assert.equal(missingChapter.data.error.code, "CHAPTER_NOT_FOUND");

    const missingSubsection = await appRequest(
      "/api/learning/subsections/cloud-missing/completion",
      {
        method: "PUT",
        cookie: student.cookie,
        body: {
          subjectId: "cloud-computing",
          chapterId: "cloud-ch1",
          sectionId: "cloud-ch1-s1",
          reachedEnd: true
        }
      }
    );
    assert.equal(missingSubsection.response.status, 404);
    assert.equal(missingSubsection.data.error.code, "SUBSECTION_NOT_FOUND");
  });

  await t.test("ITP-FC-002 and ITP-FC-003 return due cards and preserve dueCount", async () => {
    const all = await appRequest(
      "/api/learning/flashcards/due?subjectId=cloud-computing&limit=100",
      { cookie: student.cookie }
    );
    assert.equal(all.response.status, 200, JSON.stringify(all.data));
    assert.equal(all.data.data.dueCount, 12);
    assert.equal(all.data.data.cards.length, 12);

    const limited = await appRequest(
      "/api/learning/flashcards/due?subjectId=cloud-computing&limit=5",
      { cookie: student.cookie }
    );
    assert.equal(limited.response.status, 200, JSON.stringify(limited.data));
    assert.equal(limited.data.data.dueCount, 12);
    assert.equal(limited.data.data.cards.length, 5);
  });

  await t.test("ITP-FC-004 and ITP-FC-006 persist review and update dueCount", async () => {
    const review = await appRequest(
      "/api/learning/flashcards/cloud_fc_01/reviews",
      {
        method: "POST",
        cookie: student.cookie,
        body: { subjectId: "cloud-computing", rating: "again" }
      }
    );
    assert.equal(review.response.status, 200, JSON.stringify(review.data));
    assert.equal(review.data.data.reviewItem.subsectionId, "cloud-ch1-s2-features");
    assert.ok(review.data.data.reviewItem.systemReasons.includes("FLASHCARD_AGAIN"));

    const due = await appRequest(
      "/api/learning/flashcards/due?subjectId=cloud-computing&limit=100",
      { cookie: student.cookie }
    );
    const learning = await appRequest(
      "/api/learning/state?subjectId=cloud-computing",
      { cookie: student.cookie }
    );
    assert.equal(due.data.data.dueCount, 11);
    assert.equal(learning.data.data.flashcards.dueCount, 11);
  });

  await t.test("ITP-QUIZ-001 submits a full issued set and records one attempt", async () => {
    const request = {
      subjectId: "tu-tuong-hcm",
      chapterId: "chuong-2",
      examSetId: "de-1",
      isTrickMode: false
    };
    const issued = await callServerAction("getExamQuestions", [request], student.cookie);
    assert.equal(issued.ok, true, JSON.stringify(issued));
    assert.equal(issued.data.questions.length, 40);
    assert.ok(issued.data.questions.every((question) => !("answer" in question)));
    assert.ok(issued.data.questions.every((question) => !("explanation" in question)));

    const submitted = await callServerAction(
      "submitExamScore",
      [{
        ...request,
        questionsState: issued.data.questions.map(({ id, options }) => ({ id, options })),
        clientAnswers: issued.data.questions.map(() => -1),
        elapsedTime: 90
      }],
      student.cookie
    );
    assert.equal(submitted.ok, true, JSON.stringify(submitted));
    assert.equal(submitted.data.total, 40);
    assert.equal(submitted.data.score, 0);
    assert.equal(submitted.data.attemptsCount, 1);
    assert.equal(submitted.data.bestScore10, 0);
    assert.equal(submitted.data.passed, false);

    const db = getFirestore(initializeApp({ projectId }, "integration-verifier"));
    const rankings = await db.collection("rankings")
      .where("uid", "==", student.user.uid)
      .get();
    assert.equal(rankings.size, 1);
    assert.equal(rankings.docs[0].data().total, 40);
    assert.equal(rankings.docs[0].data().examSetId, "de-1");

    const summary = await db.collection("users")
      .doc(student.user.uid)
      .collection("quizSummary")
      .doc("tu-tuong-hcm__chuong-2")
      .get();
    assert.equal(summary.exists, true);
    assert.equal(summary.data().attemptsCount, 1);
    assert.equal(summary.data().bestScore10, 0);
  });

  const admin = await createAdminSession();
  assert.equal(admin.user.role, "admin");

  await t.test("ITP-CAT-006 and backend of ITP-E2E-004 return Cloud admin report", async () => {
    const report = await appRequest(
      "/api/admin/learning-report?subjectId=cloud-computing",
      { cookie: admin.cookie }
    );
    assert.equal(report.response.status, 200, JSON.stringify(report.data));
    const studentRow = report.data.data.users.find((user) => user.uid === student.user.uid);
    assert.ok(studentRow);
    const cloud = studentRow.subjects.find((subject) => subject.subjectId === "cloud-computing");
    assert.ok(cloud);
    assert.equal(cloud.chapters.length, 7);
    assert.equal(report.data.data.summary.totalUsers, 1);
  });
});
