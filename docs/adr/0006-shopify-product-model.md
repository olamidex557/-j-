# ADR 0006

Title

Adopt a Shopify-Inspired Product Data Model

Status

Accepted

Date

July 2026

# Context

Products may contain

- Multiple images
- Multiple options
- Multiple variants
- Independent inventory
- Variant-specific pricing

A simplified schema would become difficult to extend.

# Decision

Use a normalized commerce model consisting of

Products

Product Images

Product Options

Product Option Values

Product Variants

Variant Option Values

# Consequences

Positive

- Scalable product catalog
- Flexible inventory management
- Future-ready
- Industry-standard design

Negative

- Slightly more complex initial implementation

# Alternatives Considered

Single products table

JSON-based variants

Simplified variant model

# Outcome

Accepted