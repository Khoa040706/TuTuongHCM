import { NextResponse } from "next/server";

export class ApiError extends Error {
  constructor(status, code, message, fields) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
  }
}

export function successData(data, meta) {
  const payload = { ok: true, data };
  if (meta !== undefined) payload.meta = meta;
  return payload;
}

export function errorData(code, message, fields) {
  const error = { code, message };
  if (fields && Object.keys(fields).length > 0) error.fields = fields;
  return { ok: false, error };
}

export function jsonSuccess(data, status = 200, meta) {
  return NextResponse.json(successData(data, meta), { status });
}

export function jsonError(status, code, message, fields) {
  return NextResponse.json(errorData(code, message, fields), { status });
}

export function normalizeError(error) {
  if (error instanceof ApiError) return error;

  const firebaseCode = typeof error?.code === "string" ? error.code : "";
  if (
    firebaseCode.includes("unavailable") ||
    firebaseCode.includes("deadline-exceeded") ||
    firebaseCode.includes("resource-exhausted")
  ) {
    return new ApiError(
      503,
      "DATASTORE_UNAVAILABLE",
      "Dịch vụ dữ liệu tạm thời không khả dụng."
    );
  }

  console.error("Unhandled backend error:", error);
  return new ApiError(500, "INTERNAL_ERROR", "Đã xảy ra lỗi hệ thống.");
}

export function routeError(error) {
  const normalized = normalizeError(error);
  return jsonError(
    normalized.status,
    normalized.code,
    normalized.message,
    normalized.fields
  );
}

export function actionError(error) {
  const normalized = normalizeError(error);
  return errorData(normalized.code, normalized.message, normalized.fields);
}

