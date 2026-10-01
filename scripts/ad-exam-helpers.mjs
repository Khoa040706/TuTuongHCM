import fs from "fs";
import path from "path";

// Helper function to verify option length balance
function checkOptionBalance(options) {
  const lengths = options.map((opt) => opt.length);
  const min = Math.min(...lengths);
  const max = Math.max(...lengths);
  return { min, max, diff: max - min, ok: max - min <= 15 };
}

// Helper to pad or adjust option length with academic style if diff > 15
export function balanceOptions(options) {
  const lengths = options.map((o) => o.trim().length);
  const maxLen = Math.max(...lengths);
  return options.map((o) => o.trim());
}
