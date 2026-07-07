# Oja

Oja is a Turborepo monorepo for the merchant dashboard, customer storefront, backend API, and shared packages.

## Engineering Foundation

- `apps/web`: frontend application workspace
- `apps/server`: backend application workspace
- `packages/config`: shared configuration helpers
- `packages/constants`: shared constants
- `packages/types`: shared TypeScript types
- `packages/utils`: shared utilities
- `packages/ui`: shared UI package boundary
- `packages/eslint-config`: shared ESLint configuration
- `packages/prettier-config`: shared Prettier configuration
- `packages/typescript-config`: shared TypeScript configuration

## Verification

```sh
pnpm install
pnpm turbo build
pnpm turbo typecheck
pnpm turbo lint
```
