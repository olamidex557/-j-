# ADR 0001

Title

Use Turborepo as the Monorepo Build System

Status

Accepted

Date

July 2026

# Context

Oja consists of multiple applications and shared packages.

The project includes

- Merchant Dashboard
- Customer Storefront
- Backend API
- Shared UI
- Shared Configurations
- Shared Types

Managing these independently would introduce unnecessary duplication.

# Decision

Use Turborepo as the monorepo build system.

# Consequences

Positive

- Shared packages
- Faster builds through caching
- Consistent dependency management
- Easier code sharing
- Scalable repository structure

Negative

- Slightly steeper learning curve
- More initial configuration

# Alternatives Considered

Separate repositories

Nx

Lerna

# Outcome

Accepted