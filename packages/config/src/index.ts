import { ENVIRONMENT_NAMES, type EnvironmentName } from "@oja/constants";

export function isEnvironmentName(value: string): value is EnvironmentName {
  return ENVIRONMENT_NAMES.some((environmentName) => environmentName === value);
}

export function resolveEnvironmentName(value: string | undefined): EnvironmentName {
  if (value === undefined) {
    return "development";
  }

  if (isEnvironmentName(value)) {
    return value;
  }

  throw new Error(`Unsupported environment: ${value}`);
}
