import { ApiError } from "./api-response.js";

export function requireObject(value, field = "body") {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      [field]: "Phải là object."
    });
  }
  return value;
}

export function requireString(value, field, options = {}) {
  const { min = 1, max = 200 } = options;
  if (typeof value !== "string") {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      [field]: "Phải là chuỗi."
    });
  }

  const normalized = value.trim();
  if (normalized.length < min || normalized.length > max) {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      [field]: `Độ dài phải từ ${min} đến ${max} ký tự.`
    });
  }
  return normalized;
}

export function optionalString(value, field, options = {}) {
  if (value === undefined || value === null || value === "") return undefined;
  return requireString(value, field, options);
}

export function requireBoolean(value, field) {
  if (typeof value !== "boolean") {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      [field]: "Phải là boolean."
    });
  }
  return value;
}

export function requireEnum(value, field, allowed) {
  if (!allowed.includes(value)) {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      [field]: `Chỉ chấp nhận: ${allowed.join(", ")}.`
    });
  }
  return value;
}

export function requireFiniteNumber(value, field, options = {}) {
  const { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } = options;
  if (typeof value !== "number" || !Number.isFinite(value) || value < min || value > max) {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      [field]: `Phải là số trong khoảng ${min}..${max}.`
    });
  }
  return value;
}

export async function readJson(request) {
  try {
    return requireObject(await request.json());
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(400, "VALIDATION_ERROR", "Request body phải là JSON hợp lệ.");
  }
}
