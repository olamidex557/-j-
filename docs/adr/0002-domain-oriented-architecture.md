# ADR 0002

Title

Organize the Project by Business Domains

Status

Accepted

Date

July 2026

# Context

Traditional layer-based folder structures become difficult to navigate as projects grow.

The same business concept becomes scattered across many folders.

# Decision

Organize Oja by business domains.

Platform

Commerce

Configuration

System

Every layer of the application follows the same structure.

Documentation

Backend

API

Tests

Future Mobile App

# Consequences

Positive

- Easier navigation
- Better scalability
- Clear ownership
- Reduced coupling
- Faster onboarding

Negative

- Requires discipline
- Slightly different from many tutorials

# Alternatives Considered

Layer-first architecture

Feature folders without domains

# Outcome

Accepted