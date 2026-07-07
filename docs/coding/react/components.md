# React Standards

Version: 1.0

Status: Frozen

# Philosophy

React components should be predictable, reusable, and focused.

Each component should solve one problem.

# Component Types

Presentational Components

Responsible for rendering UI only.

No business logic.

Examples

Button

Card

Badge

Input

---

Feature Components

Contain feature-specific logic.

Examples

ProductForm

OrderTable

CheckoutSummary

---

Layout Components

Define page structure.

Examples

DashboardLayout

AuthLayout

StorefrontLayout

# Component Rules

One component.

One responsibility.

Avoid large components.

Extract repeated UI into reusable components.

# State Management

Local State

React hooks.

Feature State

TanStack Query.

Global UI State

Zustand.

Server state must never be duplicated in global state.

# Props

Keep props minimal.

Prefer objects when passing many related values.

Avoid excessive prop drilling.

# Hooks

Custom hooks begin with

use

Examples

useProducts()

useCheckout()

useOrders()

Hooks contain reusable logic.

Hooks never return JSX.

# Data Fetching

Use TanStack Query.

Avoid manual fetch calls inside components.

Use mutations for writes.

Use queries for reads.

# Forms

Use React Hook Form.

Validate using Zod.

Business validation occurs on the backend.

# Component Size

Target

Less than 200 lines.

Split large components into smaller ones.

# Side Effects

Use useEffect only when necessary.

Avoid unnecessary effects.

Derived values belong in useMemo or normal variables.

# Error Boundaries

Critical sections should use Error Boundaries.

# Accessibility

Every interactive component supports

Keyboard navigation

Focus states

Screen readers

ARIA where appropriate.

# Rules

No business logic inside UI components.

No API calls directly inside components.

No duplicated components.

Prefer composition over inheritance.

# Status

Frozen