# TypeScript Standards

Version: 1.0

Status: Frozen

# Philosophy

Type safety is mandatory.

The compiler should detect problems before runtime.

# Compiler

Strict Mode enabled.

No exceptions.

# Types

Prefer explicit types.

Avoid implicit any.

Prefer type inference only when obvious.

# Interfaces

Use interfaces for object contracts.

Use type aliases for

Union types

Mapped types

Utility types

Function signatures

# Nullability

Handle

null

undefined

explicitly.

Avoid unsafe assertions.

# Functions

Keep functions small.

Prefer one responsibility.

Limit parameters.

Prefer objects over long parameter lists.

# Async

Use async/await.

Avoid promise chains.

Always handle errors.

# Enums

Use enums only for fixed business values.

Examples

OrderStatus

SubscriptionPlan

PaymentStatus

# Constants

Declare immutable values using const.

Avoid magic numbers.

Extract reusable values into constants.

# Casting

Avoid unsafe casting.

Never cast simply to silence the compiler.

# Error Handling

Throw domain-specific errors.

Catch errors at application boundaries.

Never swallow exceptions.

# Generics

Use only when they improve readability.

Avoid unnecessary complexity.

# Comments

Explain why.

Avoid explaining what obvious code already communicates.

# Rules

No any.

No ts-ignore without documented justification.

No duplicated types.

Prefer reusable types.

Type definitions belong close to the feature that owns them.

# Status

Frozen