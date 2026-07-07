# File Structure

Version: 1.0

Status: Frozen

# Philosophy

Every directory should have a clear responsibility.

Files should be easy to locate without guessing.

The repository is organized by business domains rather than technical layers.

# Monorepo Structure

apps/

packages/

docs/

tooling/

Each top-level directory has a single responsibility.

# Applications

apps/

dashboard

Merchant dashboard.

storefront

Customer storefront.

server

NestJS backend.

# Shared Packages

packages/

ui

Shared UI components.

config

Shared configurations.

types

Shared TypeScript types.

utils

Shared utilities.

# Backend Structure

src/

modules/

platform/

commerce/

configuration/

system/

shared/

Each module owns

Controller

Service

Repository

DTO

Schemas

Types

Module

Tests

# Frontend Structure

src/

app/

components/

features/

hooks/

lib/

providers/

styles/

types/

utils/

Features own their business logic.

Shared components remain generic.

# Feature Structure

Example

products/

components/

hooks/

services/

schemas/

types/

utils/

index.ts

Features should be self-contained.

# Component Structure

Component.tsx

Component.test.tsx

index.ts

Related files remain together.

# Import Order

Node modules

↓

Third-party packages

↓

Internal packages

↓

Absolute imports

↓

Relative imports

Separate each group with one blank line.

# Barrel Files

Use index.ts only for public exports.

Avoid unnecessary barrel files.

# Assets

Images

Fonts

Icons

Logos

Stored inside dedicated assets directories.

# Configuration Files

Keep configuration at the project root.

Examples

eslint

prettier

typescript

tailwind

turbo

# Rules

Do not create deeply nested directories.

Prefer explicit folder names.

Remove unused files.

Keep modules independent.

# Status

Frozen