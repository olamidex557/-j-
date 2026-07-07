# ADR 0004

Title

Use Neon PostgreSQL

Status

Accepted

Date

July 2026

# Context

Oja requires a relational database capable of handling transactional commerce data.

The solution should support modern developer workflows and production scalability.

# Decision

Use Neon PostgreSQL as the primary database.

Prisma is the ORM.

# Consequences

Positive

- Managed PostgreSQL
- Automatic backups
- Branching support
- Excellent Prisma compatibility
- Production-ready

Negative

- Managed service dependency

# Alternatives Considered

Supabase PostgreSQL

Railway PostgreSQL

Self-hosted PostgreSQL

# Outcome

Accepted