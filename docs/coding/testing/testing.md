# Testing Standards

Version: 1.0

Status: Frozen

# Philosophy

Testing protects business logic.

The most important workflows receive the highest testing priority.

# Testing Pyramid

Unit Tests

↓

Integration Tests

↓

End-to-End Tests

# Unit Tests

Test

Business logic

Utilities

Services

Validation

Unit tests should execute quickly.

# Integration Tests

Test

Repositories

Database interactions

External services

Authentication

# End-to-End Tests

Test complete user journeys.

Examples

Merchant onboarding

Create product

Place order

Verify payment

Complete order

Upgrade subscription

# Mocking

Mock

External APIs

Email

Storage

Payment providers

Do not mock business logic.

# Coverage

Prioritize

Orders

Payments

Subscriptions

Authentication

Inventory

Coverage percentage is less important than meaningful tests.

# Naming

Examples

products.service.spec.ts

orders.e2e.spec.ts

payments.integration.spec.ts

# Rules

Write tests for business-critical workflows.

Tests should be deterministic.

Avoid flaky tests.

Fix failing tests immediately.

# Status

Frozen