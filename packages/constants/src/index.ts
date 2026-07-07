export const ENVIRONMENT_NAMES = ["development", "staging", "production"] as const;

export type EnvironmentName = (typeof ENVIRONMENT_NAMES)[number];
