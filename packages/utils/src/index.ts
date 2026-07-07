import type { JsonObject } from "@oja/types";

export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
}

export function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
